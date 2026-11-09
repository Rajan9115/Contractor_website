import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { HomeCTA } from "@/components/sections/HomeCTA";
import { servicesData } from "@/data/services";
import { projectsData } from "@/data/projects";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Trust Strip (Verified Facts Only) */}
      <TrustStrip />

      {/* 3. Four Core Services Cards */}
      <section className="py-8 sm:py-10 bg-white border-b border-[#E5E0D7] overflow-hidden">
        <Container size="wide">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <SectionHeading
              kicker="Specialized Disciplines"
              title="Four Core Trades. One Accountable Team."
              description="Each service is executed with dedicated tools, experienced craftsmen, and premium materials designed for long-term durability."
              align="left"
            />
            <Button
              variant="outline"
              href="/services"
              rightIcon={<ArrowRight className="w-4 h-4" />}
              className="shrink-0 self-start md:self-end"
            >
              All Service Details
            </Button>
          </div>

          <ServicesGrid services={servicesData} />
        </Container>
      </section>

      {/* 4. Featured Completed Projects (Authentic Portfolio) */}
      <PortfolioSection projects={projectsData} />

      {/* 5. Why Choose Us (Factual Multi-Trade Advantages) */}
      <WhyChooseUs />

      {/* 6. Work Process (5 Clearly Defined Steps) */}
      <ProcessSection />

      {/* 7. Genuine Testimonials: Omitted until supplied as per AGENTS.md rules */}

      {/* 8. Pre-Footer High-Impact Enquiry CTA */}
      <HomeCTA />
    </div>
  );
}
