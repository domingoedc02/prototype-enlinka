"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Globe,
  TrendingUp,
  Heart,
  Calendar,
  Laptop,
  BookOpen,
} from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { CAREERS_CONTENT } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Globe,
  TrendingUp,
  Heart,
  Calendar,
  Laptop,
  BookOpen,
};

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function CareersBenefits() {
  return (
    <SectionWrapper>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8">
            Perks & Benefits
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {CAREERS_CONTENT.benefits.map((benefit) => {
              const Icon = iconMap[benefit.icon];
              return (
                <div key={benefit.title} className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-electric/10 flex items-center justify-center flex-shrink-0">
                    {Icon && <Icon size={20} className="text-electric" />}
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy text-sm">
                      {benefit.title}
                    </h3>
                    <p className="text-slate text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <Image
            src={CAREERS_CONTENT.benefitsImage}
            alt="Career growth at Enlinka"
            width={1200}
            height={800}
            className="rounded-2xl w-full h-auto"
          />
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
