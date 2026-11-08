import React from "react";

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  highlights: string[];
  isLast?: boolean;
}

export function ProcessStep({
  number,
  title,
  description,
  highlights,
  isLast = false,
}: ProcessStepProps) {
  return (
    <div className="relative flex flex-col p-6 sm:p-7 rounded-xl bg-white border border-[#E5E0D7] shadow-sm transition-all duration-200 hover:shadow-md">
      {/* Step Number Badge */}
      <div className="flex items-center justify-between mb-4">
        <span className="font-heading text-3xl font-black text-[#B58A58]/80">
          {number}
        </span>
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#687381] px-2 py-0.5 rounded bg-[#F7F5F0] border border-[#E5E0D7]">
          Step {parseInt(number, 10)}
        </span>
      </div>

      <h3 className="text-lg font-bold text-[#172B40] tracking-tight mb-2">
        {title}
      </h3>

      <p className="text-sm text-[#687381] leading-relaxed mb-4 flex-1">
        {description}
      </p>

      {/* Highlights */}
      <div className="pt-4 border-t border-[#E5E0D7] space-y-1.5 text-xs text-[#172B40]/90">
        {highlights.map((h, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B58A58] shrink-0" />
            <span>{h}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
