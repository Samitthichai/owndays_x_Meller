import ProductCard from "@/components/ui/product-card";
import { getProducts } from "@/services/product.service";

export default async function ProductSection() {
  const { data: products } = await getProducts();

  return (
    <div className="py-10">
      <div className="container-main grid grid-cols-3 gap-4.25 max-lg:flex max-lg:flex-col">
        {products.map((item) => (
          <ProductCard key={item.product.id} product={item} />
        ))}
      </div>
    </div>
  );
}
