import { Sparkles } from "lucide-react";
import type { Dictionary } from "@/i18n/get-dictionary";
import { Section, SectionHeading } from "@/components/ui/section";
import { SectorIcon } from "@/components/ui/sector-icon";

export function Projects({ dict }: { dict: Dictionary }) {
  const p = dict.projects;
  return (
    <Section tone="white">
      <SectionHeading eyebrow={p.eyebrow} title={p.title} intro={p.intro} />

      <h3 className="mt-14 text-2xl font-semibold">{p.cycleTitle}</h3>
      <ol className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {p.cycle.map((step, i) => (
          <li key={step.title} className="relative rounded-xl border border-paper-200 bg-paper p-6">
            <span className="inline-flex rounded-full bg-violet-600 px-3 py-1 text-xs font-semibold text-white">
              {step.when}
            </span>
            <h4 className="mt-4 text-lg font-semibold">{step.title}</h4>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-600">{step.text}</p>
            <span aria-hidden className="absolute end-4 top-4 font-display text-3xl font-semibold text-violet-200">
              {i + 1}
            </span>
          </li>
        ))}
      </ol>

      <h3 className="mt-16 text-2xl font-semibold">{p.examplesTitle}</h3>
      <p className="mt-2 max-w-3xl text-ink-600">{p.examplesIntro}</p>
      <div className="mt-6 grid gap-5 lg:grid-cols-3">
        {p.examples.map((ex) => (
          <article key={ex.id} className="rounded-xl border border-paper-200 p-6">
            <h4 className="flex items-center gap-2.5 text-lg font-semibold">
              <SectorIcon id={ex.id} aria-hidden className="h-5 w-5 text-violet-600" />
              {ex.name}
            </h4>
            <ul className="mt-4 space-y-2.5">
              {ex.items.map((it) => (
                <li key={it} className="flex gap-3 text-[15px] text-ink-700">
                  <Sparkles aria-hidden className="mt-1 h-4 w-4 shrink-0 text-sun-500" />
                  {it}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <p className="mt-5 text-sm text-ink-500">{p.note}</p>

      <div className="mt-16 rounded-2xl bg-violet-950 p-8 text-white sm:p-10">
        <h3 className="text-2xl font-semibold !text-white">{p.opportunitiesTitle}</h3>
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {p.opportunities.map((o) => (
            <li key={o} className="flex gap-3 text-[15px] leading-relaxed text-white/85">
              <span aria-hidden className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sun-400" />
              {o}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
