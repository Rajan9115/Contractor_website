import { NavItem, SiteContactInfo } from "@/types/navigation";

export const siteConfig = {
  name: "MAMA INTERIOR",
  shortName: "MAMA",
  tagline: "Electrical • Carpentry • Painting • Ceiling",
  description:
    "Premium contracting and interior finishing services in India. Specializing in high-grade Electrical, Carpentry, Painting, and Ceiling solutions.",
  url: "https://shancontractor.com",
};

/**
 * Single source of truth for business and contact facts.
 * As per AGENTS.md, unverified details are flagged and presented as placeholders.
 */
export const contactConfig: SiteContactInfo = {
  businessName: "MAMA INTERIOR",
  tradingName: "MAMA INTERIOR",
  tagline: "Electrical, Carpentry, Painting & False Ceiling Specialists",
  phoneDisplay: "+91 80818 70179",
  phoneRaw: "+918081870179",
  whatsappDisplay: "+91 80818 70179",
  whatsappRaw: "918081870179",
  email: "enquiries@shancontractor.com", // Placeholder
  addressSummary: "Workshop & Operations, India",
  serviceAreaSummary: "Residential & Commercial Projects across City Metro",
  workingHours: "Mon - Sat: 9:00 AM – 7:30 PM",
  verifiedStatus: {
    isPhoneVerified: true,
    isWhatsAppVerified: true,
    isAddressVerified: false,
  },
};

export const mainNavItems: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Services",
    href: "/services",
    children: [
      {
        title: "Electrical Works",
        href: "/services/electrical",
        description: "Concealed wiring, distribution boards, architectural lighting & fittings.",
      },
      {
        title: "Carpentry & Woodwork",
        href: "/services/carpentry",
        description: "Custom modular wardrobes, kitchen cabinetry, TV units & door work.",
      },
      {
        title: "Painting & Finishes",
        href: "/services/painting",
        description: "Interior/exterior premium coatings, royal textures & waterproofing.",
      },
      {
        title: "Ceiling Solutions",
        href: "/services/ceiling",
        description: "Designer gypsum, POP, cove lighting & acoustic false ceiling layouts.",
      },
    ],
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export const footerServices: NavItem[] = [
  { title: "Electrical Work", href: "/services/electrical" },
  { title: "Carpentry & Joinery", href: "/services/carpentry" },
  { title: "Painting & Finishes", href: "/services/painting" },
  { title: "False Ceiling & POP", href: "/services/ceiling" },
];

export const footerCompany: NavItem[] = [
  { title: "About Our Work", href: "/about" },
  { title: "Completed Projects", href: "/projects" },
  { title: "Request an Estimate", href: "/contact" },
  { title: "Verified Services", href: "/services" },
];

