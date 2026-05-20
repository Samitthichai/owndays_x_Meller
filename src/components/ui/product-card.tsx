"use client";

import { Text } from "@/components/ui/typography";
import useSelectedSwatch from "@/hooks/use-selected-swatch";
import { ProductItem } from "@/types/product";
import { formatPrice } from "@/utils/format";
import Image from "next/image";
import { useState } from "react";
import ColorSwatches from "./color-swatch";
import { Dialog } from "./dialog";
import ProductDetailModal from "./product-detail-modal";

type ProductCardProps = {
  product: ProductItem;
};

export default function ProductCard({ product }: ProductCardProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const {
    setSelectedSkuIndex,
    hasHoverImage,
    swatches,
    productCode,
    price,
    primaryImage,
    hoverImage,
    selectedSkuIndex,
  } = useSelectedSwatch(product);
  return (
    <Dialog open={modalOpen} onOpenChange={setModalOpen}>
      <div
        className={`w-full h-95.75 lg:h-113 bg-white flex flex-col px-3.75 lg:px-4.5 pt-3.5 pb-8 lg:pb-9.25 cursor-pointer border-2 transition-colors duration-200 ${
          modalOpen
            ? "border-(--color-brand-black)"
            : "border-transparent hover:border-(--color-brand-black)"
        }`}
        onClick={() => setModalOpen(true)}
      >
        <div
          className="relative h-61.75 lg:h-73.25 overflow-hidden "
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {primaryImage ? (
            <>
              <Image
                src={primaryImage}
                alt={product.product.model_name}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                loading="lazy"
                className="object-cover transition-opacity duration-300"
              />
              {hasHoverImage && (
                <Image
                  src={hoverImage}
                  alt={product.product.model_name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  loading="lazy"
                  className={`object-cover transition-opacity ease-in-out duration-300 ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                />
              )}
            </>
          ) : (
            <div className="w-full h-full" />
          )}
        </div>

        <div className="flex mt-4.25 justify-between">
          <div className="flex flex-col">
            <Text variant="gt" className="text-card-product-name-title">
              {product.product.model_name}
            </Text>
            <Text variant="favorit" className="text-card-product-code">
              {productCode}
            </Text>
          </div>

          <div className="flex flex-col gap-3.75 justify-center">
            <ColorSwatches swatches={swatches} onSelect={setSelectedSkuIndex} />
            <div className="flex items-baseline justify-end">
              <Text variant="gt" className="text-card-product-price">
                {price}
              </Text>
              <Text variant="favorit" className="text-card-product-tax">
                +tax
              </Text>
            </div>
          </div>
        </div>
      </div>

      <ProductDetailModal
        key={selectedSkuIndex}
        productName={product.product.model_name}
        productBaseCode={product.product.code}
        type={product.frame_types[0]?.code}
        price={formatPrice(product.selling_setting.price)}
        description={product.localization?.description ?? ""}
        skus={product.skus}
        initialSkuIndex={selectedSkuIndex}
        inStock={product.selling_setting.in_stock}
      />
    </Dialog>
  );
}
