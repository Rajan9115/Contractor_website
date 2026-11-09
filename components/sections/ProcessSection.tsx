"use client";

import React, { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import {
  MessagesSquare,
  Ruler,
  FileText,
  HardHat,
  ClipboardCheck,
} from "lucide-react";

interface StepItem {
  number: string;
  title: string;
  icon: React.ElementType;
  description: string;
  highlights: string[];
}

const stepsData: StepItem[] = [
  {
    number: "01",
    title: "Initial Consultation",
    icon: MessagesSquare,
    description:
      "Discuss your space, preferred trades, requirements and project goals.",
    highlights: [
      "Requirement scope definition",
      "Initial feasibility review",
      "Project guidance",
    ],
  },
  {
    number: "02",
    title: "On-Site Inspection",
    icon: Ruler,
    description:
      "Review site dimensions, existing conditions and requirements across all trades.",
    highlights: [
      "Site measurements",
      "Surface and load assessment where relevant",
      "Existing installation review",
    ],
  },
  {
    number: "03",
    title: "Itemized Quotation",
    icon: FileText,
    description:
      "Review a clear estimate covering materials, labour, scope and milestones.",
    highlights: [
      "Material specifications",
      "Labour breakdown",
      "Agreed project timeline",
    ],
  },
  {
    number: "04",
    title: "Supervised Execution",
    icon: HardHat,
    description:
      "Coordinate the trades and supervise work according to the agreed execution plan.",
    highlights: [
      "Cross-trade coordination",
      "Site protection",
      "Progress updates",
    ],
  },
  {
    number: "05",
    title: "Inspection & Handover",
    icon: ClipboardCheck,
    description:
      "Review completed work, address agreed finishing items and hand over the project.",
    highlights: [
      "Quality checklist",
      "Final clean-up",
      "Project handover",
    ],
  },
];

const staggerDelays = [
  "delay-0",
  "delay-[120ms]",
  "delay-[240ms]",
  "delay-[360ms]",
  "delay-[480ms]",
];

export function ProcessSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    if (!currentRef) return;

    // Trigger entrance when ~15–20% enters viewport; reset when completely leaving viewport
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

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 lg:py-20 bg-white border-b border-[#E9E3D9] overflow-hidden"
    >
      <Container size="wide">
        {/* 1. Heading Refinement */}
        <div
          className={`max-w-3xl mx-auto text-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-700 ease-out motion-reduce:opacity-100 motion-reduce:transform-none motion-reduce:transition-none ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F5F0] border border-[#E9E3D9] text-[#B58A58] text-xs sm:text-[13px] font-semibold tracking-wider uppercase font-mono mb-3 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B58A58]" />
            <span>EXECUTION METHODOLOGY</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#172B40] tracking-tight leading-tight sm:leading-tight">
            From First Conversation to Final Handover.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#687381] leading-relaxed max-w-2xl mx-auto">
            A clear five-step process designed to keep every trade coordinated,
            every phase transparent, and every decision informed.
          </p>
        </div>

        {/* 2. Desktop Connected Timeline & Process Cards (>= 1024px) */}
        <div className="hidden lg:block relative">
          {/* Subtle Horizontal Connector Line Behind Step Indicators */}
          <div
            className="absolute top-[20px] left-[10%] right-[10%] h-[2px] bg-[#E9E3D9] z-0 pointer-events-none"
            aria-hidden="true"
          >
            {/* Animated Warm-Gold Line Filling Left to Right */}
            <div
              className={`h-full bg-[#B58A58] transition-all duration-1000 ease-out origin-left motion-reduce:w-full ${
                isVisible ? "w-full" : "w-0"
              }`}
            />
          </div>

          {/* 5-Column Grid */}
          <div className="grid grid-cols-5 gap-4 xl:gap-6 items-stretch relative z-10">
            {stepsData.map((step, idx) => {
              const Icon = step.icon;
              const delayClass = staggerDelays[idx];

              return (
                <div
                  key={step.number}
                  className={`flex flex-col h-full transition-all ease-out motion-reduce:opacity-100 motion-reduce:transform-none motion-reduce:transition-none ${
                    isVisible
                      ? `duration-[650ms] opacity-100 translate-y-0 scale-100 ${delayClass}`
                      : "duration-300 opacity-0 translate-y-[30px] scale-[0.97] delay-0"
                  }`}
                >
                  {/* Step Indicator Node (Centered Above Card) */}
                  <div className="flex justify-center mb-5">
                    <div className="w-10 h-10 rounded-full bg-white border-2 border-[#B58A58] text-[#B58A58] font-mono text-sm font-bold flex items-center justify-center shadow-xs z-10 transition-colors duration-300 group-hover:bg-[#B58A58] group-hover:text-white">
                      {step.number}
                    </div>
                  </div>

                  {/* Inner Interactive Card: Decoupled for clean hover transforms */}
                  <div className="group flex-1 flex flex-col justify-between bg-white rounded-[20px] p-6 border border-[#E9E3D9] shadow-xs hover:shadow-xl hover:border-[#B58A58]/60 transition-all duration-300 ease-out hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
                    <div className="flex flex-col">
                      {/* Icon Badge */}
                      <div className="w-11 h-11 rounded-xl bg-[#F7F5F0] border border-[#E9E3D9] flex items-center justify-center text-[#B58A58] mb-4 transition-colors duration-300 group-hover:bg-[#F5EFE6] group-hover:border-[#B58A58]/40">
                        <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                      </div>

                      {/* Step Title */}
                      <h3 className="font-heading text-[17px] font-bold text-[#172B40] tracking-tight mb-2 group-hover:text-[#B58A58] transition-colors duration-200">
                        {step.title}
                      </h3>

                      {/* Step Description */}
                      <p className="text-[13.5px] text-[#687381] leading-relaxed mb-4 min-h-[4rem]">
                        {step.description}
                      </p>
                    </div>

                    {/* Step Highlights */}
                    <div className="pt-4 border-t border-[#E9E3D9] space-y-2 text-xs text-[#172B40]">
                      {step.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#B58A58] shrink-0 mt-1.5" />
                          <span className="leading-snug">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. Tablet Responsive Two-Column Layout (768px – 1023px) */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-6 items-stretch">
          {stepsData.map((step, idx) => {
            const Icon = step.icon;
            const delayClass = staggerDelays[idx];
            const isLast = idx === stepsData.length - 1;

            return (
              <div
                key={step.number}
                className={`${
                  isLast ? "col-span-2 max-w-md mx-auto w-full" : ""
                } flex flex-col h-full transition-all ease-out motion-reduce:opacity-100 motion-reduce:transform-none motion-reduce:transition-none ${
                  isVisible
                    ? `duration-[650ms] opacity-100 translate-y-0 scale-100 ${delayClass}`
                    : "duration-300 opacity-0 translate-y-[30px] scale-[0.97] delay-0"
                }`}
              >
                <div className="group h-full flex flex-col justify-between bg-white rounded-[20px] p-7 border border-[#E9E3D9] shadow-xs hover:shadow-lg hover:border-[#B58A58]/60 transition-all duration-300 ease-out hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
                  <div>
                    {/* Header: Icon & Step Number */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-[#F7F5F0] border border-[#E9E3D9] flex items-center justify-center text-[#B58A58] group-hover:bg-[#F5EFE6]">
                        <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <span className="w-9 h-9 rounded-full bg-white border-2 border-[#B58A58] text-[#B58A58] font-mono text-xs font-bold flex items-center justify-center shadow-xs">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="font-heading text-lg font-bold text-[#172B40] tracking-tight mb-2 group-hover:text-[#B58A58] transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-sm text-[#687381] leading-relaxed mb-4">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E9E3D9] space-y-2 text-xs text-[#172B40]">
                    {step.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B58A58] shrink-0 mt-1.5" />
                        <span className="leading-snug">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 4. Mobile Vertical Connected Timeline (< 768px) */}
        <div className="md:hidden relative">
          {/* Continuous Vertical Timeline Line on Mobile */}
          <div
            className="absolute left-[19px] top-[24px] bottom-[24px] w-[2px] bg-[#E9E3D9] z-0 pointer-events-none"
            aria-hidden="true"
          >
            <div
              className={`w-full bg-[#B58A58] transition-all duration-1000 ease-out origin-top motion-reduce:h-full ${
                isVisible ? "h-full" : "h-0"
              }`}
            />
          </div>

          {/* Stacked Cards with Timeline Node Anchors */}
          <div className="space-y-6 relative z-10">
            {stepsData.map((step, idx) => {
              const Icon = step.icon;
              const delayClass = staggerDelays[idx];

              return (
                <div
                  key={step.number}
                  className={`relative pl-14 transition-all ease-out motion-reduce:opacity-100 motion-reduce:transform-none motion-reduce:transition-none ${
                    isVisible
                      ? `duration-[650ms] opacity-100 translate-y-0 scale-100 ${delayClass}`
                      : "duration-300 opacity-0 translate-y-6 scale-[0.97] delay-0"
                  }`}
                >
                  {/* Step Node Anchored on the Vertical Line */}
                  <div className="absolute left-0 top-5 w-10 h-10 rounded-full bg-white border-2 border-[#B58A58] text-[#B58A58] font-mono text-xs font-bold flex items-center justify-center shadow-xs z-10">
                    {step.number}
                  </div>

                  {/* Card Content on Mobile */}
                  <div className="bg-white rounded-[20px] p-6 border border-[#E9E3D9] shadow-xs">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-lg bg-[#F7F5F0] border border-[#E9E3D9] flex items-center justify-center text-[#B58A58] shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-heading text-base font-bold text-[#172B40] tracking-tight">
                        {step.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-[#687381] leading-relaxed mb-4">
                      {step.description}
                    </p>

                    <div className="pt-3 border-t border-[#E9E3D9] space-y-1.5 text-xs text-[#172B40]">
                      {step.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#B58A58] shrink-0 mt-1" />
                          <span className="leading-snug">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

