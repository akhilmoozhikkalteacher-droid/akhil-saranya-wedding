"use client";

import { motion } from "framer-motion";

import { wedding } from "@/data/wedding";

export default function VenueDetails() {
  return (
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
        duration: 0.8,
      }}
      className="mx-auto mt-16 max-w-5xl"
    >
      <div
        className="
          grid
          gap-6
          md:grid-cols-3
        "
      >
        {wedding.arrival.map((item, index) => (
          <motion.div
            key={item.label}
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
              delay: index * 0.15,
              duration: 0.6,
            }}
            whileHover={{
              y: -6,
              scale: 1.02,
            }}
            className="
              rounded-[32px]
              border
              border-[#E8DFD5]
              bg-white/70
              px-8
              py-10
              text-center
              backdrop-blur-lg
              shadow-[0_20px_60px_rgba(0,0,0,0.08)]
            "
          >
            <p
              className="
                uppercase
                tracking-[0.35em]
                text-xs
                text-[#C8A96A]
              "
            >
              {item.label}
            </p>

            <p
              className="
                mt-5
                leading-8
                text-neutral-600
              "
            >
              {item.detail}
            </p>
          </motion.div>
        ))}
      </div>

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
          delay: 0.4,
          duration: 0.8,
        }}
        className="mt-14 flex justify-center"
      >
        <motion.a
          href={wedding.map}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.98,
          }}
          className="
            inline-flex
            items-center
            justify-center
            rounded-full
            border
            border-[#C8A96A]
            px-10
            py-4
            text-sm
            uppercase
            tracking-[0.3em]
            transition-all
            duration-300
            hover:bg-[#C8A96A]
            hover:text-white
          "
        >
          Open in Google Maps
        </motion.a>
      </motion.div>
    </motion.div>
  );
}