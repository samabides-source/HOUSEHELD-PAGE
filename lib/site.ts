import { de } from "@/lib/content.de";
import { en } from "@/lib/content.en";
import type { Dictionary, PageKey } from "@/lib/content.types";

/**
 * Sprachunabhängige Stammdaten: Name, URLs, Autor. Übersetzte Texte stehen in
 * `content.de.ts` / `content.en.ts`.
 */
export const site = {
  name: "Hausheld",
  /** URL dieser Marketingseite (für Metadaten, Sitemap, JSON-LD). */
  url: "https://hausheld-page.vercel.app",
  author: "Sandro Müntener",
  contactEmail: "samabides@gmail.com",
  context: "CAS AIMP – Modul «Viben und Coden», FS26",
} as const;

export const locales = ["de", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "de";

/** Die produktive Web-App – jede Sprache hat ihre eigene URL. */
export const appUrl: Record<Locale, string> = {
  de: "https://househeld-app.vercel.app/",
  en: "https://househeld-app.vercel.app/en",
};

export const dictionaries: Record<Locale, Dictionary> = { de, en };

/**
 * Deutsches und englisches Slug pro Seite. Meist identisch (Anglizismen wie
 * "Features"/"FAQ"), nur "app-testen" hat eine eigene englische Übersetzung.
 */
export const slugs: Record<Locale, Record<PageKey, string>> = {
  de: { home: "", features: "features", faq: "faq", about: "about", appTesten: "app-testen" },
  en: { home: "", features: "features", faq: "faq", about: "about", appTesten: "try-the-app" },
};

/** Baut den Pfad einer Seite für eine bestimmte Sprache, inkl. /en-Präfix. */
export function path(locale: Locale, page: PageKey): string {
  const slug = slugs[locale][page];
  const prefix = locale === "en" ? "/en" : "";
  if (!slug) return prefix || "/";
  return `${prefix}/${slug}`;
}

/** Absolute URL (für JSON-LD, OG-Tags). */
export function absoluteUrl(pathname: string): string {
  return new URL(pathname, site.url).toString();
}
