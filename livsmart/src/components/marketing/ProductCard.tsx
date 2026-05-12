"use client";

import Link from "next/link";
import { ArrowRight, ShoppingCart, FileText, ClipboardList } from "lucide-react";
import type { Product } from "@/types";
import { Badge, FeaturedBadge, PlaceholderBadge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { priceLabel } from "@/lib/utils";
import { useCart } from "@/components/commerce/CartProvider";

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  const canBuyNow = product.buyingMode === "buy_now" && product.price != null;

  const ctaIcon =
    product.buyingMode === "buy_now" ? (
      <ShoppingCart className="h-3.5 w-3.5" />
    ) : product.buyingMode === "request_quote" ? (
      <FileText className="h-3.5 w-3.5" />
    ) : (
      <ClipboardList className="h-3.5 w-3.5" />
    );

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:-translate-y-0.5 hover:border-accent-400/50 hover:shadow-[0_24px_60px_-30px_rgba(26,163,232,0.2)]">
      <div className="relative aspect-[5/3] overflow-hidden bg-gradient-to-br from-navy-700/30 via-accent-500/10 to-navy-800">
        <div className="absolute inset-0 grid place-items-center">
          <span className="font-display text-[42px] tracking-tight text-white/25">
            {product.name.split(" ")[0]}
          </span>
        </div>
        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          {product.badge && (
            <Badge tone="aqua" className="bg-accent-50">
              {product.badge}
            </Badge>
          )}
          <Badge tone="outline">{product.division}</Badge>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs text-white/55">{product.category}</p>
        <h3 className="heading-card mt-1.5 text-white">
          <Link
            href={`/products/${product.slug}`}
            className="hover:text-accent-300"
          >
            {product.name}
          </Link>
        </h3>
        <p className="mt-2 text-sm text-white/65">{product.shortDescription}</p>
        <ul className="mt-4 space-y-1.5 text-xs text-white/65">
          {product.features.slice(0, 3).map((f) => (
            <li key={f} className="flex items-start gap-1.5">
              <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-accent-500" />
              {f}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
          <div>
            <p className="text-xs text-white/55">
              {priceLabel(product.priceType, product.price)}
            </p>
            <p className="text-[11px] text-white/40">
              {product.scale.slice(0, 3).join(" · ")}
            </p>
          </div>
          <Link
            href={`/products/${product.slug}`}
            className="inline-flex items-center gap-1 text-xs font-medium text-accent-300 hover:text-accent-200"
          >
            Details <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
        <div className="mt-4 flex gap-2">
          {canBuyNow ? (
            <Button
              size="sm"
              block
              onClick={() =>
                add({
                  productId: product.id,
                  name: product.name,
                  price: product.price ?? 0,
                  quantity: 1,
                  image: product.image,
                })
              }
            >
              {ctaIcon}
              Add to Cart
            </Button>
          ) : (
            <Button
              size="sm"
              block
              variant="secondary"
              href={
                product.buyingMode === "request_quote"
                  ? `/quote-request?product=${product.slug}`
                  : `/project-assessment?product=${product.slug}`
              }
            >
              {ctaIcon}
              {product.buyingMode === "request_quote"
                ? "Request Quote"
                : "Request Assessment"}
            </Button>
          )}
        </div>
        {product.placeholderNotice && (
          <div className="mt-3">
            <PlaceholderBadge>{product.placeholderNotice}</PlaceholderBadge>
          </div>
        )}
      </div>
    </div>
  );
}
