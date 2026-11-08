import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/** Arrow that mirrors automatically in right-to-left layouts. */
export function Arrow({ className }: { className?: string }) {
  return <ArrowRight aria-hidden className={cn("h-4 w-4 rtl:rotate-180", className)} />;
}
