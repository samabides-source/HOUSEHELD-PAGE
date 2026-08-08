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

Sprache in Inhalten, Kommentaren und Commit-Messages: **Deutsch** (Schweizer Schreibweise, „ss“
statt „ß“).

## Architektur

Next.js 15 (App Router) + React 19 + Tailwind CSS v4 + TypeScript – derselbe Stack wie die App.
**Kein Server-Code, keine API-Routen, keine Datenbank.** Alle Seiten sind statische
Server-Komponenten; die einzige Client-Komponente ist der Header, weil er `usePathname()` für den
aktiven Navigationszustand braucht.

```
app/
  layout.tsx            Header + Footer, globale Metadaten
  page.tsx              Home (Hero, Problem/Lösung, Highlights, Ablauf, CTA)
  features/             Alle Funktionen + „Bewusst nicht dabei“
  faq/                  Häufige Fragen
  about/                Hintergrund, Technik, Kontakt
  app-testen/           Anleitung zum Ausprobieren, Links in die App
  not-found.tsx         404
  sitemap.ts robots.ts  SEO-Basis
components/
  SiteHeader.tsx        Sticky-Header ("use client")
  SiteFooter.tsx        Footer mit Navigation
  Section.tsx           Section + SectionHeading (Breite, Rhythmus, Überschriften)
  CtaButton.tsx         CtaLink (intern) und CtaExternal (in die App)
  CtaBanner.tsx         Abschluss-Aufruf, auf jeder Seite identisch
  FeatureCard.tsx       Karte für einen Feature-Eintrag
  FaqList.tsx           Akkordeon auf <details>/<summary>, ohne JavaScript
  AppMockup.tsx         Schematische Aufgabenkarte als Hero-Visual
lib/
  site.ts               Name, Claim, URLs, Autor, Navigation
  content.ts            Alle Texte: highlights, features, steps, faqs
  utils.ts              cn()
```

## Inhalte pflegen

**Texte gehören nach `lib/content.ts`, nicht in die Seiten.** Ein neues Feature ist ein neuer
Eintrag im Array `features`, eine neue Frage ein Eintrag in `faqs` – die Seiten rendern nur, was
dort steht. Name, Claim und die URL der App stehen ausschliesslich in `lib/site.ts`.

Neue Seite anlegen: Ordner unter `app/` erstellen **und** den Eintrag in `nav` (`lib/site.ts`)
ergänzen – Header, Footer und Sitemap ziehen ihre Einträge von dort.

Jede Seite exportiert `metadata` mit `title` (nur der kurze Name, das Template in `layout.tsx`
hängt „· Hausheld“ an) und einer eigenen `description`.

## Faktentreue

Die Seite darf der App nichts versprechen, was sie nicht kann. Verbindlich sind:

- Kein Login, kein Konto, keine Cloud. Alle Daten liegen in **IndexedDB im Browser**.
- Daten gelten **pro Browser/Gerät** – es gibt (noch) keine Synchronisation zwischen Geräten.
  Diese Einschränkung wird offen benannt, nicht kaschiert.
- Fotos: max. **10 pro Aufgabe**, max. **10 MB** je Datei, Verkleinerung auf 1600 px als WebP.
- Aufgaben brauchen **nur einen Titel**; alles andere ist optional.
- **Kein Papierkorb** – Löschen ist endgültig und verlangt eine zweite Bestätigung.
- „dringend“ ist eine **Priorität, kein Tag**.
- Nicht im Umfang der App: Auth, KI, Push, Mehrsprachigkeit.

Ändert sich eine dieser Aussagen in der App, gehört die Korrektur in `lib/content.ts`.

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

Bewusst **keine Google-Font** und keine externen Assets – der Build funktioniert ohne
Netzwerkzugriff, und es werden keine Daten an Dritte übertragen.

Tailwind-Klassen immer als **vollständige Klassennamen** schreiben (auch in Props), niemals
dynamisch zusammensetzen – `bg-${x}-100` findet der Scanner nicht.

## Konventionen

- Server-Komponenten sind der Standard. `"use client"` nur, wenn eine Komponente wirklich
  Interaktivität braucht (aktuell nur `SiteHeader`).
- Imports über den Alias `@/` (siehe `tsconfig.json`).
- Interne Links immer über `next/link`, externe über `<a target="_blank" rel="noreferrer">`
  bzw. `CtaExternal`.
- Interaktive Muster nach Möglichkeit ohne JavaScript lösen (siehe `FaqList` mit `<details>`).
- Abschnitte immer in `<Section>` wickeln, damit Breite und Abstände einheitlich bleiben.

## Deployment

Vercel, Framework-Preset „Next.js“, keine Umgebungsvariablen, kein Build-Override nötig. Nach dem
ersten Deployment die produktive Domain in `site.url` (`lib/site.ts`) eintragen – davon hängen
Metadaten, Sitemap und `robots.txt` ab.

## Offene Punkte

- Kontaktadresse auf `/about` ist ein Platzhalter (`TODO` im Code).
- `AppMockup` ist eine nachgebaute Karte, kein Screenshot. Sobald echte Screenshots der App
  vorliegen, kann die Komponente ersetzt werden.
