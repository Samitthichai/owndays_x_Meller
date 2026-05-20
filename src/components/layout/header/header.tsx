"use client";

import logoImg from "@/assets/images/Collab-Logo.png";
import { Text } from "@/components/ui/typography";

import { navLinks } from "@/constants/nav-links";
import Image from "next/image";
import { useEffect, useState } from "react";
import MobileMenu from "./mobile-menu";

const SCROLL_THRESHOLD = 50;

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 flex items-center justify-between w-full py-5.75 lg:py-6.25 container-main transition-colors duration-300 ${
        isScrolled ? "bg-(--color-brand-orange)" : "bg-transparent"
      }`}
    >
      <Image
        src={logoImg}
        alt="OWNDAYS x MELLER"
        className="object-cover w-60 h-4 lg:w-87.75 lg:h-13"
        priority
      />
      <ul className="hidden lg:flex gap-12.5">
        {navLinks.map((navLink) => (
          <li key={navLink.label}>
            <Text
              variant="favorit"
              className="nav-link"
              as="a"
              href={navLink.href}
            >
              {navLink.label}
            </Text>
          </li>
        ))}
      </ul>
      <MobileMenu />
    </header>
  );
}
