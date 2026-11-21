import { GraduationCap, Stethoscope, Sprout, PawPrint, type LucideProps } from "lucide-react";

export function SectorIcon({ id, ...props }: { id: string } & LucideProps) {
  if (id === "education") return <GraduationCap {...props} />;
  if (id === "medicine") return <Stethoscope {...props} />;
  if (id === "veterinary") return <PawPrint {...props} />;
  return <Sprout {...props} />;
}