"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const ELECTRIC_BLUE = "#2563EB";
const CONNECTION_DISTANCE = 120;
const PARTICLE_COUNT = 18;

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

function createParticles(width: number, height: number): Particle[] {
  return Array.from({ length: PARTICLE_COUNT }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.6 + 0.1 * (Math.random() > 0.5 ? 1 : -1),
    vy: (Math.random() - 0.5) * 0.6 + 0.1 * (Math.random() > 0.5 ? 1 : -1),
    radius: 1.5 + Math.random() * 1.5,
    opacity: 0.3 + Math.random() * 0.4,
  }));
}

export default function Loading() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      canvas!.width = window.innerWidth * dpr;
      canvas!.height = window.innerHeight * dpr;
      canvas!.style.width = `${window.innerWidth}px`;
      canvas!.style.height = `${window.innerHeight}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      particlesRef.current = createParticles(window.innerWidth, window.innerHeight);
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

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        p.x = Math.max(0, Math.min(w, p.x));
        p.y = Math.max(0, Math.min(h, p.y));
      }

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
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-navy flex items-center justify-center">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(10,15,30,0.6)_70%,_rgba(10,15,30,0.9)_100%)]" />

      <div className="relative z-10 flex flex-col items-center gap-4">
        {/* Pulsing ring */}
        <motion.div
          className="relative flex items-center justify-center"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-12 h-12 rounded-full border-2 border-electric" />

          {/* Inner dot */}
          <motion.div
            className="absolute w-3 h-3 rounded-full bg-electric"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Loading text — delayed fade-in to avoid flash on fast loads */}
        <motion.p
          className="text-white/50 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          Loading…
        </motion.p>
      </div>
    </div>
  );
}
