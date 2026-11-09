import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MapPin, Play, CheckCircle2 } from "lucide-react";
import { Project } from "@/types/project";

interface PortfolioProjectCardProps {
  project: Project;
  isFlagship?: boolean;
}

const categoryLabels: Record<string, string> = {
  carpentry: "Carpentry & Joinery",
  ceiling: "Architectural Ceiling",
  painting: "Painting & Finishes",
  electrical: "Electrical Engineering",
};

export function PortfolioProjectCard({
  project,
  isFlagship = false,
}: PortfolioProjectCardProps) {
  const projectUrl = `/projects/${project.slug}`;
  const categoryLabel = categoryLabels[project.category] || project.category;

  return (
    <div className="group flex flex-col h-full rounded-[20px] bg-white border border-[#E9E3D9] overflow-hidden shadow-xs hover:shadow-xl hover:border-[#B58A58]/60 transition-all duration-300 ease-out hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
      {/* 1. Large Project Photograph */}
      <Link
        href={projectUrl}
        className={`relative w-full ${
          isFlagship
            ? "h-[260px] sm:h-[300px] lg:h-[320px]"
            : "h-[210px] sm:h-[230px]"
        } overflow-hidden bg-[#E9E3D9] block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B58A58]`}
        tabIndex={-1}
        aria-hidden="true"
      >
        <Image
          src={project.coverImage}
          alt={`Authentic on-site photo: ${project.title}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 60vw, 50vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transform-none"
        />

        {/* Subtle Bottom Vignette for Image Depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2 pointer-events-none z-10">
          {project.videos && project.videos.length > 0 ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#172B40]/90 backdrop-blur-md text-white text-[11px] font-semibold border border-[#B58A58]/50 shadow-xs">
              <Play className="w-3 h-3 text-[#B58A58] fill-[#B58A58]" />
              <span>Site Footage</span>
            </span>
          ) : (
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#172B40] text-[11px] font-bold uppercase tracking-wider font-mono shadow-xs border border-white/40">
              {project.category}
            </span>
          )}

          {project.featured && (
            <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-[#172B40]/85 backdrop-blur-md text-[#E5A855] text-[10.5px] font-mono font-semibold tracking-wider border border-[#E5A855]/30 shadow-xs">
              VERIFIED SITE
            </span>
          )}
        </div>
      </Link>

      {/* 2. Structured Content Panel */}
      <div className="flex flex-1 flex-col p-6 sm:p-7 justify-between bg-white">
        <div className="flex flex-col">
          {/* Metadata Row: Category & Location */}
          <div className="flex items-center justify-between gap-2 text-xs font-mono mb-4 sm:mb-5">
            <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-wider text-[#B58A58]">
              {categoryLabel}
            </span>
            {project.location && (
              <span className="inline-flex items-center gap-1 text-[11px] sm:text-[12px] text-[#687381]">
                <MapPin className="w-3.5 h-3.5 text-[#B58A58] shrink-0" />
                <span className="truncate max-w-[150px]">{project.location}</span>
              </span>
            )}
          </div>

          {/* Project Highlights: Max 2 Compact Chips */}
          {project.scopeHighlights && project.scopeHighlights.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4 sm:mb-5">
              {project.scopeHighlights.slice(0, 2).map((h, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#F7F5F0] border border-[#E9E3D9] text-[#172B40] text-[12px] sm:text-[12.5px] font-medium leading-none"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B58A58] shrink-0" />
                  <span>{h}</span>
                </span>
              ))}
            </div>
          )}

          {/* Project Title */}
          <h3
            className={`font-heading ${
              isFlagship
                ? "text-xl sm:text-[23px] lg:text-[24px]"
                : "text-lg sm:text-xl"
            } font-bold text-[#172B40] tracking-tight leading-snug group-hover:text-[#B58A58] transition-colors duration-200`}
          >
            <Link
              href={projectUrl}
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B58A58] rounded"
            >
              {project.title}
            </Link>
          </h3>

          {/* Project Description */}
          <p className="mt-2.5 sm:mt-3 text-[15px] sm:text-[15.5px] text-[#687381] leading-relaxed line-clamp-2 sm:line-clamp-3">
            {project.summary}
          </p>
        </div>

        {/* Card Footer CTA */}
        <div className="mt-6 pt-4 border-t border-[#E9E3D9]">
          <Link
            href={projectUrl}
            className="group/cta flex items-center justify-between text-sm sm:text-[14.5px] font-semibold text-[#172B40] group-hover:text-[#B58A58] hover:text-[#B58A58] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B58A58] rounded py-0.5"
          >
            <span>Inspect On-Site Scope</span>
            <ArrowUpRight className="w-4 h-4 text-[#B58A58] transition-transform duration-300 ease-out group-hover/cta:translate-x-1 group-hover/cta:-translate-y-0.5 group-hover:translate-x-1 group-hover:-translate-y-0.5 motion-reduce:transform-none" />
          </Link>
        </div>
      </div>
    </div>
  );
}

