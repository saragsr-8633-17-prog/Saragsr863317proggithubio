import React from "react";

// Delete this interface block if you are using standard .jsx instead of .tsx
interface ArticleLayoutProps {
  title: string;
  summary: string;
  date: string;
  author: string;
  readingTime: string;
  categories: string[];
  children: React.ReactNode;
}

export default function ArticleLayout({
  title,
  summary,
  date,
  author,
  readingTime,
  categories,
  children,
}: ArticleLayoutProps) {
  return (
    <div className="relative w-full min-h-screen bg-white font-['Montserrat',sans-serif]">
      
      {/* 🔥 1. THE STICKY TITLE (Dynamic) 🔥 */}
      <div className="sticky top-24 z-0 w-full px-8 md:px-16 lg:px-24 pb-32">
        <h1 
          className="text-[#1a1a1a] font-bold tracking-tighter leading-[0.9]"
          style={{ fontSize: "clamp(42px, 7vw, 100px)" }}
        >
          {title}
        </h1>
      </div>

      {/* 🔥 2. THE SLIDING CURTAIN (Solid white background!) 🔥 */}
      <div className="relative z-10 bg-white w-full pt-16 pb-32 min-h-screen">
        
        <div className="w-full max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 px-8 md:px-16 lg:px-24">
          
          {/* LEFT COLUMN: Dynamic Metadata Sidebar */}
          <div className="md:col-span-4 flex flex-col items-start h-fit md:sticky md:top-12">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#1a1a1a] mb-4">
              About
            </h4>
            <p className="text-sm font-medium text-[#444] leading-relaxed mb-12 max-w-[280px]">
              {summary}
            </p>

            {/* Metadata Table */}
            <div className="w-full border-t border-[#1a1a1a] py-6 flex flex-col gap-4 text-sm font-semibold text-[#1a1a1a]">
              <div className="flex justify-between items-start">
                <span className="uppercase text-xs tracking-wider w-1/2">Posted:</span>
                <span className="w-1/2 text-right font-medium">{date}</span>
              </div>
              <div className="flex justify-between items-start">
                <span className="uppercase text-xs tracking-wider w-1/2">Author:</span>
                <span className="w-1/2 text-right uppercase leading-tight">{author}</span>
              </div>
              <div className="flex justify-between items-start">
                <span className="uppercase text-xs tracking-wider w-1/2">Reading Time:</span>
                <span className="w-1/2 text-right font-medium">{readingTime}</span>
              </div>
              <div className="flex justify-between items-start">
                <span className="uppercase text-xs tracking-wider w-1/2">Categories:</span>
                <div className="w-1/2 flex justify-end gap-2 flex-wrap">
                  {categories.map((category) => (
                    <span key={category} className="border border-gray-300 px-2 py-1 text-[10px] uppercase">
                      {category}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-between items-start pt-2 border-t border-gray-200 mt-2">
                <span className="uppercase text-xs tracking-wider w-1/2">Share:</span>
                <span className="w-1/2 text-right font-medium cursor-pointer hover:underline" onClick={() => navigator.clipboard.writeText(window.location.href)}>
                  COPY LINK
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: The Article Content */}
          <div className="md:col-span-8 flex flex-col pt-2 md:pt-0 max-w-[800px]">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#1a1a1a] mb-12">
              Article
            </h4>
            
            {/* This is where your specific article text gets injected! */}
            {children}

          </div>
        </div>
      </div>
    </div>
  );
}