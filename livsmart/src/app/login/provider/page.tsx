import type { Metadata } from "next";
import { LoginPlaceholder } from "@/components/marketing/LoginPlaceholder";

export const metadata: Metadata = {
  title: "Provider Login",
  description: "LIVSmart provider portal login for approved third-party service providers.",
};

export default function ProviderLoginPage() {
  return (
    <LoginPlaceholder
      title="Provider portal"
      description="Approved provider access for jobs, quote requests, service history, documentation and verification status."
      ctaLabel="Become a Provider"
      ctaHref="/become-a-provider"
      ctaSecondary={{ label: "Find a Provider", href: "/service-providers" }}
    />
  );
}
