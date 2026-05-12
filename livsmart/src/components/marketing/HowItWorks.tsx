import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface HowItWorksStep {
  title: string;
  description: string;
  /** Optional path under /public to an icon (SVG or PNG). */
  icon?: string;
}

export function HowItWorks({
  steps,
  inverted = false,
  iconTone = "auto",
}: {
  steps: HowItWorksStep[];
  inverted?: boolean;
  /**
   * "auto" leaves the icon as-supplied. "invert" applies `brightness-0 invert`
   * so dark/navy icons read white on the dark surface.
   */
  iconTone?: "auto" | "invert";
}) {
  return (
    <ol className="grid gap-4 md:grid-cols-4">
      {steps.map((step, idx) => (
        <li
          key={step.title}
          className={cn(
            "relative rounded-2xl border p-6",
            inverted
              ? "border-white/10 bg-white/[0.04]"
              : "border-white/10 bg-white/[0.03]",
          )}
        >
          {step.icon ? (
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-500/10 ring-1 ring-accent-500/20">
              <Image
                src={step.icon}
                alt=""
                width={36}
                height={36}
                className={cn(
                  "h-9 w-9 object-contain",
                  iconTone === "invert" && "brightness-0 invert",
                )}
              />
            </div>
          ) : (
            <span
              className={cn(
                "font-display text-3xl",
                inverted ? "text-accent-300" : "text-accent-500",
              )}
            >
              0{idx + 1}
            </span>
          )}
          <p className="eyebrow mt-4">Step {String(idx + 1).padStart(2, "0")}</p>
          <h3 className="heading-card mt-2 text-white">{step.title}</h3>
          <p className="mt-2 text-sm text-white/65">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}

export function TrustBar({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[11px] uppercase tracking-[0.22em] text-white/45">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}
