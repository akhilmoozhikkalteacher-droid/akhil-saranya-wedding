"use client";

import clsx from "clsx";

interface DecorativeCornerProps {
  position:
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right";

  className?: string;
}

export default function DecorativeCorner({
  position,
  className,
}: DecorativeCornerProps) {
  const positions = {
    "top-left":
      "top-6 left-6 border-t border-l rounded-tl-2xl",

    "top-right":
      "top-6 right-6 border-t border-r rounded-tr-2xl",

    "bottom-left":
      "bottom-6 left-6 border-b border-l rounded-bl-2xl",

    "bottom-right":
      "bottom-6 right-6 border-b border-r rounded-br-2xl",
  };

  return (
    <div
      className={clsx(
        `
        absolute
        h-8
        w-8
        border-[#D8BE87]/45
        pointer-events-none
        `,
        positions[position],
        className
      )}
    />
  );
}