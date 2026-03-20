"use client";

import { motion } from "framer-motion";
import { HOW_IT_WORKS_STEPS } from "@/lib/constants";
import SectionWrapper from "@/components/ui/SectionWrapper";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function HowItWorks() {
  return (
    <SectionWrapper id="how-it-works" className="bg-off-white">
      <div className="text-center mb-16">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-navy"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          How It Works
        </motion.h2>
        <motion.p
          className="mt-4 text-slate max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          From first call to full team — in days, not months.
        </motion.p>
      </div>

      {/* Desktop: horizontal timeline */}
      <div className="hidden md:flex items-start justify-between relative">
        {HOW_IT_WORKS_STEPS.map((step, i) => (
          <motion.div
            key={step.step}
            className="flex-1 flex flex-col items-center text-center relative"
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            {/* Connector line */}
            {i < HOW_IT_WORKS_STEPS.length - 1 && (
              <motion.div
                className="absolute top-5 left-[calc(50%+24px)] right-[calc(-50%+24px)] h-0.5 bg-electric/20"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 + 0.3 }}
                style={{ originX: 0 }}
              />
            )}
            {/* Step circle */}
            <div className="w-10 h-10 rounded-full bg-electric text-white flex items-center justify-center font-bold text-sm mb-4 relative z-10">
              {step.step}
            </div>
            <h3 className="text-lg font-semibold text-navy mb-2">
              {step.title}
            </h3>
            <p className="text-sm text-slate max-w-[200px] leading-relaxed">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Mobile: vertical timeline */}
      <div className="md:hidden relative pl-10">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-electric/20" />

        {HOW_IT_WORKS_STEPS.map((step, i) => (
          <motion.div
            key={step.step}
            className="relative mb-10 last:mb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            {/* Node */}
            <div className="absolute -left-10 top-0 w-8 h-8 rounded-full bg-electric text-white flex items-center justify-center font-bold text-xs">
              {step.step}
            </div>
            <h3 className="text-lg font-semibold text-navy mb-1">
              {step.title}
            </h3>
            <p className="text-sm text-slate leading-relaxed">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
