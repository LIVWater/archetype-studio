import Link from "next/link";
import { ArrowRight, MapPin, Star, Clock, ShieldCheck } from "lucide-react";
import type { Provider } from "@/types";
import { Badge, VerifiedBadge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function ProviderCard({ provider }: { provider: Provider }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-0.5 hover:border-accent-400/50 hover:shadow-[0_24px_60px_-30px_rgba(26,163,232,0.18)]">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs text-white/55">{provider.providerType}</p>
          <h3 className="heading-card mt-1 text-white">
            <Link
              href={`/service-providers/${provider.slug}`}
              className="hover:text-accent-300"
            >
              {provider.name}
            </Link>
          </h3>
        </div>
        {(provider.verifiedStatus === "approved" ||
          provider.verifiedStatus === "featured") && (
          <VerifiedBadge
            label={
              provider.verifiedStatus === "featured"
                ? "Featured · LIVWater"
                : "LIVWater verified"
            }
          />
        )}
      </div>
      <p className="mt-3 text-sm text-white/65">{provider.description}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {provider.services.slice(0, 3).map((s) => (
          <Badge key={s} tone="neutral">
            {s}
          </Badge>
        ))}
      </div>
      <dl className="mt-5 grid grid-cols-2 gap-3 text-xs text-white/65">
        <div className="flex items-center gap-1.5">
          <MapPin className="h-3 w-3 text-white/40" />
          {provider.regions.slice(0, 2).join(", ")}
        </div>
        <div className="flex items-center gap-1.5">
          <Clock className="h-3 w-3 text-white/40" />
          {provider.responseTime ?? "On request"}
        </div>
        <div className="flex items-center gap-1.5">
          <Star className="h-3 w-3 text-accent-500" />
          {provider.rating ?? "—"} · {provider.reviewCount ?? 0} reviews
        </div>
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="h-3 w-3 text-accent-500" />
          {provider.insuranceStatus === "current"
            ? "Insurance current"
            : "Insurance pending"}
        </div>
      </dl>
      <div className="mt-5 flex gap-2 border-t border-white/10 pt-4">
        <Button
          href={`/service-providers/${provider.slug}`}
          size="sm"
          variant="secondary"
          className="flex-1"
        >
          View profile <ArrowRight className="h-3 w-3" />
        </Button>
        <Button
          href={`/quote-request?provider=${provider.slug}`}
          size="sm"
          className="flex-1"
        >
          Request Quote
        </Button>
      </div>
    </div>
  );
}
