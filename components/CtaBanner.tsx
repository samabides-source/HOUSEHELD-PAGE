import { CtaExternal, CtaLink } from "@/components/CtaButton";
import { site } from "@/lib/site";

/** Abschluss-Aufruf, der auf jeder Unterseite gleich aussieht. */
export function CtaBanner({
  title = "Bereit für einen aufgeräumten Haushalt?",
  text = "Hausheld startet ohne Konto und ohne Installation – direkt im Browser.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <div className="rounded-2xl bg-indigo-600 px-6 py-10 text-center sm:px-12">
      <h2 className="text-2xl font-extrabold tracking-tight text-white text-balance sm:text-3xl">
        {title}
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-indigo-100 text-pretty">{text}</p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <CtaExternal href={site.appUrl} variant="secondary">
          App öffnen ↗
        </CtaExternal>
        <CtaLink
          href="/app-testen"
          variant="primary"
          className="bg-indigo-500 ring-1 ring-inset ring-indigo-400 hover:bg-indigo-400"
        >
          So testest du
        </CtaLink>
      </div>
    </div>
  );
}
