import type { AffiliateType } from "@/types";

export type AffiliateTypeInfo = {
  id: AffiliateType;
  name: string;
  description: string;
  examples: string[];
  cta: { label: string; href: string };
};

export const affiliateTypes: AffiliateTypeInfo[] = [
  {
    id: "referral_partner",
    name: "Referral Partner",
    description:
      "Send qualified leads to LIVWater — estates, businesses, agri operations, projects. Earn on successful conversions.",
    examples: [
      "Property professionals",
      "Estate managers",
      "Industry contacts",
    ],
    cta: { label: "Apply as Affiliate", href: "/affiliate-application" },
  },
  {
    id: "sales_representative",
    name: "Sales Representative",
    description:
      "Represent LIVWater products and services in a defined region with formal commercial backing.",
    examples: ["Regional reps", "Channel partners", "Outsourced sales teams"],
    cta: { label: "Apply as Affiliate", href: "/affiliate-application" },
  },
  {
    id: "installer_partner",
    name: "Installer Partner",
    description:
      "Approved installers for LIVSmart, LIVSupply, LIVWaste and LIVReuse products.",
    examples: ["Plumbers", "Electricians", "Mechanical installers"],
    cta: { label: "Become a Provider", href: "/become-a-provider" },
  },
  {
    id: "service_provider",
    name: "Service Provider",
    description:
      "Listed on the LIVWater Services Shop — assessments, maintenance, operations, lab testing and more.",
    examples: [
      "Hydrogeologists",
      "Lab partners",
      "Operations teams",
      "Environmental consultants",
    ],
    cta: { label: "Become a Provider", href: "/become-a-provider" },
  },
  {
    id: "technology_partner",
    name: "Technology Partner",
    description:
      "Bring new water treatment, monitoring or analytics technologies into the LIVWater ecosystem.",
    examples: [
      "OEMs",
      "Membrane manufacturers",
      "IoT device makers",
      "AI / analytics platforms",
    ],
    cta: { label: "Submit Technology", href: "/technology-partner-application" },
  },
  {
    id: "developer_partner",
    name: "Developer Partner",
    description:
      "Property developers and project owners working with LIVWater on decentralised water infrastructure.",
    examples: ["Estate developers", "Mixed-use projects", "Industrial parks"],
    cta: { label: "Request Project Assessment", href: "/project-assessment" },
  },
  {
    id: "consultant",
    name: "Professional Consultant",
    description:
      "Engineers, advisors and consultancies who integrate LIVWater into client work.",
    examples: [
      "Civil engineers",
      "Environmental consultants",
      "Project managers",
    ],
    cta: { label: "Apply as Affiliate", href: "/affiliate-application" },
  },
  {
    id: "project_introducer",
    name: "Strategic Project Introducer",
    description:
      "Senior introducers bringing large, strategic projects into the LIVWater pipeline.",
    examples: [
      "Family offices",
      "Infrastructure funds",
      "Industry intermediaries",
    ],
    cta: { label: "Contact LIVWater", href: "/contact" },
  },
];
