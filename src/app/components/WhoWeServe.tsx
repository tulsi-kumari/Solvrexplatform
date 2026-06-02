const audiences = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="8" r="4" stroke="#2563EB" strokeWidth="1.5" />
        <path d="M3 19c0-4 3.6-7 8-7s8 3 8 7" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 4l2 2-2 2" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "International Students",
    desc: "Recent graduates and students navigating an unfamiliar job market, building a professional presence from scratch in a new country.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="5" width="16" height="12" rx="2" stroke="#2563EB" strokeWidth="1.5" />
        <path d="M7 9h8M7 13h5" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Job Seekers & Professionals",
    desc: "Experienced professionals looking to transition roles, re-enter the market, or accelerate their career with a sharper strategy.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 16V8l7-4 7 4v8" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="8" y="12" width="6" height="4" stroke="#2563EB" strokeWidth="1.5" />
      </svg>
    ),
    title: "Small & Medium Businesses",
    desc: "Established businesses that need to modernize their operations, establish a credible digital presence, or solve specific operational challenges.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 3l2.5 5 5.5.8-4 3.9.9 5.5L11 15.8l-4.9 2.4.9-5.5L3 8.8l5.5-.8L11 3z" stroke="#2563EB" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    title: "Startups & Growing Organizations",
    desc: "Early-stage companies and fast-growing teams that need reliable technology foundations and operational support without enterprise overhead.",
  },
];

export function WhoWeServe() {
  return (
    <section id="who-we-serve" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p
            className="text-blue-600 mb-3"
            style={{ fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}
          >
            Who We Serve
          </p>
          <h2
            className="text-[#0F0F0F]"
            style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.2 }}
          >
            Built for people and organizations at a turning point
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto" style={{ lineHeight: 1.7 }}>
            We work best with clients who are ready to take deliberate action and want a partner who will hold themselves accountable alongside them.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {audiences.map((a) => (
            <div
              key={a.title}
              className="p-6 rounded-xl border border-gray-100 hover:border-blue-100 hover:bg-blue-50/30 transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-5 group-hover:bg-blue-100 transition-colors">
                {a.icon}
              </div>
              <h3
                className="text-[#0F0F0F] mb-2"
                style={{ fontSize: "0.975rem", fontWeight: 600 }}
              >
                {a.title}
              </h3>
              <p className="text-gray-500" style={{ fontSize: "0.85rem", lineHeight: 1.65 }}>
                {a.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
