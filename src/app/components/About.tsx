const pillars = [
  {
    title: "Practical Solutions",
    desc: "We focus on what works — no fluff, no unnecessary complexity. Every solution is designed to produce real, measurable outcomes.",
  },
  {
    title: "Technology-Driven",
    desc: "We leverage modern tools and platforms to help individuals and organizations operate more effectively in a digital world.",
  },
  {
    title: "Transparency",
    desc: "We communicate openly at every stage. No hidden processes, no surprises — just honest progress and clear expectations.",
  },
  {
    title: "Long-Term Partnerships",
    desc: "We're invested in your sustained success, not just a single engagement. We build relationships designed to grow over time.",
  },
];

export function About() {
  return (
    <section id="about" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p
              className="text-blue-600 mb-4"
              style={{ fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}
            >
              About Solvrex
            </p>
            <h2
              className="text-[#0F0F0F] mb-6"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.2 }}
            >
              A consulting partner built for the way businesses and careers work today
            </h2>
            <p className="text-gray-500 mb-6" style={{ lineHeight: 1.8 }}>
              Solvrex is a consulting startup that bridges the gap between where you are and where you need to be. Whether you're an international professional navigating a new career market or a business looking to modernize your operations, we provide structured, practical support.
            </p>
            <p className="text-gray-500" style={{ lineHeight: 1.8 }}>
              We don't offer generic advice. We work closely with each client to understand their specific context, then build a clear path forward — grounded in technology, guided by transparency, and focused on lasting impact.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="p-6 rounded-xl border border-gray-100 bg-gray-50/50 hover:border-gray-200 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                  <div className="w-3 h-3 rounded-full bg-blue-500" />
                </div>
                <h3
                  className="text-[#0F0F0F] mb-2"
                  style={{ fontSize: "0.95rem", fontWeight: 600 }}
                >
                  {p.title}
                </h3>
                <p className="text-gray-500" style={{ fontSize: "0.875rem", lineHeight: 1.6 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
