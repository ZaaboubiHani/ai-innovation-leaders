import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Dictionary } from "@/i18n/get-dictionary";

type Props = {
  dict: Dictionary;
  /** "light" = on a pale background, "dark" = on the ink background. */
  tone?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  showSentence?: boolean;
  className?: string;
};

const sizes = {
  sm: { bulb: "h-9", altis: "h-12", word: "text-[17px]" },
  md: { bulb: "h-11", altis: "h-11", word: "text-xl" },
  lg: { bulb: "h-14", altis: "h-14", word: "text-2xl" },
} as const;

/**
 * "PROLYNC — In Academic Partnership with Altis"
 * Uses the supplied logo files untouched (proportions preserved via h-* + w-auto).
 */
export function PartnershipLockup({ dict, tone = "light", size = "md", showSentence = true, className }: Props) {
  const s = sizes[size];
  const dark = tone === "dark";
  return (
    <div className={cn("flex items-center gap-3 sm:gap-4", className)}>
      <div className="flex items-center gap-2.5">
        <Image
          src="/brand/prolync-logo.png"
          alt={dict.brand.prolyncLogoAlt}
          width={213}
          height={353}
          priority
          className={cn(s.bulb, "w-auto")}
        />
        <span className={cn("font-sans font-extrabold tracking-[0.14em]", s.word, dark ? "text-white" : "text-violet-800")}>
          {dict.brand.prolync}
        </span>
      </div>
      <span aria-hidden className={cn("h-8 w-px", dark ? "bg-white/25" : "bg-paper-300")} />
      <div className="flex items-center gap-3">
        {showSentence && (
          <span
            className={cn(
              "hidden max-w-[7.5rem] text-[11px] font-medium leading-tight sm:block",
              dark ? "text-white/70" : "text-ink-500",
            )}
          >
            {dict.brand.partnership.replace(/\s*Altis$/, "")}
          </span>
        )}
        <span className={cn("inline-flex items-center", dark && "rounded-lg bg-white px-2.5 py-1.5")}>
          <Image
            src="/brand/altis-logo.png"
            alt={dict.brand.altisLogoAlt}
            width={719}
            height={409}
            priority
            className={cn(s.altis, "w-auto")}
          />
        </span>
      </div>
    </div>
  );
}
