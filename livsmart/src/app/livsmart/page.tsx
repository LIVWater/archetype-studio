import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Section, Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { EcosystemLayers } from "@/components/marketing/EcosystemLayers";
import { PortalCard } from "@/components/marketing/PortalCard";
import { CTASection } from "@/components/marketing/CTASection";
import { Button } from "@/components/ui/Button";
import { brand, graphics, partners } from "@/lib/assets";
import { portals } from "@/data/portals";
import { ArrowRight, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "LIVSmart — the digital layer of LIVWater",
  description:
    "LIVSmart is LIVWater's digital marketplace and management platform — connecting products, services, decentralised systems, dashboards, verified providers, affiliates and partners into one operating layer for water.",
};

const principles = [
  {
    title: "Decentralised by default",
    description:
      "Water security is solved best at the site. Treatment, supply and reuse belong close to the user — not bolted onto an over-extended municipal network.",
  },
  {
    title: "Measured, not promised",
    description:
      "Every meter, sensor and treatment plant streams data into LIVSmart. No fluffy ESG claims — just water you can see, audit and improve.",
  },
  {
    title: "Verified, not crowdsourced",
    description:
      "Service providers, technologies and affiliates are reviewed and approved before listing. The marketplace works because the network is trusted.",
  },
  {
    title: "One operating layer",
    description:
      "Products, services, systems, dashboards, providers and partners — managed from one platform, with one set of identities, contracts and SLAs.",
  },
];

const stats = [
  { value: "37", label: "structured page experiences" },
  { value: "9", label: "approved network partners" },
  { value: "6", label: "audience solution paths" },
  { value: "1", label: "operating layer for water" },
];

const audiences = [
  { label: "Households", href: "/solutions/household" },
  { label: "Estates & communities", href: "/solutions/estates" },
  { label: "Commercial", href: "/solutions/commercial" },
  { label: "Industrial", href: "/solutions/industrial" },
  { label: "Agriculture", href: "/solutions/agriculture" },
  { label: "Developers & projects", href: "/solutions/developers" },
];

export default function LIVSmartBrandPage() {
  return (
    <>
      {/* Hero — manifesto */}
      <section className="relative isolate overflow-hidden bg-navy-900 pt-28 pb-24 text-white md:pt-36">
        <div
          aria-hidden
          className="glow-orb glow-orb-accent absolute -top-32 left-1/2 h-[720px] w-[720px] -translate-x-1/2"
        />
        <div
          aria-hidden
          className="glow-orb glow-orb-brand absolute top-20 -right-20 h-[420px] w-[420px]"
        />
        <div
          aria-hidden
          className="absolute inset-0 grid-pattern opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
        />
        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <Image
              src={brand.mark}
              alt=""
              width={96}
              height={96}
              priority
              className="mx-auto h-20 w-20 opacity-90"
            />
            <p className="eyebrow mt-10 text-accent-300">
              LIVSmart · the LIVWater operating layer
            </p>
            <h1 className="heading-hero mt-6 text-balance text-white">
              The digital layer of water.
              <br />
              <span className="italic text-white/80">
                One platform — products,
              </span>
              <br />
              services, systems, dashboards.
            </h1>
            <p className="lede mx-auto mt-8 max-w-2xl text-pretty">
              LIVSmart is LIVWater&apos;s digital marketplace and management
              platform. It connects everything we make, deliver and operate —
              from household devices to project-scale infrastructure — into a
              single operating layer for water.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Button href="/marketplace" size="lg" variant="primary">
                Explore Marketplace
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/app-dashboards" variant="secondary" size="lg">
                See the dashboards
              </Button>
              <Button href="/demo-request" variant="ghostLight" size="lg">
                Request demo
              </Button>
            </div>
          </div>

          {/* Stats row */}
          <dl className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-y-10 border-t border-white/[0.06] pt-12 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <dt className="font-display text-[40px] leading-none text-white md:text-[52px]">
                  {s.value}
                </dt>
                <dd className="mx-auto mt-3 max-w-[20ch] text-[11px] uppercase tracking-[0.22em] text-white/45">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* The thesis */}
      <Section surface="light">
        <Container mid>
          <p className="eyebrow text-accent-300">The thesis</p>
          <h2 className="heading-section mt-4 text-balance text-white">
            Water is becoming{" "}
            <span className="italic text-white/75">
              decentralised, measured and serviced
            </span>{" "}
            — and it needs a single operating layer.
          </h2>
          <div className="mt-10 grid gap-12 lg:grid-cols-2">
            <p className="text-[15px] leading-relaxed text-white/70 md:text-base">
              For most of the last century, water was a public utility delivered
              through a centralised network. That model is straining — in cost,
              continuity, quality and reach. The next decade of water belongs to
              decentralised systems: borehole-to-tap treatment, on-site
              wastewater plants, reuse loops, smart metering and AI-driven
              operations.
            </p>
            <p className="text-[15px] leading-relaxed text-white/70 md:text-base">
              LIVWater builds and operates that infrastructure. LIVSmart is its
              digital layer — the marketplace, dashboard, provider network,
              affiliate channel, and partner platform that turns water into a
              measured, manageable, and commercially structured asset.
            </p>
          </div>
        </Container>
      </Section>

      {/* The four layers */}
      <Section surface="muted">
        <Container wide>
          <SectionHeader
            eyebrow="The platform"
            title="Four connected layers. One operating system."
            description="Products you can buy, services you can book, systems we scope, and the dashboards that tie them together."
          />
          <div className="mt-12">
            <EcosystemLayers />
          </div>
        </Container>
      </Section>

      {/* Principles */}
      <Section surface="light">
        <Container wide>
          <SectionHeader
            eyebrow="Principles"
            title="What LIVSmart insists on."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {principles.map((p) => (
              <div key={p.title} className="card-surface p-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/15 ring-1 ring-accent-500/25">
                  <Sparkles className="h-4 w-4 text-accent-300" />
                </div>
                <h3 className="font-display mt-6 text-[22px] leading-tight text-white">
                  {p.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-white/70">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Portals */}
      <Section surface="muted">
        <Container wide>
          <SectionHeader
            eyebrow="Portals"
            title="Seven views. One platform."
            description="Tailored access for households, managers, operators, providers, affiliates and asset owners."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {portals.slice(0, 6).map((p) => (
              <PortalCard key={p.id} portal={p} inverted />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/app-dashboards" variant="secondary">
              All portals & dashboards <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Container>
      </Section>

      {/* Water cycle */}
      <Section surface="light">
        <Container wide>
          <SectionHeader
            eyebrow="The loop"
            title="Supply, treatment, reuse, monitoring — one continuous cycle."
            description="LIVSmart is the layer that closes the loop between LIVSupply, LIVWaste and LIVReuse."
            align="center"
          />
          <div className="relative mx-auto mt-14 max-w-5xl">
            <div
              aria-hidden
              className="glow-orb glow-orb-accent absolute -inset-12 opacity-60"
            />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-sm md:p-12">
              <Image
                src={graphics.waterCycle.darkWithText}
                alt="LIVWater water cycle — supply, treatment, reuse and monitoring"
                width={1600}
                height={1000}
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Audiences */}
      <Section surface="muted">
        <Container wide>
          <SectionHeader
            eyebrow="Who it's for"
            title="From a single household to a development at scale."
          />
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className="group flex items-center justify-between rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5 backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-white/15"
              >
                <span className="font-display text-[20px] tracking-tight text-white">
                  {a.label}
                </span>
                <ArrowRight className="h-4 w-4 text-accent-300 transition group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Partner network */}
      <Section surface="light">
        <Container wide>
          <SectionHeader
            eyebrow="The network"
            title="Verified providers, partners and technologies."
            description="LIVWater hosts approved third-party providers, technology partners and affiliate channels. Listings appear only after review."
          />
          <div className="mt-12 grid grid-cols-3 items-center gap-x-6 gap-y-8 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9">
            {partners.map((p) => (
              <div key={p.name} className="flex items-center justify-center">
                <div className="relative h-10 w-full max-w-[120px]">
                  <Image
                    src={p.src}
                    alt={p.name}
                    fill
                    sizes="120px"
                    className="object-contain opacity-70 transition hover:opacity-100"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button href="/become-a-provider" variant="secondary">
              Become a Provider
            </Button>
            <Button href="/affiliate-application" variant="secondary">
              Apply as Affiliate
            </Button>
            <Button
              href="/technology-partner-application"
              variant="ghostLight"
            >
              Submit Technology
            </Button>
          </div>
        </Container>
      </Section>

      <CTASection
        eyebrow="Built for the water decade"
        title="LIVSmart is how LIVWater operates."
        description="Start with the marketplace, build a solution, or scope a project."
        primary={{ label: "Explore Marketplace", href: "/marketplace" }}
        secondary={{ label: "Build My Solution", href: "/solutions" }}
        tertiary={{ label: "Project Assessment", href: "/project-assessment" }}
      />
    </>
  );
}
