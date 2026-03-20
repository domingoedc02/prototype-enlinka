"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

interface ServiceTechStackProps {
  technologies: string[];
  secondaryImage: string;
}

export default function ServiceTechStack({ technologies, secondaryImage }: ServiceTechStackProps) {
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
            src={secondaryImage}
            alt="Technologies and tools"
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
            Technologies &amp; Tools
          </h2>
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="bg-off-white border border-navy/10 rounded-full px-4 py-2 text-sm font-medium text-navy"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
