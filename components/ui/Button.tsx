"use client";

import { type ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline";

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-electric text-white hover:bg-electric-hover shadow-lg shadow-electric/25",
  secondary:
    "bg-white text-navy border-2 border-navy/10 hover:border-electric hover:text-electric",
  outline:
    "bg-transparent text-white border-2 border-white/30 hover:border-white hover:bg-white/10",
};

export default function Button({
  children,
  variant = "primary",
  href,
  className = "",
  onClick,
  type,
  disabled,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-6 py-3 rounded-full font-medium text-sm transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";
  const classes = `${base} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} type={type} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
