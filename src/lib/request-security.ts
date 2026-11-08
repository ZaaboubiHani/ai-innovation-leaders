import { createHash, randomInt } from "node:crypto";
import { siteConfig } from "@/config/site";

let warnedSalt = false;

export function clientIp(headers: Headers): string {
  const fwd = headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0]!.trim();
  return headers.get("x-real-ip") ?? "unknown";
}

/** One-way hash so we can rate-limit and spot abuse without storing raw IP addresses. */
export function hashIp(ip: string): string {
  let salt = process.env.IP_HASH_SALT;
  if (!salt) {
    if (process.env.NODE_ENV === "production" && !warnedSalt) {
      warnedSalt = true;
      console.warn("[security] IP_HASH_SALT is not set; using an insecure default. Set it in production.");
    }
    salt = "dev-only-salt";
  }
  return createHash("sha256").update(`${salt}:${ip}`).digest("hex");
}

/** Reject cross-site form posts: the Origin header (when present) must match this site. */
export function isSameOrigin(headers: Headers): boolean {
  const origin = headers.get("origin");
  if (!origin) return true; // non-browser clients (curl, tests) don't send it; CSRF needs a browser
  let originHost: string;
  try {
    originHost = new URL(origin).host;
  } catch {
    return false;
  }
  const allowed = new Set<string>();
  const host = headers.get("host");
  const fwdHost = headers.get("x-forwarded-host");
  if (host) allowed.add(host);
  if (fwdHost) allowed.add(fwdHost);
  try {
    allowed.add(new URL(siteConfig.url).host);
  } catch {
    /* ignore malformed site url */
  }
  return allowed.has(originHost);
}

// Crockford-style alphabet without look-alike characters.
const ALPHABET = "ABCDEFGHJKMNPQRSTVWXYZ23456789";

/** Human-friendly application reference, e.g. AIL-7K3M9Q2X. */
export function newReference(): string {
  let out = "";
  for (let i = 0; i < 8; i++) out += ALPHABET[randomInt(ALPHABET.length)];
  return `AIL-${out}`;
}

/** Small in-memory burst limiter (per server process) that runs before any database work. */
const hits = new Map<string, number[]>();
export function burstLimited(key: string, max = 20, windowMs = 10 * 60 * 1000): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
  recent.push(now);
  hits.set(key, recent);
  if (hits.size > 5000) {
    for (const [k, v] of hits) if (v.every((t) => now - t >= windowMs)) hits.delete(k);
  }
  return recent.length > max;
}
