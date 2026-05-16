"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import HamburgerMenu from "@/components/ui/hamburgetMenu";
import { Text } from "@/components/ui/typography";
import { navLinks, secondaryLinks } from "@/constant/navlink";
import { useState } from "react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <HamburgerMenu onClick={() => setIsOpen(true)} />
      </DialogTrigger>

      <DialogContent className="bg-black flex flex-col">
        <div className="flex flex-col gap-15 w-25.75">
          <ul className="flex flex-col gap-6.25 ">
            {navLinks.map((link) => (
              <li key={link}>
                <Text
                  variant="navLinkMobile"
                  className="text-[18px]! font-semibold! text-(--color-brand-orange)! "
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
                  variant="navLinkMobile"
                  as="a"
                  className="text-(--color-brand-orange)! text-[11px]!"
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
