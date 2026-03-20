import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Services from "@/components/sections/Services";
import HowItWorks from "@/components/sections/HowItWorks";
import WhyEnlinka from "@/components/sections/WhyEnlinka";
import Testimonials from "@/components/sections/Testimonials";
import CtaBanner from "@/components/sections/CtaBanner";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <HowItWorks />
      <WhyEnlinka />
      <Testimonials />
      <CtaBanner />
      <Footer />
    </main>
  );
}
