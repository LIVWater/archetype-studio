import * as React from "react";
import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
  wide = false,
  mid = false,
}: {
  children: React.ReactNode;
  className?: string;
  wide?: boolean;
  mid?: boolean;
}) {
  return (
    <div
      className={cn(
        wide ? "container-wide" : mid ? "container-mid" : "container-narrow",
        className,
      )}
    >
      {children}
    </div>
  );
}

/**
 * All surfaces are now dark — only the elevation changes.
 *
 *  - "light"  → base navy (canvas)
 *  - "muted"  → very subtle elevated (for alternating sections)
 *  - "dark"   → base navy (same as light, kept for compatibility)
 *  - "darker" → slightly deeper black
 */
export function Section({
  children,
  className,
  surface = "light",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  surface?: "light" | "dark" | "darker" | "muted";
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-20 md:py-28",
        surface === "light" && "bg-navy-900 text-white",
        surface === "muted" &&
          "bg-gradient-to-b from-navy-900 via-[#02112a] to-navy-900 text-white",
        surface === "dark" && "bg-navy-900 text-white",
        surface === "darker" && "bg-[#000510] text-white",
        className,
      )}
    >
      {children}
    </section>
  );
}
