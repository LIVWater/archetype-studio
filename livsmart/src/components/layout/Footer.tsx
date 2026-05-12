import Link from "next/link";
import Image from "next/image";
import { footerColumns } from "@/lib/navigation";
import { Logo } from "./Logo";
import { brand } from "@/lib/assets";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-[#000510] mt-24 border-t border-white/[0.06]">
      {/* Soft glow at the top-edge */}
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 h-80 w-[120%] -translate-x-1/2 rounded-full bg-accent-500/[0.05] blur-3xl"
      />
      <div className="container-wide relative py-20">
        {/* Top row: editorial signature + tagline */}
        <div className="flex flex-col items-start gap-10 border-b border-white/[0.06] pb-12 md:flex-row md:items-end md:justify-between">
          <div className="flex items-center gap-5">
            <Image
              src={brand.mark}
              alt=""
              width={64}
              height={64}
              className="h-14 w-14 object-contain opacity-90"
            />
            <div>
              <p className="eyebrow">LIVWater · LIVSmart</p>
              <p className="font-display mt-2 text-[28px] leading-none tracking-tight text-white md:text-[34px]">
                The digital layer of water.
              </p>
            </div>
          </div>
          <Logo tone="light" variant="wordmark" className="opacity-80" />
        </div>

        {/* Main grid */}
        <div className="mt-14 grid gap-14 lg:grid-cols-[1.1fr_2.4fr]">
          <div>
            <p className="max-w-sm text-sm leading-relaxed text-white/55">
              LIVSmart is LIVWater&apos;s digital marketplace and management
              platform for water products, treatment systems, smart monitoring,
              services, providers, dashboards and decentralised infrastructure.
            </p>
            <div className="mt-8 space-y-3 text-sm text-white/60">
              <p className="flex items-center gap-2.5">
                <Mail className="h-3.5 w-3.5 text-accent-300" />
                hello@livwater.io
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="h-3.5 w-3.5 text-accent-300" />
                <span>+27 (0) 000 000 0000 · placeholder</span>
              </p>
              <p className="flex items-center gap-2.5">
                <MapPin className="h-3.5 w-3.5 text-accent-300" />
                Cape Town · Johannesburg · Remote sites worldwide
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-5">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h4 className="eyebrow">{col.title}</h4>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[13px] text-white/60 transition hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/[0.06] pt-8 text-[11px] text-white/45 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} LIVWater. All rights reserved.</p>
          <p className="flex flex-wrap items-center gap-5">
            <Link
              href="/login/dashboard"
              className="inline-flex items-center gap-1 transition hover:text-white"
            >
              Dashboard <ArrowUpRight className="h-3 w-3" />
            </Link>
            <Link
              href="/login/provider"
              className="inline-flex items-center gap-1 transition hover:text-white"
            >
              Provider portal <ArrowUpRight className="h-3 w-3" />
            </Link>
            <Link
              href="/login/affiliate"
              className="inline-flex items-center gap-1 transition hover:text-white"
            >
              Affiliate portal <ArrowUpRight className="h-3 w-3" />
            </Link>
          </p>
        </div>

        <p className="mt-6 max-w-3xl text-[11px] leading-relaxed text-white/35">
          This site uses clearly marked placeholder data, prices and provider
          listings where final commercial details are pending. LIVWater does not
          claim guaranteed savings, fixed pricing or universal availability of
          Water-as-a-Service. Final structures depend on project size, site
          conditions, commercial viability and LIVWater approval.
        </p>
      </div>
    </footer>
  );
}
