import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, CheckCircle2 } from "lucide-react";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

const categoryLabels: Record<Project["category"], string> = {
  electrical: "Electrical",
  carpentry: "Carpentry",
  painting: "Painting",
  ceiling: "Ceiling",
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group flex flex-col rounded-xl bg-white border border-[#E5E0D7] overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-[#B58A58]/50 motion-reduce:transition-none">
      {/* Cover Image Container */}
      <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#E9E3D9]">
        <Image
          src={project.coverImage}
          alt={`Real project photo: ${project.title}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transform-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#172B40]/60 via-transparent to-transparent opacity-50" />

        {/* Category Pill */}
        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#172B40]/90 backdrop-blur-sm text-white text-xs font-medium tracking-wide">
          {categoryLabels[project.category]}
        </div>

        {/* Location tag if available */}
        {project.location && (
          <div className="absolute bottom-3 left-4 flex items-center gap-1 text-[11px] text-white/90 font-medium drop-shadow">
            <MapPin className="w-3.5 h-3.5 text-[#B58A58]" />
            <span>{project.location}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold text-[#172B40] tracking-tight group-hover:text-[#B58A58] transition-colors leading-snug">
          <Link href={`/projects/${project.slug}`} className="focus-visible:outline-none focus-visible:underline">
            {project.title}
          </Link>
        </h3>

        <p className="mt-2.5 text-sm text-[#687381] leading-relaxed line-clamp-2">
          {project.summary}
        </p>

        {/* Key Scope Highlights */}
        {project.scopeHighlights && project.scopeHighlights.length > 0 && (
          <ul className="mt-4 pt-4 border-t border-[#E5E0D7] space-y-1.5 text-xs text-[#172B40]">
            {project.scopeHighlights.slice(0, 2).map((h, i) => (
              <li key={i} className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#21865B] shrink-0" />
                <span className="line-clamp-1">{h}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Action Link */}
        <div className="mt-5 pt-3 flex items-center justify-between text-xs font-semibold text-[#172B40] group-hover:text-[#B58A58]">
          <span>Inspect Project Scope</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transform-none" />
        </div>
      </div>
    </div>
  );
}

