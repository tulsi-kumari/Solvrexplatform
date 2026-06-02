export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-16">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Soft blue glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-[0.06]"
        style={{ background: "radial-gradient(ellipse, #2563EB 0%, transparent 70%)" }}
      />

      {/* Abstract floating dots */}
      <div className="absolute top-24 right-16 w-2 h-2 rounded-full bg-blue-400 opacity-30" />
      <div className="absolute top-40 right-32 w-1 h-1 rounded-full bg-gray-400 opacity-30" />
      <div className="absolute bottom-32 left-16 w-1.5 h-1.5 rounded-full bg-blue-300 opacity-25" />
      <div className="absolute bottom-48 left-32 w-1 h-1 rounded-full bg-gray-300 opacity-30" />
      <div className="absolute top-1/2 left-8 w-1 h-1 rounded-full bg-blue-400 opacity-20" />

      {/* Abstract lines */}
      <svg
        className="absolute top-20 right-0 opacity-[0.04] hidden lg:block"
        width="400"
        height="400"
        viewBox="0 0 400 400"
        fill="none"
      >
        <circle cx="200" cy="200" r="180" stroke="#000" strokeWidth="1" />
        <circle cx="200" cy="200" r="120" stroke="#000" strokeWidth="1" />
        <circle cx="200" cy="200" r="60" stroke="#000" strokeWidth="1" />
        <line x1="20" y1="200" x2="380" y2="200" stroke="#000" strokeWidth="1" />
        <line x1="200" y1="20" x2="200" y2="380" stroke="#000" strokeWidth="1" />
      </svg>

      <svg
        className="absolute bottom-0 left-0 opacity-[0.03] hidden lg:block"
        width="300"
        height="300"
        viewBox="0 0 300 300"
        fill="none"
      >
        <rect x="20" y="20" width="260" height="260" stroke="#000" strokeWidth="1" />
        <rect x="60" y="60" width="180" height="180" stroke="#000" strokeWidth="1" />
        <rect x="100" y="100" width="100" height="100" stroke="#000" strokeWidth="1" />
      </svg>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 bg-gray-50 mb-8"
          style={{ fontSize: "0.8rem", color: "#555" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block" />
          Consulting & Career Services
        </div>

        <h1
          className="text-[#0F0F0F] mb-6"
          style={{
            fontSize: "clamp(2.4rem, 5vw, 3.75rem)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
          }}
        >
          Helping Professionals and
          <br />
          <span style={{ color: "#2563EB" }}>Businesses Move Forward</span>
        </h1>

        <p
          className="text-gray-500 max-w-2xl mx-auto mb-10"
          style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)", lineHeight: 1.7 }}
        >
          Practical technology consulting, career support, and business solutions
          designed to create measurable outcomes.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#0F0F0F] text-white hover:bg-gray-800 transition-colors w-full sm:w-auto"
            style={{ fontSize: "0.95rem", fontWeight: 500 }}
          >
            Contact Us
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-gray-200 text-gray-700 hover:border-gray-400 hover:text-gray-900 transition-colors w-full sm:w-auto"
            style={{ fontSize: "0.95rem", fontWeight: 500 }}
          >
            Explore Services
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Subtle trust indicators */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-6 opacity-40">
          {["Career Support", "Digital Enablement", "Tech Consulting", "Business Solutions"].map((item) => (
            <span key={item} className="text-gray-500" style={{ fontSize: "0.8rem", letterSpacing: "0.05em" }}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
