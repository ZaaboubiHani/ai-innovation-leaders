import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { PageHeader } from "@/components/ui/page-header";
import { Eligibility } from "@/components/sections/eligibility";
import { AdmissionsSteps } from "@/components/sections/admissions-steps";
import { Tuition } from "@/components/sections/tuition";
import { Faq } from "@/components/sections/faq";
import { CtaBand } from "@/components/sections/cta-band";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return isLocale(locale) ? { title: getDictionary(locale).pages.admissions.title } : {};
}

export default async function AdmissionsPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  return (
    <>
      <PageHeader title={dict.pages.admissions.title} intro={dict.pages.admissions.intro} />
      <Eligibility dict={dict} />
      <AdmissionsSteps dict={dict} />
      <Tuition dict={dict} />
      <Faq dict={dict} />
      <CtaBand locale={locale} dict={dict} />
    </>
  );
}
