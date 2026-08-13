import { CtaLink } from "@/components/CtaButton";
import { Section } from "@/components/Section";
import { en } from "@/lib/content.en";
import { path } from "@/lib/site";

export default function NotFound() {
  const t = en.notFound;

  return (
    <Section className="py-24 text-center">
      <p className="text-sm font-extrabold uppercase tracking-wide text-indigo-600">{t.eyebrow}</p>
      <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">{t.title}</h1>
      <p className="mx-auto mt-4 max-w-md text-slate-600">{t.text}</p>
      <div className="mt-8 flex justify-center">
        <CtaLink href={path("en", "home")}>{t.cta}</CtaLink>
      </div>
    </Section>
  );
}
