import { ChevronDown } from "lucide-react";
import type { Dictionary } from "@/i18n/get-dictionary";
import { Section, SectionHeading } from "@/components/ui/section";

export function Faq({ dict }: { dict: Dictionary }) {
  const f = dict.faq;
  return (
    <Section tone="paper">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <SectionHeading eyebrow={f.eyebrow} title={f.title} />
        <div className="space-y-3">
          {f.items.map((item) => (
            <details key={item.q} className="group rounded-xl border border-paper-200 bg-white shadow-soft open:border-violet-300">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-semibold [&::-webkit-details-marker]:hidden">
                {item.q}
                <ChevronDown aria-hidden className="h-5 w-5 shrink-0 text-violet-600 transition group-open:rotate-180" />
              </summary>
              <p className="px-5 pb-5 text-[15px] leading-relaxed text-ink-600">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
