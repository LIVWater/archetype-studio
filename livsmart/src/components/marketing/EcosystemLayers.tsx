import Link from "next/link";
import Image from "next/image";
import { Smartphone, ArrowRight, type LucideIcon } from "lucide-react";
import { graphics } from "@/lib/assets";

type Layer = {
  title: string;
  description: string;
  href: string;
  /** Optional path to a brand icon under /public */
  image?: string;
  /** Fallback Lucide icon when no image is supplied */
  icon?: LucideIcon;
};

const layers: Layer[] = [
  {
    title: "Products",
    description:
      "Filtration, metering, sensors, valves, treatment hardware and household water products.",
    href: "/products",
    image: graphics.mainOffering[0],
  },
  {
    title: "Services",
    description:
      "Assessments, installation, maintenance, operations and lab services across the value chain.",
    href: "/services-shop",
    image: graphics.mainOffering[1],
  },
  {
    title: "Systems",
    description:
      "LIVSupply, LIVWaste and LIVReuse systems — decentralised treatment, supply and reuse infrastructure.",
    href: "/livsupply",
    image: graphics.mainOffering[2],
  },
  {
    title: "App & Dashboards",
    description:
      "Customer app, site dashboards, operations portal, portfolio view, provider and affiliate portals.",
    href: "/app-dashboards",
    icon: Smartphone,
  },
];

export function EcosystemLayers() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {layers.map((layer) => (
        <Link
          key={layer.title}
          href={layer.href}
          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-accent-400/50 hover:shadow-[0_24px_60px_-30px_rgba(26,163,232,0.25)]"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500/10 ring-1 ring-accent-500/20 transition group-hover:bg-accent-500/20 group-hover:ring-accent-500/40">
            {layer.image ? (
              <Image
                src={layer.image}
                alt=""
                width={32}
                height={32}
                className="h-7 w-7 object-contain brightness-0 invert"
              />
            ) : layer.icon ? (
              <layer.icon className="h-5 w-5 text-accent-300" />
            ) : null}
          </div>
          <h3 className="heading-card mt-5 text-white">{layer.title}</h3>
          <p className="mt-2 text-sm text-white/65">{layer.description}</p>
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent-300">
            Explore{" "}
            <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
          </span>
        </Link>
      ))}
    </div>
  );
}
