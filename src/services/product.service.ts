import apiClient from "@/lib/axios";
import type { ProductItem, ProductsResponse } from "@/types/product";

export async function getProducts(): Promise<ProductItem[] | null> {
  try {
    const { data } = await apiClient.get<ProductsResponse>(
      "/meller/products.json",
    );
    return data.data;
  } catch {
    return null;
  }
}
