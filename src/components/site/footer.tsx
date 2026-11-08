import Link from "next/link";
import { Mail, Phone, Globe } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { localePath } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { PartnershipLockup } from "./partnership-lockup";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-violet-950 text-white">
      <div className="container-x grid gap-12 py-16 md:grid-cols-[1.6fr_1fr_1fr]">
        <div>
          <PartnershipLockup dict={dict} tone="dark" size="md" />
          <p className="mt-6 max-w-md text-sm leading-relaxed text-white/70">
            {dict.footer.tagline}
          </p>
          <p className="mt-4 text-sm font-semibold text-sun-300">
            {dict.footer.sectors}
          </p>
        </div>

        <nav aria-label={dict.footer.explore}>
          <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
            {dict.footer.explore}
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link
                className="text-white/80 hover:text-white"
                href={localePath(locale)}
              >
                {dict.nav.home}
              </Link>
            </li>
            <li>
              <Link
                className="text-white/80 hover:text-white"
                href={localePath(locale, "/program")}
              >
                {dict.nav.program}
              </Link>
            </li>
            <li>
              <Link
                className="text-white/80 hover:text-white"
                href={localePath(locale, "/admissions")}
              >
                {dict.nav.admissions}
              </Link>
            </li>
            <li>
              <Link
                className="text-white/80 hover:text-white"
                href={localePath(locale, "/apply")}
              >
                {dict.nav.apply}
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
            {dict.footer.contact}
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {siteConfig.contactEmail && (
              <li>
                <a
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white"
                  href={`mailto:${siteConfig.contactEmail}`}
                >
                  <Mail aria-hidden className="h-4 w-4" />
                  <span dir="ltr">{siteConfig.contactEmail}</span>
                </a>
              </li>
            )}
            {siteConfig.contactPhone1 && (
              <li>
                <a
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white"
                  href={`tel:${siteConfig.contactPhone1}`}
                >
                  <Phone aria-hidden className="h-4 w-4" />
                  {siteConfig.contactPhone1}
                </a>
              </li>
            )}
            {siteConfig.contactPhone2 && (
              <li>
                <a
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white"
                  href={`tel:${siteConfig.contactPhone2}`}
                >
                  <Phone aria-hidden className="h-4 w-4" />
                  {siteConfig.contactPhone2}
                </a>
              </li>
            )}
            {siteConfig.contactWebsite && (
              <li>
                <a
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white"
                  href={siteConfig.contactWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Globe aria-hidden className="h-4 w-4" />
                  {siteConfig.contactWebsite}
                </a>
              </li>
            )}
           
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} · {dict.footer.partnerLine}
          </p>
          <p>{dict.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
