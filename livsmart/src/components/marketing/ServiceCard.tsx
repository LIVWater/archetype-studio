import Link from "next/link";
import { ArrowRight, Clock, MapPin } from "lucide-react";
import type { MarketplaceService } from "@/types";
import { Badge, PlaceholderBadge, VerifiedBadge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { priceLabel } from "@/lib/utils";

export function ServiceCard({ service }: { service: MarketplaceService }) {
  return (
    <div className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-0.5 hover:border-accent-400/50 hover:shadow-[0_24px_60px_-30px_rgba(26,163,232,0.2)]">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs text-white/55">{service.category}</p>
          <h3 className="heading-card mt-1 text-white">
            <Link href={`/services/${service.slug}`} className="hover:text-accent-300">
              {service.name}
            </Link>
          </h3>
        </div>
        {service.providedBy === "LIVWater" ? (
          <VerifiedBadge label="LIVWater" />
        ) : (
          <Badge tone="aqua">{service.providedBy}</Badge>
        )}
      </div>
      <p className="mt-3 text-sm text-white/65">{service.description}</p>
      <ul className="mt-4 space-y-1.5 text-xs text-white/65">
        {service.deliverables.slice(0, 3).map((d) => (
          <li key={d} className="flex items-start gap-1.5">
            <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-accent-500" />
            {d}
          </li>
        ))}
      </ul>
      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-white/55">
        <span className="inline-flex items-center gap-1">
          <Clock className="h-3 w-3" /> {service.responseTime ?? "Quote required"}
        </span>
        <span className="inline-flex items-center gap-1">
          <MapPin className="h-3 w-3" /> {service.serviceArea.slice(0, 2).join(", ")}
        </span>
      </div>
      <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
        <p className="text-xs text-white/65">
          {priceLabel(service.priceType, service.price)}
        </p>
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-1 text-xs font-medium text-accent-300 hover:text-accent-200"
        >
          Details <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
      <div className="mt-4 flex gap-2">
        {service.bookingEnabled ? (
          <Button
            size="sm"
            block
            href={`/quote-request?service=${service.slug}`}
          >
            Book / Enquire
          </Button>
        ) : (
          <Button
            size="sm"
            block
            variant="secondary"
            href={`/quote-request?service=${service.slug}`}
          >
            Request Quote
          </Button>
        )}
      </div>
      {service.placeholderNotice && (
        <div className="mt-3">
          <PlaceholderBadge>{service.placeholderNotice}</PlaceholderBadge>
        </div>
      )}
    </div>
  );
}
