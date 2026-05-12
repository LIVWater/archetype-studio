"use client";

import Link from "next/link";
import { Section, Container } from "@/components/ui/Container";
import { Field, Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Lock } from "lucide-react";

export function LoginPlaceholder({
  title,
  description,
  ctaLabel,
  ctaHref,
  ctaSecondary,
}: {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  ctaSecondary?: { label: string; href: string };
}) {
  return (
    <Section surface="dark" className="!min-h-[80vh] !py-20">
      <Container>
        <div className="mx-auto max-w-md rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-500/20 text-accent-300">
            <Lock className="h-5 w-5" />
          </div>
          <h1 className="heading-card mt-5 text-white">{title}</h1>
          <p className="mt-2 text-sm text-white/65">{description}</p>
          <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <Field label="Email" htmlFor="email" className="[&_label]:text-white/65">
              <Input id="email" type="email" placeholder="you@company.com" disabled />
            </Field>
            <Field label="Password" htmlFor="password" className="[&_label]:text-white/65">
              <Input id="password" type="password" placeholder="••••••••" disabled />
            </Field>
            <Button block variant="primary" disabled>
              Sign in (placeholder)
            </Button>
          </form>
          <p className="mt-5 text-xs text-white/55">
            Authentication is not enabled in this MVP. Wire up Auth.js, Clerk or
            Supabase Auth in production.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-white/10 pt-5 text-xs">
            <Link href={ctaHref} className="text-accent-300 hover:text-accent-200">
              {ctaLabel} →
            </Link>
            {ctaSecondary && (
              <Link href={ctaSecondary.href} className="text-white/65 hover:text-white">
                {ctaSecondary.label} →
              </Link>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
