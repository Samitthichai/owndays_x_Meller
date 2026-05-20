"use client";

import { ProductItem } from "@/types/product";
import { buildImageUrl, formatPrice, formatProductCode } from "@/utils/format";
import { useMemo, useState } from "react";

export default function useSelectedSwatch(product: ProductItem) {
  const [selectedSkuIndex, setSelectedSkuIndex] = useState(0);

  const selectedSku = product.skus[selectedSkuIndex] ?? product.skus[0];
  const primaryImage = useMemo(() => {
    return buildImageUrl(selectedSku?.images[0]?.path ?? null);
  }, [selectedSku]);

  const hoverImage = useMemo(() => {
    return buildImageUrl(
      selectedSku?.images[1]?.path ?? selectedSku?.images[0]?.path ?? null,
    );
  }, [selectedSku]);

  const hasHoverImage = hoverImage && hoverImage !== primaryImage;

  const swatches = useMemo(() => {
    return product.skus.map((sku) =>
      sku.colors.map((color) => ({
        hex_code: color.hex_code,
        path: color.path,
      })),
    );
  }, [product.skus]);

  const productCode = useMemo(() => {
    return formatProductCode(product.product.code, selectedSku);
  }, [product.product.code, selectedSku]);

  const price = useMemo(() => {
    return formatPrice(product.selling_setting.price);
  }, [product.selling_setting.price]);

  return {
    setSelectedSkuIndex,
    hasHoverImage,
    swatches,
    productCode,
    price,
    primaryImage,
    hoverImage,
    selectedSkuIndex,
  };
}
