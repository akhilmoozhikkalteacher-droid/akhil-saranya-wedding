import clsx from "clsx";

interface Props {
  className?: string;
  width?: string;
}

export default function GoldDivider({
  className,
  width = "w-32",
}: Props) {
  return (
    <div
      className={clsx(
        "mx-auto flex items-center justify-center",
        className
      )}
    >
      <div
        className={clsx(
          `
          h-px
          bg-gradient-to-r
          from-transparent
          via-[#C8A96A]
          to-transparent
          `,
          width
        )}
      />
    </div>
  );
}