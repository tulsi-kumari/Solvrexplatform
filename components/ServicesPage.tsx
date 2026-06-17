"use client";

import Link from 'next/link';
import { C, eyebrow, pageH1 } from '@/lib/theme';
import { SERVICES } from '@/data/services';
import { ContactCallout } from '@/components/ui/ContactCallout';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export function ServicesPage() {
  return (
    <div style={{ backgroundColor: "transparent" }}>

      {/* Page header */}
      <section style={{ padding: '80px 0 64px', borderBottom: `1px solid ${C.border}` }}>
        <div className="sx-container">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services' }]} />
          <p style={eyebrow}>Services</p>
          <h1 style={{ ...pageH1, maxWidth: '520px' }}>What we do.</h1>
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
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                style={{
                  backgroundColor: C.bg,
                  padding: '36px 32px 40px',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'background-color 0.15s',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = C.bgSurface; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = C.bg; }}
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
                  {service.cardDescription}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact callout */}
      <ContactCallout borderTop />
    </div>
  );
}
