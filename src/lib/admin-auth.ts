import "server-only";
import { createHmac, randomBytes, scrypt as scryptCb, timingSafeEqual } from "node:crypto";
import { promisify } from "node:util";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const scrypt = promisify(scryptCb) as (pw: string, salt: Buffer, len: number) => Promise<Buffer>;

export const ADMIN_COOKIE = "ail_admin";
const SESSION_SECONDS = 8 * 60 * 60;

/** Password hash format: scrypt:<saltHex>:<hashHex> (no "$" so .env files never mangle it). */
export async function hashPassword(password: string): Promise<string> {
  const salt = randomBytes(16);
  const hash = await scrypt(password, salt, 64);
  return `scrypt:${salt.toString("hex")}:${hash.toString("hex")}`;
}

// A throw-away hash so a wrong email costs the same time as a wrong password.
const DUMMY = { salt: randomBytes(16), hash: randomBytes(64) };

export async function verifyPassword(password: string, stored: string | undefined): Promise<boolean> {
  const parts = (stored ?? "").split(":");
  const valid = parts.length === 3 && parts[0] === "scrypt";
  const salt = valid ? Buffer.from(parts[1]!, "hex") : DUMMY.salt;
  const expected = valid ? Buffer.from(parts[2]!, "hex") : DUMMY.hash;
  const actual = await scrypt(password, salt, expected.length || 64);
  return timingSafeEqual(actual, expected) && valid;
}

export function adminConfigured(): boolean {
  return !!(
    process.env.ADMIN_EMAIL &&
    process.env.ADMIN_PASSWORD_HASH &&
    process.env.ADMIN_SESSION_SECRET &&
    process.env.ADMIN_SESSION_SECRET.length >= 32
  );
}

function sign(payload: string): string {
  return createHmac("sha256", process.env.ADMIN_SESSION_SECRET ?? "").update(payload).digest("base64url");
}

export function createSessionToken(email: string): { token: string; maxAge: number } {
  const body = Buffer.from(JSON.stringify({ sub: email, exp: Math.floor(Date.now() / 1000) + SESSION_SECONDS })).toString("base64url");
  return { token: `${body}.${sign(body)}`, maxAge: SESSION_SECONDS };
}

export function verifySessionToken(token: string | undefined): { email: string } | null {
  if (!token || !adminConfigured()) return null;
  const [body, sig] = token.split(".");
  if (!body || !sig) return null;
  const expected = Buffer.from(sign(body));
  const given = Buffer.from(sig);
  if (expected.length !== given.length || !timingSafeEqual(expected, given)) return null;
  try {
    const data = JSON.parse(Buffer.from(body, "base64url").toString("utf8")) as { sub?: string; exp?: number };
    if (!data.sub || !data.exp || data.exp < Date.now() / 1000) return null;
    if (data.sub.toLowerCase() !== (process.env.ADMIN_EMAIL ?? "").toLowerCase()) return null;
    return { email: data.sub };
  } catch {
    return null;
  }
}

export async function getAdminSession() {
  const jar = await cookies();
  return verifySessionToken(jar.get(ADMIN_COOKIE)?.value);
}

/** For pages: send visitors without a valid session to the login screen. */
export async function requireAdmin() {
  const session = await getAdminSession();
  if (!session) redirect("/admin/login");
  return session;
}

export const sessionCookieOptions = (maxAge: number) => ({
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "strict" as const,
  path: "/",
  maxAge,
});
