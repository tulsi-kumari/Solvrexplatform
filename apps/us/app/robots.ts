import type { MetadataRoute } from "next";
import { buildRobots } from "@solvrex/ui/server";

export default function robots(): MetadataRoute.Robots {
  return buildRobots();
}
