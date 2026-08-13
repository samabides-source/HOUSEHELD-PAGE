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

## Entwicklungsverlauf

### Meilensteine

Die Marketingseite entstand als Grundgerüst mit fünf Seiten (Home, Features, FAQ, About, App
testen), im gleichen Design wie die App. Danach kamen eine Kontaktadresse auf der About-Seite
sowie Fotos auf Home und Features dazu, und die About-Seite wurde neu strukturiert: Projekt,
Technik und Hintergrundentscheide sind seither in einer aufklappbaren Kachel zusammengefasst.

Der grösste Schritt war eine vollständige SEO-, AEO- und GEO-Überarbeitung kombiniert mit dem
Aufbau einer kompletten englischen Sprachversion. Die Inhalte wurden dafür in getrennte deutsche
und englische Dateien mit gemeinsamer Struktur aufgeteilt, Deutsch ohne Präfix, Englisch unter
eigenem Pfad. Ergänzt wurden strukturierte Daten für Suchmaschinen und Sprachassistenten,
dynamisch generierte Vorschaubilder, eine maschinenlesbare Zusammenfassung für KI-Crawler sowie
Sprachverweise auf jeder Seite.

Zum Schluss wurde die Verlinkung zur App sprachabhängig gemacht, nachdem auch die App selbst eine
englische Version erhielt: Alle Links sowie das App-Mockup zeigen seither je nach gewählter
Sprache auf die passende Version.

### Wichtige Anpassungen

- Das Home-Foto wurde mehrfach ausgetauscht, bis ein passendes Motiv gefunden war – die Lizenz
  wurde dabei sauber pro Bild dokumentiert.
- Die Inhalte wurden von einer einzelnen Content-Datei auf getrennte, sprachspezifische Dateien
  mit gemeinsamer Struktur umgestellt, als Grundlage für die Zweisprachigkeit.
- Die App-Verlinkung wurde von einer festen URL auf eine sprachabhängige Zuordnung umgebaut,
  ebenso das App-Mockup, das seither je nach Sprache passende Texte zeigt.

### Bugfixes

- Ein bei jedem Build neu gesetztes, bedeutungsloses Datum in der Sitemap wurde fest gesetzt.
- Die Sprachangabe des Dokuments wurde korrigiert.
- Überflüssige Screenreader-Ausgaben bei den Logo-Symbolen wurden unterdrückt.
- Verwaiste Verweise auf die alte Content-Datei wurden bereinigt.
- Eine überholte Aussage zur App-Oberfläche wurde im Leitfaden korrigiert.

## Deployment

Auf Vercel als Next.js-Projekt importieren, ohne weitere Konfiguration. Nach dem ersten Deployment
die produktive Domain in `site.url` eintragen.

Details zur Architektur, Mehrsprachigkeit und den Design-Regeln: [CLAUDE.md](CLAUDE.md).
