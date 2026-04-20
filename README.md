# Static Website Documentation

A modern static documentation website built with Next.js, featuring:

- **Beautiful Design** - Modern UI with dark mode support
- **Fast Performance** - Static site generation for blazing fast page loads
- **Documentation** - MDX support for easy documentation writing
- **Responsive** - Mobile-first design
- **SEO Optimized** - Sitemap, robots.txt, and structured data

## Tech Stack

- **Framework**: Next.js 14 (App Router, SSG)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with shadcn/ui patterns
- **Content**: MDX for documentation
- **Deployment**: GitHub Pages

## Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/username/static-website-docs.git
cd static-website-docs

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev

# Open http://localhost:3000
```

### Build

```bash
# Build for production
npm run build

# Preview production build
npm run start
```

## Deployment to GitHub Pages

### Automatic Deployment

1. Push this repository to GitHub
2. Go to repository **Settings** > **Pages**
3. Under **Build and deployment**, select **GitHub Actions**
4. The workflow will automatically deploy on push to `main` branch

### Manual Deployment

```bash
npm run build
```

This generates a static site in the `out` directory.

## Project Structure

```
├── src/
│   ├── app/              # Next.js App Router pages
│   ├── components/      # React components
│   │   ├── ui/          # Base UI components
│   │   ├── layout/      # Header, Footer
│   │   ├── docs/        # Documentation components
│   │   ├── landing/     # Landing page sections
│   │   └── contact/     # Contact form
│   ├── content/         # MDX documentation files
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utilities and configs
│   └── types/           # TypeScript types
├── public/               # Static assets
└── .github/workflows/    # GitHub Actions
```

## Customization

### Site Configuration

Edit `src/lib/site-config.ts` to customize site information:

```typescript
export const siteConfig = {
  name: "My Documentation",
  description: "A modern documentation website",
  url: "https://example.com",
  // ...
};
```

### Navigation

Edit `src/lib/navigation.ts` to customize navigation:

```typescript
export const mainNav = [
  { title: "Docs", href: "/docs" },
  { title: "Contact", href: "/contact" },
];
```

### Contact Information

Edit `src/lib/contact.ts` to customize contact details:

```typescript
export const contactConfig = {
  email: "hello@example.com",
  location: "Ho Chi Minh City, Vietnam",
  social: [
    { platform: "GitHub", url: "https://github.com/username", icon: "Github" },
  ],
};
```

### Adding Documentation

Add MDX files to `src/content/docs/`:

```mdx
---
title: My New Page
description: A description of my page
order: 1
category: guides
---

# My New Page

This is my documentation content...
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript type checking |

## License

MIT License - feel free to use this template for your own projects!

## Features

- Dark/Light mode toggle
- Responsive design
- MDX documentation support
- Syntax highlighting for code blocks
- SEO optimization (sitemap, robots.txt, OG tags)
- Accessible design (WCAG compliant)
- Fast page loads with static generation
