"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

const MAX_VISIBLE = 4;

type Swatch = {
  hex_code: string | null;
  path: string | null;
};

type Props = {
  swatches: Swatch[];
  imageBaseUrl?: string;
  onSelect?: (index: number) => void;
};

function ColorSwatch({
  swatch,
  imageBaseUrl,
  selected,
  onClick,
}: {
  swatch: Swatch;
  imageBaseUrl: string;
  selected: boolean;
  onClick: () => void;
}) {
  const style: React.CSSProperties = swatch.hex_code
    ? { backgroundColor: swatch.hex_code }
    : swatch.path
      ? {
          backgroundImage: `url(${imageBaseUrl}/${swatch.path})`,
          backgroundSize: "cover",
        }
      : { backgroundColor: "#ccc" };

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Select color"
      className={cn(
        "flex items-center justify-center rounded-full transition-all cursor-pointer shrink-0",
        "w-9.5 h-9.5",
        selected && "ring-[1px]  ring-(--color-brand-orange)",
      )}
    >
      <div className="w-7 h-7 rounded-full" style={style} />
    </button>
  );
}

export default function ColorSwatches({
  swatches,
  imageBaseUrl = "",
  onSelect,
}: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const visible = swatches.slice(0, MAX_VISIBLE);
  const overflow = swatches.length - MAX_VISIBLE;

  function handleSelect(i: number) {
    setSelectedIndex(i);
    onSelect?.(i);
  }

  return (
    <div className="flex items-center gap-0.75">
      {visible.map((swatch, i) => (
        <ColorSwatch
          key={i}
          swatch={swatch}
          imageBaseUrl={imageBaseUrl}
          selected={selectedIndex === i}
          onClick={() => handleSelect(i)}
        />
      ))}
      {overflow > 0 && (
        <span className="text-xs text-black/40 ml-1">+{overflow}</span>
      )}
    </div>
  );
}
