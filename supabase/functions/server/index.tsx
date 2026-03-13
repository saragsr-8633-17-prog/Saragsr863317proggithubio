import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import { createClient } from "jsr:@supabase/supabase-js@2.49.8";

const app = new Hono().basePath('/make-server-d0dae629');

app.use('*', logger(console.log));
app.use('*', cors({
  origin: '*',
  allowHeaders: ['*'],
  allowMethods: ['POST', 'GET', 'OPTIONS', 'DELETE', 'PUT'],
}));

const getSupabase = () => {
  const url = Deno.env.get('SUPABASE_URL');
  const key = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
  if (!url || !key) {
    throw new Error('Missing Supabase environment variables');
  }
  return createClient(url, key);
};

const BUCKET_NAME = 'make-d0dae629-media';

// Idempotent bucket creation
const ensureBucket = async (supabase: any) => {
  const { data: buckets } = await supabase.storage.listBuckets();
  const exists = buckets?.some((b: any) => b.name === BUCKET_NAME);
  if (!exists) {
    await supabase.storage.createBucket(BUCKET_NAME, { public: false });
  }
};

app.get('/init', async (c) => {
  try {
    const supabase = getSupabase();
    await ensureBucket(supabase);
    return c.json({ success: true });
  } catch (err: any) {
    return c.json({ error: err.message }, 500);
  }
});

// Upload image
app.post('/upload', async (c) => {
  try {
    const supabase = getSupabase();
    await ensureBucket(supabase);

    const body = await c.req.parseBody();
    const file = body['file'];
    
    if (!file || !(file instanceof File)) {
      return c.json({ error: 'No valid file uploaded' }, 400);
    }

    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
    const arrayBuffer = await file.arrayBuffer();

    const { data, error } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(fileName, arrayBuffer, {
        contentType: file.type,
        upsert: false
      });

    if (error) throw error;

    // Immediately get a signed url so the frontend can preview it
    const { data: signedUrlData, error: signedUrlError } = await supabase.storage
      .from(BUCKET_NAME)
      .createSignedUrl(fileName, 60 * 60 * 24 * 7); // 7 days

    if (signedUrlError) throw signedUrlError;

    return c.json({ 
      success: true, 
      fileName: fileName,
      url: signedUrlData.signedUrl
    });
  } catch (err: any) {
    console.error("Upload error:", err);
    return c.json({ error: err.message }, 500);
  }
});

// List images
app.get('/images', async (c) => {
  try {
    const supabase = getSupabase();
    await ensureBucket(supabase);

    const { data: files, error } = await supabase.storage
      .from(BUCKET_NAME)
      .list();

    if (error) throw error;
    if (!files || files.length === 0) {
      return c.json({ images: [] });
    }

    // Generate signed URLs for all
    const paths = files.map(f => f.name);
    const { data: signedUrls, error: signError } = await supabase.storage
      .from(BUCKET_NAME)
      .createSignedUrls(paths, 60 * 60 * 24 * 7); // 7 days

    if (signError) throw signError;

    const images = signedUrls?.map((su: any, i: number) => ({
      fileName: files[i].name,
      url: su.signedUrl,
      created_at: files[i].created_at
    })) || [];

    return c.json({ images });
  } catch (err: any) {
    console.error("List error:", err);
    return c.json({ error: err.message }, 500);
  }
});

app.delete('/images/:fileName', async (c) => {
  try {
    const fileName = c.req.param('fileName');
    const supabase = getSupabase();
    const { error } = await supabase.storage
      .from(BUCKET_NAME)
      .remove([fileName]);

    if (error) throw error;
    return c.json({ success: true });
  } catch (err: any) {
    console.error("Delete error:", err);
    return c.json({ error: err.message }, 500);
  }
});

// Settings in KV
app.get('/settings/images', async (c) => {
  try {
    const supabase = getSupabase();
    // Use KV store from database
    const { data, error } = await supabase.from("kv_store_d0dae629")
      .select("value")
      .eq("key", "site_image_assignments")
      .maybeSingle();

    if (error) throw error;
    const assignments = data?.value || {}; // { "mtech-cover": "123.jpg" }
    
    // Generate signed URLs for assigned images
    const activePaths = Object.values(assignments).filter(Boolean) as string[];
    const uniquePaths = [...new Set(activePaths)];
    
    let urlMap: Record<string, string> = {};
    if (uniquePaths.length > 0) {
      const { data: signedUrls, error: signError } = await supabase.storage
        .from(BUCKET_NAME)
        .createSignedUrls(uniquePaths, 60 * 60 * 24 * 7); // 7 days

      if (!signError && signedUrls) {
        signedUrls.forEach((su: any, i: number) => {
          urlMap[uniquePaths[i]] = su.signedUrl;
        });
      }
    }

    // Map slot keys to signed URLs
    const resolvedAssignments: Record<string, string> = {};
    for (const [slot, path] of Object.entries(assignments)) {
      if (typeof path === 'string' && urlMap[path]) {
        resolvedAssignments[slot] = urlMap[path];
      }
    }

    return c.json({ assignments, resolved: resolvedAssignments });
  } catch (err: any) {
    console.error("Get settings error:", err);
    return c.json({ error: err.message }, 500);
  }
});

app.post('/settings/images', async (c) => {
  try {
    const body = await c.req.json(); // { slot: "mtech-cover", fileName: "123.jpg" }
    const supabase = getSupabase();
    
    const { data: currentData } = await supabase.from("kv_store_d0dae629")
      .select("value")
      .eq("key", "site_image_assignments")
      .maybeSingle();
      
    const assignments = currentData?.value || {};
    if (body.fileName) {
      assignments[body.slot] = body.fileName;
    } else {
      delete assignments[body.slot];
    }
    
    await supabase.from("kv_store_d0dae629").upsert({
      key: "site_image_assignments",
      value: assignments
    });

    return c.json({ success: true, assignments });
  } catch (err: any) {
    console.error("Save settings error:", err);
    return c.json({ error: err.message }, 500);
  }
});

// Contact form submission
app.post('/contact', async (c) => {
  try {
    const body = await c.req.json();
    const name = String(body?.name ?? '').trim();
    const email = String(body?.email ?? '').trim();
    const subject = String(body?.subject ?? '').trim();
    const message = String(body?.message ?? '').trim();

    if (!name || !email || !message) {
      return c.json({ error: 'Missing required fields' }, 400);
    }

    const supabase = getSupabase();

    const { data: currentData, error: readError } = await supabase
      .from('kv_store_d0dae629')
      .select('value')
      .eq('key', 'contact_messages')
      .maybeSingle();

    if (readError) throw readError;

    const messages = Array.isArray(currentData?.value) ? currentData.value : [];

    messages.unshift({
      id: crypto.randomUUID(),
      name,
      email,
      subject,
      message,
      createdAt: new Date().toISOString(),
    });

    const capped = messages.slice(0, 500);

    const { error: writeError } = await supabase
      .from('kv_store_d0dae629')
      .upsert({ key: 'contact_messages', value: capped });

    if (writeError) throw writeError;

    // Optional email notification via Resend
    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    const contactToEmail = Deno.env.get('CONTACT_TO_EMAIL');
    const contactFromEmail = Deno.env.get('CONTACT_FROM_EMAIL') || 'Portfolio Contact <onboarding@resend.dev>';

    let emailed = false;
    if (resendApiKey && contactToEmail) {
      const emailRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: contactFromEmail,
          to: [contactToEmail],
          subject: `[Portfolio Contact] ${subject || 'New message'}`,
          text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || '(none)'}\n\nMessage:\n${message}`,
        }),
      });

      if (emailRes.ok) {
        emailed = true;
      } else {
        const errText = await emailRes.text();
        console.error('Resend error:', errText);
      }
    }

    return c.json({ success: true, emailed });
  } catch (err: any) {
    console.error('Contact submit error:', err);
    return c.json({ error: err.message }, 500);
  }
});

Deno.serve(app.fetch);
