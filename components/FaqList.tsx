import type { Faq } from "@/lib/content";

/**
 * Akkordeon auf Basis von <details>/<summary> – funktioniert ohne JavaScript
 * und ist damit auch ohne Client-Komponente bedienbar.
 */
export function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <details
          key={item.question}
          className="group rounded-2xl bg-white ring-1 ring-slate-200/80 open:ring-indigo-200"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-extrabold tracking-tight">
            {item.question}
            <span
              aria-hidden
              className="shrink-0 text-xl leading-none text-indigo-600 transition group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="px-6 pb-5 text-sm leading-relaxed text-slate-600">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
