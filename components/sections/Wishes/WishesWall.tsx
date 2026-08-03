"use client";

import { FormEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
  wishes as initialWishes,
  wishesEndpoint,
} from "@/data/wedding";

import Button from "@/components/ui/Button";

type Status =
  | "idle"
  | "submitting"
  | "success"
  | "error";

const inputClass = `
w-full
rounded-[24px]
border
border-[#E8DFD5]
bg-white/70
px-5
py-4
text-sm
text-neutral-700
placeholder:text-neutral-400
outline-none
transition-all
duration-300
focus:border-[#C8A96A]
focus:ring-4
focus:ring-[#C8A96A]/10
`;

export default function WishesWall() {
  const [wishes, setWishes] =
    useState(initialWishes);

  const [name, setName] =
    useState("");

  const [message, setMessage] =
    useState("");

  const [status, setStatus] =
    useState<Status>("idle");

  async function handleSubmit(
    e: FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    if (!name.trim() || !message.trim()) {
      return;
    }

    if (!wishesEndpoint) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch(
        wishesEndpoint,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",

            Accept: "application/json",
          },

          body: JSON.stringify({
            name,
            message,
          }),
        }
      );

      if (!response.ok) {
        throw new Error();
      }

      setWishes((previous) => [
        {
          name,
          message,
        },
        ...previous,
      ]);

      setName("");

      setMessage("");

      setStatus("success");

      setTimeout(() => {
        setStatus("idle");
      }, 3000);

    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="mx-auto mt-16 max-w-5xl">

      {/* Leave a Wish */}

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
        className="
          rounded-[36px]
          border
          border-[#E8DFD5]
          bg-white/70
          p-8
          shadow-[0_20px_60px_rgba(0,0,0,0.08)]
          backdrop-blur-lg
          md:p-12
        "
      >

        <h3 className="font-heading text-3xl text-center">
          Leave a Wish
        </h3>

        <p className="mt-4 text-center leading-8 text-neutral-600">
          We'd love to hear your heartfelt wishes
          and blessings as we begin this beautiful
          new chapter together.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-8"
        >

          <div>

            <label
              htmlFor="name"
              className="
                mb-3
                block
                text-xs
                uppercase
                tracking-[0.3em]
                text-neutral-500
              "
            >
              Your Name
            </label>

            <input
              id="name"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              placeholder="Enter your name"
              className={inputClass}
              required
            />

          </div>

          <div>

            <label
              htmlFor="message"
              className="
                mb-3
                block
                text-xs
                uppercase
                tracking-[0.3em]
                text-neutral-500
              "
            >
              Your Wishes
            </label>

            <textarea
              id="message"
              rows={5}
              value={message}
              onChange={(e) =>
                setMessage(e.target.value)
              }
              placeholder="Write a heartfelt message..."
              className={inputClass}
              required
            />

          </div>

          <AnimatePresence>

            {status === "success" && (

              <motion.div
                initial={{
                  opacity: 0,
                  y: -10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                }}
                className="
                  rounded-[24px]
                  border
                  border-green-200
                  bg-green-50
                  px-6
                  py-4
                  text-center
                  text-green-700
                "
              >
                ❤️ Thank you for your beautiful wishes!
              </motion.div>

            )}

            {status === "error" && (

              <motion.div
                initial={{
                  opacity: 0,
                  y: -10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                }}
                className="
                  rounded-[24px]
                  border
                  border-red-200
                  bg-red-50
                  px-6
                  py-4
                  text-center
                  text-red-600
                "
              >
                {wishesEndpoint
                  ? "Unable to send your wishes. Please try again."
                  : "Wishes endpoint has not been configured yet."}
              </motion.div>

            )}

          </AnimatePresence>

          <div className="pt-2 text-center">

            <Button
              type="submit"
              disabled={
                status === "submitting"
              }
            >
              {status === "submitting"
                ? "Sending..."
                : "Send Wishes"}
            </Button>

          </div>

        </form>

      </motion.div>
            {/* Guestbook */}

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
          delay: 0.2,
          duration: 0.8,
        }}
        className="mt-20"
      >

        <div className="text-center">

          <p
            className="
              uppercase
              tracking-[0.35em]
              text-xs
              text-[#C8A96A]
            "
          >
            Guestbook
          </p>

          <h3 className="mt-4 font-heading text-4xl">
            Heartfelt Wishes
          </h3>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-neutral-600">
            Every blessing, every kind word, and every thoughtful
            message becomes a treasured memory that we will
            cherish forever.
          </p>

        </div>

        <div className="mt-12 space-y-6">

          {wishes.length === 0 ? (

            <div
              className="
                rounded-[32px]
                border
                border-dashed
                border-[#E8DFD5]
                bg-white/60
                px-8
                py-16
                text-center
              "
            >

              <p className="text-lg text-neutral-500">
                Be the first to leave a wish ❤️
              </p>

            </div>

          ) : (

            wishes.map((wish, index) => (

              <motion.div
                key={`${wish.name}-${index}`}
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
                  margin: "-40px",
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -6,
                }}
                className="
                  rounded-[32px]
                  border
                  border-[#E8DFD5]
                  bg-white/70
                  p-8
                  shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                  backdrop-blur-lg
                "
              >

                <div className="flex items-center gap-3">

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      bg-[#C8A96A]/10
                      text-xl
                    "
                  >
                    ❤️
                  </div>

                  <div>

                    <h4
                      className="
                        font-heading
                        text-xl
                        text-[#355D50]
                      "
                    >
                      {wish.name}
                    </h4>

                    <p
                      className="
                        text-xs
                        uppercase
                        tracking-[0.25em]
                        text-[#C8A96A]
                      "
                    >
                      Best Wishes
                    </p>

                  </div>

                </div>

                <p
                  className="
                    mt-6
                    leading-8
                    text-neutral-600
                  "
                >
                  “{wish.message}”
                </p>

              </motion.div>

            ))

          )}

        </div>

      </motion.div>

    </div>
  );
}