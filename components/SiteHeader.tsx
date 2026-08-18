"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { dictionaries, path, site, slugs, type Locale } from "@/lib/site";
import { cn } from "@/lib/utils";

/** Leitet die aktuelle Sprache aus dem Pfad ab: /en/* ist Englisch, alles andere Deutsch. */
function localeFromPathname(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "de";
}

/** Findet die passende Zielseite in der jeweils anderen Sprache (Slugs können abweichen). */
function otherLocaleHref(pathname: string, locale: Locale): string {
  const other: Locale = locale === "de" ? "en" : "de";
  const prefix = locale === "en" ? "/en" : "";
  const currentSlug = pathname === prefix || pathname === `${prefix}/` ? "" : pathname.slice(prefix.length + 1);
  const page = (Object.keys(slugs[locale]) as Array<keyof typeof slugs.de>).find(
    (key) => slugs[locale][key] === currentSlug,
  );
  return path(other, page ?? "home");
}

export function SiteHeader() {
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);
  const dict = dictionaries[locale];
  const otherHref = otherLocaleHref(pathname, locale);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        <Link href={path(locale, "home")} className="flex items-center gap-2">
          <span
            aria-hidden
            className="flex size-9 items-center justify-center rounded-2xl bg-red-600 text-lg text-white"
          >
            🏠
          </span>
          <span className="text-xl font-extrabold tracking-tight">{site.name}</span>
        </Link>

        <nav
          aria-label={locale === "de" ? "Hauptnavigation" : "Main navigation"}
          className="scrollbar-none -mx-1 flex items-center gap-2 overflow-x-auto px-1"
        >
          {dict.nav.map((item) => {
            const href = path(locale, item.page);
            const active = pathname === href;
            const cta = item.page === "appTesten";

            return (
              <Link
                key={item.page}
                href={href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-semibold transition",
                  active
                    ? "bg-indigo-600 text-white shadow-sm"
                    : cta
                      ? "bg-indigo-50 text-indigo-700 hover:bg-indigo-100"
                      : "text-slate-600 hover:bg-slate-100",
                )}
              >
                {item.label}
              </Link>
            );
          })}

          <Link
            href={otherHref}
            hrefLang={locale === "de" ? "en" : "de-CH"}
            className="whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-800"
          >
            {locale === "de" ? "EN" : "DE"}
          </Link>
        </nav>
      </div>
    </header>
  );
}
