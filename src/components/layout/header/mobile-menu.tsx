"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import HamburgerMenu from "@/components/ui/hamburger-menu";
import { Text } from "@/components/ui/typography";
import { navLinks, secondaryLinks } from "@/constants/nav-links";

import { useState } from "react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <HamburgerMenu onClick={() => setIsOpen(true)} />
      </DialogTrigger>

      <DialogContent className="bg-black flex flex-col" side="right">
        <div className="flex flex-col gap-15  pl-10  w-fit">
          <ul className="flex flex-col gap-6.25 ">
            {navLinks.map((link) => (
              <li key={link}>
                <Text
                  variant="favorit"
                  className="text-[18px] font-semibold text-(--color-brand-orange) "
                  as="a"
                  href="#"
                >
                  {link}
                </Text>
              </li>
            ))}
          </ul>

          <ul className="flex flex-col gap-3.75 mt-auto">
            {secondaryLinks.map((link) => (
              <li key={link}>
                <Text
                  variant="favorit"
                  as="a"
                  className="text-(--color-brand-orange) font-[514] text-[11px]"
                >
                  {link}
                </Text>
              </li>
            ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
}
