import type { Metadata } from "next";
import { Montserrat, Fraunces } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartProvider } from "@/components/commerce/CartProvider";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://livsmart.example.com",
  ),
  title: {
    default:
      "LIVSmart — Water marketplace, smart monitoring and decentralised infrastructure",
    template: "%s · LIVSmart",
  },
  description:
    "LIVSmart is LIVWater's digital marketplace and management platform for water products, treatment systems, smart monitoring, turnkey services, verified service providers, app access, dashboards, affiliate partners, and decentralised water infrastructure.",
  keywords: [
    "smart water metering",
    "water management app",
    "water leak detection",
    "water treatment systems",
    "wastewater treatment",
    "water reuse",
    "decentralised water infrastructure",
    "Water-as-a-Service",
    "water service providers",
    "water technology marketplace",
  ],
  openGraph: {
    type: "website",
    siteName: "LIVSmart",
    title: "LIVSmart — The digital layer of LIVWater",
    description:
      "Marketplace, services, treatment systems, dashboards and decentralised water infrastructure — in one platform.",
  },
  twitter: {
    card: "summary_large_image",
    title: "LIVSmart — The digital layer of LIVWater",
    description:
      "Marketplace, services, treatment systems, dashboards and decentralised water infrastructure.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${fraunces.variable} dark`}
    >
      <body className="min-h-screen bg-navy-900 text-foreground">
        <CartProvider>
          <Header />
          <main className="relative min-h-[60vh]">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
