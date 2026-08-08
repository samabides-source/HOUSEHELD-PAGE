import { CtaLink } from "@/components/CtaButton";
import { Section } from "@/components/Section";

export default function NotFound() {
  return (
    <Section className="py-24 text-center">
      <p className="text-sm font-extrabold uppercase tracking-wide text-indigo-600">404</p>
      <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
        Diese Seite gibt es nicht
      </h1>
      <p className="mx-auto mt-4 max-w-md text-slate-600">
        Vielleicht wurde der Link umbenannt. Der Weg zurück führt über die Startseite.
      </p>
      <div className="mt-8 flex justify-center">
        <CtaLink href="/">Zur Startseite</CtaLink>
      </div>
    </Section>
  );
}
