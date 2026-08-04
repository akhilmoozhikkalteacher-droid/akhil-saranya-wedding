"use client";

import { motion } from "framer-motion";

export default function WeddingTimeline() {
  const events = [
    {
      time: "10:00 AM",
      title: "Wedding Ceremony",
      description: "Traditional wedding rituals begin.",
      color: "#C8A96A",
    },
    {
      time: "1:00 PM",
      title: "Reception",
      description: "Lunch and celebration with family & friends.",
      color: "#355D50",
    },
  ];

  return (
    <section className="mx-auto max-w-5xl">

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
      >

        <p
          className="
            text-center
            text-xs
            uppercase
            tracking-[0.45em]
            text-[#C8A96A]
          "
        >
          The Wedding Journey
        </p>

        <div className="relative mt-20">

          {/* Vertical Line */}

          <motion.div
            initial={{
              height: 0,
            }}
            whileInView={{
              height: "100%",
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1.2,
            }}
            className="
              absolute
              left-1/2
              top-0
              w-[2px]
              -translate-x-1/2
              bg-gradient-to-b
              from-[#C8A96A]
              via-[#D8BE87]
              to-[#355D50]
            "
          />

          <div className="space-y-24">

            {events.map((event, index) => (

              <motion.div
                key={event.title}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -40 : 40,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.2,
                }}
                className={`
                  relative
                  flex
                  items-center
                  ${
                    index % 2 === 0
                      ? "justify-start"
                      : "justify-end"
                  }
                `}
              >

                {/* Card */}

                <div
                  className="
                    w-full
                    max-w-md
                    rounded-[30px]
                    border
                    border-[#E8DFD5]
                    bg-white
                    p-8
                    shadow-[0_20px_50px_rgba(0,0,0,0.08)]
                  "
                >

                  <p
                    className="text-xs uppercase tracking-[0.35em]"
                    style={{
                      color: event.color,
                    }}
                  >
                    {event.time}
                  </p>

                  <h3
                    className="
                      mt-4
                      font-heading
                      text-3xl
                    "
                  >
                    {event.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      leading-8
                      text-neutral-600
                    "
                  >
                    {event.description}
                  </p>

                </div>

                {/* Timeline Node */}

                <motion.div
                  whileHover={{
                    scale: 1.2,
                  }}
                  className="
                    absolute
                    left-1/2
                    flex
                    h-7
                    w-7
                    -translate-x-1/2
                    items-center
                    justify-center
                    rounded-full
                    border-4
                    border-white
                    shadow-lg
                  "
                  style={{
                    background: event.color,
                  }}
                />

              </motion.div>

            ))}

          </div>

        </div>

      </motion.div>

    </section>
  );
}