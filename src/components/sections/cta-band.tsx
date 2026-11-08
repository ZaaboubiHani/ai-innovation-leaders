import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { localePath } from "@/lib/utils";
import { Arrow } from "@/components/ui/arrow";

export function CtaBand({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-2xl bg-violet-700 px-8 py-14 text-center text-white sm:px-14">
          <span aria-hidden className="absolute end-10 top-0 h-10 w-[3px] rotate-[-20deg] rounded-full bg-sun-400" />
          <span aria-hidden className="absolute end-20 top-2 h-10 w-[3px] rotate-[-55deg] rounded-full bg-sun-400" />
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold !text-white sm:text-4xl">{dict.cta.title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">{dict.cta.text}</p>
          <Link href={localePath(locale, "/apply")} className="btn-sun mt-8">
            {dict.cta.button}
            <Arrow />
          </Link>
        </div>
      </div>
    </section>
  );
}
