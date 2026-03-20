import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import PageHero from "@/components/sections/PageHero";
import BlogFeatured from "@/components/sections/BlogFeatured";
import BlogGrid from "@/components/sections/BlogGrid";
import CtaBanner from "@/components/sections/CtaBanner";
import Footer from "@/components/sections/Footer";
import { BLOG_CONTENT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog | Enlinka",
  description: BLOG_CONTENT.metaDescription,
};

export default function BlogPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        title={BLOG_CONTENT.hero.title}
        tagline={BLOG_CONTENT.hero.tagline}
      />
      <BlogFeatured />
      <BlogGrid />
      <CtaBanner />
      <Footer />
    </main>
  );
}
