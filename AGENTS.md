# AGENTS.md — Contractor Portfolio Website

## Mission
Build a premium, responsive, SEO-ready portfolio and lead-generation website for an individual contractor in India offering Electrical, Carpentry, Painting, and Ceiling services. The contractor has real project photos and videos. The site must build trust, showcase authentic work, explain services, and convert visitors into enquiries.

## Mandatory workflow
1. Read `AGENTS.md` and `IMPLEMENTATION_PLAN.md` before work.
2. Inspect the repository, package manager, framework, routes, scripts, assets, current design system, and `git status`.
3. Preserve existing user changes. Never overwrite unrelated work.
4. Work only on the phase explicitly requested. Do not implement all phases at once.
5. Before each phase, state goal, findings, planned files/components, risks, and acceptance criteria.
6. After each phase, run relevant lint/type-check/tests/build, report actual results, list files changed and known gaps, then wait for approval.
7. Do not deploy, buy services, change DNS, or incur costs without explicit approval.

## Product scope
Phase 1 public website:
- `/` homepage
- `/services` overview
- `/services/electrical`
- `/services/carpentry`
- `/services/painting`
- `/services/ceiling`
- `/projects` gallery
- `/projects/[slug]` project details
- `/about`
- `/contact`

Phase 2, only when separately approved: secure admin dashboard, authentication, project CRUD, media uploads, categories, testimonials, and enquiry management. Do not build backend/admin in Phase 1.

## Design system: single source of truth
All fonts, colors, spacing, radii, shadows, breakpoints, and motion values must be centrally managed. Never invent page-specific styling systems.

Proposed palette (preserve an already-approved repository palette if one exists):
- Background `#F7F5F0`
- Surface `#FFFFFF`
- Muted surface `#E9E3D9`
- Main text / deep navy `#172B40`
- Muted text `#687381`
- Primary `#172B40`
- Accent / warm gold `#B58A58`
- Border `#E5E0D7`
- Success `#21865B`
- Error `#B42318`

Typography:
- Headings/UI: Manrope
- Body: Inter
- Load fonts once globally (prefer `next/font` in Next.js).
- Define font variables and a documented type scale centrally.
- Never import fonts separately inside pages/components.
- Do not mix arbitrary font families or weights.

Centralize semantic tokens for colors, typography, spacing, containers, breakpoints, radii, shadows, motion, and z-index. Use tokens rather than repeated raw hex values.

Visual direction:
- Premium interior-design editorial aesthetic.
- Warm off-white surfaces, deep navy typography, restrained gold accents.
- Large authentic project photography, generous whitespace, clear hierarchy.
- Consistent card styles, image ratios, buttons, and section spacing.
- Minimal shadows and subtle transitions.
- Avoid clutter, generic template appearance, excessive gradients, glassmorphism, heavy parallax, and unnecessary animation.

## Responsive and accessibility standards
Test at 320–375px, 390–430px, 768px, 1024–1280px, and 1440px+.
- No horizontal overflow.
- Touch-friendly navigation and controls.
- Clear focus states and keyboard-operable controls.
- Semantic HTML and accessible form labels/errors.
- Adequate contrast; do not rely on color alone.
- Respect reduced-motion preferences.
- Galleries/lightboxes must be keyboard accessible.
- Mobile sticky actions must not obscure content.

## Reusable component architecture
Reuse existing components before creating new ones. Likely shared components:
`SiteHeader`, `MobileNavigation`, `SiteFooter`, `Container`, `SectionHeading`, `PrimaryButton`, `SecondaryButton`, `WhatsAppButton`, `CallButton`, `PageHero`, `Breadcrumbs`, `ServiceCard`, `ProjectCard`, `ProjectGrid`, `CategoryFilter`, `MediaGallery`, `VideoCard`, `BeforeAfterSlider`, `TestimonialCard`, `ProcessStep`, `EnquiryForm`.

Do not create needless wrappers. Keep content/data separate from presentation. Prefer server components; use client components only for real interactivity. Avoid new dependencies unless justified.

## Content integrity
Never invent contractor name, phone number, address, service areas, years of experience, project counts, prices, testimonials, certifications, warranties, safety claims, or guarantees.
- Use only facts supplied or approved by the contractor.
- Mark missing information as a placeholder and report it.
- Never present stock imagery as the contractor's real work.
- Use authentic supplied/approved photos and videos.
- Confirm each service subcategory before publishing it.
- Do not expose private customer addresses or personal information without permission.
- Use meaningful alt text describing actual media.

Suggested subcategories, subject to confirmation:
- Electrical: house wiring, concealed wiring, switchboards, lighting, electrical fittings, distribution boards.
- Carpentry: wardrobes, modular kitchens, TV units, doors, storage, custom furniture.
- Painting: interior, exterior, texture, decorative finishes, wood polish, waterproofing.
- Ceiling: POP, gypsum, simple, multi-level, cove lighting, decorative designs.

## Project data
Use typed data modules and stable slugs/IDs. Suggested model:
```ts
export type ServiceCategory = "electrical" | "carpentry" | "painting" | "ceiling";

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
}
```

## Lead generation
- WhatsApp links must use the contractor's verified international-format number.
- Prefilled messages should be URL-encoded and include selected service/project context.
- Provide click-to-call where a verified number exists.
- Contact form may include name, phone, service, location, description, and optional reference image.
- Validate input and provide loading/success/error states.
- Do not claim an enquiry was delivered unless delivery actually succeeded.
- If no email/API provider is configured, use WhatsApp as the working primary path and clearly report form integration as pending.
- Secure uploads with file type/size restrictions and server-side authorization if implemented.

## SEO and performance
- Unique title/description per route, semantic heading hierarchy, descriptive alt text, Open Graph, sitemap, robots.txt, canonical URLs when domain is known.
- LocalBusiness structured data only with verified details; never fabricate address, hours, rating, price range, or service area.
- Use framework image optimization, appropriate WebP/AVIF, dimensions/aspect ratios, lazy loading below fold, video poster images, and no autoplay with sound.
- Avoid unnecessary client JavaScript and dependencies.
- Never commit secrets or expose server credentials to client bundles.

## Definition of done for every phase
1. Only requested phase implemented.
2. Shared tokens and components reused.
3. No font/color drift between pages.
4. Desktop/tablet/mobile checked.
5. Keyboard/accessibility basics checked.
6. No broken links or missing assets.
7. Relevant lint/type-check/test/build commands actually run.
8. New errors fixed; pre-existing errors identified separately.
9. Changed files and reusable components listed.
10. Placeholders, limitations, and remaining content needs disclosed.
11. Wait for user approval before next phase.

## Explicit prohibitions
- Do not implement all phases in one batch.
- Do not redesign approved pages without permission.
- Do not duplicate tokens or components.
- Do not fabricate business claims or testimonials.
- Do not use stock images as real portfolio evidence.
- Do not build admin/backend during Phase 1.
- Do not silently change framework, package manager, or architecture.
- Do not deploy or incur costs without approval.
"""

plan = """# Contractor Portfolio Website — Phased Implementation Plan

## Objective
Build a premium, responsive portfolio and lead-generation website for an individual contractor in India offering Electrical, Carpentry, Painting, and Ceiling services. Real project photos and videos are available. The website should establish trust, explain services, showcase completed work, and convert visitors into enquiries through WhatsApp, phone, and a contact form.

**Execution rule:** One phase at a time. Review and approve each phase before starting the next. Give Antigravity only the prompt for the current phase.

## Sitemap
- `/` — Homepage
- `/services` — Services overview
- `/services/electrical`
- `/services/carpentry`
- `/services/painting`
- `/services/ceiling`
- `/projects` — Portfolio gallery
- `/projects/[slug]` — Project details
- `/about`
- `/contact`

Use category sections and filters for subcategories initially. Create separate subcategory URLs only when there is sufficient content and SEO value.

## Design direction
Premium interior-design editorial aesthetic:
- Warm background `#F7F5F0`
- Surface `#FFFFFF`
- Muted surface `#E9E3D9`
- Deep navy text/primary `#172B40`
- Muted text `#687381`
- Warm gold accent `#B58A58`
- Border `#E5E0D7`

Fonts: Manrope for headings/UI and Inter for body, loaded once globally using the framework's font mechanism. If the repo already has an approved palette/font system, audit and preserve it unless approved to change. Centralize colors, typography, spacing, container widths, breakpoints, radii, shadows, motion, and z-index as semantic tokens.

Use large authentic project images, generous whitespace, clear hierarchy, consistent cards and image ratios, subtle transitions, and restrained shadows. Avoid clutter, excessive gradients, glassmorphism, dark full-page sections, and unnecessary animation. Design mobile-first.

## Recommended stack
- Next.js App Router
- TypeScript strict
- Tailwind CSS (respect installed version)
- Motion for React only if needed
- Lucide React
- Framework image optimization
- Cloudinary for media delivery if approved/configured
- Vercel hosting if approved

Inspect and reuse existing dependencies first. No database/backend is required for the first release. Use typed local data modules for services, projects, navigation, and testimonials.

Suggested project model:
```ts
export type ServiceCategory = "electrical" | "carpentry" | "painting" | "ceiling";

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
}
```

Suggested structure (adapt to repo):
```text
src/
  app/
    page.tsx
    layout.tsx
    globals.css
    services/
    projects/
    about/
    contact/
  components/
    layout/
    sections/
    services/
    projects/
    gallery/
    forms/
    ui/
  data/
    services.ts
    projects.ts
    testimonials.ts
    navigation.ts
  lib/
    seo.ts
    whatsapp.ts
  types/
    project.ts
public/
  images/
  videos/
  icons/
```

Reusable components to build as needed: SiteHeader, MobileNavigation, SiteFooter, Container, SectionHeading, button variants, WhatsAppButton, CallButton, PageHero, Breadcrumbs, ServiceCard, ProjectCard, ProjectGrid, CategoryFilter, MediaGallery, VideoCard, BeforeAfterSlider, ProcessStep, TestimonialCard, EnquiryForm. Reuse rather than duplicate.

---

# Phased implementation sequence

## Phase 0 — Repository audit (no implementation)
Tasks:
- Inspect repository, git status, package manager, framework, scripts, routes, dependencies, components, styles, assets.
- Record current build/lint/type-check status.
- Identify existing fonts/colors/tokens and reusable components.
- Identify actual media and missing contractor information.
- Propose Phase 1 file plan.
Acceptance: no code changes, no package installs, no deletion. Report findings and wait.

### Prompt — Phase 0
```text
Read AGENTS.md and IMPLEMENTATION_PLAN.md completely. Execute Phase 0 only: repository audit.

Inspect git status, repository structure, framework, package manager, dependencies, routes, scripts, styles, design tokens, reusable components, and available media. Preserve all existing changes. Do not modify files, install packages, delete assets, or begin implementation.

Run safe baseline checks where practical and report actual outcomes. Identify missing contractor facts/media. Return architecture summary, design-system findings, existing reusable components, risks, exact proposed Phase 1 files, and available verification commands. Stop and wait for approval.
```

## Phase 1 — Global design system and shared shell
Tasks:
- Configure global fonts once.
- Create semantic tokens for colors, typography, spacing, containers, breakpoints, radii, shadows, and motion.
- Integrate tokens with installed Tailwind version.
- Build shared Container, buttons, SectionHeading, PageHero, SiteHeader, mobile navigation, and SiteFooter as appropriate.
- Add focus, hover, active, disabled, and reduced-motion states.
- Document token and component usage.
Acceptance: one font source, one token source, responsive accessible shell, no duplicated primitives. Do not build page content yet.

### Prompt — Phase 1
```text
Implement Phase 1 only: global design system and shared website shell. Follow AGENTS.md and Phase 0 findings.

Do not build the homepage or service/project pages yet. Establish one source of truth for global fonts, typography scale, semantic color tokens, spacing, containers, breakpoints, radii, borders, shadows, and motion. Use the proposed palette in the plan only if no approved existing system conflicts. Load Manrope/Inter once globally if appropriate; never import fonts per page.

Build reusable SiteHeader, responsive mobile navigation, SiteFooter, Container, SectionHeading, PageHero, and button primitives as appropriate. Reuse existing dependencies; do not add libraries without justification. Ensure keyboard navigation, focus states, touch usability, and reduced-motion support. Document token usage.

Run relevant checks. Report exact files changed, tokens and components created, responsive/accessibility checks, and actual command results. Stop and wait for approval.
```

## Phase 2 — Homepage
Sections:
1. Header/navigation
2. Hero: “Transform Your Space. Built With Skill. Finished With Perfection.”
3. Trust strip (verified facts only)
4. Four service cards
5. Featured projects
6. Why choose us (factual)
7. Work process: Consultation, Site Visit, Quotation, Execution, Handover
8. Genuine testimonials only; omit until supplied
9. Enquiry CTA and footer

### Prompt — Phase 2
```text
Implement Phase 2 only: homepage. Reuse the approved global tokens and Phase 1 components; do not recreate them.

Build hero with the headline “Transform Your Space. Built With Skill. Finished With Perfection.” and supporting copy for Electrical, Carpentry, Painting, and Ceiling. Add Explore Our Work and Get an Estimate CTAs; four service cards; featured projects from typed data; factual why-choose-us content; work process; final CTA; shared footer.

Use authentic supplied media. Never present stock images as contractor work. If media is unmapped, use clearly marked temporary placeholders and report what is needed. Do not invent years, project counts, reviews, certifications, or guarantees. Make all links/actions functional and verify mobile layouts.

Run checks, report files changed, components reused, placeholders, and actual results. Stop and wait for approval.
```

## Phase 3 — Services overview + Electrical page
Tasks:
- Build `/services`.
- Create reusable ServiceDetailTemplate.
- Build `/services/electrical`.
- Add only confirmed subcategories: house wiring, concealed wiring, switchboards, lighting, fittings, distribution boards, renovation work.
- Add relevant real media, related projects, breadcrumbs, metadata, and enquiry CTA.

### Prompt — Phase 3
```text
Implement Phase 3 only: /services and /services/electrical. Create a reusable typed ServiceDetailTemplate and service data module; do not duplicate page layouts. Use the approved global design system and components.

Electrical subcategories may include house wiring, concealed wiring, switchboard installation, lighting, electrical fittings, distribution boards, and renovation work, but publish only those confirmed by the contractor. Include service hero, intro, category cards, authentic project media, verified process details, breadcrumbs, metadata, related projects, and a service-aware enquiry CTA. Do not invent certifications or safety claims.

Check links, mobile, accessibility, and relevant build/lint/type checks. Report the template and files changed. Stop and wait.
```

## Phase 4 — Carpentry + Painting pages
Carpentry: wardrobes, modular kitchens, TV units, wooden doors, storage, custom furniture.
Painting: interior, exterior, texture, decorative finishes, wood polish, waterproofing.
Publish only confirmed services. Reuse ServiceDetailTemplate and category-aware enquiry CTAs.

### Prompt — Phase 4
```text
Implement Phase 4 only: /services/carpentry and /services/painting. Reuse the existing ServiceDetailTemplate, service data types, gallery, project cards, breadcrumbs, CTA, and global tokens. Do not redesign approved patterns without asking.

Use the planned categories (carpentry: wardrobes, modular kitchens, TV units, doors, storage, custom furniture; painting: interior, exterior, texture, decorative finishes, wood polish, waterproofing) only when contractor-confirmed. Use authentic mapped media or clearly marked placeholders. Add related projects and category-aware enquiry links. Check responsive behavior, metadata, accessibility, and build/lint/type checks. Report changes and stop.
```

## Phase 5 — Ceiling page + service consistency audit
Tasks:
- Build `/services/ceiling`.
- Categories may include POP, gypsum, simple, multi-level, cove lighting, decorative designs; confirm first.
- Audit all four service pages for typography, spacing, image ratios, hero, CTA, breadcrumbs, and metadata.

### Prompt — Phase 5
```text
Implement Phase 5 only: /services/ceiling and a consistency audit of all four service pages. Reuse ServiceDetailTemplate and shared tokens. Publish only contractor-confirmed ceiling services (possible categories: POP, gypsum, simple, multi-level, cove lighting, decorative designs).

Audit Electrical, Carpentry, Painting, and Ceiling for consistent typography, spacing, hero, cards, image ratios, CTA, breadcrumbs, metadata, responsive behavior, and accessibility. Fix genuine drift without unnecessary redesign. Run checks, report findings/fixes, and stop.
```

## Phase 6 — Projects gallery + project detail
Tasks:
- Build `/projects` with All/Electrical/Carpentry/Painting/Ceiling filters.
- Build `/projects/[slug]` using a reusable detail template.
- Support images, videos, optional accessible lightbox, related projects, and Before/After only when paired authentic images exist.
- Optimize media, lazy-load below fold, use video posters, no autoplay with sound.

### Prompt — Phase 6
```text
Implement Phase 6 only: /projects and /projects/[slug]. Use typed project data and reusable ProjectCard, ProjectGrid, CategoryFilter, MediaGallery, and VideoCard components as needed. Filters: All, Electrical, Carpentry, Painting, Ceiling.

Project fields: title, slug, category, summary, description, optional privacy-safe location/date, cover image, gallery images, optional videos, featured status. Use authentic contractor media only for published projects. Do not invent dates, locations, or results. Add accessible filtering/lightbox, optimized images, lazy loading, video posters, and no autoplay with sound. Add a Before/After slider only when genuine paired images exist. Check links, mobile, accessibility, and build. Report and stop.
```

## Phase 7 — About + Contact / enquiry
Tasks:
- Build `/about` with approved profile, verified experience, service areas, genuine testimonials.
- Build `/contact` with name, phone, service, location, description, optional secure image upload.
- Add verified WhatsApp/call details.
- Configure actual email/API delivery only when credentials/provider are supplied and tested.

### Prompt — Phase 7
```text
Implement Phase 7 only: /about and /contact. Reuse all approved tokens and components.

About: contractor introduction, approved profile image, verified experience, confirmed service areas, genuine testimonials only.
Contact: name, phone, service required, location, description, optional reference upload only if secure upload is implemented; WhatsApp with prefilled message; click-to-call; verified email/map details only.

Do not invent contact details. Do not show a successful form-delivery state unless a configured provider/API actually delivered the enquiry. If no provider exists, keep WhatsApp as the working primary contact route and report form delivery as pending. Add validation, loading/error/success states, metadata, accessibility, and mobile checks. Stop and wait.
```

## Phase 8 — SEO, accessibility, performance, QA
Tasks:
- Unique metadata, Open Graph, canonical URLs when domain known.
- Sitemap and robots.
- LocalBusiness schema only with verified data.
- Heading/alt audit, keyboard/focus/contrast/reduced-motion audit.
- Mobile overflow checks from 320px.
- Image/video optimization and Core Web Vitals review.
- Broken links, 404, forms, WhatsApp, build/lint/type-check/tests.

### Prompt — Phase 8
```text
Implement Phase 8 only: production-readiness audit. Do not add features or redesign approved pages.

Audit every route for unique title/description, Open Graph, canonical URLs when known, sitemap, robots, semantic headings, alt text, and LocalBusiness structured data only from verified facts. Audit keyboard access, focus, contrast, forms, reduced motion, mobile overflow from 320px, image/video optimization, layout shift, broken links, missing assets, 404 behavior, WhatsApp/call/form actions, and secret exposure.

Run lint, type-check, tests, and production build. Fix issues introduced by this project; distinguish pre-existing failures with evidence. Return a severity-ranked report and stop.
```

## Phase 9 — Preview deployment and handover
Tasks:
- Confirm domain/hosting ownership.
- Configure secrets in hosting settings only.
- Deploy preview and obtain approval.
- Verify routes, media, HTTPS, contact actions.
- Production deploy only with explicit authorization.
- Handover guide: content updates, media replacement, environment variable names (never values), deployment, maintenance, limitations.

### Prompt — Phase 9
```text
Implement Phase 9 only: deployment preparation and handover. Inspect existing hosting/CI/CD first. Do not purchase services, change DNS, or deploy production without explicit approval.

Prepare a preview deployment. Configure environment variables securely in hosting settings; never commit secrets. Verify routes, media, metadata, HTTPS, and contact actions. Prepare a handover guide covering project structure, service/project content updates, media replacement, required environment variable names (not values), deployment, maintenance, and known limitations. Wait for explicit production-launch approval.
```

---

## 5. Review gate after every phase

Before approving the next phase, verify:
- Does it match the approved design?
- Are fonts and colors consistent globally?
- Were reusable components reused?
- Does it work on mobile and desktop?
- Do buttons, filters, and links work?
- Are media assets genuine or clearly marked placeholders?
- Are there console/type/build errors?
- Was scope limited to the requested phase?

## 6. Future Phase 2 — Admin dashboard (separate project scope)
Only after the public website is launched and the contractor asks to manage content independently:
- Secure admin login and server-side authorization.
- PostgreSQL project/category/testimonial/enquiry data.
- Cloudinary signed uploads with file type/size restrictions.
- Project CRUD and publish/unpublish.
- Enquiry management.
- Rate limiting, validation, audit trail where appropriate.

Do not build this during the public website phases.

## Delivery order
0 Audit → 1 Design system/shell → 2 Homepage → 3 Services + Electrical → 4 Carpentry + Painting → 5 Ceiling + consistency → 6 Projects → 7 About + Contact → 8 QA/SEO → 9 Preview/deployment/handover.

**Important:** Paste only the current phase prompt into Antigravity. Keep both files in the repository root. Never ask it to execute the whole plan in one run.
"""

out = Path("/mnt/data")
(out / "AGENTS.md").write_text(agents, encoding="utf-8")
(out / "IMPLEMENTATION_PLAN.md").write_text(plan, encoding="utf-8")
print("Created AGENTS.md and IMPLEMENTATION_PLAN.md")
