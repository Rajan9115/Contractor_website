import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailTemplate } from "@/components/services/ServiceDetailTemplate";
import { servicesData } from "@/data/services";
import { projectsData } from "@/data/projects";

export const metadata: Metadata = {
  title: "False Ceiling & POP Solutions | Gypsum & Cove Lighting | Shan Contracting",
  description:
    "Contemporary false ceiling designs, seamless gypsum board installations, Plaster of Paris (POP) cornices, and indirect LED cove lighting layouts in India.",
};

export default function CeilingServicePage() {
  const service = servicesData.find((s) => s.id === "ceiling");

  if (!service) {
    notFound();
  }

  const relatedProjects = projectsData.filter((p) => p.category === "ceiling");

  return (
    <ServiceDetailTemplate
      service={service}
      relatedProjects={relatedProjects}
    />
  );
}

