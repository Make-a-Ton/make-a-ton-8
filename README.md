# Make-A-Ton 8.0

Official website for Make-A-Ton 8.0 - South India's Largest Hackathon, organized by CITTIC.

## Tech Stack

- React 19
- TypeScript
- Vite
- React Router
- GSAP (animations)

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

Build output will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Deployment

This project uses GitHub Actions for automated deployment to GitHub Pages.

### How it works

1. Push changes to the `main` branch
2. GitHub Actions automatically builds and deploys to GitHub Pages
3. The workflow is defined in `.github/workflows/deploy.yml`

### Custom Domain Setup

If using a custom domain, add a `CNAME` file to the `public` directory with your domain name.

### Subdirectory Deployment

If deploying to `https://<username>.github.io/<repo-name>/`, update the base path in `vite.config.ts`:

```typescript
base: '/<repo-name>/',
```

## Project Structure

```
src/
  App.tsx          # Main app component with routing and home page
  App.css          # Global styles
  Newsletter.tsx   # Newsletter page
  NotFound.tsx     # 404 page
  main.tsx         # Entry point
assets/            # Images and media
public/            # Static assets (sponsors, PDF brochure)
```

## URL Redirects

Short URLs are handled via React Router and redirect to external services:

- `/gallery` - Photo gallery
- `/insta`, `/linkedin`, `/whatsapp`, `/telegram`, `/x` - Social media
- `/secondcommit`, `/callforproduction` - Forms

## License

All rights reserved.
