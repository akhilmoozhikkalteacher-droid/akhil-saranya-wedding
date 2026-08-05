"use client";

import { useCallback, useEffect, useState } from "react";

import { supabase } from "@/lib/supabase";

import GoldDivider from "@/components/ui/GoldDivider";

import WishCard from "./WishCard";

interface Wish {
  id: number;
  name: string;
  message: string;
  created_at: string;
}

export default function WishesWall() {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [loading, setLoading] = useState(true);

  const loadWishes = useCallback(async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("wishes")
      .select("*")
      .order("created_at", {
        ascending: false,
      });

    if (error) {
      console.error("Failed to load wishes:", error);
    } else {
      setWishes(data ?? []);
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    loadWishes();
  }, [loadWishes]);

  // Realtime updates from Supabase
  useEffect(() => {
    const channel = supabase
      .channel("wedding-wishes")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "wishes",
        },
        () => {
          loadWishes();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [loadWishes]);

  if (loading) {
    return (
      <div className="py-24 text-center text-neutral-500">
        Loading wishes...
      </div>
    );
  }

  return (
    <section>
      {/* Heading */}

      <div className="text-center">
        <p
          className="
            text-xs
            uppercase
            tracking-[0.45em]
            text-[#C8A96A]
          "
        >
          Guestbook
        </p>

        <h2
          className="
            mt-6
            font-heading
            text-4xl
            md:text-5xl
          "
        >
          Wedding Blessings
        </h2>

        <GoldDivider className="mt-10" />

        <p
          className="
            mx-auto
            mt-8
            max-w-2xl
            leading-8
            text-neutral-600
          "
        >
          {wishes.length} heartfelt blessing
          {wishes.length !== 1 ? "s" : ""} shared with us.
        </p>
      </div>

      {/* Wishes */}

      <div
        className="
          mt-16
          grid
          gap-8
          md:grid-cols-2
          xl:grid-cols-3
        "
      >
        {wishes.map((wish, index) => (
          <WishCard
            key={wish.id}
            name={wish.name}
            message={wish.message}
            delay={index * 0.08}
          />
        ))}
      </div>
    </section>
  );
}