import ProductCardSkeleton from "../ui/product-card-skeleton";

export default function ProductSkeletonSection() {
  const MAX_PRODUCT_LENGTH = 8;
  return (
    <div className="py-10">
      <div className="container-main grid grid-cols-3 gap-4.25 max-lg:flex max-lg:flex-col">
        {Array.from({ length: MAX_PRODUCT_LENGTH }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
