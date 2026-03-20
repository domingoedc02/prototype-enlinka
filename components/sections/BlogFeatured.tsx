"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import { BLOG_CONTENT } from "@/lib/constants";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function BlogFeatured() {
  const post = BLOG_CONTENT.featuredPost;

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
            src={post.image}
            alt={post.title}
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
          <span className="inline-block bg-electric/10 text-electric text-xs font-medium px-3 py-1 rounded-full mb-4">
            {post.category}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
            {post.title}
          </h2>
          <p className="text-slate leading-relaxed mb-4">{post.excerpt}</p>
          <p className="text-sm text-slate/60 mb-6">
            {post.date} · {post.readTime}
          </p>
          <Button href={post.href} variant="primary">
            Read Article
          </Button>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
