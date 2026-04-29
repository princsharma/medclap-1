# Sections

Each section of the homepage lives here as its own component file.

**Conventions:**
- One section per file, PascalCase filename matching the export (e.g. `Hero.tsx`, `Services.tsx`)
- Server components by default; mark `"use client"` only when the section needs interactivity, animation hooks, or browser APIs
- Section-specific subcomponents can live alongside (e.g. `Hero.tsx` + `HeroVisual.tsx`) or be moved to `components/ui/` if reused

Built sections get imported into `app/page.tsx`.
