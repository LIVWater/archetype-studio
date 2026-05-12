import type { Metadata } from "next";
import { Section, Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TechnologyCard } from "@/components/marketing/TechnologyCard";
import { CTASection } from "@/components/marketing/CTASection";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { technologyCategories, technologyPartners } from "@/data/technology";
import Link from "next/link";
import { ArrowRight, Beaker, Microscope, FlaskConical, Rocket } from "lucide-react";

export const metadata: Metadata = {
  title: "New Water Technology",
  description:
    "LIVWater is a hub for emerging water treatment technologies, pilot systems, and technology partnerships across filtration, membranes, monitoring, reuse and AI.",
};

const pilotOpportunities = [
  {
    icon: Beaker,
    title: "Pilot deployments",
    description:
      "Live pilot sites for new treatment, reuse and monitoring technologies — across estates, agriculture, lodges and industrial sites.",
  },
  {
    icon: Microscope,
    title: "Technical evaluation",
    description:
      "Structured evaluation of performance, energy, lifecycle cost and operational fit before commercial listing.",
  },
  {
    icon: FlaskConical,
    title: "Co-development",
    description:
      "Joint engineering and product development with manufacturers and OEMs for specific decentralised use cases.",
  },
  {
    icon: Rocket,
    title: "Marketplace access",
    description:
      "Approved technologies appear in the LIVSmart marketplace, with curated demand routing and Project Assessment flow.",
  },
];

export default function NewWaterTechnologyPage() {
  return (
    <>
      <Section surface="darker" className="!py-24">
        <Container wide>
          <p className="eyebrow text-accent-300">New water technology</p>
          <h1 className="heading-hero mt-3 text-white text-balance max-w-4xl">
            A hub for emerging water treatment, monitoring and reuse technology.
          </h1>
          <p className="lede mt-5 max-w-3xl text-pretty">
            LIVWater partners with OEMs, manufacturers and technology platforms
            to bring new water solutions to households, estates, businesses,
            industrial sites, agriculture and large projects. Pilot-ready,
            production and evaluation technologies — under technical review.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="/technology-partner-application" size="lg">
              Submit Technology <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Partner with LIVWater
            </Button>
            <Button href="/project-assessment" variant="ghostLight" size="lg">
              Request Pilot
            </Button>
          </div>
        </Container>
      </Section>

      <Section surface="dark">
        <Container wide>
          <SectionHeader
            eyebrow="Featured technologies"
            title="Selected technologies in or under review."
            inverted
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {technologyPartners.map((t) => (
              <TechnologyCard key={t.id} tech={t} />
            ))}
          </div>
        </Container>
      </Section>

      <Section surface="light">
        <Container wide>
          <SectionHeader
            eyebrow="Technology categories"
            title="Where we focus."
            description="LIVWater evaluates technologies across the full decentralised water stack."
          />
          <div className="mt-8 flex flex-wrap gap-2">
            {technologyCategories.map((c) => (
              <Link key={c} href="/contact">
                <Badge tone="outline" className="px-3 py-1.5 text-sm">
                  {c}
                </Badge>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section surface="muted">
        <Container wide>
          <SectionHeader
            eyebrow="Partnerships"
            title="Four ways to work with LIVWater."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {pilotOpportunities.map((p) => (
              <div key={p.title} className="card-surface p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-900 text-accent-300">
                  <p.icon className="h-4 w-4" />
                </div>
                <h3 className="heading-card mt-5 text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-white/65">{p.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section surface="light">
        <Container wide>
          <SectionHeader
            eyebrow="New product launches"
            title="Placeholders for new releases."
            description="LIVWater regularly launches new partner technologies in the marketplace. This section will populate with live launches."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <div key={n} className="rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-8 text-center backdrop-blur-sm">
                <p className="eyebrow">Placeholder</p>
                <p className="heading-card mt-2 text-white">New technology launch #{n}</p>
                <p className="mt-2 text-sm text-white/55">
                  Live launches will be listed here as partners come on board.
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        title="Have a water technology to bring to market?"
        description="LIVWater is actively evaluating new treatment, monitoring and reuse technologies. We will respond after technical review."
        primary={{ label: "Submit Technology", href: "/technology-partner-application" }}
        secondary={{ label: "Partner with LIVWater", href: "/contact" }}
      />
    </>
  );
}
