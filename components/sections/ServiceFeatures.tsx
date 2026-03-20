"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Database,
  Layers,
  Search,
  Shield,
  Zap,
  PenTool,
  Eye,
  Users,
  Server,
  GitBranch,
  Activity,
  Bug,
  Gauge,
  FlaskConical,
} from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Globe,
  Smartphone,
  Database,
  Layers,
  Search,
  Shield,
  Zap,
  PenTool,
  Eye,
  Users,
  Server,
  GitBranch,
  Activity,
  Bug,
  Gauge,
  FlaskConical,
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

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface ServiceFeaturesProps {
  features: Feature[];
}

export default function ServiceFeatures({ features }: ServiceFeaturesProps) {
  return (
    <SectionWrapper dark>
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Key Capabilities
        </h2>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={container}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {features.map((feature) => {
          const Icon = iconMap[feature.icon];
          return (
            <motion.div
              key={feature.title}
              variants={item}
              className="bg-navy-light rounded-2xl p-6"
            >
              <div className="w-12 h-12 rounded-full bg-electric/20 flex items-center justify-center mb-4">
                {Icon && <Icon size={24} className="text-electric" />}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}
