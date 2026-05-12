import Image from "next/image";
import { Section, Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProductCard } from "@/components/marketing/ProductCard";
import { CTASection } from "@/components/marketing/CTASection";
import { Button } from "@/components/ui/Button";
import { HowItWorks, type HowItWorksStep } from "@/components/marketing/HowItWorks";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/types";

export function DivisionPage({
  hero,
  capabilities,
  steps,
  stepIcons,
  stepIconTone = "auto",
  products,
  systemHighlights,
  finalCta,
  extras,
}: {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primary: { label: string; href: string };
    secondary: { label: string; href: string };
    /** Optional hero image (full-bleed background) */
    backgroundImage?: string;
  };
  capabilities: { title: string; description: string }[];
  steps: { title: string; description: string }[];
  /** Optional icon paths (under /public) zipped onto each step in order */
  stepIcons?: readonly string[];
  stepIconTone?: "auto" | "invert";
  products: Product[];
  systemHighlights: { title: string; items: string[] }[];
  finalCta: {
    title: string;
    description: string;
    primary: { label: string; href: string };
    secondary: { label: string; href: string };
  };
  /** Optional slot rendered between "How it works" and "Featured systems" */
  extras?: React.ReactNode;
}) {
  const enrichedSteps: HowItWorksStep[] = steps.map((s, i) => ({
    ...s,
    icon: stepIcons?.[i],
  }));

  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy-900 pt-28 pb-20 md:pt-32">
        {hero.backgroundImage && (
          <div className="absolute inset-0">
            <Image
              src={hero.backgroundImage}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-40"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-b from-navy-900/40 via-navy-900/80 to-navy-900"
            />
          </div>
        )}
        <div
          aria-hidden
          className="glow-orb glow-orb-accent absolute -top-32 right-0 h-[460px] w-[460px]"
        />
        <div
          aria-hidden
          className="glow-orb glow-orb-soft absolute top-40 -left-20 h-[360px] w-[360px]"
        />
        <Container wide className="relative">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            <div>
              <p className="eyebrow text-accent-300">{hero.eyebrow}</p>
              <h1 className="heading-hero mt-3 text-white text-balance">
                {hero.title}
              </h1>
              <p className="lede mt-5 max-w-2xl text-pretty">
                {hero.description}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button href={hero.primary.href} size="lg">
                  {hero.primary.label}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  href={hero.secondary.href}
                  variant="secondary"
                  size="lg"
                >
                  {hero.secondary.label}
                </Button>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
              <p className="eyebrow text-accent-300">Capabilities</p>
              <ul className="mt-4 space-y-3.5 text-sm text-white/80">
                {capabilities.map((c) => (
                  <li key={c.title}>
                    <p className="font-medium text-white">{c.title}</p>
                    <p className="text-white/60">{c.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <Section surface="light">
        <Container wide>
          <SectionHeader
            eyebrow="How it works"
            title="From feasibility to lifecycle operations."
            description="LIVWater scopes, delivers and operates decentralised water systems — with verified partners and the LIVSmart dashboard layer integrated."
          />
          <div className="mt-10">
            <HowItWorks steps={enrichedSteps} iconTone={stepIconTone} />
          </div>
        </Container>
      </Section>

      {extras}

      <Section surface="muted">
        <Container wide>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeader
              eyebrow="Featured systems"
              title="Catalogue products & systems"
            />
            <Button href="/products" variant="secondary">
              All products <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 6).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </Container>
      </Section>

      <Section surface="light">
        <Container wide>
          <SectionHeader
            eyebrow="System breakdown"
            title="What's typically included in a decentralised system."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {systemHighlights.map((h) => (
              <div key={h.title} className="card-surface p-6">
                <h3 className="heading-card text-white">{h.title}</h3>
                <ul className="mt-3 space-y-1.5 text-sm text-white/80">
                  {h.items.map((i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        title={finalCta.title}
        description={finalCta.description}
        primary={finalCta.primary}
        secondary={finalCta.secondary}
      />
    </>
  );
}
