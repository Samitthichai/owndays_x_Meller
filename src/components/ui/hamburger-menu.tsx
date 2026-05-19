import HamburgerIcon from "./icons/hamburger-icon";

type Props = {
  onClick: () => void;
};

export default function HamburgerMenu({ onClick }: Props) {
  return (
    <button
      type="button"
      className="lg:hidden flex flex-col gap-1.5"
      onClick={onClick}
      aria-label="Open menu"
    >
      <HamburgerIcon />
    </button>
  );
}
