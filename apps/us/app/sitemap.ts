import type { MetadataRoute } from "next";
import { buildSitemap } from "@solvrex/ui/server";

export default function sitemap(): MetadataRoute.Sitemap {
  return buildSitemap();
}
