"use client";

import Link from 'next/link';

const C = {
  bg: '#0a0b11',
  border: '#1e2235',
  text: '#f5f5f7',
  textMuted: '#a0a3b8',
  textSubtle: '#6b6e85',
  blue: '#4d7cff',
};

export function Footer() {
  return (
    <footer style={{ backgroundColor: C.bg, borderTop: `1px solid ${C.border}` }}>
      <div className="sx-container">
        {/* Main grid */}
        <div
          className="sx-footer-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1fr',
            gap: '64px',
            padding: '56px 0 48px',
            borderBottom: `1px solid ${C.border}`,
          }}
        >
          {/* Brand */}
          <div>
            <p style={{ fontSize: '15px', fontWeight: 600, color: C.text, marginBottom: '14px', letterSpacing: '-0.01em' }}>
              Solvrex
            </p>
            <p style={{ fontSize: '13px', color: C.textMuted, lineHeight: 1.75, maxWidth: '220px' }}>
              Practical technology and business solutions for organizations built to last.
            </p>
            <p style={{ marginTop: '24px', fontSize: '12px', color: C.textSubtle }}>
              solvrex.official@gmail.com
            </p>
          </div>

          {/* Services */}
          <div>
            <p style={{ fontSize: '10.5px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: C.textSubtle, marginBottom: '18px' }}>
              Services
            </p>
            {[
              ['Business Enablement', '/services/business-enablement'],
              ['Technology Consulting', '/services/technology-consulting'],
              ['Career Services', '/services/career-services'],
            ].map(([label, to]) => (
              <Link
                key={label}
                href={to}
                style={{ display: 'block', fontSize: '13px', color: C.textMuted, marginBottom: '11px', transition: 'color 0.15s' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = C.text; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = C.textMuted; }}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Company */}
          <div>
            <p style={{ fontSize: '10.5px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: C.textSubtle, marginBottom: '18px' }}>
              Company
            </p>
            {[
              ['About', '/about'],
              ['Services', '/services'],
              ['Contact', '/contact'],
            ].map(([label, to]) => (
              <Link
                key={label}
                href={to}
                style={{ display: 'block', fontSize: '13px', color: C.textMuted, marginBottom: '11px', transition: 'color 0.15s' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = C.text; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = C.textMuted; }}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontSize: '10.5px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: C.textSubtle, marginBottom: '18px' }}>
              Get in touch
            </p>
            <a
              href="mailto:solvrex.official@gmail.com"
              style={{ display: 'block', fontSize: '13px', color: C.textMuted, marginBottom: '11px', transition: 'color 0.15s' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = C.text; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = C.textMuted; }}
            >
              solvrex.official@gmail.com
            </a>
            <Link
              href="/contact"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', marginTop: '12px', fontSize: '12px', color: C.blue, fontWeight: 500 }}
            >
              Send an inquiry →
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '52px' }}>
          <p style={{ fontSize: '12px', color: C.textSubtle }}>
            © 2026 Solvrex. All rights reserved.
          </p>
          <p style={{ fontSize: '12px', color: C.textSubtle }}>
            solvrex.in
          </p>
        </div>
      </div>
    </footer>
  );
}