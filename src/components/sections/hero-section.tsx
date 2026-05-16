import heroDesktop from "@/assets/images/owndays_meller_header_bg.png";
import heroMobile from "@/assets/images/owndays_meller_header_mobile.png";
import { Text } from "@/components/ui/typography";

export default function HeroSection() {
  return (
    <section className="relative w-full h-169.25 lg:h-158.25 -mt-15.5 ">
      <picture className="block w-full h-full">
        <source media="(min-width: 1024px)" srcSet={heroDesktop.src} />
        <img
          src={heroMobile.src}
          alt="OWNDAYS x MELLER hero"
          className="w-full h-full object-cover lg:object-top"
        />
      </picture>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <Text variant="gt" className="text-gt-american-display" as="div">
          PRODUCTS
        </Text>
      </div>
    </section>
  );
}
