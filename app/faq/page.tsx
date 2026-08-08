import type { Metadata } from "next";
import Link from "next/link";

import { CtaBanner } from "@/components/CtaBanner";
import { FaqList } from "@/components/FaqList";
import { Section, SectionHeading } from "@/components/Section";
import { faqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Häufige Fragen zu Hausheld: Kosten, Konto, Datenspeicherung, Nutzung auf mehreren Geräten, Fotos und Löschen von Aufgaben.",
};

export default function FaqPage() {
  return (
    <>
      <Section className="pt-10 sm:pt-16">
        <SectionHeading
          as="h1"
          eyebrow="FAQ"
          title="Häufige Fragen"
          lead="Die wichtigsten Antworten zu Nutzung, Daten und Grenzen der App."
        />
      </Section>

      <Section className="pt-0">
        <div className="max-w-3xl">
          <FaqList items={faqs} />

          <p className="mt-8 text-sm text-slate-500">
            Frage nicht dabei? Schreib eine Nachricht über die Kontaktangaben auf der{" "}
            <Link href="/about" className="font-semibold text-indigo-700 hover:text-indigo-900">
              About-Seite
            </Link>
            .
          </p>
        </div>
      </Section>

      <Section className="pb-16 sm:pb-24">
        <CtaBanner
          title="Fragen geklärt?"
          text="Dann ist der schnellste Weg ein kurzer Test im Browser."
        />
      </Section>
    </>
  );
}
