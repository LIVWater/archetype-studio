import Link from "next/link";
import { ArrowRight, Beaker } from "lucide-react";
import type { TechnologyPartner } from "@/types";
import { Badge, PlaceholderBadge, VerifiedBadge } from "@/components/ui/Badge";

export function TechnologyCard({ tech }: { tech: TechnologyPartner }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition hover:-translate-y-0.5 hover:border-accent-300/40">
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/15 text-accent-300">
          <Beaker className="h-4 w-4" />
        </div>
        {tech.approvedForMarketplace ? (
          <VerifiedBadge label={tech.status === "production" ? "Production" : "Listed"} />
        ) : (
          <Badge tone="white">Pilot / Evaluation</Badge>
        )}
      </div>
      <p className="mt-5 text-[11px] uppercase tracking-wider text-accent-300">
        {tech.technologyCategory}
      </p>
      <h3 className="heading-card mt-1.5 text-white">{tech.name}</h3>
      <p className="mt-2 text-sm text-white/65">{tech.description}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {tech.suitableApplications.slice(0, 3).map((a) => (
          <Badge key={a} tone="white">
            {a}
          </Badge>
        ))}
      </div>
      <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-white/55">
        <span>{tech.regions.slice(0, 2).join(" · ")}</span>
        <Link
          href="/new-water-technology"
          className="inline-flex items-center gap-1 font-medium text-accent-300 hover:text-accent-200"
        >
          More <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
      {!tech.approvedForMarketplace && (
        <div className="mt-3">
          <PlaceholderBadge>Subject to LIVWater technical evaluation</PlaceholderBadge>
        </div>
      )}
    </div>
  );
}
