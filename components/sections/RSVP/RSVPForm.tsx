"use client";

import { FormEvent, useState } from "react";

import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

import { rsvpEndpoint } from "@/data/wedding";
import Button from "@/components/ui/Button";

type Status =
  | "idle"
  | "submitting"
  | "success"
  | "error";

type Attendance =
  | "yes"
  | "no";

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

export default function RSVPForm() {
  const [status, setStatus] =
    useState<Status>("idle");

  const [attending, setAttending] =
    useState<Attendance>("yes");

  async function handleSubmit(
    e: FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    if (!rsvpEndpoint) {
      setStatus("error");
      return;
    }

    const form = new FormData(e.currentTarget);

    const payload = {
      name: form.get("name"),
      attending,
      guests: form.get("guests"),
      meal: form.get("meal"),
      message: form.get("message"),
    };

    setStatus("submitting");

    try {
      const response = await fetch(
        rsvpEndpoint,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",

            Accept: "application/json",
          },

          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error();
      }

      setStatus("success");

      e.currentTarget.reset();

      setAttending("yes");
    } catch {
      setStatus("error");
    }
  }

  return (
    <AnimatePresence mode="wait">

      {status === "success" ? (

        <motion.div
          key="success"
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -20,
          }}
          transition={{
            duration: 0.5,
          }}
          className="
            mx-auto
            mt-16
            max-w-3xl
            overflow-hidden
            rounded-[36px]
            border
            border-[#E8DFD5]
            bg-white/70
            px-10
            py-16
            text-center
            shadow-[0_20px_60px_rgba(0,0,0,0.08)]
            backdrop-blur-lg
          "
        >
          <h3 className="font-script text-6xl gold-gradient">
            Thank You
          </h3>

          <p className="mt-8 text-lg leading-8 text-neutral-600">
            Your RSVP has been received successfully.
          </p>

          <p className="mt-4 leading-8 text-neutral-500">
            We truly appreciate your response
            and look forward to celebrating
            this beautiful day with you.
          </p>
        </motion.div>

      ) : (

        <motion.form
          key="form"
          onSubmit={handleSubmit}
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
            mx-auto
            mt-16
            max-w-3xl
            overflow-hidden
            rounded-[36px]
            border
            border-[#E8DFD5]
            bg-white/70
            px-8
            py-10
            shadow-[0_20px_60px_rgba(0,0,0,0.08)]
            backdrop-blur-lg
            md:px-12
          "
        >
          <div className="space-y-8">

            {/* Name */}

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
                Full Name
              </label>

              <input
                id="name"
                name="name"
                required
                placeholder="Enter your full name"
                className={inputClass}
              />

            </div>

            {/* Attendance */}

            <div>

              <label
                className="
                  mb-3
                  block
                  text-xs
                  uppercase
                  tracking-[0.3em]
                  text-neutral-500
                "
              >
                Will you be attending?
              </label>

              <div className="grid gap-4 md:grid-cols-2">

                {(["yes", "no"] as const).map(
                  (option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() =>
                        setAttending(option)
                      }
                      className={clsx(
                        `
                        rounded-[24px]
                        border
                        px-6
                        py-5
                        text-sm
                        uppercase
                        tracking-[0.2em]
                        transition-all
                        duration-300
                        `,
                        attending === option
                          ? "border-[#C8A96A] bg-[#C8A96A] text-white shadow-lg"
                          : "border-[#E8DFD5] bg-white text-neutral-600 hover:border-[#C8A96A]"
                      )}
                    >
                      <div className="font-medium">
                        {option === "yes"
                          ? "Joyfully Accept"
                          : "Regretfully Decline"}
                      </div>
                    </button>
                  )
                )}

              </div>

            </div>
                        {/* Guests & Meal */}

            <AnimatePresence>

              {attending === "yes" && (

                <motion.div
                  initial={{
                    opacity: 0,
                    height: 0,
                  }}
                  animate={{
                    opacity: 1,
                    height: "auto",
                  }}
                  exit={{
                    opacity: 0,
                    height: 0,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                  className="space-y-8 overflow-hidden"
                >

                  <div>

                    <label
                      htmlFor="guests"
                      className="
                        mb-3
                        block
                        text-xs
                        uppercase
                        tracking-[0.3em]
                        text-neutral-500
                      "
                    >
                      Number of Guests
                    </label>

                    <input
                      id="guests"
                      name="guests"
                      type="number"
                      min={1}
                      defaultValue={1}
                      className={inputClass}
                    />

                  </div>

                  <div>

                    <label
                      htmlFor="meal"
                      className="
                        mb-3
                        block
                        text-xs
                        uppercase
                        tracking-[0.3em]
                        text-neutral-500
                      "
                    >
                      Meal Preference
                    </label>

                    <select
                      id="meal"
                      name="meal"
                      className={inputClass}
                      defaultValue="veg"
                    >
                      <option value="veg">
                        Vegetarian
                      </option>

                      <option value="non-veg">
                        Non-Vegetarian
                      </option>

                    </select>

                  </div>

                </motion.div>

              )}

            </AnimatePresence>

            {/* Message */}

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
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Leave your wishes for us..."
                className={inputClass}
              />

            </div>

            {/* Error */}

            <AnimatePresence>

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
                    text-sm
                    text-red-600
                  "
                >
                  {rsvpEndpoint
                    ? "Something went wrong while sending your RSVP. Please try again."
                    : "RSVP is not connected yet. Please configure the Formspree endpoint in data/wedding.ts."}
                </motion.div>

              )}

            </AnimatePresence>

            {/* Submit */}

            <div className="pt-4 text-center">

              <Button
                type="submit"
                disabled={status === "submitting"}
              >
                {status === "submitting"
                  ? "Sending..."
                  : "Send RSVP"}
              </Button>

            </div>

          </div>

        </motion.form>

      )}

    </AnimatePresence>
  );
}