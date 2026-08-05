"use client";

import LuxuryCard from "@/components/ui/LuxuryCard";
import GoldDivider from "@/components/ui/GoldDivider";

export default function WishesQuote() {
  return (
    <LuxuryCard
      hover={false}
      className="
        px-10
        py-16
        md:px-16
      "
    >
      <div className="text-center">

        {/* Quote */}

        <div className="text-6xl">
          🤍
        </div>

        <p
          className="
            mt-8
            text-xs
            uppercase
            tracking-[0.45em]
            text-[#C8A96A]
          "
        >
          Thank You
        </p>

        <h2
          className="
            mt-6
            font-heading
            text-4xl
            md:text-5xl
          "
        >
          Every Blessing Matters
        </h2>

        <GoldDivider className="mt-10" />

        <blockquote
          className="
            mx-auto
            mt-10
            max-w-2xl
            text-xl
            leading-10
            text-neutral-600
            italic
          "
        >
          "The greatest gift we could receive is the love,
          prayers and blessings of the people who have
          journeyed with us. Thank you for becoming a part
          of our story."
        </blockquote>

        <GoldDivider className="mt-12" />

        <p
          className="
            mt-10
            font-script
            text-4xl
            gold-gradient
          "
        >
          With Love,
        </p>

        <p
          className="
            mt-3
            font-script
            text-5xl
            gold-gradient
          "
        >
          Akhil &amp; Saranya
        </p>

      </div>
    </LuxuryCard>
  );
}