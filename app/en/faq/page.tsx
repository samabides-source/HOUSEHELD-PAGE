import Link from "next/link";

import { CtaBanner } from "@/components/CtaBanner";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { Section, SectionHeading } from "@/components/Section";
import { en } from "@/lib/content.en";
import { faqPageJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/metadata";
import { path } from "@/lib/site";

export const metadata = buildMetadata("en", "faq");

export default function FaqPage() {
  const t = en.faq;

  return (
    <>
      <JsonLd data={faqPageJsonLd("en", en)} />

      <Section className="pt-10 sm:pt-16">
        <SectionHeading as="h1" eyebrow={t.eyebrow} title={t.title} lead={t.lead} />
      </Section>

      <Section className="pt-0">
        <div className="max-w-3xl">
          <FaqList items={t.items} />

          <p className="mt-8 text-sm text-slate-500">
            {t.noAnswerText}{" "}
            <Link href={path("en", "about")} className="font-semibold text-indigo-700 hover:text-indigo-900">
              {t.noAnswerLinkLabel}
            </Link>
            .
          </p>
        </div>
      </Section>

      <Section className="pb-16 sm:pb-24">
        <CtaBanner locale="en" title={t.ctaTitle} text={t.ctaText} />
      </Section>
    </>
  );
}
