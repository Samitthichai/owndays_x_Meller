import heroDesktop from "@/assets/images/owndays_meller_header_bg.png";
import heroMobile from "@/assets/images/owndays_meller_header_mobile.png";
import { Text } from "@/components/ui/typography";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-169.25 lg:h-auto lg:aspect-1440/633 -mt-15.5 border-b-2 border-black">
      <Image
        src={heroMobile}
        alt="OWNDAYS x MELLER hero"
        fill
        priority
        sizes="100vw"
        className="object-cover lg:hidden"
      />
      <Image
        src={heroDesktop}
        alt="OWNDAYS x MELLER hero"
        fill
        priority
        sizes="100vw"
        className="object-cover object-top hidden lg:block"
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <Text variant="gt" className="text-gt-american-display" as="div">
          PRODUCTS
        </Text>
      </div>
    </section>
  );
}
