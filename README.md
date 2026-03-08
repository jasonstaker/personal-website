# Jason Staker | Software Portfolio

Personal portfolio website for projects, experience, resume, and contact information.

Live domain: `https://jasonstaker.dev`

## Stack

- React 19
- TypeScript
- Vite 7
- React Router 7
- Tailwind CSS 4 (plus custom CSS in `src/index.css`)

## Routes

- `/` Home
- `/projects` Project list
- `/projects/:slug` Project detail page
- `/experience` Experience timeline
- `/resume` Resume preview + download
- `/contact` Contact links
- `/about` About page
- `*` Custom 404 page

## Project Structure

```text
src/
  app/
    App.tsx
    router.tsx
  components/
    Header.tsx
    Footer.tsx
    Seo.tsx
  content/
    site.ts
    projects.ts
    experience.ts
    getProject.ts
  layouts/
    RootLayout.tsx
  pages/
    Home.tsx
    Projects.tsx
    ProjectDetail.tsx
    Experience.tsx
    Resume.tsx
    Contact.tsx
    About.tsx
    NotFound.tsx
public/
  about/
  projects/
  experience/
  resume/
  ambient/
  favicon.svg
  robots.txt
  sitemap.xml (generated)
scripts/
  generate-sitemap.mjs
```

## Content-Driven Files

Main profile/site information:

- `src/content/site.ts`

Project cards + detail content:

- `src/content/projects.ts`

Experience timeline content:

- `src/content/experience.ts`

If you add or update projects, keep `slug` and `lastUpdated` accurate. The sitemap generator reads these values.

## Getting Started

Requirements:

- Node.js `24` (see `.nvmrc`)
- npm

Install and run locally:

```bash
npm ci
npm run dev
```

Build and preview production output:

```bash
npm run build
npm run preview
```

Lint:

```bash
npm run lint
```

## Scripts

- `npm run dev` Start Vite dev server
- `npm run lint` Run ESLint
- `npm run sitemap` Generate `public/sitemap.xml`
- `npm run build` Generate sitemap + type-check + Vite production build
- `npm run preview` Preview production build locally

## SEO, Robots, and Sitemap

- Per-page metadata is handled by `src/components/Seo.tsx`
- `public/robots.txt` allows crawling and points to sitemap
- `scripts/generate-sitemap.mjs` builds sitemap entries from:
  - static routes
  - project `slug` + `lastUpdated` fields in `src/content/projects.ts`
- Sitemap base URL comes from:
  - `SITE_URL`, or
  - `VITE_SITE_URL`, or
  - fallback: `https://jasonstaker.dev`

## Deployment

- Configured for SPA rewrites with `vercel.json`:
  - all routes rewrite to `/` for client-side routing

## CI

GitHub Actions workflow: `.github/workflows/ci.yml`

On each push and pull request:

1. Install dependencies with `npm ci`
2. Run `npm run lint`
3. Run `npm run build`
