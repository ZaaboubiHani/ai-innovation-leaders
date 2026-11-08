import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { PageHeader } from "@/components/ui/page-header";
import { Pillars } from "@/components/sections/pillars";
import { CurriculumFull } from "@/components/sections/curriculum";
import { Projects } from "@/components/sections/projects";
import { Outcomes } from "@/components/sections/outcomes";
import { Credentials } from "@/components/sections/credentials";
import { Team } from "@/components/sections/team";
import { CtaBand } from "@/components/sections/cta-band";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return isLocale(locale) ? { title: getDictionary(locale).pages.program.title } : {};
}

export default async function ProgramPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  return (
    <>
      <PageHeader title={dict.pages.program.title} intro={dict.pages.program.intro} />
      <Pillars dict={dict} />
      <CurriculumFull dict={dict} />
      <Projects dict={dict} />
      <Outcomes dict={dict} />
      <Credentials dict={dict} />
      <Team dict={dict} />
      <CtaBand locale={locale} dict={dict} />
    </>
  );
}
