import { NextResponse } from "next/server";
import { ADMIN_COOKIE, sessionCookieOptions } from "@/lib/admin-auth";
import { isSameOrigin } from "@/lib/request-security";

export const runtime = "nodejs";

export async function POST(request: Request) {
  if (!isSameOrigin(request.headers)) return new NextResponse("Forbidden", { status: 403 });
  const res = NextResponse.redirect(new URL("/admin/login", request.url), 303);
  res.cookies.set(ADMIN_COOKIE, "", sessionCookieOptions(0));
  return res;
}
