"use client";

import { useEffect, useMemo, useRef, useState, CSSProperties } from "react";
import { ROLES, TRACKS, APPLY_FORM_URL, type Role, type Track } from "@/data/roles";

// TODO: replace with the real Solvrex LinkedIn company URL.
const LINKEDIN_URL = "https://www.linkedin.com/company/solvrex";

/* ── Design tokens ───────────────────────────────────────────── */
const C = {
  bg: "#0d0e14",
  bgSurface: "#13151e",
  bgRaised: "#171a26",
  border: "#1e2235",
  borderStrong: "#2a2f4a",
  text: "#f5f5f7",
  textBody: "#c4c7d6",
  textMuted: "#a0a3b8",
  textSubtle: "#8a8da5",
  blue: "#4d7cff",
  blueLight: "#7a9dff",
};

const eyebrow: CSSProperties = {
  fontSize: "11px",
  fontWeight: 600,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: C.blue,
  marginBottom: "22px",
};

const sectionHeading: CSSProperties = {
  fontSize: "clamp(26px, 3.4vw, 38px)",
  fontWeight: 300,
  color: C.text,
  letterSpacing: "-0.025em",
  lineHeight: 1.15,
};

/* ── Page-scoped CSS (responsive, hover, motion, a11y) ───────── */
const styles = `
  .cx-roles-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
  .cx-values-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
  .cx-steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; position: relative; }
  .cx-card {
    background: ${C.bgSurface};
    border: 1px solid ${C.border};
    border-radius: 10px;
    padding: 26px 26px 22px;
    display: flex; flex-direction: column;
    text-align: left; width: 100%;
    cursor: pointer;
    transition: transform 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease;
  }
  .cx-card:hover { transform: translateY(-3px); border-color: ${C.borderStrong}; box-shadow: 0 12px 32px rgba(0,0,0,0.45); }
  .cx-card:focus-visible, .cx-pill:focus-visible, .cx-btn:focus-visible, .cx-modal-close:focus-visible, .cx-detail-btn:focus-visible {
    outline: 2px solid ${C.blueLight}; outline-offset: 2px;
  }
  .cx-pill {
    padding: 8px 16px; border-radius: 999px; font-size: 13px; font-weight: 500;
    border: 1px solid ${C.border}; background: transparent; color: ${C.textMuted};
    cursor: pointer; transition: color 0.15s, background 0.15s, border-color 0.15s; white-space: nowrap;
  }
  .cx-pill:hover { color: ${C.text}; border-color: ${C.borderStrong}; }
  .cx-pill[aria-pressed="true"] { background: ${C.blue}; border-color: ${C.blue}; color: #fff; }
  .cx-overlay {
    position: fixed; inset: 0; z-index: 1000; background: rgba(5,6,12,0.72);
    display: flex; align-items: flex-start; justify-content: center;
    padding: 48px 20px; overflow-y: auto; animation: cxFade 0.2s ease;
  }
  .cx-modal {
    width: 100%; max-width: 720px; background: ${C.bgSurface};
    border: 1px solid ${C.border}; border-radius: 14px; position: relative;
    animation: cxRise 0.22s cubic-bezier(0.16,1,0.3,1);
  }
  @keyframes cxFade { from { opacity: 0; } to { opacity: 1; } }
  @keyframes cxRise { from { opacity: 0; transform: translateY(12px) scale(0.99); } to { opacity: 1; transform: none; } }
  @media (prefers-reduced-motion: reduce) {
    .cx-card, .cx-overlay, .cx-modal { animation: none !important; transition: none !important; }
    .cx-card:hover { transform: none; }
  }
  @media (max-width: 880px) {
    .cx-values-grid { grid-template-columns: repeat(2, 1fr); }
    .cx-steps { grid-template-columns: 1fr; }
  }
  @media (max-width: 620px) {
    .cx-roles-grid { grid-template-columns: 1fr; }
    .cx-values-grid { grid-template-columns: 1fr; }
  }
`;

/* ── Small presentational helpers ────────────────────────────── */
function TrackBadge({ track }: { track: Track }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "4px 10px",
        borderRadius: "999px",
        fontSize: "11px",
        fontWeight: 600,
        letterSpacing: "0.03em",
        color: C.blueLight,
        background: "rgba(77,124,255,0.1)",
        border: "1px solid rgba(77,124,255,0.2)",
      }}
    >
      {track}
    </span>
  );
}

function MetaRow({ role }: { role: Role }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px", fontSize: "12.5px", color: C.textMuted }}>
      <span>{role.type}</span>
      <span style={{ color: C.borderStrong }}>·</span>
      <span>{role.location}</span>
      <span style={{ color: C.borderStrong }}>·</span>
      <span>{role.openings} openings</span>
    </div>
  );
}

function DetailList({ heading, items }: { heading: string; items: string[] }) {
  if (!items || items.length === 0) return null;
  return (
    <div style={{ marginTop: "28px" }}>
      <h3 style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: C.textSubtle, marginBottom: "14px" }}>
        {heading}
      </h3>
      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
        {items.map((item) => (
          <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "14.5px", color: C.textBody, lineHeight: 1.6 }}>
            <span style={{ color: C.blue, flexShrink: 0, marginTop: "2px", fontSize: "12px" }}>—</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ── Role detail modal (accessible) ──────────────────────────── */
function RoleModal({ role, onClose }: { role: Role; onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = `role-${role.id}-title`;

  useEffect(() => {
    const prevFocused = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key === "Tab" && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
      prevFocused?.focus?.();
    };
  }, [role.id, onClose]);

  const applyHref = `${APPLY_FORM_URL}`;

  return (
    <div
      className="cx-overlay"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        className="cx-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        {/* Header */}
        <div style={{ padding: "30px 34px 24px", borderBottom: `1px solid ${C.border}` }}>
          <button
            ref={closeRef}
            className="cx-modal-close"
            onClick={onClose}
            aria-label="Close"
            style={{
              position: "absolute", top: "20px", right: "22px",
              width: "34px", height: "34px", borderRadius: "8px",
              border: `1px solid ${C.border}`, background: C.bgRaised, color: C.textMuted,
              display: "inline-flex", alignItems: "center", justifyContent: "center",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M3 3l8 8M11 3l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
          <div style={{ marginBottom: "14px" }}>
            <TrackBadge track={role.track} />
          </div>
          <h2 id={titleId} style={{ fontSize: "24px", fontWeight: 500, color: C.text, letterSpacing: "-0.02em", marginBottom: "10px", maxWidth: "560px" }}>
            {role.title}
          </h2>
          <p style={{ fontSize: "14.5px", color: C.textMuted, lineHeight: 1.6, marginBottom: "16px", maxWidth: "560px" }}>
            {role.tagline}
          </p>
          <MetaRow role={role} />
        </div>

        {/* Body */}
        <div style={{ padding: "8px 34px 30px" }}>
          {role.about && (
            <div style={{ marginTop: "24px" }}>
              <h3 style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: C.textSubtle, marginBottom: "12px" }}>
                About the role
              </h3>
              <p style={{ fontSize: "15px", color: C.textBody, lineHeight: 1.7 }}>{role.about}</p>
            </div>
          )}
          <DetailList heading="Key responsibilities" items={role.responsibilities} />
          <DetailList heading="Skills & requirements" items={role.requirements} />
          <DetailList heading="Eligibility" items={role.eligibility} />
          <DetailList heading="What we offer" items={role.offer} />

          <div style={{ marginTop: "32px", display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center" }}>
            <a
              className="cx-btn"
              href={applyHref}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "12px 26px", backgroundColor: C.blue, color: "#fff",
                borderRadius: "3px", fontSize: "14px", fontWeight: 500,
                transition: "background-color 0.15s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#3b6aff"; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = C.blue; }}
            >
              Apply now
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                <path d="M2 6.5h9M8 3.5l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <span style={{ fontSize: "12.5px", color: C.textSubtle }}>Opens our application form in a new tab</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Static section content ──────────────────────────────────── */
const VALUES = [
  { title: "Real ownership", body: "You won't shadow from the sidelines. You'll own meaningful pieces of real client work from week one." },
  { title: "Learn fast", body: "Close mentorship and a steep, supported learning curve — you'll grow more in months than most do in a year." },
  { title: "Grow with an early-stage startup", body: "Join at the ground floor and help shape how Solvrex works as we build it together." },
  { title: "Performance-based growth", body: "Stipends, paid internships, and pre-placement offers are earned on merit — your impact decides your path." },
];

const STEPS = [
  { n: "01", title: "Foundation phase", when: "Months 1–3", body: "Hands-on work on real client projects with close mentorship as you find your feet." },
  { n: "02", title: "Paid internship", when: "Next 6 months", body: "A monthly stipend of ₹6,000–₹12,000, based on your performance during the foundation phase." },
  { n: "03", title: "Pre-Placement Offer", when: "For exceptional performers", body: "A full-time role with an annual CTC of ₹3–8 LPA for those who stand out." },
];

/* ── Page ────────────────────────────────────────────────────── */
export function CareersPage() {
  const [filter, setFilter] = useState<"All" | Track>("All");
  const [selected, setSelected] = useState<Role | null>(null);

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
            Build something from the ground up — as part of our founding intern team.
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
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#3b6aff"; e.currentTarget.style.borderColor = "#3b6aff"; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = C.blue; e.currentTarget.style.borderColor = C.blue; }}
          >
            View open roles
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
              <path d="M6.5 2v9M3.5 8l3 3 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </section>

      {/* Why Solvrex */}
      <section id="why-solvrex" style={{ padding: "84px 0", borderBottom: `1px solid ${C.border}` }}>
        <div className="sx-container">
          <p style={eyebrow}>Why Solvrex</p>
          <h2 style={{ ...sectionHeading, maxWidth: "560px", marginBottom: "18px" }}>An early seat with real responsibility.</h2>
          <p style={{ fontSize: "16px", color: C.textMuted, lineHeight: 1.7, maxWidth: "620px", marginBottom: "44px" }}>
            We&apos;re small, which means your work matters from day one. Here&apos;s what you can expect as part of the team.
          </p>
          <div className="cx-values-grid">
            {VALUES.map((v) => (
              <div key={v.title} style={{ background: C.bgSurface, border: `1px solid ${C.border}`, borderRadius: "10px", padding: "24px" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "rgba(77,124,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "18px" }} aria-hidden="true">
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: C.blue, display: "block" }} />
                </div>
                <h3 style={{ fontSize: "15px", fontWeight: 600, color: C.text, marginBottom: "10px", letterSpacing: "-0.01em" }}>{v.title}</h3>
                <p style={{ fontSize: "13.5px", color: C.textMuted, lineHeight: 1.6 }}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" style={{ padding: "84px 0", borderBottom: `1px solid ${C.border}` }}>
        <div className="sx-container">
          <p style={eyebrow}>How it works</p>
          <h2 style={{ ...sectionHeading, maxWidth: "560px", marginBottom: "44px" }}>The internship journey.</h2>
          <ol className="cx-steps" style={{ listStyle: "none" }}>
            {STEPS.map((s) => (
              <li key={s.n} style={{ background: C.bgSurface, border: `1px solid ${C.border}`, borderRadius: "10px", padding: "28px 26px" }}>
                <div style={{ fontSize: "13px", fontWeight: 700, color: C.blue, letterSpacing: "0.05em", marginBottom: "18px", fontVariantNumeric: "tabular-nums" }}>{s.n}</div>
                <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: C.textSubtle, marginBottom: "8px" }}>{s.when}</p>
                <h3 style={{ fontSize: "17px", fontWeight: 600, color: C.text, marginBottom: "12px", letterSpacing: "-0.01em" }}>{s.title}</h3>
                <p style={{ fontSize: "14px", color: C.textMuted, lineHeight: 1.65 }}>{s.body}</p>
              </li>
            ))}
          </ol>
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
              <button
                key={role.id}
                type="button"
                className="cx-card"
                onClick={() => setSelected(role)}
                aria-label={`View details for ${role.title}`}
              >
                <div style={{ marginBottom: "16px" }}>
                  <TrackBadge track={role.track} />
                </div>
                <h3 style={{ fontSize: "19px", fontWeight: 600, color: C.text, marginBottom: "10px", letterSpacing: "-0.015em", lineHeight: 1.3 }}>{role.title}</h3>
                <p style={{ fontSize: "14px", color: C.textMuted, lineHeight: 1.6, marginBottom: "20px", flex: 1 }}>{role.tagline}</p>
                <div style={{ marginBottom: "18px" }}>
                  <MetaRow role={role} />
                </div>
                <span className="cx-detail-btn" style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "13.5px", fontWeight: 500, color: C.blueLight }}>
                  View details
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>
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
              href={LINKEDIN_URL}
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

      {selected && <RoleModal role={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
