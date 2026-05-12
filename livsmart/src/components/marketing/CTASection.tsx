import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function CTASection({
  eyebrow,
  title,
  description,
  primary,
  secondary,
  tertiary,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  tertiary?: { label: string; href: string };
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-900 text-white">
      <div aria-hidden className="absolute inset-0 grid-pattern opacity-40" />
      <div
        aria-hidden
        className="absolute inset-x-0 -top-32 mx-auto h-[420px] w-[820px] max-w-full rounded-full bg-accent-500/15 blur-3xl"
      />
      <div className="container-wide relative py-20 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && <p className="eyebrow text-accent-300">{eyebrow}</p>}
          <h2 className="heading-section mt-3 text-white text-balance">{title}</h2>
          {description && (
            <p className="lede mt-4 text-pretty">{description}</p>
          )}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button href={primary.href} size="lg">
              {primary.label}
              <ArrowRight className="h-4 w-4" />
            </Button>
            {secondary && (
              <Button href={secondary.href} variant="outline" size="lg">
                {secondary.label}
              </Button>
            )}
            {tertiary && (
              <Button href={tertiary.href} variant="ghostLight" size="lg">
                {tertiary.label}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
