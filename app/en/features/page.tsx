import { CtaBanner } from "@/components/CtaBanner";
import { FeatureCard } from "@/components/FeatureCard";
import { PhotoFrame } from "@/components/PhotoFrame";
import { Section, SectionHeading } from "@/components/Section";
import { en } from "@/lib/content.en";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata("en", "features");

export default function FeaturesPage() {
  const t = en.features;

  return (
    <>
      <Section className="pt-10 sm:pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <SectionHeading as="h1" eyebrow={t.eyebrow} title={t.title} lead={t.lead} />

          <PhotoFrame
            src="/images/mop.jpg"
            alt={t.photoAlt}
            width={960}
            height={640}
            caption={t.photoCaption}
            priority
          />
        </div>
      </Section>

      <Section className="pt-0">
        <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">{t.gridTitle}</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.items.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <div className="rounded-2xl bg-white px-6 py-8 ring-1 ring-slate-200/80 sm:px-10">
          <h2 className="text-xl font-extrabold tracking-tight">{t.notIncludedTitle}</h2>
          <p className="mt-3 max-w-2xl text-slate-600 text-pretty">{t.notIncludedText}</p>
        </div>
      </Section>

      <Section className="pb-16 sm:pb-24">
        <CtaBanner locale="en" title={t.ctaTitle} text={t.ctaText} />
      </Section>
    </>
  );
}
