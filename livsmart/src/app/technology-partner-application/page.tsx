import type { Metadata } from "next";
import { Section, Container } from "@/components/ui/Container";
import { TechnologyPartnerForm } from "@/components/forms/TechnologyPartnerForm";

export const metadata: Metadata = {
  title: "Technology Partner Application",
  description:
    "Submit your water technology to LIVWater — for marketplace listing, partnership or pilot consideration.",
};

export default function TechnologyPartnerApplicationPage() {
  return (
    <>
      <Section surface="darker" className="!py-20">
        <Container wide>
          <p className="eyebrow text-accent-300">Technology partner</p>
          <h1 className="heading-hero mt-3 text-white text-balance max-w-3xl">
            Submit your water technology to LIVWater.
          </h1>
          <p className="lede mt-5 max-w-3xl text-pretty">
            LIVWater evaluates new technologies for partnership, piloting and
            marketplace listing. Submissions are reviewed by the LIVWater
            technology team.
          </p>
        </Container>
      </Section>
      <Section surface="light">
        <Container>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <TechnologyPartnerForm />
          </div>
        </Container>
      </Section>
    </>
  );
}
