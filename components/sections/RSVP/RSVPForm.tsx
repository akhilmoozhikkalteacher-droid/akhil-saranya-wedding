"use client";

import { FormEvent, useState } from "react";
import clsx from "clsx";

import { rsvpEndpoint } from "@/data/wedding";
import Button from "@/components/ui/Button";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-xl border border-[#E8DFD5] bg-white/70 px-5 py-3 text-sm " +
  "placeholder:text-neutral-400 outline-none transition focus:border-[#C8A96A]";

export default function RSVPForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [attending, setAttending] = useState<"yes" | "no">("yes");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!rsvpEndpoint) {
      // No Formspree endpoint set yet — see data/wedding.ts (rsvpEndpoint).
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
      const res = await fetch(rsvpEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      e.currentTarget.reset();
      setAttending("yes");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="mx-auto mt-16 max-w-xl text-center">
        <p className="font-heading text-3xl text-[#355D50]">Thank you!</p>
        <p className="mt-3 text-neutral-600">
          Your response has been recorded. We can't wait to celebrate with you.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-16 max-w-xl space-y-6"
    >
      <div>
        <label className="mb-2 block text-xs uppercase tracking-[0.25em] text-neutral-500">
          Full name
        </label>
        <input
          name="name"
          required
          placeholder="Your name"
          className={inputClass}
        />
      </div>

      <div>
        <label className="mb-2 block text-xs uppercase tracking-[0.25em] text-neutral-500">
          Will you be attending?
        </label>
        <div className="flex gap-3">
          {(["yes", "no"] as const).map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setAttending(option)}
              className={clsx(
                "flex-1 rounded-xl border px-5 py-3 text-sm uppercase tracking-[0.2em] transition",
                attending === option
                  ? "border-[#C8A96A] bg-[#C8A96A] text-white"
                  : "border-[#E8DFD5] text-neutral-600 hover:border-[#C8A96A]"
              )}
            >
              {option === "yes" ? "Joyfully accept" : "Regretfully decline"}
            </button>
          ))}
        </div>
      </div>

      {attending === "yes" && (
        <>
          <div>
            <label className="mb-2 block text-xs uppercase tracking-[0.25em] text-neutral-500">
              Number of guests
            </label>
            <input
              name="guests"
              type="number"
              min={1}
              defaultValue={1}
              className={inputClass}
            />
          </div>

          <div>
            <label className="mb-2 block text-xs uppercase tracking-[0.25em] text-neutral-500">
              Meal preference
            </label>
            <select name="meal" className={inputClass}>
              <option value="veg">Vegetarian</option>
              <option value="non-veg">Non-vegetarian</option>
            </select>
          </div>
        </>
      )}

      <div>
        <label className="mb-2 block text-xs uppercase tracking-[0.25em] text-neutral-500">
          Message for the couple (optional)
        </label>
        <textarea
          name="message"
          rows={3}
          placeholder="Leave a wish or note..."
          className={inputClass}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">
          {rsvpEndpoint
            ? "Something went wrong sending your RSVP. Please try again."
            : "RSVP isn't connected to Formspree yet — see data/wedding.ts."}
        </p>
      )}

      <div className="text-center pt-2">
        <Button type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending..." : "Send RSVP"}
        </Button>
      </div>
    </form>
  );
}
