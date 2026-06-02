export function Contact() {
  return (
    <section id="contact" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p
              className="text-blue-600 mb-3"
              style={{ fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}
            >
              Get In Touch
            </p>
            <h2
              className="text-[#0F0F0F] mb-5"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.2 }}
            >
              Let's start a conversation
            </h2>
            <p className="text-gray-500 mb-8" style={{ lineHeight: 1.8 }}>
              Whether you're exploring our services or ready to get started, we'd love to hear from you. Reach out directly and we'll respond promptly.
            </p>

            <div className="space-y-5">
              <a
                href="mailto:solvrex.official@gmail.com"
                className="flex items-center gap-4 p-5 rounded-xl border border-gray-100 hover:border-blue-100 hover:bg-blue-50/20 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <rect x="2" y="4" width="14" height="10" rx="2" stroke="#2563EB" strokeWidth="1.5" />
                    <path d="M2 7l7 4 7-4" stroke="#2563EB" strokeWidth="1.5" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400" style={{ fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                    Business Inquiries
                  </p>
                  <p className="text-[#0F0F0F]" style={{ fontSize: "0.925rem", fontWeight: 500 }}>
                    solvrex.official@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="mailto:solvrex.support@gmail.com"
                className="flex items-center gap-4 p-5 rounded-xl border border-gray-100 hover:border-blue-100 hover:bg-blue-50/20 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <circle cx="9" cy="9" r="7" stroke="#2563EB" strokeWidth="1.5" />
                    <path d="M9 8v4M9 6v.5" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400" style={{ fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                    Support
                  </p>
                  <p className="text-[#0F0F0F]" style={{ fontSize: "0.925rem", fontWeight: 500 }}>
                    solvrex.support@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-5 rounded-xl border border-gray-100">
                <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <circle cx="9" cy="9" r="7" stroke="#6B7280" strokeWidth="1.5" />
                    <path d="M9 2c-1.5 2-2.5 4.2-2.5 7s1 5 2.5 7" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M9 2c1.5 2 2.5 4.2 2.5 7s-1 5-2.5 7" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M2 9h14" stroke="#6B7280" strokeWidth="1.5" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400" style={{ fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                    Website
                  </p>
                  <p className="text-[#0F0F0F]" style={{ fontSize: "0.925rem", fontWeight: 500 }}>
                    solvrex.in
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA block */}
          <div className="rounded-2xl bg-[#0F0F0F] p-8 lg:p-10">
            <h3
              className="text-white mb-3"
              style={{ fontSize: "1.4rem", fontWeight: 700, letterSpacing: "-0.02em" }}
            >
              Ready to get started?
            </h3>
            <p className="text-gray-400 mb-8" style={{ fontSize: "0.9rem", lineHeight: 1.7 }}>
              Send us a message with a brief description of what you're working on. We'll review it and follow up within 1–2 business days.
            </p>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 mb-1.5" style={{ fontSize: "0.8rem" }}>
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    style={{ fontSize: "0.9rem" }}
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-1.5" style={{ fontSize: "0.8rem" }}>
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    style={{ fontSize: "0.9rem" }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-400 mb-1.5" style={{ fontSize: "0.8rem" }}>
                  What are you looking for?
                </label>
                <select
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/15 text-gray-300 focus:outline-none focus:border-blue-500 transition-colors appearance-none"
                  style={{ fontSize: "0.9rem" }}
                >
                  <option value="" className="bg-gray-900">Select a service</option>
                  <option value="career" className="bg-gray-900">International Career Support</option>
                  <option value="business" className="bg-gray-900">Business Digital Enablement</option>
                  <option value="other" className="bg-gray-900">Something else</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-400 mb-1.5" style={{ fontSize: "0.8rem" }}>
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Briefly describe your situation and goals..."
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  style={{ fontSize: "0.9rem" }}
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition-colors"
                style={{ fontSize: "0.925rem", fontWeight: 500 }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
