import CartIcon from "@/components/ui/icons/cart-icon";
import ChevronRightIcon from "@/components/ui/icons/chevron-right-icon";
import CopyIcon from "@/components/ui/icons/copy-icon";
import IgIcon from "@/components/ui/icons/ig-icon";
import { Text } from "@/components/ui/typography";
import { navLinks, secondaryLinks } from "@/constants/nav-links";

function NavLink({ label }: { label: string }) {
  return (
    <Text
      variant="favorit"
      as="a"
      href="#"
      className="nav-link-footer font-semibold text-(--color-brand-orange)"
    >
      {label}
    </Text>
  );
}

function SecondaryLink({ label }: { label: string }) {
  return (
    <Text
      variant="favorit"
      as="a"
      className="text-(--color-brand-orange) font-[514] nav-link-secondary-footer"
    >
      {label}
    </Text>
  );
}

function OnlineStore({
  cartSize,
  titleClassName,
  containerClassName,
  rowClassName,
}: {
  cartSize: number;
  titleClassName: string;
  containerClassName?: string;
  rowClassName?: string;
}) {
  return (
    <div className={containerClassName}>
      <div className={rowClassName ?? "flex items-center gap-3.5"}>
        <CartIcon size={cartSize} />
        <Text
          variant="favorit"
          as="a"
          href="#"
          className={`font-semibold text-(--color-brand-orange) ${titleClassName}`}
        >
          ONLINE STORE
        </Text>
      </div>
      <div className="flex items-center gap-1.5">
        <Text
          variant="favorit"
          as="a"
          href="#"
          className="nav-link-secondary-footer text-(--color-brand-orange)"
        >
          OWNDAYS.COM
        </Text>
        <CopyIcon size={16} />
      </div>
    </div>
  );
}

function Copyright() {
  return (
    <Text
      variant="favorit"
      as="span"
      className="text-footer-copyrigth text-center"
    >
      COPYRIGHT (C) OWNDAYS co., ltd. ALL RIGHTS RESERVED.
    </Text>
  );
}

export default function Footer() {
  return (
    <footer className="bg-(--color-brand-black) w-full border-t-2 border-(--color-brand-orange)">
      <div className="md:hidden">
        {navLinks.map((link) => (
          <div
            key={link}
            className="flex items-center justify-between px-7.5 py-4 border-b-2 border-(--color-brand-orange) h-15"
          >
            <NavLink label={link} />
            <ChevronRightIcon size={11} />
          </div>
        ))}

        <OnlineStore
          cartSize={32}
          titleClassName="text-[16px]"
          containerClassName="flex items-center justify-between px-7.5 py-10 border-b border-(--color-brand-orange)"
          rowClassName="flex items-center"
        />

        <div className="px-7.5 py-6 border-b border-(--color-brand-orange)">
          <ul className="flex flex-col gap-3">
            {secondaryLinks.map((link) => (
              <li key={link} className="whitespace-nowrap">
                <SecondaryLink label={link} />
              </li>
            ))}
          </ul>
          <div className="mt-7.5">
            <IgIcon size={16} />
          </div>
        </div>

        <div className="px-6 py-7.5 justify-center flex">
          <Copyright />
        </div>
      </div>

      <div className="hidden md:block">
        <div className="grid grid-cols-[65%_35%] min-h-45">
          <div className="border-r-2 border-(--color-brand-orange) px-14 py-14">
            <ul className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <li key={link}>
                  <NavLink label={link} />
                </li>
              ))}
            </ul>
            <div className="mt-13.75">
              <IgIcon size={16} />
            </div>
          </div>

          <OnlineStore
            cartSize={37}
            titleClassName="text-[21px]"
            containerClassName="flex flex-col items-center justify-center gap-2 px-14 py-14"
          />
        </div>

        <div className="grid grid-cols-[65%_35%] border-t-2 border-(--color-brand-orange)">
          <div className="flex items-center px-14 py-4">
            <ul className="flex flex-wrap gap-x-6 gap-y-1">
              {secondaryLinks.map((link) => (
                <li key={link} className="whitespace-nowrap">
                  <SecondaryLink label={link} />
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-center px-8 py-4">
            <Copyright />
          </div>
        </div>
      </div>
    </footer>
  );
}
