import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { PageHeader } from "@/components/ui/page-header";
import { ApplicationForm } from "@/components/application/application-form";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return isLocale(locale) ? { title: getDictionary(locale).pages.apply.title } : {};
}

export default async function ApplyPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const page = dict.pages.apply;
  return (
    <>
      <PageHeader title={page.title} intro={page.intro} />
      <section className="bg-paper py-12 sm:py-16">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_20rem]">
          <ApplicationForm locale={locale} form={dict.form} validation={dict.validation} homeLabel={dict.common.backToHome} />
          <aside className="h-fit rounded-xl border border-paper-200 bg-white p-6 shadow-soft lg:sticky lg:top-24">
            <h2 className="text-lg font-semibold">{page.sidebarTitle}</h2>
            <ol className="mt-4 space-y-4">
              {page.sidebar.map((s, i) => (
                <li key={s} className="flex gap-3 text-sm text-ink-700">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-100 text-xs font-bold text-violet-700">
                    {i + 1}
                  </span>
                  {s}
                </li>
              ))}
            </ol>
            <p className="mt-6 border-t border-paper-200 pt-4 text-sm text-ink-500">{page.studentNote}</p>
          </aside>
        </div>
      </section>
    </>
  );
}
