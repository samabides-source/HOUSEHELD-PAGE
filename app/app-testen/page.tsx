import type { Metadata } from "next";

import { CtaExternal, CtaLink } from "@/components/CtaButton";
import { Section, SectionHeading } from "@/components/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "App testen",
  description:
    "Hausheld in wenigen Minuten ausprobieren: App öffnen, Beispieldaten laden, eigene Aufgabe erfassen – ohne Konto und ohne Installation.",
};

const walkthrough = [
  {
    title: "App öffnen",
    text: "Der Link führt direkt in die Aufgabenübersicht. Es erscheint keine Anmeldung und keine Einwilligungsabfrage – die App startet leer.",
  },
  {
    title: "Beispieldaten laden",
    text: "Unter «Einstellungen → Beispieldaten laden» füllen sich 6 Personen und 14 Aufgaben inklusive Fotos ein. So lässt sich die App ansehen, ohne selbst tippen zu müssen.",
  },
  {
    title: "Filtern und suchen",
    text: "Auf der Startseite nach Status, Priorität, Person oder Tag filtern und zwischen Listen- und Board-Ansicht wechseln.",
  },
  {
    title: "Eigene Aufgabe erfassen",
    text: "Über «Neu» eine Aufgabe anlegen: Titel eingeben, Foto hinzufügen, eine Person zuweisen, Tag setzen. Am Handy lässt sich das Foto direkt mit der Kamera aufnehmen.",
  },
  {
    title: "Wieder aufräumen",
    text: "Unter «Einstellungen» setzt der Reset alles zurück. Danach ist die App wieder leer – ohne Rückstände.",
  },
];

const checks = [
  "Moderner Browser (Chrome, Edge, Firefox oder Safari)",
  "Kein privater Modus – dort ist der lokale Speicher gesperrt",
  "Handy, Tablet oder Desktop; die Oberfläche passt sich an",
];

export default function AppTestenPage() {
  return (
    <>
      <Section className="pt-10 sm:pt-16">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              as="h1"
              eyebrow="App testen"
              title="In fünf Minuten durch die ganze App"
              lead="Kein Konto, keine Installation, keine Testdaten-Anfrage. Öffnen, ausprobieren, zurücksetzen."
            />

            <div className="mt-8 flex flex-wrap gap-3">
              <CtaExternal href={site.appUrl}>App öffnen ↗</CtaExternal>
              <CtaLink href="/features" variant="secondary">
                Vorher: Funktionen
              </CtaLink>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200/80">
            <h2 className="text-lg font-extrabold tracking-tight">Kurz vorab</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {checks.map((check) => (
                <li key={check} className="flex gap-3">
                  <span aria-hidden className="text-indigo-600">
                    ✓
                  </span>
                  <span>{check}</span>
                </li>
              ))}
            </ul>

            <p className="mt-5 rounded-xl bg-indigo-50 px-4 py-3 text-xs leading-relaxed text-indigo-900">
              Alles, was du eingibst, bleibt auf deinem Gerät. Es wird nichts hochgeladen und nichts
              ausgewertet.
            </p>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Schritt für Schritt</h2>

        <ol className="mt-8 space-y-4">
          {walkthrough.map((step, index) => (
            <li
              key={step.title}
              className="flex gap-5 rounded-2xl bg-white p-6 ring-1 ring-slate-200/80"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-sm font-extrabold text-white">
                {index + 1}
              </span>
              <div>
                <h3 className="text-lg font-extrabold tracking-tight">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section className="pb-16 sm:pb-24">
        <div className="rounded-2xl bg-indigo-600 px-6 py-10 text-center sm:px-12">
          <h2 className="text-2xl font-extrabold tracking-tight text-white text-balance sm:text-3xl">
            Los geht&rsquo;s
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-indigo-100 text-pretty">
            Die App öffnet sich in einem neuen Tab – diese Seite bleibt geöffnet, falls du die
            Schritte nachlesen willst.
          </p>
          <div className="mt-6 flex justify-center">
            <CtaExternal href={site.appUrl} variant="secondary">
              {site.name} öffnen ↗
            </CtaExternal>
          </div>
        </div>
      </Section>
    </>
  );
}
