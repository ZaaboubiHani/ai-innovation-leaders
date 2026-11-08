import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { Hero } from "@/components/sections/hero";
import { Snapshot } from "@/components/sections/snapshot";
import { Why } from "@/components/sections/why";
import { Sectors } from "@/components/sections/sectors";
import { Pillars } from "@/components/sections/pillars";
import { CurriculumOverview } from "@/components/sections/curriculum";
import { Credentials } from "@/components/sections/credentials";
import { Faq } from "@/components/sections/faq";
import { CtaBand } from "@/components/sections/cta-band";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  return (
    <>
      <Hero locale={locale} dict={dict} />
      <Snapshot dict={dict} />
      <Why dict={dict} />
      <Sectors dict={dict} />
      <Pillars dict={dict} />
      <CurriculumOverview locale={locale} dict={dict} />
      <Credentials dict={dict} />
      <Faq dict={dict} />
      <CtaBand locale={locale} dict={dict} />
    </>
  );
}
