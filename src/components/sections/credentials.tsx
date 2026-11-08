import { Award, ShieldCheck } from "lucide-react";
import type { Dictionary } from "@/i18n/get-dictionary";
import { cn } from "@/lib/utils";
import { Section, SectionHeading } from "@/components/ui/section";

export function Credentials({ dict }: { dict: Dictionary }) {
  const c = dict.credentials;
  return (
    <Section tone="tint">
      <SectionHeading eyebrow={c.eyebrow} title={c.title} intro={c.intro} />
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {c.tiers.map((t, i) => (
          <article
            key={t.name}
            className={cn(
              "flex flex-col rounded-xl p-6",
              t.flagship ? "bg-violet-700 text-white shadow-lift" : "border border-paper-200 bg-white shadow-soft",
            )}
          >
            <div className="flex items-center justify-between">
              <span
                className={cn(
                  "inline-flex h-10 w-10 items-center justify-center rounded-full",
                  t.flagship ? "bg-sun-400 text-ink" : "bg-violet-100 text-violet-700",
                )}
              >
                <Award aria-hidden className="h-5 w-5" />
              </span>
              <span className={cn("font-display text-3xl font-semibold", t.flagship ? "text-white/40" : "text-violet-200")}>
                {i + 1}
              </span>
            </div>
            <h3 className={cn("mt-5 text-lg font-semibold leading-snug", t.flagship && "!text-white")}>{t.name}</h3>
            <p className={cn("mt-4 text-xs font-semibold uppercase tracking-[0.14em]", t.flagship ? "text-sun-300" : "text-violet-600")}>
              {c.requirementLabel}
            </p>
            <p className={cn("mt-1 text-[15px] leading-relaxed", t.flagship ? "text-white/90" : "text-ink-700")}>
              {t.requirement}
            </p>
            <p className={cn("mt-4 text-xs font-semibold uppercase tracking-[0.14em]", t.flagship ? "text-sun-300" : "text-violet-600")}>
              {c.signalLabel}
            </p>
            <p className={cn("mt-1 text-[15px] leading-relaxed", t.flagship ? "text-white/90" : "text-ink-700")}>
              {t.signal}
            </p>
          </article>
        ))}
      </div>
      <p className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-violet-800">
        <ShieldCheck aria-hidden className="h-5 w-5" />
        {c.verifiable}
      </p>
    </Section>
  );
}
