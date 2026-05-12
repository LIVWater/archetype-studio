"use client";

import * as React from "react";
import type { CartItem } from "@/types";

type CartContextValue = {
  items: CartItem[];
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  add: (item: CartItem) => void;
  remove: (productId: string) => void;
  setQuantity: (productId: string, qty: number) => void;
  clear: () => void;
  subtotal: number;
  count: number;
};

const CartContext = React.createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = React.useState<CartItem[]>([]);
  const [isOpen, setOpen] = React.useState(false);

  const add: CartContextValue["add"] = (item) => {
    setItems((current) => {
      const existing = current.find((i) => i.productId === item.productId);
      if (existing) {
        return current.map((i) =>
          i.productId === item.productId
            ? { ...i, quantity: i.quantity + item.quantity }
            : i,
        );
      }
      return [...current, item];
    });
    setOpen(true);
  };

  const remove: CartContextValue["remove"] = (productId) => {
    setItems((c) => c.filter((i) => i.productId !== productId));
  };

  const setQuantity: CartContextValue["setQuantity"] = (productId, qty) => {
    setItems((c) =>
      c.map((i) =>
        i.productId === productId ? { ...i, quantity: Math.max(1, qty) } : i,
      ),
    );
  };

  const clear = () => setItems([]);

  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const count = items.reduce((sum, i) => sum + i.quantity, 0);

  const value = React.useMemo(
    () => ({ items, isOpen, setOpen, add, remove, setQuantity, clear, subtotal, count }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [items, isOpen, subtotal, count],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = React.useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
