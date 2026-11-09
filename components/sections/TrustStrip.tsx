"use client";

import React, { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Camera, HardHat, Layers, FileCheck } from "lucide-react";

export function TrustStrip() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    if (!currentRef) return;

    // Trigger entrance when ~20% enters viewport; reset when completely leaving viewport
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;

        if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
          setIsVisible(true);
        } else if (!entry.isIntersecting || entry.intersectionRatio === 0) {
          setIsVisible(false);
        }
      },
      {
        threshold: [0, 0.2], // Dual threshold prevents edge flickering and guarantees clean replay
      }
    );

    observer.observe(currentRef);

    return () => {
      observer.disconnect();
    };
  }, []);

  const trustPoints = [
    {
      label: "01 — OUR WORK",
      icon: Camera,
      title: "Authentic Portfolio",
      description: "Real project photographs and videos from completed sites.",
      // Card 1: Enter from LEFT (24px mobile, 40px desktop)
      initialTranslate: "-translate-x-6 sm:-translate-x-10",
      delayClass: "delay-0",
    },
    {
      label: "02 — ACCOUNTABILITY",
      icon: HardHat,
      title: "Direct Contractor Oversight",
      description: "Direct contractor involvement and site supervision.",
      // Card 2: Enter from RIGHT (24px mobile, 40px desktop)
      initialTranslate: "translate-x-6 sm:translate-x-10",
      delayClass: "delay-[150ms]",
    },
    {
      label: "03 — EXPERTISE",
      icon: Layers,
      title: "Four Coordinated Trades",
      description: "Electrical, carpentry, painting and ceiling services.",
      // Card 3: Enter from TOP (24px mobile, 40px desktop)
      initialTranslate: "-translate-y-6 sm:-translate-y-10",
      delayClass: "delay-[300ms]",
    },
    {
      label: "04 — TRANSPARENCY",
      icon: FileCheck,
      title: "Transparent Quotations",
      description: "Clear material and labour scope before work begins.",
      // Card 4: Enter from BOTTOM (24px mobile, 40px desktop)
      initialTranslate: "translate-y-6 sm:translate-y-10",
      delayClass: "delay-[450ms]",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-white border-b border-[#E9E3D9] py-8 sm:py-10 overflow-hidden"
    >
      <Container size="wide">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {trustPoints.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className={`h-full transition-all ease-out motion-reduce:opacity-100 motion-reduce:transform-none motion-reduce:transition-none ${
                  isVisible
                    ? `duration-700 opacity-100 translate-x-0 translate-y-0 scale-100 ${item.delayClass}`
                    : `duration-300 opacity-0 scale-[0.97] ${item.initialTranslate} delay-0`
                }`}
              >
                {/* Inner Interactive Card: Handles layout and hover interactions */}
                <div className="group h-full flex flex-col justify-between bg-[#F7F5F0] rounded-[16px] border border-[#E9E3D9] p-6 lg:p-7 transition-all duration-300 ease-out hover:-translate-y-[3px] hover:border-[#B58A58]/60 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:transform-none">
                  <div>
                    {/* Top Bar: Icon Container & Numbered Label */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-white border border-[#E9E3D9] flex items-center justify-center text-[#B58A58] shrink-0 transition-colors duration-300 group-hover:border-[#B58A58]/40">
                        <Icon
                          className="w-[22px] h-[22px] transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-3 motion-reduce:transform-none"
                          strokeWidth={1.75}
                        />
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider text-[#687381] uppercase font-mono">
                        {item.label}
                      </span>
                    </div>

                    {/* Heading */}
                    <h3 className="font-heading text-base font-bold text-[#172B40] tracking-tight mb-2">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#687381] leading-relaxed mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
