"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { audiencePaths } from "@/data/audiences";
import { imagery } from "@/lib/assets";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

/** Audience id → imagery folder slug */
const audienceImagery: Record<string, keyof typeof imagery> = {
  homeowner: "residential",
  estate: "residential",
  business: "commercial",
  industrial: "industrial",
  agriculture: "agriculture",
  developer: "industrial",
  wastewater: "industrial",
  reuse: "agriculture",
  monitoring: "commercial",
  provider: "hospitality",
  affiliate: "education",
};

export function AudienceSelector() {
  const [activeId, setActiveId] = React.useState(audiencePaths[0].id);
  const active = audiencePaths.find((p) => p.id === activeId)!;
  const imgKey = audienceImagery[active.id] ?? "residential";
  const image = imagery[imgKey][0];

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1.6fr]">
      {/* Left rail — audience list */}
      <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-3 backdrop-blur-sm">
        <div className="grid grid-cols-1 gap-0.5 sm:grid-cols-2 lg:grid-cols-1">
          {audiencePaths.map((path) => (
            <button
              key={path.id}
              onMouseEnter={() => setActiveId(path.id)}
              onClick={() => setActiveId(path.id)}
              className={cn(
                "group flex items-center justify-between gap-3 rounded-xl px-4 py-3 text-left text-[13px] transition",
                activeId === path.id
                  ? "bg-white/[0.08] text-white"
                  : "text-white/65 hover:bg-white/[0.04] hover:text-white",
              )}
            >
              <span className="font-medium">{path.label}</span>
              <ChevronRight
                className={cn(
                  "h-4 w-4 transition-transform",
                  activeId === path.id
                    ? "translate-x-0.5 text-accent-300"
                    : "text-white/30",
                )}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Right panel — imagery + content */}
      <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            {/* Top: imagery */}
            <div className="relative aspect-[16/8] w-full overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 600px, 100vw"
                className="object-cover"
                priority={false}
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-navy-900/10"
              />
              <div className="absolute left-6 top-5">
                <p className="eyebrow text-accent-300">
                  {active.short} path
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <h3 className="font-display text-[24px] leading-tight tracking-tight text-white">
                {active.label}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65 md:text-base">
                {active.description}
              </p>

              <div className="mt-6 grid gap-5 md:grid-cols-3">
                {active.recommendedProducts.length > 0 && (
                  <Recommendations
                    title="Products"
                    items={active.recommendedProducts}
                  />
                )}
                {active.recommendedServices.length > 0 && (
                  <Recommendations
                    title="Services"
                    items={active.recommendedServices}
                  />
                )}
                {active.recommendedPackages.length > 0 && (
                  <Recommendations
                    title="Packages"
                    items={active.recommendedPackages}
                  />
                )}
              </div>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Button href={active.ctaPrimary.href} variant="primary">
                  {active.ctaPrimary.label}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  href={active.ctaSecondary.href}
                  variant="secondary"
                >
                  {active.ctaSecondary.label}
                </Button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function Recommendations({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div>
      <p className="eyebrow">{title}</p>
      <ul className="mt-2.5 space-y-1.5 text-[13px] text-white/85">
        {items.slice(0, 4).map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent-400" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
