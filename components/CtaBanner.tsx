import { CtaExternal, CtaLink } from "@/components/CtaButton";
import { appUrl, dictionaries, path, type Locale } from "@/lib/site";

/** Abschluss-Aufruf, der auf jeder Unterseite gleich aussieht. */
export function CtaBanner({
  locale,
  title,
  text,
}: {
  locale: Locale;
  title?: string;
  text?: string;
}) {
  const dict = dictionaries[locale];

  return (
    <div className="rounded-2xl bg-indigo-600 px-6 py-10 text-center sm:px-12">
      <h2 className="text-2xl font-extrabold tracking-tight text-white text-balance sm:text-3xl">
        {title ?? dict.cta.defaultTitle}
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-indigo-100 text-pretty">
        {text ?? dict.cta.defaultText}
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <CtaExternal href={appUrl[locale]} variant="secondary">
          {dict.cta.exploreLabel}
        </CtaExternal>
        <CtaLink
          href={path(locale, "appTesten")}
          variant="primary"
          className="bg-indigo-500 ring-1 ring-inset ring-indigo-400 hover:bg-indigo-400"
        >
          {dict.cta.secondaryLabel}
        </CtaLink>
      </div>
    </div>
  );
}
