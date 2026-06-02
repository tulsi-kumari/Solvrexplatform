import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-[#0F0F0F] border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span
              className="text-white"
              style={{ fontSize: "1.05rem", fontWeight: 700, letterSpacing: "-0.02em" }}
            >
              Solvrex
            </span>
            <span className="text-gray-600 text-sm hidden sm:block">—</span>
            <span className="text-gray-500 hidden sm:block" style={{ fontSize: "0.825rem" }}>
              Consulting & Career Services
            </span>
          </div>

          <div className="flex items-center gap-6">
            <Link
              to="/privacy-policy"
              className="text-gray-500 hover:text-gray-300 transition-colors"
              style={{ fontSize: "0.825rem" }}
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="text-gray-500 hover:text-gray-300 transition-colors"
              style={{ fontSize: "0.825rem" }}
            >
              Terms of Service
            </Link>
            <a
              href="#contact"
              className="text-gray-500 hover:text-gray-300 transition-colors"
              style={{ fontSize: "0.825rem" }}
            >
              Contact
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600" style={{ fontSize: "0.775rem" }}>
            © {new Date().getFullYear()} Solvrex. All rights reserved.
          </p>
          <p className="text-gray-700" style={{ fontSize: "0.775rem" }}>
            solvrex.in · solvrex.official@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
}
