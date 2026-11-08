import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckCircle2, XCircle } from "lucide-react";

export function WhyChooseUs() {
  const ourAdvantages = [
    "Seamless trade coordination: conduits laid before ceilings are closed, carpentry planned before painting.",
    "Certified materials sourced directly: fire-resistant cabling, calibrated marine ply, and branded emulsions.",
    "Laser-level precision across all partitions, door frames, and cove light margins.",
    "Clean site handover protocol: protected tiles, masked fixtures, and post-work debris clearance.",
    "Direct phone & WhatsApp responsiveness with the person in charge on site.",
  ];

  const commonMarketRisks = [
    "Fragmented local labor blaming each other when wiring clashes with ceiling grids or wardrobes.",
    "Unannounced material switching and substandard counterfeit wire or low-density particle board.",
    "Out-of-plumb walls and uneven false ceiling joints showing hairline cracks after weeks.",
    "Unclean sites left with plaster residue, paint spatters, and damaged floor tiles.",
    "Disappearing workers and indefinite project handover delays.",
  ];

  return (
    <section className="bg-[#F7F5F0] py-16 sm:py-24 border-b border-[#E5E0D7]">
      <Container size="wide">
        <SectionHeading
          kicker="Quality & Accountability"
          title="Why Choose Single-Point Contracting Over Fragmented Labor"
          description="Coordinating four independent contractors creates delays and finger-pointing. We manage electrical, carpentry, painting, and ceiling works under one accountable supervision."
          align="center"
          className="mb-14 sm:mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Comparison Card: With Our Team */}
          <div className="lg:col-span-6 rounded-2xl bg-white p-7 sm:p-9 border-2 border-[#172B40] shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#172B40] text-white text-xs font-semibold uppercase tracking-wider mb-5">
                <span>With Our Supervised Contracting</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#172B40] tracking-tight mb-4">
                Disciplined Craftsmanship & Clear Sequencing
              </h3>
              <p className="text-sm text-[#687381] mb-6 leading-relaxed">
                Every trade is scheduled in the correct engineering sequence, ensuring electrical conduits, ceiling framing, and woodwork tolerances integrate flawlessly.
              </p>

              <ul className="space-y-3.5 text-sm text-[#172B40]">
                {ourAdvantages.map((adv, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#21865B] shrink-0 mt-0.5" />
                    <span className="leading-snug">{adv}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E5E0D7] text-xs text-[#21865B] font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Dedicated contractor presence on your job site</span>
            </div>
          </div>

          {/* Comparison Card: Fragmented Market Labor */}
          <div className="lg:col-span-6 rounded-2xl bg-white p-7 sm:p-9 border border-[#E5E0D7] shadow-xs flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E9E3D9] text-[#687381] text-xs font-semibold uppercase tracking-wider mb-5">
                <span>Uncoordinated Independent Labor</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#687381] tracking-tight mb-4">
                Misaligned Schedules & Zero Responsibility
              </h3>
              <p className="text-sm text-[#687381] mb-6 leading-relaxed">
                Hiring separate electricians, carpenters, and painters leaves you caught in the middle when measurements misalign or surfaces get damaged.
              </p>

              <ul className="space-y-3.5 text-sm text-[#687381]">
                {commonMarketRisks.map((risk, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-[#B42318] shrink-0 mt-0.5" />
                    <span className="leading-snug">{risk}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E5E0D7] text-xs text-[#B42318] font-medium flex items-center gap-2">
              <XCircle className="w-4 h-4" />
              <span>Frequent budget overruns due to rework and miscommunication</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
