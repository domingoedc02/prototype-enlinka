"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { WHY_ENLINKA_POINTS } from "@/lib/constants";
import SectionWrapper from "@/components/ui/SectionWrapper";

const container = {
  animate: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

export default function WhyEnlinka() {
  return (
    <SectionWrapper id="why-enlinka">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy">
            Why Companies Choose Enlinka
          </h2>
          <p className="mt-4 text-slate leading-relaxed">
            We&apos;re not a staffing agency. We&apos;re a strategic partner that
            embeds world-class talent into your workflow — with the support
            structure to keep them thriving.
          </p>
        </motion.div>

        {/* Right column — differentiators */}
        <motion.ul
          className="space-y-5"
          variants={container}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {WHY_ENLINKA_POINTS.map((point, i) => (
            <motion.li
              key={i}
              variants={item}
              className="flex gap-3 items-start"
            >
              <CheckCircle
                size={22}
                className="text-electric mt-0.5 shrink-0"
              />
              <span className="text-navy/80 leading-relaxed">{point}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </SectionWrapper>
  );
}
