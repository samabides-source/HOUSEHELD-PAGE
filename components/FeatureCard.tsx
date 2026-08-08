import type { Feature } from "@/lib/content";

export function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <article className="rounded-2xl bg-white p-6 ring-1 ring-slate-200/80">
      <span
        aria-hidden
        className="flex size-11 items-center justify-center rounded-2xl bg-indigo-50 text-xl"
      >
        {feature.icon}
      </span>
      <h3 className="mt-4 text-lg font-extrabold tracking-tight">{feature.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{feature.text}</p>
    </article>
  );
}
