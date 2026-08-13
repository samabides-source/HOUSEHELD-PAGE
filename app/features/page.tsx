import type { Metadata } from "next";

import { CtaBanner } from "@/components/CtaBanner";
import { FeatureCard } from "@/components/FeatureCard";
import { PhotoFrame } from "@/components/PhotoFrame";
import { Section, SectionHeading } from "@/components/Section";
import { features } from "@/lib/content";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Alle Funktionen von Hausheld: Aufgaben mit Fotos, Zuweisung an Personen, globale Tags, Prioritäten, Filter, Board-Ansicht – ohne Konto und ohne Cloud.",
};

export default function FeaturesPage() {
  return (
    <>
      <Section className="pt-10 sm:pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            as="h1"
            eyebrow="Features"
            title="Alles, was ein Haushalt braucht – und nichts mehr"
            lead="Hausheld verzichtet bewusst auf Ballast. Diese Funktionen sind da, weil sie im Alltag gebraucht werden."
          />

          <PhotoFrame
            src="/images/mop.jpg"
            alt="Wischmopp auf Holzboden"
            width={960}
            height={640}
            caption="Ein Foto zeigt genau, was zu tun ist – kein Rätselraten mehr."
            priority
          />
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </Section>

      {/* Bewusste Grenzen – schafft Vertrauen und verhindert falsche Erwartungen. */}
      <Section className="pt-0">
        <div className="rounded-2xl bg-white px-6 py-8 ring-1 ring-slate-200/80 sm:px-10">
          <h2 className="text-xl font-extrabold tracking-tight">Bewusst nicht dabei</h2>
          <p className="mt-3 max-w-2xl text-slate-600 text-pretty">
            Damit die App einfach bleibt, fehlen einige Dinge mit Absicht: kein Login und keine
            Benutzerkonten, keine KI-Funktionen, keine Push-Benachrichtigungen, keine
            Mehrsprachigkeit und kein Papierkorb. Gelöschtes ist endgültig gelöscht – deshalb fragt
            die App vorher nach.
          </p>
        </div>
      </Section>

      <Section className="pb-16 sm:pb-24">
        <CtaBanner
          title="Am besten selbst ausprobieren"
          text="Die Beispieldaten füllen die App in Sekunden mit 6 Personen und 14 Aufgaben."
        />
      </Section>
    </>
  );
}
