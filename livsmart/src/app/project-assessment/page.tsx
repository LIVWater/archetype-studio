import type { Metadata } from "next";
import { Section, Container } from "@/components/ui/Container";
import { ProjectAssessmentForm } from "@/components/forms/ProjectAssessmentForm";

export const metadata: Metadata = {
  title: "Request a Project Assessment",
  description:
    "Project assessment for decentralised water infrastructure — supply, wastewater, reuse, dashboards and Water-as-a-Service.",
};

export default function ProjectAssessmentPage() {
  return (
    <>
      <Section surface="dark" className="!py-20">
        <Container wide>
          <p className="eyebrow text-accent-300">Project assessment</p>
          <h1 className="heading-hero mt-3 text-white text-balance max-w-3xl">
            Submit a project for assessment.
          </h1>
          <p className="lede mt-5 max-w-3xl text-pretty">
            For decentralised supply, wastewater, reuse, dashboards and
            Water-as-a-Service projects. We respond within five business days.
          </p>
        </Container>
      </Section>
      <Section surface="light">
        <Container>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <ProjectAssessmentForm />
          </div>
        </Container>
      </Section>
    </>
  );
}
