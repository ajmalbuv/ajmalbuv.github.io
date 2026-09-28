<div align="center">

# ajmalbuv.github.io

**Personal Portfolio & Design System of Ajmal Basheer**

[![Astro](https://img.shields.io/badge/Astro-7.3.5-BC52EE?style=flat-square&logo=astro&logoColor=white)](https://astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.3.3-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strictest-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Runtime](https://img.shields.io/badge/Runtime-Bun-fbf0df?style=flat-square&logo=bun&logoColor=black)](https://bun.sh/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

[🌐 View Production Site](https://ajmalbuv.pages.dev) • [📄 Case Studies](https://ajmalbuv.pages.dev/#work) • [📬 Contact](https://ajmalbuv.pages.dev/#contact)

</div>

---

## ⚡ Overview

A high-performance, accessible, and hardened personal portfolio engineered with a **Zero Client JS Default** philosophy. Powered by **Astro 7**, **Tailwind CSS 4**, and **TypeScript**, the site achieves near-instant load times while enforcing production-grade Content Security Policies.

### Key Engineering Highlights

- **Zero Client JS Default**: Content is server-rendered as static HTML via Astro's Island architecture. Client JavaScript is strictly isolated to deferred interactive elements (`tsParticles` canvas).
- **Automated SHA-256 CSP Pipeline**: A custom Astro build hook (`inline-csp` in `astro.config.mjs`) scans generated HTML, hashes all inline `<style>` and `<script>` tags, and injects SHA-256 hashes into the Cloudflare `_headers` file—eliminating `unsafe-inline` entirely.
- **Strict Hardened Security**: Preconfigured with `HSTS` (31536000 with preload), `X-Frame-Options: DENY`, `Permissions-Policy`, `COOP: same-origin`, `COEP: require-corp`, and `CORP: same-origin`.
- **Type-Safe Content Store**: All portfolio data, project case studies, and personal timeline records reside in [`src/data/site.ts`](src/data/site.ts) typed with strict immutable TypeScript interfaces.
- **Accessibility & Motion Compliance**: Features keyboard skip-to-content links, `focus-visible` outlines, ARIA attributes, native HTML5 Popover API for zero-JS mobile navigation, and `@media (prefers-reduced-motion)` guards.
- **Modern Typography**: Self-hosted variable font pairing using `@fontsource-variable/geist` and `@fontsource-variable/geist-mono` with preloading for core Latin glyph subsets.

---

## 📁 Repository Structure

```text
ajmalbuv.github.io/
├── public/
│   ├── favicon.ico          # Multi-resolution favicon
│   ├── favicon.svg          # Vector favicon
│   └── apple-touch-icon-*   # Apple mobile touch icons
├── scripts/
│   └── clean.mjs            # Project cleanup script
├── src/
│   ├── assets/              # Local images (covers, screenshots, avatars)
│   ├── components/          # Semantic Astro components
│   │   ├── About.astro      # Experience & education timeline
│   │   ├── ConsoleSignature.astro # Devtools Easter egg
│   │   ├── Contact.astro    # Contact card & direct channels
│   │   ├── Footer.astro     # Footer & social links
│   │   ├── Head.astro       # SEO metadata, Open Graph, & JSON-LD schema
│   │   ├── Header.astro     # Responsive header with Popover mobile nav
│   │   ├── Hero.astro       # Hero section with lazy tsParticles integration
│   │   ├── Projects.astro   # Featured projects showcase
│   │   └── Skills.astro     # Technical competencies matrix
│   ├── data/
│   │   └── site.ts          # Central source of truth for site content
│   ├── layouts/
│   │   └── Base.astro       # Root HTML document shell
│   ├── pages/
│   │   ├── 404.astro        # Custom 404 error page
│   │   ├── index.astro      # Single-page portfolio root
│   │   └── projects/
│   │       └── [slug].astro # Dynamic case study route
│   ├── styles/
│   │   └── global.css       # Tailwind CSS v4 entry & scroll animations
│   └── types/
│       └── index.ts         # TypeScript data contracts & models
├── astro.config.mjs         # Astro, Vite, Rollup, & CSP build integration
├── eslint.config.mjs        # Flat ESLint configuration
├── knip.json                # Dead code & unused dependency detector
├── package.json             # Scripts & dependency definitions
├── tsconfig.json            # Strictest TypeScript configuration
└── LICENSE                  # MIT License
```

---

## 🚀 Getting Started

### Prerequisites

This project is built and managed using [Bun](https://bun.sh/).

- **Bun**: `>= 1.1.0` (or Node.js `>= 20.0.0`)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/ajmalbuv/ajmalbuv.github.io.git
cd ajmalbuv.github.io
bun install
```

### Development

Start the local Astro development server:

```bash
bun dev
```

Visit `http://localhost:4321` in your browser.

### Verification & Quality Checks

Run type-checking, linting, and formatting checks:

```bash
# Type check Astro & TypeScript, run ESLint
bun run check

# Lint files with ESLint
bun run lint

# Auto-fix linting issues
bun run lint:fix

# Verify Prettier formatting
bun run format:check

# Auto-format all code
bun run format
```

### Production Build

Create an optimized production build:

```bash
bun run build
```

Preview the production build locally:

```bash
bun run preview
```

---

## 🛠️ Tech Stack & Tooling

| Layer                  | Technologies                                                                                   |
| ---------------------- | ---------------------------------------------------------------------------------------------- |
| **Framework**          | [Astro v7](https://astro.build/) (Static Site Generation / Islands)                            |
| **Styling**            | [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/vite`)                              |
| **Language**           | [TypeScript](https://www.typescriptlang.org/) (`strictest` profile)                            |
| **Icons**              | [astro-icon](https://github.com/natemoo-re/astro-icon) (`@iconify-json/mdi`)                   |
| **Interactive Canvas** | [tsParticles Slim](https://particles.js.org/) (Lazy loaded via `requestIdleCallback`)          |
| **Typography**         | [Geist Variable](https://vercel.com/font) & [Geist Mono](https://vercel.com/font)              |
| **Quality & Linting**  | [ESLint v9+](https://eslint.org/), [Prettier](https://prettier.io/), [Knip](https://knip.dev/) |

---

## 📄 License & Content Rights

- **Source Code**: Licensed under the [MIT License](LICENSE). You are free to adapt the architecture, layout components, and build configuration for your own personal projects.
- **Personal Content & Branding**: All personal imagery, screenshots, project copy, and biography are proprietary and copyrighted by **Ajmal Basheer** (All Rights Reserved). Please replace them with your own information before deploying your fork.
