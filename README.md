# OWNDAYS × MELLER

A responsive landing page for the OWNDAYS × MELLER sunglasses collaboration — a
product showcase with a detail modal, built on the Next.js App Router.

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack) + React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Data fetching:** TanStack React Query + axios
- **UI primitives:** Radix UI (Dialog)

## Getting Started

### Prerequisites

- Node.js 20 or later
- npm

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Copy the example file, then adjust the values if needed:

```bash
cp .env.example .env.local
```

See [Environment Variables](#environment-variables) for what each key does.

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm start
```

## Environment Variables

All variables are `NEXT_PUBLIC_*` and are read at build time.

| Variable | Description |
| --- | --- |
| `NEXT_PUBLIC_API_BASE_URL` | Base URL of the product API |
| `NEXT_PUBLIC_IMAGE_BASE_URL` | Base URL for product images |
| `NEXT_PUBLIC_OWNDAYS_STORE` | OWNDAYS main site |
| `NEXT_PUBLIC_OWNDAYS_JP_JA` | OWNDAYS online store (JP) |
| `NEXT_PUBLIC_OWNDAYS_ABOUT` | "ABOUT" navigation link |
| `NEXT_PUBLIC_OWNDAYS_PRODUCTS` | "PRODUCTS" navigation link |
| `NEXT_PUBLIC_OWNDAYS_STORES` | "STORES" navigation link |
| `NEXT_PUBLIC_OWNDAYS_IG` | Instagram link |

> The image host must also be allow-listed in `next.config.ts`
> (`images.remotePatterns`) for `next/image` optimization to work.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── app/            # App Router entry (layout, page, globals.css)
├── components/
│   ├── layout/     # Header, footer, mobile menu
│   ├── sections/   # Page sections (hero, products, ...)
│   ├── providers/  # React Query provider
│   └── ui/         # Reusable UI (product card, dialog, ...)
├── hooks/          # Custom hooks
├── services/       # API calls
├── lib/            # axios client
├── types/          # TypeScript types
├── constants/      # Static data (nav links)
└── utils/          # Helpers (formatting)
```

## Notes

- The product grid is server-rendered: `ProductSection` is an async Server
  Component wrapped in `<Suspense>` with a skeleton fallback.
- The product detail modal CTA shows a disabled "OUT OF STOCK" state when
  `selling_setting.in_stock === 0`.
- Product images are served through `next/image` for automatic resizing and
  modern formats.
