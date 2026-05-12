import type { Metadata } from "next";
import Link from "next/link";
import { Section, Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTASection } from "@/components/marketing/CTASection";
import { HowItWorks } from "@/components/marketing/HowItWorks";
import { Button } from "@/components/ui/Button";
import { affiliateTypes } from "@/data/affiliates";
import { ArrowRight, Award, BarChart3, ShieldCheck, Share2, Sparkles, Wallet } from "lucide-react";

export const metadata: Metadata = {
  title: "LIVWater Affiliate Network",
  description:
    "Join LIVWater's water infrastructure network — affiliate, referral, sales, installer, service provider, technology and project introducer partners.",
};

const features = [
  { icon: Share2, title: "Lead submission", description: "Submit qualified opportunities through the Affiliate Portal." },
  { icon: BarChart3, title: "Opportunity tracking", description: "Track quote status, project progress and conversion." },
  { icon: Wallet, title: "Commission tracking", description: "Visibility on commissions and payouts (placeholder)." },
  { icon: Award, title: "Training & resources", description: "LIVWater product, pricing and pitch resources for partners." },
  { icon: ShieldCheck, title: "Defined approval", description: "Partners are vetted before activation and listing." },
  { icon: Sparkles, title: "Co-marketing", description: "Co-branded content, events and pipeline plays." },
];

export default function AffiliateNetworkPage() {
  return (
    <>
      <Section surface="dark" className="!py-20">
        <Container wide>
          <p className="eyebrow text-accent-300">Affiliate network</p>
          <h1 className="heading-hero mt-3 text-white text-balance max-w-4xl">
            LIVWater Affiliate Network
          </h1>
          <p className="lede mt-5 max-w-3xl text-pretty">
            Join LIVWater&apos;s water infrastructure network and help connect
            clients, projects and communities to verified water products,
            services and decentralised water solutions.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="/affiliate-application" size="lg">
              Apply as Affiliate <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/login/affiliate" variant="outline" size="lg">
              Affiliate Login
            </Button>
          </div>
        </Container>
      </Section>

      <Section surface="light">
        <Container wide>
          <SectionHeader eyebrow="Partner types" title="Eight ways to partner with LIVWater." />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {affiliateTypes.map((t) => (
              <div key={t.id} className="card-surface p-6">
                <p className="eyebrow">{t.id.replace(/_/g, " ")}</p>
                <h3 className="heading-card mt-2 text-white">{t.name}</h3>
                <p className="mt-2 text-sm text-white/65">{t.description}</p>
                <ul className="mt-3 space-y-1 text-xs text-white/55">
                  {t.examples.map((e) => (
                    <li key={e}>· {e}</li>
                  ))}
                </ul>
                <Link
                  href={t.cta.href}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent-300 hover:text-accent-200"
                >
                  {t.cta.label} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section surface="muted">
        <Container wide>
          <SectionHeader eyebrow="The portal" title="What affiliates get inside LIVSmart." />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="card-surface p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-900 text-accent-300">
                  <f.icon className="h-4 w-4" />
                </div>
                <h3 className="heading-card mt-5 text-white">{f.title}</h3>
                <p className="mt-2 text-sm text-white/65">{f.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section surface="light">
        <Container wide>
          <SectionHeader eyebrow="How it works" title="From application to activation." />
          <div className="mt-10">
            <HowItWorks
              steps={[
                { title: "Apply", description: "Submit application with documents and references." },
                { title: "Review", description: "LIVWater reviews and approves." },
                { title: "Activate", description: "Referral code and portal access issued." },
                { title: "Earn", description: "Submit leads, track opportunities and commission." },
              ]}
            />
          </div>
        </Container>
      </Section>

      <CTASection
        title="Ready to partner with LIVWater?"
        description="Apply to the LIVWater Affiliate Network and we will respond within five business days."
        primary={{ label: "Apply as Affiliate", href: "/affiliate-application" }}
        secondary={{ label: "Talk to LIVWater", href: "/contact" }}
      />
    </>
  );
}
