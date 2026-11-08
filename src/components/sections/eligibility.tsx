import { Briefcase, GraduationCap, Check } from "lucide-react";
import type { Dictionary } from "@/i18n/get-dictionary";
import { Section, SectionHeading } from "@/components/ui/section";

export function Eligibility({ dict }: { dict: Dictionary }) {
  const e = dict.eligibility;
  const icons = [Briefcase, GraduationCap];
  return (
    <Section tone="white">
      <SectionHeading eyebrow={e.eyebrow} title={e.title} intro={e.intro} />
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {e.tracks.map((t, i) => {
          const Icon = icons[i] ?? Briefcase;
          return (
            <article key={t.title} className="card">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-violet-100 text-violet-700">
                <Icon aria-hidden className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-xl font-semibold">{t.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-600">{t.text}</p>
            </article>
          );
        })}
      </div>
      <div className="mt-8 rounded-xl bg-paper p-6">
        <h3 className="text-lg font-semibold">{e.commonTitle}</h3>
        <ul className="mt-4 space-y-3">
          {e.common.map((c) => (
            <li key={c} className="flex gap-3 text-[15px] text-ink-700">
              <Check aria-hidden className="mt-1 h-4 w-4 shrink-0 text-violet-600" />
              {c}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
