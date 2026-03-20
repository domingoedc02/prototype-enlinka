import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICE_DETAILS } from "@/lib/constants";
import Navbar from "@/components/sections/Navbar";
import ServiceHero from "@/components/sections/ServiceHero";
import ServiceOverview from "@/components/sections/ServiceOverview";
import ServiceFeatures from "@/components/sections/ServiceFeatures";
import ServiceTechStack from "@/components/sections/ServiceTechStack";
import CtaBanner from "@/components/sections/CtaBanner";
import Footer from "@/components/sections/Footer";

export function generateStaticParams() {
  return SERVICE_DETAILS.map((service) => ({
    slug: service.slug,
  }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const service = SERVICE_DETAILS.find((s) => s.slug === params.slug);
  if (!service) return {};

  return {
    title: `${service.title} | Enlinka`,
    description: service.metaDescription,
  };
}

export default function ServicePage({
  params,
}: {
  params: { slug: string };
}) {
  const service = SERVICE_DETAILS.find((s) => s.slug === params.slug);
  if (!service) notFound();

  return (
    <main>
      <Navbar />
      <ServiceHero
        icon={service.icon}
        title={service.title}
        tagline={service.tagline}
      />
      <ServiceOverview
        overview={service.overview}
        primaryImage={service.images.primary}
        title={service.title}
      />
      <ServiceFeatures features={service.features} />
      <ServiceTechStack
        technologies={service.technologies}
        secondaryImage={service.images.secondary}
      />
      <CtaBanner />
      <Footer />
    </main>
  );
}
