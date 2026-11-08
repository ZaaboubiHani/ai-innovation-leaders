import { NextResponse } from "next/server";
import { z } from "zod";
import {
  ADMIN_COOKIE,
  adminConfigured,
  createSessionToken,
  sessionCookieOptions,
  verifyPassword,
} from "@/lib/admin-auth";
import { burstLimited, clientIp, hashIp, isSameOrigin } from "@/lib/request-security";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const body = z.object({ email: z.string().trim().max(254), password: z.string().min(1).max(200) });
const json = (data: unknown, status = 200) => NextResponse.json(data, { status, headers: { "Cache-Control": "no-store" } });

export async function POST(request: Request) {
  if (!isSameOrigin(request.headers)) return json({ ok: false, code: "forbidden" }, 403);
  if (!adminConfigured()) return json({ ok: false, code: "not_configured" }, 503);

  // 8 attempts per 15 minutes per client.
  if (burstLimited(`login:${hashIp(clientIp(request.headers))}`, 8, 15 * 60 * 1000)) {
    return json({ ok: false, code: "rate_limited" }, 429);
  }

  const parsed = body.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return json({ ok: false, code: "invalid" }, 400);

  const emailOk = parsed.data.email.toLowerCase() === (process.env.ADMIN_EMAIL ?? "").toLowerCase();
  const passwordOk = await verifyPassword(parsed.data.password, process.env.ADMIN_PASSWORD_HASH);
  if (!emailOk || !passwordOk) return json({ ok: false, code: "invalid" }, 401);

  const { token, maxAge } = createSessionToken(process.env.ADMIN_EMAIL!);
  const res = json({ ok: true });
  res.cookies.set(ADMIN_COOKIE, token, sessionCookieOptions(maxAge));
  return res;
}
