"use client";

import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";
import { X, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "./CartProvider";
import { Button } from "@/components/ui/Button";
import { formatCurrency } from "@/lib/utils";

export function CartDrawer() {
  const { items, isOpen, setOpen, remove, setQuantity, subtotal } = useCart();

  return (
    <Dialog.Root open={isOpen} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-navy-900/40 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0" />
        <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex h-full w-full max-w-md flex-col border-l border-white/10 bg-navy-900/95 shadow-2xl backdrop-blur-2xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:slide-in-from-right data-[state=closed]:slide-out-to-right">
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
            <Dialog.Title className="flex items-center gap-2 text-base font-semibold text-white">
              <ShoppingBag className="h-4 w-4 text-accent-600" />
              Your cart
            </Dialog.Title>
            <Dialog.Close className="text-white/55 hover:text-white">
              <X className="h-5 w-5" />
            </Dialog.Close>
          </div>
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <p className="text-sm text-white/65">Your cart is empty.</p>
                <p className="mt-2 text-xs text-white/55">
                  Add direct-purchase products, or request a quote for sized systems.
                </p>
                <Button
                  href="/products"
                  variant="secondary"
                  className="mt-6"
                  size="sm"
                  onClick={() => setOpen(false)}
                >
                  Browse products
                </Button>
              </div>
            ) : (
              <ul className="space-y-4">
                {items.map((item) => (
                  <li
                    key={item.productId}
                    className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-medium text-white">
                          {item.name}
                        </p>
                        <p className="mt-1 text-xs text-white/55">
                          {formatCurrency(item.price)}
                        </p>
                      </div>
                      <button
                        onClick={() => remove(item.productId)}
                        className="text-white/40 hover:text-white/80"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-3 flex items-center gap-2">
                      <button
                        onClick={() =>
                          setQuantity(item.productId, item.quantity - 1)
                        }
                        className="h-8 w-8 rounded-md border border-white/10 text-sm hover:bg-white/[0.03]"
                      >
                        −
                      </button>
                      <span className="w-8 text-center text-sm">{item.quantity}</span>
                      <button
                        onClick={() =>
                          setQuantity(item.productId, item.quantity + 1)
                        }
                        className="h-8 w-8 rounded-md border border-white/10 text-sm hover:bg-white/[0.03]"
                      >
                        +
                      </button>
                      <span className="ml-auto text-sm font-medium text-white">
                        {formatCurrency(item.price * item.quantity)}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {items.length > 0 && (
            <div className="border-t border-white/10 px-6 py-5">
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/65">Subtotal</span>
                <span className="font-semibold text-white">
                  {formatCurrency(subtotal)}
                </span>
              </div>
              <p className="mt-1 text-xs text-white/55">
                Taxes, delivery and installation calculated at checkout.
              </p>
              <div className="mt-4 space-y-2">
                <Button href="/checkout" block size="lg" onClick={() => setOpen(false)}>
                  Checkout
                </Button>
                <Link
                  href="/cart"
                  onClick={() => setOpen(false)}
                  className="block text-center text-xs text-white/65 hover:text-white"
                >
                  View full cart
                </Link>
              </div>
            </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
