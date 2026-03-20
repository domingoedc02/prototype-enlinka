"use client";

import { useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { HERO_CONTENT } from "@/lib/constants";
import Button from "@/components/ui/Button";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const ELECTRIC_BLUE = "#2563EB";
const CONNECTION_DISTANCE = 150;
const PARTICLE_COUNT_DESKTOP = 35;
const PARTICLE_COUNT_MOBILE = 20;

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

function createParticles(width: number, height: number, count: number): Particle[] {
  return Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.6 + 0.1 * (Math.random() > 0.5 ? 1 : -1),
    vy: (Math.random() - 0.5) * 0.6 + 0.1 * (Math.random() > 0.5 ? 1 : -1),
    radius: 1.5 + Math.random() * 1.5,
    opacity: 0.3 + Math.random() * 0.4,
  }));
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);

  const getParticleCount = useCallback(() => {
    return typeof window !== "undefined" && window.innerWidth < 768
      ? PARTICLE_COUNT_MOBILE
      : PARTICLE_COUNT_DESKTOP;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas!.parentElement!.getBoundingClientRect();
      canvas!.width = rect.width * dpr;
      canvas!.height = rect.height * dpr;
      canvas!.style.width = `${rect.width}px`;
      canvas!.style.height = `${rect.height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = getParticleCount();
      particlesRef.current = createParticles(rect.width, rect.height, count);
    }

    resize();

    let resizeTimer: ReturnType<typeof setTimeout>;
    function handleResize() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 200);
    }
    window.addEventListener("resize", handleResize);

    function animate() {
      const w = canvas!.clientWidth;
      const h = canvas!.clientHeight;
      ctx!.clearRect(0, 0, w, h);

      const particles = particlesRef.current;

      // Update positions
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        p.x = Math.max(0, Math.min(w, p.x));
        p.y = Math.max(0, Math.min(h, p.y));
      }

      // Draw connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          if (Math.abs(dx) > CONNECTION_DISTANCE) continue;
          const dy = particles[i].y - particles[j].y;
          if (Math.abs(dy) > CONNECTION_DISTANCE) continue;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DISTANCE) {
            const alpha = (1 - dist / CONNECTION_DISTANCE) * 0.35;
            ctx!.beginPath();
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.strokeStyle = `rgba(37, 99, 235, ${alpha})`;
            ctx!.lineWidth = 0.8;
            ctx!.stroke();
          }
        }
      }

      // Draw particles
      for (const p of particles) {
        ctx!.save();
        ctx!.shadowBlur = 6;
        ctx!.shadowColor = ELECTRIC_BLUE;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(37, 99, 235, ${p.opacity})`;
        ctx!.fill();
        ctx!.restore();
      }

      animationRef.current = requestAnimationFrame(animate);
    }

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, [getParticleCount]);

  return (
    <section className="relative min-h-screen bg-navy flex items-center justify-center overflow-hidden px-4 md:px-6 lg:px-8">
      {/* Particle constellation canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Radial depth overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(10,15,30,0.6)_70%,_rgba(10,15,30,0.9)_100%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight tracking-tight whitespace-pre-line"
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6 }}
        >
          {HERO_CONTENT.headline}
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed"
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {HERO_CONTENT.subheadline}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button href={HERO_CONTENT.primaryCta.href} variant="primary">
            {HERO_CONTENT.primaryCta.label}
          </Button>
          <Button href={HERO_CONTENT.secondaryCta.href} variant="outline">
            {HERO_CONTENT.secondaryCta.label}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
