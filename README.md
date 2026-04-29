# MedClap

Marketing agency website built with Next.js (App Router) + TypeScript.

## Stack

- **Next.js 15** — App Router
- **TypeScript** — strict mode
- **Tailwind CSS** — with brand colors preconfigured
- **Framer Motion** — declarative React animations
- **GSAP** — advanced/scroll-driven animations
- **Lenis** — smooth scroll
- **lucide-react** — icon library

## Getting Started

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
medclap/
├── app/
│   ├── layout.tsx        # Root layout (fonts, smooth scroll wrapper)
│   ├── page.tsx          # Homepage — sections composed here
│   ├── providers.tsx     # Lenis smooth-scroll provider
│   └── globals.css       # Tailwind + base styles
├── components/
│   ├── sections/         # One file per homepage section
│   └── ui/               # Reusable UI primitives (Container, Button, etc.)
├── lib/
│   └── utils.ts          # cn() helper for class merging
├── public/               # Static assets (logo, images)
├── tailwind.config.ts    # Brand colors + font tokens
└── tsconfig.json
```

## Brand Tokens

Defined in `tailwind.config.ts`. Use as Tailwind classes:

| Color    | Hex       | Tailwind class                |
| -------- | --------- | ----------------------------- |
| Navy     | `#1A2A5E` | `bg-navy`, `text-navy`        |
| Gold     | `#F4B62E` | `bg-gold`, `text-gold`        |
| Cream    | `#FAF6EE` | `bg-cream`, `text-cream`      |
| Ink      | `#0F1018` | `bg-ink`, `text-ink`          |

Variants like `navy-deep`, `gold-soft`, `ink-soft` are also available.

## Building Sections

Sections live in `components/sections/`. To add one:

1. Create `components/sections/YourSection.tsx`
2. Import it into `app/page.tsx`
3. Drop it into the `<main>` element

## Notes

- Body font is currently **Inter** as a placeholder. We'll replace with a more distinctive choice once the design direction is locked.
- `--font-display` is reserved for a serif/display face — to be added.
