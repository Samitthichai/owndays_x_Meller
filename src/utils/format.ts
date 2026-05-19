import { ProductSKU } from "@/types/product";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
  return `¥${price.toLocaleString("ja-JP")}`;
}

export function formatProductCode(productCode: string, sku: ProductSKU) {
  return `${productCode} ${sku.code}`;
}

export function buildImageUrl(path: string | null): string {
  return path ? `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${path}` : "";
}

export function getColorName(sku: ProductSKU, lang = "en"): string {
  return sku.colors
    .map(
      (c) =>
        c.localizations.find((l) => l.language_code === lang)?.name ?? c.name,
    )
    .join(" / ")
    .toUpperCase();
}
