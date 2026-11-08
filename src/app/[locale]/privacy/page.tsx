import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { siteConfig } from "@/config/site";
import { PageHeader } from "@/components/ui/page-header";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return isLocale(locale) ? { title: getDictionary(locale).pages.privacy.title } : {};
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const p = getDictionary(locale).pages.privacy;
  return (
    <>
      <PageHeader title={p.title} intro={p.intro} />
      <section className="bg-paper py-14">
        <div className="container-x max-w-3xl space-y-8">
          {p.sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-xl font-semibold">{s.title}</h2>
              <p className="mt-2 leading-relaxed text-ink-700">{s.text}</p>
            </div>
          ))}
          {siteConfig.contactEmail && (
            <p className="text-ink-700">
              {p.contactLead}{" "}
              <a className="font-semibold text-violet-700 underline" href={`mailto:${siteConfig.contactEmail}`} dir="ltr">
                {siteConfig.contactEmail}
              </a>
              .
            </p>
          )}
        </div>
      </section>
    </>
  );
}
