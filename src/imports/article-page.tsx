Generate a minimalist, brutalist Article Detail page using React and Tailwind CSS. The secret to this layout is a "curtain reveal" scroll effect where the main content slides OVER the title.

CRITICAL ARCHITECTURE (The Curtain Effect):

The Title Wrapper: Create a div with the classes sticky top-24 z-0 w-full px-8 md:px-16 pb-32. Inside this, put a massive h1 that says "The Creative Website Guide" in a very large, bold, tightly tracked sans-serif font.

The Content Wrapper: Immediately below the title wrapper, create a div with the classes relative z-10 bg-[#FFFFFF] w-full pt-16 pb-32. It MUST have a solid white background and a higher z-index.

The Content Grid (Inside the Content Wrapper):
Inside the white Content Wrapper, create a 2-column grid: grid grid-cols-1 md:grid-cols-12 gap-16 px-8 md:px-16.

Left Column (col-span-4):

Make this column sticky (sticky top-12 h-fit).

Add an "ABOUT" label (uppercase, very small, bold).

Add a short summary paragraph.

Below the paragraph, create a metadata list. Use a 2-column layout for each row (Label on left, Value on right). The labels are: PUBLISH DATE, AUTHORS, READING TIME, CATEGORIES, SHARE.

Add horizontal borders (border-t, border-b) to separate the metadata section cleanly.

Right Content Area (col-span-8):

Add an "ARTICLE" label at the top.

Create rich text content sections:

Section 1: "Background" (bold subheading) followed by a short paragraph and an ordered list (1 to 7).

Section 2: "Typography" (massive bold subheading).

Under Typography, add a large placeholder box w-full aspect-video bg-[#1a1a1a] flex items-center justify-center text-white.

Style Rules: Keep it strictly black and white #FFFFFF and #1A1A1A. Use crisp, sharp edges with no rounded corners.

2. The Complete Code
If you want to skip the AI entirely and just drop the perfect, working layout into your app, create a new file called ArticlePage.tsx (or whatever you'd like to name it) and paste this in.

It has the exact curtain scroll effect, the perfectly proportioned sticky title, and the 2-column layout from your video.

TypeScript
export default function ArticlePage() {
  return (
    <div className="relative w-full min-h-screen bg-[#FFFFFF] font-['Montserrat',sans-serif]">
      
      {/* 🔥 1. THE STICKY TITLE (Hides in the background) 🔥 */}
      <div className="sticky top-24 z-0 w-full px-8 md:px-16 lg:px-24 pb-32">
        <h1 
          className="text-[#1a1a1a] font-bold tracking-tighter leading-none"
          style={{ fontSize: "clamp(48px, 8vw, 120px)" }}
        >
          The Creative Website Guide
        </h1>
      </div>

      {/* 🔥 2. THE SLIDING CURTAIN (Slides over the title) 🔥 */}
      <div className="relative z-10 bg-[#FFFFFF] w-full pt-16 pb-32 min-h-screen">
        
        {/* Main 2-Column Grid */}
        <div className="w-full max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 px-8 md:px-16 lg:px-24">
          
          {/* LEFT COLUMN: Metadata Sidebar */}
          <div className="md:col-span-4 flex flex-col items-start h-fit md:sticky md:top-12">
            
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#1a1a1a] mb-4">
              About
            </h4>
            <p className="text-sm font-medium text-[#444] leading-relaxed mb-12 max-w-[280px]">
              The methodology behind crafting websites that push boundaries.
            </p>

            {/* Metadata Table */}
            <div className="w-full border-t border-[#1a1a1a] py-6 flex flex-col gap-4 text-sm font-semibold text-[#1a1a1a]">
              <div className="flex justify-between items-start">
                <span className="uppercase text-xs tracking-wider w-1/2">Publish Date:</span>
                <span className="w-1/2 text-right font-medium">Jan 11, 2026</span>
              </div>
              <div className="flex justify-between items-start">
                <span className="uppercase text-xs tracking-wider w-1/2">Authors:</span>
                <span className="w-1/2 text-right uppercase leading-tight">Alexander<br/>Lokasasmita</span>
              </div>
              <div className="flex justify-between items-start">
                <span className="uppercase text-xs tracking-wider w-1/2">Reading Time:</span>
                <span className="w-1/2 text-right font-medium">11 min read</span>
              </div>
              <div className="flex justify-between items-start">
                <span className="uppercase text-xs tracking-wider w-1/2">Categories:</span>
                <div className="w-1/2 flex justify-end gap-2 flex-wrap">
                  <span className="border border-gray-300 px-2 py-1 text-[10px] uppercase">Guides</span>
                  <span className="border border-gray-300 px-2 py-1 text-[10px] uppercase">Webdev</span>
                </div>
              </div>
              <div className="flex justify-between items-start pt-2 border-t border-gray-200 mt-2">
                <span className="uppercase text-xs tracking-wider w-1/2">Share:</span>
                <span className="w-1/2 text-right font-medium cursor-pointer hover:underline">COPY LINK</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Article Content */}
          <div className="md:col-span-8 flex flex-col pt-2 md:pt-0">
            
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#1a1a1a] mb-8">
              Article
            </h4>

            {/* Section 1 */}
            <div className="mb-16">
              <h2 className="text-xl font-bold text-[#1a1a1a] mb-6">Background</h2>
              <p className="text-base text-[#222] font-medium leading-relaxed mb-6">
                This was a 7 day series covering essential web design principles:
              </p>
              <ol className="list-decimal pl-5 flex flex-col gap-3 text-base text-[#222] font-medium">
                <li>Typography</li>
                <li>Colors</li>
                <li>Grids & Layouts</li>
                <li>Animations</li>
                <li>Inspiration</li>
                <li>Practice</li>
                <li>The Journey</li>
              </ol>
            </div>

            {/* Section 2 */}
            <div className="mb-16">
              <h2 className="text-[clamp(32px,5vw,64px)] font-bold text-[#1a1a1a] tracking-tight leading-none mb-10">
                Typography
              </h2>
              
              {/* Image Placeholder */}
              <div className="w-full aspect-[16/9] bg-[#1a1a1a] flex flex-col items-center justify-center text-white mb-10">
                <h3 className="text-5xl font-bold mb-2">Typography</h3>
                <p className="text-sm italic text-gray-400">(It's more than just pretty fonts)</p>
              </div>

              <p className="text-base text-[#222] font-medium leading-relaxed mb-6">
                Typography sets the foundation of any creative website. Its what shapes first impressions and carries your message before anything else does. If your type doesn't match your story and identity, the whole design falls apart.
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}