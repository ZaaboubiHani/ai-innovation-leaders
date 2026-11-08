import type { Dictionary } from "@/i18n/get-dictionary";
import { Section, SectionHeading } from "@/components/ui/section";

export function AdmissionsSteps({ dict }: { dict: Dictionary }) {
  const a = dict.admissions;
  return (
    <Section tone="tint">
      <SectionHeading eyebrow={a.eyebrow} title={a.title} />
      <ol className="mt-12 grid gap-4 md:grid-cols-5">
        {a.steps.map((s, i) => (
          <li key={s.title} className="relative rounded-xl border border-paper-200 bg-white p-5 shadow-soft">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
              {i + 1}
            </span>
            <h3 className="mt-4 text-base font-semibold leading-snug">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-600">{s.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
