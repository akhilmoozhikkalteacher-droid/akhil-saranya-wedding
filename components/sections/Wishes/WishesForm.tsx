"use client";

import { FormEvent, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import { supabase } from "@/lib/supabase";

import LuxuryCard from "@/components/ui/LuxuryCard";
import GoldDivider from "@/components/ui/GoldDivider";
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

export default function WishesForm() {

  const [status, setStatus] =
    useState<Status>("idle");

  async function handleSubmit(
    e: FormEvent<HTMLFormElement>
    ) {
    e.preventDefault();

    const formElement = e.currentTarget;

    setStatus("submitting");

    const form = new FormData(formElement);

    const name = String(form.get("name") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    if (!name || !message) {
        setStatus("error");
        return;
    }

    try {

        const { data, error } = await supabase
            .from("wishes")
            .insert([
                {
                name,
                message,
                },
            ])
            .select();

        console.log("Inserted wish:", data);

        if (error) {
        throw error;
        }

        setStatus("success");

        formElement.reset();


    } catch (error) {

        console.error("Supabase insert failed:", error);

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
    className="mx-auto max-w-3xl"
  >

    <LuxuryCard
      hover={false}
      className="px-10 py-16 md:px-16"
    >

      <div className="text-center">

        {/* Icon */}

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
          💚
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
          Blessing Received
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
          Your heartfelt wishes have been received successfully.
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
          Your kind words and blessings mean more than we can
          express. Thank you for becoming a cherished part of
          our wedding memories.
        </p>

        <GoldDivider className="mt-12" />

        <p
          className="
            mt-10
            font-script
            text-4xl
            gold-gradient
          "
        >
          With Love,
        </p>

        <p
          className="
            mt-3
            font-script
            text-5xl
            gold-gradient
          "
        >
          Akhil &amp; Saranya
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
  className="mx-auto max-w-3xl"
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
          Your Name
        </label>

        <input
          id="name"
          name="name"
          required
          autoComplete="name"
          placeholder="Enter your name"
          className={inputClass}
        />

      </div>

      <GoldDivider />

      {/* Wishes */}

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
          Your Blessing
        </label>

        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Write your heartfelt wishes for the couple..."
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
              Unable to send your wishes
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
            ? "💚 Sending..."
            : "💚 Send Wishes"}

        </Button>

        <p
          className="
            mt-6
            text-sm
            leading-7
            text-neutral-500
          "
        >
          Your blessings will always remain a treasured part
          of our wedding memories.
        </p>

      </div>

    </div>

  </LuxuryCard>

</motion.form>

)}

</AnimatePresence>

  );
}