"use client";

import Link from 'next/link';
import { C, eyebrow } from '@/lib/theme';
import { siteConfig } from '@/lib/site';
import { PrimaryLink, ArrowRight } from '@/components/ui/PrimaryLink';

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
          <p style={{ ...eyebrow, marginBottom: '28px' }}>
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
            <PrimaryLink href="/services">
              Explore services
              <ArrowRight />
            </PrimaryLink>
            <Link
              href="/about"
              style={{ fontSize: '14px', color: C.textMuted, display: 'inline-flex', alignItems: 'center', gap: '5px', transition: 'color 0.15s' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = C.text; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = C.textMuted; }}
            >
              About {siteConfig.name} →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
