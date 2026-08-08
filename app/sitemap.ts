import type { MetadataRoute } from "next";

import { nav, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return nav.map((item) => ({
    url: new URL(item.href, site.url).toString(),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: item.href === "/" ? 1 : 0.8,
  }));
}
