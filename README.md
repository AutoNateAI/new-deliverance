# New Deliverance

Static-first Astro site scaffold for the New Deliverance website.

## Stack

- Astro 5 with TypeScript strict mode
- GitHub Pages deployment via GitHub Actions
- Data-driven homepage sections for easier iteration
- SEO basics included: sitemap, robots, Open Graph, canonical URLs, and JSON-LD

## Commands

```bash
npm install
npm run dev
npm run build
```

## Deployment

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` to the `gh-pages` branch. GitHub Pages should be configured to serve from `gh-pages` at `/`.

## Architecture Notes

- `src/layouts/BaseLayout.astro`: shared metadata, canonical tags, global styles
- `src/data/site.ts`: editable site content and homepage data
- `src/pages/`: route entrypoints
- `src/components/`: reusable UI blocks

If backend features are needed later, add Firebase in a targeted way for forms, auth, or content workflows rather than overcomplicating the initial static site.
