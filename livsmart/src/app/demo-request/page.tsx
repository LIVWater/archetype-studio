import type { Metadata } from "next";
import { Section, Container } from "@/components/ui/Container";
import { DemoForm } from "@/components/forms/DemoForm";

export const metadata: Metadata = {
  title: "Request a Demo",
  description:
    "Book a tailored demo of the LIVSmart app, site dashboards, operations portal and portfolio dashboards.",
};

export default function DemoRequestPage() {
  return (
    <>
      <Section surface="dark" className="!py-20">
        <Container wide>
          <p className="eyebrow text-accent-300">Demo request</p>
          <h1 className="heading-hero mt-3 text-white text-balance max-w-3xl">
            Book a LIVSmart demo.
          </h1>
          <p className="lede mt-5 max-w-3xl text-pretty">
            A 30-minute walkthrough of the app, site dashboards, operations
            portal and portfolio view — sized to your use case.
          </p>
        </Container>
      </Section>
      <Section surface="light">
        <Container>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <DemoForm />
          </div>
        </Container>
      </Section>
    </>
  );
}
