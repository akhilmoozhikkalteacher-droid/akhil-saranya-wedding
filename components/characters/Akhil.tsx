"use client";

import Character from "./Character";
import { akhilImages } from "./characterMap";
import { AkhilPose, CharacterSize } from "./types";

interface Props {
  pose: AkhilPose;
  size?: CharacterSize;
  priority?: boolean;
  className?: string;
}

export default function Akhil({
  pose,
  size = "md",
  priority,
  className,
}: Props) {
  return (
    <Character
      src={akhilImages[pose]}
      alt={`Akhil ${pose}`}
      size={size}
      priority={priority}
      className={className}
    />
  );
}