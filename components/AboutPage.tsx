"use client";

import { CSSProperties } from 'react';
import Link from 'next/link';

const C = {
  bg: '#0d0e14',
  border: '#1e2235',
  text: '#f5f5f7',
  textBody: '#b8bac8',
  textMuted: '#a0a3b8',
  textSubtle: '#6b6e85',
  blue: '#4d7cff',
  blueLight: '#7a9dff',
};

const labelStyle: CSSProperties = {
  fontSize: '10.5px',
  fontWeight: 600,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: '#6b6e85',
  flexShrink: 0,
  width: '180px',
  paddingTop: '3px',
};

const sectionBorder: CSSProperties = {
  padding: '56px 0',
  borderBottom: `1px solid ${C.border}`,
};

export function AboutPage() {
  return (
    <div style={{ backgroundColor: C.bg }}>

      {/* Page header */}
      <section style={{ padding: '80px 0 64px', borderBottom: `1px solid ${C.border}` }}>
        <div className="sx-container">
          <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: C.blue, marginBottom: '22px' }}>
            About
          </p>
          <h1
            style={{
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 300,
              color: C.text,
              letterSpacing: '-0.025em',
              lineHeight: 1.12,
              maxWidth: '560px',
            }}
          >
            Technology and business support.
          </h1>
        </div>
      </section>

      {/* Who We Are */}
      <section style={sectionBorder}>
        <div className="sx-container">
          <div className="sx-row" style={{ display: 'flex', gap: '48px' }}>
            <div style={labelStyle}>Who We Are</div>
            <p style={{ fontSize: '16px', color: C.textBody, lineHeight: 1.78, maxWidth: '600px', flex: 1 }}>
              Solvrex is a small practice focused on technology consulting, business enablement, and career services.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section style={sectionBorder}>
        <div className="sx-container">
          <div className="sx-row" style={{ display: 'flex', gap: '48px' }}>
            <div style={labelStyle}>What We Do</div>
            <p style={{ fontSize: '16px', color: C.textBody, lineHeight: 1.78, maxWidth: '600px', flex: 1 }}>
              We build websites, advise on technology decisions, and support professionals in career transitions. All work is independent — we have no vendor affiliations.
            </p>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section style={sectionBorder}>
        <div className="sx-container">
          <div className="sx-row" style={{ display: 'flex', gap: '48px' }}>
            <div style={labelStyle}>How We Work</div>
            <p style={{ fontSize: '16px', color: C.textBody, lineHeight: 1.78, maxWidth: '600px', flex: 1 }}>
              We take on work where we can be useful. When we are not the right fit, we say so.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '72px 0' }}>
        <div className="sx-container">
          <p style={{ fontSize: '16px', color: C.textMuted, marginBottom: '24px', maxWidth: '480px', lineHeight: 1.65 }}>
            To discuss your situation, reach out directly.
          </p>
          <Link
            href="/contact"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: C.blueLight, fontWeight: 500 }}
          >
            Get in touch →
          </Link>
        </div>
      </section>

    </div>
  );
}