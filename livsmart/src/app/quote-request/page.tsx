import type { Metadata } from "next";
import { Section, Container } from "@/components/ui/Container";
import { QuoteForm } from "@/components/forms/QuoteForm";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Request a quote for any LIVWater product, service or system. Tell us about your site, scale and intent — we will route it to the right team.",
};

export default function QuoteRequestPage() {
  return (
    <>
      <Section surface="dark" className="!py-20">
        <Container wide>
          <p className="eyebrow text-accent-300">Quote request</p>
          <h1 className="heading-hero mt-3 text-white text-balance max-w-3xl">
            Request a quote.
          </h1>
          <p className="lede mt-5 max-w-3xl text-pretty">
            For products and services requiring sizing, location data, site
            validation or technical input. Larger systems and infrastructure
            should use the <a href="/project-assessment" className="underline">Project Assessment</a> flow.
          </p>
        </Container>
      </Section>
      <Section surface="light">
        <Container>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <QuoteForm />
          </div>
        </Container>
      </Section>
    </>
  );
}
