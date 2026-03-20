"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = true,
}: CardProps) {
  return (
    <motion.div
      className={`bg-white rounded-2xl p-6 shadow-sm ${className}`}
      whileHover={hover ? { y: -4, boxShadow: "0 12px 40px rgba(0,0,0,0.1)" } : undefined}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
