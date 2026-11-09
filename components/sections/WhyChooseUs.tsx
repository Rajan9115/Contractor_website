"use client";

import React, { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ShieldCheck, AlertCircle, CheckCircle2, XCircle, ArrowRight } from "lucide-react";

export function WhyChooseUs() {
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

  const ourApproachBenefits = [
    {
      title: "Sequenced Trade Execution",
      description:
        "Electrical, ceiling, carpentry, and painting activities are coordinated around the project plan.",
    },
    {
      title: "Direct Site Coordination",
      description:
        "One contractor coordinates the work and communication across trades.",
    },
    {
      title: "Clear Work Responsibility",
      description:
        "The project has a defined point of contact for scope, coordination, and progress.",
    },
  ];

  const fragmentedChallenges = [
    {
      title: "Uncoordinated Schedules",
      description:
        "Different teams may have conflicting work schedules.",
    },
    {
      title: "Trade-to-Trade Conflicts",
      description:
        "Poor sequencing can lead to rework or clashes between installations.",
    },
    {
      title: "Unclear Accountability",
      description:
        "Multiple independent contractors can make responsibility and communication less clear.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-[#F7F5F0] py-12 sm:py-16 lg:py-20 border-b border-[#E9E3D9] overflow-hidden"
    >
      <Container size="wide">
        {/* 1. Section Heading */}
        <div
          className={`max-w-3xl mx-auto text-center mb-12 sm:mb-16 transition-all duration-700 ease-out motion-reduce:opacity-100 motion-reduce:transform-none motion-reduce:transition-none ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E9E3D9] text-[#B58A58] text-xs sm:text-[13px] font-semibold tracking-wider uppercase font-mono mb-3 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B58A58]" />
            <span>QUALITY & ACCOUNTABILITY</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#172B40] tracking-tight leading-tight sm:leading-tight">
            One Contractor. Every Trade. Complete Accountability.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#687381] leading-relaxed max-w-2xl mx-auto">
            One coordinated team managing electrical, carpentry, painting, and ceiling work from planning to completion.
          </p>
        </div>

        {/* 2. Two-Column Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* LEFT CARD — OUR APPROACH (Primary Emphasis) */}
          <div
            className={`h-full transition-all ease-out motion-reduce:opacity-100 motion-reduce:transform-none motion-reduce:transition-none ${
              isVisible
                ? "duration-700 opacity-100 translate-y-0 scale-100 delay-0"
                : "duration-300 opacity-0 translate-y-6 sm:translate-y-8 scale-[0.97] delay-0"
            }`}
          >
            <div className="group h-full flex flex-col justify-between bg-white rounded-[20px] p-7 sm:p-8 lg:p-9 border-2 border-[#B58A58]/70 shadow-md hover:shadow-xl transition-all duration-300 ease-out hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
              <div>
                {/* Header: Label & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5EFE6] border border-[#B58A58]/30 text-[#B58A58] text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B58A58]" />
                    OUR APPROACH
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#F5EFE6] border border-[#B58A58]/30 flex items-center justify-center text-[#B58A58] shrink-0">
                    <ShieldCheck className="w-5 h-5" strokeWidth={2} />
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#172B40] tracking-tight mb-2.5">
                  One Accountable Contractor
                </h3>
                <p className="text-[15px] sm:text-base text-[#687381] leading-relaxed mb-6 sm:mb-8">
                  Coordinated planning and direct supervision help every trade work in the right sequence.
                </p>

                {/* Benefit Items */}
                <div className="space-y-4 sm:space-y-5">
                  {ourApproachBenefits.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3.5">
                      <div className="w-6 h-6 rounded-full bg-[#21865B]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#21865B]">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-[14.5px] sm:text-[15px] font-bold text-[#172B40] leading-snug">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-[13px] sm:text-[13.5px] text-[#687381] leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Assurance Note */}
              <div className="mt-8 pt-6 border-t border-[#E9E3D9] text-xs font-semibold text-[#21865B] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Single-point responsibility from planning through handover</span>
              </div>
            </div>
          </div>

          {/* RIGHT CARD — FRAGMENTED CONTRACTING (Secondary Emphasis) */}
          <div
            className={`h-full transition-all ease-out motion-reduce:opacity-100 motion-reduce:transform-none motion-reduce:transition-none ${
              isVisible
                ? "duration-700 opacity-100 translate-y-0 scale-100 delay-[150ms]"
                : "duration-300 opacity-0 translate-y-6 sm:translate-y-8 scale-[0.97] delay-0"
            }`}
          >
            <div className="group h-full flex flex-col justify-between bg-[#F0EDE7] rounded-[20px] p-7 sm:p-8 lg:p-9 border border-[#E5E0D7] shadow-xs hover:shadow-md transition-all duration-300 ease-out hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
              <div>
                {/* Header: Label & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E9E3D9] text-[#687381] text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#687381]" />
                    COMMON CHALLENGES
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#E9E3D9] flex items-center justify-center text-[#687381] shrink-0">
                    <AlertCircle className="w-5 h-5" strokeWidth={2} />
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#172B40] tracking-tight mb-2.5">
                  Fragmented Independent Contractors
                </h3>
                <p className="text-[15px] sm:text-base text-[#687381] leading-relaxed mb-6 sm:mb-8">
                  When separate contractors work independently, coordination can become difficult.
                </p>

                {/* Challenge Items */}
                <div className="space-y-4 sm:space-y-5">
                  {fragmentedChallenges.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3.5">
                      <div className="w-6 h-6 rounded-full bg-[#B42318]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#B42318]">
                        <XCircle className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-[14.5px] sm:text-[15px] font-bold text-[#172B40] leading-snug">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-[13px] sm:text-[13.5px] text-[#687381] leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Assurance Note */}
              <div className="mt-8 pt-6 border-t border-[#E5E0D7] text-xs font-medium text-[#687381] flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-[#B42318]" />
                <span>Increased risk of timeline friction and trade overlaps</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Closing Takeaway & CTA */}
        <div
          className={`mt-12 sm:mt-16 pt-10 sm:pt-12 border-t border-[#E9E3D9] max-w-2xl mx-auto text-center transition-all duration-700 ease-out motion-reduce:opacity-100 motion-reduce:transform-none motion-reduce:transition-none ${
            isVisible
              ? "opacity-100 translate-y-0 delay-[300ms]"
              : "opacity-0 translate-y-6 delay-0"
          }`}
        >
          <h4 className="font-heading text-xl sm:text-2xl font-bold text-[#172B40] tracking-tight mb-2.5">
            One Point of Contact. One Coordinated Team.
          </h4>
          <p className="text-[15px] sm:text-base text-[#687381] leading-relaxed mb-6">
            Let&apos;s plan your electrical, carpentry, painting, and ceiling work with a coordinated approach.
          </p>
          <Button
            variant="primary"
            size="lg"
            href="/contact"
            rightIcon={<ArrowRight className="w-4 h-4" />}
            className="shadow-sm hover:shadow-md"
          >
            Request a Free Estimate
          </Button>
        </div>
      </Container>
    </section>
  );
}
