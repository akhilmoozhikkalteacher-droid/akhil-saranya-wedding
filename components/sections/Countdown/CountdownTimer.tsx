"use client";

import { useEffect, useState } from "react";

import CountdownCard from "./CountdownCard";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(): TimeLeft {
  const target = new Date("2026-08-21T10:00:00");

  const difference = target.getTime() - Date.now();

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor(
      (difference / (1000 * 60 * 60)) % 24
    ),
    minutes: Math.floor(
      (difference / (1000 * 60)) % 60
    ),
    seconds: Math.floor(
      (difference / 1000) % 60
    ),
  };
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] =
    useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const weddingStarted =
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0;

  if (weddingStarted) {
    return (
      <div className="mt-20 text-center">

        <h3 className="font-script text-6xl gold-gradient">
          Today is the Day!
        </h3>

        <p className="mt-6 text-neutral-600">
          Welcome to our wedding celebration.
        </p>

      </div>
    );
  }

  return (
    <>

      <div
        className="
          mx-auto
          mt-20
          grid
          max-w-5xl
          grid-cols-2
          gap-6
          md:grid-cols-4
        "
      >
        <CountdownCard
          value={timeLeft.days}
          label="Days"
        />

        <CountdownCard
          value={timeLeft.hours}
          label="Hours"
        />

        <CountdownCard
          value={timeLeft.minutes}
          label="Minutes"
        />

        <CountdownCard
          value={timeLeft.seconds}
          label="Seconds"
        />

      </div>

      <p
        className="
          mt-14
          text-center
          uppercase
          tracking-[0.35em]
          text-neutral-500
        "
      >
        Friday • 21 August 2026
      </p>

    </>
  );
}