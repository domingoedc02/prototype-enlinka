"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { ABOUT_CONTENT } from "@/lib/constants";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function AboutStats() {
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
          <Image
            src={ABOUT_CONTENT.statsImage}
            alt="Enlinka team"
            width={1200}
            height={800}
            className="rounded-2xl w-full h-auto"
          />
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="grid grid-cols-2 gap-8">
            {ABOUT_CONTENT.stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-bold text-electric">
                  {stat.value}
                  {stat.suffix}
                </p>
                <p className="text-slate mt-1 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
