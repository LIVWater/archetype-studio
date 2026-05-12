import type { Metadata } from "next";
import Link from "next/link";
import { Section, Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { ArticleCard } from "@/components/marketing/ArticleCard";
import { CTASection } from "@/components/marketing/CTASection";
import { resources } from "@/data/resources";
import { imagery } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Guides, case studies, datasheets and articles on smart water, treatment, wastewater, reuse and decentralised water infrastructure.",
};

const categories = [
  "All",
  "Guide",
  "Case Study",
  "Whitepaper",
  "Datasheet",
  "Article",
];

// Pair each resource slug with a relevant image from the imagery library
function imageForResource(slug: string): string | undefined {
  const map: Record<string, string> = {
    "household-water-security-guide": imagery.residential[0].src,
    "estate-water-audit-method": imagery.residential[1].src,
    "decentralised-wastewater-101": imagery.industrial[0].src,
    "case-study-coastal-estate": imagery.hospitality[0].src,
    "ultrasonic-meter-datasheet": imagery.commercial[0].src,
    "wastewater-feasibility-checklist": imagery.industrial[1].src,
    "reuse-economics": imagery.hospitality[1].src,
    "iot-platform-overview": imagery.commercial[1].src,
  };
  return map[slug];
}

export default function ResourcesPage({
  searchParams,
}: {
  searchParams?: { category?: string };
}) {
  const filter = searchParams?.category;
  const filtered =
    !filter || filter === "All"
      ? resources
      : resources.filter((r) => r.category === filter);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <>
      <Section surface="dark" className="!pt-24 !pb-12">
        <Container wide>
          <p className="eyebrow text-accent-300">Resources</p>
          <h1 className="heading-hero mt-3 max-w-3xl text-balance text-white">
            <span className="italic text-white/80">Guides</span>, case studies
            and technical content on water.
          </h1>
          <p className="lede mt-6 max-w-3xl text-pretty">
            Practical content for households, estates, businesses, industrial
            sites, agriculture, developers and partners. Some items are
            placeholders — content will populate over time.
          </p>
        </Container>
      </Section>

      <Section surface="light" className="!pt-4">
        <Container wide>
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((c) => {
              const active =
                filter === c || (!filter && c === "All");
              return (
                <Link
                  key={c}
                  href={c === "All" ? "/resources" : `/resources?category=${c}`}
                  className="inline-block"
                >
                  <Badge tone={active ? "aqua" : "outline"} className="px-3 py-1.5 text-[12px]">
                    {c}
                  </Badge>
                </Link>
              );
            })}
            <span className="ml-auto text-[11px] uppercase tracking-[0.18em] text-white/40">
              {filtered.length} {filtered.length === 1 ? "item" : "items"}
            </span>
          </div>

          {featured && (
            <div className="mt-10">
              <ArticleCard
                item={featured}
                variant="featured"
                imageSrc={imageForResource(featured.slug)}
              />
            </div>
          )}

          {rest.length > 0 && (
            <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((r) => (
                <ArticleCard
                  key={r.id}
                  item={r}
                  imageSrc={imageForResource(r.slug)}
                />
              ))}
            </div>
          )}
        </Container>
      </Section>

      <CTASection
        title="Looking for something specific?"
        description="Send us a topic, region or use case. We will route it to the right LIVWater team."
        primary={{ label: "Contact LIVWater", href: "/contact" }}
        secondary={{ label: "Request Quote", href: "/quote-request" }}
      />
    </>
  );
}
