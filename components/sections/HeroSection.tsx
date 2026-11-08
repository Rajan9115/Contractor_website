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

        {/* Subtle multi-layer dark overlay for crystal-clear text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#172B40]/95 via-[#172B40]/80 to-[#172B40]/50" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* 2. Vertically Centered Content Layer (On Top of Background) */}
      <div className="relative z-10 w-full pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24">
        <Container size="wide">
          <div className="max-w-3xl text-left space-y-6 sm:space-y-8">
            {/* Main Heading */}
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text- leading-[1.15] drop-shadow-md">
              <span className="text-white">Built with Precision.{" "}</span>
              <span className="block text-[#B58A58]">Finished to Perfection.</span>
            </h1>

            {/* Supporting Description / Subheading */}
            <p className="text-sm sm:text-base md:text-lg text-white/70 leading-relaxed max-w-2xl font-normal drop-shadow-xs">
              Full-scope contracting across custom carpentry, modern false ceilings, certified wiring, and flawless painting. We turn bare spaces into refined environments with master craft and zero vendor friction.
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
