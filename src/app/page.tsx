import HeroSection from "@/components/sections/hero-section";
import HowToStyleThem from "@/components/sections/how-to-style-them-section";
import ProductSection from "@/components/sections/product-section";
import ProductSkeletonSection from "@/components/sections/product-skeleton";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="relative">
      <HeroSection />
      <div className="mt-10 mb-37.5">
        <Suspense fallback={<ProductSkeletonSection />}>
          <ProductSection />
        </Suspense>
      </div>
      <HowToStyleThem />
    </div>
  );
}
