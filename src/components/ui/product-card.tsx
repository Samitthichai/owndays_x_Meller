import { Text } from "@/components/ui/typography";
import { formatPrice } from "@/lib/utils";
import Image from "next/image";
import ColorSwatches from "./color-swatch";

type ColorSwatch = {
  hex_code: string | null;
  path: string | null;
};

interface ProductCardProps {
  image: string;
  productName: string;
  productCodeSKU: string;
  price: number;
  swatches?: ColorSwatch[];
  imageBaseUrl?: string;
}

export default function ProductCard({
  image,
  productName,
  productCodeSKU,
  price,
  swatches = [],
  imageBaseUrl = "",
}: ProductCardProps) {
  const visibleSwatches = swatches.slice(0, 4);

  return (
    <div className=" lg:w-105.5 lg:h-113  bg-white flex flex-col px-3.75  lg:px-4.5 pt-3.5 pb-8 lg:pb-9.25">
      <div className="relative bg-[#F5F5F5] h-73.25">
        {image ? (
          <Image
            src={image}
            alt={productName}
            fill
            className="object-contain"
            sizes="385px"
          />
        ) : (
          <div className="w-full h-full bg-[#F5F5F5]" />
        )}
      </div>

      <div className="flex mt-4.25 justify-between">
        <div className="flex flex-col">
          <Text variant="gt" className="text-card-product-name-title">
            {productName}
          </Text>
          <Text variant="favorit" className="text-card-product-code">
            {productCodeSKU} //TODO: format productCode+SKUs
          </Text>
        </div>

        <div className="flex flex-col gap-3.75 justify-center ">
          <ColorSwatches
            swatches={visibleSwatches}
            imageBaseUrl={imageBaseUrl}
          />
          <div className="flex items-baseline justify-end">
            <Text variant="gt" className="text-card-product-price">
              {formatPrice(price)}
            </Text>
            <Text variant="favorit" className="text-card-product-tax">
              +tax
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
