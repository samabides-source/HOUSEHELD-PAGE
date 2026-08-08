# Hausheld – Marketingseite

Öffentliche Website zur Web-App **Hausheld**, einem Haushaltsaufgaben-Tracker für Familien und WGs.
Übungsprojekt (Modul „Viben und Coden“) – Next.js 15, React 19, Tailwind CSS v4, TypeScript.

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

| Route | Inhalt |
|---|---|
| `/` | Hero, Problem/Lösung, drei Highlights, Ablauf in drei Schritten |
| `/features` | Alle Funktionen sowie „Bewusst nicht dabei“ |
| `/faq` | Häufige Fragen zu Kosten, Konto, Daten und Grenzen |
| `/about` | Hintergrund zum Projekt, eingesetzte Technik, Kontakt |
| `/app-testen` | Anleitung zum Ausprobieren, Einstieg in die App |

## Inhalte ändern

Alle Texte stehen in [lib/content.ts](lib/content.ts), Name, Claim und Links in
[lib/site.ts](lib/site.ts). Die Seiten selbst enthalten kaum Fliesstext.

## Deployment

Auf Vercel als Next.js-Projekt importieren, ohne weitere Konfiguration. Nach dem ersten Deployment
die produktive Domain in `site.url` eintragen.

Details zur Architektur und zu den Design-Regeln: [CLAUDE.md](CLAUDE.md).
