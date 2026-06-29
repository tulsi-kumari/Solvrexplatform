import type { MetadataRoute } from "next";
import { siteConfig } from "../lib/site";
import { SERVICES } from "../data/services";
import { RESOURCES } from "../data/resources";
import { ROLES, LEVELS } from "../data/roles";

/** Shared sitemap builder — uses the per-app siteConfig.url. */
export function buildSitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const staticPaths = ["", "/services", "/pricing", "/resources", "/book", "/careers", "/contact", "/about"];
  const paths = [
    ...staticPaths,
    ...SERVICES.map((s) => `/services/${s.slug}`),
    ...RESOURCES.map((a) => `/resources/${a.slug}`),
    ...LEVELS.map((l) => `/careers/${l.slug}`),
    ...ROLES.map((r) => `/careers/${r.id}`),
  ];
  return paths.map((path) => ({
    url: `${base}${path || "/"}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : path.split("/").length > 2 ? 0.6 : 0.8,
  }));
}
