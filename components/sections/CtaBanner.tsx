"use client";

import { motion } from "framer-motion";
import { CTA_CONTENT } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function CtaBanner() {
  return (
    <section id="contact" className="relative bg-navy py-24 px-4 md:px-6 lg:px-8 overflow-hidden">
      {/* Background blobs */}
      <motion.div
        className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-electric/10 blur-3xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-electric/5 blur-3xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="relative z-10 max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          {CTA_CONTENT.headline}
        </h2>
        <p className="mt-6 text-white/70 text-lg max-w-xl mx-auto">
          {CTA_CONTENT.subheadline}
        </p>
        <div className="mt-10">
          <Button href={CTA_CONTENT.cta.href} variant="primary" className="text-base px-8 py-4">
            {CTA_CONTENT.cta.label}
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
