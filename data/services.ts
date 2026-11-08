import { ServiceDetail } from "@/types/service";

export const servicesData: ServiceDetail[] = [
  {
    id: "electrical",
    slug: "electrical",
    title: "Electrical Installation & Wiring",
    shortTitle: "Electrical",
    headline: "Safe, precision electrical engineering and architectural illumination",
    summary:
      "Complete residential and commercial electrification, including concealed conduits, distribution board balancing, safety breakers, and designer light fixture installations.",
    description:
      "Reliable electrical infrastructure is the backbone of any modern space. We handle end-to-end concealed wiring, modular switchboard placement, high-load appliance circuits, and ambient architectural lighting with strict safety compliance.",
    subcategories: [
      "Concealed Conduit & House Wiring",
      "Modular Switchboards & Phase Distribution",
      "Architectural & Cove Light Fixtures",
      "Distribution Boards & Circuit Breakers (MCB/RCCB)",
      "Appliance Load Provisioning & Earthing",
      "Renovation & Diagnostic Rewiring",
    ],
    features: [
      "Rigorous phase balancing & safety insulation testing",
      "Neat concealed routing without unneeded surface damage",
      "High-grade branded copper cabling & fire-retardant accessories",
      "Direct master-electrician supervision on site",
    ],
    processSummary: [
      "Load calculation and conduit route blueprinting",
      "Wall chiseling, pipe laying & concealed metal box fixation",
      "Cable pulling, testing & switchboard mounting",
      "Final luminaire installation, load testing & handover",
    ],
    coverImage: "/images/electrical/house-wiring.png",
    iconName: "Zap",
  },
  {
    id: "carpentry",
    slug: "carpentry",
    title: "Carpentry & Custom Woodwork",
    shortTitle: "Carpentry",
    headline: "Bespoke modular cabinetry, elegant wardrobes & architectural woodwork",
    summary:
      "Made-to-measure storage solutions, modern modular kitchens, custom wardrobes, TV console units, and durable solid-wood doors engineered for everyday longevity.",
    description:
      "Crafted with precision joinery and high-grade ply, our carpentry services turn open walls into functional, aesthetic storage. Every hinge, channel, and veneer finish is fitted with cabinet-maker accuracy.",
    subcategories: [
      "Floor-to-Ceiling Built-in Wardrobes",
      "Modular Kitchen Cabinetry & Drawers",
      "Floating TV Entertainment Units",
      "Main Entry & Internal Flush Doors",
      "Custom Study Desks & Storage Partitions",
      "Laminate, Acrylic & Veneer Application",
    ],
    features: [
      "BWP / BWR termite-resistant calibrated marine plywood",
      "Soft-close premium hardware & telescopic runners",
      "Laser-straight edge-banding and seamless alignment",
      "Tailored internal organizers & hidden compartments",
    ],
    processSummary: [
      "Laser measurement & functional layout agreement",
      "Material selection (plywood grade, laminate/veneer)",
      "Carcass fabrication, edge-banding & modular assembly",
      "Hardware fitting, alignment calibration & final polishing",
    ],
    coverImage: "/images/carpentry/luxury-kitchen.jpg",
    iconName: "Hammer",
  },
  {
    id: "painting",
    slug: "painting",
    title: "Painting & Surface Finishes",
    shortTitle: "Painting",
    headline: "Flawless wall preparation, luxury textures & exterior protection",
    summary:
      "Ultra-smooth interior wall finishes, designer accent textures, anti-fungal waterproofing basecoats, and rich wood polish applied with expert technique.",
    description:
      "A lasting paint finish relies 80% on preparation. We ensure walls are sanded true, cracks sealed, and high-quality primers applied before applying premium emulsion or texture coats.",
    subcategories: [
      "Interior Luxury Emulsion & Royal Finishes",
      "Exterior Weather-Shield & Water-Repellent Paints",
      "Designer Accent Wall Textures",
      "Multi-Coat Acrylic Wall Putty & Sanding",
      "PU & Melamine Polish for Woodwork",
      "Damp-Proofing & Base Waterproofing",
    ],
    features: [
      "Dust-controlled machine sanding for glass-smooth bases",
      "Premium zero-VOC / low-odor emulsions",
      "Systematic 2-coat putty, primer, and double-topcoat process",
      "Careful floor masking and furniture preservation during work",
    ],
    processSummary: [
      "Surface moisture check, scraping & crack treatment",
      "Dual-coat fine putty application and sanding",
      "Alkali-resistant primer application",
      "Precision double-finish topcoats & spotless site clean-up",
    ],
    coverImage: "/images/painting/painting-1.jpg",
    iconName: "Paintbrush",
  },
  {
    id: "ceiling",
    slug: "ceiling",
    title: "False Ceiling & POP Solutions",
    shortTitle: "Ceiling",
    headline: "Aesthetic gypsum false ceilings, perimeter coves & acoustic layouts",
    summary:
      "Contemporary false ceiling designs featuring seamless gypsum boards, Plaster of Paris (POP) details, perimeter cove lighting, and acoustic insulation.",
    description:
      "Transform the ambiance and temperature of your interiors with modern false ceilings. We design and install durable metal frame grids, concealed light troughs, and clean peripheral drop ceilings.",
    subcategories: [
      "Standard Gypsum Board False Ceilings",
      "POP Designer Molding & Cornices",
      "Perimeter Cove & Indirect LED Profiles",
      "Multi-Tier & Floating Island Ceilings",
      "Acoustic & Thermal Ceiling Insulation",
      "Grid Ceilings for Commercial Offices",
    ],
    features: [
      "Heavy-gauge GI framework with anti-sag suspensions",
      "Seamless paper-taped jointing preventing hairline cracks",
      "Integrated cutouts for downlights, chandeliers & AC vents",
      "Perfect laser-level horizontal alignment",
    ],
    processSummary: [
      "Laser level marking & ceiling height optimization",
      "Galvanized iron (GI) perimeter and main channel grid mounting",
      "Board screwing, joint taping & POP finishing",
      "Spotlight cutouts, cove LED channel placement & painting",
    ],
    coverImage: "/images/ceiling/ceiling-1.jpg",
    iconName: "Layers",
  },
];
