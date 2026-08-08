import { AppMockup } from "@/components/AppMockup";
import { CtaBanner } from "@/components/CtaBanner";
import { CtaExternal, CtaLink } from "@/components/CtaButton";
import { FeatureCard } from "@/components/FeatureCard";
import { Section, SectionHeading } from "@/components/Section";
import { highlights, steps } from "@/lib/content";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-10 sm:pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-extrabold text-indigo-700">
              Ohne Konto · Ohne Cloud · Kostenlos
            </span>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
              Haushaltsaufgaben für Familien und WGs an einem Ort
            </h1>

            <p className="mt-5 text-lg text-slate-600 text-pretty">
              Wer macht was, bis wann und wo genau? {site.name} sammelt alle Aufgaben übersichtlich
              an einem Ort – dokumentiert mit Fotos, zugewiesen an Personen, kategorisiert mit Tags.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <CtaExternal href={site.appUrl}>App öffnen ↗</CtaExternal>
              <CtaLink href="/features" variant="secondary">
                Funktionen ansehen
              </CtaLink>
            </div>

            <p className="mt-4 text-sm text-slate-500">
              Läuft direkt im Browser. Keine Installation, keine Registrierung.
            </p>
          </div>

          <AppMockup />
        </div>
      </Section>

      {/* Problem */}
      <Section className="py-8 sm:py-10">
        <div className="rounded-2xl bg-white px-6 py-8 ring-1 ring-slate-200/80 sm:px-10">
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h2 className="text-xl font-extrabold tracking-tight text-slate-500">
                Das Problem
              </h2>
              <p className="mt-3 text-slate-600 text-pretty">
                Haushaltsaufgaben werden mündlich oder in Chats verteilt – und gehen dabei unter. Es
                fehlt ein zentraler, einfacher Ort, um zu sehen, was zu tun ist, wo genau und wer
                zuständig ist.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-extrabold tracking-tight text-indigo-600">Die Lösung</h2>
              <p className="mt-3 text-slate-600 text-pretty">
                Eine einfache Web-App, in der Aufgaben mit Fotos, Zuweisung und Tags erfasst und
                übersichtlich dargestellt werden. Sichtbar für alle, die mitmachen.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Highlights */}
      <Section>
        <SectionHeading
          eyebrow="Kernidee"
          title="Drei Dinge, die den Unterschied machen"
          lead="Kein Projektmanagement-Tool, sondern das Minimum, das im Alltag wirklich hilft."
          centered
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <CtaLink href="/features" variant="secondary">
            Alle Funktionen
          </CtaLink>
        </div>
      </Section>

      {/* So funktioniert's */}
      <Section>
        <SectionHeading eyebrow="In drei Schritten" title="So funktioniert's" centered />

        <ol className="mt-10 grid gap-5 sm:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title} className="rounded-2xl bg-white p-6 ring-1 ring-slate-200/80">
              <span className="flex size-9 items-center justify-center rounded-full bg-indigo-600 text-sm font-extrabold text-white">
                {index + 1}
              </span>
              <h3 className="mt-4 text-lg font-extrabold tracking-tight">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section className="pb-16 sm:pb-24">
        <CtaBanner />
      </Section>
    </>
  );
}
