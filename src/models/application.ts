import mongoose, { Schema, type InferSchemaType, type Model } from "mongoose";
import {
  HEARD_FROM,
  SECTORS,
  TRACKS
} from "@/lib/application-schema";

const applicationSchema = new Schema(
  {
    reference: { type: String, required: true, unique: true, index: true },
    status: {
      type: String,
      enum: ["new", "reviewing", "shortlisted", "interviewed", "offered", "enrolled", "declined", "withdrawn"],
      default: "new",
      index: true,
    },

    fullName: { type: String, required: true, trim: true, maxlength: 120 },
    email: { type: String, required: true, trim: true, lowercase: true, maxlength: 254, unique: true },
    phone: { type: String, required: true, trim: true, maxlength: 30 },

    track: { type: String, enum: TRACKS, required: true },
    sector: { type: String, enum: SECTORS, required: true },
   

    motivation: { type: String, required: true, trim: true, maxlength: 1500 },
    sectorProblem: { type: String, required: true, trim: true, maxlength: 1200 },

    paymentPlan: { type: Boolean, default: false },
    heardFrom: { type: String, enum: [...HEARD_FROM, ""], default: "" },
    consent: { type: Boolean, required: true },
    consentAt: { type: Date, required: true },

    adminNotes: { type: String, maxlength: 2000, default: "" },

    // Site language the applicant used + abuse-detection metadata (hashed, never raw IP).
    siteLocale: { type: String, enum: ["en", "fr", "ar"], required: true },
    ipHash: { type: String, index: true },
    userAgent: { type: String, maxlength: 300 },
  },
  { timestamps: true },
);

applicationSchema.index({ ipHash: 1, createdAt: -1 });

export type ApplicationDoc = InferSchemaType<typeof applicationSchema>;

export const ApplicationModel: Model<ApplicationDoc> =
  (mongoose.models.Application as Model<ApplicationDoc>) ?? mongoose.model<ApplicationDoc>("Application", applicationSchema);
