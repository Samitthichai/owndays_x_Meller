"use client";

import adisaAllBlack from "@/assets/images/howToStyleThem/product_adisa_all_black.png";
import adisaAllOlive from "@/assets/images/howToStyleThem/product_adisa_all_olive.png";
import chauenTigirs from "@/assets/images/howToStyleThem/product_chauen_tigirs.png";
import cumbiTigirsCarbon from "@/assets/images/howToStyleThem/product_cumbi_tigirs_carbon.png";
import cumbiTigrisCarbon from "@/assets/images/howToStyleThem/product_cumbi_tigris_carbon.png";
import jasmiMossOlive from "@/assets/images/howToStyleThem/product_jasmil_moss_olive.png";
import kessieAllBlack from "@/assets/images/howToStyleThem/product_kessie_all_black.png";
import nayahAllBlack from "@/assets/images/howToStyleThem/product_nayah_all_black.png";
import nayahBlackOrange from "@/assets/images/howToStyleThem/product_nayah_black_orange.png";
import nayahTigrisCarbon from "@/assets/images/howToStyleThem/product_nayah_tigris_carbon.png";
import tanaTigrisCarbon from "@/assets/images/howToStyleThem/product_tana_tigris_carbon.png";
import tariTigrisst from "@/assets/images/howToStyleThem/product_tari_tigris-carbon.png";
import { Text } from "@/components/ui/typography";
import ImageCarouselCard from "../ui/image-carousel-card";

export default function HowToStyleThem() {
  const styleImages = [
    jasmiMossOlive,
    tariTigrisst,
    nayahAllBlack,
    cumbiTigrisCarbon,
    nayahBlackOrange,
    kessieAllBlack,
    nayahTigrisCarbon,
    cumbiTigirsCarbon,
    adisaAllBlack,
    chauenTigirs,
    adisaAllOlive,
    tanaTigrisCarbon,
  ];
  return (
    <div className="flex flex-col gap-2 overflow-hidden">
      <div className="relative">
        <div className="container-main flex flex-col gap-4 absolute top-0 left-0 z-1">
          <Text
            variant="gt"
            className="text-gt-american-display w-fit"
            as="div"
          >
            HOW TO
          </Text>
          <Text
            variant="gt"
            className="text-gt-american-display w-fit"
            as="div"
          >
            STYLE THEM
          </Text>
        </div>
      </div>

      <div className="flex w-full mt-6 pt-15 lg:pt-25 overflow-x-auto scrollbar-hide overscroll-x-contain">
        {styleImages.map((src, index) => (
          <div
            key={index}
            className="basis-auto border-t-2 border-black shrink-0 overflow-hidden"
          >
            <ImageCarouselCard imageSrc={src} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
}
