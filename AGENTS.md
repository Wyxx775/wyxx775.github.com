# AGENTS.md

This document provides an overview of the project structure for developers and AI agents working on this codebase.

## Project Overview

A roleplay ("RP") portal for a fictional Marseille Prefecture, built for a Discord community server. It presents an official-looking, classy institutional site with three actions:

- Contact the Prefecture → links to a Discord invite
- File a tax declaration → links to a Google Form
- Register a business creation → links to a Google Form

There is no backend, database, or authentication — every action is an outbound link to Discord or Google Forms.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| Icons | lucide-react |
| Language | TypeScript 5.9 (strict mode) |
| Deployment | Netlify |

## Directory Structure

```
├── public
│   └── favicon.ico
├── src
│   ├── data
│   │   └── links.ts        # Discord invite + Google Form URLs (edit these to configure the site)
│   ├── routes
│   │   ├── __root.tsx       # Root layout, fonts, page metadata
│   │   └── index.tsx        # The entire single-page portal (hero, services, footer)
│   ├── router.tsx           # TanStack Router setup
│   └── styles.css           # Tailwind import
├── AGENTS.md
├── README.md
├── netlify.toml
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Key Concepts

### Configuring the links

All outbound links live in `src/data/links.ts`:

- `DISCORD_INVITE_URL` — Discord server invite
- `TAX_DECLARATION_FORM_URL` — Google Form for tax declarations
- `BUSINESS_CREATION_FORM_URL` — Google Form for business creation requests

These are placeholder URLs by default and must be replaced with real ones before going live.

### File-Based Routing (TanStack Router)

Routes are defined by files in `src/routes/`:
- `__root.tsx` — root layout wrapping all pages, fonts and metadata
- `index.tsx` — the `/` route, containing the full page

### Design

Dark navy background with gold accents, evoking an official French administrative aesthetic ("Marianne"-style), using Cormorant Garamond for headings and Inter for body text.

## Development Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
```

## Conventions

- Components: PascalCase, colocated in `index.tsx` since the site is a single page
- Import paths use the `@/` alias for `src/*`
- Tailwind utility classes for all styling, no CSS modules
