"use client";

import Link from 'next/link';
import { CSSProperties } from 'react';

const C = {
  bg: '#0d0e14',
  border: '#1e2235',
  text: '#dde0eb',
  textBody: '#b0b3c8',
  textMuted: '#7d8098',
  textSubtle: '#4a4e68',
  blue: '#4d7cff',
  blueLight: '#7a9dff',
};

const labelStyle: CSSProperties = {
  fontSize: '10.5px',
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: '#8a8da5',
  fontWeight: 600,
  flexShrink: 0,
  width: '180px',
  paddingTop: '3px',
};

export function BusinessEnablementPage() {
  return (
    <div style={{ backgroundColor: C.bg }}>

      {/* Page header */}
      <section style={{ padding: '80px 0 64px', borderBottom: `1px solid ${C.border}` }}>
        <div className="sx-container">
          <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: C.blue, marginBottom: '22px' }}>
            Business Enablement
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
            Website development, online presence, and operational support.
          </h1>
        </div>
      </section>

      {/* Overview */}
      <section style={{ padding: '72px 0', borderBottom: `1px solid ${C.border}` }}>
        <div className="sx-container">
          <div className="sx-row" style={{ display: 'flex', gap: '48px', marginBottom: '40px' }}>
            <div style={labelStyle}>Overview</div>
            <p style={{ fontSize: '16px', color: C.textBody, lineHeight: 1.78, maxWidth: '600px', flex: 1 }}>
              We help small businesses and organizations establish their online presence, improve their operations, and work more effectively with technology.
            </p>
          </div>

          {/* Typical Engagements */}
          <div className="sx-row" style={{ display: 'flex', gap: '48px', marginBottom: '40px' }}>
            <div style={{ ...labelStyle, lineHeight: 1.5 }}>Typical<br />Engagements</div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
              {[
                'Website development and maintenance',
                'Online presence setup (Google Business Profile, social profiles)',
                'Business process improvement',
                'Operational support and workflow optimization',
                'Digital enablement for local businesses',
              ].map((item) => (
                <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: C.textBody, lineHeight: 1.55 }}>
                  <span style={{ color: C.blue, flexShrink: 0, marginTop: '1px', fontSize: '12px' }}>—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Expected Outcomes */}
          <div className="sx-row" style={{ display: 'flex', gap: '48px' }}>
            <div style={{ ...labelStyle, lineHeight: 1.5 }}>Expected<br />Outcomes</div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
              {[
                'Functional, professional online presence',
                'Improved operational efficiency',
                'Better use of existing tools and systems',
              ].map((item) => (
                <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: C.textBody, lineHeight: 1.55 }}>
                  <span style={{ color: C.blue, flexShrink: 0, marginTop: '1px', fontSize: '12px' }}>—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact callout */}
      <section style={{ padding: '72px 0' }}>
        <div className="sx-container">
          <div
            className="sx-row"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '40px' }}
          >
            <p style={{ fontSize: '17px', color: C.textMuted, lineHeight: 1.65, maxWidth: '500px' }}>
              To discuss your situation, reach out directly.
            </p>
            <Link
              href="/contact"
              style={{
                flexShrink: 0,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '11px 22px',
                backgroundColor: C.blue,
                color: '#ffffff',
                fontSize: '14px',
                fontWeight: 500,
                borderRadius: '2px',
                border: `1px solid ${C.blue}`,
                transition: 'background-color 0.15s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#3b6aff'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = C.blue; }}
            >
              Contact us →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}