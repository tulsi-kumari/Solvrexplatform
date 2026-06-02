const upcoming = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="2" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 9h6M9 6v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    label: "Client Portal",
    detail: "A dedicated space for clients to track progress, access documents, and communicate with the team.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="6" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 16c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M13 3l2 1.5-2 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "Career Services Expansion",
    detail: "Interview coaching, LinkedIn profile optimization, and industry-specific placement support.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 2l2 4h4l-3 3 1 4-4-2-4 2 1-4-3-3h4L9 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    label: "Business Solutions Expansion",
    detail: "Deeper digital transformation offerings, including CRM setup, analytics, and team training programs.",
  },
];

export function ComingSoon() {
  return (
    <section className="py-20 bg-gray-50/80">
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-2xl border border-dashed border-gray-200 p-10 bg-white">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 text-amber-600 border border-amber-100"
                  style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.05em" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse inline-block" />
                  IN DEVELOPMENT
                </span>
              </div>
              <h2
                className="text-[#0F0F0F]"
                style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)", fontWeight: 700, letterSpacing: "-0.02em" }}
              >
                What's Coming Next
              </h2>
              <p className="text-gray-500 mt-1" style={{ fontSize: "0.9rem", lineHeight: 1.6 }}>
                We're actively building new capabilities to serve our clients better.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {upcoming.map((item) => (
              <div
                key={item.label}
                className="p-5 rounded-xl border border-dashed border-gray-200 bg-gray-50 hover:bg-white hover:border-gray-300 transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center flex-shrink-0 text-gray-400">
                    {item.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <p
                        className="text-[#0F0F0F]"
                        style={{ fontSize: "0.9rem", fontWeight: 600 }}
                      >
                        {item.label}
                      </p>
                    </div>
                    <span
                      className="inline-block px-2 py-0.5 rounded-full bg-gray-100 text-gray-400 mb-2"
                      style={{ fontSize: "0.7rem", fontWeight: 500 }}
                    >
                      Coming Soon
                    </span>
                    <p className="text-gray-500" style={{ fontSize: "0.82rem", lineHeight: 1.6 }}>
                      {item.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
