import { Layers, Rocket, BadgeCheck } from "lucide-react";
import type { Dictionary } from "@/i18n/get-dictionary";
import { Section, SectionHeading } from "@/components/ui/section";

const icons = [Layers, Rocket, BadgeCheck];

export function Why({ dict }: { dict: Dictionary }) {
  const w = dict.why;
  return (
    <Section tone="paper">
      <SectionHeading eyebrow={w.eyebrow} title={w.title} intro={w.intro} />
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {w.items.map((item, i) => {
          const Icon = icons[i] ?? Layers;
          return (
            <article key={item.title} className="card">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-violet-100 text-violet-700">
                <Icon aria-hidden className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-600">{item.text}</p>
            </article>
          );
        })}
      </div>
      <p className="mt-8 border-s-4 border-sun-400 ps-4 text-ink-600">{w.footnote}</p>
    </Section>
  );
}
