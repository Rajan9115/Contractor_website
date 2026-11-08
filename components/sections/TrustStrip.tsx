import React from "react";
import { Container } from "@/components/ui/Container";
import { Camera, HardHat, FileSpreadsheet, Sparkles } from "lucide-react";

export function TrustStrip() {
  const trustPoints = [
    {
      icon: Camera,
      title: "100% Authentic Portfolio",
      description: "Real photographs and videos taken directly at our completed project sites.",
    },
    {
      icon: HardHat,
      title: "Direct Contractor Oversight",
      description: "Hands-on supervision on every job site to maintain strict quality and safety.",
    },
    {
      icon: Sparkles,
      title: "Four Coordinated Trades",
      description: "Electrical, woodwork, ceilings, and paint aligned smoothly without subcontractor clash.",
    },
    {
      icon: FileSpreadsheet,
      title: "Transparent Quotations",
      description: "Detailed bill of materials and clear labor scope before any work begins.",
    },
  ];

  return (
    <div className="bg-white border-b border-[#E5E0D7] py-10 sm:py-12">
      <Container size="wide">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {trustPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#F7F5F0] border border-[#E5E0D7] text-[#B58A58]">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#172B40] tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-[#687381] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
