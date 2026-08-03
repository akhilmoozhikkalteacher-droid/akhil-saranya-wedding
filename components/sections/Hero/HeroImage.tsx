import Image from "next/image";

export default function HeroImage() {
  return (
    <Image
      src="/images/hero/landing.jpg"
      alt="Akhil and Saranya"
      fill
      priority
      className="object-cover"
    />
  );
}