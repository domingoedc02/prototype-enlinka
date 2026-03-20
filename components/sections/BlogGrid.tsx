"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Card from "@/components/ui/Card";
import { BLOG_CONTENT } from "@/lib/constants";

const container = {
  animate: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function BlogGrid() {
  return (
    <SectionWrapper className="bg-off-white">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-navy">
          Latest Articles
        </h2>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={container}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {BLOG_CONTENT.posts.map((post) => (
          <motion.div key={post.title} variants={item}>
            <Link href={post.href}>
              <Card className="h-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="rounded-xl w-full h-48 object-cover mb-4"
                />
                <span className="inline-block bg-electric/10 text-electric text-xs font-medium px-3 py-1 rounded-full mb-3">
                  {post.category}
                </span>
                <h3 className="font-semibold text-navy mb-2">{post.title}</h3>
                <p className="text-slate text-sm leading-relaxed mb-3">
                  {post.excerpt}
                </p>
                <p className="text-xs text-slate/60">
                  {post.date} · {post.readTime}
                </p>
              </Card>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
