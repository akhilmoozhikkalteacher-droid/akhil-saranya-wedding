"use client";

import Image from "next/image";

import { sizes } from "./characterMap";
import { CharacterSize } from "./types";

interface Props {
  src: string;
  alt: string;
  size?: CharacterSize;
  priority?: boolean;
  className?: string;
}

export default function Character({
  src,
  alt,
  size = "md",
  priority = false,
  className = "",
}: Props) {
  const dimension = sizes[size];

  return (
    <Image
      src={src}
      alt={alt}
      width={dimension}
      height={dimension * 1.5}
      priority={priority}
      className={`h-auto w-full ${className}`}
    />
  );
}