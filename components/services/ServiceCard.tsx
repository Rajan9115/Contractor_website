"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Zap, Hammer, Paintbrush, Layers } from "lucide-react";
import { ServiceDetail } from "@/types/service";
import { servicesData } from "@/data/services";

interface ServiceCardProps {
  service: ServiceDetail;
  index?: number;
}

const iconMap = {
  Zap: Zap,
  Hammer: Hammer,
  Paintbrush: Paintbrush,
  Layers: Layers,
};

export function ServiceCard({ service, index }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const IconComponent = iconMap[service.iconName] || Zap;

  // Determine index (01 / 04, 02 / 04, etc.)
  const serviceIndex =
    typeof index === "number"
      ? index
      : servicesData.findIndex((s) => s.id === service.id);
  const displayIndex = `${String(Math.max(0, serviceIndex) + 1).padStart(2, "0")} / 04`;

  const serviceUrl = `/services/${service.slug}`;
  const specialtiesList = service.specialties || service.subcategories;
  const visibleSpecialties = isExpanded
    ? specialtiesList
    : specialtiesList.slice(0, 3);
  const remainingCount = specialtiesList.length - 3;

  return (
    <div className="group flex flex-col h-full rounded-[20px] bg-white border border-[#E9E3D9] overflow-hidden transition-all duration-300 ease-out hover:-translate-y-[3px] hover:border-[#B58A58]/50 shadow-xs hover:shadow-md motion-reduce:transition-none motion-reduce:hover:transform-none">
      {/* 1. Project Image (Consistent 210–230px Desktop Height) */}
      <Link
        href={serviceUrl}
        className="relative h-[215px] sm:h-[220px] lg:h-[242px] w-full shrink-0 overflow-hidden bg-[#E9E3D9] block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B58A58]"
        tabIndex={-1}
        aria-hidden="true"
      >
        <Image
          src={service.coverImage}
          alt={`Contractor work for ${service.title}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.035] motion-reduce:transform-none"
        />

        {/* Subtle Bottom Gradient Overlay for Visual Depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#172B40]/75 via-[#172B40]/20 to-transparent pointer-events-none" />

        {/* Top-Left Category Badge */}
        <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-[#172B40] text-xs font-semibold shadow-xs pointer-events-none">
          <IconComponent className="w-3.5 h-3.5 text-[#B58A58]" />
          <span>{service.shortTitle}</span>
        </div>

        {/* Top-Right Service Index Indicator */}
        <div className="absolute top-3.5 right-3.5 px-2.5 py-1 rounded-full bg-black/45 backdrop-blur-md text-white/95 text-[11px] font-mono font-medium tracking-wider border border-white/20 shadow-xs pointer-events-none">
          {displayIndex}
        </div>
      </Link>

      {/* 2. Card Content (Visual Hierarchy & Equal Spacing) */}
      <div className="flex flex-1 flex-col p-4 justify-between">
        <div className="flex flex-col">
          {/* Service Title */}
          <h3 className="font-heading text-[21px] sm:text-[22px] font-bold text-[#172B40] tracking-tight leading-snug group-hover:text-[#B58A58] transition-colors duration-200">
            <Link
              href={serviceUrl}
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B58A58] rounded"
            >
              {service.title}
            </Link>
          </h3>

          {/* Short Description (2–3 Lines with Consistent Baseline Height) */}
          {/* <p className="mt-2 text-[15px] text-[#687381] leading-relaxed line-clamp-3 min-h-[4rem] sm:min-h-[4.25rem]">
            {service.summary}
          </p> */}

          {/* Specialties Section with Divider */}
          <div className="mt-2 pt-4 border-t border-[#E9E3D9]">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-[#B58A58] mb-2.5 font-mono">
              SPECIALTIES
            </p>
            <div className="flex flex-wrap gap-1.5 items-center">
              {visibleSpecialties.map((item, i) => (
                <span
                  key={i}
                  className="inline-block px-2.5 py-1 text-[12px] rounded-md bg-[#F7F5F0] text-[#172B40] font-medium border border-[#E9E3D9]"
                >
                  {item}
                </span>
              ))}

              {/* Subtle Expandable Link */}
              {remainingCount > 0 && (
                <button
                  type="button"
                  onClick={() => setIsExpanded((prev) => !prev)}
                  aria-expanded={isExpanded}
                  aria-label={
                    isExpanded
                      ? `Show fewer specialties for ${service.title}`
                      : `Show ${remainingCount} more specialties for ${service.title}`
                  }
                  className="inline-flex items-center text-xs font-semibold text-[#B58A58] hover:text-[#9E7444] transition-colors duration-150 py-0.5 px-1 ml-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B58A58] rounded hover:underline underline-offset-2"
                >
                  {isExpanded ? "Show less" : `+${remainingCount} more`}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* 3. Card Footer with Aligned CTA */}
        <div className="mt-4 pt-4 border-t border-[#E9E3D9]">
          <Link
            href={serviceUrl}
            className="group/cta flex items-center justify-between text-sm font-semibold text-[#172B40] group-hover:text-[#B58A58] hover:text-[#B58A58] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B58A58] rounded py-0.5"
          >
            <span>Explore Service</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-0.5 group-hover/cta:translate-x-1 group-hover/cta:-translate-y-0.5 motion-reduce:transform-none text-[#B58A58]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
