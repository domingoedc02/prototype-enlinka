import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import PageHero from "@/components/sections/PageHero";
import CareersIntro from "@/components/sections/CareersIntro";
import CareersPositions from "@/components/sections/CareersPositions";
import CareersBenefits from "@/components/sections/CareersBenefits";
import CtaBanner from "@/components/sections/CtaBanner";
import Footer from "@/components/sections/Footer";
import { CAREERS_CONTENT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Careers | Enlinka",
  description: CAREERS_CONTENT.metaDescription,
};

export default function CareersPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        title={CAREERS_CONTENT.hero.title}
        tagline={CAREERS_CONTENT.hero.tagline}
      />
      <CareersIntro />
      <CareersPositions />
      <CareersBenefits />
      <CtaBanner />
      <Footer />
    </main>
  );
}
