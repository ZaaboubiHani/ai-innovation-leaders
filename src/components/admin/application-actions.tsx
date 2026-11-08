"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loader2, Trash2 } from "lucide-react";

export function ApplicationActions({
  id,
  status,
  notes,
  statuses,
}: {
  id: string;
  status: string;
  notes: string;
  statuses: readonly string[];
}) {
  const router = useRouter();
  const [s, setS] = useState(status);
  const [n, setN] = useState(notes);
  const [busy, setBusy] = useState<"" | "save" | "delete">("");
  const [msg, setMsg] = useState("");

  async function save() {
    setBusy("save");
    setMsg("");
    const res = await fetch(`/api/admin/applications/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: s, adminNotes: n }),
    });
    setBusy("");
    if (res.status === 401) return router.push("/admin/login");
    setMsg(res.ok ? "Saved." : "Could not save. Please try again.");
    if (res.ok) router.refresh();
  }

  async function remove() {
    if (!window.confirm("Permanently delete this application? This cannot be undone.")) return;
    setBusy("delete");
    const res = await fetch(`/api/admin/applications/${id}`, { method: "DELETE" });
    if (res.ok) {
      router.push("/admin");
      router.refresh();
    } else {
      setBusy("");
      setMsg("Could not delete. Please try again.");
    }
  }

  return (
    <div className="card space-y-5">
      <div>
        <label htmlFor="status" className="mb-1.5 block text-sm font-semibold">Status</label>
        <select id="status" value={s} onChange={(e) => setS(e.target.value)} className="field-input capitalize">
          {statuses.map((x) => <option key={x} value={x}>{x}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor="notes" className="mb-1.5 block text-sm font-semibold">Internal notes</label>
        <textarea id="notes" value={n} maxLength={2000} onChange={(e) => setN(e.target.value)} className="field-input min-h-[8rem]" placeholder="Visible only to admins" />
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <button type="button" onClick={save} disabled={busy !== ""} className="btn-primary">
          {busy === "save" && <Loader2 aria-hidden className="h-4 w-4 animate-spin" />} Save changes
        </button>
        {msg && <span role="status" className="text-sm text-ink-600">{msg}</span>}
        <button type="button" onClick={remove} disabled={busy !== ""} className="btn ms-auto border border-rose-300 text-rose-700 hover:bg-rose-50">
          <Trash2 aria-hidden className="h-4 w-4" /> Delete
        </button>
      </div>
    </div>
  );
}
