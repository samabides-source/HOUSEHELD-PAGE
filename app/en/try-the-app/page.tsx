import { CtaExternal, CtaLink } from "@/components/CtaButton";
import { JsonLd } from "@/components/JsonLd";
import { Section, SectionHeading } from "@/components/Section";
import { en } from "@/lib/content.en";
import { howToJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/metadata";
import { appUrl, path } from "@/lib/site";

export const metadata = buildMetadata("en", "appTesten");

export default function TryTheAppPage() {
  const t = en.appTesten;

  return (
    <>
      <JsonLd data={howToJsonLd("en", en)} />

      <Section className="pt-10 sm:pt-16">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading as="h1" eyebrow={t.eyebrow} title={t.title} lead={t.lead} />

            <div className="mt-8 flex flex-wrap gap-3">
              <CtaExternal href={appUrl.en}>{t.ctaPrimary}</CtaExternal>
              <CtaLink href={path("en", "features")} variant="secondary">
                {t.ctaSecondary}
              </CtaLink>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200/80">
            <h2 className="text-lg font-extrabold tracking-tight">{t.sidebarTitle}</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {t.checks.map((check) => (
                <li key={check} className="flex gap-3">
                  <span aria-hidden className="text-indigo-600">
                    ✓
                  </span>
                  <span>{check}</span>
                </li>
              ))}
            </ul>

            <p className="mt-5 rounded-xl bg-indigo-50 px-4 py-3 text-xs leading-relaxed text-indigo-900">
              {t.privacyNote}
            </p>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">{t.stepsTitle}</h2>

        <ol className="mt-8 space-y-4">
          {t.walkthrough.map((step, index) => (
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
            {t.finalTitle}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-indigo-100 text-pretty">{t.finalText}</p>
          <div className="mt-6 flex justify-center">
            <CtaExternal href={appUrl.en} variant="secondary">
              {t.finalCta}
            </CtaExternal>
          </div>
        </div>
      </Section>
    </>
  );
}
