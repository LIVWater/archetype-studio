"use client";

import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonStyles = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-200 ring-focus disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-white text-navy-900 hover:bg-accent-100 shadow-[0_8px_30px_-12px_rgba(255,255,255,0.4)]",
        secondary:
          "bg-white/[0.06] text-white border border-white/15 hover:bg-white/[0.10] hover:border-white/25 backdrop-blur",
        outline:
          "border border-white/20 text-white hover:bg-white/[0.06] hover:border-white/35",
        ghost: "text-white/80 hover:bg-white/[0.06] hover:text-white",
        ghostLight: "text-white/70 hover:text-white hover:bg-white/[0.06]",
        dark: "bg-navy-700 text-white hover:bg-navy-600",
        accent:
          "bg-accent-500 text-navy-900 hover:bg-accent-400 shadow-[0_8px_30px_-12px_rgba(26,163,232,0.6)] font-semibold",
      },
      size: {
        sm: "h-9 px-4",
        md: "h-11 px-5",
        lg: "h-12 px-6 text-[15px]",
        xl: "h-14 px-8 text-base",
      },
      block: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      block: false,
    },
  },
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonStyles> & {
    href?: string;
    asChild?: boolean;
  };

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, block, href, children, ...props }, ref) => {
    const classes = cn(buttonStyles({ variant, size, block }), className);
    if (href) {
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }
    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  },
);
Button.displayName = "Button";
