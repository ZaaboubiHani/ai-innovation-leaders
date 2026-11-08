import Link from "next/link";
import { Download, Search } from "lucide-react";
import { en } from "@/i18n/dictionaries/en";
import { PAGE_SIZE, STATUSES, getStats, listApplications } from "@/lib/admin-queries";
import { StatusBadge } from "@/components/admin/status-badge";

type SP = Promise<Record<string, string | string[] | undefined>>;
const one = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v) ?? "";

function Breakdown({ title, rows }: { title: string; rows: { label: string; n: number }[] }) {
  const max = Math.max(1, ...rows.map((r) => r.n));
  return (
    <div className="card !p-5">
      <h2 className="font-sans text-sm font-semibold text-ink-600">{title}</h2>
      <ul className="mt-3 space-y-2.5">
        {rows.length === 0 && <li className="text-sm text-ink-400">No data yet</li>}
        {rows.map((r) => (
          <li key={r.label}>
            <div className="flex justify-between text-sm">
              <span className="capitalize">{r.label}</span>
              <span className="font-semibold">{r.n}</span>
            </div>
            <div className="mt-1 h-1.5 rounded-full bg-paper-200">
              <div className="h-1.5 rounded-full bg-violet-600" style={{ width: `${(r.n / max) * 100}%` }} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default async function DashboardPage({ searchParams }: { searchParams: SP }) {
  const sp = await searchParams;
  const filters = { q: one(sp.q), sector: one(sp.sector), track: one(sp.track), status: one(sp.status), page: Number.parseInt(one(sp.page) || "1", 10) || 1 };

  let data: Awaited<ReturnType<typeof listApplications>>;
  let stats: Awaited<ReturnType<typeof getStats>>;
  try {
    [data, stats] = await Promise.all([listApplications(filters), getStats()]);
  } catch (e) {
    console.error("[admin] database error:", e);
    return (
      <div className="card border-rose-300">
        <h1 className="text-xl font-semibold">Cannot reach the database</h1>
        <p className="mt-2 text-ink-600">Check that MONGODB_URI is correct and that MongoDB is running, then reload this page.</p>
      </div>
    );
  }

  const sectorLabel = (id: string) => (en.form.options.sectors as Record<string, string>)[id] ?? id;
  const trackLabel = (id: string) => (en.form.options.tracks as Record<string, string>)[id] ?? id;
  const feeLabel = (id: string) => (en.form.options.feeCategories as Record<string, string>)[id]?.split(" (")[0] ?? id;

  const qs = (over: Record<string, string | number>) => {
    const p = new URLSearchParams();
    for (const [k, v] of Object.entries({ ...filters, ...over })) if (v !== "" && v !== undefined && !(k === "page" && v === 1)) p.set(k, String(v));
    const s = p.toString();
    return s ? `?${s}` : "";
  };
  const exportQs = qs({ page: 1 });

  const select = "field-input !py-2 !text-sm";

  return (
    <div className="space-y-8">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="card !p-5">
          <p className="text-sm font-semibold text-ink-600">Total applications</p>
          <p className="mt-2 font-display text-5xl font-semibold text-violet-700">{stats.total}</p>
        </div>
        <div className="card !p-5">
          <p className="text-sm font-semibold text-ink-600">Last 7 days</p>
          <p className="mt-2 font-display text-5xl font-semibold text-violet-700">{stats.lastWeek}</p>
          <p className="mt-1 text-xs text-ink-500">{stats.byStatus.new ?? 0} still marked “new”</p>
        </div>
        <Breakdown title="By sector" rows={Object.entries(stats.bySector).map(([k, n]) => ({ label: sectorLabel(k), n }))} />
        <Breakdown title="By track" rows={Object.entries(stats.byTrack).map(([k, n]) => ({ label: trackLabel(k), n }))} />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Breakdown title="By status" rows={STATUSES.filter((s) => stats.byStatus[s]).map((s) => ({ label: s, n: stats.byStatus[s]! }))} />
        <Breakdown title="Top countries" rows={stats.byCountry.map((c) => ({ label: c._id, n: c.n }))} />
      </div>

      <section className="card !p-0 overflow-hidden">
        <form method="get" className="flex flex-wrap items-end gap-3 border-b border-paper-200 p-5">
          <div className="min-w-[14rem] flex-1">
            <label htmlFor="q" className="mb-1 block text-xs font-semibold text-ink-600">Search</label>
            <div className="relative">
              <Search aria-hidden className="pointer-events-none absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
              <input id="q" name="q" defaultValue={filters.q} placeholder="Name, email, reference, organization…" className="field-input !py-2 !ps-9 !text-sm" />
            </div>
          </div>
          <div>
            <label htmlFor="sector" className="mb-1 block text-xs font-semibold text-ink-600">Sector</label>
            <select id="sector" name="sector" defaultValue={filters.sector} className={select}>
              <option value="">All</option>
              {Object.entries(en.form.options.sectors).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="track" className="mb-1 block text-xs font-semibold text-ink-600">Track</label>
            <select id="track" name="track" defaultValue={filters.track} className={select}>
              <option value="">All</option>
              {Object.entries(en.form.options.tracks).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="status" className="mb-1 block text-xs font-semibold text-ink-600">Status</label>
            <select id="status" name="status" defaultValue={filters.status} className={select}>
              <option value="">All</option>
              {STATUSES.map((s) => <option key={s} value={s} className="capitalize">{s}</option>)}
            </select>
          </div>
          <button type="submit" className="btn-primary !py-2">Filter</button>
          <Link href="/admin" className="btn-ghost !py-2">Reset</Link>
          <a href={`/api/admin/export${exportQs}`} className="btn-ghost !py-2 ms-auto">
            <Download aria-hidden className="h-4 w-4" /> Export CSV
          </a>
        </form>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[56rem] text-start text-sm">
            <thead className="bg-paper-100 text-xs uppercase tracking-wide text-ink-500">
              <tr>
                {["Applicant", "Sector", "Track", "Status", "Submitted"].map((h) => (
                  <th key={h} scope="col" className="px-5 py-3 text-start font-semibold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-paper-200">
              {data.items.length === 0 && (
                <tr><td colSpan={7} className="px-5 py-12 text-center text-ink-500">No applications match.</td></tr>
              )}
              {data.items.map((a) => (
                <tr key={a.id} className="hover:bg-violet-50/50">
                  <td className="px-5 py-3.5">
                    <Link href={`/admin/applications/${a.id}`} className="font-semibold text-violet-800 hover:underline">{a.fullName}</Link>
                    <div className="text-xs text-ink-500" dir="ltr">{a.email}</div>
                    <div className="font-mono text-[11px] text-ink-400" dir="ltr">{a.reference}</div>
                  </td>
                  <td className="px-5 py-3.5">{sectorLabel(a.sector)}</td>
                  <td className="px-5 py-3.5">{trackLabel(a.track)}</td>
                 
                  <td className="px-5 py-3.5"><StatusBadge status={a.status} /></td>
                  <td className="whitespace-nowrap px-5 py-3.5 text-ink-600">{new Date(a.createdAt).toISOString().slice(0, 16).replace("T", " ")} UTC</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between border-t border-paper-200 px-5 py-3 text-sm text-ink-600">
          <p>{data.total} result{data.total === 1 ? "" : "s"} · page {data.page} of {data.pages} ({PAGE_SIZE} per page)</p>
          <div className="flex gap-2">
            {data.page > 1 && <Link className="btn-ghost !py-1.5" href={`/admin${qs({ page: data.page - 1 })}`}>Previous</Link>}
            {data.page < data.pages && <Link className="btn-ghost !py-1.5" href={`/admin${qs({ page: data.page + 1 })}`}>Next</Link>}
          </div>
        </div>
      </section>
    </div>
  );
}
