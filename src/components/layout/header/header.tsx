import logoImg from "@/assets/images/Collab-Logo.png";
import { Text } from "@/components/ui/typography";

import { navLinks } from "@/constants/nav-links";
import Image from "next/image";
import MobileMenu from "./mobile-menu";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 flex items-center justify-between w-full py-5.75 lg:py-6.25 container-main">
      <Image
        src={logoImg}
        alt="OWNDAYS x MELLER"
        className="object-cover w-60 h-4 lg:w-87.75 lg:h-13"
        priority
      />
      <ul className="hidden lg:flex gap-12.5">
        {navLinks.map((link) => (
          <li key={link}>
            <Text variant="navLink" as="a" href="#">
              {link}
            </Text>
          </li>
        ))}
      </ul>
      <MobileMenu />
    </header>
  );
}
