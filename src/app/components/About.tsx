export function About() {
  return (
    <div className="flex-1 flex flex-col bg-[#FFFFFF] font-['Montserrat',sans-serif]">
      {/* Main content area */}
      <div className="flex-1 flex items-center px-5 md:px-16 lg:px-12 m-[0px]">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 lg:gap-16 m-[0px] p-[0px]">
          {/* BIO */}
          <div>
            <h3
              className="text-[#a3a3a3] uppercase tracking-widest mb-6"
              style={{ fontSize: "16px", fontWeight: 700, letterSpacing: "0.1em" }}
            >
              BIO
            </h3>
            <div className="space-y-4">
              <p
                className="text-[#1a1a1a]"
                style={{ fontSize: "13px", fontWeight: 500, lineHeight: 1.65 }}
              >
                CS Undergraduate | UI/UX Designer | Animator. Architecting digital experiences with logic and motion. 26 years old.
              
              </p>
              <p
                className="text-[#1a1a1a]"
                style={{ fontSize: "13px", fontWeight: 500, lineHeight: 1.65 }}
              >
                Currently based in Addis Ababa, Ethiopia.
              </p>
            </div>
          </div>

          {/* PERSONAL STORY */}
          <div>
            <h3
              className="text-[#a3a3a3] uppercase tracking-widest mb-6"
              style={{ fontSize: "16px", fontWeight: 700, letterSpacing: "0.1em" }}
            >
              PERSONAL STORY
            </h3>
            <div className="space-y-4">
              <p
                className="text-[#1a1a1a]"
                style={{ fontSize: "13px", fontWeight: 500, lineHeight: 1.65 }}
              >
                I actually got into UI/UX design through animation. I'm a CS major, but a while back I took an animation course run by the US Embassy. That was my first real exposure to 2D animation and interface design, and I ended up teaming up with some friends to work on a few projects just for fun.

                I got completely hooked. I realized I care way more about the visual, interactive side of things than the underlying code. Since then, I've been fully focused on design and 2D animation—basically figuring out how to make apps look good and feel great to use.

              </p>
              <p
                className="text-[#1a1a1a]"
                style={{ fontSize: "13px", fontWeight: 500, lineHeight: 1.65 }}
              >
                Right now, I'm balancing my coursework with building and designing my own apps. Ultimately, I'm looking for a full-time role where I can pour all my energy into UI/UX and motion.
              </p>
            </div>
          </div>

          {/* CONNECT */}
          <div>
            <h3
              className="text-[#a3a3a3] uppercase tracking-widest mb-6"
              style={{ fontSize: "16px", fontWeight: 700, letterSpacing: "0.1em" }}
            >
              CONNECT
            </h3>
            <div className="space-y-4">
              <p
                className="text-[#1a1a1a]"
                style={{ fontSize: "13px", fontWeight: 500, lineHeight: 1.65 }}
              >
                Looking for full-time opportunities.
              </p>
              <p
                className="text-[#1a1a1a]"
                style={{ fontSize: "13px", fontWeight: 500, lineHeight: 1.65 }}
              >
                For business inquiries, email me at{" "}
                <a
                  href="mailto:obaiddoman@icloud.com"
                  className="underline hover:text-[#000]"
                  style={{ transition: "color 0.3s ease" }}
                >
                  obaiddoman@icloud.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer social links */}
        <div className="py-10 flex justify-center gap-8 m-[0px]">
          {[
            {
              name: "instagram",
              url: "https://www.instagram.com/_itzubby",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              ),
            },
            {
              name: "linkedin",
              url: "https://www.linkedin.com/in/obaid-doman-a4254332b",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              ),
            },
            {
              name: "github",
              url: "https://github.com/itzubby",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                  <path d="M9 18c-4.51 2-5-2-7-2"/>
                </svg>
              ),
            },
            {
              name: "telegram",
              url: "https://t.me/itzubby",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m22 2-7 20-4-9-9-4Z"/>
                  <path d="M22 2 11 13"/>
                </svg>
              ),
            },
          ].map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="text-[#a3a3a3] hover:text-[#000] hover:-translate-y-1"
              style={{ transition: "all 0.3s ease" }}
            >
              {social.icon}
            </a>
          ))}
        </div>
    </div>
  );
}