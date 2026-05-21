import ProductCard from "@/components/ui/product-card";
import { Text } from "@/components/ui/typography";
import { getProducts } from "@/services/product.service";
export default async function ProductSection() {
  const products = await getProducts();

  if (products === null) {
    return (
      <div className="py-10 container-main">
        <Text variant="gt" className="text-card-product-name-title text-center">
          Can not get product.
        </Text>
      </div>
    );
  }

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
