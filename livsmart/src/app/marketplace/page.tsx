import type { Metadata } from "next";
import Link from "next/link";
import { Section, Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProductCard } from "@/components/marketing/ProductCard";
import { ServiceCard } from "@/components/marketing/ServiceCard";
import { PackageCard } from "@/components/marketing/PackageCard";
import { ProviderCard } from "@/components/marketing/ProviderCard";
import { CTASection } from "@/components/marketing/CTASection";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ShoppingCart, FileText, ClipboardList, ShieldCheck } from "lucide-react";
import { products, productCategories } from "@/data/products";
import { services, serviceCategories } from "@/data/services";
import { solutionPackages } from "@/data/packages";
import { providers } from "@/data/providers";

export const metadata: Metadata = {
  title: "Marketplace overview",
  description:
    "The full LIVWater ecosystem — water products, services, decentralised systems, dashboards and verified providers, in one curated marketplace.",
};

const commerceModes = [
  {
    icon: ShoppingCart,
    title: "Direct product purchase",
    description:
      "For simple products: filtration, sensors, leak detection, testing kits, dashboard plans and accessories.",
    cta: { label: "Browse products", href: "/products" },
  },
  {
    icon: FileText,
    title: "Quote-based enquiry",
    description:
      "For products and services requiring sizing, location data, site validation or technical input.",
    cta: { label: "Request quote", href: "/quote-request" },
  },
  {
    icon: ClipboardList,
    title: "Project-based assessment",
    description:
      "For decentralised supply, wastewater, reuse and large-scale infrastructure.",
    cta: { label: "Project assessment", href: "/project-assessment" },
  },
  {
    icon: ShieldCheck,
    title: "Provider / partner access",
    description:
      "For approved service providers, installers, consultants, technology partners and affiliates.",
    cta: { label: "Partner with us", href: "/affiliate-network" },
  },
];

export default function MarketplacePage() {
  return (
    <>
      <Section surface="dark" className="!pt-24 !pb-16">
        <Container wide>
          <p className="eyebrow text-accent-300">Marketplace</p>
          <h1 className="heading-hero mt-3 text-white text-balance max-w-4xl">
            One marketplace for water products, services, systems and decentralised infrastructure.
          </h1>
          <p className="lede mt-5 max-w-3xl text-pretty">
            LIVSmart curates the LIVWater ecosystem — what we make, what we deliver
            and who delivers it. Choose how you want to engage: buy now, request a
            quote, request a project assessment or join as a partner.
          </p>
        </Container>
      </Section>

      <Section surface="light">
        <Container wide>
          <SectionHeader
            eyebrow="How you can engage"
            title="Four commerce modes — one platform."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {commerceModes.map((m) => (
              <div key={m.title} className="card-surface p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-900 text-accent-300">
                  <m.icon className="h-4 w-4" />
                </div>
                <h3 className="heading-card mt-5 text-white">{m.title}</h3>
                <p className="mt-2 text-sm text-white/65">{m.description}</p>
                <Link
                  href={m.cta.href}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent-300 hover:text-accent-200"
                >
                  {m.cta.label} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section surface="muted">
        <Container wide>
          <SectionHeader
            eyebrow="Product categories"
            title="Browse the catalogue by category."
            description="From smart metering to package wastewater plants — structured into household, estate, commercial, industrial, agriculture and project scales."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((cat) => (
              <Link
                key={cat.id}
                href={`/products?category=${encodeURIComponent(cat.name)}`}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-0.5 hover:border-accent-400/50"
              >
                <p className="eyebrow">{cat.division}</p>
                <h3 className="heading-card mt-2 text-white">{cat.name}</h3>
                <p className="mt-2 text-sm text-white/65">{cat.description}</p>
                <p className="mt-4 text-xs text-white/55">
                  {cat.subcategories.slice(0, 4).join(" · ")}…
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent-300">
                  Browse <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section surface="light">
        <Container wide>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeader
              eyebrow="Featured products"
              title="Direct-purchase devices and quote-based systems."
            />
            <Button href="/products" variant="secondary">All products <ArrowRight className="h-4 w-4" /></Button>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 6).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </Container>
      </Section>

      <Section surface="muted">
        <Container wide>
          <SectionHeader
            eyebrow="Services shop"
            title="Bookable and quote-based water services."
            description="Assessments, installation, maintenance, operations and specialist providers — delivered by LIVWater and verified partners."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {serviceCategories.map((cat) => (
              <Link
                key={cat.id}
                href={`/services-shop?category=${encodeURIComponent(cat.name)}`}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <h3 className="heading-card text-white">{cat.name}</h3>
                <p className="mt-2 text-sm text-white/65">{cat.description}</p>
                <p className="mt-3 text-xs text-white/55">
                  {cat.services.slice(0, 4).join(" · ")}…
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 3).map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        </Container>
      </Section>

      <Section surface="light">
        <Container wide>
          <SectionHeader
            eyebrow="Solution packages"
            title="Curated bundles for the most common use cases."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {solutionPackages.slice(0, 6).map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </Container>
      </Section>

      <Section surface="muted">
        <Container wide>
          <SectionHeader
            eyebrow="Verified providers"
            title="Approved service providers across the value chain."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {providers.slice(0, 3).map((p) => (
              <ProviderCard key={p.id} provider={p} />
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        eyebrow="Start with what you need"
        title="Find the right product, service or system."
        description="Or let LIVWater guide you through a structured solution build."
        primary={{ label: "Build My Solution", href: "/solutions" }}
        secondary={{ label: "Request Quote", href: "/quote-request" }}
        tertiary={{ label: "Project Assessment", href: "/project-assessment" }}
      />
    </>
  );
}
