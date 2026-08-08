/**
 * Schematische Vorschau einer Aufgabenkarte. Bewusst als Markup statt als
 * Screenshot: bleibt scharf, braucht kein Bild-Asset und ist leicht anpassbar.
 * Sobald echte Screenshots vorliegen, kann diese Komponente ersetzt werden.
 */
export function AppMockup() {
  return (
    <div
      aria-hidden
      className="rounded-2xl bg-white p-4 shadow-xl shadow-slate-900/5 ring-1 ring-slate-200/80"
    >
      <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
        <span className="flex size-7 items-center justify-center rounded-lg bg-indigo-600 text-xs text-white">
          🏠
        </span>
        <span className="text-sm font-extrabold tracking-tight">Alle Aufgaben</span>
        <span className="ml-auto rounded-full bg-indigo-600 px-3 py-1 text-xs font-extrabold text-white">
          Neu
        </span>
      </div>

      <div className="flex gap-2 py-3">
        <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
          Offen
        </span>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">
          Erledigt
        </span>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">
          Alle
        </span>
      </div>

      <div className="space-y-3">
        <MockCard
          accent="bg-red-500"
          title="Küchenboden wischen"
          priority={{ label: "dringend", dot: "bg-red-500", ring: "ring-red-200 text-red-700" }}
          tags={[
            { label: "Küche", className: "bg-blue-100 text-blue-800" },
            { label: "Putzen", className: "bg-amber-100 text-amber-800" },
          ]}
          people={[
            { initials: "SM", className: "bg-violet-500" },
            { initials: "LK", className: "bg-emerald-500" },
          ]}
          photos={2}
          due="Heute"
        />
        <MockCard
          accent="bg-amber-500"
          title="Filter der Waschmaschine reinigen"
          priority={{ label: "mittel", dot: "bg-amber-500", ring: "ring-amber-200 text-amber-700" }}
          tags={[
            { label: "Keller", className: "bg-blue-100 text-blue-800" },
            { label: "Technik", className: "bg-violet-100 text-violet-800" },
          ]}
          people={[{ initials: "TB", className: "bg-sky-500" }]}
          photos={3}
          due="Fr, 14.8."
        />
        <MockCard
          accent="bg-slate-300"
          title="Balkonpflanzen giessen"
          priority={{ label: "niedrig", dot: "bg-slate-400", ring: "ring-slate-200 text-slate-600" }}
          tags={[{ label: "Aussenbereich", className: "bg-emerald-100 text-emerald-800" }]}
          people={[{ initials: "AR", className: "bg-pink-500" }]}
          photos={1}
          due="Sa, 15.8."
        />
      </div>
    </div>
  );
}

type MockCardProps = {
  accent: string;
  title: string;
  priority: { label: string; dot: string; ring: string };
  tags: Array<{ label: string; className: string }>;
  people: Array<{ initials: string; className: string }>;
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
