"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { cn, localePath } from "@/lib/utils";
import { PartnershipLockup } from "./partnership-lockup";
import { LanguageSwitcher } from "./language-switcher";

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || "";

  const links = [
    { href: localePath(locale), label: dict.nav.home, exact: true },
    { href: localePath(locale, "/program"), label: dict.nav.program },
    { href: localePath(locale, "/admissions"), label: dict.nav.admissions },
  ];

  const isActive = (href: string, exact?: boolean) => (exact ? pathname === href : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-40 border-b border-paper-200 bg-paper/95 backdrop-blur">
      <div className="container-x flex h-[68px] items-center justify-between gap-4">
        <Link href={localePath(locale)} aria-label={dict.brand.programName} className="shrink-0">
          <PartnershipLockup dict={dict} size="sm" />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={isActive(l.href, l.exact) ? "page" : undefined}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition",
                isActive(l.href, l.exact)
                  ? "bg-violet-50 text-violet-800"
                  : "text-ink-600 hover:bg-paper-100 hover:text-ink",
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher locale={locale} label={dict.common.language} className="hidden md:flex" />
          <Link href={localePath(locale, "/apply")} className="btn-primary hidden !py-2.5 sm:inline-flex">
            {dict.nav.apply}
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-paper-300 text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? dict.common.closeMenu : dict.common.menu}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-paper-200 bg-paper lg:hidden">
          <div className="container-x flex flex-col gap-1 py-4">
            {[...links, { href: localePath(locale, "/apply"), label: dict.nav.apply, exact: false }].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-ink hover:bg-paper-100"
              >
                {l.label}
              </Link>
            ))}
            <LanguageSwitcher locale={locale} label={dict.common.language} className="mt-3 border-t border-paper-200 pt-4" />
          </div>
        </div>
      )}
    </header>
  );
}
