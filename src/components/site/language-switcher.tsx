"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe } from "lucide-react";
import { LOCALE_COOKIE, localeMeta, locales, type Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

function swapLocale(pathname: string, target: Locale) {
  const parts = pathname.split("/");
  parts[1] = target;
  return parts.join("/") || `/${target}`;
}

export function LanguageSwitcher({
  locale,
  label,
  className,
}: {
  locale: Locale;
  label: string;
  className?: string;
}) {
  const pathname = usePathname() || `/${locale}`;

  const remember = (l: Locale) => {
    try {
      document.cookie = `${LOCALE_COOKIE}=${l}; path=/; max-age=31536000; samesite=lax`;
    } catch {
      /* cookies unavailable: the URL still carries the language */
    }
  };

  return (
    <nav aria-label={label} className={cn("flex items-center gap-1", className)}>
      <Globe aria-hidden className="me-1 h-4 w-4 text-ink-500" />
      {locales.map((l) => {
        const active = l === locale;
        return (
          <Link
            key={l}
            href={swapLocale(pathname, l)}
            hrefLang={l}
            lang={l}
            scroll={false}
            onClick={() => remember(l)}
            aria-current={active ? "true" : undefined}
            title={localeMeta[l].label}
            className={cn(
              "rounded-md px-2 py-1 text-sm font-semibold transition",
              active ? "bg-violet-600 text-white" : "text-ink-600 hover:bg-violet-50 hover:text-violet-800",
            )}
          >
            {localeMeta[l].short}
          </Link>
        );
      })}
    </nav>
  );
}
