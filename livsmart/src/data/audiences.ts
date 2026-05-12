import type { Scale } from "@/types";

export type AudiencePath = {
  id: string;
  label: string;
  short: string;
  description: string;
  recommendedProducts: string[];
  recommendedServices: string[];
  recommendedPackages: string[];
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
};

export const audiencePaths: AudiencePath[] = [
  {
    id: "homeowner",
    label: "I am a homeowner",
    short: "Household",
    description:
      "Continuity, water quality, leak detection and a clear app view of usage.",
    recommendedProducts: [
      "LIVSmart Leak Detection Kit",
      "Whole-House Filtration",
      "Tank Level Sensor",
      "Water Testing Kit",
    ],
    recommendedServices: ["Water Security Assessment", "Drinking Water Testing"],
    recommendedPackages: ["Household Water Security Starter"],
    ctaPrimary: { label: "Explore Household Solutions", href: "/solutions/household" },
    ctaSecondary: { label: "Build My Solution", href: "/solutions" },
  },
  {
    id: "estate",
    label: "I manage an estate",
    short: "Estate",
    description:
      "Bulk + sub-metering, leak control, backup supply, wastewater treatment and reuse with one dashboard.",
    recommendedProducts: [
      "Ultrasonic Bulk Meter",
      "Tank Level Sensor",
      "LIVSupply Containerised Plant",
      "LIVWaste Package Plant",
    ],
    recommendedServices: [
      "Estate Water Audit",
      "Smart Meter Installation",
      "Monthly Maintenance",
    ],
    recommendedPackages: [
      "Estate Water Management Package",
      "Smart Metering & Leak Detection Kit",
    ],
    ctaPrimary: { label: "Explore Estate Solutions", href: "/solutions/estates" },
    ctaSecondary: { label: "Request Project Assessment", href: "/project-assessment" },
  },
  {
    id: "business",
    label: "I run a business",
    short: "Commercial",
    description:
      "Continuity, tenant-level metering, water cost visibility and compliance support.",
    recommendedProducts: [
      "Ultrasonic Bulk Meter",
      "Smart Valves",
      "Dashboard Access Plan",
    ],
    recommendedServices: ["Commercial Water Audit", "Off-site Monitoring"],
    recommendedPackages: ["Commercial Water Control Package"],
    ctaPrimary: { label: "Explore Commercial Solutions", href: "/solutions/commercial" },
    ctaSecondary: { label: "Request Quote", href: "/quote-request" },
  },
  {
    id: "industrial",
    label: "I manage an industrial site",
    short: "Industrial",
    description:
      "Process water reliability, high-volume monitoring, wastewater treatment, reuse and compliance reporting.",
    recommendedProducts: [
      "Industrial Sensors",
      "Process Water Monitoring",
      "LIVWaste Package Plant",
    ],
    recommendedServices: [
      "Industrial Water Audit",
      "Compliance Reporting",
      "On-site Operator",
    ],
    recommendedPackages: ["Industrial Monitoring & Reporting Package"],
    ctaPrimary: { label: "Explore Industrial Solutions", href: "/solutions/industrial" },
    ctaSecondary: { label: "Request Project Assessment", href: "/project-assessment" },
  },
  {
    id: "agriculture",
    label: "I operate a farm or agri facility",
    short: "Agriculture",
    description:
      "Borehole and source water visibility, irrigation monitoring and off-grid systems.",
    recommendedProducts: [
      "LIVSupply Borehole System",
      "Flow Sensor",
      "Tank Level Sensor",
      "Dashboard Access Plan",
    ],
    recommendedServices: ["Borehole Feasibility", "Borehole Pump Installation"],
    recommendedPackages: ["Borehole Monitoring Package"],
    ctaPrimary: { label: "Explore Agriculture Solutions", href: "/solutions/agriculture" },
    ctaSecondary: { label: "Request Quote", href: "/quote-request" },
  },
  {
    id: "developer",
    label: "I am planning a development",
    short: "Developer",
    description:
      "Decentralised water infrastructure across supply, wastewater, reuse and dashboards — with project finance pathways.",
    recommendedProducts: [
      "LIVSupply Containerised Plant",
      "LIVWaste Package Plant",
      "LIVReuse Systems",
    ],
    recommendedServices: [
      "Wastewater Feasibility",
      "Estate Water Audit",
      "On-site Operator",
    ],
    recommendedPackages: ["Full Decentralised Water Infrastructure Package"],
    ctaPrimary: { label: "Developers & Projects", href: "/solutions/developers" },
    ctaSecondary: { label: "Request Project Assessment", href: "/project-assessment" },
  },
  {
    id: "wastewater",
    label: "I need wastewater treatment",
    short: "Wastewater",
    description:
      "Decentralised wastewater treatment, sludge handling, effluent monitoring and reuse-ready outputs.",
    recommendedProducts: [
      "LIVWaste Package Plant",
      "Engineered Wetland",
      "Effluent Monitoring",
    ],
    recommendedServices: ["Wastewater Feasibility", "On-site Operator"],
    recommendedPackages: ["Wastewater Treatment Package"],
    ctaPrimary: { label: "LIVWaste overview", href: "/livwaste" },
    ctaSecondary: { label: "Request Project Assessment", href: "/project-assessment" },
  },
  {
    id: "reuse",
    label: "I need water reuse",
    short: "Reuse",
    description:
      "Greywater, treated effluent and closed-loop reuse for irrigation, flushing and process water.",
    recommendedProducts: [
      "LIVReuse Greywater System",
      "Reuse Storage Tanks",
      "Reuse Monitoring",
    ],
    recommendedServices: ["Reuse Feasibility", "Installation"],
    recommendedPackages: ["Water Reuse Package"],
    ctaPrimary: { label: "LIVReuse overview", href: "/livreuse" },
    ctaSecondary: { label: "Request Quote", href: "/quote-request" },
  },
  {
    id: "monitoring",
    label: "I need smart monitoring",
    short: "Monitoring",
    description:
      "Metering, sensors and dashboards for visibility on usage, leaks, pressures and tanks.",
    recommendedProducts: [
      "Ultrasonic Bulk Meter",
      "Pressure Sensor",
      "Tank Level Sensor",
      "Dashboard Access Plan",
    ],
    recommendedServices: ["Smart Meter Installation", "Off-site Monitoring"],
    recommendedPackages: ["Smart Metering & Leak Detection Kit"],
    ctaPrimary: { label: "App & Dashboards", href: "/app-dashboards" },
    ctaSecondary: { label: "Request Demo", href: "/demo-request" },
  },
  {
    id: "provider",
    label: "I am a service provider",
    short: "Provider",
    description:
      "Join LIVWater's verified network of installers, lab partners, consultants and operations partners.",
    recommendedProducts: [],
    recommendedServices: ["Provider onboarding"],
    recommendedPackages: [],
    ctaPrimary: { label: "Become a Provider", href: "/become-a-provider" },
    ctaSecondary: { label: "Provider Login", href: "/login/provider" },
  },
  {
    id: "affiliate",
    label: "I am an affiliate or partner",
    short: "Affiliate",
    description:
      "Refer clients, register opportunities and build a partner business with LIVWater.",
    recommendedProducts: [],
    recommendedServices: ["Affiliate onboarding"],
    recommendedPackages: [],
    ctaPrimary: { label: "Affiliate Network", href: "/affiliate-network" },
    ctaSecondary: { label: "Apply as Affiliate", href: "/affiliate-application" },
  },
];

export const solutionAudiences: {
  slug: string;
  scale: Scale;
  title: string;
  intro: string;
  focusAreas: string[];
}[] = [
  {
    slug: "household",
    scale: "household",
    title: "Households",
    intro:
      "Continuity, water quality, leak detection and a clear digital view of household water.",
    focusAreas: [
      "Backup water",
      "Filtration",
      "Leak detection",
      "Smart metering",
      "Borehole filtration",
      "Water quality",
      "Simple maintenance",
      "Direct purchase & quote options",
    ],
  },
  {
    slug: "estates",
    scale: "estate",
    title: "Estates & residential communities",
    intro:
      "Bulk and sub-metering, leak detection, backup supply, decentralised wastewater treatment and reuse with one dashboard.",
    focusAreas: [
      "Bulk metering",
      "Sub-metering",
      "Leak detection",
      "Dashboards",
      "Borehole systems",
      "Backup supply",
      "Wastewater treatment",
      "Reuse",
      "Billing data",
      "Maintenance & reporting",
    ],
  },
  {
    slug: "commercial",
    scale: "commercial",
    title: "Commercial properties",
    intro:
      "Continuity, tenant-level metering, treatment and compliance support for offices, retail and mixed-use sites.",
    focusAreas: [
      "Continuity",
      "Water cost visibility",
      "Tenant / unit-level metering",
      "Water treatment",
      "Compliance support",
      "Maintenance",
      "Dashboards",
    ],
  },
  {
    slug: "industrial",
    scale: "industrial",
    title: "Industrial sites",
    intro:
      "Process water reliability, high-volume monitoring, wastewater treatment, reuse and compliance reporting.",
    focusAreas: [
      "Process reliability",
      "High-volume monitoring",
      "Wastewater treatment",
      "Reuse",
      "Compliance reporting",
      "Sensor integration",
      "Service plans",
    ],
  },
  {
    slug: "agriculture",
    scale: "agriculture",
    title: "Agriculture",
    intro:
      "Borehole and source water, irrigation monitoring, tank visibility, treatment, reuse and off-grid systems.",
    focusAreas: [
      "Borehole & source water",
      "Irrigation monitoring",
      "Tank & pump visibility",
      "Treatment",
      "Reuse",
      "Off-grid systems",
      "Rural connectivity",
    ],
  },
  {
    slug: "developers",
    scale: "project",
    title: "Developers & large projects",
    intro:
      "Decentralised water infrastructure across supply, wastewater, reuse and dashboards — with project finance pathways subject to qualification.",
    focusAreas: [
      "Decentralised infrastructure",
      "LIVSupply",
      "LIVWaste",
      "LIVReuse",
      "Water-as-a-Service",
      "Owner-operator structures",
      "Lifecycle delivery",
      "App & dashboard layer",
      "Project finance pathways",
      "Portfolio dashboards",
    ],
  },
];
