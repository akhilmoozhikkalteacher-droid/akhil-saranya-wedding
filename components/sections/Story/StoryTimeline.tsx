"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { story } from "@/data/wedding";

export default function StoryTimeline() {
  return (
    <div className="relative mx-auto mt-20 max-w-5xl">
      {/* Timeline line */}
      <div className="absolute left-1/2 top-0 hidden h-full w-px bg-[#E8DFD5] md:block" />
      <div className="absolute left-6 top-0 h-full w-px bg-[#E8DFD5] md:hidden" />

      <div className="space-y-24">
        {story.map((item, index) => {
          const left = index % 2 === 0;

          return (
            <motion.article
              key={item.date}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className={`
                relative
                flex
                flex-col
                pl-16
                md:pl-0
                ${
                  left
                    ? "md:items-end md:pr-[calc(50%+3rem)] md:text-right"
                    : "md:items-start md:pl-[calc(50%+3rem)] md:text-left"
                }
              `}
            >
              {/* Timeline node */}
              <div
                className="
                  absolute
                  left-6
                  top-2
                  h-4
                  w-4
                  -translate-x-1/2
                  rounded-full
                  border-2
                  border-[#C8A96A]
                  bg-white
                  md:left-1/2
                "
              />

              {/* Date */}
              <p className="uppercase tracking-[0.3em] text-xs text-[#C8A96A]">
                {item.date}
              </p>

              {/* Title */}
              <h3 className="mt-3 font-heading text-3xl">
                {item.title}
              </h3>

              {/* Optional Image */}
              {item.image && (
                <div className="mt-8 overflow-hidden rounded-3xl shadow-xl">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={900}
                    height={700}
                    className="h-auto w-full object-cover"
                  />
                </div>
              )}

              {/* Story */}
              <p className="mt-8 max-w-md leading-8 text-neutral-600">
                {item.text}
              </p>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
}