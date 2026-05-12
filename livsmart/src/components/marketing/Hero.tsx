"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { DashboardMockup } from "@/components/marketing/DashboardMockup";
import { brand } from "@/lib/assets";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-900 text-white">
      {/* Soft layered glow orbs */}
      <div
        aria-hidden
        className="glow-orb glow-orb-accent absolute -top-32 left-1/2 h-[720px] w-[720px] -translate-x-1/2 animate-drift"
      />
      <div
        aria-hidden
        className="glow-orb glow-orb-brand absolute -top-10 -left-32 h-[420px] w-[420px]"
      />
      <div
        aria-hidden
        className="glow-orb glow-orb-soft absolute top-40 -right-32 h-[460px] w-[460px]"
      />
      {/* Faint grid */}
      <div
        aria-hidden
        className="absolute inset-0 grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
      />

      <div className="container-wide relative pb-16 pt-24 md:pt-32">
        {/* Centered editorial hero */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-3.5 py-1.5 text-[11px] tracking-wide text-white/70 backdrop-blur-sm"
          >
            <Sparkles className="h-3 w-3 text-accent-300" />
            <span>Building a leading water technology &amp; services platform</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mx-auto mt-10 flex justify-center"
          >
            <Image
              src={brand.mark}
              alt=""
              width={88}
              height={88}
              priority
              className="h-16 w-16 opacity-90 md:h-20 md:w-20"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="heading-hero mt-8 text-balance"
          >
            The water marketplace for
            <br />
            <span className="italic text-white/80">products, services and</span>
            <br />
            decentralised infrastructure.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lede mx-auto mt-8 max-w-2xl text-pretty"
          >
            LIVSmart connects households, estates, businesses, developers and
            project owners with LIVWater&apos;s full water ecosystem — from
            smart meters and filtration to LIVSupply, LIVWaste, turnkey
            services, dashboards and verified providers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <Button href="/marketplace" size="lg" variant="primary">
              Explore Marketplace
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/solutions" size="lg" variant="secondary">
              Build My Solution
            </Button>
            <Button
              href="/project-assessment"
              size="lg"
              variant="ghostLight"
              className="hidden sm:inline-flex"
            >
              Request Assessment
            </Button>
          </motion.div>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-[12px] text-white/45">
            <Link href="/app-dashboards" className="transition hover:text-white">
              View App &amp; Dashboards →
            </Link>
            <Link
              href="/affiliate-network"
              className="transition hover:text-white"
            >
              Join Affiliate Network →
            </Link>
            <Link
              href="/become-a-provider"
              className="transition hover:text-white"
            >
              Become a Provider →
            </Link>
          </div>
        </div>

        {/* Floating dashboard mockup — tilted glass card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="relative mx-auto mt-16 max-w-4xl md:mt-20"
        >
          {/* glow under the mockup */}
          <div
            aria-hidden
            className="absolute inset-x-10 -bottom-10 h-40 rounded-full bg-accent-500/30 blur-3xl"
          />
          <div className="relative">
            <DashboardMockup />
          </div>
        </motion.div>

        {/* Mini stats row */}
        <dl className="mx-auto mt-20 grid max-w-4xl grid-cols-3 gap-6 border-t border-white/[0.06] pt-10 text-center">
          {[
            {
              value: "1 platform",
              label: "Products · services · systems · dashboards",
            },
            {
              value: "End-to-end",
              label: "From household taps to decentralised infrastructure",
            },
            {
              value: "Verified",
              label: "Approved providers, partners and technologies",
            },
          ].map((stat) => (
            <div key={stat.value}>
              <dt className="font-display text-[20px] leading-none tracking-tight text-white md:text-[22px]">
                {stat.value}
              </dt>
              <dd className="mx-auto mt-2 max-w-[14ch] text-[11px] leading-snug text-white/45">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
