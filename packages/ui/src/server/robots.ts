import type { MetadataRoute } from "next";
import { siteConfig } from "../lib/site";

/** Shared robots builder — uses the per-app siteConfig.url. */
export function buildRobots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
