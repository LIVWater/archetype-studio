import type { Metadata } from "next";
import { Section, Container } from "@/components/ui/Container";
import { AffiliateApplicationForm } from "@/components/forms/AffiliateApplicationForm";

export const metadata: Metadata = {
  title: "Apply as an Affiliate",
  description:
    "Apply to the LIVWater Affiliate Network — referral, sales, installer, service provider, technology, developer, consultant and project introducer partners.",
};

export default function AffiliateApplicationPage() {
  return (
    <>
      <Section surface="dark" className="!py-20">
        <Container wide>
          <p className="eyebrow text-accent-300">Affiliate application</p>
          <h1 className="heading-hero mt-3 text-white text-balance max-w-3xl">
            Apply to the LIVWater Affiliate Network.
          </h1>
          <p className="lede mt-5 max-w-3xl text-pretty">
            Submissions are reviewed by LIVWater for fit, capability and
            commercial alignment. Approved affiliates receive a referral code
            and access to the Affiliate Portal.
          </p>
        </Container>
      </Section>
      <Section surface="light">
        <Container>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <AffiliateApplicationForm />
          </div>
        </Container>
      </Section>
    </>
  );
}
