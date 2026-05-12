import type { Metadata } from "next";
import { Section, Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProviderApplicationForm } from "@/components/forms/ProviderApplicationForm";

export const metadata: Metadata = {
  title: "Become a Service Provider",
  description:
    "Apply to join the LIVWater verified service provider network — installers, lab partners, hydrogeologists, operators and specialists.",
};

const benefits = [
  "Access to leads from the LIVWater marketplace",
  "Listing on the Services Shop (after verification)",
  "Provider Portal access for jobs, quotes and documentation",
  "Co-marketing with LIVWater and partner network",
  "Defined SLA and dispute workflows",
];

const requirements = [
  "Valid company registration",
  "Current public liability and workers' insurance",
  "Relevant qualifications and certifications",
  "Documented service capability and references",
  "Commitment to LIVWater terms and SLA",
];

export default function BecomeProviderPage() {
  return (
    <>
      <Section surface="dark" className="!py-20">
        <Container wide>
          <p className="eyebrow text-accent-300">Become a provider</p>
          <h1 className="heading-hero mt-3 text-white text-balance max-w-3xl">
            Join the LIVWater verified service provider network.
          </h1>
          <p className="lede mt-5 max-w-3xl text-pretty">
            Approved providers are visible to LIVWater clients, marketplace
            users and partner channels. Applications are reviewed for
            verification, insurance and SLA capability.
          </p>
        </Container>
      </Section>

      <Section surface="light">
        <Container wide>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
            <div className="space-y-8">
              <div>
                <SectionHeader eyebrow="What you get" title="Benefits of joining." />
                <ul className="mt-4 space-y-2 text-sm text-white/80">
                  {benefits.map((b) => (
                    <li key={b}>· {b}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="eyebrow">Requirements</p>
                <ul className="mt-3 space-y-2 text-sm text-white/80">
                  {requirements.map((r) => (
                    <li key={r}>· {r}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <ProviderApplicationForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
