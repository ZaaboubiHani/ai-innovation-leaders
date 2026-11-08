import clsx, { type ClassValue } from "clsx";
import type { Locale } from "@/i18n/config";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/** Build a locale-prefixed internal path, e.g. localePath("fr", "/apply") -> "/fr/apply". */
export function localePath(locale: Locale, path = "") {
  return `/${locale}${path === "/" ? "" : path}`;
}
