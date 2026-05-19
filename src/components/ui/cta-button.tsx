type CTAVariant = "orange" | "black";

type CTAButtonProps = {
  variant?: CTAVariant;
  disabled?: boolean;
  disabledLabel?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
};

export default function CTAButton({
  variant = "orange",
  disabled = false,
  disabledLabel = "OUT OF STOCK",
  href,
  onClick,
  className = "",
  children,
}: CTAButtonProps) {
  const variantClass = disabled
    ? "cta-btn-disabled "
    : variant === "orange"
      ? "cta-btn-orange"
      : "cta-btn-black";

  const classes = ["cta-btn rounded-[60px] ", variantClass, className].join(
    " ",
  );

  const content = disabled ? disabledLabel : children;

  if (href && !disabled) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={classes}
      disabled={disabled}
      onClick={onClick}
    >
      {content}
    </button>
  );
}
