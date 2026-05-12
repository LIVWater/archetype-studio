import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Section, Container } from "@/components/ui/Container";
import { Badge, VerifiedBadge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { providers } from "@/data/providers";
import { MapPin, Clock, Star, ShieldCheck, Users, Calendar } from "lucide-react";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return providers.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const p = providers.find((x) => x.slug === params.slug);
  if (!p) return { title: "Service Provider" };
  return { title: `${p.name} — Service Provider`, description: p.description };
}

export default function ProviderProfilePage({ params }: PageProps) {
  const provider = providers.find((p) => p.slug === params.slug);
  if (!provider) notFound();

  return (
    <>
      <Section surface="muted" className="!pt-12 !pb-10">
        <Container wide>
          <Link href="/service-providers" className="text-xs text-white/65 hover:text-white">
            ← Back to providers
          </Link>
        </Container>
      </Section>
      <Section surface="light" className="!pt-0">
        <Container wide>
          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <p className="eyebrow">{provider.providerType}</p>
              <h1 className="heading-section mt-2 text-white text-balance">
                {provider.name}
              </h1>
              <div className="mt-4 flex flex-wrap gap-2">
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
                {provider.emergencyAvailable && (
                  <Badge tone="warn">24/7 emergency</Badge>
                )}
              </div>
              <p className="lede-light mt-5 text-pretty">{provider.description}</p>
              <h2 className="heading-card mt-10 text-white">Services</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {provider.services.map((s) => (
                  <Badge key={s} tone="outline">{s}</Badge>
                ))}
              </div>
              <h2 className="heading-card mt-8 text-white">Product categories</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {provider.productCategories.map((s) => (
                  <Badge key={s} tone="neutral">{s}</Badge>
                ))}
              </div>
              <h2 className="heading-card mt-8 text-white">Coverage & certifications</h2>
              <ul className="mt-3 space-y-2 text-sm text-white/80">
                <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent-500" /> {provider.regions.join(", ")}</li>
                <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-accent-500" /> {provider.certifications.join(" · ")}</li>
                <li className="flex items-center gap-2"><Users className="h-4 w-4 text-accent-500" /> Team {provider.teamSize ?? "Per project"}</li>
                <li className="flex items-center gap-2"><Calendar className="h-4 w-4 text-accent-500" /> {provider.yearsExperience ?? "—"} years' experience</li>
              </ul>
            </div>
            <aside className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <div className="grid grid-cols-2 gap-3 text-xs">
                <Stat icon={<Clock className="h-3.5 w-3.5" />} label="Response time" value={provider.responseTime ?? "On request"} />
                <Stat icon={<Star className="h-3.5 w-3.5" />} label="Rating" value={`${provider.rating ?? "—"} (${provider.reviewCount ?? 0})`} />
                <Stat icon={<ShieldCheck className="h-3.5 w-3.5" />} label="Insurance" value={provider.insuranceStatus === "current" ? "Current" : "Pending"} />
                <Stat icon={<Users className="h-3.5 w-3.5" />} label="Pricing" value={provider.pricingModel ?? "Quote-based"} />
              </div>
              <div className="mt-6 space-y-3">
                <Button href={`/quote-request?provider=${provider.slug}`} block>Request Quote</Button>
                <Button href="/contact" variant="secondary" block>Contact LIVWater</Button>
              </div>
              <p className="mt-4 text-xs text-white/55">
                Engagements are governed by LIVWater terms. Provider status: <span className="font-medium">{provider.verifiedStatus}</span>.
              </p>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  );
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
      <p className="flex items-center gap-1.5 uppercase tracking-wider text-white/55">
        {icon}
        {label}
      </p>
      <p className="mt-1 text-sm text-white">{value}</p>
    </div>
  );
}
