"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Code, Palette, Cloud, TestTube2, ArrowRight } from "lucide-react";
import { SERVICES, SERVICE_DETAILS } from "@/lib/constants";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Card from "@/components/ui/Card";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Code,
  Palette,
  Cloud,
  TestTube2,
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

export default function Services() {
  return (
    <SectionWrapper id="services">
      <div className="text-center mb-16">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-navy"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          What We Deliver
        </motion.h2>
        <motion.p
          className="mt-4 text-slate max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          End-to-end tech talent solutions tailored to your growth stage.
        </motion.p>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={container}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {SERVICES.map((service) => {
          const Icon = iconMap[service.icon];
          const detail = SERVICE_DETAILS.find((d) => d.title === service.title);
          const href = detail ? `/services/${detail.slug}` : "/#services";
          return (
            <motion.div key={service.title} variants={item}>
              <Link href={href} className="block h-full">
                <Card className="h-full">
                  {Icon && (
                    <div className="w-12 h-12 rounded-xl bg-electric/10 flex items-center justify-center mb-4">
                      <Icon size={24} className="text-electric" />
                    </div>
                  )}
                  <h3 className="text-lg font-semibold text-navy mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-electric">
                    Learn more <ArrowRight size={14} />
                  </span>
                </Card>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}
