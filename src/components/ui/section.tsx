import { cn } from "@/lib/utils";

export function Section({
  id,
  tone = "paper",
  className,
  children,
}: {
  id?: string;
  tone?: "paper" | "white" | "tint" | "ink";
  className?: string;
  children: React.ReactNode;
}) {
  const tones = {
    paper: "bg-paper",
    white: "bg-white",
    tint: "bg-violet-50/70",
    ink: "bg-violet-950 text-white",
  } as const;
  return (
    <section id={id} className={cn("scroll-mt-24 py-16 sm:py-24", tones[tone], className)}>
      <div className="container-x">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = "light",
  className,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <header className={cn("max-w-3xl", className)}>
      {eyebrow && <p className={cn("eyebrow", dark && "!text-sun-300")}>{eyebrow}</p>}
      <h2 className={cn("mt-4 text-3xl font-semibold leading-tight sm:text-[2.35rem]", dark && "!text-white")}>
        {title}
      </h2>
      {intro && <p className={cn("mt-4 text-lg leading-relaxed", dark ? "text-white/75" : "text-ink-600")}>{intro}</p>}
    </header>
  );
}
