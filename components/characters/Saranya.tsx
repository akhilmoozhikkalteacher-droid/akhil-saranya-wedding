"use client";

import Character from "./Character";
import { saranyaImages } from "./characterMap";
import { CharacterSize, SaranyaPose } from "./types";

interface Props {
  pose: SaranyaPose;
  size?: CharacterSize;
  priority?: boolean;
  className?: string;
}

export default function Saranya({
  pose,
  size = "md",
  priority,
  className,
}: Props) {
  return (
    <Character
      src={saranyaImages[pose]}
      alt={`Saranya ${pose}`}
      size={size}
      priority={priority}
      className={className}
    />
  );
}