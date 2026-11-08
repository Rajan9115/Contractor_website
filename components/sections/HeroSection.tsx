"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, MessageSquare, CheckCircle2, FileText } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function HeroSection() {
  const whatsappUrl = buildWhatsAppUrl();

  return (
    <section
      id="hero-section"
      className="relative w-full min-h-[100svh] flex items-center overflow-hidden bg-[#172B40]"
    >
      {/* 1. Full-Screen Edge-to-Edge Background Image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none">
        <Image
          src="/images/hero-bg.avif"
          alt="Premium interior contracting and architecture"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Subtle multi-layer dark overlay for crystal-clear text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#172B40]/95 via-[#172B40]/80 to-[#172B40]/50" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* 2. Vertically Centered Content Layer (On Top of Background) */}
      <div className="relative z-10 w-full pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24">
        <Container size="wide">
          <div className="max-w-3xl text-left space-y-6 sm:space-y-8">
          
            {/* Main Heading */}
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] drop-shadow-md">
              Transform Your Space.{" "}
              <span className="block text-white">Built With Skill.</span>{" "}
              <span className="text-[#B58A58]">Finished With Perfection.</span>
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg md:text-xl text-[#E9E3D9] leading-relaxed max-w-2xl font-normal drop-shadow-sm">
              Professional, on-site contracting solutions for modern residences and commercial spaces. Expertly coordinated concealed electrical wiring, bespoke modular carpentry, luxury wall coatings, and designer false ceilings executed with uncompromising craftsmanship.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3.5 pt-2">
              <Button
                variant="accent"
                size="lg"
                href="/projects"
                rightIcon={<ArrowRight className="w-5 h-5" />}
                className="shadow-lg"
              >
                Explore Our Work
              </Button>

              <Button
                variant="outline"
                size="lg"
                href="/contact"
                leftIcon={<FileText className="w-5 h-5" />}
                className="border-white/40 text-white hover:bg-white/15 hover:border-white shadow-sm"
              >
                Get a Free Estimate
              </Button>

            </div>

            {/* Quick Proof Points */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-white/90 font-medium drop-shadow-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B58A58] shrink-0" />
                <span>Authentic On-Site Photos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B58A58] shrink-0" />
                <span>Direct Contractor Supervision</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B58A58] shrink-0" />
                <span>Transparent Itemized Estimates</span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
