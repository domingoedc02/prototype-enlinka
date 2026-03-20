"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { CAREERS_CONTENT } from "@/lib/constants";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function CareersIntro() {
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
            src={CAREERS_CONTENT.intro.image}
            alt="Enlinka culture"
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
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
            {CAREERS_CONTENT.intro.heading}
          </h2>
          {CAREERS_CONTENT.intro.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-slate leading-relaxed text-lg mb-4 last:mb-0"
            >
              {paragraph}
            </p>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
