"use client";

import { motion } from "framer-motion";
import { Activity, AlertTriangle, Droplets, Gauge, ArrowUpRight, Cpu } from "lucide-react";

export function DashboardMockup() {
  return (
    <div className="relative">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md shadow-[0_50px_120px_-40px_rgba(26,163,232,0.4)]">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <p className="text-xs uppercase tracking-wider text-white/45">
              Portfolio dashboard
            </p>
            <p className="mt-1 font-display text-base text-white">
              Coastal Estate · 280 units
            </p>
          </div>
          <div className="rounded-full bg-accent-500/20 px-2.5 py-1 text-[11px] text-accent-300">
            Live · 12s ago
          </div>
        </div>
        <div className="mt-5 grid grid-cols-3 gap-3">
          {[
            { label: "Inlet flow", value: "184 m³", trend: "+4%", icon: Droplets },
            { label: "Active alerts", value: "2", trend: "Leak", icon: AlertTriangle },
            { label: "Reuse output", value: "62 kL", trend: "+11%", icon: Activity },
          ].map((kpi) => (
            <div
              key={kpi.label}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-3"
            >
              <div className="flex items-center justify-between">
                <p className="text-[10px] uppercase tracking-wider text-white/45">
                  {kpi.label}
                </p>
                <kpi.icon className="h-3.5 w-3.5 text-accent-300" />
              </div>
              <p className="mt-2 font-display text-lg text-white">{kpi.value}</p>
              <p className="mt-0.5 text-[10px] text-white/55">{kpi.trend}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.03] p-4">
          <div className="flex items-center justify-between text-xs">
            <span className="text-white/55">Inlet flow · 24h</span>
            <span className="text-accent-300">DN200 ultrasonic</span>
          </div>
          <svg viewBox="0 0 320 88" className="mt-3 w-full">
            <defs>
              <linearGradient id="flow-gradient" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#1AA3E8" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#1AA3E8" stopOpacity="0" />
              </linearGradient>
            </defs>
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              d="M0 70 L24 60 L48 64 L72 50 L96 56 L120 42 L144 48 L168 36 L192 44 L216 28 L240 38 L264 22 L288 30 L312 14 L320 18"
              fill="none"
              stroke="#1AA3E8"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M0 70 L24 60 L48 64 L72 50 L96 56 L120 42 L144 48 L168 36 L192 44 L216 28 L240 38 L264 22 L288 30 L312 14 L320 18 L320 88 L0 88 Z"
              fill="url(#flow-gradient)"
              opacity="0.7"
            />
          </svg>
          <div className="mt-3 grid grid-cols-4 gap-2 text-[10px] text-white/40">
            <span>00:00</span>
            <span>06:00</span>
            <span>12:00</span>
            <span className="text-right">18:00</span>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
            <p className="text-[10px] uppercase tracking-wider text-white/45 flex items-center gap-1">
              <Gauge className="h-3 w-3 text-accent-300" /> Reservoir tank
            </p>
            <p className="mt-1 text-sm text-white">82% · 410 kL</p>
            <div className="mt-2 h-1.5 w-full rounded-full bg-white/10">
              <div className="h-1.5 rounded-full bg-accent-400" style={{ width: "82%" }} />
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
            <p className="text-[10px] uppercase tracking-wider text-white/45 flex items-center gap-1">
              <Cpu className="h-3 w-3 text-accent-300" /> Treatment plant
            </p>
            <p className="mt-1 text-sm text-white">Stable · pH 7.4</p>
            <p className="mt-1 text-[10px] text-white/45">MBR · 220 kL/day</p>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-6 -right-6 hidden w-56 rounded-2xl border border-accent-300/30 bg-navy-900/90 p-4 shadow-xl backdrop-blur md:block">
        <div className="flex items-center gap-2 text-xs text-accent-300">
          <ArrowUpRight className="h-3.5 w-3.5" /> Customer app
        </div>
        <p className="mt-1 text-sm text-white">Leak detected · Unit 24B</p>
        <p className="mt-1 text-[11px] text-white/55">
          12 L/min sustained · Shutoff valve closed
        </p>
      </div>
    </div>
  );
}
