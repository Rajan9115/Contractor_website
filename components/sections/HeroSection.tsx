"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, FileText } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const trustBadges = [
  "Authentic On-Site Photos",
  "Direct Contractor Supervision",
  "Transparent Itemized Estimates",
];

const badgeDelays = ["delay-[950ms]", "delay-[1050ms]", "delay-[1150ms]"];

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Schedule on next animation frame to prime CSS transitions smoothly
    const handle = requestAnimationFrame(() => {
      setIsLoaded(true);
    });
    return () => cancelAnimationFrame(handle);
  }, []);

  return (
    <section
      id="hero-section"
      className="relative w-full min-h-[100svh] flex items-center overflow-hidden bg-[#172B40]"
    >
      {/* 1. Full-Screen Edge-to-Edge Background Image with Cinematic Scale */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none">
        <Image
          src="/images/hero-bg.avif"
          alt="Premium interior contracting and architecture"
          fill
          priority
          quality={90}
          sizes="100vw"
          className={`object-cover object-center transition-transform duration-[2000ms] ease-out motion-reduce:transform-none ${
            isLoaded ? "scale-100" : "scale-[1.08]"
          }`}
        />

        {/* Ambient base overlay to guarantee immediate text contrast */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Directional left-to-right vignette with smooth fade-in */}
        <div
          className={`absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/25 transition-opacity duration-1000 ease-out motion-reduce:opacity-100 ${
            isLoaded ? "opacity-100" : "opacity-40"
          }`}
        />
        <div
          className={`absolute inset-0 bg-black/20 transition-opacity duration-1000 ease-out motion-reduce:opacity-100 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      {/* 2. Vertically Centered Content Layer */}
      <div className="relative z-10 w-full pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-12">
        <Container size="wide">
          <div className="max-w-2xl text-left space-y-6 sm:space-y-7">
            {/* Main Heading with Masked Upward Reveal */}
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] drop-shadow-md">
              <span className="block overflow-hidden pb-1">
                <span
                  className={`block text-[#E5A855] transition-all duration-800 ease-out motion-reduce:opacity-100 motion-reduce:transform-none motion-reduce:transition-none ${
                    isLoaded
                      ? "opacity-100 translate-y-0 delay-[150ms]"
                      : "opacity-0 translate-y-[30px] delay-0"
                  }`}
                >
                  Built with Precision.
                </span>
              </span>
              <span className="block overflow-hidden">
                <span
                  className={`block text-white transition-all duration-800 ease-out motion-reduce:opacity-100 motion-reduce:transform-none motion-reduce:transition-none ${
                    isLoaded
                      ? "opacity-100 translate-y-0 delay-[300ms]"
                      : "opacity-0 translate-y-[30px] delay-0"
                  }`}
                >
                  Finished to Perfection.
                </span>
              </span>
            </h1>

            {/* Supporting Description / Subheading */}
            <p
              className={`text-sm sm:text-base md:text-lg text-neutral-300 leading-relaxed font-normal drop-shadow-xs transition-all duration-700 ease-out motion-reduce:opacity-100 motion-reduce:transform-none motion-reduce:transition-none ${
                isLoaded
                  ? "opacity-100 translate-y-0 delay-[500ms]"
                  : "opacity-0 translate-y-5 delay-0"
              }`}
            >
              Full-scope contracting across custom carpentry, modern false ceilings, certified wiring, and flawless painting. We turn bare spaces into refined environments with master craft and zero vendor friction.
            </p>

            {/* CTA Buttons with Staggered Entrance and Refined Hover */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3.5 pt-2">
              <div
                className={`transition-all duration-600 ease-out motion-reduce:opacity-100 motion-reduce:transform-none motion-reduce:transition-none ${
                  isLoaded
                    ? "opacity-100 translate-y-0 delay-[700ms]"
                    : "opacity-0 translate-y-4 delay-0"
                }`}
              >
                <Button
                  variant="accent"
                  size="lg"
                  href="/projects"
                  rightIcon={
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 ease-out group-hover:translate-x-1.5 motion-reduce:transform-none" />
                  }
                  className="group shadow-lg bg-[#E5A855] hover:bg-[#D49544] hover:brightness-105 active:brightness-95 text-[#172B40] font-semibold border-0 transition-all duration-300"
                >
                  Explore Our Work
                </Button>
              </div>

              <div
                className={`transition-all duration-600 ease-out motion-reduce:opacity-100 motion-reduce:transform-none motion-reduce:transition-none ${
                  isLoaded
                    ? "opacity-100 translate-y-0 delay-[820ms]"
                    : "opacity-0 translate-y-4 delay-0"
                }`}
              >
                <Button
                  variant="outline"
                  size="lg"
                  href="/contact"
                  leftIcon={<FileText className="w-5 h-5" />}
                  className="border-white/40 text-white hover:bg-white/15 hover:border-white shadow-sm transition-all duration-300"
                >
                  Get a Free Estimate
                </Button>
              </div>
            </div>

            {/* Trust Badges with Staggered Fade & Rise */}
            <div className="pt-8 sm:pt-10 flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs text-neutral-300">
              {trustBadges.map((badgeText, idx) => (
                <div
                  key={idx}
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm shadow-xs transition-all duration-500 ease-out motion-reduce:opacity-100 motion-reduce:transform-none motion-reduce:transition-none ${
                    isLoaded
                      ? `opacity-100 translate-y-0 ${badgeDelays[idx]}`
                      : "opacity-0 translate-y-3 delay-0"
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E5A855] shrink-0" />
                  <span className="font-medium">{badgeText}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
