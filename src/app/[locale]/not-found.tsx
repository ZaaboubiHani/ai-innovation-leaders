import Link from "next/link";
import { headers } from "next/headers";
import { defaultLocale, isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export default async function NotFound() {
  const h = await headers();
  const seg = (h.get("x-pathname") ?? "").split("/")[1];
  const locale = isLocale(seg) ? seg : defaultLocale;
  const dict = getDictionary(locale);
  return (
    <div className="container-x py-32 text-center">
      <p className="font-display text-6xl text-violet-600">404</p>
      <h1 className="mt-4 text-3xl">{dict.notFound.title}</h1>
      <p className="mt-3 text-ink-600">{dict.notFound.text}</p>
      <Link href={`/${locale}`} className="btn-primary mt-8">
        {dict.common.backToHome}
      </Link>
    </div>
  );
}
