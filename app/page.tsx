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
import { ProcessStep } from "@/components/sections/ProcessStep";
import { HomeCTA } from "@/components/sections/HomeCTA";
import { servicesData } from "@/data/services";
import { projectsData } from "@/data/projects";

export default function Home() {
  const processSteps = [
    {
      number: "01",
      title: "Initial Consultation",
      description:
        "We discuss your space, preferred trade requirements (electrical, woodwork, painting, ceiling), and project timeline via phone or WhatsApp.",
      highlights: [
        "Requirement scope definition",
        "Initial feasibility review",
        "Transparent guidance",
      ],
    },
    {
      number: "02",
      title: "On-Site Inspection",
      description:
        "We visit your property for precise laser measurements, evaluate wall conditions, inspect existing wiring and plumbing runs.",
      highlights: [
        "Accurate laser dimensioning",
        "Surface & load assessment",
        "No-obligation site assessment",
      ],
    },
    {
      number: "03",
      title: "Itemized Quotation",
      description:
        "Receive a clear, transparent cost estimate detailing material grades (plywood, cables, paints) and labor milestones.",
      highlights: [
        "Transparent material specifications",
        "Clear labor breakdown",
        "Milestone timeline agreed",
      ],
    },
    {
      number: "04",
      title: "Supervised Execution",
      description:
        "Our skilled tradesmen execute the project with dedicated on-site contractor supervision, ensuring sequencing and safety compliance.",
      highlights: [
        "Cross-trade synchronization",
        "Dust & floor protection",
        "Regular progress updates",
      ],
    },
    {
      number: "05",
      title: "Inspection & Handover",
      description:
        "We perform a detailed joint walkthrough, inspect touch-ups and switches, clear debris, and hand over a finished, spotless space.",
      highlights: [
        "Quality checklist sign-off",
        "Thorough post-work clean-up",
        "Handover of keys & instructions",
      ],
    },
  ];

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
      <section className="py-8 sm:py-10 bg-white border-b border-[#E5E0D7]">
        <Container size="wide">
          <SectionHeading
            kicker="Execution Methodology"
            title="Our Transparent 5-Step Process"
            description="From initial concept to final handover, every phase is organized to ensure seamless trade sequencing, zero surprises, and on-time completion."
            align="center"
            className="mb-14 sm:mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {processSteps.map((step, idx) => (
              <ProcessStep
                key={idx}
                number={step.number}
                title={step.title}
                description={step.description}
                highlights={step.highlights}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* 7. Genuine Testimonials: Omitted until supplied as per AGENTS.md rules */}

      {/* 8. Pre-Footer High-Impact Enquiry CTA */}
      <HomeCTA />
    </div>
  );
}
