"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

import { gallery } from "@/data/wedding";

export default function GalleryGrid() {
  const [activeIndex, setActiveIndex] =
    useState<number | null>(null);

  const close = () => {
    setActiveIndex(null);
  };

  const step = (delta: number) => {
    setActiveIndex((current) => {
      if (current === null) return null;

      return (
        (current + delta + gallery.length) %
        gallery.length
      );
    });
  };

  /* -----------------------------------------
     Lock body scroll while lightbox is open
  ----------------------------------------- */

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

  /* -----------------------------------------
     Keyboard navigation
  ----------------------------------------- */

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      }

      if (event.key === "ArrowRight") {
        step(1);
      }

      if (event.key === "ArrowLeft") {
        step(-1);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener(
        "keydown",
        onKeyDown
      );
    };
  }, [activeIndex]);

  return (
    <>
      {/* -----------------------------------------
          Gallery Grid
      ----------------------------------------- */}

      <div
        className="
          grid
          grid-cols-2
          gap-4
          sm:gap-6
          md:gap-8
        "
      >
        {gallery.map((photo, index) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Open ${photo.alt}`}
            className={`
              group
              relative
              overflow-hidden
              rounded-[24px]
              border
              border-[#E8DFD5]
              bg-white
              shadow-[0_12px_40px_rgba(0,0,0,0.07)]
              transition-transform
              duration-500
              md:rounded-[36px]
              md:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
              md:hover:-translate-y-2
              ${
                index === 0
                  ? "col-span-2 aspect-[4/3] md:aspect-auto"
                  : "aspect-square"
              }
            `}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              loading={index === 0 ? "eager" : "lazy"}
              priority={index === 0}
              sizes={
                index === 0
                  ? "(max-width: 768px) 100vw, 66vw"
                  : "(max-width: 768px) 50vw, 33vw"
              }
              className="
                object-cover
                transition-transform
                duration-700
                md:group-hover:scale-[1.035]
              "
            />

            {/* Very subtle image overlay */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-t
                from-black/10
                via-transparent
                to-transparent
                opacity-0
                transition-opacity
                duration-500
                md:group-hover:opacity-100
              "
            />
          </button>
        ))}
      </div>

      {/* -----------------------------------------
          Lightbox
      ----------------------------------------- */}

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="
              fixed
              inset-0
              z-[100]
              flex
              items-center
              justify-center
              bg-black/90
              px-4
              sm:px-6
            "
            onClick={close}
          >
            {/* Close */}

            <button
              type="button"
              aria-label="Close gallery"
              onClick={close}
              className="
                absolute
                right-5
                top-5
                z-20
                p-2
                text-white/80
                transition-colors
                hover:text-white
                sm:right-8
                sm:top-8
              "
            >
              <X
                size={28}
                strokeWidth={1.5}
              />
            </button>

            {/* Previous */}

            <button
              type="button"
              aria-label="Previous image"
              onClick={(event) => {
                event.stopPropagation();
                step(-1);
              }}
              className="
                absolute
                left-3
                z-20
                p-2
                text-white/75
                transition-colors
                hover:text-white
                sm:left-5
              "
            >
              <ChevronLeft
                size={34}
                strokeWidth={1.5}
              />
            </button>

            {/* Image */}

            <motion.div
              key={activeIndex}
              initial={{
                opacity: 0,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.25,
              }}
              onClick={(event) =>
                event.stopPropagation()
              }
              className="
                relative
                h-[72vh]
                w-full
                max-w-5xl
                sm:h-[78vh]
              "
            >
              <Image
                src={gallery[activeIndex].src}
                alt={gallery[activeIndex].alt}
                fill
                priority
                sizes="100vw"
                className="
                  rounded-xl
                  object-contain
                  sm:rounded-2xl
                "
              />
            </motion.div>

            {/* Next */}

            <button
              type="button"
              aria-label="Next image"
              onClick={(event) => {
                event.stopPropagation();
                step(1);
              }}
              className="
                absolute
                right-3
                z-20
                p-2
                text-white/75
                transition-colors
                hover:text-white
                sm:right-5
              "
            >
              <ChevronRight
                size={34}
                strokeWidth={1.5}
              />
            </button>

            {/* Counter */}

            <div
              className="
                absolute
                bottom-6
                left-1/2
                -translate-x-1/2
                rounded-full
                bg-white/10
                px-4
                py-2
                text-xs
                tracking-[0.2em]
                text-white
                sm:bottom-8
                sm:px-5
                sm:text-sm
              "
            >
              {activeIndex + 1} / {gallery.length}
            </div>

            {/* Caption */}

            <div
              className="
                absolute
                bottom-16
                left-1/2
                w-full
                max-w-xl
                -translate-x-1/2
                px-12
                text-center
                text-sm
                leading-6
                text-white/90
                sm:bottom-20
                sm:px-6
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