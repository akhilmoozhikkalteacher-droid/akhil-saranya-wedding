"use client";

import Character from "./Character";
import { coupleImages } from "./characterMap";
import { CharacterSize, CouplePose } from "./types";

interface Props {
  pose: CouplePose;
  size?: CharacterSize;
  priority?: boolean;
  className?: string;
}

export default function Couple({
  pose,
  size = "md",
  priority,
  className,
}: Props) {
  return (
    <Character
      src={coupleImages[pose]}
      alt={`Couple ${pose}`}
      size={size}
      priority={priority}
      className={className}
    />
  );
}