import type { Metadata } from "next";
import Link from "next/link";
import { Section, Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProviderCard } from "@/components/marketing/ProviderCard";
import { CTASection } from "@/components/marketing/CTASection";
import { Badge } from "@/components/ui/Badge";
import { providers } from "@/data/providers";

export const metadata: Metadata = {
  title: "Service Providers",
  description:
    "Verified service providers across the water value chain — installers, hydrogeologists, lab partners, operators, drillers and specialists.",
};

export default function ServiceProvidersPage({
  searchParams,
}: {
  searchParams?: { type?: string; region?: string };
}) {
  const types = Array.from(new Set(providers.map((p) => p.providerType)));
  const regions = Array.from(new Set(providers.flatMap((p) => p.regions))).sort();
  const typeFilter = searchParams?.type;
  const regionFilter = searchParams?.region;
  const filtered = providers.filter((p) => {
    if (typeFilter && p.providerType !== typeFilter) return false;
    if (regionFilter && !p.regions.includes(regionFilter)) return false;
    return true;
  });

  return (
    <>
      <Section surface="dark" className="!py-20">
        <Container wide>
          <p className="eyebrow text-accent-300">Service providers</p>
          <h1 className="heading-hero mt-3 text-white text-balance max-w-3xl">
            Verified service providers across the water value chain.
          </h1>
          <p className="lede mt-5 max-w-3xl text-pretty">
            LIVWater hosts approved providers for installation, maintenance,
            operations, lab testing and specialist water services. Listings are
            only public after verification.
          </p>
        </Container>
      </Section>

      <Section surface="light">
        <Container wide>
          <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
            <aside className="space-y-8">
              <div>
                <p className="eyebrow">Provider type</p>
                <div className="mt-3 flex flex-col gap-1">
                  <Link
                    href="/service-providers"
                    className={
                      !typeFilter
                        ? "rounded-md bg-navy-900 px-3 py-2 text-sm text-white"
                        : "rounded-md px-3 py-2 text-sm text-white/80 hover:bg-white/[0.03]"
                    }
                  >
                    All types
                  </Link>
                  {types.map((t) => (
                    <Link
                      key={t}
                      href={`/service-providers?type=${encodeURIComponent(t)}`}
                      className={
                        typeFilter === t
                          ? "rounded-md bg-navy-900 px-3 py-2 text-sm text-white"
                          : "rounded-md px-3 py-2 text-sm text-white/80 hover:bg-white/[0.03]"
                      }
                    >
                      {t}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <p className="eyebrow">Region</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {regions.map((r) => (
                    <Link
                      key={r}
                      href={`/service-providers?${typeFilter ? `type=${encodeURIComponent(typeFilter)}&` : ""}region=${encodeURIComponent(r)}`}
                    >
                      <Badge tone={regionFilter === r ? "aqua" : "outline"}>{r}</Badge>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                <p className="text-sm font-medium text-white">Become a provider</p>
                <p className="mt-1 text-xs text-white/65">
                  Submissions are reviewed for verification, insurance and SLA capability.
                </p>
                <Link
                  href="/become-a-provider"
                  className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-accent-300 hover:text-accent-200"
                >
                  Apply →
                </Link>
              </div>
            </aside>
            <div>
              <div className="mb-6 flex items-center justify-between text-xs text-white/55">
                <p>Showing {filtered.length} providers</p>
                {(typeFilter || regionFilter) && (
                  <Link href="/service-providers" className="text-accent-300">
                    Clear filters
                  </Link>
                )}
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                {filtered.map((p) => (
                  <ProviderCard key={p.id} provider={p} />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection
        eyebrow="Become a provider"
        title="Join the LIVWater verified network."
        description="Approved providers earn access to leads, the Services Shop and the LIVSmart Provider Portal."
        primary={{ label: "Become a Provider", href: "/become-a-provider" }}
        secondary={{ label: "Provider login", href: "/login/provider" }}
      />
    </>
  );
}
