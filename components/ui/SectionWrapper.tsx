import { type ReactNode } from "react";

interface SectionWrapperProps {
  id?: string;
  dark?: boolean;
  className?: string;
  children: ReactNode;
}

export default function SectionWrapper({
  id,
  dark = false,
  className = "",
  children,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 px-4 md:px-6 lg:px-8 ${
        dark ? "bg-navy text-white" : "bg-white text-foreground"
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}
