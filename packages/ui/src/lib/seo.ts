import type { Metadata } from "next";
import { siteConfig } from "./site";

/** Build per-page metadata with canonical URL + Open Graph + Twitter cards.
 *  The site-wide OG/Twitter image comes from app/opengraph-image.tsx. */
export function pageMetadata({
  title,
  description,
  path = "/",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = path === "/" ? `${siteConfig.url}/` : `${siteConfig.url}${path}`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      url,
      title,
      description,
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

/* ── JSON-LD (Schema.org) builders ───────────────────────────── */

export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/icon.svg`,
    description: siteConfig.description,
    sameAs: [siteConfig.linkedInUrl],
  };
}

export function serviceLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${siteConfig.url}${path}`,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: "Global",
  };
}

export function articleLd({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${siteConfig.url}${path}`,
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: { "@type": "ImageObject", url: `${siteConfig.url}/icon.svg` },
    },
  };
}

export function professionalServiceLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: `${siteConfig.url}/book`,
    description:
      "Book a free consultation with Solvrex for career services, technology consulting, or business enablement.",
    email: siteConfig.contactEmail,
    areaServed: "Global",
    priceRange: "$$",
  };
}
