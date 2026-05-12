import type { Metadata } from "next";
import Link from "next/link";
import { Section, Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceCard } from "@/components/marketing/ServiceCard";
import { CTASection } from "@/components/marketing/CTASection";
import { Badge } from "@/components/ui/Badge";
import { services, serviceCategories } from "@/data/services";

export const metadata: Metadata = {
  title: "Services Shop",
  description:
    "Bookable, quote-based and provider-hosted water services — assessments, installation, maintenance, operations, lab testing and specialist providers.",
};

export default function ServicesShopPage({
  searchParams,
}: {
  searchParams?: { category?: string };
}) {
  const categoryFilter = searchParams?.category;
  const filtered = categoryFilter
    ? services.filter((s) => s.category === categoryFilter)
    : services;

  return (
    <>
      <Section surface="dark" className="!py-20">
        <Container wide>
          <p className="eyebrow text-accent-300">Services shop</p>
          <h1 className="heading-hero mt-3 text-white text-balance max-w-3xl">
            A professional services marketplace for water and wastewater.
          </h1>
          <p className="lede mt-5 max-w-3xl text-pretty">
            Assessments, installation, maintenance, operations and lab services.
            Delivered by LIVWater and verified third-party providers — under
            structured terms, response times and SLAs.
          </p>
        </Container>
      </Section>

      <Section surface="light">
        <Container wide>
          <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
            <aside className="space-y-8">
              <div>
                <p className="eyebrow">Categories</p>
                <div className="mt-3 flex flex-col gap-1">
                  <Link
                    href="/services-shop"
                    className={
                      !categoryFilter
                        ? "rounded-md bg-navy-900 px-3 py-2 text-sm text-white"
                        : "rounded-md px-3 py-2 text-sm text-white/80 hover:bg-white/[0.03]"
                    }
                  >
                    All services
                  </Link>
                  {serviceCategories.map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/services-shop?category=${encodeURIComponent(cat.name)}`}
                      className={
                        categoryFilter === cat.name
                          ? "rounded-md bg-navy-900 px-3 py-2 text-sm text-white"
                          : "rounded-md px-3 py-2 text-sm text-white/80 hover:bg-white/[0.03]"
                      }
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <p className="eyebrow">Delivered by</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  <Badge tone="aqua">LIVWater</Badge>
                  <Badge tone="outline">Approved Provider</Badge>
                  <Badge tone="outline">Partner</Badge>
                </div>
                <p className="mt-3 text-xs text-white/55">
                  Provider listings are not public until approved by LIVWater.
                </p>
              </div>
            </aside>
            <div>
              <div className="mb-6 flex items-center justify-between text-xs text-white/55">
                <p>Showing {filtered.length} services</p>
                {categoryFilter && (
                  <Link href="/services-shop" className="text-accent-300 hover:text-accent-200">
                    Clear filter
                  </Link>
                )}
              </div>
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {filtered.map((s) => (
                  <ServiceCard key={s.id} service={s} />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section surface="muted">
        <Container wide>
          <SectionHeader
            eyebrow="Service categories"
            title="From discovery to lifecycle operations."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {serviceCategories.map((cat) => (
              <div key={cat.id} className="card-surface p-6">
                <h3 className="heading-card text-white">{cat.name}</h3>
                <p className="mt-2 text-sm text-white/65">{cat.description}</p>
                <ul className="mt-3 grid grid-cols-2 gap-x-3 gap-y-1.5 text-xs text-white/80">
                  {cat.services.map((s) => (
                    <li key={s}>· {s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        title="Need a service that isn't listed?"
        description="LIVWater regularly scopes bespoke services for estates, projects, industrial sites and large agriculture operations."
        primary={{ label: "Request Quote", href: "/quote-request" }}
        secondary={{ label: "Contact LIVWater", href: "/contact" }}
      />
    </>
  );
}
