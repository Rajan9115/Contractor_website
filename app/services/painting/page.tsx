import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailTemplate } from "@/components/services/ServiceDetailTemplate";
import { servicesData } from "@/data/services";
import { projectsData } from "@/data/projects";

export const metadata: Metadata = {
  title: "Interior & Exterior Painting & Surface Finishes | Shan Contracting",
  description:
    "Professional surface preparation, dual-coat acrylic wall putty, luxury interior emulsions, texture coatings, and wood polish in India.",
};

export default function PaintingServicePage() {
  const service = servicesData.find((s) => s.id === "painting");

  if (!service) {
    notFound();
  }

  const relatedProjects = projectsData.filter((p) => p.category === "painting");

  return (
    <ServiceDetailTemplate
      service={service}
      relatedProjects={relatedProjects}
    />
  );
}

