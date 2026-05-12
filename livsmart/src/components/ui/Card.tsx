import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({
  className,
  children,
  variant = "light",
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  variant?: "light" | "dark" | "ghost";
}) {
  return (
    <div
      className={cn(
        variant === "light" && "card-surface",
        variant === "dark" && "card-surface-dark",
        variant === "ghost" &&
          "rounded-2xl border border-white/10 bg-white/[0.02]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("p-6 pb-3", className)} {...props}>
      {children}
    </div>
  );
}

export function CardBody({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("px-6", className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("p-6 pt-3", className)} {...props}>
      {children}
    </div>
  );
}
