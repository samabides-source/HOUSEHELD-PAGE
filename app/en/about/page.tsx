import { CtaBanner } from "@/components/CtaBanner";
import { Section, SectionHeading } from "@/components/Section";
import { en } from "@/lib/content.en";
import { buildMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata = buildMetadata("en", "about");

export default function AboutPage() {
  const t = en.about;

  return (
    <>
      <Section className="pt-10 sm:pt-16">
        <SectionHeading as="h1" eyebrow={t.eyebrow} title={t.title} lead={t.lead} />
      </Section>

      <Section className="pt-0">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <article className="rounded-2xl bg-white px-6 py-8 ring-1 ring-slate-200/80 sm:px-10">
              <h2 className="text-xl font-extrabold tracking-tight">{t.ideaTitle}</h2>
              <div className="mt-3 space-y-4 text-slate-600 text-pretty">
                <p>{t.ideaText1}</p>
                <p>{t.ideaText2}</p>
              </div>
            </article>

            <article className="rounded-2xl bg-white px-6 py-8 ring-1 ring-slate-200/80 sm:px-10">
              <h2 className="text-xl font-extrabold tracking-tight">{t.targetGroupTitle}</h2>
              <p className="mt-3 text-slate-600 text-pretty">{t.targetGroupText}</p>
            </article>
          </div>

          <aside className="space-y-6">
            <details className="group rounded-2xl bg-white ring-1 ring-slate-200/80 open:ring-indigo-200">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-lg font-extrabold tracking-tight">
                {t.detailsTitle}
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
                    <dt className="font-semibold text-slate-500">{t.authorLabel}</dt>
                    <dd>{site.author}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-500">{t.frameworkLabel}</dt>
                    <dd>{site.context}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-500">{t.statusLabel}</dt>
                    <dd>{t.statusValue}</dd>
                  </div>
                </dl>

                <ul className="space-y-3 border-t border-slate-100 pt-6">
                  {t.stack.map((item) => (
                    <li key={item.label}>
                      <span className="font-extrabold">{item.label}</span>
                      <span className="block text-slate-500">{item.note}</span>
                    </li>
                  ))}
                </ul>

                <p className="border-t border-slate-100 pt-6 text-slate-600 text-pretty">
                  {t.decisionsText}
                </p>
              </div>
            </details>

            <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200/80">
              <h2 className="text-lg font-extrabold tracking-tight">{t.contactTitle}</h2>
              <p className="mt-3 text-sm text-slate-600">{t.contactText}</p>
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
        <CtaBanner locale="en" title={t.ctaTitle} text={t.ctaText} />
      </Section>
    </>
  );
}
