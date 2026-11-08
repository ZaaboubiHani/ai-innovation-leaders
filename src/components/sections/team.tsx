import type { Dictionary } from "@/i18n/get-dictionary";
import { Section, SectionHeading } from "@/components/ui/section";

export function Team({ dict }: { dict: Dictionary }) {
  const t = dict.team;
  const orgs = [t.prolync, t.altis];
  return (
    <Section tone="white">
      <SectionHeading eyebrow={t.eyebrow} title={t.title} intro={t.intro} />
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {orgs.map((org, i) => (
          <article
            key={org.name}
            className={i === 0 ? "rounded-xl bg-violet-700 p-7 text-white" : "rounded-xl bg-altis p-7 text-white"}
          >
            <h3 className={i === 0 ? "text-2xl font-semibold !text-white" : "text-2xl font-semibold !text-white"}>{org.name}</h3>
            <ul className="mt-5 space-y-3">
              {org.roles.map((r) => (
                <li key={r} className="flex gap-3 text-[15px]">
                  <span
                    aria-hidden
                    className={i === 0 ? "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sun-300" : "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sun-300"}
                  />
                  {r}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <h3 className="mt-14 text-2xl font-semibold">{t.facultyTitle}</h3>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {t.faculty.map((f) => (
          <article key={f.title} className="rounded-xl border border-paper-200 bg-paper p-5">
            <h4 className="text-base font-semibold leading-snug">{f.title}</h4>
            <p className="mt-2 text-sm leading-relaxed text-ink-600">{f.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
