import Link from "next/link";
import { BookOpenCheck, FlaskConical, PackageCheck } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { cn, localePath } from "@/lib/utils";
import { Section, SectionHeading } from "@/components/ui/section";
import { Arrow } from "@/components/ui/arrow";

/** Compact 8-week overview for the homepage. */
export function CurriculumOverview({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const c = dict.curriculum;
  return (
    <Section tone="ink">
      <SectionHeading tone="dark" eyebrow={c.eyebrow} title={c.title} intro={c.intro} />
      <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {c.weeks.map((w, i) => {
          const applied = i >= 6;
          return (
            <li
              key={w.theme}
              className={cn(
                "rounded-xl border p-5",
                applied ? "border-sun-400/60 bg-sun-400/10" : "border-white/15 bg-white/5",
              )}
            >
              <p className={cn("text-xs font-semibold uppercase tracking-[0.16em]", applied ? "text-sun-300" : "text-violet-300")}>
                {dict.common.week} {i + 1}
              </p>
              <h3 className="mt-2 text-base font-semibold leading-snug !text-white">{w.theme}</h3>
              <p className="mt-3 flex items-start gap-2 text-sm text-white/65">
                <PackageCheck aria-hidden className="mt-0.5 h-4 w-4 shrink-0" />
                {w.deliverable}
              </p>
            </li>
          );
        })}
      </ol>
      <div className="mt-10 flex flex-wrap items-center gap-4">
        <Link href={localePath(locale, "/program")} className="btn-sun">
          {dict.common.viewCurriculum}
          <Arrow />
        </Link>
        <p className="text-sm text-white/65">{c.distinction}</p>
      </div>
    </Section>
  );
}

/** Full week-by-week curriculum for the Program page. */
export function CurriculumFull({ dict }: { dict: Dictionary }) {
  const c = dict.curriculum;
  const groups = [
    { info: c.tracks.core, indexes: [0, 1, 2, 3, 4, 5], applied: false },
    { info: c.tracks.applied, indexes: [6, 7], applied: true },
  ];

  return (
    <Section tone="paper">
      <SectionHeading eyebrow={c.eyebrow} title={c.title} intro={c.intro} />

      <aside className="mt-10 flex gap-4 rounded-xl border border-violet-200 bg-violet-50 p-6">
        <FlaskConical aria-hidden className="mt-1 h-6 w-6 shrink-0 text-violet-700" />
        <div>
          <h3 className="text-lg font-semibold">{c.foundation.title}</h3>
          <p className="mt-1 text-[15px] leading-relaxed text-ink-700">{c.foundation.text}</p>
        </div>
      </aside>

      <div className="mt-14 space-y-14">
        {groups.map((g) => (
          <div key={g.info.name}>
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-paper-300 pb-3">
              <h3 className="text-2xl font-semibold">{g.info.name}</h3>
              <span
                className={cn(
                  "rounded-full px-3 py-1 text-xs font-semibold",
                  g.applied ? "bg-sun-300 text-ink" : "bg-violet-100 text-violet-800",
                )}
              >
                {g.info.range}
              </span>
              <span className="text-sm text-ink-500">{g.info.text}</span>
            </div>

            <ol className="mt-6 space-y-4">
              {g.indexes.map((i) => {
                const w = c.weeks[i];
                return (
                  <li key={w.theme} className="grid gap-5 rounded-xl border border-paper-200 bg-white p-6 shadow-soft md:grid-cols-[7rem_1fr]">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-600">
                        {dict.common.week}
                      </p>
                      <p className="font-display text-5xl font-semibold leading-none text-violet-700">{i + 1}</p>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold leading-snug">{w.theme}</h4>
                      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
                        {dict.common.youWillStudy}
                      </p>
                      <ul className="mt-2 space-y-2">
                        {w.topics.map((t) => (
                          <li key={t} className="flex gap-3 text-[15px] text-ink-700">
                            <BookOpenCheck aria-hidden className="mt-1 h-4 w-4 shrink-0 text-violet-500" />
                            {t}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-5 inline-flex items-start gap-2 rounded-lg bg-sun-100 px-3.5 py-2 text-sm font-medium text-ink">
                        <PackageCheck aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-sun-600" />
                        <span>
                          <span className="font-semibold">{dict.common.deliverable}:</span> {w.deliverable}
                        </span>
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
            {g.applied && <p className="mt-4 text-sm font-medium text-violet-800">{c.distinction}</p>}
          </div>
        ))}
      </div>
    </Section>
  );
}
