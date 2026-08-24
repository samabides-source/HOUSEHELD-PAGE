# Househeld – Marketingseite

Öffentliche Website zur Web-App **Househeld**, einem Haushaltsaufgaben-Tracker für Familien und WGs.
Übungsprojekt (Modul „Viben und Coden") – Next.js 15, React 19, Tailwind CSS v4, TypeScript.
Zweisprachig: Deutsch (Standard) und Englisch (`/en`).

Die App selbst liegt in einem eigenen Projekt:  
https://househeld-app.vercel.app/  
https://github.com/samabides-source/HOUSEHELD-APP

Autor: Sandro Müntener ([samabides@gmail.com](mailto:samabides@gmail.com))

## Starten

```bash
npm install
```

```bash
npm run dev
```

http://localhost:3000 öffnen.

```bash
npm run build
```

```bash
npm run lint
```

```bash
npm run typecheck
```

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

Lizenzangaben zu den verwendeten Fotos: [public/images/CREDITS.md](public/images/CREDITS.md).

## Deployment

Auf Vercel als Next.js-Projekt importieren, ohne weitere Konfiguration. Läuft produktiv unter
<https://househeld-page.vercel.app/>, hinterlegt in `site.url` (`lib/site.ts`).

Details zur Architektur, Mehrsprachigkeit und den Design-Regeln: [CLAUDE.md](CLAUDE.md).

## GEO-Checkliste (Selbst-Audit)

Systematisch durchgegangen und – wo mit vertretbarem Aufwand möglich – umgesetzt. Live gegen
`https://househeld-page.vercel.app/` geprüft (Schema-Validierung, PageSpeed Insights, manueller
KI-Test).

**A. Fundament**
- [x] Eindeutiger Title-Tag je Seite (max. ~60 Zeichen, Produktname + Nutzen)
- [x] Meta-Description je Seite (max. ~155 Zeichen)
- [x] Genau eine H1 pro Seite, logische Hierarchie ohne Sprünge (Sprung auf `/features` behoben:
      neue H2 „Funktionen im Überblick“ vor dem Feature-Grid)
- [x] Ladezeit geprüft (PageSpeed Insights, mobil): **Leistung 100**
- [x] Mobile-Darstellung geprüft (kein horizontaler Overflow, 375 px getestet)
- [x] Crawling erlaubt: `robots.txt` erlaubt alle Agents, kein `noindex` im Projekt, KI-Crawler
      (GPTBot, OAI-SearchBot, PerplexityBot) nicht ausgesperrt
- [x] `Google-Extended` nicht vorsorglich gesperrt

**B. Content-Struktur**
- [x] Direkte Antwort in den ersten Sätzen (Home-Lead umformuliert: startet jetzt mit „Househeld
      ist ein kostenloser Haushaltsaufgaben-Tracker für Familien und WGs“ statt einer Frage)
- [x] Produktname, Kategorie und Zweck **ausgeschrieben im sichtbaren Text** (stand vorher nur in
      Meta-Description und JSON-LD – jetzt auch auf Home und About)
- [x] Konkrete Fakten statt Floskeln (Zahlen wie 10 Fotos, 10 MB, 6 Personen/14 Aufgaben statt
      Marketing-Buzzwords)
- [x] FAQ-Sektion: 9 eigenständige Fragen, jede Antwort ohne Seitenkontext verständlich
- [x] Listen/Tabellen zur Strukturierung vorhanden (Schritte, Checks, Tech-Stack)
- [x] Klarer Call-to-Action zur App auf jeder Seite

**C. Technik**
- [x] Schema.org-Markup passend zum Inhalt: `SoftwareApplication` (Home), `FAQPage` (FAQ),
      `HowTo` (App testen), je Sprache
- [x] Markup live validiert (validator.schema.org): **alle drei Typen 0 Fehler / 0 Warnungen**
- [x] Semantisches HTML (`header`, `nav`, `main`, `section`, `footer`)
- [x] Open-Graph-Tags vorhanden und korrekt (dynamisch generierte Bilder, Best Practices/SEO je
      100 bei PageSpeed)

**D. Praxistest**
- [x] KI-Test manuell durchgeführt: ChatGPT findet und versteht die Seite; Microsoft Copilot
      (noch) nicht – vermutlich Bing-Indexierungsverzögerung bei einer sehr neuen Domain ohne
      Backlinks, kein technischer Fehler auf unserer Seite
- [x] Snippet-Test (H1 + erster Absatz) – aussagekräftig seit der direkten Produktdefinition
- [x] Zweimal gefragt (getrennte Chats), Tendenz bestätigt sich

**Off-Site**
- [x] Produktname/Kurzbeschreibung deckungsgleich zwischen Marketingseite und App-Dokumentation
- [ ] Präsenz ausserhalb der Domain (Reddit, Vergleichsseite o. Ä.) – bewusst nicht umgesetzt,
      da das eigenständige Veröffentlichung unter fremdem Namen bedeuten würde
- [x] Keine widersprüchlichen Angaben gefunden

**Zusätzlich über den PageSpeed-Bericht gefunden und behoben** (nicht Teil der ursprünglichen
Checkliste, aber direkt daraus entstanden):
- Barrierefreiheit: mehrere Text/Hintergrund-Kombinationen lagen unter dem WCAG-AA-Minimum
  (4.5:1) – u. a. Footer-Zeile nur 2.6:1, Mockup-Initialen teils nur 2.5:1. Alle Werte über
  die tatsächlich gerenderten Farben nachgerechnet und auf mindestens 4.5:1 (durchgehend
  5.3–7.6:1) korrigiert.
- Neue Lighthouse-Kategorie „Agentisches Browsing“: `llms.txt` entsprach nicht den Empfehlungen
  (keine Markdown-Links) – auf das offizielle Format mit H1, Kurzbeschreibung und absoluten
  Markdown-Links pro Seite umgestellt.
- Dabei aufgefallen: `site.url` zeigte auf eine falsche Platzhalter-Domain
  (`hausheld-page.vercel.app` statt `househeld-page.vercel.app`) – betraf Canonical, OG-Tags,
  Sitemap und JSON-LD auf der gesamten Seite, jetzt korrigiert.

## Security-Checkliste (Selbst-Audit)

Systematisch gegen Code, Git-History und Live-Deployment (`https://househeld-page.vercel.app/`)
geprüft. Die Checkliste ist für Stacks mit eigenem Backend/Datenbank ausgelegt – diese Seite ist
eine rein statische Next.js-Seite ohne Server-Code, ohne API-Routen, ohne Datenbank und ohne
Login, entsprechend entfallen mehrere Punkte als nicht anwendbar statt als übersehen.

**Kritische Punkte**
- [x] Keine Secrets im Code/Repo: Repo-Suche nach `key`/`secret`/`token`/`password`/`api` ohne
      Treffer, keine `.env`-Datei im Repo oder in der Git-History, `.env*` korrekt in
      `.gitignore`
- [x] Keine Secrets im Client-Bundle: kein einziger `NEXT_PUBLIC_`/`process.env`-Zugriff im
      gesamten Code, Production-Build und Seitenquelltext geprüft
- [x] Login/Accounts – entfällt: keine Auth-Bibliothek, kein `middleware.ts`, keine eigene
      Authentifizierung (App-Link verweist nur extern auf `househeld-app.vercel.app`)
- [x] Datenbank-Zugriffsregeln – entfällt: keine Datenbank im Projekt
- [x] API-Routen prüfen sich selbst – entfällt: kein `app/api/**`, keine Server Actions;
      `/api/test`, `/admin`, `/.env` liefern live 404
- [x] Deployment-Schutz Vercel: Live-URL im frischen Browser-Tab geprüft, nur öffentliche Inhalte
      sichtbar, keine Admin-/Testseiten erreichbar

**Empfohlene Punkte**
- [x] Claude Code absichern: `.claude/settings.local.json` erlaubt nur `node`/`npm --version`,
      keine Hooks, kein `.mcp.json`
- [ ] Abhängigkeiten: Pakete plausibel, Lockfile committed, aber `npm audit` meldet 3
      High-Findings (`postcss`, `sharp`, gebündelt in `next@15.5.23`, u. a. Pfad-Traversal über
      SourceMaps). Fix erfordert Major-Update auf `next@16.3.1` – das bricht aktuell die
      ESLint-Flat-Config (`eslint-config-next@16` inkompatibel mit `FlatCompat` in
      `eslint.config.mjs`), deshalb zurückgestellt statt blind gemergt
- [ ] GitHub-Repo-Hygiene (Branch Protection, Secret Scanning, Dependabot Alerts) – bewusst nicht
      geprüft/konfiguriert, Soloprojekt ausserhalb des Scopes dieses Audits
- [x] Umgang mit fremden Eingaben: keine Formulare/Inputs im Code, daher keine Angriffsfläche;
      `dangerouslySetInnerHTML` in `JsonLd.tsx` escaped `<` als Härtung, auch wenn der Inhalt
      aktuell nur aus statischem Content besteht
- [x] Kosten-/Missbrauchsschutz – entfällt: kein LLM-Call, kein Mailversand, keine schreibenden
      Endpunkte
- [x] Security Headers: `Content-Security-Policy`, `X-Frame-Options`, `X-Content-Type-Options`,
      `Referrer-Policy` in [next.config.ts](next.config.ts) ergänzt, gegen einen lokalen
      Production-Build verifiziert
- [x] Betrieb – entfällt: kein Server-Code, das Logs mit Tokens/Personendaten erzeugen könnte,
      keine Datenbank, die ein Backup bräuchte
