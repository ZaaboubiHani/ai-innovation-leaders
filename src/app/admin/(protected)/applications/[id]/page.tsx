import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { en } from "@/i18n/dictionaries/en";
import { STATUSES, getApplication } from "@/lib/admin-queries";
import { ApplicationActions } from "@/components/admin/application-actions";
import { StatusBadge } from "@/components/admin/status-badge";

type Props = { params: Promise<{ id: string }> };

const opt = en.form.options;
const lookup = (map: Record<string, string>, v: unknown) => (typeof v === "string" ? map[v] ?? v : "—");

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-1 px-5 py-3.5 sm:grid-cols-[12rem_1fr] sm:gap-6">
      <dt className="text-sm font-semibold text-ink-600">{label}</dt>
      <dd className="whitespace-pre-wrap break-words text-[15px]">{children || "—"}</dd>
    </div>
  );
}

export default async function ApplicationDetail({ params }: Props) {
  const { id } = await params;
  let a: Awaited<ReturnType<typeof getApplication>>;
  try {
    a = await getApplication(id);
  } catch {
    return <div className="card">Cannot reach the database.</div>;
  }
  if (!a) notFound();

  const s = (k: string) => (typeof a![k] === "string" ? (a![k] as string) : "");
  const professional = s("track") === "professional";
  const langs = Array.isArray(a.workingLanguages) ? (a.workingLanguages as string[]).map((l) => lookup(opt.languages, l)).join(", ") : "";

  return (
    <div className="space-y-6">
      <Link href="/admin" className="inline-flex items-center gap-1.5 text-sm font-medium text-violet-700 hover:underline">
        <ArrowLeft aria-hidden className="h-4 w-4" /> All applications
      </Link>

      <div className="flex flex-wrap items-center gap-3">
        <h1 className="text-3xl font-semibold">{s("fullName")}</h1>
        <StatusBadge status={s("status")} />
        <span className="font-mono text-sm text-ink-500" dir="ltr">{s("reference")}</span>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <div className="space-y-6">
          <section className="card !p-0">
            <h2 className="border-b border-paper-200 px-5 py-3 font-sans text-sm font-semibold uppercase tracking-wide text-ink-500">Contact</h2>
            <dl className="divide-y divide-paper-200">
              <Row label="Email"><a className="text-violet-700 underline" href={`mailto:${s("email")}`} dir="ltr">{s("email")}</a></Row>
              <Row label="Phone"><span dir="ltr">{s("phone")}</span></Row>
             
            </dl>
          </section>

          <section className="card !p-0">
            <h2 className="border-b border-paper-200 px-5 py-3 font-sans text-sm font-semibold uppercase tracking-wide text-ink-500">Eligibility</h2>
            <dl className="divide-y divide-paper-200">
              <Row label="Track">{lookup(opt.tracks, a.track)}</Row>
              <Row label="Sector">{lookup(opt.sectors, a.sector)}</Row>
             
            </dl>
          </section>

          <section className="card !p-0">
            <h2 className="border-b border-paper-200 px-5 py-3 font-sans text-sm font-semibold uppercase tracking-wide text-ink-500">Motivation</h2>
            <dl className="divide-y divide-paper-200">
              <Row label="Why join">{s("motivation")}</Row>
              <Row label="Problem AI could help with">{s("sectorProblem")}</Row>
            </dl>
          </section>

          <section className="card !p-0">
            <h2 className="border-b border-paper-200 px-5 py-3 font-sans text-sm font-semibold uppercase tracking-wide text-ink-500">Tuition & submission</h2>
            <dl className="divide-y divide-paper-200">
              <Row label="Installments requested">{a.paymentPlan ? "Yes" : "No"}</Row>
              <Row label="Heard about us via">{lookup(opt.heardFrom, a.heardFrom || undefined)}</Row>
              <Row label="Site language">{lookup(opt.languages, a.siteLocale)}</Row>
              <Row label="Consent given">{s("consentAt") ? new Date(s("consentAt")).toISOString().replace("T", " ").slice(0, 16) + " UTC" : ""}</Row>
              <Row label="Submitted">{s("createdAt") ? new Date(s("createdAt")).toISOString().replace("T", " ").slice(0, 16) + " UTC" : ""}</Row>
            </dl>
          </section>
        </div>

        <aside className="lg:sticky lg:top-6 lg:h-fit">
          <ApplicationActions id={a.id} status={s("status")} notes={s("adminNotes")} statuses={STATUSES} />
        </aside>
      </div>
    </div>
  );
}
