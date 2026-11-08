// Usage:  npm run export:applications            -> applications-YYYY-MM-DD.csv in the project root
//         npm run export:applications -- out.csv -> custom file name
import { writeFileSync } from "node:fs";
import mongoose from "mongoose";

const uri = process.env.MONGODB_URI;
if (!uri) {
  console.error("MONGODB_URI is not set. Create .env.local from .env.example first.");
  process.exit(1);
}

const columns = [
  "reference", "status", "createdAt", "fullName", "email", "phone", "country", "city",
  "communicationLanguage", "workingLanguages", "track", "sector", "organization", "jobTitle",
  "yearsExperience", "institution", "studyProgram", "studyLevel", "feeCategory", "paymentPlan",
  "heardFrom", "motivation", "sectorProblem", "siteLocale",
];

const cell = (v) => {
  if (v === undefined || v === null) return "";
  let s = Array.isArray(v) ? v.join("; ") : v instanceof Date ? v.toISOString() : String(v);
  // Neutralise spreadsheet formula injection.
  if (/^[=+\-@\t\r]/.test(s)) s = `'${s}`;
  return `"${s.replaceAll('"', '""')}"`;
};

await mongoose.connect(uri, { serverSelectionTimeoutMS: 5000 });
const docs = await mongoose.connection.collection("applications").find({}).sort({ createdAt: 1 }).toArray();
const rows = [columns.join(","), ...docs.map((d) => columns.map((c) => cell(d[c])).join(","))];
const file = process.argv[2] ?? `applications-${new Date().toISOString().slice(0, 10)}.csv`;
// BOM so Excel opens Arabic/French text correctly.
writeFileSync(file, "﻿" + rows.join("\n"), "utf8");
console.log(`Exported ${docs.length} application(s) to ${file}`);
await mongoose.disconnect();
