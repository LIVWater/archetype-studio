import Image from "next/image";
import { partners } from "@/lib/assets";
import { cn } from "@/lib/utils";

/**
 * Trust strip showing approved LIVWater partner logos.
 * Renders the logos on a muted, monochrome surface — they're full-colour on
 * white originally, so we layer them on a soft glass panel and reduce their
 * intensity slightly to fit the dark editorial aesthetic.
 */
export function PartnerStrip({
  title = "Trusted technology and service partners",
  inset = false,
  className,
}: {
  title?: string;
  inset?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("relative", className)}>
      {title && (
        <p className="text-center text-[11px] font-medium uppercase tracking-[0.22em] text-white/40">
          {title}
        </p>
      )}
      <div
        className={cn(
          "mt-6 grid grid-cols-3 items-center gap-x-6 gap-y-8 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9",
          inset &&
            "rounded-2xl border border-white/[0.06] bg-white/[0.03] px-8 py-8 backdrop-blur-xl",
        )}
      >
        {partners.map((p) => (
          <div
            key={p.name}
            className="flex items-center justify-center"
            title={p.name}
          >
            <div className="relative h-10 w-full max-w-[120px]">
              <Image
                src={p.src}
                alt={p.name}
                fill
                sizes="120px"
                className="object-contain opacity-70 transition hover:opacity-100"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
