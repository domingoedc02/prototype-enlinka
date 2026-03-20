"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

interface ServiceOverviewProps {
  overview: string;
  primaryImage: string;
  title: string;
}

export default function ServiceOverview({ overview, primaryImage, title }: ServiceOverviewProps) {
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
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
            What We Do
          </h2>
          <p className="text-slate leading-relaxed text-lg">
            {overview}
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <Image
            src={primaryImage}
            alt={title}
            width={1200}
            height={800}
            className="rounded-2xl w-full h-auto"
          />
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
