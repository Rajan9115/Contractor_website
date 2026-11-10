import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { ProjectsGalleryView } from "@/components/projects/ProjectsGalleryView";
import { projectsData } from "@/data/projects";
import { buildWhatsAppUrl, buildTelUrl } from "@/lib/whatsapp";
import { contactConfig } from "@/data/siteConfig";
import { MessageSquare, ArrowRight, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Completed Projects & Portfolio Gallery | Shan Contracting",
  description:
    "Browse authentic on-site photos and videos from real contracting projects in India: concealed wiring, modular woodwork, luxury painting, and false ceilings.",
};

export default function ProjectsPage() {
  const whatsappUrl = buildWhatsAppUrl();
  const telUrl = buildTelUrl();

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Page Hero */}
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Projects" }]}
        kicker="Authentic Workmanship"
        title="Completed Works & Project Gallery"
        description="Every photograph and video featured here is taken directly on our completed residential and commercial job sites. Inspect real finishes, materials, and detailing."
        actions={
          <>
            <Button
              variant="whatsapp"
              size="md"
              href={whatsappUrl}
              isExternal
              leftIcon={<MessageSquare className="w-4 h-4" />}
            >
              Enquire on WhatsApp
            </Button>
            <Button
              variant="primary"
              size="md"
              href="/contact"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Request Free Estimate
            </Button>
          </>
        }
      />

      {/* 2. Interactive Filterable Gallery Section */}
      <section className="py-4 sm:py-8 bg-[#F7F5F0] border-b border-[#E5E0D7]">
        <Container size="wide">
          <ProjectsGalleryView initialProjects={projectsData} />
        </Container>
      </section>

      {/* 3. Pre-Footer Call to Action */}
      <section className="bg-[#172B40] text-white py-4 sm:py-8">
        <Container className="text-center max-w-3xl">
          <span className="inline-block text-xs uppercase tracking-widest font-semibold text-[#B58A58] mb-2">
            Direct Discussion
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
            <span className="text-[#B58A58]">Inspired by Any of Our Completed Projects?</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#E9E3D9]/80 leading-relaxed">
            Send us screenshots of the designs or finishes you like directly on WhatsApp. We will discuss feasibility, material selections, and provide an itemized estimate.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Button
              variant="whatsapp"
              size="lg"
              href={whatsappUrl}
              isExternal
              leftIcon={<MessageSquare className="w-5 h-5" />}
            >
              Share Photos on WhatsApp
            </Button>
            <Button
              variant="accent"
              size="lg"
              href="/contact"
              rightIcon={<ArrowRight className="w-5 h-5" />}
            >
              Schedule Site Visit
            </Button>
            <Button
              variant="outline"
              size="lg"
              href={telUrl}
              isExternal={Boolean(contactConfig.phoneRaw)}
              leftIcon={<Phone className="w-5 h-5" />}
              className="border-white/30 text-white hover:bg-white/10"
            >
              {contactConfig.phoneDisplay}
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}

