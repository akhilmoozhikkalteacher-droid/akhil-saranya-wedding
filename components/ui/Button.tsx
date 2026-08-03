import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({
  className,
  children,
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={clsx(
        "rounded-full border border-[#C8A96A]",
        "px-8 py-3",
        "tracking-[0.25em]",
        "uppercase",
        "text-sm",
        "transition-all",
        "duration-500",
        "hover:bg-[#C8A96A]",
        "hover:text-white",
        className
      )}
    >
      {children}
    </button>
  );
}