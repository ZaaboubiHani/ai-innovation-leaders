import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/admin-auth";
import { buildFilter } from "@/lib/admin-queries";
import { connectToDatabase } from "@/lib/mongodb";
import { ApplicationModel } from "@/models/application";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const COLUMNS = [
  "reference", "status", "createdAt", "fullName", "email", "phone", "country", "city",
  "communicationLanguage", "workingLanguages", "track", "sector", "organization", "jobTitle",
  "yearsExperience", "institution", "studyProgram", "studyLevel", "feeCategory", "paymentPlan",
  "heardFrom", "motivation", "sectorProblem", "adminNotes", "siteLocale",
] as const;

function cell(v: unknown): string {
  if (v === undefined || v === null) return "";
  let s = Array.isArray(v) ? v.join("; ") : v instanceof Date ? v.toISOString() : String(v);
  if (/^[=+\-@\t\r]/.test(s)) s = `'${s}`; // neutralise spreadsheet formula injection
  return `"${s.replaceAll('"', '""')}"`;
}

export async function GET(request: Request) {
  if (!(await getAdminSession())) return new NextResponse("Unauthorized", { status: 401 });
  const sp = new URL(request.url).searchParams;
  const filter = buildFilter({ q: sp.get("q") ?? "", sector: sp.get("sector") ?? "", track: sp.get("track") ?? "", status: sp.get("status") ?? "" });

  try {
    await connectToDatabase();
    const docs = await ApplicationModel.find(filter).sort({ createdAt: -1 }).limit(10000).lean();
    const rows = [COLUMNS.join(","), ...docs.map((d) => COLUMNS.map((c) => cell((d as Record<string, unknown>)[c])).join(","))];
    // BOM so Excel reads Arabic and French correctly.
    return new NextResponse("﻿" + rows.join("\n"), {
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="applications-${new Date().toISOString().slice(0, 10)}.csv"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (e) {
    console.error("[admin] export failed:", e);
    return new NextResponse("Database unavailable", { status: 503 });
  }
}
