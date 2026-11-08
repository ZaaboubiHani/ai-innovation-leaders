import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { localePath } from "@/lib/utils";
import { SectorIcon } from "@/components/ui/sector-icon";
import { Arrow } from "@/components/ui/arrow";

/** Node positions (percent of the visual box) for Education, Medicine, Agriculture. */
const nodes = [
  { id: "education", left: 50, top: 8 },
  { id: "medicine", left: 12, top: 78 },
  { id: "agriculture", left: 88, top: 78 },
] as const;

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const h = dict.hero;
  return (
    <section className="relative overflow-hidden bg-violet-950 text-white">
      <div aria-hidden className="grid-bg absolute inset-0" />
      <div
        aria-hidden
        className="absolute -end-32 top-0 h-[34rem] w-[34rem] rounded-full bg-violet-600/30 blur-3xl"
      />

      <div className="container-x relative grid items-center gap-14 py-16 sm:py-24 lg:grid-cols-[1.15fr_1fr] lg:py-28">
        <div className="animate-fade-up">
          <p className="eyebrow !text-sun-300">{h.eyebrow}</p>
          <h1 className="mt-5 text-[2.6rem] font-semibold leading-[1.08] !text-white sm:text-6xl">{h.title}</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">{h.subtitle}</p>
          <p className="mt-5 text-sm font-semibold text-sun-300">{h.sectorsLine}</p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link href={localePath(locale, "/apply")} className="btn-sun">
              {h.primaryCta}
              <Arrow />
            </Link>
            <Link href={localePath(locale, "/program")} className="btn-ghost-light">
              {h.secondaryCta}
            </Link>
          </div>

          <dl className="mt-14 grid max-w-xl grid-cols-2 gap-x-8 gap-y-6 border-t border-white/15 pt-8 sm:grid-cols-4">
            {h.facts.map((f) => (
              <div key={f.label}>
                <dt className="font-display text-4xl font-semibold text-white">{f.value}</dt>
                <dd className="mt-1 text-xs leading-snug text-white/65">{f.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Decorative visual: applied AI at the centre of the three sectors */}
        <div
          role="img"
          aria-label={h.visualLabel}
          className="relative mx-auto aspect-square w-full max-w-[28rem] animate-fade-up [animation-delay:150ms]"
        >
          <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden>
            <circle cx="50" cy="50" r="30" fill="none" stroke="rgba(255,255,255,.12)" strokeWidth=".4" />
            <circle cx="50" cy="50" r="44" fill="none" stroke="rgba(255,255,255,.08)" strokeWidth=".4" strokeDasharray="1 2" />
            {nodes.map((n) => (
              <line
                key={n.id}
                x1="50"
                y1="50"
                x2={n.left}
                y2={n.top + 4}
                stroke="rgba(192,160,252,.55)"
                strokeWidth=".5"
                strokeDasharray="1.5 1.5"
              />
            ))}
          </svg>

          {/* sun rays echoing the Prolync mark */}
          <span aria-hidden className="absolute end-2 top-0 h-7 w-[3px] rotate-[-20deg] rounded-full bg-sun-400 animate-ray-pulse" />
          <span aria-hidden className="absolute end-9 top-1 h-7 w-[3px] rotate-[-55deg] rounded-full bg-sun-400 animate-ray-pulse [animation-delay:.6s]" />
          <span aria-hidden className="absolute -end-1 top-10 h-[3px] w-7 rounded-full bg-sun-400 animate-ray-pulse [animation-delay:1.2s]" />

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex h-36 w-36 flex-col items-center justify-center rounded-full bg-white px-3 text-center shadow-lift animate-orbit-drift">
              <Image src="/brand/prolync-logo.png" alt="" width={213} height={353} className="h-[4.2rem] w-auto" />
              <span className="mt-1 text-[10px] font-bold uppercase leading-tight tracking-[0.1em] text-violet-800">{h.core}</span>
            </div>
          </div>

          {nodes.map((n) => {
            const sector = dict.sectors.items.find((s) => s.id === n.id)!;
            return (
              <div
                key={n.id}
                style={{ left: `${n.left}%`, top: `${n.top}%` }}
                className="absolute flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-white/20 bg-violet-900/90 px-3.5 py-2 text-sm font-medium text-white shadow-lift"
              >
                <SectorIcon id={n.id} aria-hidden className="h-4 w-4 text-sun-300" />
                {sector.name}
              </div>
            );
          })}

          <p className="absolute bottom-0 start-0 end-0 text-center text-xs text-white/55">{h.cohortNote}</p>
        </div>
      </div>
    </section>
  );
}
