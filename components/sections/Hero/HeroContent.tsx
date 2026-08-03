import Monogram from "@/components/ui/Monogram";

export default function HeroContent() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center text-white">

        <Monogram size="sm" />

        <p className="mt-8 uppercase tracking-[0.4em] text-sm">
          Together with our families
        </p>

        <h1 className="font-script text-7xl md:text-9xl mt-8">
          Akhil
        </h1>

        <p className="text-3xl my-5 text-[#C8A96A]">
          ♥
        </p>

        <h2 className="font-script text-7xl md:text-9xl">
          Saranya
        </h2>

        <p className="mt-10 tracking-[0.35em] uppercase text-sm">
          Friday • 21 August 2026
        </p>

      </div>
    </div>
  );
}