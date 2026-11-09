import React from "react";
import { Container } from "@/components/ui/Container";
import { Camera, HardHat, Layers, FileCheck } from "lucide-react";

export function TrustStrip() {
  const trustPoints = [
    {
      label: "01 — OUR WORK",
      icon: Camera,
      title: "Authentic Portfolio",
      description: "Real project photographs and videos from completed sites.",
    },
    {
      label: "02 — ACCOUNTABILITY",
      icon: HardHat,
      title: "Direct Contractor Oversight",
      description: "Direct contractor involvement and site supervision.",
    },
    {
      label: "03 — EXPERTISE",
      icon: Layers,
      title: "Four Coordinated Trades",
      description: "Electrical, carpentry, painting and ceiling services.",
    },
    {
      label: "04 — TRANSPARENCY",
      icon: FileCheck,
      title: "Transparent Quotations",
      description: "Clear material and labour scope before work begins.",
    },
  ];

  return (
    <section className="bg-white border-b border-[#E9E3D9] py-8 sm:py-10">
      <Container size="wide">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {trustPoints.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="h-full flex flex-col justify-between bg-[#F7F5F0] rounded-[16px] border border-[#E9E3D9] p-6 lg:p-7 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-[#B58A58]/50 motion-reduce:transition-none motion-reduce:hover:transform-none"
              >
                <div>
                  {/* Top Bar: Icon Container & Numbered Label */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-white border border-[#E9E3D9] flex items-center justify-center text-[#B58A58] shrink-0">
                      <Icon className="w-[22px] h-[22px]" strokeWidth={1.75} />
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
            );
          })}
        </div>
      </Container>
    </section>
  );
}

