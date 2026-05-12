import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Section, Container } from "@/components/ui/Container";
import { Badge, PlaceholderBadge, VerifiedBadge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";
import { priceLabel } from "@/lib/utils";
import { CheckCircle2, Clock, MapPin, FileText } from "lucide-react";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const s = services.find((x) => x.slug === params.slug);
  if (!s) return { title: "Service" };
  return { title: s.name, description: s.description };
}

export default function ServiceDetailPage({ params }: PageProps) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();
  const related = services
    .filter((s) => s.id !== service.id && s.category === service.category)
    .slice(0, 3);

  return (
    <>
      <Section surface="muted" className="!pt-12 !pb-10">
        <Container wide>
          <Link href="/services-shop" className="text-xs text-white/65 hover:text-white">
            ← Back to services
          </Link>
        </Container>
      </Section>
      <Section surface="light" className="!pt-0">
        <Container wide>
          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <Badge tone="outline">{service.category}</Badge>
                {service.providedBy === "LIVWater" ? (
                  <VerifiedBadge label="LIVWater" />
                ) : (
                  <Badge tone="aqua">{service.providedBy}</Badge>
                )}
              </div>
              <h1 className="heading-section mt-3 text-white text-balance">
                {service.name}
              </h1>
              <p className="lede-light mt-4 text-pretty">{service.description}</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <Stat icon={<Clock className="h-4 w-4" />} label="Response time" value={service.responseTime ?? "Quote required"} />
                <Stat icon={<MapPin className="h-4 w-4" />} label="Service area" value={service.serviceArea.join(", ")} />
                <Stat icon={<FileText className="h-4 w-4" />} label="Pricing" value={priceLabel(service.priceType, service.price)} />
                <Stat icon={<CheckCircle2 className="h-4 w-4" />} label="Site visit" value={service.requiresSiteVisit ? "Required" : "Not required"} />
              </div>
              <h2 className="heading-card mt-10 text-white">Deliverables</h2>
              <ul className="mt-3 space-y-2 text-sm text-white/80">
                {service.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
                    {d}
                  </li>
                ))}
              </ul>
              {service.exclusions && service.exclusions.length > 0 && (
                <>
                  <h2 className="heading-card mt-8 text-white">Exclusions</h2>
                  <ul className="mt-3 list-disc pl-5 text-sm text-white/80">
                    {service.exclusions.map((e) => (
                      <li key={e}>{e}</li>
                    ))}
                  </ul>
                </>
              )}
              {service.placeholderNotice && (
                <div className="mt-6">
                  <PlaceholderBadge>{service.placeholderNotice}</PlaceholderBadge>
                </div>
              )}
            </div>
            <aside className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <p className="eyebrow">Suitable for</p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {service.suitableFor.map((s) => (
                  <Badge key={s} tone="outline">{s}</Badge>
                ))}
              </div>
              <div className="mt-6 space-y-3">
                <Button href={`/quote-request?service=${service.slug}`} block>
                  Request Quote
                </Button>
                <Button href="/contact" variant="secondary" block>
                  Speak to LIVWater
                </Button>
              </div>
              <p className="mt-4 text-xs text-white/55">
                {service.bookingEnabled ? "Bookable through Services Shop." : "Quote-based engagement."}
              </p>
            </aside>
          </div>
        </Container>
      </Section>
      {related.length > 0 && (
        <Section surface="muted">
          <Container wide>
            <h2 className="heading-card text-white">Related services</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.id}
                  href={`/services/${r.slug}`}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:border-accent-400/50"
                >
                  <p className="text-xs text-white/55">{r.category}</p>
                  <p className="heading-card mt-1 text-white">{r.name}</p>
                  <p className="mt-2 text-sm text-white/65">{r.description}</p>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}
    </>
  );
}

function Stat({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
      <p className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-white/55">
        {icon}
        {label}
      </p>
      <p className="mt-1.5 text-sm text-white">{value}</p>
    </div>
  );
}
