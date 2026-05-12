import Link from "next/link";
import { ArrowRight, Package } from "lucide-react";
import type { SolutionPackage } from "@/types";
import { Badge, PlaceholderBadge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { formatCurrency } from "@/lib/utils";

export function PackageCard({ pkg }: { pkg: SolutionPackage }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-0.5 hover:border-accent-400/50 hover:shadow-[0_24px_60px_-30px_rgba(26,163,232,0.2)]">
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-900 text-accent-300">
          <Package className="h-4 w-4" />
        </div>
        <Badge tone="outline">{pkg.division}</Badge>
      </div>
      <h3 className="heading-card mt-5 text-white">
        <Link href={`/packages/${pkg.slug}`} className="hover:text-accent-300">
          {pkg.name}
        </Link>
      </h3>
      <p className="mt-2 text-sm text-white/65">{pkg.description}</p>
      <div className="mt-5 space-y-2 text-xs text-white/65">
        {pkg.highlights?.slice(0, 3).map((h) => (
          <p key={h} className="flex items-start gap-1.5">
            <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-accent-500" />
            {h}
          </p>
        ))}
      </div>
      <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
        <div>
          <p className="text-xs text-white/55">{pkg.audience} package</p>
          <p className="text-sm font-medium text-white">
            {pkg.priceFrom != null ? `From ${formatCurrency(pkg.priceFrom)}` : "Project-scoped"}
          </p>
        </div>
        <Link
          href={`/packages/${pkg.slug}`}
          className="inline-flex items-center gap-1 text-xs font-medium text-accent-300 hover:text-accent-200"
        >
          Details <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
      <Button
        href={
          pkg.buyingMode === "project_assessment"
            ? `/project-assessment?package=${pkg.slug}`
            : `/quote-request?package=${pkg.slug}`
        }
        size="sm"
        className="mt-4"
        block
      >
        {pkg.cta}
      </Button>
      {pkg.placeholderNotice && (
        <div className="mt-3">
          <PlaceholderBadge>{pkg.placeholderNotice}</PlaceholderBadge>
        </div>
      )}
    </div>
  );
}
