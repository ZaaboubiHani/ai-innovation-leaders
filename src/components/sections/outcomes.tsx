import type { Dictionary } from "@/i18n/get-dictionary";
import { Section, SectionHeading } from "@/components/ui/section";

export function Outcomes({ dict }: { dict: Dictionary }) {
  const o = dict.outcomes;
  return (
    <Section tone="paper">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <SectionHeading eyebrow={o.eyebrow} title={o.title} />
        <ol className="space-y-3">
          {o.items.map((item, i) => (
            <li key={item} className="flex gap-4 rounded-xl border border-paper-200 bg-white p-4 shadow-soft">
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-100 text-sm font-bold text-violet-700">
                {i + 1}
              </span>
              <p className="pt-0.5 text-[15px] leading-relaxed text-ink-700">{item}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
