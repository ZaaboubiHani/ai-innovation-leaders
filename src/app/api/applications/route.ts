import { NextResponse } from "next/server";
import { applicationSchema } from "@/lib/application-schema";
import { connectToDatabase } from "@/lib/mongodb";
import { ApplicationModel } from "@/models/application";
import { burstLimited, clientIp, hashIp, isSameOrigin, newReference } from "@/lib/request-security";
import { siteConfig } from "@/config/site";
import { isLocale } from "@/i18n/config";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_BODY_BYTES = 20_000;
const noStore = { "Cache-Control": "no-store" };

const json = (body: unknown, status = 200) => NextResponse.json(body, { status, headers: noStore });

export async function POST(request: Request) {
  if (!isSameOrigin(request.headers)) return json({ ok: false, code: "forbidden" }, 403);

  const ip = clientIp(request.headers);
  const ipHash = hashIp(ip);
  if (burstLimited(ipHash)) return json({ ok: false, code: "rate_limited" }, 429);

  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return json({ ok: false, code: "bad_request" }, 415);

  const raw = await request.text();
  if (raw.length > MAX_BODY_BYTES) return json({ ok: false, code: "too_large" }, 413);

  let payload: unknown;
  try {
    payload = JSON.parse(raw);
  } catch {
    return json({ ok: false, code: "bad_request" }, 400);
  }
  if (typeof payload !== "object" || payload === null || Array.isArray(payload)) {
    return json({ ok: false, code: "bad_request" }, 400);
  }

  const body = payload as Record<string, unknown>;

  // Honeypot: bots fill every field. Pretend success so they learn nothing.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return json({ ok: true, reference: newReference() });
  }

  const parsed = applicationSchema.safeParse(body);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const field = String(issue.path[0] ?? "form");
      if (!fieldErrors[field]) fieldErrors[field] = issue.message;
    }
    return json({ ok: false, code: "validation", fieldErrors }, 422);
  }

  const data = parsed.data;
  const siteLocale = isLocale(String(body.locale)) ? String(body.locale) : "en";

  try {
    await connectToDatabase();

    // Persistent, cross-instance rate limit: N applications per hashed IP per hour.
    const since = new Date(Date.now() - 60 * 60 * 1000);
    const recent = await ApplicationModel.countDocuments({ ipHash, createdAt: { $gte: since } });
    if (recent >= siteConfig.applicationsPerIpPerHour) return json({ ok: false, code: "rate_limited" }, 429);

    const isProfessional = data.track === "professional";
    const isStudent = data.track === "student";

    const created = await ApplicationModel.create({
      reference: newReference(),
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      track: data.track,
      sector: data.sector,
      // Only keep fields relevant to the chosen track.
     
      motivation: data.motivation,
      sectorProblem: data.sectorProblem,
      paymentPlan: data.paymentPlan,
      heardFrom: data.heardFrom,
      consent: data.consent,
      consentAt: new Date(),
      siteLocale,
      ipHash,
      userAgent: (request.headers.get("user-agent") ?? "").slice(0, 300),
    });

    return json({ ok: true, reference: created.reference }, 201);
  } catch (error) {
    const err = error as { code?: number; name?: string; keyPattern?: Record<string, unknown> };
    if (err.code === 11000) {
      // Duplicate email (or, astronomically unlikely, a reference collision).
      if (err.keyPattern && "reference" in err.keyPattern) return json({ ok: false, code: "retry" }, 500);
      return json({ ok: false, code: "duplicate" }, 409);
    }
    if (err.name === "ValidationError") return json({ ok: false, code: "validation" }, 422);

    console.error("[applications] database error:", error);
    return json({ ok: false, code: "unavailable" }, 503);
  }
}

// Anything other than POST is not supported.
export function GET() {
  return json({ ok: false, code: "method_not_allowed" }, 405);
}
