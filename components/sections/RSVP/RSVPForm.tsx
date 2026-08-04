"use client";

import { FormEvent, useState } from "react";

import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";

import { wedding } from "@/data/wedding";

import Button from "@/components/ui/Button";
import LuxuryCard from "@/components/ui/LuxuryCard";
import GoldDivider from "@/components/ui/GoldDivider";

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
bg-white/80
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

  const rsvpEndpoint = wedding.forms.rsvp;

  const [status, setStatus] =
    useState<Status>("idle");

  const [attending, setAttending] =
    useState<Attendance>("yes");

  async function handleSubmit(
    e: FormEvent<HTMLFormElement>
  ) {

    e.preventDefault();

    const formElement = e.currentTarget;

    if (!rsvpEndpoint) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    const form = new FormData(formElement);

    const payload = {

      name: form.get("name"),

      attending:
        attending === "yes"
          ? "Yes"
          : "No",

      guests:
        attending === "yes"
          ? form.get("guests")
          : "0",

      meal:
        attending === "yes"
          ? form.get("meal")
          : "N/A",

      message: form.get("message"),

      event: wedding.website.hashtag,

      submittedAt: new Date().toLocaleString(),
    };

    try {
      const response = await fetch(rsvpEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      // Read the response once
      const result = await response.text();

      console.log("Status:", response.status);
      console.log("OK:", response.ok);
      console.log("Response:", result);

      if (response.ok) {
        setStatus("success");
        formElement.reset();
        setAttending("yes");
        return;
      }

      console.error("Formspree returned:", result);
      setStatus("error");

    } catch (error) {
      console.error("Submission failed:", error);
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
      scale: 0.96,
    }}
    animate={{
      opacity: 1,
      y: 0,
      scale: 1,
    }}
    exit={{
      opacity: 0,
      y: -20,
    }}
    transition={{
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="mx-auto mt-16 max-w-3xl"
  >

    <LuxuryCard
      hover={false}
      className="px-10 py-16 md:px-16"
    >

      <div className="text-center">

        {/* Success Icon */}

        <motion.div
          initial={{
            scale: 0,
            rotate: -20,
          }}
          animate={{
            scale: 1,
            rotate: 0,
          }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 220,
          }}
          className="text-6xl"
        >
          💌
        </motion.div>

        <p
          className="
            mt-8
            text-xs
            uppercase
            tracking-[0.45em]
            text-[#C8A96A]
          "
        >
          RSVP Received
        </p>

        <h2
          className="
            mt-6
            font-script
            text-6xl
            gold-gradient
          "
        >
          Thank You
        </h2>

        <GoldDivider className="mt-10" />

        <p
          className="
            mx-auto
            mt-10
            max-w-xl
            text-lg
            leading-9
            text-neutral-600
          "
        >
          Your RSVP has been received successfully.
        </p>

        <p
          className="
            mx-auto
            mt-6
            max-w-xl
            leading-8
            text-neutral-500
          "
        >
          Thank you for taking a moment to respond.
          Your presence and blessings mean so much to us,
          and we look forward to celebrating this beautiful
          day together.
        </p>

        <GoldDivider
          className="mt-12"
          width="w-20"
        />

        <p
          className="
            mt-10
            font-script
            text-4xl
            gold-gradient
          "
        >
          Akhil & Saranya
        </p>

      </div>

    </LuxuryCard>

  </motion.div>

) : (

  <motion.form
  key="form"
  onSubmit={handleSubmit}
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
  className="mx-auto mt-16 max-w-3xl"
>

  <LuxuryCard className="px-8 py-10 md:px-12">

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
          autoComplete="name"
          placeholder="Enter your full name"
          className={inputClass}
        />

      </div>

      <GoldDivider />

      {/* Attendance */}

      <div>

        <label
          className="
            mb-4
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

              <motion.button
                key={option}
                type="button"
                whileHover={{
                  y: -2,
                }}
                whileTap={{
                  scale: 0.98,
                }}
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

              </motion.button>

            )
          )}

        </div>

      </div>

      {/* Guests */}

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

            <GoldDivider />

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
                defaultValue="veg"
                className={inputClass}
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

      <GoldDivider />

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
              py-5
              text-center
            "
          >

            <p className="font-medium text-red-600">
              Unable to send your RSVP
            </p>

            <p className="mt-2 text-sm leading-7 text-red-500">
              Please try again in a few moments.
            </p>

          </motion.div>

        )}

      </AnimatePresence>

      <GoldDivider />

      {/* Submit */}

      <div className="pt-2 text-center">

        <Button
          type="submit"
          disabled={status === "submitting"}
        >

          {status === "submitting"
            ? "⏳ Sending RSVP..."
            : "💌 Send RSVP"}

        </Button>

        <p
          className="
            mt-6
            text-sm
            leading-7
            text-neutral-500
          "
        >
          Your response helps us make the necessary
          arrangements for our special day.
        </p>

      </div>

    </div>

  </LuxuryCard>

</motion.form>

)}

</AnimatePresence>

  );
}