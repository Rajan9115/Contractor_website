"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageSquare, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function HeroSection() {
  const whatsappUrl = buildWhatsAppUrl();

  return (
    <section className="relative overflow-hidden bg-[#F7F5F0] pt-12 pb-16 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-32 border-b border-[#E5E0D7]">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Copy, and CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Kicker / Specialization Badges */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#E5E0D7] shadow-xs text-xs font-semibold text-[#172B40]">
              <span className="w-2 h-2 rounded-full bg-[#B58A58]" />
              <span>Electrical</span>
              <span className="text-[#687381]">•</span>
              <span>Carpentry</span>
              <span className="text-[#687381]">•</span>
              <span>Painting</span>
              <span className="text-[#687381]">•</span>
              <span>Ceiling</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#172B40] leading-[1.12]">
              Transform Your Space.{" "}
              <span className="block text-[#172B40]">Built With Skill.</span>{" "}
              <span className="text-[#B58A58]">Finished With Perfection.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg lg:text-xl text-[#687381] leading-relaxed max-w-2xl">
              Professional, on-site contracting solutions for modern residences and commercial spaces. Expertly coordinated concealed electrical wiring, bespoke modular carpentry, luxury wall coatings, and designer false ceilings executed with uncompromising craftsmanship.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3.5 pt-2">
              <Button
                variant="primary"
                size="lg"
                href="/projects"
                rightIcon={<ArrowRight className="w-5 h-5" />}
              >
                Explore Our Work
              </Button>

              <Button
                variant="whatsapp"
                size="lg"
                href={whatsappUrl}
                isExternal
                leftIcon={<MessageSquare className="w-5 h-5" />}
              >
                Chat on WhatsApp
              </Button>

              <Button
                variant="outline"
                size="lg"
                href="/contact"
              >
                Get an Estimate
              </Button>
            </div>

            {/* Quick Proof Points */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-[#172B40] font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#21865B] shrink-0" />
                <span>Authentic On-Site Photos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#21865B] shrink-0" />
                <span>Direct Contractor Supervision</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#21865B] shrink-0" />
                <span>Transparent Itemized Estimates</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Video / Media Showcase (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none rounded-2xl bg-white p-3 shadow-xl border border-[#E5E0D7]">
              {/* Media Container with Video and Overlay */}
              <div className="relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] w-full rounded-xl overflow-hidden bg-[#172B40]">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="/images/about-work.png"
                  className="w-full h-full object-cover"
                >
                  <source src="/videos/hero-bg.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#172B40]/80 via-transparent to-transparent pointer-events-none" />

                {/* Floating Authentic Work Tag */}
                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-[#172B40] text-xs font-semibold shadow-md flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#21865B]" />
                  <span>Real On-Site Project</span>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="text-xs uppercase tracking-wider font-semibold text-[#B58A58]">
                    Master Craftsmanship
                  </div>
                  <div className="text-lg font-bold">
                    Precision Finishes & Direct On-Site Quality
                  </div>
                  <div className="text-xs text-[#E9E3D9]/80 mt-1">
                    Concealed Wiring • Modular Joinery • False Ceilings • Painting
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
