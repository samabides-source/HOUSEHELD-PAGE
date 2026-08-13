# Hausheld – Marketingseite

Öffentliche Website zur Web-App **Hausheld**, einem Haushaltsaufgaben-Tracker für Familien und WGs.
Übungsprojekt (Modul „Viben und Coden“) – Next.js 15, React 19, Tailwind CSS v4, TypeScript.
Zweisprachig: Deutsch (Standard) und Englisch (`/en`).

Die App selbst liegt in einem eigenen Projekt: <https://househeld-app.vercel.app/>

## Starten

```bash
npm install
```

```bash
npm run dev
```

http://localhost:3000 öffnen.

## Seiten

| Route (DE) | Route (EN) | Inhalt |
|---|---|---|
| `/` | `/en` | Hero, Problem/Lösung, drei Highlights, Ablauf in drei Schritten |
| `/features` | `/en/features` | Alle Funktionen sowie „Bewusst nicht dabei“ |
| `/faq` | `/en/faq` | Häufige Fragen zu Kosten, Konto, Daten und Grenzen |
| `/about` | `/en/about` | Hintergrund zum Projekt, eingesetzte Technik, Kontakt |
| `/app-testen` | `/en/try-the-app` | Anleitung zum Ausprobieren, Einstieg in die App |

## Inhalte ändern

Alle Texte stehen in [lib/content.de.ts](lib/content.de.ts) und
[lib/content.en.ts](lib/content.en.ts) (identische Struktur, siehe
[lib/content.types.ts](lib/content.types.ts)), sprachunabhängige Fakten (Name, Autor, URLs) in
[lib/site.ts](lib/site.ts). Die Seiten selbst enthalten kaum Fliesstext.

## SEO / AEO / GEO

- Strukturierte Daten (JSON-LD): `SoftwareApplication` auf der Startseite, `FAQPage` auf `/faq`,
  `HowTo` auf `/app-testen` – generiert aus [lib/jsonld.ts](lib/jsonld.ts).
- `sitemap.xml` und `robots.txt` decken beide Sprachen ab, inkl. `hreflang`-Alternates.
- [public/llms.txt](public/llms.txt) fasst die Seite maschinenlesbar für LLM-Crawler zusammen.
- OG-Bilder werden dynamisch generiert (`app/opengraph-image.tsx`, `app/en/opengraph-image.tsx`).

## Deployment

Auf Vercel als Next.js-Projekt importieren, ohne weitere Konfiguration. Nach dem ersten Deployment
die produktive Domain in `site.url` eintragen.

Details zur Architektur, Mehrsprachigkeit und den Design-Regeln: [CLAUDE.md](CLAUDE.md).
