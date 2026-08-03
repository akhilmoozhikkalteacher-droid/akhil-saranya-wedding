"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Section from "@/components/ui/Section";
import { Couple } from "@/components/characters";
import AnimatedNumber from "./AnimatedNumber";
import { wedding } from "@/data/wedding";

interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeRemaining(): CountdownTime {
  const target = new Date("2026-08-21T10:00:00").getTime();
  const now = Date.now();

  const difference = target - now;

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
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

const labels = [
  "Days",
  "Hours",
  "Minutes",
  "Seconds",
];

export default function Countdown() {
  const [time, setTime] = useState(getTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const values = [
    time.days,
    time.hours,
    time.minutes,
    time.seconds,
  ];

  const finished = values.every((value) => value === 0);

  return (
    <Section
      id="countdown"
      className="relative overflow-hidden paper"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div
          className="
            absolute
            left-1/2
            top-0
            h-[560px]
            w-[560px]
            -translate-x-1/2
            rounded-full
            bg-[#C8A96A]/10
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            right-10
            top-40
            h-[240px]
            w-[240px]
            rounded-full
            bg-[#C8A96A]/10
            blur-[100px]
          "
        />

      </div>

      <div className="relative z-10">

        {/* Character */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.9,
          }}
          className="mb-14 flex justify-center"
        >
          <motion.div
            animate={{
              y: [0, -8, 0],
              rotate: [0, 0.5, 0, -0.5, 0],
            }}
            transition={{
              y: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              },
              rotate: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <Couple
              pose="countdown"
              size="lg"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.15,
            duration: 0.8,
          }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[0.45em] text-[#C8A96A]">
            Chapter I
          </p>

          <h2 className="mt-5 font-heading text-5xl md:text-6xl">
            Our Forever Begins In
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-neutral-600">
            Every passing second brings us closer
            to the beginning of our forever.
          </p>
        </motion.div>

        {/* Countdown */}

        {!finished ? (

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.3,
              duration: 0.8,
            }}
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
            {labels.map((label, index) => (

              <motion.div
                key={label}
                whileHover={{
                  y: -6,
                  scale: 1.03,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="
                  rounded-[32px]
                  border
                  border-[#E8DFD5]
                  bg-white/70
                  px-6
                  py-8
                  text-center
                  backdrop-blur-lg
                  shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                "
              >
                <div className="font-heading text-6xl md:text-7xl gold-gradient">
                  <AnimatedNumber value={values[index]} />
                </div>

                <p
                  className="
                    mt-5
                    text-xs
                    uppercase
                    tracking-[0.35em]
                    text-neutral-500
                  "
                >
                  {label}
                </p>

              </motion.div>

            ))}
          </motion.div>

        ) : (

          <div className="mt-24 text-center">

            <h3 className="font-script text-7xl gold-gradient">
              Today is the Day!
            </h3>

            <p className="mt-8 text-lg text-neutral-600">
              Welcome to our wedding celebration.
            </p>

          </div>

        )}

        {/* Divider */}

        <div
          className="
            mx-auto
            mt-20
            h-px
            w-48
            bg-gradient-to-r
            from-transparent
            via-[#C8A96A]
            to-transparent
          "
        />

        {/* Wedding Details */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.45,
            duration: 0.8,
          }}
          className="mt-14 flex justify-center"
        >
          <div
            className="
              max-w-xl
              rounded-[32px]
              border
              border-[#E8DFD5]
              bg-white/70
              px-10
              py-10
              text-center
              backdrop-blur-lg
              shadow-[0_20px_60px_rgba(0,0,0,0.08)]
            "
          >
            <p className="uppercase tracking-[0.35em] text-neutral-500">
              {wedding.day}
            </p>

            <h3 className="mt-4 font-heading text-4xl">
              {wedding.date}
            </h3>

            <p className="mt-5 text-lg text-[#355D50]">
              {wedding.time}
            </p>

            <p className="mt-3 text-neutral-500">
              {wedding.venue}, {wedding.place}
            </p>
          </div>
        </motion.div>

      </div>
    </Section>
  );
}