"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

import { wishes as initialWishes, wishesEndpoint } from "@/data/wedding";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

type Status = "idle" | "submitting" | "error";

// New wishes are POSTed to Formspree (so you get emailed each one), and
// also added to this visitor's view of the wall immediately for instant
// feedback. Formspree's free plan doesn't sync submissions back down to
// the page, so other visitors won't see a wish here until you copy it
// from your inbox into the `wishes` array in data/wedding.ts.
export default function WishesWall() {
  const [wishes, setWishes] = useState(initialWishes);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    if (!wishesEndpoint) {
      // No Formspree endpoint set yet — see data/wedding.ts (wishesEndpoint).
      setStatus("error");
      return;
    }

    setStatus("submitting");

    try {
      const res = await fetch(wishesEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ name, message }),
      });

      if (!res.ok) throw new Error("Request failed");

      setWishes((prev) => [{ name, message }, ...prev]);
      setName("");
      setMessage("");
      setStatus("idle");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="mx-auto mt-16 max-w-2xl">
      <form
        onSubmit={handleSubmit}
        className="mb-14 space-y-4 rounded-[18px] border border-[#E8DFD5] bg-white/70 p-6"
      >
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          required
          className="w-full rounded-xl border border-[#E8DFD5] bg-white px-5 py-3 text-sm outline-none transition focus:border-[#C8A96A]"
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Leave a wish for Akhil and Saranya..."
          rows={3}
          required
          className="w-full rounded-xl border border-[#E8DFD5] bg-white px-5 py-3 text-sm outline-none transition focus:border-[#C8A96A]"
        />

        {status === "error" && (
          <p className="text-sm text-red-600">
            {wishesEndpoint
              ? "Something went wrong sending your wish. Please try again."
              : "Wishes aren't connected to Formspree yet — see data/wedding.ts."}
          </p>
        )}

        <div className="text-center">
          <Button type="submit" disabled={status === "submitting"}>
            {status === "submitting" ? "Sending..." : "Leave a wish"}
          </Button>
        </div>
      </form>

      <div className="space-y-4">
        {wishes.map((wish, i) => (
          <motion.div
            key={`${wish.name}-${i}`}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <p className="leading-7 text-neutral-700">{wish.message}</p>
              <p className="mt-3 text-sm uppercase tracking-[0.2em] text-[#C8A96A]">
                {wish.name}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
