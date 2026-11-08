"use client";

import React, { useState, useMemo } from "react";
import { Project } from "@/types/project";
import { CategoryFilter, FilterCategory } from "./CategoryFilter";
import { ProjectCard } from "./ProjectCard";

interface ProjectsGalleryViewProps {
  initialProjects: Project[];
}

export function ProjectsGalleryView({
  initialProjects,
}: ProjectsGalleryViewProps) {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("all");

  const counts: Record<FilterCategory, number> = useMemo(() => {
    const map: Record<FilterCategory, number> = {
      all: initialProjects.length,
      electrical: 0,
      carpentry: 0,
      painting: 0,
      ceiling: 0,
    };

    initialProjects.forEach((p) => {
      if (map[p.category] !== undefined) {
        map[p.category]++;
      }
    });

    return map;
  }, [initialProjects]);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return initialProjects;
    return initialProjects.filter((p) => p.category === activeCategory);
  }, [activeCategory, initialProjects]);

  return (
    <div className="space-y-10 sm:space-y-12">
      {/* Category Filter Controls */}
      <CategoryFilter
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        counts={counts}
      />

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-16 p-8 rounded-xl bg-white border border-[#E5E0D7] max-w-md mx-auto">
          <p className="text-sm font-semibold text-[#172B40]">
            No projects in this category currently published.
          </p>
          <p className="text-xs text-[#687381] mt-1">
            Check other trade filters or request on-site references directly.
          </p>
        </div>
      )}
    </div>
  );
}
