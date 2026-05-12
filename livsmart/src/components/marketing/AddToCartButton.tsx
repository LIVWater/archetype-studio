"use client";

import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/components/commerce/CartProvider";

export function AddToCartButton({
  productId,
  name,
  price,
  image,
  size = "lg",
  block = false,
  variant = "primary",
}: {
  productId: string;
  name: string;
  price: number;
  image: string;
  size?: "sm" | "md" | "lg" | "xl";
  block?: boolean;
  variant?: "primary" | "secondary" | "accent";
}) {
  const { add } = useCart();
  return (
    <Button
      size={size}
      block={block}
      variant={variant}
      onClick={() => add({ productId, name, price, quantity: 1, image })}
    >
      <ShoppingCart className="h-4 w-4" />
      Add to Cart
    </Button>
  );
}
