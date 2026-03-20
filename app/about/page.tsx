import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import PageHero from "@/components/sections/PageHero";
import AboutMission from "@/components/sections/AboutMission";
import AboutValues from "@/components/sections/AboutValues";
import AboutStats from "@/components/sections/AboutStats";
import CtaBanner from "@/components/sections/CtaBanner";
import Footer from "@/components/sections/Footer";
import { ABOUT_CONTENT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us | Enlinka",
  description: ABOUT_CONTENT.metaDescription,
};

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        title={ABOUT_CONTENT.hero.title}
        tagline={ABOUT_CONTENT.hero.tagline}
      />
      <AboutMission />
      <AboutValues />
      <AboutStats />
      <CtaBanner />
      <Footer />
    </main>
  );
}
