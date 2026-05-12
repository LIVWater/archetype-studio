import type { Metadata } from "next";
import Image from "next/image";
import { Section, Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { DivisionPage } from "@/components/marketing/DivisionPage";
import { products } from "@/data/products";
import { graphics, imagery } from "@/lib/assets";

export const metadata: Metadata = {
  title: "LIVWaste — decentralised wastewater treatment",
  description:
    "Decentralised package wastewater treatment plants, MBR systems, engineered wetlands and reuse-ready effluent for estates, lodges, commercial and industrial sites.",
};

export default function LivWastePage() {
  return (
    <DivisionPage
      hero={{
        eyebrow: "LIVWaste",
        title: "Decentralised wastewater treatment infrastructure.",
        description:
          "Package plants, MBR, MBBR, SBR and engineered wetlands — sized 10–500 kL/day, designed for reuse-ready effluent and connected to LIVSmart dashboards.",
        primary: { label: "Project Assessment", href: "/project-assessment" },
        secondary: { label: "Request Quote", href: "/quote-request" },
        backgroundImage: imagery.industrial[0].src,
      }}
      capabilities={[
        { title: "Package plants", description: "Modular MBR, SBR, MBBR systems for estates, lodges and project sites." },
        { title: "Engineered wetlands", description: "Low-energy treatment with reuse-grade options." },
        { title: "Tertiary treatment", description: "Polishing, disinfection and effluent monitoring." },
        { title: "Sludge handling", description: "Solids separation, dewatering and sludge plans." },
        { title: "Monitoring", description: "Effluent sensors and dashboard-integrated reporting." },
      ]}
      steps={[
        { title: "Wastewater feasibility", description: "Flows, loads and effluent target review." },
        { title: "Process selection", description: "MBR, SBR, MBBR or wetland — sized to site and reuse." },
        { title: "Build & commission", description: "Containerised or in-ground delivery." },
        { title: "Operate", description: "On-site / off-site operations with SLA backing." },
      ]}
      stepIcons={graphics.livWasteSteps}
      stepIconTone="invert"
      extras={
        <Section surface="muted">
          <Container wide>
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
              <div>
                <SectionHeader
                  eyebrow="System overview"
                  title="Modular wastewater treatment, from inlet to reuse."
                  description="LIVWaste plants are pre-engineered modules — sized to flow, load and effluent target. Containerised or in-ground, with optional MBR or engineered wetland configurations."
                />
              </div>
              <div className="relative">
                <div
                  aria-hidden
                  className="glow-orb glow-orb-accent absolute -inset-6 opacity-50"
                />
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm">
                  <Image
                    src={graphics.livWasteHero}
                    alt="LIVWaste process overview"
                    width={1200}
                    height={800}
                    className="h-auto w-full object-contain"
                  />
                </div>
              </div>
            </div>
          </Container>
        </Section>
      }
      products={products.filter(
        (p) => p.division === "LIVWaste" || p.category === "LIVWaste Systems",
      )}
      systemHighlights={[
        {
          title: "Inlet & primary",
          items: [
            "Screening & inlet works",
            "Solids separation",
            "Flow equalisation",
          ],
        },
        {
          title: "Biological treatment",
          items: [
            "MBR / SBR / MBBR",
            "Aeration & blowers",
            "Engineered wetland options",
          ],
        },
        {
          title: "Tertiary & reuse-ready",
          items: [
            "Polishing & disinfection",
            "Effluent monitoring sensors",
            "Reuse storage & pumping",
          ],
        },
      ]}
      finalCta={{
        title: "Scope a wastewater plant for your site.",
        description:
          "Wastewater plants are project-scoped. Submit a project assessment and we will confirm flows, process and indicative budget.",
        primary: { label: "Project Assessment", href: "/project-assessment" },
        secondary: { label: "Contact LIVWater", href: "/contact" },
      }}
    />
  );
}
