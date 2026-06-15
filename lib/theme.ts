import type { CSSProperties } from "react";

/**
 * Single source of truth for design tokens.
 * Every component imports `C` from here instead of redefining a local palette.
 */
export const C = {
  // surfaces
  bg: "#0d0e14",
  bgSurface: "#13151e",
  bgRaised: "#171a26",
  bgFooter: "#0a0b11",
  // borders
  border: "#1e2235",
  borderStrong: "#2a2f4a",
  // text (brightest → faintest)
  text: "#f5f5f7",
  textBody: "#c4c7d6",
  textMuted: "#a0a3b8",
  textSubtle: "#8a8da5",
  // accent
  blue: "#4d7cff",
  blueHover: "#3b6aff",
  blueLight: "#7a9dff",
} as const;

// Translucent accent helpers (used for badges, glows, hover fills).
export const accent = {
  fill: "rgba(77,124,255,0.1)",
  fillStrong: "rgba(77,124,255,0.12)",
  border: "rgba(77,124,255,0.2)",
  hoverFill: "rgba(77,124,255,0.06)",
} as const;

/* ── Shared style fragments (reused across pages) ───────────── */

// Small uppercase section eyebrow above a page/section heading.
export const eyebrow: CSSProperties = {
  fontSize: "11px",
  fontWeight: 600,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: C.blue,
  marginBottom: "22px",
};

// Standard page-header H1 (services, about, contact, service detail).
export const pageH1: CSSProperties = {
  fontSize: "clamp(32px, 4vw, 48px)",
  fontWeight: 300,
  color: C.text,
  letterSpacing: "-0.025em",
  lineHeight: 1.12,
};

// Mid-size section heading (used on the careers page).
export const sectionHeading: CSSProperties = {
  fontSize: "clamp(26px, 3.4vw, 38px)",
  fontWeight: 300,
  color: C.text,
  letterSpacing: "-0.025em",
  lineHeight: 1.15,
};

// Tiny uppercase label (footer columns, contact info, service sections).
export const metaLabel: CSSProperties = {
  fontSize: "10.5px",
  fontWeight: 600,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: C.textSubtle,
};
