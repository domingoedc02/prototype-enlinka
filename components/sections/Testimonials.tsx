"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Card from "@/components/ui/Card";

const container = {
  animate: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Testimonials() {
  return (
    <SectionWrapper id="testimonials" className="bg-off-white">
      <div className="text-center mb-16">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-navy"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          What Our Clients Say
        </motion.h2>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        variants={container}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {TESTIMONIALS.map((t) => (
          <motion.div key={t.author} variants={item}>
            <Card className="h-full flex flex-col">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={
                      i < t.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }
                  />
                ))}
              </div>
              {/* Quote */}
              <p className="text-navy/80 text-sm leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              {/* Author */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="font-semibold text-navy text-sm">
                  {t.author}
                </div>
                <div className="text-xs text-slate">
                  {t.role}, {t.company}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
