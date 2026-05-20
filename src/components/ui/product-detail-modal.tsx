"use client";

import { Text } from "@/components/ui/typography";
import useProductDetailModal from "@/hooks/use-product-detail-modal";
import { ProductSKU } from "@/types/product";
import { getColorName } from "@/utils/format";
import Image from "next/image";
import CTAButton from "./cta-button";
import { DialogContent } from "./dialog";
import SkuChip from "./sku-chip";

type ProductDetailModalProps = {
  productName: string;
  productBaseCode: string;
  type: string;
  price: string;
  description: string;
  skus: ProductSKU[];
  inStock: number;
  initialSkuIndex?: number;
};

export default function ProductDetailModal({
  productName,
  productBaseCode,
  type,
  price,
  description,
  skus,
  inStock,
  initialSkuIndex = 0,
}: ProductDetailModalProps) {
  const {
    images,
    productCode,
    setSelectedSkuIndex,
    redirectToOwndaysProducts,
    selectedSku,
    selectedSkuIndex,
  } = useProductDetailModal({
    skus,
    productBaseCode,
    initialSkuIndex,
  });

  const newLocal = "relative w-[420px] h-full shrink-0";
  return (
    <DialogContent
      side="right"
      className="bg-(--color-brand-white) rounded-[20px] lg:rounded-l-[20px] overflow-hidden ease-in-out gap-7.5"
      title={
        <Text
          variant="gt"
          className="product-detail-title text-(--color-brand-orange)"
        >
          {productName}
        </Text>
      }
    >
      <div className="flex h-72.25 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
        {images.map((src, index) => (
          <div key={index} className={newLocal}>
            <Image
              loading="lazy"
              src={src}
              alt={`${productName} ${index + 1}`}
              fill
              className="object-contain "
            />
          </div>
        ))}
      </div>

      <div className="flex gap-1.75 flex-wrap justify-center mt-1.5 px-3.75">
        {skus.map((sku, index) => (
          <SkuChip
            key={sku.id}
            label={getColorName(sku)}
            selected={selectedSkuIndex === index}
            onClick={() => setSelectedSkuIndex(index)}
          />
        ))}
      </div>

      <div className="bg-(--color-brand-black) text-white px-6 lg:px-15.25 py-8  mt-6  flex-1 ">
        <div className="grid grid-cols-[100px_1fr] gap-y-4 font-[514] text-[14px]">
          <Text variant="favorit">P/No.</Text>
          <Text variant="favorit">{productCode}</Text>

          <Text variant="favorit">TYPE</Text>
          <Text variant="favorit" className="uppercase">
            {type}
          </Text>

          <Text variant="favorit">PRICE</Text>
          <Text variant="favorit">
            {price}
            <span className="text-xs ml-1.5">税込</span>
          </Text>
        </div>

        <p className="product-description mt-5.75">{description}</p>
        <div className="mt-8 flex flex-col items-center gap-2.5">
          <CTAButton
            disabled={inStock === 0}
            variant="orange"
            onClick={() =>
              redirectToOwndaysProducts(productBaseCode, selectedSku.id)
            }
          >
            Online Store
          </CTAButton>
          <p className="font-(family-name:--font-noto-sans-jp) font-medium text-[12px] leading-7.5 text-center text-white">
            OWNDAYSオンラインストアに移動します
          </p>
        </div>
      </div>
    </DialogContent>
  );
}
