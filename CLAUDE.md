# CLAUDE.md

Leitfaden für die Arbeit an der **Marketingseite von Hausheld** – der öffentlichen Website zur
Web-App «Hausheld» (Übungsprojekt, Modul „Viben und Coden“).

**Wichtig: Dieses Repository enthält nicht die App selbst.** Die App liegt in einem eigenen
Projekt (`HOUSEHELD-APP`) und ist unter <https://househeld-app.vercel.app/> erreichbar. Hier
entsteht ausschliesslich die Seite, die auf die App verweist.

## Befehle

```bash
npm run dev
```

```bash
npm run build
```

```bash
npm run typecheck
```

```bash
npm run lint
```

Kommentare und Commit-Messages: **Deutsch** (Schweizer Schreibweise, „ss“ statt „ß“). Der
Seiteninhalt selbst ist zweisprachig – siehe „Mehrsprachigkeit“ unten.

## Architektur

Next.js 15 (App Router) + React 19 + Tailwind CSS v4 + TypeScript – derselbe Stack wie die App.
**Kein Server-Code, keine API-Routen, keine Datenbank.** Alle Seiten sind statische
Server-Komponenten; Client-Komponenten sind nur `SiteHeader` und `SiteFooter`, weil sie
`usePathname()` für aktiven Navigationszustand und Spracherkennung brauchen.

```
app/
  layout.tsx             Root-Layout: <html lang="de-CH">, Header + Footer, globale Metadaten
  page.tsx features/ faq/ about/ app-testen/    Deutsche Seiten (Standard, kein Präfix)
  en/                     Englische Seiten, gespiegelte Struktur
    layout.tsx            Setzt <div lang="en"> um den Teilbaum (siehe „Mehrsprachigkeit“)
    page.tsx features/ faq/ about/ try-the-app/
  not-found.tsx           404 (Deutsch) · en/not-found.tsx (Englisch)
  sitemap.ts robots.ts    SEO-Basis, beide Sprachen inkl. hreflang
  opengraph-image.tsx apple-icon.tsx    Dynamisch generiert (next/og)
  en/opengraph-image.tsx  Englische Variante des OG-Bilds
components/
  SiteHeader.tsx          Sticky-Header ("use client"), inkl. Sprachumschalter
  SiteFooter.tsx          Footer mit Navigation ("use client", braucht usePathname)
  Section.tsx             Section + SectionHeading (Breite, Rhythmus, Überschriften)
  CtaButton.tsx           CtaLink (intern) und CtaExternal (in die App)
  CtaBanner.tsx           Abschluss-Aufruf, nimmt `locale`-Prop
  FeatureCard.tsx FaqList.tsx PhotoFrame.tsx    Generisch, sprachunabhängig
  AppMockup.tsx           Nimmt `locale`-Prop, Texte aus `dictionaries[locale].mockup`
  JsonLd.tsx              Bettet ein JSON-LD-Objekt als <script> ein
lib/
  site.ts                 Sprachunabhängige Fakten (Name, URLs, Autor) + Routing-Helfer (`path()`)
  content.types.ts        TypeScript-Typ für ein vollständiges Sprachpaket
  content.de.ts content.en.ts    Alle Texte, je Sprache eine Datei, identische Struktur
  metadata.ts             `buildMetadata(locale, page)` – Title/Description/Canonical/hreflang
  jsonld.ts                Generatoren für SoftwareApplication-, FAQPage- und HowTo-Schema
  utils.ts                 cn()
public/
  llms.txt                 Maschinenlesbare Zusammenfassung für LLM-Crawler (GEO)
```

## Mehrsprachigkeit (DE Standard, EN unter /en)

Deutsch liegt an der Wurzel (`/`, `/features`, …) ohne Präfix, Englisch unter `/en/*`. Die
Slugs sind meist identisch (Anglizismen wie „Features“/„FAQ“), nur `app-testen` → `en/try-the-app`
weicht ab. Diese Zuordnung steht ausschliesslich in `slugs` (`lib/site.ts`) – niemals Pfade von
Hand zusammensetzen, immer `path(locale, "appTesten")` verwenden.

**`<html lang>` ist technisch bedingt immer `de-CH`** (Next.js erlaubt nur ein `<html>`-Element,
gesetzt im Root-Layout, das für beide Sprachbäume gilt). Der englische Teilbaum bekommt sein
`lang="en"` stattdessen auf einem `<div>` in `app/en/layout.tsx` – das ist für Screenreader und
Übersetzungstools ausreichend. Für Suchmaschinen zählen ohnehin primär die `hreflang`-Angaben aus
`buildMetadata()`, nicht das `html`-Attribut.

Neuen Text ergänzen: **immer in `content.de.ts` UND `content.en.ts`**, an derselben Stelle in der
Struktur (TypeScript meldet fehlende Felder über `Dictionary` in `content.types.ts`). Das gilt
auch für `mockup` in `AppMockup.tsx` – die App ist inzwischen ebenfalls zweisprachig
(<https://househeld-app.vercel.app/en>), also zeigt das Mockup auf `/en/*` englische Texte.
Die App-Verlinkung selbst läuft über `appUrl[locale]` (`lib/site.ts`), nie über eine feste URL.

## Inhalte pflegen

**Texte gehören in `content.de.ts`/`content.en.ts`, nicht in die Seiten.** Ein neues Feature ist
ein neuer Eintrag in `features.items` (in beiden Dateien), eine neue Frage ein Eintrag in
`faq.items` – die Seiten rendern nur, was dort steht. Name, Autor und die URL der App stehen in
`lib/site.ts`.

Neue Seite anlegen: `PageKey` in `content.types.ts` erweitern, Eintrag in `slugs` (`lib/site.ts`),
Texte in beiden Sprachpaketen ergänzen, dann je einen Ordner unter `app/` und `app/en/` anlegen.

Jede Seite ruft `buildMetadata(locale, page)` für ihre `metadata` auf – das erzeugt Title,
Description, Canonical und hreflang-Alternates konsistent aus dem Sprachpaket.

## Strukturierte Daten (JSON-LD)

- **Home**: `SoftwareApplication` (Name, Beschreibung, Autor, Preis) – hilft SEO/GEO, Hausheld
  korrekt als kostenlose Web-App zu erkennen.
- **FAQ**: `FAQPage`, generiert direkt aus `faq.items` – Voraussetzung für Rich Snippets und
  eine zuverlässige Quelle für Answer-Engines.
- **App testen**: `HowTo`, generiert aus `appTesten.walkthrough`.

Alle drei über `lib/jsonld.ts` und die `<JsonLd data={...} />`-Komponente eingebunden. Neue
strukturierte Daten immer aus dem Sprachpaket ableiten, nie Text duplizieren.

`public/llms.txt` braucht laut Lighthouse-Kategorie „Agentisches Browsing“ zwingend eine
H1-Überschrift **und** echte Markdown-Links (`[Text](https://...)`, absolute URLs) – reine
Pfad-Auflistungen ohne Link-Syntax gelten als Fehler. Bei Änderungen mit PageSpeed Insights
gegenprüfen.

## Faktentreue

Die Seite darf der App nichts versprechen, was sie nicht kann. Verbindlich sind:

- Kein Login, kein Konto, keine Cloud. Alle Daten liegen in **IndexedDB im Browser**.
- Daten gelten **pro Browser/Gerät** – es gibt (noch) keine Synchronisation zwischen Geräten.
  Diese Einschränkung wird offen benannt, nicht kaschiert.
- Fotos: max. **10 pro Aufgabe**, max. **10 MB** je Datei, Verkleinerung auf 1600 px als WebP.
- Aufgaben brauchen **nur einen Titel**; alles andere ist optional.
- **Kein Papierkorb** – Löschen ist endgültig und verlangt eine zweite Bestätigung.
- „dringend“ ist eine **Priorität, kein Tag**.
- Nicht im Umfang der App: Auth, KI, Push.
- Die App ist mittlerweile ebenfalls zweisprachig (Deutsch/Englisch), analog zu dieser
  Marketingseite: <https://househeld-app.vercel.app/> (DE) und `/en` (EN).

Ändert sich eine dieser Aussagen in der App, gehört die Korrektur in beide Sprachpakete.

## Design-Regeln

Die Seite übernimmt bewusst die visuelle Sprache der App, damit der Übergang nahtlos wirkt:

| Element | Regel |
|---|---|
| Akzentfarbe | Indigo (`indigo-600` = `#4f46e5`), sparsam eingesetzt |
| Hintergrund | `--color-canvas` (`#f5f6f8`), Karten weiss |
| Karten | `rounded-2xl` mit `ring-1 ring-slate-200/80`, keine harten Schatten |
| Buttons/Chips | `rounded-full`, `font-extrabold` |
| Typografie | System-Sans über `--font-sans`, Titel `font-extrabold tracking-tight` |
| Fliesstext | `text-slate-600`, Metadaten kleiner und gedämpft |
| Breite | `max-w-6xl` über `<Section>`, Fliesstext `max-w-2xl`/`max-w-3xl` |

**`text-slate-500` und `text-slate-400` auf hellem Grund nie für Fliesstext verwenden** – beide
fallen unter die WCAG-AA-Kontrastgrenze (4.5:1 bei normaler Textgrösse), Lighthouse markiert das
als Fehler. Minimum ist `text-slate-600`. Bei weisser Schrift auf Farbflächen (z. B. Initialen-
Kreise in `AppMockup.tsx`) reicht `-600` nicht bei jedem Farbton – `emerald`/`sky`/`pink`
brauchen `-700`, `violet` reicht `-600`; bei neuen Farben mit dem Contrast-Checker in den
Chrome DevTools (oder PageSpeed Insights) nachprüfen.

Bewusst **keine Google-Font** und keine externen Assets – der Build funktioniert ohne
Netzwerkzugriff, und es werden keine Daten an Dritte übertragen. (Die Foto-Assets unter
`public/images/` sind Ausnahmen mit eigener Lizenzdokumentation, siehe unten.)

Tailwind-Klassen immer als **vollständige Klassennamen** schreiben (auch in Props), niemals
dynamisch zusammensetzen – `bg-${x}-100` findet der Scanner nicht.

## Konventionen

- Server-Komponenten sind der Standard. `"use client"` nur, wenn eine Komponente wirklich
  Interaktivität oder `usePathname()` braucht (`SiteHeader`, `SiteFooter`).
- Imports über den Alias `@/` (siehe `tsconfig.json`).
- Interne Links immer über `next/link` und `path(locale, page)`, externe über
  `<a target="_blank" rel="noreferrer">` bzw. `CtaExternal`.
- Interaktive Muster nach Möglichkeit ohne JavaScript lösen (siehe `FaqList` mit `<details>`).
- Abschnitte immer in `<Section>` wickeln, damit Breite und Abstände einheitlich bleiben.
- Kein `middleware.ts` – die Sprachumschaltung läuft rein über Next.js-Routing (Ordnerstruktur),
  nicht über Rewrites/Redirects auf Server-Ebene. Passt zum Grundsatz „kein Server-Code“.

## Deployment

Vercel, Framework-Preset „Next.js“, keine Umgebungsvariablen, kein Build-Override nötig. Nach dem
ersten Deployment die produktive Domain in `site.url` (`lib/site.ts`) eintragen – davon hängen
Metadaten, Sitemap, `robots.txt`, JSON-LD-URLs und die OG-Bilder ab.

## Offene Punkte

- `AppMockup` ist eine nachgebaute Karte, kein Screenshot. Sobald echte Screenshots der App
  vorliegen, kann die Komponente ersetzt werden.
- `dateModified` in `lib/jsonld.ts` ist aktuell hart auf `"2026-08"` gesetzt – bei grösseren
  inhaltlichen Änderungen nachziehen.

## Fotos (Home/Features)

Home und Features enthalten je 1 Foto unter `public/images/`. Lokal eingebunden statt verlinkt,
damit der Build ohne Netzwerkzugriff funktioniert. Die beiden Fotos haben **unterschiedliche
Lizenzen** (eines CC0/gemeinfrei, eines Pexels-Lizenz) – Quelle und genaue Lizenz stehen in
`public/images/CREDITS.md`, dort unbedingt nachsehen, bevor ein Foto ersetzt oder ein neues
ergänzt wird.
