import type { Dictionary } from "@/i18n/get-dictionary";
import { Section, SectionHeading } from "@/components/ui/section";

export function Snapshot({ dict }: { dict: Dictionary }) {
  const s = dict.snapshot;
  return (
    <Section tone="white">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.35fr] lg:gap-16">
        <SectionHeading eyebrow={s.eyebrow} title={s.title} />
        <dl className="divide-y divide-paper-200 rounded-xl border border-paper-200 bg-paper">
          {s.items.map((item) => (
            <div key={item.label} className="grid gap-1 px-5 py-4 sm:grid-cols-[11rem_1fr] sm:gap-6">
              <dt className="text-sm font-semibold text-violet-800">{item.label}</dt>
              <dd className="text-[15px] text-ink-700">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
