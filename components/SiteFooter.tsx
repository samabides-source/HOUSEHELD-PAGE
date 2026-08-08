import Link from "next/link";

import { nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200/80 bg-white/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex size-8 items-center justify-center rounded-xl bg-indigo-600 text-base text-white">
              🏠
            </span>
            <span className="text-lg font-extrabold tracking-tight">{site.name}</span>
          </div>
          <p className="mt-2 max-w-sm text-sm text-slate-500">{site.claim}</p>
        </div>

        <nav aria-label="Footer-Navigation" className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-semibold text-slate-600 transition hover:text-indigo-700"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={site.appUrl}
            className="font-semibold text-indigo-700 transition hover:text-indigo-900"
            target="_blank"
            rel="noreferrer"
          >
            Zur App ↗
          </a>
        </nav>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-10 text-xs text-slate-400">
        {site.name} · Übungsprojekt {site.context} · {site.author} · Daten werden ausschliesslich
        lokal im Browser gespeichert.
      </div>
    </footer>
  );
}
