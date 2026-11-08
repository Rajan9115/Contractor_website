export type ServiceCategory =
  | "electrical"
  | "carpentry"
  | "painting"
  | "ceiling";

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: ServiceCategory;
  summary: string;
  description: string;
  location?: string;
  completedAt?: string;
  coverImage: string;
  images: string[];
  videos?: string[];
  featured: boolean;
  scopeHighlights?: string[];
}
