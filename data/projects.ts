import { Project } from "@/types/project";

export const projectsData: Project[] = [
  {
    id: "proj-carpentry-1",
    slug: "master-wardrobe-modular-cabinetry",
    title: "Master Bedroom Full-Height Wardrobe & Storage",
    category: "carpentry",
    summary:
      "Bespoke floor-to-ceiling modular wardrobe installation with soft-close hardware, interior drawer organizers, and durable laminate finish.",
    description:
      "Complete custom wardrobe fabrication executed using calibrated marine plywood. Featured precision edge-banding, concealed soft-close telescopic channels, and customized hanging sections tailored to client requirements.",
    coverImage: "/images/projects/project-1.png",
    images: ["/images/projects/project-1.png"],
    featured: true,
    location: "Residential Apartment, India",
    completedAt: "Recent Handover",
    scopeHighlights: [
      "Calibrated termite-resistant plywood structure",
      "Soft-close tandem drawers & hydraulic hinges",
      "Floor-to-ceiling space optimization",
      "Scratch-resistant matte laminate surface",
    ],
  },
  {
    id: "proj-ceiling-1",
    slug: "designer-gypsum-cove-ceiling",
    title: "Living Room Architectural False Ceiling & Cove Lighting",
    category: "ceiling",
    summary:
      "Contemporary gypsum false ceiling featuring multi-tier drop design, perimeter warm-white LED cove light troughs, and flush spotlight cutouts.",
    description:
      "Installed heavy-duty galvanized iron (GI) framing grid leveled with laser accuracy. Plastered with paper tape and jointing compound to deliver a monolithic, crack-free false ceiling with integrated indirect illumination.",
    coverImage: "/images/projects/project-3.png",
    images: ["/images/projects/project-3.png"],
    featured: true,
    location: "Private Residence, India",
    completedAt: "Recent Handover",
    scopeHighlights: [
      "GI perimeter framework with anti-sag suspensions",
      "Warm ambient indirect cove light channel",
      "Laser-aligned recessed spotlight cutouts",
      "Seamless paper-taped joint compound finish",
    ],
  },
  {
    id: "proj-painting-1",
    slug: "interior-royal-luxury-finish",
    title: "Smooth Interior Wall Emulsion & Texture Finish",
    category: "painting",
    summary:
      "Comprehensive surface preparation, dual-coat acrylic putty leveling, and premium washable luxury emulsion finish.",
    description:
      "Restored uneven wall plaster with thorough surface scraping, deep crack filling, and machine sanding. Coated with alkali-resistant primer and multiple topcoats of premium washable emulsion for a rich, uniform sheen.",
    coverImage: "/images/projects/project-2.png",
    images: ["/images/projects/project-2.png"],
    featured: true,
    location: "Contemporary Home, India",
    completedAt: "Recent Handover",
    scopeHighlights: [
      "Dust-controlled machine sanding for ultra-smooth plaster",
      "Dual-coat fine acrylic wall putty base",
      "Low-odor, high-durability luxury emulsion",
      "Full furniture masking and clean floor protection",
    ],
  },
  {
    id: "proj-electrical-1",
    slug: "concealed-conduit-phase-wiring",
    title: "Concealed Electrical Rewiring & Modular Board Fitting",
    category: "electrical",
    summary:
      "Complete residential concealed electrical installation, load-balanced circuit breakers, and modular switchboard integration.",
    description:
      "Re-engineered home electrical circuitry with fire-retardant copper conduits, properly grounded copper earthing, dedicated heavy-appliance lines for ACs and geysers, and aesthetic modular faceplates.",
    coverImage: "/images/projects/project-electrical.jpeg",
    images: ["/images/projects/project-electrical.jpeg"],
    featured: true,
    location: "Renovation Site, India",
    completedAt: "Recent Handover",
    scopeHighlights: [
      "Concealed fire-retardant PVC conduits inside masonry walls",
      "Branded copper multistrand wiring with proper color-coding",
      "Distribution board with dedicated MCB/RCCB breakers",
      "Modular flush switchboards with surge safety",
    ],
  },
];
