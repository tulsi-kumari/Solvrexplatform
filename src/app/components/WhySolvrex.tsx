const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2L2 7v6l8 5 8-5V7L10 2z" stroke="#2563EB" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M2 7l8 5 8-5" stroke="#2563EB" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    title: "Practical Solutions",
    desc: "We skip the theory and go straight to what creates results. Every recommendation is grounded in execution — not just strategy.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="8" stroke="#2563EB" strokeWidth="1.5" />
        <path d="M10 6v4l3 3" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Transparent Communication",
    desc: "We keep you fully informed at every step — no surprises, no jargon. You always know exactly what we're doing and why.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="3" width="6" height="6" rx="1" stroke="#2563EB" strokeWidth="1.5" />
        <rect x="11" y="3" width="6" height="6" rx="1" stroke="#2563EB" strokeWidth="1.5" />
        <rect x="3" y="11" width="6" height="6" rx="1" stroke="#2563EB" strokeWidth="1.5" />
        <rect x="11" y="11" width="6" height="6" rx="1" stroke="#2563EB" strokeWidth="1.5" />
      </svg>
    ),
    title: "Technology Driven",
    desc: "We integrate the right tools and platforms into every engagement — ensuring solutions that are scalable, efficient, and built to last.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 17c-4-2-7-5-7-9a7 7 0 0114 0c0 4-3 7-7 9z" stroke="#2563EB" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M7 10l2 2 4-4" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Long-Term Partnership",
    desc: "We build relationships, not just engagements. Our goal is to become a trusted resource you return to as your needs evolve.",
  },
];

export function WhySolvrex() {
  return (
    <section className="py-28 bg-[#0F0F0F]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p
            className="text-blue-400 mb-3"
            style={{ fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}
          >
            Why Solvrex
          </p>
          <h2
            className="text-white"
            style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.2 }}
          >
            The principles behind how we work
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto" style={{ lineHeight: 1.7 }}>
            We built Solvrex around a set of values that guide every client interaction — from the first conversation to long after the project ends.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="p-6 rounded-xl border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/8 transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-5">
                {f.icon}
              </div>
              <h3
                className="text-white mb-2"
                style={{ fontSize: "0.975rem", fontWeight: 600 }}
              >
                {f.title}
              </h3>
              <p className="text-gray-400" style={{ fontSize: "0.85rem", lineHeight: 1.65 }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
