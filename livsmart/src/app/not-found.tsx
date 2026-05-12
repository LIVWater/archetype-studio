import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { brand } from "@/lib/assets";

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[80vh] items-center overflow-hidden bg-navy-900 py-24 text-white">
      {/* Glow orbs */}
      <div
        aria-hidden
        className="glow-orb glow-orb-accent absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2"
      />
      <div
        aria-hidden
        className="glow-orb glow-orb-soft absolute bottom-0 right-0 h-[360px] w-[360px]"
      />
      {/* Faint grid */}
      <div
        aria-hidden
        className="absolute inset-0 grid-pattern opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]"
      />

      <Container className="relative">
        <div className="mx-auto max-w-xl text-center">
          <Image
            src={brand.mark}
            alt=""
            width={80}
            height={80}
            className="mx-auto h-16 w-16 opacity-60"
          />
          <p className="eyebrow mt-8 text-accent-300">Error · 404</p>
          <h1 className="heading-hero mt-4 text-white">
            <span className="italic text-white/80">Lost</span> in the flow.
          </h1>
          <p className="lede mt-5 text-pretty">
            The page you&apos;re looking for has moved, or never existed in this
            MVP. Try one of the entry points below — or speak to LIVWater.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Button href="/" size="lg" variant="primary">
              Back to home
            </Button>
            <Button href="/marketplace" variant="secondary" size="lg">
              Marketplace
            </Button>
            <Button href="/contact" variant="ghostLight" size="lg">
              Contact LIVWater
            </Button>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-3 text-left sm:grid-cols-4">
            {[
              { href: "/products", label: "Products" },
              { href: "/services-shop", label: "Services" },
              { href: "/app-dashboards", label: "Dashboards" },
              { href: "/solutions", label: "Solutions" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-3 text-sm text-white/75 backdrop-blur-sm transition hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
              >
                {l.label} →
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
