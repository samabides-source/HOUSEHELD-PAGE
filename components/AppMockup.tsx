import { dictionaries, type Locale } from "@/lib/site";

/**
 * Schematische Vorschau einer Aufgabenkarte. Bewusst als Markup statt als
 * Screenshot: bleibt scharf, braucht kein Bild-Asset und ist leicht anpassbar.
 * Sobald echte Screenshots vorliegen, kann diese Komponente ersetzt werden.
 *
 * Texte kommen aus `dictionaries[locale].mockup` (die App ist mittlerweile
 * ebenfalls zweisprachig). Farben, Initialen und Fotoanzahl sind rein visuell
 * und bleiben unabhängig von der Sprache in `VISUALS`.
 */
const VISUALS = [
  {
    accent: "bg-red-500",
    priorityDot: "bg-red-500",
    priorityRing: "ring-red-200 text-red-700",
    tagClasses: ["bg-blue-100 text-blue-800", "bg-amber-100 text-amber-800"],
    people: [
      { initials: "SM", className: "bg-violet-500" },
      { initials: "LK", className: "bg-emerald-500" },
    ],
    photos: 2,
  },
  {
    accent: "bg-amber-500",
    priorityDot: "bg-amber-500",
    priorityRing: "ring-amber-200 text-amber-700",
    tagClasses: ["bg-blue-100 text-blue-800", "bg-violet-100 text-violet-800"],
    people: [{ initials: "TB", className: "bg-sky-500" }],
    photos: 3,
  },
  {
    accent: "bg-slate-300",
    priorityDot: "bg-slate-400",
    priorityRing: "ring-slate-200 text-slate-600",
    tagClasses: ["bg-emerald-100 text-emerald-800"],
    people: [{ initials: "AR", className: "bg-pink-500" }],
    photos: 1,
  },
] as const;

export function AppMockup({ locale }: { locale: Locale }) {
  const t = dictionaries[locale].mockup;

  return (
    <div
      aria-hidden
      className="rounded-2xl bg-white p-4 shadow-xl shadow-slate-900/5 ring-1 ring-slate-200/80"
    >
      <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
        <span className="flex size-7 items-center justify-center rounded-lg bg-indigo-600 text-xs text-white">
          🏠
        </span>
        <span className="text-sm font-extrabold tracking-tight">{t.headerLabel}</span>
        <span className="ml-auto rounded-full bg-indigo-600 px-3 py-1 text-xs font-extrabold text-white">
          {t.newLabel}
        </span>
      </div>

      <div className="flex gap-2 py-3">
        <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
          {t.filterOpen}
        </span>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">
          {t.filterDone}
        </span>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">
          {t.filterAll}
        </span>
      </div>

      <div className="space-y-3">
        {t.tasks.map((task, index) => {
          const v = VISUALS[index];
          return (
            <MockCard
              key={task.title}
              accent={v.accent}
              title={task.title}
              priority={{ label: task.priorityLabel, dot: v.priorityDot, ring: v.priorityRing }}
              tags={task.tags.map((label, tagIndex) => ({
                label,
                className: v.tagClasses[tagIndex],
              }))}
              people={v.people}
              photos={v.photos}
              due={task.due}
            />
          );
        })}
      </div>
    </div>
  );
}

type MockCardProps = {
  accent: string;
  title: string;
  priority: { label: string; dot: string; ring: string };
  tags: readonly { label: string; className: string }[];
  people: readonly { initials: string; className: string }[];
  photos: number;
  due: string;
};

function MockCard({ accent, title, priority, tags, people, photos, due }: MockCardProps) {
  return (
    <div className="flex gap-3 overflow-hidden rounded-2xl ring-1 ring-slate-200/80">
      <span className={`w-1.5 shrink-0 ${accent}`} />
      <div className="min-w-0 flex-1 py-3 pr-3">
        <div className="flex items-start justify-between gap-2">
          <p className="truncate text-sm font-extrabold tracking-tight">{title}</p>
          <span
            className={`flex shrink-0 items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold ring-1 ring-inset ${priority.ring}`}
          >
            <span className={`size-1.5 rounded-full ${priority.dot}`} />
            {priority.label}
          </span>
        </div>

        <div className="mt-2 flex flex-wrap items-center gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag.label}
              className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${tag.className}`}
            >
              {tag.label}
            </span>
          ))}
        </div>

        <div className="mt-3 flex items-center gap-3 text-[10px] text-slate-500">
          <span className="flex -space-x-1.5">
            {people.map((person) => (
              <span
                key={person.initials}
                className={`flex size-5 items-center justify-center rounded-full text-[9px] font-bold text-white ring-2 ring-white ${person.className}`}
              >
                {person.initials}
              </span>
            ))}
          </span>
          <span>📸 {photos}</span>
          <span>📅 {due}</span>
        </div>
      </div>
    </div>
  );
}
