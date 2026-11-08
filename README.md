# Shan Contracting & Interiors — Official Website

A premium, responsive, SEO-ready portfolio and lead-generation website for an individual contractor in India offering **Electrical**, **Carpentry**, **Painting**, and **False Ceiling** services.

Built strictly according to [AGENTS.md](AGENTS.md) and [IMPLEMENTATION_PLAN.md](IMPLEMENTATION_PLAN.md).

---

## Tech Stack

- **Framework:** Next.js 16.4.5 (App Router, Turbopack, Cache Components)
- **Runtime:** React 19.3.0
- **Styling:** Tailwind CSS v4 (`@theme` tokens in `app/globals.css`)
- **Typography:** Manrope (Headings & Brand) + Inter (Body Copy) via `next/font/google`
- **Icons:** Lucide React
- **Language:** TypeScript 5.0 (Strict mode)
- **Deployment Target:** Vercel / Node.js Server

---

## Getting Started

Run the development server from the `website/` directory:

```bash
cd website
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to preview the website.

---

## Available Scripts

- `npm run dev` — Starts local development server
- `npx tsc --noEmit` — Type-checks all TypeScript files (Strict mode)
- `npm run lint` — Validates code with ESLint
- `npm run build` — Compiles and builds production static pages
- `npm run start` — Serves the compiled production build locally

---

## Handover & Maintenance

For detailed instructions on updating contact facts, adding portfolio projects, editing services, replacing media, and deploying to production, please refer to:

👉 **[HANDOVER.md](HANDOVER.md)**
