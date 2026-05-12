import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import { PlaceholderBadge } from "@/components/ui/Badge";
import type { ResourceItem } from "@/types";
import { cn } from "@/lib/utils";

/**
 * Editorial article / resource card.
 *
 * Variants:
 *  - "default"  : compact grid card with featured image
 *  - "featured" : larger hero card spanning more space (for top-of-page picks)
 */
export function ArticleCard({
  item,
  variant = "default",
  imageSrc,
  href,
}: {
  item: ResourceItem;
  variant?: "default" | "featured";
  /** Optional featured image (path under /public). Falls back to a category-coloured graphic. */
  imageSrc?: string;
  /** Override the link target (defaults to a placeholder /resources/[slug]). */
  href?: string;
}) {
  const accentByCategory: Record<ResourceItem["category"], string> = {
    Guide: "from-accent-500/30 via-accent-500/10 to-transparent",
    "Case Study": "from-emerald-500/25 via-emerald-500/10 to-transparent",
    Whitepaper: "from-navy-500/35 via-navy-500/10 to-transparent",
    Datasheet: "from-amber-500/25 via-amber-500/10 to-transparent",
    Article: "from-fuchsia-500/25 via-fuchsia-500/10 to-transparent",
  };
  const tint = accentByCategory[item.category];

  const isFeatured = variant === "featured";
  const target = href ?? `/resources/${item.slug}`;

  return (
    <Link
      href={target}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-white/15",
        isFeatured && "lg:flex-row lg:items-stretch",
      )}
    >
      {/* Featured image */}
      <div
        className={cn(
          "relative overflow-hidden",
          isFeatured
            ? "aspect-[16/10] lg:aspect-auto lg:w-1/2 lg:min-h-[320px]"
            : "aspect-[16/9]",
        )}
      >
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt=""
            fill
            sizes={
              isFeatured
                ? "(min-width: 1024px) 50vw, 100vw"
                : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            }
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className={cn("absolute inset-0 bg-gradient-to-br", tint)} />
        )}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-navy-900/85 via-navy-900/30 to-transparent"
        />
        <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-navy-900/60 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/85 backdrop-blur">
          {item.category}
        </div>
      </div>

      {/* Body */}
      <div
        className={cn(
          "flex flex-1 flex-col p-6",
          isFeatured && "lg:p-10",
        )}
      >
        <h3
          className={cn(
            "font-display text-white text-balance",
            isFeatured ? "text-[28px] leading-[1.1] md:text-[32px]" : "text-[20px] leading-snug md:text-[22px]",
          )}
        >
          {item.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-white/65">
          {item.description}
        </p>
        <div className="mt-auto flex items-center justify-between pt-6 text-[11px] uppercase tracking-[0.18em] text-white/40">
          <span className="inline-flex items-center gap-1.5">
            {item.readTime ? (
              <>
                <Clock className="h-3 w-3" />
                {item.readTime} read
              </>
            ) : (
              <>Reference</>
            )}
          </span>
          <span className="inline-flex items-center gap-1 text-accent-300">
            Read <ArrowRight className="h-3 w-3 transition group-hover:translate-x-0.5" />
          </span>
        </div>
        {item.placeholder && (
          <div className="mt-3">
            <PlaceholderBadge>Placeholder content</PlaceholderBadge>
          </div>
        )}
      </div>
    </Link>
  );
}
