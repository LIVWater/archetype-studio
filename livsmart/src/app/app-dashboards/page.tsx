import type { Metadata } from "next";
import { Section, Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PortalCard } from "@/components/marketing/PortalCard";
import { CTASection } from "@/components/marketing/CTASection";
import { DashboardMockup } from "@/components/marketing/DashboardMockup";
import { AppMockup } from "@/components/marketing/AppMockup";
import { Button } from "@/components/ui/Button";
import { portals } from "@/data/portals";
import { ArrowRight, Database, Workflow, ShieldCheck, Plug } from "lucide-react";

export const metadata: Metadata = {
  title: "App & Dashboards",
  description:
    "LIVSmart customer app, site dashboard, operations portal, portfolio dashboard, provider and affiliate portals — the digital control layer for water.",
};

const platformFeatures = [
  {
    icon: Database,
    title: "Connected by meters & sensors",
    description:
      "Smart meters, pressure, flow, level and quality sensors stream into LIVSmart in real time.",
  },
  {
    icon: Workflow,
    title: "Workflows for every user",
    description:
      "Tailored views for households, managers, operators, providers and asset owners.",
  },
  {
    icon: ShieldCheck,
    title: "Role-based access & audit",
    description:
      "Permission-controlled access across LIVWater, providers, affiliates and clients.",
  },
  {
    icon: Plug,
    title: "Integration-ready",
    description:
      "Built for CRM, billing, ticketing, ERP and BI connectors — placeholder integrations in the MVP.",
  },
];

export default function AppDashboardsPage() {
  return (
    <>
      <Section surface="dark" className="!pt-24 !pb-20">
        <Container wide>
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <p className="eyebrow text-accent-300">App & dashboards</p>
              <h1 className="heading-hero mt-3 text-white text-balance">
                One digital layer for water visibility, control and performance.
              </h1>
              <p className="lede mt-5 max-w-2xl text-pretty">
                LIVSmart connects meters, sensors, field devices, treatment systems,
                services and project data into app and dashboard experiences for
                households, managers, operators, providers, affiliates and asset
                owners.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button href="/demo-request" size="lg">
                  Request Demo
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button href="/contact" variant="outline" size="lg">
                  Talk to LIVWater
                </Button>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              <DashboardMockup />
              <AppMockup />
            </div>
          </div>
        </Container>
      </Section>

      <Section surface="light">
        <Container wide>
          <SectionHeader
            eyebrow="Platform"
            title="Built for the operating reality of water."
            description="Connected hardware, workflow-driven dashboards, role-based access and integration-ready APIs."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {platformFeatures.map((f) => (
              <div key={f.title} className="card-surface p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-900 text-accent-300">
                  <f.icon className="h-4 w-4" />
                </div>
                <h3 className="heading-card mt-5 text-white">{f.title}</h3>
                <p className="mt-2 text-sm text-white/65">{f.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section surface="muted">
        <Container wide>
          <SectionHeader
            eyebrow="Portals & dashboards"
            title="Seven views — one platform."
            description="From a household app to an admin marketplace dashboard, each user gets the layer they need."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {portals.map((p) => (
              <PortalCard key={p.id} portal={p} />
            ))}
          </div>
        </Container>
      </Section>

      <Section surface="light">
        <Container wide>
          <SectionHeader
            eyebrow="In the dashboards"
            title="Snapshots of what teams actually see."
          />
          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <p className="eyebrow">Portfolio dashboard</p>
              <h3 className="heading-card mt-1 text-white">Cross-site water performance</h3>
              <p className="mt-2 text-sm text-white/65">
                One view across all sites. Compare consumption, leak events,
                reuse and uptime — at site, asset, or portfolio level.
              </p>
              <div className="mt-6">
                <DashboardMockup />
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <p className="eyebrow">Customer app</p>
              <h3 className="heading-card mt-1 text-white">Visibility for every household</h3>
              <p className="mt-2 text-sm text-white/65">
                Usage, alerts, billing placeholder and service requests in one
                place. Available white-labelled for estates and developers.
              </p>
              <div className="mt-6">
                <AppMockup />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection
        eyebrow="See it live"
        title="Book a tailored LIVSmart demo."
        description="A 30-minute walkthrough — sized to your meters, sites and use cases."
        primary={{ label: "Request Demo", href: "/demo-request" }}
        secondary={{ label: "Project Assessment", href: "/project-assessment" }}
        tertiary={{ label: "Contact LIVWater", href: "/contact" }}
      />
    </>
  );
}
