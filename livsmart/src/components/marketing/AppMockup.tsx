"use client";

import { motion } from "framer-motion";
import { Bell, Droplets, ShieldCheck, ArrowUpRight } from "lucide-react";

export function AppMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[260px]">
      <div className="rounded-[2.4rem] border border-white/15 bg-navy-900/80 p-3 shadow-[0_40px_80px_-30px_rgba(26,163,232,0.4)] backdrop-blur">
        <div className="overflow-hidden rounded-[2rem] bg-navy-800">
          <div className="flex items-center justify-between px-5 py-4 text-[11px] text-white/55">
            <span>9:41</span>
            <span className="flex items-center gap-1 text-accent-300">
              <Droplets className="h-3 w-3" /> LIVSmart
            </span>
          </div>
          <div className="px-5">
            <p className="text-[11px] uppercase tracking-wider text-white/45">
              This week
            </p>
            <p className="mt-1 font-display text-2xl text-white">2,184 L</p>
            <p className="text-[11px] text-accent-300">
              -12% vs last week
            </p>
            <motion.svg
              viewBox="0 0 220 60"
              className="mt-3 w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <path
                d="M0 40 L20 36 L40 28 L60 32 L80 18 L100 26 L120 16 L140 24 L160 10 L180 18 L200 8 L220 14"
                fill="none"
                stroke="#1AA3E8"
                strokeWidth="2"
              />
            </motion.svg>
          </div>
          <div className="space-y-2 px-3 pb-5 pt-3">
            {[
              { icon: Bell, title: "Leak alert · Kitchen", time: "08:42" },
              { icon: ShieldCheck, title: "Filtration ok · Whole-house", time: "Today" },
              { icon: ArrowUpRight, title: "Bill update · placeholder", time: "Mon" },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-3 rounded-xl bg-white/[0.05] px-3 py-2"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent-500/20 text-accent-300">
                  <item.icon className="h-3.5 w-3.5" />
                </div>
                <div className="flex-1">
                  <p className="text-[12px] text-white">{item.title}</p>
                  <p className="text-[10px] text-white/45">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
