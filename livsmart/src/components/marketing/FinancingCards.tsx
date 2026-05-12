import { Building2, HandCoins, KeyRound, Repeat2, Briefcase, ShieldCheck } from "lucide-react";

const models = [
  {
    icon: Building2,
    title: "Outright purchase",
    description:
      "Client owns and operates the system. Standard CapEx model with optional service and SLA backing.",
  },
  {
    icon: HandCoins,
    title: "Co-ownership",
    description:
      "LIVWater co-invests with the client or development. Suitable for medium-to-large infrastructure.",
  },
  {
    icon: KeyRound,
    title: "Rent-to-own",
    description:
      "Operational payments transition to client ownership over a defined period, subject to qualification.",
  },
  {
    icon: Repeat2,
    title: "Service-based delivery",
    description:
      "Water and treatment delivered as a service. LIVWater retains ownership and operates the infrastructure.",
  },
  {
    icon: Briefcase,
    title: "Owner-operator model",
    description:
      "LIVWater builds, owns and operates infrastructure at scale, with long-term offtake or supply agreements.",
  },
  {
    icon: ShieldCheck,
    title: "Project-specific finance",
    description:
      "Bespoke structures for development-scale projects — combining equity, debt and offtake.",
  },
];

export function FinancingCards({ inverted = false }: { inverted?: boolean }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {models.map((m) => (
        <div
          key={m.title}
          className={
            inverted
              ? "rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur"
              : "card-surface p-6"
          }
        >
          <div
            className={
              inverted
                ? "flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/15 text-accent-300"
                : "flex h-10 w-10 items-center justify-center rounded-xl bg-navy-900 text-accent-300"
            }
          >
            <m.icon className="h-4 w-4" />
          </div>
          <h3 className={inverted ? "heading-card mt-5 text-white" : "heading-card mt-5 text-white"}>
            {m.title}
          </h3>
          <p className={inverted ? "mt-2 text-sm text-white/65" : "mt-2 text-sm text-white/65"}>
            {m.description}
          </p>
        </div>
      ))}
    </div>
  );
}
