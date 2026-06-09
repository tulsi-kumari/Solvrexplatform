"use client";

import Link from 'next/link';

const C = {
  bg: '#0d0e14',
  border: '#1e2235',
  text: '#f5f5f7',
  textMuted: '#a0a3b8',
  textSubtle: '#6b6e85',
  blue: '#4d7cff',
  blueLight: '#7a9dff',
};

const services = [
  {
    id: 'business-enablement',
    to: '/services/business-enablement',
    number: '01',
    title: 'Business Enablement',
    description:
      'Website development, online presence, and operational support for small businesses.',
  },
  {
    id: 'technology-consulting',
    to: '/services/technology-consulting',
    number: '02',
    title: 'Technology Consulting',
    description:
      'Platform evaluation, architecture guidance, and implementation planning.',
  },
  {
    id: 'career-services',
    to: '/services/career-services',
    number: '03',
    title: 'Career Services',
    description:
      'Resume review, LinkedIn optimization, and job search strategy.',
  },
];

export function ServicesPage() {
  return (
    <div style={{ backgroundColor: C.bg }}>

      {/* Page header */}
      <section style={{ padding: '80px 0 64px', borderBottom: `1px solid ${C.border}` }}>
        <div className="sx-container">
          <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: C.blue, marginBottom: '22px' }}>
            Services
          </p>
          <h1
            style={{
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 300,
              color: C.text,
              letterSpacing: '-0.025em',
              lineHeight: 1.12,
              maxWidth: '520px',
            }}
          >
            What we do.
          </h1>
        </div>
      </section>

      {/* Service tiles */}
      <section style={{ padding: '72px 0' }}>
        <div className="sx-container">
          <div
            className="sx-grid-3"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1px',
              backgroundColor: C.border,
            }}
          >
            {services.map((service) => (
              <Link
                key={service.id}
                href={service.to}
                style={{
                  backgroundColor: C.bg,
                  padding: '36px 32px 40px',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'background-color 0.15s',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = '#13151e'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = C.bg; }}
              >
                <span
                  style={{
                    display: 'block',
                    fontSize: '11px',
                    fontWeight: 600,
                    color: C.blue,
                    fontVariantNumeric: 'tabular-nums',
                    letterSpacing: '0.04em',
                    marginBottom: '20px',
                  }}
                >
                  {service.number}
                </span>
                <h2
                  style={{
                    fontSize: '19px',
                    fontWeight: 500,
                    color: C.text,
                    marginBottom: '14px',
                    letterSpacing: '-0.01em',
                    lineHeight: 1.3,
                  }}
                >
                  {service.title}
                </h2>
                <p
                  style={{
                    fontSize: '14px',
                    color: C.textMuted,
                    lineHeight: 1.72,
                    flex: 1,
                  }}
                >
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact callout */}
      <section style={{ padding: '72px 0', borderTop: `1px solid ${C.border}` }}>
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