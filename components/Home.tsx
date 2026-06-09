"use client";

import Link from 'next/link';

const C = {
  bg: '#0d0e14',
  border: '#1e2235',
  text: '#f5f5f7',
  textMuted: '#a0a3b8',
  blue: '#4d7cff',
};

export function Home() {
  return (
    <div style={{ backgroundColor: C.bg }}>

      {/* ── Hero ── */}
      <section
        style={{
          padding: '140px 0 160px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background dot grid */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(rgba(77,124,255,0.07) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
            pointerEvents: 'none',
          }}
        />
        {/* Left edge accent */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '3px',
            height: '100%',
            background: `linear-gradient(to bottom, ${C.blue} 0%, transparent 100%)`,
          }}
        />

        <div className="sx-container" style={{ position: 'relative' }}>
          {/* Eyebrow */}
          <p
            style={{
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: C.blue,
              marginBottom: '28px',
            }}
          >
            Technology &amp; Business Solutions
          </p>

          {/* Heading */}
          <h1
            className="sx-hero-heading"
            style={{
              fontSize: 'clamp(42px, 6vw, 74px)',
              fontWeight: 300,
              color: C.text,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              marginBottom: '28px',
              maxWidth: '700px',
            }}
          >
            Human-led.<br />Technology-enabled.
          </h1>

          {/* Descriptor */}
          <p
            style={{
              fontSize: '18px',
              color: C.textMuted,
              lineHeight: 1.65,
              marginBottom: '52px',
              maxWidth: '480px',
              fontWeight: 400,
            }}
          >
            Practical support for businesses and professionals.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
            <Link
              href="/services"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                backgroundColor: C.blue,
                color: '#ffffff',
                fontSize: '14px',
                fontWeight: 500,
                letterSpacing: '0.01em',
                borderRadius: '2px',
                border: `1px solid ${C.blue}`,
                transition: 'background-color 0.15s, border-color 0.15s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#3b6aff'; e.currentTarget.style.borderColor = '#3b6aff'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = C.blue; e.currentTarget.style.borderColor = C.blue; }}
            >
              Explore services
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M2 6.5h9M8 3.5l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="/about"
              style={{ fontSize: '14px', color: C.textMuted, display: 'inline-flex', alignItems: 'center', gap: '5px', transition: 'color 0.15s' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = C.text; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = C.textMuted; }}
            >
              About Solvrex →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}