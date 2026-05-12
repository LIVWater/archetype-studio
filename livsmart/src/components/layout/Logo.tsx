import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * LIVWater logo lockup.
 *
 * Reads brand assets from /public/brand/. Official PNGs are imported from
 * the LIVWater "Concept Design" library; SVG placeholders are kept as a
 * graceful fallback during development.
 *
 * Variants:
 *  - "mark"      : square mark (uses mark-1.png by default; swap below)
 *  - "wordmark"  : "LIVWATER" horizontal wordmark (Black.png / White.png)
 *  - "lockup"    : mark + "LIVSmart" display type (header default)
 *  - "stacked"   : mark + LIVWATER stacked with tagline
 *
 * `tone="light"` (default) is for the dark LIVSmart site.
 * `tone="dark"` is for light backgrounds.
 */
type Variant = "mark" | "wordmark" | "lockup" | "stacked";
type Tone = "light" | "dark";

interface LogoProps {
  className?: string;
  tone?: Tone;
  variant?: Variant;
  /** legacy alias — `inverted={true}` is the same as `tone="light"` */
  inverted?: boolean;
}

// Official PNGs imported from /Concept Design/Logos/LIVWATER/
// — Black.png   : black/navy wordmark for light backgrounds
// — White.png   : white wordmark for dark backgrounds
// — 1.png       : primary square mark
// — logo-stacked.png : stacked lockup with tagline
const WORDMARK_DARK = "/brand/wordmark.png";        // navy wordmark (use on light bg)
const WORDMARK_LIGHT = "/brand/wordmark-light.png"; // white wordmark (use on dark bg)
const MARK = "/brand/mark-1.png";                   // 500x500 official mark
const STACKED = "/brand/logo-stacked.png";          // stacked lockup with tagline

export function Logo({
  className,
  tone,
  inverted,
  variant = "lockup",
}: LogoProps) {
  const resolvedTone: Tone = tone ?? (inverted ? "light" : "light");

  if (variant === "mark") {
    return (
      <Link
        href="/"
        className={cn("inline-flex", className)}
        aria-label="LIVSmart by LIVWater"
      >
        <Image
          src={MARK}
          alt="LIVWater"
          width={40}
          height={40}
          priority
          className="h-9 w-9 object-contain"
        />
      </Link>
    );
  }

  if (variant === "wordmark") {
    return (
      <Link
        href="/"
        className={cn("inline-flex", className)}
        aria-label="LIVSmart by LIVWater"
      >
        <Image
          src={resolvedTone === "light" ? WORDMARK_LIGHT : WORDMARK_DARK}
          alt="LIVWater"
          width={1200}
          height={300}
          priority
          className="h-7 w-auto object-contain"
        />
      </Link>
    );
  }

  if (variant === "stacked") {
    return (
      <Link
        href="/"
        className={cn("inline-flex flex-col items-center", className)}
        aria-label="LIVSmart by LIVWater"
      >
        <Image
          src={STACKED}
          alt="LIVWater"
          width={500}
          height={500}
          priority
          className={cn(
            "h-24 w-auto object-contain",
            // The stacked lockup is navy-on-transparent. Invert for the dark site.
            resolvedTone === "light" && "brightness-0 invert",
          )}
        />
      </Link>
    );
  }

  // Default header lockup: mark + LIVSmart wordmark in display type
  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center gap-2.5", className)}
      aria-label="LIVSmart by LIVWater"
    >
      <Image
        src={MARK}
        alt=""
        width={36}
        height={36}
        priority
        className="h-9 w-9 object-contain"
      />
      <span
        className={cn(
          "font-display text-[20px] leading-none tracking-tight",
          resolvedTone === "light" ? "text-white" : "text-white",
        )}
      >
        LIV
        <span
          className={
            resolvedTone === "light" ? "text-accent-300" : "text-accent-500"
          }
        >
          Smart
        </span>
      </span>
    </Link>
  );
}
