"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import { gallery } from "@/data/wedding";

export default function GalleryGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = () => setActiveIndex(null);

  const step = (delta: number) => {
    setActiveIndex((current) => {
      if (current === null) return null;
      return (current + delta + gallery.length) % gallery.length;
    });
  };

  /* Lock body scroll */

  useEffect(() => {
    if (activeIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  /* Keyboard Support */

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (activeIndex === null) return;

      if (event.key === "Escape") close();

      if (event.key === "ArrowRight") step(1);

      if (event.key === "ArrowLeft") step(-1);
    }

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex]);

  return (
    <>
      <div
        className="
          mx-auto
          mt-20
          grid
          max-w-6xl
          grid-cols-2
          gap-5
          md:grid-cols-3
          md:gap-8
        "
      >
        {gallery.map((photo, index) => (
          <motion.button
            key={photo.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            initial={{
              opacity: 0,
              y: 24,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: "-80px",
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.08,
            }}
            whileHover={{
              y: -8,
            }}
            className={`
              relative
              overflow-hidden
              rounded-[36px]
              border
              border-[#E8DFD5]
              bg-white
              shadow-[0_20px_60px_rgba(0,0,0,0.08)]
              ${index === 0
                ? "col-span-2 row-span-2 aspect-square md:aspect-auto"
                : "aspect-square"}
            `}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width:768px) 50vw, 33vw"
              className="
                object-cover
                transition-transform
                duration-700
                hover:scale-110
              "
            />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>

        {activeIndex !== null && (

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="
              fixed
              inset-0
              z-[100]
              flex
              items-center
              justify-center
              bg-black/90
              px-6
            "
            onClick={close}
          >

            {/* Close */}

            <button
              onClick={close}
              className="
                absolute
                right-8
                top-8
                text-white/80
                transition
                hover:text-white
              "
            >
              <X size={30} />
            </button>

            {/* Previous */}

            <button
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              className="
                absolute
                left-5
                text-white/80
                transition
                hover:text-white
              "
            >
              <ChevronLeft size={38} />
            </button>

            {/* Image */}

            <motion.div
              key={activeIndex}
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
              }}
              transition={{
                duration: 0.3,
              }}
              onClick={(e) => e.stopPropagation()}
              className="
                relative
                h-[78vh]
                w-full
                max-w-5xl
              "
            >
              <Image
                src={gallery[activeIndex].src}
                alt={gallery[activeIndex].alt}
                fill
                priority
                sizes="100vw"
                className="
                  object-contain
                  rounded-2xl
                "
              />
            </motion.div>

            {/* Next */}

            <button
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              className="
                absolute
                right-5
                text-white/80
                transition
                hover:text-white
              "
            >
              <ChevronRight size={38} />
            </button>

            {/* Counter */}

            <div
              className="
                absolute
                bottom-8
                left-1/2
                -translate-x-1/2
                rounded-full
                bg-white/10
                px-5
                py-2
                text-sm
                tracking-[0.25em]
                text-white
                backdrop-blur-lg
              "
            >
              {activeIndex + 1} / {gallery.length}
            </div>

            {/* Caption */}

            <div
              className="
                absolute
                bottom-20
                left-1/2
                max-w-xl
                -translate-x-1/2
                px-6
                text-center
                text-white/90
              "
            >
              {gallery[activeIndex].alt}
            </div>

          </motion.div>

        )}

      </AnimatePresence>
    </>
  );
}