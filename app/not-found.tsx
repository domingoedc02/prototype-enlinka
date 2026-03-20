"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Button from "@/components/ui/Button";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function NotFound() {
  return (
    <main>
      <Navbar />

      <section className="relative min-h-[80vh] bg-navy flex items-center justify-center overflow-hidden px-4 md:px-6 lg:px-8">
        {/* Radial depth overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(10,15,30,0.6)_70%,_rgba(10,15,30,0.9)_100%)]" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          {/* Floating 404 with glow */}
          <div className="relative inline-block">
            <motion.span
              className="block text-[8rem] md:text-[12rem] font-bold text-electric leading-none select-none"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              404
            </motion.span>

            {/* Glow layer */}
            <motion.span
              className="absolute inset-0 block text-[8rem] md:text-[12rem] font-bold text-electric leading-none select-none pointer-events-none"
              style={{ textShadow: "0 0 40px rgba(37,99,235,0.6), 0 0 80px rgba(37,99,235,0.3)" }}
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden
            >
              404
            </motion.span>
          </div>

          {/* Heading */}
          <motion.h1
            className="mt-4 text-3xl md:text-4xl font-bold text-white tracking-tight"
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Page Not Found
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="mt-4 text-lg text-white/70 max-w-md mx-auto leading-relaxed"
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </motion.p>

          {/* CTA */}
          <motion.div
            className="mt-8"
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Button href="/">Back to Home</Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
