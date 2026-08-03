import Monogram from "@/components/ui/Monogram";
import { wedding } from "@/data/wedding";

export default function Footer() {
  return (
    <footer className="paper border-t border-[#E8DFD5] py-16 text-center">
      <Monogram size="sm" />

      <p className="mt-8 font-script gold-gradient text-4xl">
        {wedding.groom.name} &amp; {wedding.bride.name}
      </p>

      <p className="mt-4 text-xs uppercase tracking-[0.35em] text-neutral-500">
        {wedding.day}, {wedding.date}
      </p>

      <p className="mt-10 text-xs text-neutral-400">
        With love, always.
      </p>
    </footer>
  );
}
