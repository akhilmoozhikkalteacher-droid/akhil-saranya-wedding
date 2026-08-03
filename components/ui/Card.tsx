import { ReactNode } from "react";
import clsx from "clsx";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-[18px] border border-[#E8DFD5] bg-white/70 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.05)]",
        className
      )}
    >
      {children}
    </div>
  );
}
