import { AppMockup } from "@/components/AppMockup";
import { CtaBanner } from "@/components/CtaBanner";
import { CtaExternal, CtaLink } from "@/components/CtaButton";
import { FeatureCard } from "@/components/FeatureCard";
import { JsonLd } from "@/components/JsonLd";
import { PhotoFrame } from "@/components/PhotoFrame";
import { Section, SectionHeading } from "@/components/Section";
import { en } from "@/lib/content.en";
import { softwareApplicationJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/metadata";
import { path, site } from "@/lib/site";

export const metadata = buildMetadata("en", "home");

export default function HomePage() {
  const t = en.home;

  return (
    <>
      <JsonLd data={softwareApplicationJsonLd("en", en)} />

      {/* Hero */}
      <Section className="pt-10 sm:pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-extrabold text-indigo-700">
              {t.badge}
            </span>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
              {t.h1}
            </h1>

            <p className="mt-5 text-lg text-slate-600 text-pretty">{t.lead}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <CtaExternal href={site.appUrl}>{t.ctaPrimary}</CtaExternal>
              <CtaLink href={path("en", "features")} variant="secondary">
                {t.ctaSecondary}
              </CtaLink>
            </div>

            <p className="mt-4 text-sm text-slate-500">{t.note}</p>
          </div>

          <AppMockup />
        </div>
      </Section>

      {/* Problem */}
      <Section className="py-8 sm:py-10">
        <div className="grid gap-6 lg:grid-cols-5 lg:items-stretch">
          <div className="rounded-2xl bg-white px-6 py-8 ring-1 ring-slate-200/80 sm:px-10 lg:col-span-3">
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <h2 className="text-xl font-extrabold tracking-tight text-slate-500">
                  {t.problemTitle}
                </h2>
                <p className="mt-3 text-slate-600 text-pretty">{t.problemText}</p>
              </div>
              <div>
                <h2 className="text-xl font-extrabold tracking-tight text-indigo-600">
                  {t.solutionTitle}
                </h2>
                <p className="mt-3 text-slate-600 text-pretty">{t.solutionText}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <PhotoFrame
              src="/images/plant-photo.jpg"
              alt={t.photoAlt}
              width={1200}
              height={800}
              caption={t.photoCaption}
            />
          </div>
        </div>
      </Section>

      {/* Highlights */}
      <Section>
        <SectionHeading
          eyebrow={t.highlightsEyebrow}
          title={t.highlightsTitle}
          lead={t.highlightsLead}
          centered
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.highlights.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <CtaLink href={path("en", "features")} variant="secondary">
            {t.allFeaturesCta}
          </CtaLink>
        </div>
      </Section>

      {/* How it works */}
      <Section>
        <SectionHeading eyebrow={t.stepsEyebrow} title={t.stepsTitle} centered />

        <ol className="mt-10 grid gap-5 sm:grid-cols-3">
          {t.steps.map((step, index) => (
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
        <CtaBanner locale="en" />
      </Section>
    </>
  );
}
