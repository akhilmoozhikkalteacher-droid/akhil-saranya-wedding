"use client";

import LuxuryCard from "@/components/ui/LuxuryCard";
import GoldDivider from "@/components/ui/GoldDivider";

interface WishCardProps {
  name: string;
  message: string;
}

export default function WishCard({
  name,
  message,
}: WishCardProps) {
  return (
    <article className="h-full animate-wish-card">

      <LuxuryCard
        className="
          h-full
          px-6
          py-8
          sm:px-8
          sm:py-10
        "
      >
        <div className="flex h-full flex-col">

          {/* Quote */}

          <div
            aria-hidden="true"
            className="
              text-5xl
              leading-none
              text-[#C8A96A]/40
            "
          >
            “
          </div>

          {/* Message */}

          <p
            className="
              mt-4
              flex-1
              leading-8
              text-neutral-600
            "
          >
            {message}
          </p>

          {/* Divider */}

          <GoldDivider className="mt-8" />

          {/* Author */}

          <div className="mt-8">

            <p
              className="
                text-xs
                uppercase
                tracking-[0.35em]
                text-neutral-400
              "
            >
              With Blessings
            </p>

            <h3
              className="
                mt-3
                font-heading
                text-2xl
              "
            >
              {name}
            </h3>

          </div>

        </div>
      </LuxuryCard>
    </article>
  );
}