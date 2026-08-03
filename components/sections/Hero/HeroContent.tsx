import Monogram from "@/components/ui/Monogram";

export default function HeroContent() {
  return (
    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-6">

      <Monogram size="sm" />

      <p className="mt-10 text-xs md:text-sm uppercase tracking-[0.45em] opacity-90">
        Together with our families
      </p>

      <h1 className="font-script gold-gradient text-7xl sm:text-8xl md:text-9rem mt-10">
        Akhil
      </h1>

      <p className="my-4 text-3xl text-[#d8b97b]">
        ♥
      </p>

      <h2 className="font-script gold-gradient text-7xl sm:text-8xl md:text-9rem">
        Saranya
      </h2>

      <div className="mt-12 space-y-2">

        <p className="tracking-[0.35em] uppercase text-sm">
          21 August 2026
        </p>

        <p className="tracking-[0.3em] uppercase text-xs">
          Friday
        </p>

      </div>

    </div>
  );
}