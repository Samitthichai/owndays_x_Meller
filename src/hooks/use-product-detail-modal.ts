"use client";

import { ProductSKU } from "@/types/product";
import { buildImageUrl } from "@/utils/format";
import useSkuSelection from "./use-sku-selection";

type UseProductDetailModalProps = {
  skus: ProductSKU[];
  productBaseCode: string;
  initialSkuIndex?: number;
};

export default function useProductDetailModal({
  skus,
  productBaseCode,
  initialSkuIndex = 0,
}: UseProductDetailModalProps) {
  const { selectedSkuIndex, setSelectedSkuIndex, selectedSku, productCode } =
    useSkuSelection(skus, productBaseCode, initialSkuIndex);

  const images =
    selectedSku?.images.map((img) => buildImageUrl(img.path)) ?? [];

  function redirectToOwndaysProducts(code: string, skuId: number) {
    const url = `https://www.owndays.com/jp/ja/products/${code}?sku=${skuId}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return {
    images,
    productCode,
    redirectToOwndaysProducts,
    setSelectedSkuIndex,
    selectedSkuIndex,
    selectedSku,
  };
}
