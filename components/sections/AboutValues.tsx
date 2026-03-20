"use client";

import { motion } from "framer-motion";
import {
  Target,
  Heart,
  Shield,
  Zap,
  Globe,
  TrendingUp,
} from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { ABOUT_CONTENT } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Target,
  Heart,
  Shield,
  Zap,
  Globe,
  TrendingUp,
};

const container = {
  animate: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AboutValues() {
  return (
    <SectionWrapper dark>
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Our Values
        </h2>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={container}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {ABOUT_CONTENT.values.map((value) => {
          const Icon = iconMap[value.icon];
          return (
            <motion.div
              key={value.title}
              variants={item}
              className="bg-navy-light rounded-2xl p-6"
            >
              <div className="w-12 h-12 rounded-full bg-electric/20 flex items-center justify-center mb-4">
                {Icon && <Icon size={24} className="text-electric" />}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {value.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}
