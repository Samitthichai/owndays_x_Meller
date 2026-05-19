"use client";

import ProductCard from "@/components/ui/product-card";
import ProductCardSkeleton from "@/components/ui/product-card-skeleton";
import { getProducts } from "@/services/product.service";
import { useQuery } from "@tanstack/react-query";

const SKELETON_COUNT = 8;

export default function ProductSection() {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const products = data?.data ?? [];

  return (
    <div className="py-10">
      <div className="container-main grid grid-cols-3 gap-4.25 max-lg:flex max-lg:flex-col">
        {isLoading
          ? Array.from({ length: SKELETON_COUNT }).map((_, i) => (
              <ProductCardSkeleton key={i} />
            ))
          : products.map((item) => (
              <ProductCard key={item.product.id} product={item} />
            ))}
      </div>
    </div>
  );
}
