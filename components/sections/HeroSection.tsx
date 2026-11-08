"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, FileText } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
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

        {/* Directional left-to-right vignette: strong contrast over text block, reveals scene on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/25" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* 2. Vertically Centered Content Layer (On Top of Background) */}
      <div className="relative z-10 w-full pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-12">
        <Container size="wide">
          <div className="max-w-2xl text-left space-y-6 sm:space-y-7">
            {/* Main Heading */}
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] drop-shadow-md">
              <span className="text-[#E5A855]">Built with Precision.{" "}</span>
              <span className="block text-white">Finished to Perfection.</span>
            </h1>

            {/* Supporting Description / Subheading */}
            <p className="text-sm sm:text-base md:text-lg text-neutral-300 leading-relaxed font-normal drop-shadow-xs">
              Full-scope contracting across custom carpentry, modern false ceilings, certified wiring, and flawless painting. We turn bare spaces into refined environments with master craft and zero vendor friction.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3.5 pt-2">
              <Button
                variant="accent"
                size="lg"
                href="/projects"
                rightIcon={<ArrowRight className="w-5 h-5" />}
                className="shadow-lg bg-[#E5A855] hover:bg-[#D49544] text-[#172B40] font-semibold border-0"
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

            {/* Trust Badges Wrapped in Modern Glassmorphic Pills */}
            <div className="pt-8 sm:pt-10 flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs text-neutral-300">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm shadow-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E5A855] shrink-0" />
                <span className="font-medium">Authentic On-Site Photos</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm shadow-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E5A855] shrink-0" />
                <span className="font-medium">Direct Contractor Supervision</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm shadow-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E5A855] shrink-0" />
                <span className="font-medium">Transparent Itemized Estimates</span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
