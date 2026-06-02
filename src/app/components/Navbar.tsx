import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Who We Serve", href: "#who-we-serve" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span
            className="text-[#0F0F0F]"
            style={{ fontSize: "1.2rem", fontWeight: 700, letterSpacing: "-0.02em" }}
          >
            Solvrex
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-gray-500 hover:text-gray-900 transition-colors"
              style={{ fontSize: "0.9rem" }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-4 py-2 rounded-lg bg-[#0F0F0F] text-white hover:bg-gray-800 transition-colors"
          style={{ fontSize: "0.875rem", fontWeight: 500 }}
        >
          Contact Us
        </a>

        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="text-gray-600 hover:text-gray-900 transition-colors py-1"
              style={{ fontSize: "0.95rem" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#0F0F0F] text-white"
            style={{ fontSize: "0.875rem", fontWeight: 500 }}
          >
            Contact Us
          </a>
        </div>
      )}
    </header>
  );
}
