"use client";

import LuxuryCard from "@/components/ui/LuxuryCard";
import GoldDivider from "@/components/ui/GoldDivider";

export default function WishesIntro() {
  return (
    <LuxuryCard
      hover={false}
      className="mx-auto max-w-3xl px-10 py-14 md:px-14 md:py-16"
    >
      <div className="text-center">

        {/* Icon */}

        <div className="text-6xl">
          💐
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
          A Note From Us
        </p>

        <h2
          className="
            mt-6
            font-heading
            text-4xl
            md:text-5xl
          "
        >
          Your Blessings Mean Everything
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
          As we begin this beautiful new chapter together,
          your love, prayers and heartfelt wishes become
          treasured memories that will remain with us for
          years to come.
        </p>

        <p
          className="
            mx-auto
            mt-8
            max-w-2xl
            leading-9
            text-neutral-500
          "
        >
          We would be truly grateful if you could leave a
          few kind words or blessings in our digital
          guestbook. Every message will forever hold a
          special place in our hearts.
        </p>

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