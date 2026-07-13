# Auro — Skincare Landing Page

A pixel-faithful recreation of the Auro skincare marketing site, built as a
production-ready Next.js frontend.

## Project Overview

Single-page marketing site for a fictional skincare brand ("Auro"), covering:

- Sticky header with responsive nav
- Hero with floating trust badges
- Press logo strip
- "Why Auro" value pillars
- Product detail (gallery, tabs, size selector)
- Customer reviews with animated rating bars
- Ingredients showcase
- Gradient CTA banner
- Footer with link groups and payment badges

All "Buy Now" / "Add to cart" / "Shop Now" buttons open
`https://www.amazon.in/` in a new tab. There is no cart, checkout, backend,
database, or authentication — this is a frontend-only project.

## Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) for subtle scroll/hover animations
- [Lucide React](https://lucide.dev/) for icons

## Folder Structure

```
auro-skincare/
├── app/
│   ├── layout.tsx        # Root layout & metadata
│   ├── page.tsx           # Homepage composition
│   └── globals.css        # Tailwind entrypoint + base styles
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── PressBar.tsx
│   │   ├── WhyAuro.tsx
│   │   ├── ProductDetail.tsx
│   │   ├── Reviews.tsx
│   │   ├── Ingredients.tsx
│   │   └── CtaBanner.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── StarRating.tsx
│       └── Reveal.tsx
├── constants/
│   └── site.ts             # Nav links, copy, reviews, ingredients data
├── hooks/
│   └── useRevealAnimation.ts  # Framer Motion variants
├── lib/
│   └── utils.ts             # cn() class helper, openAmazon()
├── types/
│   └── index.ts             # Shared TypeScript interfaces
├── public/
│   └── images/               # Placeholder product/ingredient artwork (SVG)
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.js
├── eslint.config.mjs
├── package.json
└── README.md
```

## Installation

```bash
npm install
```

## Running Locally

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

## Deployment on Vercel

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Next.js — no environment variables or extra
   configuration are required.
4. Click **Deploy**.

No API keys, database, or manual setup steps are needed — the project builds
and runs entirely on static/local data.

## Notes on Assets

Product photography from the original design reference was not available as
a licensable asset, so it has been replaced with generated SVG placeholders
in `public/images/` that preserve the same layout, aspect ratios, and color
palette. Swap these files with real photography at any time without touching
component code — every image reference points at `public/images/*.svg`.
