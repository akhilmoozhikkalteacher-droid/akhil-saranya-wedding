import Monogram from "@/components/ui/Monogram";

export default function HeroContent() {
  return (
    <div
      className="
        absolute
        inset-0
        z-20
        flex
        flex-col
        items-center
        justify-center
        px-6
        text-center
        text-white
      "
    >
      <Monogram size="sm" />

      <p
        className="
          mt-8
          text-[11px]
          uppercase
          tracking-[0.55em]
          text-white/90
        "
      >
        Together with our Families
      </p>

      <h1
        className="
          mt-8
          font-script
          text-6xl
          sm:text-7xl
          md:text-[7rem]
          lg:text-[8rem]
          leading-none
        "
      >
        <span className="gold-gradient">
          Akhil
        </span>

        <span
          className="
            mx-4
            font-heading
            text-3xl
            text-white/80
            align-middle
          "
        >
          &
        </span>

        <span className="gold-gradient">
          Saranya
        </span>
      </h1>

      <div
        className="
          mt-10
          h-px
          w-32
          bg-gradient-to-r
          from-transparent
          via-[#C8A96A]
          to-transparent
        "
      />

      <div className="mt-8 space-y-2">

        <p
          className="
            text-sm
            uppercase
            tracking-[0.4em]
            text-[#D8B97B]
          "
        >
          21 August 2026
        </p>

        <p
          className="
            text-xs
            uppercase
            tracking-[0.35em]
            text-white/80
          "
        >
          Friday
        </p>

      </div>

    </div>
  );
}