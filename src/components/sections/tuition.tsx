import { CheckCircle2 } from "lucide-react";
import type { Dictionary } from "@/i18n/get-dictionary";
import { siteConfig } from "@/config/site";
import { Section, SectionHeading } from "@/components/ui/section";

export function Tuition({ dict }: { dict: Dictionary }) {
  const t = dict.tuition;
  const currency = siteConfig.tuitionCurrency;
  const fee = (row: (typeof t.rows)[number]) => (row.amount && currency ? `${row.fee} ${currency}` : row.fee);

  return (
    <Section tone="paper">
      <SectionHeading eyebrow={t.eyebrow} title={t.title} intro={t.intro} />

      <div className="mt-12 hidden overflow-hidden rounded-xl border border-paper-200 bg-white shadow-soft md:block">
        <table className="w-full text-start text-[15px]">
          <thead className="bg-violet-950 text-white">
            <tr>
              <th scope="col" className="px-5 py-3.5 text-start font-semibold">{t.headers.option}</th>
              <th scope="col" className="px-5 py-3.5 text-start font-semibold">{t.headers.fee}</th>
              <th scope="col" className="px-5 py-3.5 text-start font-semibold">{t.headers.notes}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-paper-200">
            {t.rows.map((row) => (
              <tr key={row.option} className={row.amount ? "bg-violet-50/60" : undefined}>
                <th scope="row" className="px-5 py-4 text-start font-semibold text-ink">{row.option}</th>
                <td className="px-5 py-4 font-semibold text-violet-800">{fee(row)}</td>
                <td className="px-5 py-4 text-ink-600">{row.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ul className="mt-12 space-y-3 md:hidden">
        {t.rows.map((row) => (
          <li key={row.option} className="rounded-xl border border-paper-200 bg-white p-4 shadow-soft">
            <p className="font-semibold">{row.option}</p>
            <p className="mt-1 text-lg font-semibold text-violet-700">{fee(row)}</p>
            <p className="mt-1 text-sm text-ink-600">{row.notes}</p>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm text-ink-500">{t.indicative}</p>

      <div className="mt-14 rounded-2xl bg-white p-8 shadow-soft">
        <h3 className="text-2xl font-semibold">{t.includesTitle}</h3>
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {t.includes.map((inc) => (
            <li key={inc} className="flex gap-3 text-[15px] text-ink-700">
              <CheckCircle2 aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-violet-600" />
              {inc}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
