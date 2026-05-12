import type { Metadata } from "next";
import { Section, Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProductCard } from "@/components/marketing/ProductCard";
import { Badge } from "@/components/ui/Badge";
import { products, productCategories } from "@/data/products";
import type { Scale } from "@/types";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Water products — smart metering, filtration, sensors, household water, LIVSupply, LIVWaste and LIVReuse systems.",
};

export default function ProductsPage({
  searchParams,
}: {
  searchParams?: { category?: string; scale?: string };
}) {
  const categoryFilter = searchParams?.category;
  const scaleFilter = searchParams?.scale;
  const filtered = products.filter((p) => {
    if (categoryFilter && p.category !== categoryFilter) return false;
    if (scaleFilter && !p.scale.includes(scaleFilter as Scale)) return false;
    return true;
  });

  return (
    <>
      <Section surface="dark" className="!py-20">
        <Container wide>
          <p className="eyebrow text-accent-300">Products</p>
          <h1 className="heading-hero mt-3 text-white text-balance max-w-3xl">
            Smart metering, filtration, sensors and treatment systems.
          </h1>
          <p className="lede mt-5 max-w-2xl text-pretty">
            Direct-purchase devices, quote-based systems and project-scoped
            infrastructure — all part of one digital water stack.
          </p>
        </Container>
      </Section>

      <Section surface="light" className="!pt-12">
        <Container wide>
          <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
            <aside className="space-y-8">
              <div>
                <p className="eyebrow">Filter · Category</p>
                <div className="mt-3 flex flex-col gap-1">
                  <Link
                    href="/products"
                    className={
                      !categoryFilter
                        ? "rounded-md bg-navy-900 px-3 py-2 text-sm text-white"
                        : "rounded-md px-3 py-2 text-sm text-white/80 hover:bg-white/[0.03]"
                    }
                  >
                    All categories
                  </Link>
                  {productCategories.map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/products?category=${encodeURIComponent(cat.name)}`}
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
                <p className="eyebrow">Filter · Scale</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {(["household", "estate", "commercial", "industrial", "agriculture", "project"] as const).map((s) => (
                    <Link
                      key={s}
                      href={`/products?${categoryFilter ? `category=${encodeURIComponent(categoryFilter)}&` : ""}scale=${s}`}
                    >
                      <Badge tone={scaleFilter === s ? "aqua" : "outline"}>
                        {s}
                      </Badge>
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <p className="eyebrow">Buying modes</p>
                <ul className="mt-3 space-y-1.5 text-xs text-white/65">
                  <li>· Buy Now — direct purchase</li>
                  <li>· Request Quote — sized systems</li>
                  <li>· Project Assessment — infrastructure</li>
                </ul>
              </div>
            </aside>
            <div>
              <div className="mb-6 flex items-center justify-between text-xs text-white/55">
                <p>
                  Showing {filtered.length} of {products.length} products
                </p>
                {(categoryFilter || scaleFilter) && (
                  <Link href="/products" className="text-accent-300 hover:text-accent-200">
                    Clear filters
                  </Link>
                )}
              </div>
              {filtered.length === 0 ? (
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center text-sm text-white/65">
                  No products match this filter combination yet. Try a different
                  category or scale, or <Link href="/quote-request" className="text-accent-300">request a quote</Link>.
                </div>
              ) : (
                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {filtered.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
