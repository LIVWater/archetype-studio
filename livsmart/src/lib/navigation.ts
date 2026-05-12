export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavGroup = {
  label: string;
  href?: string;
  links?: NavLink[];
};

export const primaryNav: NavGroup[] = [
  {
    label: "Marketplace",
    href: "/marketplace",
    links: [
      {
        label: "Marketplace overview",
        href: "/marketplace",
        description: "The full LIVWater ecosystem in one place.",
      },
      {
        label: "Products",
        href: "/products",
        description: "Filtration, metering, sensors, treatment hardware.",
      },
      {
        label: "Services Shop",
        href: "/services-shop",
        description: "Assessments, installation, maintenance, operations.",
      },
      {
        label: "Solution packages",
        href: "/solutions",
        description: "Curated bundles by audience and use case.",
      },
    ],
  },
  { label: "Products", href: "/products" },
  { label: "Services Shop", href: "/services-shop" },
  {
    label: "LIVSupply",
    href: "/livsupply",
    links: [
      { label: "LIVSupply overview", href: "/livsupply" },
      { label: "LIVWaste", href: "/livwaste" },
      { label: "LIVReuse", href: "/livreuse" },
    ],
  },
  { label: "LIVWaste", href: "/livwaste" },
  { label: "App & Dashboards", href: "/app-dashboards" },
  {
    label: "Service Providers",
    href: "/service-providers",
    links: [
      { label: "Find a provider", href: "/service-providers" },
      { label: "Become a Provider", href: "/become-a-provider" },
    ],
  },
  {
    label: "Affiliate Network",
    href: "/affiliate-network",
    links: [
      { label: "Affiliate Network", href: "/affiliate-network" },
      { label: "Apply as Affiliate", href: "/affiliate-application" },
      { label: "New Water Technology", href: "/new-water-technology" },
    ],
  },
  { label: "Water-as-a-Service", href: "/water-as-a-service" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export const utilityNav: NavLink[] = [
  { label: "Build My Solution", href: "/solutions" },
  { label: "Request Quote", href: "/quote-request" },
  { label: "Project Assessment", href: "/project-assessment" },
  { label: "Request Demo", href: "/demo-request" },
];

export const accountNav: NavLink[] = [
  { label: "Dashboard Login", href: "/login/dashboard" },
  { label: "Provider Login", href: "/login/provider" },
  { label: "Affiliate Login", href: "/login/affiliate" },
];

export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: "Marketplace",
    links: [
      { label: "Marketplace overview", href: "/marketplace" },
      { label: "Products", href: "/products" },
      { label: "Services Shop", href: "/services-shop" },
      { label: "Solution packages", href: "/solutions" },
      { label: "New Water Technology", href: "/new-water-technology" },
    ],
  },
  {
    title: "Divisions",
    links: [
      { label: "LIVSupply", href: "/livsupply" },
      { label: "LIVWaste", href: "/livwaste" },
      { label: "LIVReuse", href: "/livreuse" },
      { label: "App & Dashboards", href: "/app-dashboards" },
      { label: "Water-as-a-Service", href: "/water-as-a-service" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Households", href: "/solutions/household" },
      { label: "Estates", href: "/solutions/estates" },
      { label: "Commercial", href: "/solutions/commercial" },
      { label: "Industrial", href: "/solutions/industrial" },
      { label: "Agriculture", href: "/solutions/agriculture" },
      { label: "Developers & Projects", href: "/solutions/developers" },
    ],
  },
  {
    title: "Network",
    links: [
      { label: "Service Providers", href: "/service-providers" },
      { label: "Become a Provider", href: "/become-a-provider" },
      { label: "Affiliate Network", href: "/affiliate-network" },
      { label: "Apply as Affiliate", href: "/affiliate-application" },
      { label: "Technology Partner", href: "/technology-partner-application" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "LIVSmart platform", href: "/livsmart" },
      { label: "Resources", href: "/resources" },
      { label: "Contact", href: "/contact" },
      { label: "Request Quote", href: "/quote-request" },
      { label: "Project Assessment", href: "/project-assessment" },
      { label: "Request Demo", href: "/demo-request" },
    ],
  },
];
