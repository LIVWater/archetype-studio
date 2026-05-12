import type { Metadata } from "next";
import Image from "next/image";
import { Section, Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { DivisionPage } from "@/components/marketing/DivisionPage";
import { products } from "@/data/products";
import { graphics, imagery } from "@/lib/assets";

export const metadata: Metadata = {
  title: "LIVReuse — closed-loop water reuse infrastructure",
  description:
    "Greywater, treated effluent and closed-loop reuse for irrigation, flushing and process water — connected to LIVSmart monitoring.",
};

export default function LivReusePage() {
  return (
    <DivisionPage
      hero={{
        eyebrow: "LIVReuse",
        title: "The closed-loop layer of decentralised water.",
        description:
          "Greywater, treated effluent and process water reuse — for irrigation, flushing, washing bays and industrial reuse. Designed to connect supply, wastewater and monitoring into one loop.",
        primary: { label: "Request Quote", href: "/quote-request" },
        secondary: { label: "Project Assessment", href: "/project-assessment" },
        backgroundImage: imagery.hospitality[0].src,
      }}
      capabilities={[
        { title: "Greywater reuse", description: "Shower, basin and laundry water for irrigation and flushing." },
        { title: "Treated effluent reuse", description: "Polished effluent for irrigation, flushing and process reuse." },
        { title: "Estate & commercial reuse", description: "Closed-loop reuse across residential, hospitality and commercial sites." },
        { title: "Industrial reuse", description: "Process water reuse, cooling water and rinse reuse." },
        { title: "Monitoring", description: "Reuse dashboards with quality, volume and uptime tracking." },
      ]}
      steps={[
        { title: "Reuse feasibility", description: "Demand profiling, water balance and reuse targets." },
        { title: "Concept design", description: "Process selection, storage and reuse pumping." },
        { title: "Build & integrate", description: "Installation, plumbing integration, dashboard onboarding." },
        { title: "Operate", description: "Maintenance, water quality assurance and reporting." },
      ]}
      extras={
        <Section surface="muted">
          <Container wide>
            <SectionHeader
              eyebrow="The loop"
              title="Supply, treatment, reuse, monitoring — one continuous cycle."
              description="LIVReuse closes the loop between LIVSupply and LIVWaste, with LIVSmart monitoring the flow at every stage."
              align="center"
            />
            <div className="relative mx-auto mt-12 max-w-4xl">
              <div
                aria-hidden
                className="glow-orb glow-orb-accent absolute -inset-10 opacity-60"
              />
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm md:p-10">
                <Image
                  src={graphics.waterCycle.darkWithText}
                  alt="LIVWater water cycle: supply, treatment, reuse, monitoring"
                  width={1400}
                  height={900}
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>
          </Container>
        </Section>
      }
      products={products.filter(
        (p) => p.division === "LIVReuse" || p.category === "LIVReuse Systems",
      )}
      systemHighlights={[
        {
          title: "Source loops",
          items: [
            "Greywater collection",
            "Treated effluent feed",
            "Process water capture",
          ],
        },
        {
          title: "Treatment & polishing",
          items: [
            "Filtration & disinfection",
            "Optional UV / chlorination",
            "Quality assurance loop",
          ],
        },
        {
          title: "Distribution & monitoring",
          items: [
            "Reuse storage tanks",
            "Reuse pumping",
            "Reuse monitoring dashboards",
          ],
        },
      ]}
      finalCta={{
        title: "Close the loop on water use.",
        description:
          "Reuse design depends on demand profile and water balance. Submit a request and we will scope the right reuse system.",
        primary: { label: "Request Quote", href: "/quote-request" },
        secondary: { label: "Project Assessment", href: "/project-assessment" },
      }}
    />
  );
}
