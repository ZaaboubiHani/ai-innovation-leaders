export const siteConfig = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
  contactPhone1: process.env.NEXT_PUBLIC_CONTACT_PHONE_1 ?? "",
  contactPhone2: process.env.NEXT_PUBLIC_CONTACT_PHONE_2 ?? "",
  contactWebsite: process.env.NEXT_PUBLIC_CONTACT_WEBSITE ?? "",
  tuitionCurrency: process.env.NEXT_PUBLIC_TUITION_CURRENCY ?? "",
  /** Applications limit per hashed IP per hour (server-enforced). */
  applicationsPerIpPerHour: 5,
} as const;
