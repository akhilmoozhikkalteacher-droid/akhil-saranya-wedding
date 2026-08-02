import { ReactNode } from "react";
import clsx from "clsx";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({
  id,
  children,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={clsx(
        "relative w-full py-24 md:py-32 px-6 md:px-12 lg:px-20",
        className
      )}
    >
      <div className="mx-auto max-w-7xl">
        {children}
      </div>
    </section>
  );
}