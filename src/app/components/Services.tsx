const services = [
  {
    tag: "For Individuals",
    title: "International Career Support",
    desc: "We help international professionals and students navigate unfamiliar job markets with clarity and confidence — from resume to offer.",
    features: [
      { label: "Resume Optimization", detail: "Tailored to local market standards and ATS systems" },
      { label: "Job Search Support", detail: "Strategy, platforms, and targeted outreach planning" },
      { label: "Application Management", detail: "Tracking, follow-ups, and deadline coordination" },
      { label: "Career Guidance", detail: "Clarity on positioning, roles, and long-term direction" },
    ],
    accent: "#2563EB",
    bg: "#EFF6FF",
  },
  {
    tag: "For Businesses",
    title: "Business Digital Enablement",
    desc: "We work with small businesses and growing organizations to build reliable digital infrastructure and improve how they operate.",
    features: [
      { label: "Digital Presence Setup", detail: "Websites, profiles, and brand credibility online" },
      { label: "Technology Consulting", detail: "Tool selection, integration, and implementation" },
      { label: "Process Improvement", detail: "Identifying inefficiencies and automating workflows" },
      { label: "Operational Support", detail: "Ongoing advisory and hands-on assistance" },
    ],
    accent: "#059669",
    bg: "#ECFDF5",
  },
];

export function Services() {
  return (
    <section id="services" className="py-28 bg-gray-50/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p
            className="text-blue-600 mb-3"
            style={{ fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}
          >
            What We Do
          </p>
          <h2
            className="text-[#0F0F0F]"
            style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.2 }}
          >
            Two focused service areas
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto" style={{ lineHeight: 1.7 }}>
            Built around the needs of individuals and businesses who want structured support, not one-size-fits-all solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-gray-100 bg-white p-8 hover:shadow-sm transition-shadow"
            >
              <span
                className="inline-flex items-center px-2.5 py-1 rounded-full mb-5"
                style={{ backgroundColor: s.bg, color: s.accent, fontSize: "0.75rem", fontWeight: 600 }}
              >
                {s.tag}
              </span>

              <h3
                className="text-[#0F0F0F] mb-3"
                style={{ fontSize: "1.35rem", fontWeight: 700, letterSpacing: "-0.02em" }}
              >
                {s.title}
              </h3>
              <p className="text-gray-500 mb-8" style={{ fontSize: "0.925rem", lineHeight: 1.7 }}>
                {s.desc}
              </p>

              <div className="space-y-4">
                {s.features.map((f) => (
                  <div key={f.label} className="flex items-start gap-3">
                    <div
                      className="mt-1 w-5 h-5 rounded flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: s.bg }}
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2 2 4-4" stroke={s.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[#0F0F0F]" style={{ fontSize: "0.9rem", fontWeight: 500 }}>
                        {f.label}
                      </p>
                      <p className="text-gray-400" style={{ fontSize: "0.825rem", lineHeight: 1.5 }}>
                        {f.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 transition-colors"
                  style={{ fontSize: "0.875rem", fontWeight: 500, color: s.accent }}
                >
                  Learn more
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke={s.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
