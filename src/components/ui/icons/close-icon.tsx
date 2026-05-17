import { iconProps } from "@/types/iconProps";

export default function CloseIcon({ size = 28, color = "#FF6723" }: iconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.745 27.23L13.615 16.0825L2.485 27.23L0 24.745L11.1475 13.615L0 2.485L2.485 0L13.615 11.1475L24.745 0.0175004L27.2125 2.485L16.0825 13.615L27.2125 24.745L24.745 27.23Z"
        fill={color}
      />
    </svg>
  );
}
