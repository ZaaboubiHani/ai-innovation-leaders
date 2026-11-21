import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { localePath } from "@/lib/utils";
import { SectorIcon } from "@/components/ui/sector-icon";
import { Arrow } from "@/components/ui/arrow";

/** Node positions (percent of the visual box) — values match the SVG geometry. */
const nodes = [
  { id: "education", left: 50, top: 12 },
  { id: "medicine", left: 12, top: 55 },
  { id: "agriculture", left: 88, top: 55 },
  { id: "veterinary", left: 50, top: 90 },
] as const;

/**
 * SMIL dot pulses travelling from the core to each sector.
 * `dur` is staggered so pulses launch one after another, and the
 * loop restarts because begin="-Ns" pulls each cycle into the past.
 */
const pulses = [
  { id: "education", begin: "-0s", dur: "4s" },
  { id: "medicine", begin: "-1.2s", dur: "4s" },
  { id: "agriculture", begin: "-2.4s", dur: "4s" },
  { id: "veterinary", begin: "-3.2s", dur: "4s" },
] as const;

/** Faint starfield over the grid — positions in viewBox units. */
const stars = [
  { x: 14, y: 10, r: 0.7, d: "0s" },
  { x: 30, y: 20, r: 0.5, d: "1.1s" },
  { x: 70, y: 8, r: 0.6, d: "2.3s" },
  { x: 86, y: 22, r: 0.5, d: "0.6s" },
  { x: 22, y: 84, r: 0.6, d: "3.1s" },
  { x: 78, y: 88, r: 0.5, d: "1.8s" },
  { x: 92, y: 62, r: 0.7, d: "2.7s" },
  { x: 8, y: 30, r: 0.5, d: "0.9s" },
] as const;

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const h = dict.hero;
  return (
    <section className="hero-motion relative overflow-hidden bg-violet-950 text-white">
      <div aria-hidden className="grid-bg absolute inset-0" />

      {/* Two glow blobs slowly trading places behind everything. */}
      <div
        aria-hidden
        className="absolute -end-32 top-0 h-[34rem] w-[34rem] rounded-full bg-violet-600/30 blur-3xl animate-blob-drift"
      />
      <div
        aria-hidden
        className="absolute -start-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-sun-400/10 blur-3xl animate-blob-drift-alt"
      />

      <div className="container-x relative grid items-center gap-14 py-16 sm:py-24 lg:grid-cols-[1.15fr_1fr] lg:py-28">
        <div className="animate-fade-up">
          <p className="eyebrow !text-sun-300">{h.eyebrow}</p>
          <h1 className="mt-5 text-[2.6rem] font-semibold leading-[1.08] !text-white sm:text-6xl">
            {h.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            {h.subtitle}
          </p>
          <p className="mt-5 text-sm font-semibold text-sun-300">
            {h.sectorsLine}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href={localePath(locale, "/apply")}
              className="btn-sun btn-sheen"
            >
              {h.primaryCta}
              <Arrow />
            </Link>
            <Link
              href={localePath(locale, "/program")}
              className="btn-ghost-light"
            >
              {h.secondaryCta}
            </Link>
          </div>

          <dl className="mt-14 grid max-w-xl grid-cols-2 gap-x-8 gap-y-6 border-t border-white/15 pt-8 sm:grid-cols-4">
            {h.facts.map((f, i) => (
              <div
                key={f.label}
                className="animate-fade-up"
                style={{ animationDelay: `${0.25 + i * 0.15}s` }}
              >
                <dt className="font-display text-4xl font-semibold text-white">
                  {f.value}
                </dt>
                <dd className="mt-1 text-xs leading-snug text-white/65">
                  {f.label}
                </dd>
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
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 h-full w-full"
            aria-hidden
          >
            {/* twinkling starfield over the grid */}
            {stars.map((s) => (
              <circle
                key={`${s.x}-${s.y}`}
                cx={s.x}
                cy={s.y}
                r={s.r}
                className="fill-white animate-twinkle"
                style={{ animationDelay: s.d }}
              />
            ))}

            {/* counter-rotating orbit rings */}
            <circle
              cx="50"
              cy="50"
              r="30"
              fill="none"
              stroke="rgba(255,255,255,.12)"
              strokeWidth=".4"
              className="svg-spin animate-ring-spin"
            />
            <circle
              cx="50"
              cy="50"
              r="44"
              fill="none"
              stroke="rgba(255,255,255,.08)"
              strokeWidth=".4"
              strokeDasharray="1 2"
              className="svg-spin animate-ring-spin-rev"
            />

            {/* core halo breathing behind the white disc */}
            <circle
              cx="50"
              cy="50"
              r="34"
              fill="none"
              stroke="rgba(192,160,252,.5)"
              strokeWidth="1"
              className="animate-halo-pulse"
            />

            {/* connectors with flowing dashes */}
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
                className="animate-flow-dash"
              />
            ))}

            {/* SMIL dot pulses travelling core -> sector.
                begin is negative so all four are mid-flight at t=0
                and every cycle relaunches without a delay gap. */}
            {nodes.map((n) => {
              const p = pulses.find((p) => p.id === n.id)!;
              return (
                <circle key={n.id} r="1" className="pulse-dot" fill="#c4b5fd">
                  <animateMotion
                    dur={p.dur}
                    begin={p.begin}
                    repeatCount="indefinite"
                    calcMode="spline"
                    keySplines="0.3 0 0.2 1"
                    path={`M 50 50 L ${n.left} ${n.top + 4}`}
                  />
                </circle>
              );
            })}
          </svg>

          {/* sun rays echoing the Prolync mark */}
          <span
            aria-hidden
            className="absolute end-2 top-0 h-7 w-[3px] rotate-[-20deg] rounded-full bg-sun-400 animate-ray-pulse"
          />
          <span
            aria-hidden
            className="absolute end-9 top-1 h-7 w-[3px] rotate-[-55deg] rounded-full bg-sun-400 animate-ray-pulse [animation-delay:.6s]"
          />
          <span
            aria-hidden
            className="absolute -end-1 top-10 h-[3px] w-7 rounded-full bg-sun-400 animate-ray-pulse [animation-delay:1.2s]"
          />

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex h-32 w-32 flex-col items-center justify-center rounded-full bg-white px-3 text-center shadow-lift animate-core-breathe">
              <Image
                src="/brand/prolync-logo.png"
                alt=""
                width={213}
                height={353}
                className="h-[6.2rem] w-auto"
              />
              {/* <span className="mt-1 text-[10px] font-bold uppercase leading-tight tracking-[0.1em] text-violet-800">
                {h.core}
              </span> */}
            </div>
          </div>

          {nodes.map((n, i) => {
            const sector = dict.sectors.items.find((s) => s.id === n.id)!;
            const isSide = n.id === "medicine" || n.id === "agriculture";
            return (
              <div
                key={n.id}
                style={{
                  left: `${n.left}%`,
                  top: `${n.top}%`,
                  animationDelay: `${i * 0.8}s`,
                }}
                className={`absolute flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-white/20 bg-violet-900/90 px-3.5 py-2 text-sm font-medium text-white shadow-lift ${
                  isSide ? "animate-node-drift-h" : "animate-node-drift"
                }`}
              >
                <SectorIcon
                  id={n.id}
                  aria-hidden
                  className="h-4 w-4 text-sun-300"
                />
                {sector.name}
              </div>
            );
          })}

          <p className="absolute -bottom-10 start-0 end-0 text-center text-xs text-white/55">
            {h.cohortNote}
          </p>
        </div>
      </div>
    </section>
  );
}
