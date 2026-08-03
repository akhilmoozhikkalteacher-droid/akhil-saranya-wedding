interface MonogramProps {
  size?: "sm" | "md" | "lg";
}

export default function Monogram({
  size = "md",
}: MonogramProps) {
  const sizes = {
    sm: "text-2xl",
    md: "text-4xl",
    lg: "text-6xl",
  };

  return (
    <div className="flex flex-col items-center">
      <div
        className={`
          ${sizes[size]}
          font-script
          gold-gradient
          leading-none
        `}
      >
        A
      </div>

      <div className="my-2 h-px w-10 bg-[#C8A96A]" />

      <div
        className={`
          ${sizes[size]}
          font-script
          gold-gradient
          leading-none
        `}
      >
        S
      </div>
    </div>
  );
}