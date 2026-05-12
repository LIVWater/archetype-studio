import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Section, Container } from "@/components/ui/Container";
import { Badge, PlaceholderBadge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/marketing/CTASection";
import { solutionPackages } from "@/data/packages";
import { formatCurrency } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return solutionPackages.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const p = solutionPackages.find((x) => x.slug === params.slug);
  if (!p) return { title: "Solution package" };
  return { title: `${p.name} — Solution package`, description: p.description };
}

export default function PackageDetailPage({ params }: PageProps) {
  const pkg = solutionPackages.find((p) => p.slug === params.slug);
  if (!pkg) notFound();

  return (
    <>
      <Section surface="muted" className="!pt-12 !pb-10">
        <Container wide>
          <Link href="/solutions" className="text-xs text-white/65 hover:text-white">
            ← Back to solutions
          </Link>
        </Container>
      </Section>
      <Section surface="light" className="!pt-0">
        <Container wide>
          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge tone="outline">{pkg.division}</Badge>
                <Badge tone="aqua">{pkg.audience}</Badge>
              </div>
              <h1 className="heading-section mt-3 text-white text-balance">{pkg.name}</h1>
              <p className="lede-light mt-4 text-pretty">{pkg.description}</p>

              <h2 className="heading-card mt-10 text-white">Included products</h2>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {pkg.includedProducts.map((p) => (
                  <li key={p} className="flex items-start gap-2 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" /> {p}
                  </li>
                ))}
              </ul>

              <h2 className="heading-card mt-10 text-white">Included services</h2>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {pkg.includedServices.map((s) => (
                  <li key={s} className="flex items-start gap-2 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" /> {s}
                  </li>
                ))}
              </ul>

              {pkg.optionalAddOns?.length ? (
                <>
                  <h2 className="heading-card mt-10 text-white">Optional add-ons</h2>
                  <ul className="mt-3 list-disc pl-5 text-sm text-white/80">
                    {pkg.optionalAddOns.map((a) => (
                      <li key={a}>{a}</li>
                    ))}
                  </ul>
                </>
              ) : null}

              {pkg.placeholderNotice && (
                <div className="mt-6">
                  <PlaceholderBadge>{pkg.placeholderNotice}</PlaceholderBadge>
                </div>
              )}
            </div>
            <aside className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <p className="eyebrow">Pricing</p>
              <p className="mt-2 text-2xl font-semibold text-white">
                {pkg.priceFrom != null ? `From ${formatCurrency(pkg.priceFrom)}` : "Project-scoped"}
              </p>
              <p className="mt-2 text-xs text-white/55">
                Final price depends on site, scale and integration. Indicative only.
              </p>
              <Button
                href={
                  pkg.buyingMode === "project_assessment"
                    ? `/project-assessment?package=${pkg.slug}`
                    : `/quote-request?package=${pkg.slug}`
                }
                size="lg"
                block
                className="mt-6"
              >
                {pkg.cta}
              </Button>
              <Button href="/contact" variant="secondary" block className="mt-3">
                Talk to LIVWater
              </Button>
              {pkg.highlights?.length ? (
                <>
                  <p className="eyebrow mt-6">Highlights</p>
                  <ul className="mt-2 space-y-1.5 text-xs text-white/80">
                    {pkg.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-1.5">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}
            </aside>
          </div>
        </Container>
      </Section>
      <CTASection
        title="Scope a tailored version of this package."
        description="We will adapt the bundle to your site, scale and water profile."
        primary={{ label: pkg.cta, href: pkg.buyingMode === "project_assessment" ? "/project-assessment" : "/quote-request" }}
        secondary={{ label: "Speak to LIVWater", href: "/contact" }}
      />
    </>
  );
}
