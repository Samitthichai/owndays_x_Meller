import Image, { StaticImageData } from "next/image";
import PlusIcon from "./icons/plus-icon";
type ImageCarouselCardProps = {
  imageSrc: StaticImageData;
  index: number;
};
export default function ImageCarouselCard(props: ImageCarouselCardProps) {
  const { imageSrc, index } = props;
  return (
    <div className="relative w-81.5 h-123.25 lg:w-101.25 lg:h-152.75  overflow-hidden shrink-0">
      <Image
        src={imageSrc}
        alt={`Style ${index + 1}`}
        fill
        className="object-cover pointer-events-none"
        draggable={false}
      />
      <button
        type="button"
        className="absolute bottom-0 right-0 w-14 h-14 lg:w-17.5 lg:h-17.5  bg-(--color-brand-orange) flex items-center justify-center cursor-pointer"
        aria-label="View product detail"
      >
        <PlusIcon className="w-5.5 h-5.5 lg:w-6.75 lg:h-6.75" />
      </button>
    </div>
  );
}
