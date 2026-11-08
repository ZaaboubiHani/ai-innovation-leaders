import Link from "next/link";
import Image from "next/image";
import { LogOut } from "lucide-react";
import { requireAdmin } from "@/lib/admin-auth";

export const dynamic = "force-dynamic";

export default async function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const session = await requireAdmin();
  return (
    <>
      <header className="border-b border-paper-200 bg-white">
        <div className="container-x flex h-16 items-center justify-between gap-4">
          <Link href="/admin" className="flex items-center gap-3">
            <Image src="/brand/prolync-logo.png" alt="" width={213} height={353} className="h-8 w-auto" />
            <span className="font-display text-lg font-semibold">Admissions dashboard</span>
          </Link>
          <div className="flex items-center gap-4 text-sm">
            <span className="hidden text-ink-500 sm:inline">{session.email}</span>
            <form action="/api/admin/logout" method="post">
              <button type="submit" className="inline-flex items-center gap-1.5 rounded-md border border-paper-300 px-3 py-1.5 font-medium hover:bg-paper-100">
                <LogOut aria-hidden className="h-4 w-4" /> Sign out
              </button>
            </form>
          </div>
        </div>
      </header>
      <main className="container-x py-8">{children}</main>
    </>
  );
}
