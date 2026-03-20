"use client";

import { motion } from "framer-motion";
import { Code, Palette, Cloud, TestTube2 } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Code,
  Palette,
  Cloud,
  TestTube2,
};

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

interface ServiceHeroProps {
  icon: string;
  title: string;
  tagline: string;
}

export default function ServiceHero({ icon, title, tagline }: ServiceHeroProps) {
  const Icon = iconMap[icon];

  return (
    <section className="relative min-h-[40vh] bg-navy flex items-center justify-center overflow-hidden px-4 md:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(10,15,30,0.6)_70%,_rgba(10,15,30,0.9)_100%)]" />

      <div className="relative z-10 max-w-3xl mx-auto text-center py-24">
        <motion.div
          className="w-16 h-16 rounded-full bg-electric/20 flex items-center justify-center mx-auto mb-6"
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6 }}
        >
          {Icon && <Icon size={32} className="text-white" />}
        </motion.div>

        <motion.h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight"
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {title}
        </motion.h1>

        <motion.p
          className="mt-4 text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed"
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {tagline}
        </motion.p>
      </div>
    </section>
  );
}
