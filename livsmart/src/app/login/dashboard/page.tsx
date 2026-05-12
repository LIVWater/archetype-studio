import type { Metadata } from "next";
import { LoginPlaceholder } from "@/components/marketing/LoginPlaceholder";

export const metadata: Metadata = {
  title: "Dashboard Login",
  description: "LIVSmart customer, site, operations and portfolio dashboard login.",
};

export default function DashboardLoginPage() {
  return (
    <LoginPlaceholder
      title="Dashboard login"
      description="Customer app, site dashboard, operations portal and portfolio dashboard access for clients and LIVWater operations."
      ctaLabel="Request Demo"
      ctaHref="/demo-request"
      ctaSecondary={{ label: "Back to App & Dashboards", href: "/app-dashboards" }}
    />
  );
}
