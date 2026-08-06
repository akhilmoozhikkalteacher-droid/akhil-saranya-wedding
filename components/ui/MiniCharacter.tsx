"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import clsx from "clsx";

type Character =
  | "holding-hands"
  | "ring-exchange"
  | "welcome"
  | "reading-wishes"
  | "countdown"
  | "selfie"
  | "goodbye";

interface MiniCharacterProps {
  character: Character;
  size?: number;
  className?: string;
  floating?: boolean;
}

function getAnimation(character: Character) {
  switch (character) {
    case "holding-hands":
      return {
        animate: {
          y: [0, -5, 0],
        },
        transition: {
          duration: 5,
          repeat: Infinity,
          repeatType: "loop" as const,
          ease: "easeInOut" as const,
        },
      };

    case "ring-exchange":
      return {
        animate: {
          scale: [1, 1.02, 1],
        },
        transition: {
          duration: 4,
          repeat: Infinity,
          repeatType: "loop" as const,
          ease: "easeInOut" as const,
        },
      };

    case "welcome":
      return {
        animate: {
          rotate: [0, 2, -2, 0],
        },
        transition: {
          duration: 3.5,
          repeat: Infinity,
          repeatType: "loop" as const,
          ease: "easeInOut" as const,
        },
      };

    case "reading-wishes":
      return {
        animate: {
          rotate: [0, 1.5, -1.5, 0],
        },
        transition: {
          duration: 6,
          repeat: Infinity,
          repeatType: "loop" as const,
          ease: "easeInOut" as const,
        },
      };

    case "countdown":
      return {
        animate: {
          y: [0, -4, 0],
          scale: [1, 1.02, 1],
        },
        transition: {
          duration: 3,
          repeat: Infinity,
          repeatType: "loop" as const,
          ease: "easeInOut" as const,
        },
      };

    case "selfie":
      return {
        animate: {
          rotate: [-2, 2, -2],
        },
        transition: {
          duration: 4,
          repeat: Infinity,
          repeatType: "loop" as const,
          ease: "easeInOut" as const,
        },
      };

    case "goodbye":
      return {
        animate: {
          rotate: [0, 4, -4, 0],
        },
        transition: {
          duration: 2.5,
          repeat: Infinity,
          repeatType: "loop" as const,
          ease: "easeInOut" as const,
        },
      };

    default:
      return {
        animate: {},
        transition: {},
      };
  }
}

export default function MiniCharacter({
  character,
  size = 160,
  className,
  floating = true,
}: MiniCharacterProps) {
  const image = `/images/characters/mini/${character}.webp`;

  const content = (
    <Image
      src={image}
      alt={character}
      width={size}
      height={size}
      className="h-auto w-auto select-none"
      draggable={false}
      priority={false}
    />
  );

  if (!floating) {
    return (
      <div className={clsx("inline-flex", className)}>
        {content}
      </div>
    );
  }

  const { animate, transition } = getAnimation(character);

  return (
    <motion.div
      className={clsx(
        "inline-flex",
        (character === "welcome" || character === "goodbye")
          ? "origin-bottom"
          : "origin-center",
        className
      )}
      animate={animate}
      transition={transition}
    >
      {content}
    </motion.div>
  );
}