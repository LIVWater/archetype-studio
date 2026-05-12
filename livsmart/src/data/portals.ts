import type { PortalFeature } from "@/types";

export const portals: PortalFeature[] = [
  {
    id: "portal-customer",
    title: "Customer App",
    userType: "Household & tenant users",
    description:
      "Mobile-first visibility for households, tenants and unit owners — usage, alerts, account information and service requests.",
    featureList: [
      "Usage visibility & history",
      "Leak & abnormal-use alerts",
      "Account & billing placeholder",
      "Service & maintenance requests",
      "Family / unit user management",
    ],
    cta: { label: "Request Demo", href: "/demo-request" },
  },
  {
    id: "portal-site",
    title: "Site Dashboard",
    userType: "Estate, facility & property managers",
    description:
      "Site-level view across bulk and sub-meters, zones, leaks, pressures, tanks and maintenance history.",
    featureList: [
      "Bulk & sub-meter data",
      "Consumption by zone",
      "Leak & event log",
      "Pressure & flow trends",
      "Tank level monitoring",
      "Downloadable reports",
    ],
    cta: { label: "Explore Dashboards", href: "/app-dashboards" },
  },
  {
    id: "portal-operations",
    title: "Operations Portal",
    userType: "Technicians, operators & service teams",
    description:
      "Operational tooling for technicians and operators — tasks, alerts, maintenance records and system performance.",
    featureList: [
      "Technician tasks & dispatch",
      "Alert triage & escalation",
      "Maintenance records",
      "Service logs",
      "Sensor & system performance",
      "Incident response workflows",
    ],
    cta: { label: "Request Demo", href: "/demo-request" },
  },
  {
    id: "portal-portfolio",
    title: "Portfolio Dashboard",
    userType: "Asset owners, developers & operators",
    description:
      "Multi-site portfolio view — performance trends, comparative metrics, project-level visibility and asset reporting.",
    featureList: [
      "Multi-site overview",
      "Consumption trends",
      "Comparative performance",
      "Asset reporting",
      "Project-level visibility",
    ],
    cta: { label: "Request Demo", href: "/demo-request" },
  },
  {
    id: "portal-provider",
    title: "Provider Portal",
    userType: "Approved service providers",
    description:
      "Provider tools for job allocation, quotes, service history and verification status.",
    featureList: [
      "Job allocation placeholder",
      "Quote requests",
      "Service history",
      "Documentation & uploads",
      "Verification status",
    ],
    cta: { label: "Become a Provider", href: "/become-a-provider" },
  },
  {
    id: "portal-affiliate",
    title: "Affiliate Portal",
    userType: "Affiliate & referral partners",
    description:
      "Affiliate tools for lead submission, referral tracking, opportunity status and partner resources.",
    featureList: [
      "Lead submission",
      "Referral tracking placeholder",
      "Opportunity status",
      "Commission tracking placeholder",
      "Partner resources",
    ],
    cta: { label: "Apply as Affiliate", href: "/affiliate-application" },
  },
  {
    id: "portal-admin",
    title: "Admin Marketplace Dashboard",
    userType: "LIVWater operations",
    description:
      "Internal admin layer for managing products, services, providers, affiliates, quotes and project assessments.",
    featureList: [
      "Products & services management",
      "Provider & affiliate management",
      "Quotes & project assessments",
      "Technology partners",
      "Content management placeholder",
    ],
    cta: { label: "Internal access", href: "/login/dashboard" },
  },
];
