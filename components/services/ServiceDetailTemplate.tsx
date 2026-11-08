import React from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, MessageSquare, Phone, ShieldCheck, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ServiceDetail } from "@/types/service";
import { Project } from "@/types/project";
import { buildWhatsAppUrl, buildTelUrl } from "@/lib/whatsapp";
import { contactConfig } from "@/data/siteConfig";

interface ServiceDetailTemplateProps {
  service: ServiceDetail;
  relatedProjects: Project[];
}

export function ServiceDetailTemplate({
  service,
  relatedProjects,
}: ServiceDetailTemplateProps) {
  const whatsappUrl = buildWhatsAppUrl({ service: service.shortTitle });
  const telUrl = buildTelUrl();

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: service.shortTitle },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Page Hero with Breadcrumbs & Service-Aware CTAs */}
      <PageHero
        breadcrumbs={breadcrumbs}
        kicker="Specialized Trade"
        title={service.title}
        description={service.headline}
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

      {/* 2. Detailed Narrative & Authentic Media Showcase */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E5E0D7]">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Authentic On-Site Photo */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/5] rounded-2xl overflow-hidden bg-[#E9E3D9] border border-[#E5E0D7] shadow-md group">
                <Image
                  src={service.coverImage}
                  alt={`Authentic on-site ${service.shortTitle} execution`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transform-none"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#172B40]/70 via-transparent to-transparent opacity-60" />

                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm text-[#172B40] text-xs font-semibold shadow-xs flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#21865B]" />
                  <span>Real Job Site Photography</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
                  <span className="font-semibold block">{service.title}</span>
                  <span className="text-[#E9E3D9]/80 text-[11px]">
                    Direct craftsmanship & adherence to technical specifications
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Technical Narrative & Work Standards */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest font-semibold text-[#B58A58]">
                  Overview & Execution
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#172B40] tracking-tight mt-1 leading-snug">
                  Precision Standards for {service.shortTitle} Work
                </h2>
              </div>

              <p className="text-base text-[#687381] leading-relaxed">
                {service.description}
              </p>

              <div className="pt-2 space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#172B40]">
                  Quality Benchmarks We Follow
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-lg bg-[#F7F5F0] border border-[#E5E0D7] text-xs text-[#172B40]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#21865B] shrink-0 mt-0.5" />
                      <span className="leading-snug font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Confirmed Subcategories / Scope */}
      <section className="py-16 sm:py-20 bg-[#F7F5F0] border-b border-[#E5E0D7]">
        <Container size="wide">
          <SectionHeading
            kicker="Confirmed Disciplines"
            title={`What We Handle Under ${service.shortTitle}`}
            description="Clear, confirmed scope of work executed on site with professional tooling."
            align="center"
            className="mb-12"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.subcategories.map((sub, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-white border border-[#E5E0D7] shadow-xs flex flex-col justify-between hover:border-[#B58A58]/50 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-[#B58A58]">
                      {(idx + 1).toString().padStart(2, "0")}
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#687381] px-2 py-0.5 rounded bg-[#F7F5F0]">
                      Confirmed
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-[#172B40] tracking-tight">
                    {sub}
                  </h4>
                </div>
                <div className="mt-4 pt-3 border-t border-[#E5E0D7] flex items-center justify-between text-xs text-[#687381]">
                  <span>On-site execution</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#B58A58]" />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Trade-Specific Execution Methodology */}
      {service.processSummary && service.processSummary.length > 0 && (
        <section className="py-16 sm:py-20 bg-white border-b border-[#E5E0D7]">
          <Container size="wide">
            <SectionHeading
              kicker="On-Site Sequence"
              title={`The ${service.shortTitle} Workflow`}
              description="A methodical step-by-step approach ensuring alignment with other trades and flawless results."
              align="center"
              className="mb-12"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.processSummary.map((step, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-[#F7F5F0] border border-[#E5E0D7] relative"
                >
                  <span className="font-heading text-2xl font-black text-[#B58A58] block mb-2">
                    0{idx + 1}
                  </span>
                  <p className="text-sm font-semibold text-[#172B40] leading-snug">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* 5. Related Projects From Authentic Portfolio */}
      {relatedProjects && relatedProjects.length > 0 && (
        <section className="py-16 sm:py-20 bg-[#F7F5F0] border-b border-[#E5E0D7]">
          <Container size="wide">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
              <SectionHeading
                kicker="Authentic Evidence"
                title={`Completed ${service.shortTitle} Projects`}
                description="Inspect genuine photos from real residential and commercial jobs."
                align="left"
              />
              <Button
                variant="outline"
                href="/projects"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="shrink-0 self-start sm:self-end"
              >
                View All Projects
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* 6. Trade-Aware Pre-Footer CTA */}
      <section className="bg-[#172B40] text-white py-16 sm:py-20">
        <Container className="text-center max-w-3xl">
          <span className="inline-block text-xs uppercase tracking-widest font-semibold text-[#B58A58] mb-2">
            Direct Contractor Support
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
            Need Professional {service.shortTitle} Work Done Right?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#E9E3D9]/80 leading-relaxed">
            Message us directly on WhatsApp with your floor plan or site photos for immediate advice and an itemized quotation.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Button
              variant="whatsapp"
              size="lg"
              href={whatsappUrl}
              isExternal
              leftIcon={<MessageSquare className="w-5 h-5" />}
            >
              Enquire on WhatsApp
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
