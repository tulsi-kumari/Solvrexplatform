"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ROLES, TRACKS, type Track } from "@/data/roles";
import { C, eyebrow, sectionHeading } from "@/lib/theme";
import { siteConfig } from "@/lib/site";

/* ── Page-scoped CSS (responsive, hover, a11y) ───────────────── */
const styles = `
  .cx-roles-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; grid-auto-rows: 1fr; }
  .cx-card {
    background: transparent;
    border: none;
    border-radius: 10px;
    padding: 22px;
    display: flex; flex-direction: column;
    text-align: left; width: 100%;
  }
  .cx-card:hover .cx-detail-btn { text-decoration: underline; }
  .cx-card:focus-visible, .cx-pill:focus-visible, .cx-btn:focus-visible, .cx-detail-btn:focus-visible {
    outline: 2px solid ${C.blueLight}; outline-offset: 2px;
  }
  .cx-pill {
    padding: 8px 16px; border-radius: 999px; font-size: 13px; font-weight: 500;
    border: 1px solid ${C.border}; background: transparent; color: ${C.textMuted};
    cursor: pointer; transition: color 0.15s, background 0.15s, border-color 0.15s; white-space: nowrap;
  }
  .cx-pill:hover { color: ${C.text}; border-color: ${C.borderStrong}; }
  .cx-pill[aria-pressed="true"] { background: ${C.blue}; border-color: ${C.blue}; color: #fff; }
  @media (max-width: 620px) {
    .cx-roles-grid { grid-template-columns: 1fr; grid-auto-rows: auto; }
  }
`;

/* ── Page ────────────────────────────────────────────────────── */
export function CareersPage() {
  const [filter, setFilter] = useState<"All" | Track>("All");

  const visibleRoles = useMemo(
    () => (filter === "All" ? ROLES : ROLES.filter((r) => r.track === filter)),
    [filter]
  );

  const pills: ("All" | Track)[] = ["All", ...TRACKS];

  return (
    <div style={{ backgroundColor: C.bg }}>
      <style>{styles}</style>

      {/* Hero */}
      <section style={{ padding: "120px 0 100px", position: "relative", overflow: "hidden", borderBottom: `1px solid ${C.border}` }}>
        <div
          style={{
            position: "absolute", inset: 0,
            backgroundImage: "radial-gradient(rgba(77,124,255,0.07) 1px, transparent 1px)",
            backgroundSize: "28px 28px", pointerEvents: "none",
          }}
          aria-hidden="true"
        />
        <div style={{ position: "absolute", left: 0, top: 0, width: "3px", height: "100%", background: `linear-gradient(to bottom, ${C.blue} 0%, transparent 100%)` }} aria-hidden="true" />
        <div className="sx-container" style={{ position: "relative" }}>
          <p style={eyebrow}>Careers at Solvrex</p>
          <h1 style={{ fontSize: "clamp(38px, 5.5vw, 64px)", fontWeight: 300, color: C.text, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: "26px", maxWidth: "760px" }}>
            Build something from the ground up — as part of our founding team.
          </h1>
          <p style={{ fontSize: "18px", color: C.textMuted, lineHeight: 1.6, marginBottom: "44px", maxWidth: "560px" }}>
            Solvrex is human-led and technology-enabled. Join early, do real work, and grow with us.
          </p>
          <a
            className="cx-btn"
            href="#open-roles"
            style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              padding: "13px 26px", backgroundColor: C.blue, color: "#fff",
              borderRadius: "3px", fontSize: "14px", fontWeight: 500, border: `1px solid ${C.blue}`,
              transition: "background-color 0.15s, border-color 0.15s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = C.blueHover; e.currentTarget.style.borderColor = C.blueHover; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = C.blue; e.currentTarget.style.borderColor = C.blue; }}
          >
            View open roles
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
              <path d="M6.5 2v9M3.5 8l3 3 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </section>

      {/* Open Roles */}
      <section id="open-roles" style={{ padding: "84px 0", borderBottom: `1px solid ${C.border}`, scrollMarginTop: "80px" }}>
        <div className="sx-container">
          <p style={eyebrow}>Open roles</p>
          <h2 style={{ ...sectionHeading, maxWidth: "560px", marginBottom: "30px" }}>Find your place on the team.</h2>

          {/* Filter pills */}
          <div role="group" aria-label="Filter roles by track" style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "36px" }}>
            {pills.map((p) => (
              <button
                key={p}
                type="button"
                className="cx-pill"
                aria-pressed={filter === p}
                onClick={() => setFilter(p)}
              >
                {p}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="cx-roles-grid">
            {visibleRoles.map((role) => (
              <Link
                key={role.id}
                href={`/careers/${role.id}`}
                className="cx-card"
                aria-label={`View details for ${role.title}`}
              >
                <h3 style={{ fontSize: "19px", fontWeight: 600, color: C.text, marginBottom: "10px", letterSpacing: "-0.015em", lineHeight: 1.3 }}>{role.title}</h3>
                <p style={{ fontSize: "14px", color: C.textMuted, lineHeight: 1.6, marginBottom: "20px", flex: 1 }}>{role.tagline}</p>
                <span className="cx-detail-btn" style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "13.5px", fontWeight: 500, color: C.blueLight }}>
                  View details
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section style={{ padding: "84px 0" }}>
        <div className="sx-container">
          <div style={{ background: C.bgSurface, border: `1px solid ${C.border}`, borderRadius: "14px", padding: "48px 44px", textAlign: "center" }}>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 300, color: C.text, letterSpacing: "-0.02em", marginBottom: "14px" }}>
              Don&apos;t see the right role? Stay connected.
            </h2>
            <p style={{ fontSize: "15px", color: C.textMuted, lineHeight: 1.65, maxWidth: "520px", margin: "0 auto 28px" }}>
              Follow us to hear about new openings as the team grows.
            </p>
            <a
              className="cx-btn"
              href={siteConfig.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "12px 24px", border: `1px solid ${C.borderStrong}`, color: C.text,
                borderRadius: "3px", fontSize: "14px", fontWeight: 500, transition: "border-color 0.15s, background 0.15s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = C.blue; e.currentTarget.style.background = "rgba(77,124,255,0.06)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = C.borderStrong; e.currentTarget.style.background = "transparent"; }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
              </svg>
              Follow Solvrex on LinkedIn
            </a>
            <p style={{ fontSize: "13px", color: C.textSubtle, lineHeight: 1.65, maxWidth: "560px", margin: "32px auto 0" }}>
              Solvrex is an equal-opportunity workplace. We hire for attitude, aptitude, and the drive to grow.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
