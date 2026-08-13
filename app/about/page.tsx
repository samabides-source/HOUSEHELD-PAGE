import type { Metadata } from "next";

import { CtaBanner } from "@/components/CtaBanner";
import { Section, SectionHeading } from "@/components/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Hintergrund zu Hausheld: entstanden als Übungsprojekt im CAS-Modul «Viben und Coden» – mit Next.js, React, Tailwind CSS und TypeScript.",
};

const stack = [
  { label: "Next.js 15", note: "App Router, statisch ausgeliefert" },
  { label: "React 19", note: "Komponenten und Zustand" },
  { label: "Tailwind CSS v4", note: "Design-Tokens statt Stylesheet-Wildwuchs" },
  { label: "TypeScript", note: "Strikte Typen, keine any-Abkürzungen" },
  { label: "IndexedDB", note: "Lokale Persistenz inklusive Fotos" },
  { label: "Vercel", note: "Deployment ohne Konfiguration" },
];

export default function AboutPage() {
  return (
    <>
      <Section className="pt-10 sm:pt-16">
        <SectionHeading
          as="h1"
          eyebrow="About"
          title="Aus einem ganz alltäglichen Ärgernis entstanden"
          lead="Hausheld ist ein Übungsprojekt – und gleichzeitig der Versuch, ein echtes Problem so klein wie möglich zu lösen."
        />
      </Section>

      <Section className="pt-0">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <article className="rounded-2xl bg-white px-6 py-8 ring-1 ring-slate-200/80 sm:px-10">
              <h2 className="text-xl font-extrabold tracking-tight">Die Idee</h2>
              <div className="mt-3 space-y-4 text-slate-600 text-pretty">
                <p>
                  In den meisten Haushalten werden Aufgaben mündlich verteilt oder in einem Chat
                  erwähnt – und gehen dort zwischen Terminen, Links und Sprachnachrichten unter.
                  Wer was übernimmt, ist selten schriftlich festgehalten, und «das Bad putzen» meint
                  für alle etwas anderes.
                </p>
                <p>
                  {site.name} setzt genau dort an: Eine Aufgabe braucht nur einen Titel. Alles
                  andere – Foto, Person, Tag, Datum, Priorität – ist optional und macht die Aufgabe
                  Schritt für Schritt eindeutiger. Das Foto ersetzt dabei die lange Erklärung.
                </p>
              </div>
            </article>

            <article className="rounded-2xl bg-white px-6 py-8 ring-1 ring-slate-200/80 sm:px-10">
              <h2 className="text-xl font-extrabold tracking-tight">Zielgruppe</h2>
              <p className="mt-3 text-slate-600 text-pretty">
                Familien und WGs, die anfallende Haushaltsaufgaben gemeinsam erfassen und verteilen
                wollen – ohne sich vorher auf ein Projektmanagement-Tool einigen zu müssen.
              </p>
            </article>
          </div>

          <aside className="space-y-6">
            <details className="group rounded-2xl bg-white ring-1 ring-slate-200/80 open:ring-indigo-200">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-lg font-extrabold tracking-tight">
                Projektdetails
                <span
                  aria-hidden
                  className="shrink-0 text-xl leading-none text-indigo-600 transition group-open:rotate-45"
                >
                  +
                </span>
              </summary>

              <div className="space-y-6 px-6 pb-6 text-sm">
                <dl className="space-y-3">
                  <div>
                    <dt className="font-semibold text-slate-500">Autor</dt>
                    <dd>{site.author}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-500">Rahmen</dt>
                    <dd>{site.context}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-500">Stand</dt>
                    <dd>August 2026</dd>
                  </div>
                </dl>

                <ul className="space-y-3 border-t border-slate-100 pt-6">
                  {stack.map((item) => (
                    <li key={item.label}>
                      <span className="font-extrabold">{item.label}</span>
                      <span className="block text-slate-500">{item.note}</span>
                    </li>
                  ))}
                </ul>

                <p className="border-t border-slate-100 pt-6 text-slate-600 text-pretty">
                  Die Daten liegen bewusst im Browser statt auf einem Server: Das macht die App
                  ohne Login nutzbar, verursacht keine Kosten und gibt keine Fotos aus der Hand.
                  Eine Synchronisation mit einer Datenbank zur geräteübergreifenden Nutzung ist
                  aktuell in Entwicklung.
                </p>
              </div>
            </details>

            <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200/80">
              <h2 className="text-lg font-extrabold tracking-tight">Kontakt</h2>
              <p className="mt-3 text-sm text-slate-600">
                Rückmeldungen, Fehler und Ideen sind willkommen.
              </p>
              <p className="mt-3 text-sm">
                <span className="block font-semibold">{site.author}</span>
                <a
                  href={`mailto:${site.contactEmail}`}
                  className="text-indigo-700 hover:text-indigo-900"
                >
                  {site.contactEmail}
                </a>
              </p>
            </div>
          </aside>
        </div>
      </Section>

      <Section className="pb-16 sm:pb-24">
        <CtaBanner
          title="Lieber ausprobieren als lesen?"
          text="Die App läuft direkt im Browser – ohne Konto, ohne Installation."
        />
      </Section>
    </>
  );
}
