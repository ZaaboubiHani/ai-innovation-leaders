import "server-only";
import type { FilterQuery } from "mongoose";
import { connectToDatabase } from "@/lib/mongodb";
import { ApplicationModel, type ApplicationDoc } from "@/models/application";
import { SECTORS, TRACKS } from "@/lib/application-schema";

export const STATUSES = ["new", "reviewing", "shortlisted", "interviewed", "offered", "enrolled", "declined", "withdrawn"] as const;
export const PAGE_SIZE = 20;

export type Filters = { q?: string; sector?: string; track?: string; status?: string; page?: number };

const escapeRegex = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

export function buildFilter(f: Filters): FilterQuery<ApplicationDoc> {
  const filter: FilterQuery<ApplicationDoc> = {};
  if (f.sector && (SECTORS as readonly string[]).includes(f.sector)) filter.sector = f.sector;
  if (f.track && (TRACKS as readonly string[]).includes(f.track)) filter.track = f.track;
  if (f.status && (STATUSES as readonly string[]).includes(f.status)) filter.status = f.status;
  const q = f.q?.trim().slice(0, 80);
  if (q) {
    const rx = new RegExp(escapeRegex(q), "i");
    filter.$or = [{ fullName: rx }, { email: rx }, { reference: rx }, { organization: rx }, { institution: rx }, { country: rx }, { city: rx }];
  }
  return filter;
}

export async function listApplications(f: Filters) {
  await connectToDatabase();
  const filter = buildFilter(f);
  const page = Math.max(1, f.page ?? 1);
  const [items, total] = await Promise.all([
    ApplicationModel.find(filter)
      .sort({ createdAt: -1 })
      .skip((page - 1) * PAGE_SIZE)
      .limit(PAGE_SIZE)
      .select("reference status fullName email country sector track feeCategory createdAt")
      .lean(),
    ApplicationModel.countDocuments(filter),
  ]);
  return {
    items: items.map((d) => ({
      id: String(d._id),
      reference: d.reference,
      status: d.status,
      fullName: d.fullName,
      email: d.email,
    
      sector: d.sector,
      track: d.track,
      createdAt: (d as unknown as { createdAt: Date }).createdAt.toISOString(),
    })),
    total,
    page,
    pages: Math.max(1, Math.ceil(total / PAGE_SIZE)),
  };
}

export async function getStats() {
  await connectToDatabase();
  const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
  const [total, lastWeek, bySector, byTrack, byStatus, byCountry] = await Promise.all([
    ApplicationModel.countDocuments(),
    ApplicationModel.countDocuments({ createdAt: { $gte: weekAgo } }),
    ApplicationModel.aggregate<{ _id: string; n: number }>([{ $group: { _id: "$sector", n: { $sum: 1 } } }]),
    ApplicationModel.aggregate<{ _id: string; n: number }>([{ $group: { _id: "$track", n: { $sum: 1 } } }]),
    ApplicationModel.aggregate<{ _id: string; n: number }>([{ $group: { _id: "$status", n: { $sum: 1 } } }]),
    ApplicationModel.aggregate<{ _id: string; n: number }>([{ $group: { _id: "$country", n: { $sum: 1 } } }, { $sort: { n: -1 } }, { $limit: 5 }]),
  ]);
  const toMap = (rows: { _id: string; n: number }[]) => Object.fromEntries(rows.map((r) => [r._id, r.n])) as Record<string, number>;
  return { total, lastWeek, bySector: toMap(bySector), byTrack: toMap(byTrack), byStatus: toMap(byStatus), byCountry };
}

export async function getApplication(id: string) {
  if (!/^[a-f0-9]{24}$/i.test(id)) return null;
  await connectToDatabase();
  const d = await ApplicationModel.findById(id).select("-ipHash").lean();
  if (!d) return null;
  const { _id, __v, ...rest } = d as typeof d & { __v?: number };
  return JSON.parse(JSON.stringify({ id: String(_id), ...rest })) as Record<string, unknown> & { id: string };
}
