import { iconProps } from "@/types/iconProps";

export default function ChevronRightIcon({ size, color = "#FF6723", className }: iconProps) {
  return (
    <svg
      {...(size ? { width: size, height: (size * 14) / 8 } : {})}
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0.707031 12.3737L6.54036 6.54036L0.707031 0.707031"
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
