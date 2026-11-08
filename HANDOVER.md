# Handover & Maintenance Guide — Contractor Portfolio Website

Welcome to the **Shan Contracting & Interiors** website codebase. This guide details how to maintain, update, and deploy the portfolio website.

---

## 1. Architecture & Directory Overview

```text
website/
├── app/                          # Next.js 16 App Router Routes
│   ├── layout.tsx                # Global layout (Manrope/Inter fonts, Shell Header/Footer, Schema)
│   ├── globals.css               # Design system tokens (@theme in Tailwind v4)
│   ├── page.tsx                  # Homepage (9 integrated sections)
│   ├── sitemap.ts                # Dynamic sitemap (all 19 routes)
│   ├── robots.ts                 # Robots.txt directives
│   ├── not-found.tsx             # Custom branded 404 page
│   ├── services/                 # Services overview (/services)
│   │   ├── electrical/           # Electrical detail (/services/electrical)
│   │   ├── carpentry/            # Carpentry detail (/services/carpentry)
│   │   ├── painting/             # Painting detail (/services/painting)
│   │   └── ceiling/              # Ceiling detail (/services/ceiling)
│   ├── projects/                 # Portfolio gallery (/projects)
│   │   └── [slug]/               # Dynamic project detail (/projects/[slug])
│   ├── about/                    # About us & craftsmanship philosophy (/about)
│   └── contact/                  # Contact & quotation request (/contact)
├── components/
│   ├── ui/                       # Core primitives: Container, Button, SectionHeading, PageHero
│   ├── layout/                   # SiteHeader, MobileNavigation, SiteFooter
│   ├── services/                 # ServiceCard, ServiceDetailTemplate
│   ├── projects/                 # ProjectCard, CategoryFilter, MediaGallery, VideoCard, ProjectsGalleryView
│   └── forms/                    # EnquiryForm (with instant WhatsApp formatting)
├── data/                         # Single source of truth for site data
│   ├── siteConfig.ts             # Contact details, brand name, working hours, nav links
│   ├── services.ts               # The 4 core trades, subcategories, features, workflows
│   └── projects.ts               # Portfolio projects, images, descriptions, tags
├── lib/
│   └── whatsapp.ts               # URL-encoded context-aware WhatsApp link generators
├── public/                       # Static media assets
│   ├── images/                   # Real project photos, about graphics, logo
│   └── videos/                   # Authentic work video documentation
└── types/                        # TypeScript type definitions
```

---

## 2. How to Update Business & Contact Details

All business facts and contact channels are centralized in **[`data/siteConfig.ts`](file:///c:/Users/RAJAN%20JAISWAL/OneDrive/Desktop/Shan/website/data/siteConfig.ts)**:

```ts
export const contactConfig: SiteContactInfo = {
  businessName: "Shan Contracting & Interiors",
  tradingName: "Shan",
  phoneDisplay: "+91 98765 43210",               // Display phone
  phoneRaw: "+919876543210",                     // Raw international dialer format
  whatsappDisplay: "+91 98765 43210",            // Display WhatsApp
  whatsappRaw: "919876543210",                   // Digits only with country code (no + or spaces)
  email: "enquiries@shancontractor.com",
  serviceAreaSummary: "Residential & Commercial Projects across City Metro",
  workingHours: "Mon - Sat: 9:00 AM – 7:30 PM",
  verifiedStatus: {
    isPhoneVerified: true,                       // Set to true once verified
    isWhatsAppVerified: true,                    // Set to true once verified
    isAddressVerified: true,
  },
};
```
*Updating these values automatically updates the Site Header, Footer, Hero CTAs, Contact page cards, WhatsApp buttons, and schema metadata across the entire website.*

---

## 3. How to Add a New Portfolio Project

To publish a new completed job:

1. **Add authentic photos to `public/images/projects/`**:
   - Save your photos as `.jpg`, `.jpeg`, `.png`, or `.webp` inside `website/public/images/projects/` (e.g. `kitchen-modular-1.png`).
2. **Open [`data/projects.ts`](file:///c:/Users/RAJAN%20JAISWAL/OneDrive/Desktop/Shan/website/data/projects.ts)**:
   - Add a new project object to the `projectsData` array:

```ts
{
  id: "proj-carpentry-2",
  slug: "custom-acrylic-modular-kitchen",
  title: "Modern Acrylic Modular Kitchen & Breakfast Counter",
  category: "carpentry", // "electrical" | "carpentry" | "painting" | "ceiling"
  summary: "Bespoke modular kitchen installation with soft-close tandem drawers and acrylic finishes.",
  description: "Fabricated using 100% calibrated BWR marine plywood with high-gloss scratch-resistant acrylic shutters...",
  coverImage: "/images/projects/kitchen-modular-1.png",
  images: [
    "/images/projects/kitchen-modular-1.png",
    "/images/projects/kitchen-modular-2.png",
  ],
  featured: true,
  location: "Private Residence, India",
  completedAt: "Recent Handover",
  scopeHighlights: [
    "BWR termite-resistant marine plywood",
    "Soft-close tandem drawers & hydraulic hinges",
    "Quartz countertop integration",
  ],
}
```

3. **Save and build**:
   - The `/projects` gallery, category filter counts, dynamic `/projects/[slug]` detail page, sitemap (`/sitemap.xml`), and related project cards will automatically generate during the next build!

---

## 4. How to Update Services & Subcategories

To adjust service descriptions, subcategory disciplines, or workflows:
- Open **[`data/services.ts`](file:///c:/Users/RAJAN%20JAISWAL/OneDrive/Desktop/Shan/website/data/services.ts)**.
- Each service (`electrical`, `carpentry`, `painting`, `ceiling`) contains:
  - `headline`: Hero subtitle
  - `summary`: Short card summary
  - `subcategories`: Array of confirmed disciplines (e.g., `["Concealed Conduit", "Modular Switchboards"]`)
  - `features`: Quality benchmarks with checkmarks
  - `processSummary`: Step-by-step numbered execution workflow
  - `coverImage`: Path to authentic photo in `public/images/`

---

## 5. Design System Tokens & Maintenance

- **Colors & Tokens:** Managed in **[`app/globals.css`](file:///c:/Users/RAJAN%20JAISWAL/OneDrive/Desktop/Shan/website/app/globals.css)** under `@theme`:
  - Background: `#F7F5F0` (warm off-white)
  - Surface: `#FFFFFF` (clean white)
  - Primary / Navy: `#172B40` (high-contrast text & primary buttons)
  - Accent / Gold: `#B58A58` (warm gold highlights & focus rings)
  - Muted Slate: `#687381` (accessible supporting text)
  - Border: `#E5E0D7`
  - Success / WhatsApp: `#21865B`
- **Fonts:** Configured globally in **[`app/layout.tsx`](file:///c:/Users/RAJAN%20JAISWAL/OneDrive/Desktop/Shan/website/app/layout.tsx)** via `next/font/google`:
  - `Manrope` for headings and brand titles
  - `Inter` for body copy and UI labels

---

## 6. Deployment Guidelines

### Recommended: Deploy on Vercel
1. Push the code to a Git repository (GitHub / GitLab / Bitbucket).
2. Import the repository into the **Vercel Dashboard**.
3. Select the `website` root directory as the Project Root Directory (or set Root Directory to `website`).
4. Framework Preset: **Next.js**.
5. Configure Environment Variables in the Vercel Settings (see `.env.example`).
6. Click **Deploy**. Vercel will automatically build the static pages and provide a secure HTTPS preview URL.

### Build & Verification Commands
- `npm run lint` — ESLint validation
- `npx tsc --noEmit` — TypeScript type validation
- `npm run build` — Production build & static prerendering
- `npm run start` — Local production server preview

---

## 7. Known Limitations & Roadmap (Future Phase 2)

- **Testimonials:** Currently omitted to preserve content integrity; add genuine client quotes to `data/siteConfig.ts` once provided by the contractor.
- **Direct Mail API:** Form currently defaults to the instant WhatsApp forwarding pathway. To enable direct email dispatch, configure an email provider (such as Resend or SendGrid) in a Next.js server action.
- **Future Admin Dashboard (Phase 2):** When the contractor requests self-service updates via an admin UI, a PostgreSQL database, NextAuth authentication, and Cloudinary media uploads can be introduced as a separate project scope (as outlined in `AGENTS.md`).

