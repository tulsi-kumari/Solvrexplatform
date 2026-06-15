"use client";

import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { C, accent } from "@/lib/theme";

type Variant = "solid" | "outline";

interface PrimaryLinkProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
  style?: CSSProperties;
}

const base: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  padding: "12px 24px",
  borderRadius: "3px",
  fontSize: "14px",
  fontWeight: 500,
  letterSpacing: "0.01em",
  transition: "background-color 0.15s, border-color 0.15s",
};

const variants: Record<Variant, CSSProperties> = {
  solid: { backgroundColor: C.blue, border: `1px solid ${C.blue}`, color: "#ffffff" },
  outline: { backgroundColor: "transparent", border: `1px solid ${C.borderStrong}`, color: C.text },
};

function applyHover(el: HTMLElement, variant: Variant, on: boolean) {
  if (variant === "solid") {
    el.style.backgroundColor = on ? C.blueHover : C.blue;
    el.style.borderColor = on ? C.blueHover : C.blue;
  } else {
    el.style.borderColor = on ? C.blue : C.borderStrong;
    el.style.backgroundColor = on ? accent.hoverFill : "transparent";
  }
}

/**
 * Shared primary call-to-action link. Encapsulates the blue button + hover
 * behaviour that was previously copy-pasted with inline onMouseEnter handlers.
 */
export function PrimaryLink({ href, children, variant = "solid", external, style }: PrimaryLinkProps) {
  const className = "cx-btn";
  const mergedStyle = { ...base, ...variants[variant], ...style };
  const onEnter = (e: React.MouseEvent<HTMLElement>) => applyHover(e.currentTarget, variant, true);
  const onLeave = (e: React.MouseEvent<HTMLElement>) => applyHover(e.currentTarget, variant, false);

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className} style={mergedStyle} onMouseEnter={onEnter} onMouseLeave={onLeave}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} style={mergedStyle} onMouseEnter={onEnter} onMouseLeave={onLeave}>
      {children}
    </Link>
  );
}

// Right-arrow glyph commonly paired with a CTA label.
export function ArrowRight() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
      <path d="M2 6.5h9M8 3.5l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
