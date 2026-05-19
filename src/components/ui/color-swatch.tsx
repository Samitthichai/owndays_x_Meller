"use client";

import { buildImageUrl, cn } from "@/utils/format";
import { useState } from "react";

const MAX_VISIBLE = 4;

type SwatchColor = {
  hex_code: string | null;
  path: string | null;
};

type Swatch = SwatchColor[];

type Props = {
  swatches: Swatch[];
  onSelect?: (index: number) => void;
};

function getSwatchStyle(colors: SwatchColor[]): React.CSSProperties {
  const valid = colors.filter((c) => c.hex_code || c.path);
  if (valid.length === 0) return { backgroundColor: "#ccc" };

  if (valid.length === 1) {
    const c = valid[0];
    if (c.hex_code) return { backgroundColor: c.hex_code };
    return {
      backgroundImage: `url("${buildImageUrl(c.path)}")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    };
  }

  const allHex = valid.every((c) => c.hex_code);
  if (allHex) {
    const step = 100 / valid.length;
    const stops = valid
      .flatMap((c, i) => [
        `${c.hex_code} ${i * step}%`,
        `${c.hex_code} ${(i + 1) * step}%`,
      ])
      .join(", ");
    return { background: `linear-gradient(135deg, ${stops})` };
  }

  const first = valid[0];
  if (first.hex_code) return { backgroundColor: first.hex_code };
  return {
    backgroundImage: `url("${buildImageUrl(first.path)}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
}

function ColorSwatch({
  colors,
  selected,
  onClick,
}: {
  colors: SwatchColor[];
  selected: boolean;
  onClick: (e: React.MouseEvent) => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Select color"
      className={cn(
        "flex items-center justify-center rounded-full transition-all cursor-pointer shrink-0",
        "w-7 h-7 lg:w-8 lg:h-8 xl:w-9.5 xl:h-9.5",
        selected && "ring-[1px] ring-(--color-brand-orange)",
      )}
    >
      <div
        className="w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 rounded-full"
        style={getSwatchStyle(colors)}
      />
    </button>
  );
}

export default function ColorSwatches({ swatches, onSelect }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const visible = swatches.slice(0, MAX_VISIBLE);
  const overflow = swatches.length - MAX_VISIBLE;

  function handleSelect(i: number, e: React.MouseEvent) {
    e.stopPropagation();
    setSelectedIndex(i);
    onSelect?.(i);
  }

  return (
    <div className="flex items-center gap-0.75">
      {visible.map((colors, i) => (
        <ColorSwatch
          key={i}
          colors={colors}
          selected={selectedIndex === i}
          onClick={(e) => handleSelect(i, e)}
        />
      ))}
      {overflow > 0 && (
        <span className="text-xs text-black/40 ml-1">+{overflow}</span>
      )}
    </div>
  );
}
