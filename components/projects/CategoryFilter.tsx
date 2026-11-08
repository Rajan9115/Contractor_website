"use client";

import React from "react";
import { ServiceCategory } from "@/types/project";

export type FilterCategory = "all" | ServiceCategory;

interface CategoryFilterProps {
  activeCategory: FilterCategory;
  onSelectCategory: (category: FilterCategory) => void;
  counts: Record<FilterCategory, number>;
}

const filterOptions: { id: FilterCategory; label: string }[] = [
  { id: "all", label: "All Works" },
  { id: "electrical", label: "Electrical" },
  { id: "carpentry", label: "Carpentry" },
  { id: "painting", label: "Painting" },
  { id: "ceiling", label: "Ceiling" },
];

export function CategoryFilter({
  activeCategory,
  onSelectCategory,
  counts,
}: CategoryFilterProps) {
  return (
    <div
      role="tablist"
      aria-label="Filter projects by category"
      className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-xl bg-white border border-[#E5E0D7] shadow-xs max-w-fit mx-auto"
    >
      {filterOptions.map((opt) => {
        const isActive = activeCategory === opt.id;
        const count = counts[opt.id] ?? 0;

        return (
          <button
            key={opt.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onSelectCategory(opt.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B58A58] motion-reduce:transition-none ${
              isActive
                ? "bg-[#172B40] text-white shadow-xs"
                : "text-[#687381] hover:text-[#172B40] hover:bg-[#F7F5F0]"
            }`}
          >
            <span>{opt.label}</span>
            <span
              className={`text-[11px] px-1.5 py-0.2 rounded-full font-mono ${
                isActive
                  ? "bg-white/20 text-white"
                  : "bg-[#E9E3D9] text-[#172B40]"
              }`}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}

