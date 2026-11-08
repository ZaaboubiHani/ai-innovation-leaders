import Image from "next/image";
import { redirect } from "next/navigation";
import { getAdminSession } from "@/lib/admin-auth";
import { LoginForm } from "@/components/admin/login-form";

export const dynamic = "force-dynamic";

export default async function LoginPage() {
  if (await getAdminSession()) redirect("/admin");
  return (
    <main className="flex min-h-screen items-center justify-center px-5 py-12">
      <div className="w-full max-w-md rounded-2xl border border-paper-200 bg-white p-8 shadow-soft sm:p-10">
        <div className="flex items-center gap-3">
          <Image src="/brand/prolync-logo.png" alt="Prolync" width={213} height={353} className="h-10 w-auto" priority />
          <div>
            <p className="font-display text-xl font-semibold leading-tight">Admissions dashboard</p>
            <p className="text-sm text-ink-500">AI Innovation Leaders Program</p>
          </div>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
