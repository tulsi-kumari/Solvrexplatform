"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { C } from "@/lib/theme";
import { siteConfig } from "@/lib/site";
import { SERVICES } from "@/data/services";
import { PRICING_TIERS } from "@/lib/pricing";
import { RESOURCES } from "@/data/resources";
import { LEVELS } from "@/data/roles";

interface MegaItem {
  label: string;
  href?: string;
}
interface MegaColumn {
  title: string;
  href: string;
  description?: string;
  items?: MegaItem[];
}
interface MegaMenu {
  key: string;
  label: string;
  basePath: string;
  columns: MegaColumn[];
  footerCta: { label: string; href: string };
  footerNote?: string;
}

// All four mega-menus derive from the existing data sources (no duplicate copy).
const MENUS: MegaMenu[] = [
  {
    key: "services",
    label: "Services",
    basePath: "/services",
    columns: SERVICES.map((s) => ({
      title: s.title,
      href: `/services/${s.slug}`,
      description: s.navDescription,
      items: s.megaLinks.map((l) => ({ label: l, href: `/services/${s.slug}` })),
    })),
    footerNote: "All services are delivered independently — no vendor affiliations.",
    footerCta: { label: "View all services", href: "/services" },
  },
  {
    key: "pricing",
    label: "Pricing",
    basePath: "/pricing",
    columns: PRICING_TIERS.map((t) => ({
      title: t.name,
      href: "/pricing",
      description: t.blurb,
      items: t.features.map((f) => ({ label: f })),
    })),
    footerCta: { label: "View full pricing", href: "/pricing" },
  },
  {
    key: "resources",
    label: "Resources",
    basePath: "/resources",
    columns: RESOURCES.map((a) => ({
      title: a.title,
      href: `/resources/${a.slug}`,
      description: a.description,
    })),
    footerCta: { label: "Browse all resources", href: "/resources" },
  },
  {
    key: "careers",
    label: "Careers",
    basePath: "/careers",
    columns: LEVELS.map((l) => ({
      title: l.name,
      href: `/careers/${l.slug}`,
      description: l.description,
    })),
    footerCta: { label: "View all roles", href: "/careers" },
  },
];

const SIMPLE_LINKS = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activeMenu = MENUS.find((m) => m.key === openMenu);

  return (
    <header
      className={scrolled ? "sx-navblur" : undefined}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 200,
        backgroundColor: C.bg,
        borderBottom: `1px solid ${C.border}`,
        overflow: "visible",
      }}
      onMouseLeave={() => setOpenMenu(null)}
    >
      {/* Main bar */}
      <div className="sx-container" style={{ height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link
          href="/"
          style={{ fontSize: "15px", fontWeight: 600, color: C.text, letterSpacing: "-0.01em" }}
          onClick={() => { setOpenMenu(null); setMobileOpen(false); }}
        >
          {siteConfig.name}
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "2px" }} className="hidden md:flex">
          {MENUS.map((menu) => {
            const isOpen = openMenu === menu.key;
            const isActive = pathname.startsWith(menu.basePath);
            return (
              <button
                key={menu.key}
                style={{
                  display: "inline-flex", alignItems: "center", gap: "5px",
                  padding: "6px 12px",
                  background: isOpen ? "rgba(77,124,255,0.1)" : "transparent",
                  border: "none", borderRadius: "3px",
                  fontSize: "14px", fontWeight: 400,
                  color: isOpen || isActive ? C.text : C.textMuted,
                  cursor: "pointer", transition: "color 0.15s, background 0.15s",
                }}
                onMouseEnter={() => setOpenMenu(menu.key)}
                onClick={() => setOpenMenu((cur) => (cur === menu.key ? null : menu.key))}
              >
                {menu.label}
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none" style={{ transform: isOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>
                  <path d="M2 4.5L6 8L10 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            );
          })}

          {SIMPLE_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                padding: "6px 12px", fontSize: "14px", fontWeight: 400,
                color: pathname.startsWith(link.href) ? C.text : C.textMuted,
                borderRadius: "3px", transition: "color 0.15s",
              }}
              onMouseEnter={() => setOpenMenu(null)}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/book"
            style={{
              marginLeft: "12px", display: "inline-flex", alignItems: "center",
              height: "34px", padding: "0 16px", borderRadius: "4px",
              background: C.blue, color: "#fff", fontSize: "13.5px", fontWeight: 500,
              lineHeight: 1, whiteSpace: "nowrap", transition: "background-color 0.15s",
            }}
            onMouseEnter={(e) => { setOpenMenu(null); e.currentTarget.style.backgroundColor = C.blueHover; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = C.blue; }}
          >
            Book Consultation
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => { setMobileOpen(!mobileOpen); setOpenMenu(null); }}
          style={{ background: "none", border: "none", padding: "8px", display: "flex", flexDirection: "column", gap: "5px", cursor: "pointer" }}
          aria-label="Toggle navigation"
        >
          <span style={{ display: "block", width: "20px", height: "1.5px", backgroundColor: C.textMuted, borderRadius: "1px", transition: "transform 0.2s", transform: mobileOpen ? "translateY(6.5px) rotate(45deg)" : "none" }} />
          <span style={{ display: "block", width: "20px", height: "1.5px", backgroundColor: C.textMuted, borderRadius: "1px", transition: "opacity 0.2s", opacity: mobileOpen ? 0 : 1 }} />
          <span style={{ display: "block", width: "20px", height: "1.5px", backgroundColor: C.textMuted, borderRadius: "1px", transition: "transform 0.2s", transform: mobileOpen ? "translateY(-6.5px) rotate(-45deg)" : "none" }} />
        </button>
      </div>

      {/* ── Mega menu panel ── */}
      {activeMenu && (
        <div
          className="hidden md:block"
          style={{
            position: "absolute", top: "64px", left: 0, right: 0,
            backgroundColor: C.bgSurface, borderTop: `2px solid ${C.blue}`,
            borderBottom: `1px solid ${C.border}`, boxShadow: "0 20px 60px rgba(0,0,0,0.7)",
          }}
        >
          <div className="sx-container" style={{ padding: "40px 48px 44px" }}>
            <div style={{ display: "grid", gridTemplateColumns: `repeat(${Math.min(activeMenu.columns.length, 3)}, 1fr)`, gap: "40px" }}>
              {activeMenu.columns.map((col) => (
                <div key={col.title}>
                  <Link href={col.href} style={{ display: "block", marginBottom: "8px" }} onClick={() => setOpenMenu(null)}>
                    <span style={{ fontSize: "13px", fontWeight: 600, letterSpacing: "0.04em", color: C.text }}>{col.title}</span>
                  </Link>
                  {col.description && (
                    <p style={{ fontSize: "12px", color: C.textSubtle, marginBottom: col.items?.length ? "16px" : 0, lineHeight: 1.5 }}>{col.description}</p>
                  )}
                  {col.items && col.items.length > 0 && (
                    <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: "14px" }}>
                      {col.items.map((item) =>
                        item.href ? (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => setOpenMenu(null)}
                            style={{ display: "block", fontSize: "13.5px", color: C.textMuted, padding: "6px 0", lineHeight: 1.4, transition: "color 0.12s" }}
                            onMouseEnter={(e) => { e.currentTarget.style.color = C.text; }}
                            onMouseLeave={(e) => { e.currentTarget.style.color = C.textMuted; }}
                          >
                            {item.label}
                          </Link>
                        ) : (
                          <p key={item.label} style={{ fontSize: "13.5px", color: C.textMuted, padding: "6px 0", lineHeight: 1.4 }}>{item.label}</p>
                        )
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div style={{ marginTop: "32px", paddingTop: "22px", borderTop: `1px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
              <p style={{ fontSize: "12px", color: C.textSubtle }}>{activeMenu.footerNote ?? ""}</p>
              <Link href={activeMenu.footerCta.href} onClick={() => setOpenMenu(null)} style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "13px", color: C.blueLight, fontWeight: 500, whiteSpace: "nowrap" }}>
                {activeMenu.footerCta.label}
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
        <div className="md:hidden" style={{ backgroundColor: C.bgSurface, borderTop: `1px solid ${C.border}` }}>
          <div style={{ padding: "8px 0 20px" }}>
            {[...MENUS.map((m) => ({ label: m.label, href: m.basePath })), ...SIMPLE_LINKS].map((link, i, arr) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "block", padding: "14px 24px", fontSize: "15px",
                  color: pathname.startsWith(link.href) ? C.text : C.textMuted,
                  borderBottom: i < arr.length - 1 ? `1px solid ${C.border}` : "none",
                }}
              >
                {link.label}
              </Link>
            ))}
            <div style={{ padding: "16px 24px 0" }}>
              <Link
                href="/book"
                onClick={() => setMobileOpen(false)}
                style={{ display: "inline-flex", alignItems: "center", padding: "10px 18px", borderRadius: "3px", background: C.blue, color: "#fff", fontSize: "14px", fontWeight: 500 }}
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
