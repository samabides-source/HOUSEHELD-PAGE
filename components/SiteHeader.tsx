"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex size-9 items-center justify-center rounded-2xl bg-indigo-600 text-lg text-white">
            🏠
          </span>
          <span className="text-xl font-extrabold tracking-tight">{site.name}</span>
        </Link>

        <nav
          aria-label="Hauptnavigation"
          className="scrollbar-none -mx-1 flex items-center gap-2 overflow-x-auto px-1"
        >
          {nav.map((item) => {
            const active = pathname === item.href;
            const cta = item.href === "/app-testen";

            return (
              <Link
                key={item.href}
                href={item.href}
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
        </nav>
      </div>
    </header>
  );
}
