"use client";

import { motion } from "framer-motion";
import { Code, Palette, Cloud, Users } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { CAREERS_CONTENT } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Code,
  Palette,
  Cloud,
  Users,
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

export default function CareersPositions() {
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
          Open Departments
        </h2>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={container}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {CAREERS_CONTENT.departments.map((dept) => {
          const Icon = iconMap[dept.icon];
          return (
            <motion.div
              key={dept.title}
              variants={item}
              className="bg-navy-light rounded-2xl p-6"
            >
              <div className="w-12 h-12 rounded-full bg-electric/20 flex items-center justify-center mb-4">
                {Icon && <Icon size={24} className="text-electric" />}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {dept.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                {dept.description}
              </p>
              <span className="inline-block bg-electric/20 text-electric text-xs font-medium px-3 py-1 rounded-full">
                {dept.openPositions} open positions
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}
