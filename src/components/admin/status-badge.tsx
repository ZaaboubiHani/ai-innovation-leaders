import { cn } from "@/lib/utils";

const styles: Record<string, string> = {
  new: "bg-sun-100 text-sun-600 ring-sun-300",
  reviewing: "bg-violet-100 text-violet-800 ring-violet-200",
  shortlisted: "bg-violet-600 text-white ring-violet-600",
  interviewed: "bg-altis-100 text-altis ring-altis/30",
  offered: "bg-emerald-100 text-emerald-800 ring-emerald-200",
  enrolled: "bg-emerald-600 text-white ring-emerald-600",
  declined: "bg-paper-200 text-ink-600 ring-paper-300",
  withdrawn: "bg-paper-200 text-ink-600 ring-paper-300",
};

export function StatusBadge({ status }: { status: string }) {
  return (
    <span className={cn("inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold capitalize ring-1 ring-inset", styles[status] ?? styles.new)}>
      {status}
    </span>
  );
}
