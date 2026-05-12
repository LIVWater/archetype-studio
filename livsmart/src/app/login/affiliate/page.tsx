import type { Metadata } from "next";
import { LoginPlaceholder } from "@/components/marketing/LoginPlaceholder";

export const metadata: Metadata = {
  title: "Affiliate Login",
  description: "LIVSmart affiliate portal login for approved affiliate and referral partners.",
};

export default function AffiliateLoginPage() {
  return (
    <LoginPlaceholder
      title="Affiliate portal"
      description="Approved affiliate access for lead submission, referral tracking, opportunity status and resources."
      ctaLabel="Apply as Affiliate"
      ctaHref="/affiliate-application"
      ctaSecondary={{ label: "Affiliate Network", href: "/affiliate-network" }}
    />
  );
}
