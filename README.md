# HeshbonAI Website

Marketing website for **HeshbonAI** — the AI assistant for CPA firms.

**Live:** [heshbonai.co](https://heshbonai.co)

## What is HeshbonAI?

HeshbonAI automates client follow-up, document collection, and status tracking through WhatsApp for Israeli CPA firms. It operates as a firm-branded assistant (e.g., "Maya from Cohen & Co.") — clients never know it's automated.

- **WhatsApp-native** — no portals, no app downloads
- **Hebrew-first** — built for the Israeli market
- **Firm-branded** — messages come from your firm's name
- **Operational dashboard** — real-time visibility into every client and document

## Tech Stack

- **Framework:** [Astro](https://astro.build/) (static site generator)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) with custom color palette
- **Fonts:** Inter + Heebo (Hebrew) + JetBrains Mono (data)
- **Hosting:** Vercel (static deployment)
- **Domain:** heshbonai.co (GoDaddy DNS → Vercel)

## Development

```bash
npm install
npm run dev        # Local dev server at localhost:4321
npm run build      # Build static site to dist/
npm run preview    # Preview production build locally
```

## Deployment

Auto-deploy from GitHub is **not configured**. Deploy manually:

```bash
git push origin main
npx vercel --prod --yes
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.astro
│   ├── Hero.astro          # Dashboard mockup + animated progress
│   ├── Testimonials.astro  # Trust chips (WhatsApp-native, Hebrew-first, Firm-branded)
│   ├── PainPoints.astro    # 3 problem cards
│   ├── HowItWorks.astro    # 3-step flow with timeline animation
│   ├── Features.astro      # 6 product feature cards
│   ├── WhatsAppDemo.astro  # 3-panel: WhatsApp thread + AI status + dashboard
│   ├── ROICalculator.astro # 4 KPI cards with count-up animation
│   ├── PricingSnapshot.astro # 3 tiers (₪1,000 / ₪1,800 / ₪2,700)
│   ├── FinalCTA.astro
│   └── Footer.astro
├── layouts/
│   └── Layout.astro        # Base layout with SEO schema markup
├── pages/
│   ├── index.astro         # Homepage
│   ├── pricing.astro       # Full pricing + FAQ
│   ├── how-it-works.astro  # 3-step detailed walkthrough
│   ├── about.astro         # Problem, approach, mission
│   └── contact.astro       # Contact form + info
├── styles/
│   └── global.css          # Base styles, component classes
docs/
├── branding/
│   └── brand-guide.md      # Brand identity, voice, visual direction, WhatsApp personality
├── product/
│   ├── positioning.md      # Positioning, differentiators, objection handling
│   ├── features.md         # MVP features + future roadmap
│   └── one-pager.md        # Sales one-pager
├── website/
│   ├── homepage.md         # Homepage copy spec
│   ├── structure.md        # Site map, nav, section order, design direction
│   └── pricing.md          # Pricing page copy spec
├── competitors/
│   └── analysis.md         # Competitor analysis (Liscio, ClientWindow, FinBot, etc.)
└── prospects/
    └── targets.md          # 50 Israeli CPA firm prospects by tier
```

## Design System

### Colors (defined in `tailwind.config.mjs`)

| Role | Color | Hex |
|------|-------|-----|
| Background | Deep Navy | `#0A1628` |
| Surface/Cards | Slate Navy | `#111C30` |
| Primary Accent | Electric Blue | `#2D7FF9` |
| Soft Accent | Soft Blue | `#6EA8FE` |
| Text Primary | Off White | `#E8ECF1` |
| Text Secondary | Cool Gray | `#8A95A8` |
| Borders | Border Gray | `#263247` |
| Success | Green | `#00D68F` |
| Warning | Amber | `#FFB020` |
| Error | Red | `#FF4D4F` |
| WhatsApp | Green | `#25D366` |

### Component Classes (defined in `global.css`)

- `.btn-primary` — Electric blue CTA button
- `.btn-secondary` — Bordered outline button
- `.section-label` — Blue uppercase label above section headings
- `.card` — Navy-light card with border and hover lift

### Animations

- **Hero:** Dana Levi row animates 2/4 → 4/4 with "Updated just now" pulse
- **How It Works:** Steps reveal sequentially, connecting line draws across
- **ROI:** Numbers count up on scroll (70%, 82%, 94%)
- **WhatsApp Demo:** Messages appear one by one, status transitions Pending → Received
- **Cards:** 2px hover lift with border brightening

## Pricing

| Tier | Price | Clients |
|------|-------|---------|
| Starter | ₪1,000/mo | Up to 50 |
| Professional | ₪1,800/mo | Up to 150 |
| Complete | ₪2,700/mo | Up to 300 |

All prices excl. VAT. Onboarding fee may apply.

## Key Content Rules

- Never say "bot" or "chatbot" — always "assistant"
- Never use AI hype language ("revolutionary," "game-changing")
- The CPA is the hero, HeshbonAI is the tool
- Short sentences, direct, outcome-focused
- Hebrew copy should match the same tone
- Firm-branded assistant model: "Maya from [Firm Name]"
- No mascot branding
- No "free trial" — contact us to get started
- No "demo" page — use contact page instead

## Contact

- **CEO:** Marko Sione — markos@heshbonai.co
- **Support:** support@heshbonai.co
- **Company:** Heshbonai Ltd., Tel Aviv, Israel
