"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";

export function LoginForm() {
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setBusy(true);
    const data = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: data.get("email"), password: data.get("password") }),
      });
      if (res.ok) {
        window.location.href = "/admin";
        return;
      }
      const j = (await res.json().catch(() => ({}))) as { code?: string };
      setError(
        j.code === "rate_limited"
          ? "Too many attempts. Please wait 15 minutes and try again."
          : j.code === "not_configured"
            ? "Admin access is not configured yet. See the README (Admin dashboard)."
            : "Incorrect email or password.",
      );
    } catch {
      setError("Network error. Please try again.");
    }
    setBusy(false);
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 space-y-5">
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-semibold">Email</label>
        <input id="email" name="email" type="email" required autoComplete="username" className="field-input" />
      </div>
      <div>
        <label htmlFor="password" className="mb-1.5 block text-sm font-semibold">Password</label>
        <input id="password" name="password" type="password" required autoComplete="current-password" className="field-input" />
      </div>
      {error && <p role="alert" className="rounded-lg border border-rose-300 bg-rose-50 px-3 py-2 text-sm font-medium text-rose-700">{error}</p>}
      <button type="submit" disabled={busy} className="btn-primary w-full !py-3">
        {busy && <Loader2 aria-hidden className="h-4 w-4 animate-spin" />}
        Sign in
      </button>
    </form>
  );
}
