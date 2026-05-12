"use client";

import * as React from "react";
import { Section, Container } from "@/components/ui/Container";
import { Field, Input, Select, Textarea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/components/commerce/CartProvider";
import { formatCurrency } from "@/lib/utils";
import { CheckCircle2, ShieldCheck } from "lucide-react";

export default function CheckoutPage() {
  const { items, subtotal, clear } = useCart();
  const [placed, setPlaced] = React.useState(false);

  if (placed) {
    return (
      <Section surface="light" className="!pt-16">
        <Container>
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-10 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <h1 className="heading-section mt-4 text-white">Order received</h1>
            <p className="mt-3 text-sm text-white/80">
              This is a demonstration order. No payment was taken and no order
              was created. A real deployment would connect to Stripe or PayFast.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Button href="/products" variant="secondary">Continue browsing</Button>
              <Button href="/">Back to home</Button>
            </div>
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <Section surface="light" className="!pt-16">
      <Container wide>
        <h1 className="heading-section text-white">Checkout</h1>
        <p className="mt-2 text-sm text-white/65">
          Demonstration checkout. Connect Stripe or PayFast for live payments.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            clear();
            setPlaced(true);
          }}
          className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr]"
        >
          <div className="space-y-8">
            <div>
              <h2 className="heading-card text-white">Contact</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <Field label="Full name" required><Input required /></Field>
                <Field label="Email" required><Input type="email" required /></Field>
                <Field label="Phone"><Input type="tel" /></Field>
                <Field label="Company"><Input /></Field>
              </div>
            </div>
            <div>
              <h2 className="heading-card text-white">Delivery address</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <Field label="Street address" required className="sm:col-span-2"><Input required /></Field>
                <Field label="Suburb"><Input /></Field>
                <Field label="City"><Input /></Field>
                <Field label="Postcode"><Input /></Field>
                <Field label="Country">
                  <Select>
                    <option>South Africa</option>
                    <option>Namibia</option>
                    <option>Botswana</option>
                    <option>Mozambique</option>
                    <option>Other</option>
                  </Select>
                </Field>
              </div>
            </div>
            <div>
              <h2 className="heading-card text-white">Installation & notes</h2>
              <div className="mt-4 space-y-4">
                <Field label="Installation required?">
                  <Select>
                    <option>No — delivery only</option>
                    <option>Yes — request installer</option>
                    <option>Quote installation separately</option>
                  </Select>
                </Field>
                <Field label="Notes">
                  <Textarea placeholder="Anything we should know about the site?" />
                </Field>
              </div>
            </div>
            <div>
              <h2 className="heading-card text-white">Payment</h2>
              <div className="mt-4 rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-6 text-sm text-white/65">
                <p className="font-medium text-white/95 flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-accent-500" /> Payment placeholder
                </p>
                <p className="mt-2">
                  This MVP does not collect or process payments. Connect Stripe
                  or PayFast in a production deployment.
                </p>
              </div>
            </div>
          </div>
          <aside className="h-fit rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <p className="eyebrow">Order summary</p>
            {items.length === 0 ? (
              <p className="mt-4 text-sm text-white/65">
                Your cart is empty. Add products before checkout.
              </p>
            ) : (
              <ul className="mt-4 divide-y divide-white/10 text-sm">
                {items.map((i) => (
                  <li key={i.productId} className="flex justify-between py-2">
                    <span className="text-white/80">{i.name} × {i.quantity}</span>
                    <span className="text-white">{formatCurrency(i.price * i.quantity)}</span>
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-4 border-t border-white/10 pt-4 text-sm">
              <div className="flex justify-between font-medium text-white">
                <span>Total</span>
                <span>{formatCurrency(subtotal)}</span>
              </div>
            </div>
            <Button type="submit" block size="lg" className="mt-6" disabled={items.length === 0}>
              Place demo order
            </Button>
          </aside>
        </form>
      </Container>
    </Section>
  );
}
