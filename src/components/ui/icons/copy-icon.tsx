import { iconProps } from "@/types/iconProps";

export default function CopyIcon({ size, color = "#FF6723", className }: iconProps) {
  return (
    <svg
      {...(size ? { width: size, height: (size * 15) / 17 } : {})}
      viewBox="0 0 17 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#copy-clip)">
        <path
          d="M15.3522 2.54663V13.4586L2.52637 13.4373V15H16.8943V2.54663H15.3522Z"
          fill={color}
        />
        <path
          d="M0 12.4534V0H14.368V12.4534H0ZM12.8258 10.912V1.54142H1.54213V10.912H12.8258Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="copy-clip">
          <rect width="16.8944" height="15" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
