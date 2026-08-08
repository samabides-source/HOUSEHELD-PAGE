import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/** Standard-Abschnitt: einheitliche Breite und vertikaler Rhythmus. */
export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn("mx-auto max-w-6xl px-4 py-12 sm:py-16", className)}>
      {children}
    </section>
  );
}

/** Überschrift mit optionalem Auszeichner («Eyebrow») und Lead-Text. */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  centered = false,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  centered?: boolean;
  as?: "h1" | "h2";
}) {
  return (
    <div className={cn("max-w-2xl", centered && "mx-auto text-center")}>
      {eyebrow ? (
        <p className="text-sm font-extrabold uppercase tracking-wide text-indigo-600">{eyebrow}</p>
      ) : null}
      <Tag
        className={cn(
          "mt-2 font-extrabold tracking-tight text-balance",
          Tag === "h1" ? "text-4xl sm:text-5xl" : "text-3xl sm:text-4xl",
        )}
      >
        {title}
      </Tag>
      {lead ? <p className="mt-4 text-lg text-slate-600 text-pretty">{lead}</p> : null}
    </div>
  );
}
