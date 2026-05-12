"use client";

import Link from "next/link";
import { Section, Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/components/commerce/CartProvider";
import { formatCurrency } from "@/lib/utils";
import { Trash2 } from "lucide-react";

export default function CartPage() {
  const { items, setQuantity, remove, subtotal, clear } = useCart();

  return (
    <Section surface="light" className="!pt-16">
      <Container wide>
        <h1 className="heading-section text-white">Your cart</h1>
        <p className="mt-2 text-sm text-white/65">
          Direct-purchase products only. Quote-based products are routed through the quote workflow.
        </p>
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            {items.length === 0 ? (
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-10 text-center">
                <p className="text-sm text-white/65">Your cart is empty.</p>
                <Button href="/products" variant="secondary" className="mt-5">
                  Browse products
                </Button>
              </div>
            ) : (
              <ul className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.03]">
                {items.map((item) => (
                  <li key={item.productId} className="flex items-center justify-between gap-4 p-5">
                    <div>
                      <p className="text-sm font-medium text-white">{item.name}</p>
                      <p className="mt-1 text-xs text-white/55">{formatCurrency(item.price)}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setQuantity(item.productId, item.quantity - 1)}
                        className="h-8 w-8 rounded-md border border-white/10 text-sm hover:bg-white/[0.03]"
                      >
                        −
                      </button>
                      <span className="w-8 text-center text-sm">{item.quantity}</span>
                      <button
                        onClick={() => setQuantity(item.productId, item.quantity + 1)}
                        className="h-8 w-8 rounded-md border border-white/10 text-sm hover:bg-white/[0.03]"
                      >
                        +
                      </button>
                      <p className="ml-4 w-24 text-right text-sm font-medium text-white">
                        {formatCurrency(item.price * item.quantity)}
                      </p>
                      <button
                        onClick={() => remove(item.productId)}
                        className="ml-2 text-white/40 hover:text-white/80"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
            {items.length > 0 && (
              <div className="mt-4 text-xs">
                <button onClick={clear} className="text-white/55 hover:text-white/80">
                  Clear cart
                </button>
              </div>
            )}
          </div>
          <aside className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <p className="eyebrow">Order summary</p>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between text-white/80">
                <span>Subtotal</span>
                <span>{formatCurrency(subtotal)}</span>
              </div>
              <div className="flex justify-between text-white/80">
                <span>Delivery</span>
                <span className="text-white/55">Calculated at checkout</span>
              </div>
              <div className="flex justify-between text-white/80">
                <span>Installation</span>
                <span className="text-white/55">Optional</span>
              </div>
              <div className="mt-3 flex justify-between border-t border-white/10 pt-3 text-sm font-medium text-white">
                <span>Estimated total</span>
                <span>{formatCurrency(subtotal)}</span>
              </div>
            </div>
            <Button href="/checkout" className="mt-6" block size="lg" disabled={items.length === 0}>
              Checkout
            </Button>
            <p className="mt-3 text-xs text-white/55">
              Checkout in this MVP is a placeholder — no payments are taken.
            </p>
            <Link
              href="/products"
              className="mt-4 block text-center text-xs text-white/65 hover:text-white"
            >
              ← Continue browsing
            </Link>
          </aside>
        </div>
      </Container>
    </Section>
  );
}
