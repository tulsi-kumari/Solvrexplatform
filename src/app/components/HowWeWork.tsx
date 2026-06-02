const steps = [
  {
    number: "01",
    title: "Discovery",
    desc: "We start with a structured conversation to understand your goals, challenges, and context. No assumptions — just listening and asking the right questions.",
    detail: "Initial consultation · Needs assessment · Context mapping",
  },
  {
    number: "02",
    title: "Planning",
    desc: "We translate what we've learned into a clear, actionable plan — scoped to your situation, with defined deliverables and timelines.",
    detail: "Roadmap creation · Scope definition · Timeline alignment",
  },
  {
    number: "03",
    title: "Execution",
    desc: "We work alongside you to implement the plan — staying accountable, communicating consistently, and adjusting as needed.",
    detail: "Hands-on support · Progress tracking · Continuous refinement",
  },
];

export function HowWeWork() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p
            className="text-blue-600 mb-3"
            style={{ fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}
          >
            How We Work
          </p>
          <h2
            className="text-[#0F0F0F]"
            style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.2 }}
          >
            A simple, structured process
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto" style={{ lineHeight: 1.7 }}>
            We follow the same three-phase approach for every engagement — keeping things clear, accountable, and repeatable.
          </p>
        </div>

        {/* Desktop flow */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-10 left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-px bg-gray-200 z-0" />

          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={step.number} className="relative">
                {/* Step header */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="relative z-10 w-10 h-10 rounded-full border-2 border-blue-500 bg-white flex items-center justify-center flex-shrink-0"
                  >
                    <span
                      className="text-blue-600"
                      style={{ fontSize: "0.75rem", fontWeight: 700 }}
                    >
                      {i + 1}
                    </span>
                  </div>
                  <div className="h-px flex-1 bg-gray-100 lg:hidden" />
                </div>

                <div className="p-6 rounded-xl border border-gray-100 bg-gray-50/50 hover:border-gray-200 transition-colors">
                  <span
                    className="text-gray-300 block mb-3"
                    style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.05em" }}
                  >
                    {step.number}
                  </span>
                  <h3
                    className="text-[#0F0F0F] mb-3"
                    style={{ fontSize: "1.15rem", fontWeight: 700, letterSpacing: "-0.015em" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-gray-500 mb-4" style={{ fontSize: "0.875rem", lineHeight: 1.7 }}>
                    {step.desc}
                  </p>
                  <p className="text-gray-400" style={{ fontSize: "0.775rem", lineHeight: 1.6 }}>
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
