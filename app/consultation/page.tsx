import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import ConsultationHero from "@/components/sections/ConsultationHero";
import ConsultationForm from "@/components/sections/ConsultationForm";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Book a Free Consultation | Enlinka",
  description:
    "Tell us about your project and get matched with the right team. Free consultation — no commitment required.",
};

export default function ConsultationPage() {
  return (
    <main>
      <Navbar />
      <ConsultationHero />
      <ConsultationForm />
      <Footer />
    </main>
  );
}
