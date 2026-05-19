"use client";
import HeroSection from "@/components/sections/hero-section";
import HowToStyleThem from "@/components/sections/how-to-style-them-section";
import ProductSection from "@/components/sections/product-section";

export default function Home() {
  return (
    <div className="relative">
      <HeroSection />
      <div className="mt-10 mb-37.5">
        <ProductSection />
      </div>
      <HowToStyleThem />
    </div>
  );
}
