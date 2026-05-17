import apiClient from "@/lib/axios";
import type { ProductsResponse } from "@/types/product";

export async function getProducts(): Promise<ProductsResponse> {
  const { data } = await apiClient.get<ProductsResponse>(
    "/meller/products.json",
  );
  return data;
}
