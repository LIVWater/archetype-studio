export type Division =
  | "LIVSmart"
  | "LIVSupply"
  | "LIVWaste"
  | "LIVReuse"
  | "Partner";

export type Scale =
  | "household"
  | "estate"
  | "commercial"
  | "industrial"
  | "agriculture"
  | "project";

export type BuyingMode = "buy_now" | "request_quote" | "project_assessment";

export type PriceType =
  | "fixed"
  | "from"
  | "quote_required"
  | "project_scoped"
  | "placeholder"
  | "sla"
  | "assessment_required";

export type ProviderStatus =
  | "draft"
  | "pending"
  | "approved"
  | "featured"
  | "suspended"
  | "archived";

export type AffiliateStatus =
  | "pending"
  | "approved"
  | "rejected"
  | "suspended";

export type AffiliateType =
  | "referral_partner"
  | "sales_representative"
  | "installer_partner"
  | "service_provider"
  | "technology_partner"
  | "developer_partner"
  | "consultant"
  | "project_introducer";

export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductFAQ {
  question: string;
  answer: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  subcategory?: string;
  division: Division;
  description: string;
  shortDescription: string;
  scale: Scale[];
  buyingMode: BuyingMode;
  price?: number;
  priceType: PriceType;
  image: string;
  features: string[];
  specifications: ProductSpec[];
  compatibleWithDashboard: boolean;
  installationRequired: boolean;
  maintenanceAvailable: boolean;
  addOns?: string[];
  recommendedPackages?: string[];
  faqs?: ProductFAQ[];
  placeholderNotice?: string;
  badge?: string;
}

export interface MarketplaceService {
  id: string;
  slug: string;
  name: string;
  category: string;
  providerId?: string;
  providedBy: "LIVWater" | "Approved Provider" | "Partner";
  description: string;
  suitableFor: Scale[];
  serviceArea: string[];
  priceType: PriceType;
  price?: number;
  requiresSiteVisit: boolean;
  requiresApproval: boolean;
  bookingEnabled: boolean;
  quoteEnabled: boolean;
  documentsRequired?: string[];
  deliverables: string[];
  exclusions?: string[];
  placeholderNotice?: string;
  responseTime?: string;
}

export interface SolutionPackage {
  id: string;
  slug: string;
  name: string;
  audience: Scale;
  description: string;
  includedProducts: string[];
  includedServices: string[];
  optionalAddOns?: string[];
  buyingMode: BuyingMode;
  cta: string;
  division: Division;
  placeholderNotice?: string;
  highlights?: string[];
  priceFrom?: number;
}

export interface Provider {
  id: string;
  name: string;
  slug: string;
  providerType: string;
  description: string;
  services: string[];
  productCategories: string[];
  regions: string[];
  certifications: string[];
  insuranceStatus: "current" | "pending" | "not_provided";
  verifiedStatus: ProviderStatus;
  rating?: number;
  reviewCount?: number;
  responseTime?: string;
  emergencyAvailable: boolean;
  documentsRequired?: string[];
  contactEmail?: string;
  website?: string;
  yearsExperience?: number;
  teamSize?: string;
  pricingModel?: string;
}

export interface Affiliate {
  id: string;
  name: string;
  company: string;
  affiliateType: AffiliateType;
  region: string;
  status: AffiliateStatus;
  referralCode?: string;
  commissionModel?: string;
  agreementAccepted: boolean;
  documentsUploaded: boolean;
}

export interface TechnologyPartner {
  id: string;
  name: string;
  slug: string;
  technologyCategory: string;
  description: string;
  regions: string[];
  representedByLIVWater: boolean;
  approvedForMarketplace: boolean;
  suitableApplications: string[];
  technicalDocuments?: string[];
  enquiryEnabled: boolean;
  status?: "pilot" | "production" | "evaluation";
}

export interface PortalFeature {
  id: string;
  title: string;
  userType: string;
  description: string;
  featureList: string[];
  screenshot?: string;
  cta: { label: string; href: string };
}

export interface QuoteRequest {
  id: string;
  enquiryType: string;
  customerType: string;
  productOrService: string;
  scale: Scale;
  location: string;
  message: string;
  status: "new" | "in_review" | "quoted" | "won" | "lost";
}

export interface ProjectAssessment {
  id: string;
  projectType: string;
  siteLocation: string;
  estimatedDemand?: string;
  sourceWaterType?: string;
  wastewaterRequirement?: boolean;
  reuseRequirement?: boolean;
  financingInterest?: boolean;
  dashboardRequirement?: boolean;
  status: "submitted" | "qualifying" | "scoping" | "proposal" | "closed";
}

export interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface ResourceItem {
  id: string;
  slug: string;
  title: string;
  category: "Guide" | "Case Study" | "Whitepaper" | "Datasheet" | "Article";
  description: string;
  readTime?: string;
  placeholder?: boolean;
}
