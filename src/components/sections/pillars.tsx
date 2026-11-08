import type { Dictionary } from "@/i18n/get-dictionary";
import { Section, SectionHeading } from "@/components/ui/section";

export function Pillars({ dict }: { dict: Dictionary }) {
  const p = dict.pillars;
  return (
    <Section tone="tint">
      <SectionHeading eyebrow={p.eyebrow} title={p.title} intro={p.intro} />
      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {p.items.map((pillar, i) => (
          <article key={pillar.title} className="relative overflow-hidden rounded-xl bg-white p-7 shadow-soft">
            <span
              aria-hidden
              className="absolute -end-2 -top-6 font-display text-[7rem] font-semibold leading-none text-violet-100"
            >
              {i + 1}
            </span>
            <p className="relative text-xs font-semibold uppercase tracking-[0.16em] text-violet-600">{pillar.number}</p>
            <h3 className="relative mt-3 text-xl font-semibold leading-snug">{pillar.title}</h3>
            <ul className="relative mt-5 space-y-2.5">
              {pillar.points.map((pt) => (
                <li key={pt} className="flex gap-3 text-[15px] text-ink-700">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sun-500" />
                  {pt}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
