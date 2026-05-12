import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";
import {
  Smartphone,
  LayoutGrid,
  Wrench,
  Layers,
  ShieldCheck,
  Share2,
  Database,
} from "lucide-react";
import { PortalFeature } from "@/types";

const iconMap: Record<string, LucideIcon> = {
  "Customer App": Smartphone,
  "Site Dashboard": LayoutGrid,
  "Operations Portal": Wrench,
  "Portfolio Dashboard": Layers,
  "Provider Portal": ShieldCheck,
  "Affiliate Portal": Share2,
  "Admin Marketplace Dashboard": Database,
};

export function PortalCard({ portal, inverted = false }: { portal: PortalFeature; inverted?: boolean }) {
  const Icon = iconMap[portal.title] ?? Smartphone;
  return (
    <div
      className={
        inverted
          ? "card-surface-dark p-6"
          : "card-surface p-6"
      }
    >
      <div className="flex items-start justify-between gap-3">
        <div
          className={
            inverted
              ? "flex h-11 w-11 items-center justify-center rounded-xl bg-accent-500/15 text-accent-300"
              : "flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-accent-300"
          }
        >
          <Icon className="h-5 w-5" />
        </div>
        <span
          className={
            inverted
              ? "text-[11px] uppercase tracking-wider text-white/55"
              : "text-[11px] uppercase tracking-wider text-white/55"
          }
        >
          {portal.userType}
        </span>
      </div>
      <h3
        className={
          inverted
            ? "heading-card mt-5 text-white"
            : "heading-card mt-5 text-white"
        }
      >
        {portal.title}
      </h3>
      <p
        className={
          inverted
            ? "mt-2 text-sm text-white/70"
            : "mt-2 text-sm text-white/65"
        }
      >
        {portal.description}
      </p>
      <ul
        className={
          inverted
            ? "mt-4 space-y-1.5 text-xs text-white/65"
            : "mt-4 space-y-1.5 text-xs text-white/65"
        }
      >
        {portal.featureList.slice(0, 4).map((f) => (
          <li key={f} className="flex items-start gap-1.5">
            <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-accent-400" />
            {f}
          </li>
        ))}
      </ul>
      <Link
        href={portal.cta.href}
        className={
          inverted
            ? "mt-5 inline-flex items-center gap-1 text-xs font-medium text-accent-300 hover:text-accent-200"
            : "mt-5 inline-flex items-center gap-1 text-xs font-medium text-accent-300 hover:text-accent-200"
        }
      >
        {portal.cta.label} <ArrowRight className="h-3 w-3" />
      </Link>
    </div>
  );
}
