import { NextResponse } from "next/server";
import { z } from "zod";
import { getAdminSession } from "@/lib/admin-auth";
import { STATUSES } from "@/lib/admin-queries";
import { connectToDatabase } from "@/lib/mongodb";
import { isSameOrigin } from "@/lib/request-security";
import { ApplicationModel } from "@/models/application";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Ctx = { params: Promise<{ id: string }> };
const json = (data: unknown, status = 200) => NextResponse.json(data, { status, headers: { "Cache-Control": "no-store" } });

async function guard(request: Request, id: string) {
  if (!isSameOrigin(request.headers)) return json({ ok: false, code: "forbidden" }, 403);
  if (!(await getAdminSession())) return json({ ok: false, code: "unauthorized" }, 401);
  if (!/^[a-f0-9]{24}$/i.test(id)) return json({ ok: false, code: "not_found" }, 404);
  return null;
}

const patchSchema = z.object({
  status: z.enum(STATUSES),
  adminNotes: z.string().max(2000),
});

export async function PATCH(request: Request, { params }: Ctx) {
  const { id } = await params;
  const denied = await guard(request, id);
  if (denied) return denied;

  const parsed = patchSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return json({ ok: false, code: "invalid" }, 400);

  try {
    await connectToDatabase();
    const updated = await ApplicationModel.findByIdAndUpdate(id, { $set: parsed.data }, { new: true }).select("_id").lean();
    return updated ? json({ ok: true }) : json({ ok: false, code: "not_found" }, 404);
  } catch (e) {
    console.error("[admin] update failed:", e);
    return json({ ok: false, code: "unavailable" }, 503);
  }
}

export async function DELETE(request: Request, { params }: Ctx) {
  const { id } = await params;
  const denied = await guard(request, id);
  if (denied) return denied;
  try {
    await connectToDatabase();
    const res = await ApplicationModel.deleteOne({ _id: id });
    return res.deletedCount ? json({ ok: true }) : json({ ok: false, code: "not_found" }, 404);
  } catch (e) {
    console.error("[admin] delete failed:", e);
    return json({ ok: false, code: "unavailable" }, 503);
  }
}
