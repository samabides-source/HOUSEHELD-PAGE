import type { MetadataRoute } from "next";

import type { PageKey } from "@/lib/content.types";
import { absoluteUrl, locales, path } from "@/lib/site";

const pages: PageKey[] = ["home", "features", "faq", "about", "appTesten"];

/** Feste Daten statt `new Date()` bei jedem Build – bedeutungsvoller für Crawler. */
const LAST_MODIFIED = new Date("2026-08-13");

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    pages.map((page) => ({
      url: absoluteUrl(path(locale, page)),
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly" as const,
      priority: page === "home" ? 1 : 0.8,
      alternates: {
        languages: {
          "de-CH": absoluteUrl(path("de", page)),
          en: absoluteUrl(path("en", page)),
        },
      },
    })),
  );
}
