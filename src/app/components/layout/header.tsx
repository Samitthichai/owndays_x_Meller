import logoImg from "@/assets/images/Collab-Logo.png";
import heroImg from "@/assets/images/owndays_meller_header_bg.png";
import { navLinks } from "@/constant/navlink";
import Image from "next/image";

export default function Header() {
  return (
    <div className="sticky w-full h-158.25 top-0 z-50 max-w-360">
      <Image
        src={heroImg}
        alt="OWNDAYS × MELLER BG"
        fill
        className="object-cover object-top "
        priority
      />

      <nav className="absolute flex items-center justify-between py-6.25 container-main">
        <Image
          src={logoImg}
          alt="OWNDAYS × MELLER"
          className="object-cover w-87.75 h-13"
          priority
        />
        <ul className="flex gap-12.5 ">
          {navLinks.map((link) => (
            <li key={link}>
              <a href="#" className="nav-link">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-gt-american-display">PRODUCTS</div>
      </div>
    </div>
  );
}
