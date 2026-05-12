import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { ShieldCheck, AlertCircle, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const badgeStyles = cva(
  "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium",
  {
    variants: {
      tone: {
        neutral: "bg-white/[0.03] text-white/80",
        aqua: "bg-accent-50 text-accent-300",
        white: "bg-white/10 text-white/90 border border-white/15",
        warn: "bg-amber-50 text-amber-700",
        success: "bg-emerald-50 text-emerald-700",
        outline: "border border-white/15 text-white/80",
      },
    },
    defaultVariants: { tone: "neutral" },
  },
);

interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeStyles> {}

export function Badge({ className, tone, children, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeStyles({ tone }), className)} {...props}>
      {children}
    </span>
  );
}

export function PlaceholderBadge({ children = "Placeholder content" }: { children?: React.ReactNode }) {
  return (
    <Badge tone="warn" className="font-normal">
      <AlertCircle className="h-3 w-3" />
      {children}
    </Badge>
  );
}

export function VerifiedBadge({ label = "LIVWater verified" }: { label?: string }) {
  return (
    <Badge tone="aqua">
      <ShieldCheck className="h-3 w-3" />
      {label}
    </Badge>
  );
}

export function FeaturedBadge() {
  return (
    <Badge tone="aqua">
      <Sparkles className="h-3 w-3" />
      Featured
    </Badge>
  );
}
