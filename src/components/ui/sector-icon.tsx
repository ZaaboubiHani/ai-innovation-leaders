import { GraduationCap, Stethoscope, Sprout, type LucideProps } from "lucide-react";

export function SectorIcon({ id, ...props }: { id: string } & LucideProps) {
  if (id === "education") return <GraduationCap {...props} />;
  if (id === "medicine") return <Stethoscope {...props} />;
  return <Sprout {...props} />;
}
