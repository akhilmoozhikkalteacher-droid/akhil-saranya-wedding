"use client";

import clsx from "clsx";

import MiniCharacter from "@/components/ui/MiniCharacter";
import GoldDivider from "@/components/ui/GoldDivider";

type Character =
  | "holding-hands"
  | "ring-exchange"
  | "welcome"
  | "reading-wishes"
  | "countdown"
  | "selfie"
  | "goodbye";

interface SectionHeadingProps {
  chapter?: string;
  title: string;
  description: string;
  character?: Character;
  characterSize?: number;
  characterPosition?: "top" | "right";
}

export default function SectionHeading({
  chapter,
  title,
  description,
  character,
  characterSize = 170,
  characterPosition = "top",
}: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-5xl">

      {characterPosition === "top" ? (

        <div className="flex flex-col items-center text-center">

          {character && (
            <MiniCharacter
              character={character}
              size={characterSize}
              className="mb-8"
            />
          )}

          {chapter && (
            <p
              className="
                text-xs
                uppercase
                tracking-[0.45em]
                text-[#C8A96A]
              "
            >
              {chapter}
            </p>
          )}

          <h2
            className={clsx(
              "font-heading text-5xl md:text-7xl",
              chapter && "mt-6"
            )}
          >
            {title}
          </h2>

          <GoldDivider className="mt-10" />

          <p
            className="
              mx-auto
              mt-10
              max-w-2xl
              leading-9
              text-neutral-600
            "
          >
            {description}
          </p>

        </div>

      ) : (

        <div className="grid items-center gap-12 md:grid-cols-[1fr_200px]">

          <div>

            {chapter && (
              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.45em]
                  text-[#C8A96A]
                "
              >
                {chapter}
              </p>
            )}

            <h2
              className={clsx(
                "font-heading text-5xl md:text-7xl",
                chapter && "mt-6"
              )}
            >
              {title}
            </h2>

            <GoldDivider className="mt-10" />

            <p
              className="
                mt-10
                max-w-2xl
                leading-9
                text-neutral-600
              "
            >
              {description}
            </p>

          </div>

          <div className="hidden justify-end md:flex">

            {character && (
              <MiniCharacter
                character={character}
                size={characterSize}
              />
            )}

          </div>

        </div>

      )}

    </div>
  );
}