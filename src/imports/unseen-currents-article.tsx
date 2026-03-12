export default function UnseenCurrentsArticle() {
  return (
    <div className="relative w-full min-h-screen bg-[#FFFFFF] font-['Montserrat',sans-serif]">
      
      {/* 🔥 1. THE STICKY TITLE 🔥 */}
      <div className="sticky top-24 z-0 w-full px-8 md:px-16 lg:px-24 pb-32">
        <h1 
          className="text-[#1a1a1a] font-bold tracking-tighter leading-[0.9]"
          style={{ fontSize: "clamp(42px, 7vw, 100px)" }}
        >
          Unseen Currents: How Media and AI Shape Us Before We Notice
        </h1>
      </div>

      {/* 🔥 2. THE SLIDING CURTAIN 🔥 */}
      <div className="relative z-10 bg-[#FFFFFF] w-full pt-16 pb-32 min-h-screen">
        
        {/* Main 2-Column Grid */}
        <div className="w-full max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 px-8 md:px-16 lg:px-24">
          
          {/* LEFT COLUMN: Metadata Sidebar */}
          <div className="md:col-span-4 flex flex-col items-start h-fit md:sticky md:top-12">
            
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#1a1a1a] mb-4">
              About
            </h4>
            <p className="text-sm font-medium text-[#444] leading-relaxed mb-12 max-w-[280px]">
              A reflection on how technology operates silently in the background, reshaping our habits, creativity, and values before we even realize it.
            </p>

            {/* Metadata Table */}
            <div className="w-full border-t border-[#1a1a1a] py-6 flex flex-col gap-4 text-sm font-semibold text-[#1a1a1a]">
              <div className="flex justify-between items-start">
                <span className="uppercase text-xs tracking-wider w-1/2">Posted:</span>
                <span className="w-1/2 text-right font-medium">Jan 4, 2026</span>
              </div>
              <div className="flex justify-between items-start">
                <span className="uppercase text-xs tracking-wider w-1/2">Updated:</span>
                <span className="w-1/2 text-right font-medium text-gray-500">Jan 16, 2026</span>
              </div>
              <div className="flex justify-between items-start">
                <span className="uppercase text-xs tracking-wider w-1/2">Author:</span>
                <span className="w-1/2 text-right uppercase leading-tight">Bob</span>
              </div>
              <div className="flex justify-between items-start">
                <span className="uppercase text-xs tracking-wider w-1/2">Reading Time:</span>
                <span className="w-1/2 text-right font-medium">3 min read</span>
              </div>
              <div className="flex justify-between items-start">
                <span className="uppercase text-xs tracking-wider w-1/2">Categories:</span>
                <div className="w-1/2 flex justify-end gap-2 flex-wrap">
                  <span className="border border-gray-300 px-2 py-1 text-[10px] uppercase">AI</span>
                  <span className="border border-gray-300 px-2 py-1 text-[10px] uppercase">Media</span>
                  <span className="border border-gray-300 px-2 py-1 text-[10px] uppercase">Design</span>
                </div>
              </div>
              <div className="flex justify-between items-start pt-2 border-t border-gray-200 mt-2">
                <span className="uppercase text-xs tracking-wider w-1/2">Share:</span>
                <span className="w-1/2 text-right font-medium cursor-pointer hover:underline">COPY LINK</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Article Content */}
          <div className="md:col-span-8 flex flex-col pt-2 md:pt-0 max-w-[800px]">
            
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#1a1a1a] mb-12">
              Article
            </h4>

            {/* Intro Section */}
            <div className="mb-12">
              <p className="text-lg md:text-xl text-[#222] font-medium leading-relaxed mb-6">
                Most of us assume technology changes the world only after we learn how to use it, but often the change happens before we even notice.
              </p>
              <p className="text-base text-[#444] leading-relaxed mb-6">
                Once a technology becomes part of everyday life, it fades into the background. Like air or electricity, it works silently. We only notice it when something goes wrong, during a power outage, a system failure, or a moment of sensory overload. By then, the shift has already occurred.
              </p>
              <blockquote className="border-l-4 border-[#1a1a1a] pl-6 my-8 py-2">
                <p className="text-xl font-bold italic text-[#1a1a1a]">
                  This is what Marshall McLuhan meant when he said, "the medium is the message."
                </p>
              </blockquote>
              <p className="text-base text-[#444] leading-relaxed mb-6">
                Technologies do more than carry content, they reshape how we think, feel, and behave. Electric light, for example, didn't change what we saw, but when and how long we stayed awake. Night disappeared without anyone voting for it, and society reorganized around that change long before most people reflected on it.
              </p>
            </div>

            {/* Section 1: Social Media */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] tracking-tight mb-8">
                Social Media
              </h2>
              <p className="text-base text-[#444] leading-relaxed mb-6">
                Social media seems like a tool for connection. It lets us share images, videos, music, and messages instantly with people all over the globe. In McLuhan's terms, it collapses distance and sequence, making the world feel smaller and faster.
              </p>
              <p className="text-base text-[#444] leading-relaxed mb-6">
                But social media is more than a messenger. It immerses us, emotionally and rhythmically, rather than allowing detached observation. Algorithms push content that we like, gradually shaping attention, taste, and even habits. The medium influences behavior more than the content itself.
              </p>
              <p className="text-base text-[#444] leading-relaxed mb-6">
                Many of us notice this in small ways. Some people, myself included, struggle to eat or relax without watching something, often meaningless content, just to feed the brain's craving for stimulation. Features like Spotify Wrapped take this further, turning private listening habits into public performance. Sharing them becomes a way to prove presence, to signal, to participate.
              </p>
              <blockquote className="border-l-4 border-[#1a1a1a] pl-6 my-8 py-2">
                <p className="text-lg font-bold italic text-[#1a1a1a] mb-2">
                  "That which withers in the age of mechanical reproduction is the aura of the work of art."
                </p>
                <span className="text-sm font-semibold uppercase tracking-widest">— Walter Benjamin</span>
              </blockquote>
              <p className="text-base text-[#444] leading-relaxed mb-6">
                Our experiences, once unique and intimate, now become repeatable, shareable, and curated for visibility.
              </p>
            </div>

            {/* Section 2: AI */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] tracking-tight mb-8">
                Artificial Intelligence and Creative Work
              </h2>

              {/* Graphic Placeholder (Optional) */}
              <div className="w-full aspect-[21/9] bg-[#1a1a1a] flex flex-col items-center justify-center text-white mb-10 overflow-hidden relative">
                 <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent mix-blend-overlay"></div>
                 <h3 className="text-3xl font-bold z-10 tracking-widest">A.I.</h3>
              </div>

              <p className="text-base text-[#444] leading-relaxed mb-6">
                AI represents a whole new level of technological influence. It doesn't just deliver content, it produces it. With a single prompt, you can generate text, images, animation, or even voices in seconds.
              </p>
              <p className="text-base text-[#444] leading-relaxed mb-6">
                In animation, AI automates tasks like rotoscoping, rigging, in-betweening, and backgrounds. I've used these tools under tight deadlines with peers, generating entire three-minute sequences quickly. They increase efficiency, reduce costs, and allow exploration of new styles, but they also subtly reshape values. In UI/UX design, AI can auto-generate color systems, typography, and design components. I found myself skipping foundational practices because the tools made them seem unnecessary. The medium begins to shape what I consider important or even worth doing.
              </p>
              
              <div className="bg-gray-100 p-8 my-8">
                <p className="text-base text-[#1a1a1a] leading-relaxed font-medium italic">
                  I once asked my animation instructor what his concerns were about AI taking over animation, and he said it would never happen. I insisted, asking, "What if it did?" He looked at me and said, "Why is that your concern?" I explained, "If it happened, why would I even learn animation?" 
                  <br/><br/>
                  He smiled and said, "We as humans are creative, we have abstract thought and nuanced storytelling. AI can do better in computational power and data processing, but it can't replace that. Be proud that you are creative, because humans created AI, and we can make something more creative than that."
                </p>
              </div>

              <p className="text-base text-[#444] leading-relaxed mb-6">
                Even as I nodded, I thought to myself, AI is improving every day, and it's already changing how we work, think, and create. It also blurs truth and fiction. In an information-saturated world, this puts accuracy and fabrication on equal footing, making critical engagement more necessary than ever.
              </p>
            </div>

            {/* Section 3: Conclusion */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] tracking-tight mb-8">
                Riding the Invisible Tide
              </h2>
              <p className="text-base text-[#444] leading-relaxed mb-6">
                There's no simple fix, but simply noticing how technology shapes us is already a step toward understanding. We may not be able to step outside these environments entirely, but we can learn to see them, reflect, and engage deliberately.
              </p>
              <p className="text-base text-[#444] leading-relaxed mb-6">
                Technology has always influenced us before we were aware, and it will continue to do so. The question is not whether it shapes us, but how we respond, adapt, and remain creatively human in the process.
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}