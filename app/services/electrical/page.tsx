import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailTemplate } from "@/components/services/ServiceDetailTemplate";
import { servicesData } from "@/data/services";
import { projectsData } from "@/data/projects";

export const metadata: Metadata = {
  title: "Electrical Installation & Concealed Wiring Services | Shan Contracting",
  description:
    "Expert concealed electrical installations, fire-retardant wiring, distribution boards, safety switches, and architectural lighting in India.",
};

export default function ElectricalServicePage() {
  const service = servicesData.find((s) => s.id === "electrical");

  if (!service) {
    notFound();
  }

  const relatedProjects = projectsData.filter((p) => p.category === "electrical");

  return (
    <ServiceDetailTemplate
      service={service}
      relatedProjects={relatedProjects}
    />
  );
}
