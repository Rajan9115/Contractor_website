import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { siteConfig, contactConfig } from "@/data/siteConfig";
import { buildWhatsAppUrl, buildTelUrl } from "@/lib/whatsapp";
import {
  ShieldCheck,
  CheckCircle2,
  HardHat,
  Layers,
  FileSpreadsheet,
  MessageSquare,
  ArrowRight,
  Phone,
  MapPin,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Our Work & Craftsmanship Standards | Shan Contracting",
  description:
    "Learn about our on-site contracting methodology, direct supervision, authentic project standards, and single-point execution across India.",
};

export default function AboutPage() {
  const whatsappUrl = buildWhatsAppUrl();
  const telUrl = buildTelUrl();

  const corePillars = [
    {
      icon: HardHat,
      title: "Direct On-Site Supervision",
      description:
        "Every project is actively supervised on the ground. We inspect framing tolerances, wiring conduits, and surface putty coats firsthand.",
    },
    {
      icon: Layers,
      title: "Four Coordinated Trades",
      description:
        "Electrical, carpentry, painting, and false ceiling works are synchronized under one responsible team, eliminating trade conflict and schedule delays.",
    },
    {
      icon: ShieldCheck,
      title: "Material Purity & Direct Sourcing",
      description:
        "We specify genuine BWR/BWP marine plywood, fire-retardant copper cables, branded emulsions, and heavy-gauge GI channels without substitutions.",
    },
    {
      icon: FileSpreadsheet,
      title: "Transparent Itemized Billing",
      description:
        "Detailed bill of materials and clear milestone breakdown agreed before any work starts. No surprise hidden charges.",
    },
  ];

  const tradeMilestones = [
    {
      trade: "Concealed Electrification",
      desc: "Chiseling and conduit routing scheduled prior to wall plastering, ensuring zero damage to finished masonry.",
    },
    {
      trade: "Structural False Ceilings",
      desc: "Laser-leveled GI framing and gypsum board fixing with provision for cove lighting and spotlight cutouts.",
    },
    {
      trade: "Architectural Woodwork",
      desc: "Precision carpentry, custom wardrobe carcasses, soft-close hardware calibration, and seamless edge-banding.",
    },
    {
      trade: "Surface Preparation & Painting",
      desc: "Machine sanding, dual-coat putty, alkali-resistant primer, and washable luxury topcoats applied after all dusty works conclude.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Page Hero */}
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        kicker="Direct Contractor Accountability"
        title="Built on Skill. Proven by Real On-Site Work."
        description="We are hands-on contractors offering dedicated, end-to-end execution for electrical wiring, bespoke carpentry, luxury painting, and false ceilings. Authentic workmanship with zero compromise."
        actions={
          <>
            <Button
              variant="whatsapp"
              size="md"
              href={whatsappUrl}
              isExternal
              leftIcon={<MessageSquare className="w-4 h-4" />}
            >
              Direct WhatsApp Chat
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

      {/* 2. Contractor Philosophy & Authentic Photo Section */}
      <section className="py-4 sm:py-8 bg-white border-b border-[#E5E0D7]">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Authentic On-Site Photo */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#E9E3D9] border border-[#E5E0D7] shadow-lg">
                <Image
                  src="/images/about.png"
                  alt="On-site contractor work and craftsmanship"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#172B40]/70 via-transparent to-transparent opacity-60" />

                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-[#172B40] text-xs font-semibold shadow-xs flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#21865B]" />
                  <span>Verified On-Site Work</span>
                </div>

                <div className="absolute bottom-4 inset-x-4 text-white text-xs">
                  <span className="font-bold text-sm block">
                    {siteConfig.shortName} Contracting Services
                  </span>
                  <span className="text-[#E9E3D9]/80 text-[11px]">
                    Dedicated master craftsmanship across residential & commercial spaces
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Narrative & Principles */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest font-semibold text-[#B58A58]">
                  Our Approach
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#172B40] tracking-tight mt-1 leading-snug">
                  Why Direct Supervision Matters
                </h2>
              </div>

              <p className="text-base text-[#687381] leading-relaxed">
                Most renovation headaches happen when homeowners hire four separate trades who do not communicate. The electrician cuts into newly finished ceilings; the carpenter blocks switchboards; and the painter paints over uneven plaster.
              </p>

              <p className="text-base text-[#687381] leading-relaxed">
                We eliminate that friction by managing electrical installations, custom woodwork, painting, and false ceilings as one integrated, disciplined project. Every stage is planned in advance, executed by skilled craftsmen, and personally supervised on site.
              </p>

              <div className="pt-3 border-t border-[#E5E0D7] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#172B40]">
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#F7F5F0] border border-[#E5E0D7]">
                  <CheckCircle2 className="w-4 h-4 text-[#21865B] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">No Subcontractor Blame</span>
                    <span className="text-[#687381]">One single contractor accountable for every milestone.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#F7F5F0] border border-[#E5E0D7]">
                  <CheckCircle2 className="w-4 h-4 text-[#21865B] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">100% Genuine Evidence</span>
                    <span className="text-[#687381]">Only real photos of completed projects are published.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Core Craftsmanship Pillars */}
      <section className="py-4 sm:py-8 bg-[#F7F5F0] border-b border-[#E5E0D7]">
        <Container size="wide">
          <SectionHeading
            kicker="Our Pillars"
            title="What Sets Our Workmanship Apart"
            description="We adhere to strict craftsmanship standards on every job site, ensuring durable results and seamless execution."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {corePillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-white border border-[#E5E0D7] shadow-xs flex flex-col justify-between hover:border-[#B58A58]/50 transition-colors"
                >
                  <div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#F7F5F0] border border-[#E5E0D7] text-[#B58A58] mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-[#172B40] tracking-tight mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-[#687381] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 4. Sequential Trade Delivery Matrix */}
      <section className="py-4 sm:py-8 bg-white border-b border-[#E5E0D7]">
        <Container size="wide">
          <SectionHeading
            kicker="Methodology"
            title="The Multi-Trade Sequencing Standard"
            description="How we align electrical, carpentry, painting, and ceiling work on the job site."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tradeMilestones.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[#F7F5F0] border border-[#E5E0D7] relative"
              >
                <span className="font-heading text-2xl font-black text-[#B58A58] block mb-2">
                  0{idx + 1}
                </span>
                <h4 className="text-base font-bold text-[#172B40] tracking-tight mb-2">
                  {item.trade}
                </h4>
                <p className="text-xs text-[#687381] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Service Area & Facts Reassurance */}
      <section className="py-4 sm:py-8 bg-[#F7F5F0] border-b border-[#E5E0D7]">
        <Container size="wide">
          <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#E5E0D7] shadow-sm max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#B58A58]">
                Coverage & Operating Areas
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#172B40] tracking-tight">
                Serving Residential & Commercial Clients
              </h3>
              <p className="text-xs sm:text-sm text-[#687381] flex items-center justify-center md:justify-start gap-1.5 pt-1">
                <MapPin className="w-4 h-4 text-[#B58A58] shrink-0" />
                <span>{contactConfig.serviceAreaSummary}</span>
              </p>
            </div>

            <Button
              variant="whatsapp"
              size="lg"
              href={whatsappUrl}
              isExternal
              leftIcon={<MessageSquare className="w-5 h-5" />}
              className="shrink-0"
            >
              Verify Location on WhatsApp
            </Button>
          </div>
        </Container>
      </section>

      {/* 6. Pre-Footer Action Banner */}
      <section className="bg-[#172B40] text-white py-4 sm:py-8">
        <Container className="text-center max-w-3xl">
          <span className="inline-block text-xs uppercase tracking-widest font-semibold text-[#B58A58] mb-2">
            Get In Touch
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
            <span className="text-[#B58A58]">Ready to Discuss Your Space With the Contractor?</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#E9E3D9]/80 leading-relaxed">
            Message us on WhatsApp with your room dimensions or plan an in-person site inspection.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Button
              variant="whatsapp"
              size="lg"
              href={whatsappUrl}
              isExternal
              leftIcon={<MessageSquare className="w-5 h-5" />}
            >
              Direct WhatsApp Chat
            </Button>
            <Button
              variant="accent"
              size="lg"
              href="/contact"
              rightIcon={<ArrowRight className="w-5 h-5" />}
            >
              Request Free Estimate
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
