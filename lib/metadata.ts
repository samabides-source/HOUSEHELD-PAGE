import type { Metadata } from "next";

import type { PageKey } from "@/lib/content.types";
import { defaultLocale, dictionaries, path, site, type Locale } from "@/lib/site";

/**
 * Baut `title`, `description`, `alternates` (Canonical + hreflang) und
 * `openGraph` für eine Seite konsistent aus dem Sprachpaket auf.
 */
export function buildMetadata(locale: Locale, page: PageKey): Metadata {
  const dict = dictionaries[locale];
  const meta = dict.meta[page];
  const otherLocale: Locale = locale === "de" ? "en" : "de";
  const pagePath = path(locale, page);

  return {
    title: page === "home" ? { absolute: meta.title } : meta.title,
    description: meta.description,
    alternates: {
      canonical: pagePath,
      languages: {
        "de-CH": path("de", page),
        en: path("en", page),
        "x-default": path(defaultLocale, page),
      },
    },
    openGraph: {
      type: "website",
      locale: dict.ogLocale,
      alternateLocale: dictionaries[otherLocale].ogLocale,
      siteName: site.name,
      title: meta.title,
      description: meta.description,
      url: pagePath,
    },
  };
}
