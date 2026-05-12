import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Section, Container } from "@/components/ui/Container";
import { Badge, PlaceholderBadge, FeaturedBadge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/marketing/ProductCard";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/Accordion";
import { products } from "@/data/products";
import { priceLabel } from "@/lib/utils";
import { CheckCircle2, ShoppingCart, FileText, ClipboardList } from "lucide-react";
import { AddToCartButton } from "@/components/marketing/AddToCartButton";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return { title: "Product" };
  return {
    title: product.name,
    description: product.shortDescription,
  };
}

export default function ProductDetailPage({ params }: PageProps) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) notFound();
  const related = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 3);

  return (
    <>
      <Section surface="muted" className="!pt-12 !pb-10">
        <Container wide>
          <Link
            href="/products"
            className="text-xs text-white/65 hover:text-white"
          >
            ← Back to products
          </Link>
        </Container>
      </Section>
      <Section surface="light" className="!pt-0">
        <Container wide>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative aspect-[5/4] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-navy-700/30 via-accent-500/10 to-navy-800">
              <div className="absolute inset-0 grid place-items-center">
                <span className="font-display text-6xl tracking-tight text-white/25">
                  {product.name.split(" ")[0]}
                </span>
              </div>
              <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                {product.badge === "Featured" ? (
                  <FeaturedBadge />
                ) : product.badge ? (
                  <Badge tone="aqua">{product.badge}</Badge>
                ) : null}
                <Badge tone="outline">{product.division}</Badge>
              </div>
            </div>
            <div>
              <p className="eyebrow">{product.category}</p>
              <h1 className="heading-section mt-2 text-white text-balance">
                {product.name}
              </h1>
              <p className="lede-light mt-4 text-pretty">{product.description}</p>
              <div className="mt-6 flex flex-wrap items-center gap-3 border-y border-white/10 py-4">
                <div>
                  <p className="text-xs text-white/55">Pricing</p>
                  <p className="text-lg font-semibold text-white">
                    {priceLabel(product.priceType, product.price)}
                  </p>
                </div>
                <div className="ml-6">
                  <p className="text-xs text-white/55">Scale</p>
                  <p className="text-sm text-white/95">{product.scale.join(" · ")}</p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {product.buyingMode === "buy_now" && product.price != null ? (
                  <AddToCartButton
                    productId={product.id}
                    name={product.name}
                    price={product.price}
                    image={product.image}
                  />
                ) : product.buyingMode === "request_quote" ? (
                  <Button href={`/quote-request?product=${product.slug}`} size="lg">
                    <FileText className="h-4 w-4" />
                    Request quote
                  </Button>
                ) : (
                  <Button href={`/project-assessment?product=${product.slug}`} size="lg">
                    <ClipboardList className="h-4 w-4" />
                    Project assessment
                  </Button>
                )}
                <Button href="/contact" variant="secondary" size="lg">
                  Talk to LIVWater
                </Button>
              </div>
              <ul className="mt-6 grid gap-2 text-sm text-white/80 sm:grid-cols-2">
                {product.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
                    {f}
                  </li>
                ))}
              </ul>
              {product.placeholderNotice && (
                <div className="mt-5">
                  <PlaceholderBadge>{product.placeholderNotice}</PlaceholderBadge>
                </div>
              )}
            </div>
          </div>
        </Container>
      </Section>

      <Section surface="muted" className="!py-16">
        <Container wide>
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <h2 className="heading-card text-white">Specifications</h2>
              <dl className="mt-5 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.03]">
                {product.specifications.map((s) => (
                  <div
                    key={s.label}
                    className="grid grid-cols-2 gap-4 px-5 py-3 text-sm"
                  >
                    <dt className="text-white/55">{s.label}</dt>
                    <dd className="text-right text-white">{s.value}</dd>
                  </div>
                ))}
                <div className="grid grid-cols-2 gap-4 px-5 py-3 text-sm">
                  <dt className="text-white/55">Dashboard compatible</dt>
                  <dd className="text-right text-white">
                    {product.compatibleWithDashboard ? "Yes" : "No"}
                  </dd>
                </div>
                <div className="grid grid-cols-2 gap-4 px-5 py-3 text-sm">
                  <dt className="text-white/55">Installation</dt>
                  <dd className="text-right text-white">
                    {product.installationRequired ? "Required / recommended" : "Self-install"}
                  </dd>
                </div>
                <div className="grid grid-cols-2 gap-4 px-5 py-3 text-sm">
                  <dt className="text-white/55">Maintenance plans</dt>
                  <dd className="text-right text-white">
                    {product.maintenanceAvailable ? "Available" : "Not applicable"}
                  </dd>
                </div>
              </dl>
            </div>
            <div>
              <h2 className="heading-card text-white">Bundles & add-ons</h2>
              <ul className="mt-5 space-y-3 text-sm text-white/80">
                {(product.addOns?.length ? product.addOns : ["Dashboard access plan", "Installation service", "Annual maintenance"]).map((a) => (
                  <li key={a} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                    {a}
                  </li>
                ))}
              </ul>
              {product.recommendedPackages?.length ? (
                <>
                  <h3 className="mt-8 heading-card text-white">
                    Recommended packages
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm">
                    {product.recommendedPackages.map((p) => (
                      <li key={p}>
                        <Link href="/solutions" className="text-accent-300 hover:text-accent-200">
                          {p} →
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}
            </div>
          </div>
        </Container>
      </Section>

      <Section surface="light">
        <Container wide>
          <h2 className="heading-card text-white">FAQs</h2>
          <Accordion type="single" collapsible className="mt-5 max-w-3xl">
            {(product.faqs ?? defaultFaqs).map((f, i) => (
              <AccordionItem key={i} value={`q-${i}`}>
                <AccordionTrigger>{f.question}</AccordionTrigger>
                <AccordionContent>{f.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Container>
      </Section>

      {related.length > 0 && (
        <Section surface="muted">
          <Container wide>
            <h2 className="heading-section text-white">Related products</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </Container>
        </Section>
      )}
    </>
  );
}

const defaultFaqs = [
  {
    question: "Does this require installation?",
    answer:
      "Most LIVSmart hardware is best installed by an approved provider. Dispatch is available through the Services Shop.",
  },
  {
    question: "Can it connect to the LIVSmart dashboard?",
    answer:
      "Yes — dashboard-compatible products stream data into the Site, Operations and Portfolio dashboards.",
  },
  {
    question: "What is included in the price?",
    answer:
      "Indicative pricing. Final quotes include freight, installation, commissioning and applicable taxes.",
  },
];
