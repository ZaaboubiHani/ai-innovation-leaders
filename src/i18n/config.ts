export const locales = ["en", "fr", "ar"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";
export const LOCALE_COOKIE = "NEXT_LOCALE";

export const localeMeta: Record<Locale, { dir: "ltr" | "rtl"; label: string; native: string; short: string }> = {
  en: { dir: "ltr", label: "English", native: "English", short: "EN" },
  fr: { dir: "ltr", label: "French", native: "Français", short: "FR" },
  ar: { dir: "rtl", label: "Arabic", native: "العربية", short: "ع" },
};

export function isLocale(value: string | undefined | null): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}
