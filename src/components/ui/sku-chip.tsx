"use client";

import { cn } from "@/utils/format";

type Props = {
  label: string;
  selected: boolean;
  onClick: () => void;
};

export default function SkuChip({ label, selected, onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      data-selected={selected}
      className={cn(
        "rounded-[60px] px-2.5 py-1.5",
        "chip",
        selected && "chip-selected",
      )}
    >
      {label}
    </button>
  );
}
