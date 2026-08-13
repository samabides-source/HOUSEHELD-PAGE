import type { Dictionary } from "@/lib/content.types";
import { absoluteUrl, path, site, type Locale } from "@/lib/site";

/**
 * Strukturierte Daten (schema.org) pro Seite. Wird direkt aus den
 * Sprachpaketen generiert – keine Zweitpflege der Texte.
 */

export function softwareApplicationJsonLd(locale: Locale, dict: Dictionary) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: site.name,
    description: dict.description,
    url: absoluteUrl(path(locale, "home")),
    applicationCategory: "LifestyleApplication",
    operatingSystem: "Any (web browser)",
    inLanguage: dict.htmlLang,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "CHF",
    },
    author: {
      "@type": "Person",
      name: site.author,
    },
    creator: {
      "@type": "Person",
      name: site.author,
    },
    dateModified: "2026-08",
  };
}

export function faqPageJsonLd(locale: Locale, dict: Dictionary) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    url: absoluteUrl(path(locale, "faq")),
    inLanguage: dict.htmlLang,
    mainEntity: dict.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function howToJsonLd(locale: Locale, dict: Dictionary) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: dict.appTesten.title,
    description: dict.appTesten.lead,
    url: absoluteUrl(path(locale, "appTesten")),
    inLanguage: dict.htmlLang,
    totalTime: "PT5M",
    step: dict.appTesten.walkthrough.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.title,
      text: step.text,
    })),
  };
}
