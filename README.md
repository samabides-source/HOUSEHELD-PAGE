# Househeld – Marketingseite

Öffentliche Website zur Web-App **Househeld**, einem Haushaltsaufgaben-Tracker für Familien und WGs.
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

Danach folgte ein eigenständiger GEO-Audit anhand einer vorgegebenen Checkliste (siehe Abschnitt
oben). Jeder Punkt wurde einzeln geprüft – Code-Durchsicht, Live-Tests im Browser und, wo
sinnvoll, echte externe Werkzeuge statt blosser Einschätzung: die Schema-Markups wurden bei
validator.schema.org gegen die produktive URL validiert, nicht nur gegen lokal eingefügten Code.
Dabei kam ans Licht, dass die in den Metadaten hinterlegte Domain die ganze Zeit falsch war
(`hausheld-page` statt `househeld-page`) – ein reiner Tippfehler, der aber Canonical-URLs,
Open-Graph-Tags, Sitemap und sämtliche strukturierten Daten betraf und ohne den Audit
wahrscheinlich unentdeckt geblieben wäre. Nach der Korrektur und einem manuellen Deployment durch
den Nutzer liess sich die Seite erstmals vollständig live testen, inklusive eines
PageSpeed-Insights-Berichts, der zusätzlich noch unter dem Radar gebliebene
Kontrastprobleme sowie ein nicht spezifikationskonformes `llms.txt` aufdeckte – beides wurde im
Anschluss behoben und erneut verifiziert.

### Wichtige Anpassungen

- Das Home-Foto wurde mehrfach ausgetauscht, bis ein passendes Motiv gefunden war – die Lizenz
  wurde dabei sauber pro Bild dokumentiert.
- Die Inhalte wurden von einer einzelnen Content-Datei auf getrennte, sprachspezifische Dateien
  mit gemeinsamer Struktur umgestellt, als Grundlage für die Zweisprachigkeit.
- Die App-Verlinkung wurde von einer festen URL auf eine sprachabhängige Zuordnung umgebaut,
  ebenso das App-Mockup, das seither je nach Sprache passende Texte zeigt.
- Die Produktdefinition stand bisher nur in Meta-Daten und strukturierten Daten, nie im
  sichtbaren Seitentext – auf Home und About wurde je ein Satz ergänzt, der das direkt und
  eigenständig lesbar macht.
- Auf der Features-Seite wurde eine Zwischenüberschrift vor dem Funktions-Raster ergänzt, damit
  die Überschriftenhierarchie keinen Sprung mehr macht.
- `llms.txt` wurde vom reinen Fliesstext-Format auf das offiziell erwartete Markdown-Format mit
  echten Links umgestellt.

### Bugfixes

- Ein bei jedem Build neu gesetztes, bedeutungsloses Datum in der Sitemap wurde fest gesetzt.
- Die Sprachangabe des Dokuments wurde korrigiert.
- Überflüssige Screenreader-Ausgaben bei den Logo-Symbolen wurden unterdrückt.
- Verwaiste Verweise auf die alte Content-Datei wurden bereinigt.
- Eine überholte Aussage zur App-Oberfläche wurde im Leitfaden korrigiert.
- Eine falsche Platzhalter-Domain in den Metadaten wurde korrigiert – betraf Canonical-URLs,
  Open-Graph-Tags, Sitemap und alle strukturierten Daten der ganzen Seite.
- Mehrere Text/Hintergrund-Kombinationen mit zu geringem Kontrast (teils nur 2.5:1) wurden auf
  das WCAG-AA-Minimum von 4.5:1 angehoben.
- Der Produktname war – vermutlich aus der DE/EN-Aufteilung der Inhalte hervorgegangen – auf der
  gesamten Seite als „Hausheld" statt „Househeld" gelandet (Titel, Meta-Description, OG-Bilder,
  JSON-LD, sämtliche Fliesstexte in beiden Sprachen, `llms.txt`). Auf GitHub-Repo-Namen, Live-
  Domain und die verlinkte App als Referenz durchgehend auf „Househeld" korrigiert; die App selbst
  wurde dabei nicht angefasst.

## Deployment

Auf Vercel als Next.js-Projekt importieren, ohne weitere Konfiguration. Läuft produktiv unter
<https://househeld-page.vercel.app/>, hinterlegt in `site.url` (`lib/site.ts`).

Details zur Architektur, Mehrsprachigkeit und den Design-Regeln: [CLAUDE.md](CLAUDE.md).
