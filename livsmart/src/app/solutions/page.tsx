import type { Metadata } from "next";
import Link from "next/link";
import { Section, Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PackageCard } from "@/components/marketing/PackageCard";
import { CTASection } from "@/components/marketing/CTASection";
import { AudienceSelector } from "@/components/marketing/AudienceSelector";
import { solutionPackages } from "@/data/packages";
import { solutionAudiences } from "@/data/audiences";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Solutions overview",
  description:
    "Solutions by audience — household, estate, commercial, industrial, agriculture, developer — and curated solution packages bundled to common water problems.",
};

export default function SolutionsPage() {
  return (
    <>
      <Section surface="dark" className="!pt-24 !pb-20">
        <Container wide>
          <p className="eyebrow text-accent-300">Solutions</p>
          <h1 className="heading-hero mt-3 text-white text-balance max-w-3xl">
            Build the right water solution for your scale.
          </h1>
          <p className="lede mt-5 max-w-3xl text-pretty">
            Tell us who you are. LIVSmart will route you to the right products,
            services, systems and dashboards — bundled into packages where it
            makes sense.
          </p>
        </Container>
      </Section>

      <Section surface="light">
        <Container wide>
          <SectionHeader eyebrow="Guided selector" title="Start with your audience." />
          <div className="mt-10">
            <AudienceSelector />
          </div>
        </Container>
      </Section>

      <Section surface="muted">
        <Container wide>
          <SectionHeader
            eyebrow="By audience"
            title="Pick a solution path by user type."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {solutionAudiences.map((a) => (
              <Link
                key={a.slug}
                href={`/solutions/${a.slug}`}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-0.5 hover:border-accent-400/50 hover:shadow-[0_24px_60px_-30px_rgba(26,163,232,0.18)]"
              >
                <p className="eyebrow">{a.scale}</p>
                <h3 className="heading-card mt-2 text-white">{a.title}</h3>
                <p className="mt-2 text-sm text-white/65">{a.intro}</p>
                <p className="mt-4 text-xs text-white/55">{a.focusAreas.slice(0, 4).join(" · ")}…</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent-300">
                  Explore <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section surface="light">
        <Container wide>
          <SectionHeader
            eyebrow="Solution packages"
            title="Curated bundles of products and services."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {solutionPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        title="Not sure where to start?"
        description="Request a project assessment and we will work back from your water problem."
        primary={{ label: "Project Assessment", href: "/project-assessment" }}
        secondary={{ label: "Request Quote", href: "/quote-request" }}
      />
    </>
  );
}
