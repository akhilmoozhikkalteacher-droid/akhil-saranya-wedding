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

const PAGE_SIZE = 5;

export default function WishesWall() {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [totalWishes, setTotalWishes] = useState(0);

  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  const hasMore = wishes.length < totalWishes;

  /* -----------------------------------------
     Load initial wishes
  ----------------------------------------- */

  const loadInitialWishes = useCallback(async () => {
    setLoading(true);

    const {
      data,
      error,
      count,
    } = await supabase
      .from("wishes")
      .select("*", { count: "exact" })
      .order("created_at", {
        ascending: false,
      })
      .range(0, PAGE_SIZE - 1);

    if (error) {
      console.error(
        "Failed to load wishes:",
        error
      );

      setWishes([]);
      setTotalWishes(0);
    } else {
      setWishes(data ?? []);
      setTotalWishes(count ?? 0);
    }

    setLoading(false);
  }, []);

  /* -----------------------------------------
     Initial load
  ----------------------------------------- */

  useEffect(() => {
    loadInitialWishes();
  }, [loadInitialWishes]);

  /* -----------------------------------------
     Load next 5 wishes
  ----------------------------------------- */

  const loadMore = async () => {
    if (loadingMore || !hasMore) return;

    setLoadingMore(true);

    const from = wishes.length;
    const to = from + PAGE_SIZE - 1;

    const {
      data,
      error,
      count,
    } = await supabase
      .from("wishes")
      .select("*", { count: "exact" })
      .order("created_at", {
        ascending: false,
      })
      .range(from, to);

    if (error) {
      console.error(
        "Failed to load more wishes:",
        error
      );
    } else {
      setWishes((current) => [
        ...current,
        ...(data ?? []),
      ]);

      if (count !== null) {
        setTotalWishes(count ?? 0);
      }
    }

    setLoadingMore(false);
  };

  /* -----------------------------------------
     Realtime updates
  ----------------------------------------- */

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
        (payload) => {
          const newWish = payload.new as Wish;

          setWishes((current) => {
            /*
             * Add the newest wish to the beginning.
             *
             * If the visitor has only loaded the first
             * page, keep the visible list at 5 items.
             */
            const updated = [
              newWish,
              ...current.filter(
                (wish) => wish.id !== newWish.id
              ),
            ];

            return updated.slice(
              0,
              Math.max(current.length, PAGE_SIZE)
            );
          });

          setTotalWishes(
            (current) => current + 1
          );
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  /* -----------------------------------------
     Loading state
  ----------------------------------------- */

  if (loading) {
    return (
      <section>
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

          <div
            className="
              mx-auto
              mt-12
              h-5
              w-32
              animate-pulse
              rounded-full
              bg-neutral-200/70
            "
          />
        </div>
      </section>
    );
  }

  return (
    <section>
      {/* ---------------------------------------
          Heading
      --------------------------------------- */}

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
          {totalWishes === 0
            ? "Be the first to leave a heartfelt blessing."
            : `${totalWishes} heartfelt blessing${
                totalWishes !== 1 ? "s" : ""
              } shared with us.`}
        </p>
      </div>

      {/* ---------------------------------------
          Wishes
      --------------------------------------- */}

      {wishes.length > 0 ? (
        <div
          className="
            mt-14
            grid
            gap-6
            md:mt-16
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {wishes.map((wish) => (
            <WishCard
              key={wish.id}
              name={wish.name}
              message={wish.message}
            />
          ))}
        </div>
      ) : (
        <div
          className="
            mt-14
            rounded-3xl
            border
            border-[#E8DFD5]
            bg-white/60
            px-6
            py-12
            text-center
            text-neutral-500
          "
        >
          No wishes yet. Your blessing could be
          the first.
        </div>
      )}

      {/* ---------------------------------------
          View More
      --------------------------------------- */}

      {hasMore && (
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={loadMore}
            disabled={loadingMore}
            className="
              rounded-full
              border
              border-[#C8A96A]
              px-7
              py-3
              text-sm
              tracking-[0.12em]
              text-[#8F7138]
              transition-all
              duration-300
              hover:bg-[#C8A96A]
              hover:text-white
              disabled:cursor-not-allowed
              disabled:opacity-60
            "
          >
            {loadingMore
              ? "Loading..."
              : "View More Wishes"}
          </button>
        </div>
      )}

      {/* ---------------------------------------
          Progress
      --------------------------------------- */}

      {wishes.length > 0 && totalWishes > PAGE_SIZE && (
        <p
          className="
            mt-5
            text-center
            text-xs
            tracking-[0.12em]
            text-neutral-400
          "
        >
          Showing {wishes.length} of {totalWishes}
        </p>
      )}
    </section>
  );
}