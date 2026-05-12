import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Section, Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProductCard } from "@/components/marketing/ProductCard";
import { PackageCard } from "@/components/marketing/PackageCard";
import { ServiceCard } from "@/components/marketing/ServiceCard";
import { CTASection } from "@/components/marketing/CTASection";
import { Button } from "@/components/ui/Button";
import { solutionAudiences } from "@/data/audiences";
import { products } from "@/data/products";
import { services } from "@/data/services";
import { solutionPackages } from "@/data/packages";
import { heroForAudience, imagery } from "@/lib/assets";
import { ArrowRight, Sparkles } from "lucide-react";
import type { Scale } from "@/types";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return solutionAudiences.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const a = solutionAudiences.find((x) => x.slug === params.slug);
  if (!a) return { title: "Solution" };
  return { title: `${a.title} — Water solutions`, description: a.intro };
}

// Map solution slug → imagery folder (for the supporting image grid)
const audienceGalleryMap: Record<string, keyof typeof imagery> = {
  household: "residential",
  estates: "residential",
  commercial: "commercial",
  industrial: "industrial",
  agriculture: "agriculture",
  developers: "industrial",
};

export default function SolutionAudiencePage({ params }: PageProps) {
  const audience = solutionAudiences.find((a) => a.slug === params.slug);
  if (!audience) notFound();

  const matchedProducts = products
    .filter((p) => p.scale.includes(audience.scale as Scale))
    .slice(0, 6);
  const matchedServices = services
    .filter((s) => s.suitableFor.includes(audience.scale as Scale))
    .slice(0, 3);
  const matchedPackages = solutionPackages
    .filter((p) => p.audience === audience.scale || p.audience === "project")
    .slice(0, 3);

  const hero = heroForAudience(audience.slug);
  const galleryKey = audienceGalleryMap[audience.slug] ?? "residential";
  const gallery = imagery[galleryKey];

  return (
    <>
      {/* Full-bleed hero with audience imagery */}
      <section className="relative isolate overflow-hidden bg-navy-900 text-white">
        <div className="absolute inset-0">
          <Image
            src={hero.src}
            alt={hero.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-50"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-b from-navy-900/60 via-navy-900/85 to-navy-900"
          />
          <div
            aria-hidden
            className="glow-orb glow-orb-accent absolute -top-32 right-0 h-[420px] w-[420px]"
          />
        </div>
        <div className="container-wide relative pb-24 pt-28 md:pt-36">
          <Link
            href="/solutions"
            className="text-[12px] text-white/55 transition hover:text-white"
          >
            ← All solutions
          </Link>
          <p className="eyebrow mt-4 text-accent-300">
            {audience.scale} solutions
          </p>
          <h1 className="heading-hero mt-4 max-w-4xl text-balance text-white">
            {audience.title}
          </h1>
          <p className="lede mt-6 max-w-3xl text-pretty">{audience.intro}</p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button href="/quote-request" size="lg" variant="primary">
              Request Quote <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/project-assessment" variant="secondary" size="lg">
              Project Assessment
            </Button>
            <Button href="/demo-request" variant="ghostLight" size="lg">
              Request Demo
            </Button>
          </div>
        </div>
      </section>

      <Section surface="light">
        <Container wide>
          <SectionHeader
            eyebrow="Focus areas"
            title={`What ${audience.title.toLowerCase()} typically need.`}
          />
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {audience.focusAreas.map((f) => (
              <li
                key={f}
                className="flex items-start gap-2 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-sm text-white/80 backdrop-blur-sm"
              >
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
                {f}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Imagery row — three supporting shots */}
      {gallery.length >= 2 && (
        <Section surface="muted" className="!py-0">
          <Container wide>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {gallery.slice(0, 3).map((img, i) => (
                <div
                  key={img.src}
                  className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/[0.06]"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-navy-900/70 to-transparent"
                  />
                  <p className="absolute bottom-4 left-5 text-[11px] uppercase tracking-[0.22em] text-white/70">
                    {audience.scale} · {i + 1}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {matchedPackages.length > 0 && (
        <Section surface="muted">
          <Container wide>
            <SectionHeader
              eyebrow="Packages"
              title="Recommended solution packages."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {matchedPackages.map((pkg) => (
                <PackageCard key={pkg.id} pkg={pkg} />
              ))}
            </div>
          </Container>
        </Section>
      )}

      {matchedProducts.length > 0 && (
        <Section surface="light">
          <Container wide>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeader
                eyebrow="Products"
                title="Suitable products at this scale."
              />
              <Button href="/products" variant="secondary">
                All products <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {matchedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </Container>
        </Section>
      )}

      {matchedServices.length > 0 && (
        <Section surface="muted">
          <Container wide>
            <SectionHeader
              eyebrow="Services"
              title="Services typically required."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {matchedServices.map((s) => (
                <ServiceCard key={s.id} service={s} />
              ))}
            </div>
          </Container>
        </Section>
      )}

      <CTASection
        title={`Let's scope a ${audience.scale} solution.`}
        description="Tell us your water problem. We will build the right system around it."
        primary={{ label: "Request Quote", href: "/quote-request" }}
        secondary={{ label: "Project Assessment", href: "/project-assessment" }}
      />
    </>
  );
}
