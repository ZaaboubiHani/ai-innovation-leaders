import { z } from "zod";

/**
 * Single source of truth for the application form.
 * Imported by the browser (React Hook Form resolver) AND the Route Handler, so both sides
 * validate identically. Error messages are *keys* into dictionary.validation, which lets the
 * UI re-translate errors instantly when the visitor switches language.
 */

export const SECTORS = ["education", "medicine", "agriculture"] as const;
export const TRACKS = ["professional", "student"] as const;
export const HEARD_FROM = ["social", "colleague", "institution", "event", "search", "other"] as const;

export type Sector = (typeof SECTORS)[number];
export type Track = (typeof TRACKS)[number];

const required = { errorMap: () => ({ message: "required" }) };

const text = (min: number, max: number, minKey = "tooShort") =>
  z.string().trim().min(min, minKey).max(max, "tooLong");

const optionalText = (max: number) => z.string().trim().max(max, "tooLong");

export const applicationSchema = z
  .object({
    // --- About you
    fullName: text(2, 120, "nameShort"),
    email: z.string().trim().toLowerCase().min(1, "required").email("email").max(254, "tooLong"),
    phone: z
      .string()
      .trim()
      .min(1, "required")
      .max(30, "tooLong")
      .regex(/^\+?[0-9][0-9\s().-]{5,}$/, "phone"),
   
   
    // --- Eligibility
    track: z.enum(TRACKS, required),
    sector: z.enum(SECTORS, required),

    // --- Motivation
    motivation: text(80, 1500, "motivationShort"),
    sectorProblem: text(40, 1200, "problemShort"),

    // --- Tuition & consent
    paymentPlan: z.boolean(),
    heardFrom: z.union([z.enum(HEARD_FROM), z.literal("")]),
    consent: z.literal(true, { errorMap: () => ({ message: "consentRequired" }) }),

    // Honeypot: real visitors never see or fill this field.
    website: z.string().max(0).optional(),
  })
  .superRefine((v, ctx) => {
    const need = (path: keyof typeof v, key = "required") =>
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: [path], message: key });

   
  });

export type ApplicationInput = z.infer<typeof applicationSchema>;

export const emptyApplication: Partial<ApplicationInput> = {
  fullName: "",
  email: "",
  phone: "",
  motivation: "",
  sectorProblem: "",
  paymentPlan: false,
  heardFrom: "",
  website: "",
};
