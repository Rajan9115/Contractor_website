import { ServiceCategory } from "./project";

export interface ServiceDetail {
  id: ServiceCategory;
  slug: string;
  title: string;
  shortTitle: string;
  headline: string;
  description: string;
  summary: string;
  subcategories: string[];
  features: string[];
  processSummary: string[];
  coverImage: string;
  iconName: "Zap" | "Hammer" | "Paintbrush" | "Layers";
}

