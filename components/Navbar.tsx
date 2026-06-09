"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const C = {
  bg: '#0d0e14',
  bgPanel: '#13151e',
  border: '#1e2235',
  text: '#f5f5f7',
  textMuted: '#a0a3b8',
  textSubtle: '#6b6e85',
  blue: '#4d7cff',
  blueLight: '#7a9dff',
};

const megaMenuData = [
  {
    category: 'Business Enablement',
    to: '/services/business-enablement',
    description: 'Website development and operational support',
    links: [
      'Website Development',
      'Google Business Profile Setup',
      'Business Process Improvement',
      'Operational Support',
      'Digital Enablement',
    ],
  },
  {
    category: 'Technology Consulting',
    to: '/services/technology-consulting',
    description: 'Independent technology guidance',
    links: [
      'Technology Assessment',
      'Platform Evaluation',
      'Architecture Guidance',
      'Implementation Planning',
      'Automation Opportunities',
    ],
  },
  {
    category: 'Career Services',
    to: '/services/career-services',
    description: 'Support for career transitions',
    links: [
      'Resume Review',
      'LinkedIn Review',
      'Job Search Strategy',
      'Application Support',
      'Career Guidance',
    ],
  },
];

export function Navbar() {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isServicesActive = pathname.startsWith('/services');

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 200,
        backgroundColor: C.bg,
        borderBottom: `1px solid ${C.border}`,
        overflow: 'visible',
      }}
      onMouseLeave={() => setServicesOpen(false)}
    >
      {/* Main bar */}
      <div
        className="sx-container"
        style={{ height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
      >
        <Link
          href="/"
          style={{ fontSize: '15px', fontWeight: 600, color: C.text, letterSpacing: '-0.01em' }}
          onClick={() => { setServicesOpen(false); setMobileOpen(false); }}
        >
          Solvrex
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '4px' }} className="hidden md:flex">
          {/* Services — hover trigger */}
          <button
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              padding: '6px 14px',
              background: servicesOpen ? 'rgba(77,124,255,0.1)' : 'transparent',
              border: 'none',
              borderRadius: '3px',
              fontSize: '14px',
              fontWeight: 400,
              color: servicesOpen || isServicesActive ? C.text : C.textMuted,
              cursor: 'pointer',
              transition: 'color 0.15s, background 0.15s',
            }}
            onMouseEnter={() => setServicesOpen(true)}
            onClick={() => setServicesOpen((o) => !o)}
          >
            Services
            <svg
              width="11"
              height="11"
              viewBox="0 0 12 12"
              fill="none"
              style={{ transform: servicesOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}
            >
              <path d="M2 4.5L6 8L10 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {[
            { label: 'About', to: '/about' },
            { label: 'Contact', to: '/contact' },
          ].map((link) => (
            <Link
              key={link.to}
              href={link.to}
              style={{
                padding: '6px 14px',
                fontSize: '14px',
                fontWeight: 400,
                color: pathname.startsWith(link.to) ? C.text : C.textMuted,
                borderRadius: '3px',
                transition: 'color 0.15s',
              }}
              onMouseEnter={() => setServicesOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => { setMobileOpen(!mobileOpen); setServicesOpen(false); }}
          style={{ background: 'none', border: 'none', padding: '8px', display: 'flex', flexDirection: 'column', gap: '5px', cursor: 'pointer' }}
          aria-label="Toggle navigation"
        >
          <span style={{ display: 'block', width: '20px', height: '1.5px', backgroundColor: C.textMuted, borderRadius: '1px', transition: 'transform 0.2s', transform: mobileOpen ? 'translateY(6.5px) rotate(45deg)' : 'none' }} />
          <span style={{ display: 'block', width: '20px', height: '1.5px', backgroundColor: C.textMuted, borderRadius: '1px', transition: 'opacity 0.2s', opacity: mobileOpen ? 0 : 1 }} />
          <span style={{ display: 'block', width: '20px', height: '1.5px', backgroundColor: C.textMuted, borderRadius: '1px', transition: 'transform 0.2s', transform: mobileOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none' }} />
        </button>
      </div>

      {/* ── Mega menu ── */}
      {servicesOpen && (
        <div
          className="hidden md:block"
          style={{
            position: 'absolute',
            top: '64px',
            left: 0,
            right: 0,
            backgroundColor: C.bgPanel,
            borderTop: `2px solid ${C.blue}`,
            borderBottom: `1px solid ${C.border}`,
            boxShadow: '0 20px 60px rgba(0,0,0,0.7)',
          }}
        >
          <div className="sx-container" style={{ padding: '44px 48px 48px' }}>
            {/* Three columns */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '48px' }}>
              {megaMenuData.map((section) => (
                <div key={section.category}>
                  <Link
                    href={section.to}
                    style={{ display: 'block', marginBottom: '8px' }}
                    onClick={() => setServicesOpen(false)}
                  >
                    <span style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.04em', color: C.text }}>
                      {section.category}
                    </span>
                  </Link>
                  <p style={{ fontSize: '12px', color: C.textSubtle, marginBottom: '20px', lineHeight: 1.5 }}>
                    {section.description}
                  </p>
                  <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: '16px' }}>
                    {section.links.map((label) => (
                      <Link
                        key={label}
                        href={section.to}
                        onClick={() => setServicesOpen(false)}
                        style={{ display: 'block', fontSize: '13.5px', color: C.textMuted, padding: '7px 0', lineHeight: 1.4, transition: 'color 0.12s' }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = C.text; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = C.textMuted; }}
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom bar */}
            <div style={{ marginTop: '36px', paddingTop: '24px', borderTop: `1px solid ${C.border}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <p style={{ fontSize: '12px', color: C.textSubtle }}>
                All services are delivered independently — no vendor affiliations.
              </p>
              <Link
                href="/services"
                onClick={() => setServicesOpen(false)}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: C.blueLight, fontWeight: 500 }}
              >
                View all services
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div
          className="md:hidden"
          style={{ backgroundColor: C.bgPanel, borderTop: `1px solid ${C.border}` }}
        >
          <div style={{ padding: '8px 0 24px' }}>
            {[
              { label: 'Services', to: '/services' },
              { label: 'About', to: '/about' },
              { label: 'Contact', to: '/contact' },
            ].map((link, i) => (
              <Link
                key={link.to}
                href={link.to}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: 'block',
                  padding: '14px 24px',
                  fontSize: '15px',
                  color: pathname.startsWith(link.to) ? C.text : C.textMuted,
                  borderBottom: i < 2 ? `1px solid ${C.border}` : 'none',
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}