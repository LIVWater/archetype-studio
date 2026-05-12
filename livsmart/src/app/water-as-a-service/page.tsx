import type { Metadata } from "next";
import { Section, Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FinancingCards } from "@/components/marketing/FinancingCards";
import { HowItWorks } from "@/components/marketing/HowItWorks";
import { CTASection } from "@/components/marketing/CTASection";
import { PlaceholderBadge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Water-as-a-Service",
  description:
    "Flexible commercial structures for decentralised water infrastructure — outright purchase, co-ownership, rent-to-own, service-based delivery and owner-operator models.",
};

const considerations = [
  {
    title: "Project size",
    description:
      "Structures are typically applicable from medium to large infrastructure projects.",
  },
  {
    title: "Site conditions",
    description:
      "Source water, wastewater, reuse opportunity and regulatory environment shape commercial viability.",
  },
  {
    title: "Ownership requirements",
    description:
      "Some structures preserve client ownership, others rely on LIVWater retaining infrastructure ownership.",
  },
  {
    title: "Commercial viability",
    description:
      "Demand profile, payback window, currency exposure and operating cost shape the structure.",
  },
  {
    title: "LIVWater approval",
    description:
      "All structures are subject to LIVWater qualification, due diligence and approval.",
  },
];

export default function WaterAsAServicePage() {
  return (
    <>
      <Section surface="dark" className="!py-24">
        <Container wide>
          <p className="eyebrow text-accent-300">Water-as-a-Service</p>
          <h1 className="heading-hero mt-3 text-white text-balance max-w-4xl">
            Flexible commercial structures for water infrastructure.
          </h1>
          <p className="lede mt-5 max-w-3xl text-pretty">
            For medium to large decentralised water projects, LIVWater can
            structure delivery and operations using ownership, co-ownership,
            rent-to-own, service-based or owner-operator models — subject to
            project qualification.
          </p>
        </Container>
      </Section>

      <Section surface="light">
        <Container wide>
          <SectionHeader eyebrow="Available structures" title="Six commercial models, subject to qualification." />
          <div className="mt-10">
            <FinancingCards />
          </div>
          <div className="mt-8">
            <PlaceholderBadge>
              Available structures depend on project size, site conditions, commercial viability, ownership requirements and LIVWater approval.
            </PlaceholderBadge>
          </div>
        </Container>
      </Section>

      <Section surface="muted">
        <Container wide>
          <SectionHeader eyebrow="What we evaluate" title="How LIVWater qualifies a Water-as-a-Service project." />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {considerations.map((c) => (
              <div key={c.title} className="card-surface p-6">
                <h3 className="heading-card text-white">{c.title}</h3>
                <p className="mt-2 text-sm text-white/65">{c.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section surface="light">
        <Container wide>
          <SectionHeader eyebrow="Process" title="From enquiry to commercial structure." />
          <div className="mt-10">
            <HowItWorks
              steps={[
                { title: "Project assessment", description: "Submit the project assessment form." },
                { title: "Qualification", description: "LIVWater reviews scale, site and commercials." },
                { title: "Concept design", description: "Technical and commercial concept proposed." },
                { title: "Structure agreed", description: "Commercial structure selected and contracted." },
              ]}
            />
          </div>
        </Container>
      </Section>

      <CTASection
        eyebrow="Apply"
        title="Start a Water-as-a-Service conversation."
        description="Project Assessment is the entry point. We will respond within five business days."
        primary={{ label: "Project Assessment", href: "/project-assessment" }}
        secondary={{ label: "Contact LIVWater", href: "/contact" }}
      />
    </>
  );
}
