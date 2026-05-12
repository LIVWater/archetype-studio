import type { Metadata } from "next";
import { DivisionPage } from "@/components/marketing/DivisionPage";
import { products } from "@/data/products";
import { graphics, imagery } from "@/lib/assets";

export const metadata: Metadata = {
  title: "LIVSupply — decentralised water supply systems",
  description:
    "Borehole, surface and treated water systems for households, estates, commercial, agriculture and project-scale infrastructure.",
};

export default function LivSupplyPage() {
  return (
    <DivisionPage
      hero={{
        eyebrow: "LIVSupply",
        title: "Decentralised water supply systems for any scale.",
        description:
          "Borehole, surface and treated water systems sized from household to project scale — engineered, monitored and maintained as one stack.",
        primary: { label: "Request Quote", href: "/quote-request" },
        secondary: { label: "Project Assessment", href: "/project-assessment" },
        backgroundImage: imagery.agriculture[0].src,
      }}
      capabilities={[
        {
          title: "Source water systems",
          description: "Borehole, surface water intake and buffered raw storage.",
        },
        {
          title: "Treatment",
          description:
            "Filtration, UF, RO, UV, chlorination, ozone, iron & manganese removal, softening, demineralisation.",
        },
        {
          title: "Storage & pressure",
          description: "Tanks, pressure pumps, backup supply, solar & battery integration.",
        },
        {
          title: "Containerised & packaged",
          description: "Pre-engineered plants for rapid deployment to estates, lodges and projects.",
        },
        {
          title: "Smart monitoring",
          description: "LIVSmart sensors, dashboards and operations integration.",
        },
      ]}
      steps={[
        {
          title: "Feasibility",
          description:
            "Hydrogeological, water balance and source-water testing.",
        },
        {
          title: "Concept design",
          description:
            "Process selection, sizing and indicative budget.",
        },
        {
          title: "Build & deploy",
          description:
            "Installation, commissioning and dashboard onboarding.",
        },
        {
          title: "Operate",
          description: "Monitoring, maintenance, reporting and lifecycle care.",
        },
      ]}
      stepIcons={graphics.livSupplySteps}
      stepIconTone="invert"
      products={products.filter(
        (p) => p.division === "LIVSupply" || p.category === "LIVSupply Systems",
      )}
      systemHighlights={[
        {
          title: "Source water layer",
          items: [
            "Borehole pumping & monitoring",
            "Surface water intakes & screens",
            "Raw water buffer tanks",
            "Source water testing",
          ],
        },
        {
          title: "Treatment layer",
          items: [
            "Filtration (sand, cartridge, UF)",
            "Reverse osmosis & demineralisation",
            "Disinfection (UV, chlorine, ozone)",
            "Iron & manganese removal",
          ],
        },
        {
          title: "Distribution layer",
          items: [
            "Storage tanks & farms",
            "Pressure pump systems",
            "Backup supply",
            "Smart valves & telemetry",
          ],
        },
      ]}
      finalCta={{
        title: "Get decentralised supply scoped.",
        description:
          "Indicative pricing requires feasibility. Submit a request and we will scope the right system for your site.",
        primary: { label: "Request Quote", href: "/quote-request" },
        secondary: { label: "Project Assessment", href: "/project-assessment" },
      }}
    />
  );
}
