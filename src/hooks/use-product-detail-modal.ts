"use client";

import { ProductSKU } from "@/types/product";
import { buildImageUrl, formatProductCode } from "@/utils/format";
import { useCallback, useState } from "react";

type UseProductDetailModalProps = {
  skus: ProductSKU[];
  productBaseCode: string;
  initialSkuIndex?: number;
};
export default function useProductDetailModal(
  props: UseProductDetailModalProps,
) {
  const { skus, productBaseCode, initialSkuIndex } = props;
  const [selectedSkuIndex, setSelectedSkuIndex] = useState(
    initialSkuIndex ?? 0,
  );

  const selectedSku = skus[selectedSkuIndex] ?? skus[0];
  const images =
    selectedSku?.images.map((img) => buildImageUrl(img.path)) ?? [];
  const productCode = selectedSku
    ? formatProductCode(productBaseCode, selectedSku)
    : productBaseCode;

  const redirectToOwndaysProducts = useCallback(
    (code: string, skuId: number) => {
      const url = `https://www.owndays.com/jp/ja/products/${code}?sku=${skuId}`;
      window.open(url, "_blank", "noopener,noreferrer");
    },
    [],
  );
  return {
    images,
    productCode,
    redirectToOwndaysProducts,
    setSelectedSkuIndex,
    selectedSkuIndex,
    selectedSku,
  };
}
