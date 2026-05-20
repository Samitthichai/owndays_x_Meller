"use client";

import { ProductItem } from "@/types/product";
import { buildImageUrl, formatPrice } from "@/utils/format";
import { useMemo } from "react";
import useSkuSelection from "./use-sku-selection";

export default function useSelectedSwatch(product: ProductItem) {
  const { selectedSkuIndex, setSelectedSkuIndex, selectedSku, productCode } =
    useSkuSelection(product.skus, product.product.code);

  const primaryImage = buildImageUrl(selectedSku?.images[0]?.path ?? null);
  const hoverImage = buildImageUrl(
    selectedSku?.images[1]?.path ?? selectedSku?.images[0]?.path ?? null,
  );
  const hasHoverImage = hoverImage && hoverImage !== primaryImage;

  const swatches = useMemo(
    () =>
      product.skus.map((sku) =>
        sku.colors.map((color) => ({
          hex_code: color.hex_code,
          path: color.path,
        })),
      ),
    [product.skus],
  );

  const price = formatPrice(product.selling_setting.price);

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
