"use client";

import React, { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { Project } from "@/types/project";
import { PortfolioProjectCard } from "@/components/projects/PortfolioProjectCard";

interface PortfolioSectionProps {
  projects: Project[];
}

const staggerDelays = [
  "delay-0",
  "delay-[140ms]",
  "delay-[280ms]",
  "delay-[420ms]",
  "delay-[560ms]",
  "delay-[700ms]",
  "delay-[840ms]",
  "delay-[980ms]",
];

export function PortfolioSection({ projects }: PortfolioSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    if (!currentRef) return;

    // Trigger entrance when ~15% enters viewport; reset when completely leaving viewport
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;

        if (entry.isIntersecting && entry.intersectionRatio >= 0.15) {
          setIsVisible(true);
        } else if (!entry.isIntersecting || entry.intersectionRatio === 0) {
          setIsVisible(false);
        }
      },
      {
        threshold: [0, 0.15], // Dual threshold prevents edge flickering and guarantees clean replay
      }
    );

    observer.observe(currentRef);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Editorial grid column spans for an architectural magazine rhythm
  const getGridSpanClass = (index: number) => {
    switch (index) {
      case 0:
        return "col-span-12 lg:col-span-7";
      case 1:
        return "col-span-12 lg:col-span-5";
      case 2:
        return "col-span-12 lg:col-span-5";
      case 3:
        return "col-span-12 lg:col-span-7";
      default:
        return "col-span-12 sm:col-span-6 lg:col-span-3";
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 lg:py-20 bg-[#F7F5F0] border-b border-[#E9E3D9] overflow-hidden"
    >
      <Container size="wide">
        {/* 1. Section Header with Cinematic Staggered Entrance */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div
            className={`max-w-2xl transition-all duration-700 ease-out motion-reduce:opacity-100 motion-reduce:transform-none motion-reduce:transition-none ${
              isVisible
                ? "opacity-100 translate-y-0 delay-0"
                : "opacity-0 translate-y-[25px] delay-0"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E9E3D9] text-[#B58A58] text-xs font-semibold tracking-wider uppercase font-mono mb-3 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B58A58]" />
              <span>Authentic Portfolio</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#172B40] tracking-tight font-heading">
              Featured On-Site Work
            </h2>
            <p
              className={`mt-3 text-sm sm:text-base text-[#687381] leading-relaxed transition-all duration-700 ease-out motion-reduce:opacity-100 motion-reduce:transform-none motion-reduce:transition-none ${
                isVisible
                  ? "opacity-100 translate-y-0 delay-[140ms]"
                  : "opacity-0 translate-y-4 delay-0"
              }`}
            >
              Browse genuine project photographs from completed residential and commercial jobs. Real workmanship, zero stock imagery.
            </p>
          </div>

          <div
            className={`shrink-0 self-start md:self-end transition-all duration-700 ease-out motion-reduce:opacity-100 motion-reduce:transform-none motion-reduce:transition-none ${
              isVisible
                ? "opacity-100 translate-y-0 delay-[140ms]"
                : "opacity-0 translate-y-4 delay-0"
            }`}
          >
            <Button
              variant="primary"
              href="/projects"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Explore Full Gallery
            </Button>
          </div>
        </div>

        {/* 2. Editorial Portfolio Grid with Staggered Clip-Path Reveal */}
        <div className="grid grid-cols-12 gap-5 sm:gap-6 lg:gap-8 items-stretch">
          {projects.map((project, index) => {
            const delayClass = staggerDelays[index % staggerDelays.length];
            const spanClass = getGridSpanClass(index);
            const isFlagship = index < 4;

            return (
              <div
                key={project.id}
                className={`${spanClass} flex flex-col transition-all ease-out motion-reduce:opacity-100 motion-reduce:transform-none motion-reduce:transition-none motion-reduce:[clip-path:none] ${
                  isVisible
                    ? `duration-800 opacity-100 translate-y-0 scale-100 [clip-path:inset(0%_0%_0%_0%)] ${delayClass}`
                    : "duration-300 opacity-0 translate-y-8 sm:translate-y-10 scale-[1.08] [clip-path:inset(0%_0%_100%_0%)] delay-0"
                }`}
              >
                <PortfolioProjectCard
                  project={project}
                  isFlagship={isFlagship}
                />
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
