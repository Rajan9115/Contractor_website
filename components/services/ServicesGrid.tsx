"use client";

import React, { useEffect, useRef, useState } from "react";
import { ServiceCard } from "./ServiceCard";
import { ServiceDetail } from "@/types/service";

interface ServicesGridProps {
  services: ServiceDetail[];
}

const staggerDelays = [
  "delay-0",
  "delay-[150ms]",
  "delay-[300ms]",
  "delay-[450ms]",
];

export function ServicesGrid({ services }: ServicesGridProps) {
  const [isVisible, setIsVisible] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = gridRef.current;
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
        threshold: [0, 0.15], // Dual threshold prevents boundary flickering and ensures clean replay
      }
    );

    observer.observe(currentRef);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={gridRef}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
    >
      {services.map((service, index) => {
        const delayClass = staggerDelays[index % staggerDelays.length];
        return (
          <div
            key={service.id}
            className={`h-full transition-all ease-out motion-reduce:opacity-100 motion-reduce:transform-none motion-reduce:transition-none ${
              isVisible
                ? `duration-700 opacity-100 translate-y-0 scale-100 ${delayClass}`
                : "duration-300 opacity-0 translate-y-6 sm:translate-y-[45px] scale-[0.94] delay-0"
            }`}
          >
            <ServiceCard service={service} index={index} />
          </div>
        );
      })}
    </div>
  );
}

