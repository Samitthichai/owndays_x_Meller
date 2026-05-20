"use client";

import { ProductSKU } from "@/types/product";
import { formatProductCode } from "@/utils/format";
import { useState } from "react";

export default function useSkuSelection(
  skus: ProductSKU[],
  productBaseCode: string,
  initialSkuIndex = 0,
) {
  const [selectedSkuIndex, setSelectedSkuIndex] = useState(initialSkuIndex);

  const selectedSku = skus[selectedSkuIndex] ?? skus[0];
  const productCode = selectedSku
    ? formatProductCode(productBaseCode, selectedSku)
    : productBaseCode;

  return { selectedSkuIndex, setSelectedSkuIndex, selectedSku, productCode };
}
