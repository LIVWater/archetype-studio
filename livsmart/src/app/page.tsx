import Link from "next/link";
import { Hero } from "@/components/marketing/Hero";
import { Section, Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AudienceSelector } from "@/components/marketing/AudienceSelector";
import { EcosystemLayers } from "@/components/marketing/EcosystemLayers";
import { PortalCard } from "@/components/marketing/PortalCard";
import { PackageCard } from "@/components/marketing/PackageCard";
import { CTASection } from "@/components/marketing/CTASection";
import { FinancingCards } from "@/components/marketing/FinancingCards";
import { PartnerStrip } from "@/components/marketing/PartnerStrip";
import { Button } from "@/components/ui/Button";
import { AppMockup } from "@/components/marketing/AppMockup";
import {
  ArrowRight,
  Beaker,
  Cpu,
  Droplets,
  Recycle,
  Share2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { portals } from "@/data/portals";
import { solutionPackages } from "@/data/packages";

const divisions = [
  {
    eyebrow: "LIVSupply",
    icon: Droplets,
    title: "Decentralised water supply.",
    description:
      "Borehole, surface and treated water systems — from household to project scale. Containerised or in-ground, solar-ready.",
    href: "/livsupply",
    bullets: [
      "Borehole & surface intake",
      "Filtration · UF · RO · UV",
      "Containerised treatment",
    ],
  },
  {
    eyebrow: "LIVWaste",
    icon: Cpu,
    title: "Decentralised wastewater.",
    description:
      "Package plants and engineered wetlands sized 10–500 kL/day, with reuse-ready effluent and dashboard-integrated operations.",
    href: "/livwaste",
    bullets: [
      "MBR · SBR · MBBR",
      "Engineered wetlands",
      "Reuse-ready effluent",
    ],
  },
  {
    eyebrow: "LIVReuse",
    icon: Recycle,
    title: "Closed-loop reuse.",
    description:
      "Greywater, treated effluent and process water reuse for irrigation, flushing, washing bays and industrial loops.",
    href: "/livreuse",
    bullets: [
      "Greywater & effluent reuse",
      "Irrigation & flushing",
      "Reuse monitoring",
    ],
  },
];

const networkPillars = [
  {
    icon: ShieldCheck,
    eyebrow: "Service providers",
    title: "Approved third-party network.",
    description:
      "Installers, hydrogeologists, lab partners, drillers, operators and consultants — verified, insured and SLA-backed.",
    primary: { label: "Find a provider", href: "/service-providers" },
    secondary: { label: "Become a Provider", href: "/become-a-provider" },
  },
  {
    icon: Share2,
    eyebrow: "Affiliate network",
    title: "Build a partner business.",
    description:
      "Referral partners, sales reps, consultants, developer partners and project introducers — earn on conversions through LIVWater.",
    primary: { label: "Affiliate Network", href: "/affiliate-network" },
    secondary: { label: "Apply", href: "/affiliate-application" },
  },
  {
    icon: Beaker,
    eyebrow: "New water technology",
    title: "Bring new tech to market.",
    description:
      "OEMs, manufacturers and analytics platforms — partner with LIVWater for pilots, evaluation and marketplace listing.",
    primary: { label: "Technology Hub", href: "/new-water-technology" },
    secondary: {
      label: "Submit Technology",
      href: "/technology-partner-application",
    },
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* 2 — Partner trust strip */}
      <Section surface="light" className="!py-14">
        <Container wide>
          <PartnerStrip />
        </Container>
      </Section>

      {/* 3 — Audience selector */}
      <Section surface="muted">
        <Container wide>
          <SectionHeader
            eyebrow="Start where you are"
            title="Tell us who you are. We'll show you the water stack."
            description="LIVSmart guides each user — from homeowner to municipality — into the right products, services, systems, dashboards and partners."
          />
          <div className="mt-12">
            <AudienceSelector />
          </div>
        </Container>
      </Section>

      {/* 4 — The platform: four connected layers */}
      <Section surface="light">
        <Container wide>
          <SectionHeader
            eyebrow="The platform"
            title="One marketplace. Four connected layers."
            description="Products, services, decentralised systems and the digital layer that ties them together."
          />
          <div className="mt-12">
            <EcosystemLayers />
          </div>
        </Container>
      </Section>

      {/* 5 — Three divisions consolidated (was 3 separate sections) */}
      <Section surface="muted">
        <Container wide>
          <SectionHeader
            eyebrow="Decentralised systems"
            title="LIVSupply, LIVWaste, LIVReuse — one continuous loop."
            description="Three operating divisions, designed to be deployed together or independently — and always monitored through LIVSmart."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {divisions.map((d) => (
              <Link
                key={d.eyebrow}
                href={d.href}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-7 backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-white/20"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500/10 ring-1 ring-accent-500/20">
                    <d.icon className="h-5 w-5 text-accent-300" />
                  </div>
                  <p className="eyebrow">{d.eyebrow}</p>
                </div>
                <h3 className="font-display mt-8 text-[26px] leading-tight tracking-tight text-white">
                  {d.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">
                  {d.description}
                </p>
                <ul className="mt-6 space-y-1.5 text-sm text-white/80">
                  {d.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <Sparkles className="mt-1 h-3 w-3 shrink-0 text-accent-400" />
                      {b}
                    </li>
                  ))}
                </ul>
                <span className="mt-auto inline-flex items-center gap-1 pt-7 text-sm font-medium text-accent-300">
                  Explore {d.eyebrow}
                  <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* 6 — App & Dashboards */}
      <Section surface="light">
        <Container wide>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <SectionHeader
                eyebrow="App & dashboards"
                title="The digital layer behind smarter water control."
                description="LIVSmart connects meters, sensors, treatment systems, services and project data into app and dashboard experiences for every user."
              />
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Button href="/app-dashboards" size="lg">
                  View features <ArrowRight className="h-4 w-4" />
                </Button>
                <Button href="/demo-request" variant="secondary" size="lg">
                  Request Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <div
                aria-hidden
                className="glow-orb glow-orb-accent absolute -inset-10 opacity-60"
              />
              <div className="relative">
                <AppMockup />
              </div>
            </div>
          </div>
          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {portals.slice(0, 6).map((p) => (
              <PortalCard key={p.id} portal={p} inverted />
            ))}
          </div>
        </Container>
      </Section>

      {/* 7 — Curated packages (replaces separate Products + Packages sections) */}
      <Section surface="muted">
        <Container wide>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeader
              eyebrow="Curated packages"
              title="Solution packages, sized to common water problems."
              description="Bundled products and services for households, estates, businesses, industrial sites, agriculture and projects."
            />
            <Button href="/solutions" variant="secondary">
              All packages <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {solutionPackages.slice(0, 6).map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </Container>
      </Section>

      {/* 8 — The network: providers + affiliates + technology (was 3 separate sections) */}
      <Section surface="light">
        <Container wide>
          <SectionHeader
            eyebrow="The network"
            title="Verified providers, partners and technology."
            description="LIVSmart hosts approved third-party providers, technology partners and affiliate channels — listings appear only after review."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {networkPillars.map((p) => (
              <div
                key={p.eyebrow}
                className="flex h-full flex-col rounded-2xl border border-white/[0.08] bg-white/[0.03] p-7 backdrop-blur-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500/10 ring-1 ring-accent-500/20">
                  <p.icon className="h-5 w-5 text-accent-300" />
                </div>
                <p className="eyebrow mt-7">{p.eyebrow}</p>
                <h3 className="font-display mt-2 text-[22px] leading-tight tracking-tight text-white">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">
                  {p.description}
                </p>
                <div className="mt-auto flex flex-wrap gap-2 pt-7">
                  <Button href={p.primary.href} size="sm">
                    {p.primary.label}
                  </Button>
                  <Button href={p.secondary.href} variant="secondary" size="sm">
                    {p.secondary.label}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 9 — Water-as-a-Service */}
      <Section surface="muted">
        <Container wide>
          <SectionHeader
            eyebrow="Water-as-a-Service"
            title="Flexible commercial structures for water infrastructure."
            description="Available structures depend on project size, site conditions, commercial viability and LIVWater approval."
          />
          <div className="mt-12">
            <FinancingCards inverted />
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            <Button href="/water-as-a-service">Water-as-a-Service</Button>
            <Button href="/project-assessment" variant="secondary">
              Request Project Assessment
            </Button>
          </div>
        </Container>
      </Section>

      {/* 10 — Final CTA */}
      <CTASection
        eyebrow="Start with the problem"
        title="Start with the water problem. Build the right system around it."
        description="A single house, a 280-unit estate, an industrial site or a new development — LIVWater meets you at the right layer of the stack."
        primary={{ label: "Build My Solution", href: "/solutions" }}
        secondary={{
          label: "Request Project Assessment",
          href: "/project-assessment",
        }}
        tertiary={{ label: "Speak to LIVWater", href: "/contact" }}
      />
    </>
  );
}
