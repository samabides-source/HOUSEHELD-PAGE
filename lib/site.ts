/**
 * Zentrale Stammdaten der Marketingseite. Texte, die an mehreren Stellen
 * auftauchen (Name, Claim, App-Link), stehen nur hier.
 */
export const site = {
  name: "Hausheld",
  claim: "Haushaltsaufgaben für Familien und WGs an einem Ort.",
  description:
    "Hausheld ist ein Haushaltsaufgaben-Tracker für Familien und WGs: Aufgaben mit Fotos dokumentieren, Personen zuweisen, mit Tags kategorisieren.",
  /** URL dieser Marketingseite (für Metadaten und Sitemap). */
  url: "https://hausheld-page.vercel.app",
  /** Die produktive Web-App. */
  appUrl: "https://househeld-app.vercel.app/",
  author: "Sandro Müntener",
  context: "CAS AIMP – Modul «Viben und Coden», FS26",
} as const;

/** Hauptnavigation – Reihenfolge bestimmt Header und Footer. */
export const nav = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
  { href: "/app-testen", label: "App testen" },
] as const;
