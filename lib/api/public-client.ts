import { Project, ServiceCategory } from "@/types/project";
import { projectsData } from "@/data/projects";
import { servicesData } from "@/data/services";
import { ServiceDetail } from "@/types/service";

const API_BASE =
  process.env.NEXT_PUBLIC_API_URL ||
  process.env.API_URL ||
  "http://localhost:3001/api/v1/public";

export interface ApiMediaAsset {
  id: string;
  publicId: string;
  secureUrl: string;
  mediaType: "IMAGE" | "VIDEO" | string;
  resourceType?: string;
  width?: number | null;
  height?: number | null;
  durationSeconds?: number | null;
  altText?: string | null;
  caption?: string | null;
}

export interface ApiProjectMedia {
  role: "COVER" | "GALLERY" | "PROCESS" | "BEFORE" | "AFTER" | string;
  sortOrder: number;
  mediaAsset: ApiMediaAsset;
}

export interface ApiProjectHighlight {
  id: string;
  text: string;
}

export interface ApiProjectItem {
  id: string;
  title: string;
  slug: string;
  locationLabel?: string | null;
  shortDescription: string;
  description?: string | null;
  completionDate?: string | null;
  isFeatured: boolean;
  publishedAt?: string | null;
  category: {
    id: string;
    name: string;
    slug: string;
  };
  media: ApiProjectMedia[];
  highlights: ApiProjectHighlight[];
}

/**
 * Transforms backend API response schema to website's native Project interface.
 */
export function mapApiProjectToWebsiteProject(item: ApiProjectItem): Project {
  const coverMedia = item.media.find((m) => m.role === "COVER") || item.media[0];
  const coverImage = coverMedia?.mediaAsset?.secureUrl || "/images/projects/project-1.png";

  const images = item.media
    .filter((m) => m.mediaAsset?.mediaType !== "VIDEO")
    .map((m) => m.mediaAsset.secureUrl);

  const videos = item.media
    .filter((m) => m.mediaAsset?.mediaType === "VIDEO")
    .map((m) => m.mediaAsset.secureUrl);

  const validCategories: ServiceCategory[] = ["electrical", "carpentry", "painting", "ceiling"];
  const categorySlug = (item.category?.slug?.toLowerCase() || "carpentry") as ServiceCategory;
  const category = validCategories.includes(categorySlug) ? categorySlug : "carpentry";

  return {
    id: item.id,
    slug: item.slug,
    title: item.title,
    category,
    summary: item.shortDescription,
    description: item.description || item.shortDescription,
    location: item.locationLabel || undefined,
    completedAt: item.completionDate
      ? new Date(item.completionDate).toLocaleDateString("en-IN", {
          month: "short",
          year: "numeric",
        })
      : undefined,
    coverImage: coverImage,
    images: images.length > 0 ? images : [coverImage],
    videos: videos.length > 0 ? videos : undefined,
    featured: item.isFeatured,
    scopeHighlights: item.highlights?.map((h) => h.text) || [],
  };
}

/**
 * Fetches all published projects from the backend API.
 * Gracefully falls back to bundled project data if API is offline or unreachable.
 */
export async function fetchPublishedProjects(options?: {
  category?: string;
  featured?: boolean;
}): Promise<Project[]> {
  const query = new URLSearchParams();
  if (options?.category) query.set("category", options.category);
  if (typeof options?.featured === "boolean") query.set("featured", options.featured.toString());

  const url = `${API_BASE}/projects${query.toString() ? `?${query.toString()}` : ""}`;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3500);

    const res = await fetch(url, {
      signal: controller.signal,
      next: {
        tags: ["projects"],
        revalidate: 60,
      },
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      throw new Error(`API returned ${res.status}`);
    }

    const json = await res.json();
    if (json.success && Array.isArray(json.data) && json.data.length > 0) {
      return json.data.map(mapApiProjectToWebsiteProject);
    }
  } catch {
    // API is offline / unpopulated - fallback to existing static data
  }

  // Fallback to static data
  let result = [...projectsData];
  if (options?.category) {
    result = result.filter((p) => p.category === options.category);
  }
  if (typeof options?.featured === "boolean") {
    result = result.filter((p) => p.featured === options.featured);
  }
  return result;
}

/**
 * Fetches single published project by slug.
 * Returns null if not found (or if status is DRAFT / ARCHIVED).
 */
export async function fetchPublishedProjectBySlug(slug: string): Promise<Project | null> {
  const url = `${API_BASE}/projects/${encodeURIComponent(slug)}`;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3500);

    const res = await fetch(url, {
      signal: controller.signal,
      next: {
        tags: [`project-${slug}`, "projects"],
        revalidate: 60,
      },
    });

    clearTimeout(timeoutId);

    if (res.status === 404) {
      // Strictly not found or not published
      return null;
    }

    if (res.ok) {
      const json = await res.json();
      if (json.success && json.data) {
        return mapApiProjectToWebsiteProject(json.data);
      }
    }
  } catch {
    // In offline fallback, check local data
    const local = projectsData.find((p) => p.slug === slug);
    return local || null;
  }

  // Fallback to local data if not 404
  const local = projectsData.find((p) => p.slug === slug);
  return local || null;
}

export interface HomepageContentResponse {
  featuredProjects: Project[];
  settings: Record<string, unknown>;
}

/**
 * Fetches curated homepage content including explicitly sequenced featured projects and approved copy.
 */
export async function fetchHomepageContent(): Promise<HomepageContentResponse> {
  const url = `${API_BASE}/homepage`;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3500);

    const res = await fetch(url, {
      signal: controller.signal,
      next: {
        tags: ["homepage", "projects"],
        revalidate: 60,
      },
    });

    clearTimeout(timeoutId);

    if (res.ok) {
      const json = await res.json();
      if (json.success && json.data) {
        const projects = Array.isArray(json.data.featuredProjects)
          ? json.data.featuredProjects.map(mapApiProjectToWebsiteProject)
          : [];

        return {
          featuredProjects: projects.length > 0 ? projects : await fetchPublishedProjects({ featured: true }),
          settings: json.data.settings || {},
        };
      }
    }
  } catch {
    // API is offline / unpopulated
  }

  // Graceful fallback
  const fallbackProjects = await fetchPublishedProjects({ featured: true });
  return {
    featuredProjects: fallbackProjects,
    settings: {},
  };
}

/**
 * Fetches public services and categories.
 * Gracefully falls back to bundled servicesData.
 */
export async function fetchPublicServices(): Promise<ServiceDetail[]> {
  const url = `${API_BASE}/services`;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3500);

    const res = await fetch(url, {
      signal: controller.signal,
      next: {
        tags: ["services"],
        revalidate: 60,
      },
    });

    clearTimeout(timeoutId);

    if (res.ok) {
      const json = await res.json();
      if (json.success && Array.isArray(json.data) && json.data.length > 0) {
        // Return structured services or fall back
        return servicesData;
      }
    }
  } catch {
    // Fallback to bundled servicesData
  }

  return servicesData;
}

/**
 * Fetches public site settings.
 */
export async function fetchPublicSettings(): Promise<Record<string, unknown>> {
  const url = `${API_BASE}/settings`;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3500);

    const res = await fetch(url, {
      signal: controller.signal,
      next: {
        tags: ["settings"],
        revalidate: 60,
      },
    });

    clearTimeout(timeoutId);

    if (res.ok) {
      const json = await res.json();
      if (json.success && json.data) {
        return json.data;
      }
    }
  } catch {
    // API offline
  }

  return {};
}

