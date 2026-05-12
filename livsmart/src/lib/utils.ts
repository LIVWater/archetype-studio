import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(value: number, currency = "ZAR") {
  return new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(value);
}

export function priceLabel(
  priceType: string,
  price?: number,
): string {
  if (priceType === "fixed" && price != null) return formatCurrency(price);
  if (priceType === "from" && price != null)
    return `From ${formatCurrency(price)}`;
  if (priceType === "quote_required") return "Quote on request";
  if (priceType === "project_scoped") return "Project-scoped";
  if (priceType === "sla") return "SLA-based";
  if (priceType === "assessment_required") return "Assessment required";
  if (priceType === "placeholder") return "Price placeholder";
  return "Quote on request";
}
