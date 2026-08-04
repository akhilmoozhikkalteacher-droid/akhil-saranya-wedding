"use client";

import { useEffect, useState } from "react";

import AnimatedNumber from "./AnimatedNumber";

function getRemainingTime() {
  const target = new Date("2026-08-21T10:00:00");

  const diff = target.getTime() - Date.now();

  if (diff <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor(diff / (1000 * 60 * 60) % 24),
    minutes: Math.floor(diff / (1000 * 60) % 60),
    seconds: Math.floor(diff / 1000 % 60),
  };
}

export default function CountdownDisplay() {
  const [time, setTime] = useState(getRemainingTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getRemainingTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-20">

      <div
        className="
          flex
          justify-center
          items-end
          gap-3
          md:gap-5
          text-center
        "
      >
        <div>
          <p className="font-heading text-6xl md:text-8xl gold-gradient">
            <AnimatedNumber value={time.days} />
          </p>

          <span className="block mt-3 text-xs uppercase tracking-[0.35em] text-neutral-500">
            Days
          </span>
        </div>

        <span className="pb-6 text-[#C8A96A] text-4xl">:</span>

        <div>
          <p className="font-heading text-6xl md:text-8xl gold-gradient">
            <AnimatedNumber value={time.hours} />
          </p>

          <span className="block mt-3 text-xs uppercase tracking-[0.35em] text-neutral-500">
            Hours
          </span>
        </div>

        <span className="pb-6 text-[#C8A96A] text-4xl">:</span>

        <div>
          <p className="font-heading text-6xl md:text-8xl gold-gradient">
            <AnimatedNumber value={time.minutes} />
          </p>

          <span className="block mt-3 text-xs uppercase tracking-[0.35em] text-neutral-500">
            Minutes
          </span>
        </div>

        <span className="pb-6 text-[#C8A96A] text-4xl">:</span>

        <div>
          <p className="font-heading text-6xl md:text-8xl gold-gradient">
            <AnimatedNumber value={time.seconds} />
          </p>

          <span className="block mt-3 text-xs uppercase tracking-[0.35em] text-neutral-500">
            Seconds
          </span>
        </div>

      </div>

    </div>
  );
}