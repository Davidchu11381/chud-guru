# minhducchu.com — Personal Portfolio

Next.js 15 + Tailwind + Geist. Built to deploy free on Vercel.

## Run locally

```bash
cd /workspace-vast/chud/portfolio
npm install
npm run dev
# open http://localhost:3000
```

## Editing your content

Everything lives in `lib/data.ts` — bio, links, publications, citation metrics. Update there, save, refresh. Section copy (the funny About paragraphs, the Research themes) lives directly in `components/*.tsx`.

## Cheapest way to host (Vercel free tier — $0/mo)

Vercel's Hobby plan is free, generous, and is the company that builds Next.js, so deploys are one click.

### 1. Push to GitHub

```bash
cd /workspace-vast/chud/portfolio
git init
git add .
git commit -m "Initial portfolio"
# Create empty repo on github.com (e.g. minhducchu/portfolio), then:
git branch -M main
git remote add origin https://github.com/<your-username>/portfolio.git
git push -u origin main
```

### 2. Import to Vercel (no CLI needed)

1. Go to https://vercel.com/new
2. Sign in with GitHub
3. Click "Import" on your portfolio repo
4. Framework preset: **Next.js** (auto-detected)
5. Click **Deploy**

You'll get a live URL like `minhducchu-portfolio.vercel.app` in under 60 seconds.

### 3. (Optional) Custom domain — the only thing that costs money

- A `.com` runs ~$10/year. Buy via Namecheap, Porkbun, or Cloudflare Registrar (Cloudflare is cheapest, sells at cost).
- In Vercel project → Settings → Domains → add `minhducchu.com`.
- Vercel will show you DNS records (an A record + CNAME). Paste those into your registrar's DNS panel. Propagation is usually a few minutes.
- HTTPS is automatic.

**Total cost: $0/mo + $10/yr if you want a custom domain.**

### Alternative free hosts

If you ever want to leave Vercel: Cloudflare Pages and Netlify both have free tiers that work with Next.js. Vercel has the smoothest Next.js experience because they build the framework.

## Updating after deploy

Just push to `main` — Vercel auto-deploys every commit. Preview URLs are generated for every PR.

## Stack

- **Next.js 15** (App Router, React 19) — the framework Vercel builds
- **Tailwind CSS 3** — utility CSS
- **Geist** — Vercel's house font (sans + mono)
- **lucide-react** — icons
- Zero JS dependencies beyond that. Pure CSS animations.

## Project structure

```
portfolio/
├── app/
│   ├── layout.tsx       # Root layout, metadata, Geist font
│   ├── page.tsx         # Composes all sections
│   └── globals.css      # Tailwind + custom (glass, gradient text, animations)
├── components/
│   ├── background.tsx   # Animated grid + spotlight + blur blobs
│   ├── nav.tsx          # Sticky nav with scroll blur
│   ├── hero.tsx         # Name, tagline, stat cards, CTAs
│   ├── about.tsx        # Bio (with paradigm-shift framing + boxing/tennis)
│   ├── research.tsx     # Themes + interest pills
│   ├── publications.tsx # Grouped by year, your name bolded
│   └── contact.tsx      # Email CTA + social cards + footer
├── lib/
│   └── data.ts          # ALL content lives here
└── public/
    └── favicon.svg
```
