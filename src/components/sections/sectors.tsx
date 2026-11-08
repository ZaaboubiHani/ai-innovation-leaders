import { Check } from "lucide-react";
import type { Dictionary } from "@/i18n/get-dictionary";
import { Section, SectionHeading } from "@/components/ui/section";
import { SectorIcon } from "@/components/ui/sector-icon";

export function Sectors({ dict }: { dict: Dictionary }) {
  const s = dict.sectors;
  return (
    <Section tone="white">
      <SectionHeading eyebrow={s.eyebrow} title={s.title} intro={s.intro} />
      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {s.items.map((sector) => (
          <article key={sector.id} className="rounded-xl border border-paper-200 bg-paper p-7">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-violet-600 text-white">
                <SectorIcon id={sector.id} aria-hidden className="h-5 w-5" />
              </span>
              <h3 className="text-xl font-semibold">{sector.name}</h3>
            </div>
            <ul className="mt-6 space-y-3">
              {sector.audience.map((a) => (
                <li key={a} className="flex gap-3 text-[15px] text-ink-700">
                  <Check aria-hidden className="mt-1 h-4 w-4 shrink-0 text-violet-600" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
