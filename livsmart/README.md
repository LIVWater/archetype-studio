# LIVSmart

LIVSmart is LIVWater's digital marketplace and management platform — a Next.js website covering products, services, decentralised systems (LIVSupply, LIVWaste, LIVReuse), dashboards, verified providers, affiliate partners and Water-as-a-Service.

> **MVP notice:** this build is a functional MVP. Prices, providers, technologies and resources marked with a placeholder badge are illustrative until live data is connected.

## Tech stack

- **Next.js 14** (App Router) + **React 18** + **TypeScript**
- **Tailwind CSS** with a custom navy / aqua design system
- **shadcn-style** primitives (built on **Radix UI**)
- **Framer Motion** for restrained micro-animations
- **Lucide** icons
- **next/image** for optimised media
- Typed mock data in `src/data/*`
- Modular components in `src/components/*`

## Getting started

```bash
# 1. Install
npm install

# 2. Configure environment (optional for static MVP)
cp .env.local.example .env.local

# 3. Develop
npm run dev

# 4. Production build
npm run build
npm run start

# 5. Type-check
npm run typecheck
```

Open `http://localhost:3000`.

## Environment variables

See `.env.local.example`. Variables are placeholders — no integrations are required for the MVP to build or run.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (used for OG / metadata base) |
| `NEXT_PUBLIC_SITE_NAME` | Display name |
| `EMAIL_PROVIDER`, `RESEND_API_KEY`, `EMAIL_FROM`, `EMAIL_TO` | Transactional email (Resend / SendGrid) |
| `DATABASE_URL` | Postgres / Supabase placeholder |
| `CRM_API_KEY`, `CRM_WEBHOOK_URL` | CRM integration placeholder |
| `STRIPE_*`, `PAYFAST_*` | Payment provider placeholders |
| `NEXT_PUBLIC_ANALYTICS_ID` | Web analytics |

## Deploying to Vercel

The project is built for Vercel out of the box.

1. Push the repository to GitHub / GitLab / Bitbucket.
2. In Vercel, **Import Project** and select this repo.
3. Framework preset: **Next.js** (auto-detected).
4. Build command: `next build` (already set in `vercel.json`).
5. Output directory: `.next` (default).
6. Add environment variables from `.env.local.example` as needed.
7. Deploy.

### Domain configuration

- In Vercel **Settings → Domains**, add your domain (e.g. `livsmart.livwater.io`).
- Update `NEXT_PUBLIC_SITE_URL` to the final domain so OG and metadata pick it up.
- Vercel issues TLS certificates automatically.

## Project structure

```
livsmart/
├─ src/
│  ├─ app/                 # App Router routes (37+ pages)
│  ├─ components/
│  │  ├─ commerce/         # Cart provider + drawer
│  │  ├─ forms/            # Quote / Assessment / Demo / Provider / Affiliate / Tech forms
│  │  ├─ layout/           # Header, Footer, Logo
│  │  ├─ marketing/        # Hero, cards, mockups, selectors, CTAs
│  │  └─ ui/               # Buttons, Badges, Cards, Inputs, Accordion, Section, Container
│  ├─ data/                # Typed mock data (products, services, providers, packages, technology, portals, audiences, resources, affiliates)
│  ├─ lib/                 # Utilities (cn, formatters, navigation config)
│  └─ types/               # Shared TypeScript types
├─ public/                 # Static assets
├─ tailwind.config.ts
├─ next.config.mjs
├─ vercel.json
└─ .env.local.example
```

## Key routes

- `/` — Home (hero, audience selector, ecosystem, app & dashboards, divisions, services, providers, affiliates, technology, packages, Water-as-a-Service, final CTA)
- `/marketplace` — Marketplace overview, commerce modes, category browser
- `/products`, `/products/[slug]` — Product catalogue + detail
- `/services-shop`, `/services/[slug]` — Services marketplace + detail
- `/livsupply`, `/livwaste`, `/livreuse` — Division pages
- `/app-dashboards` — App, dashboards and portal layer
- `/service-providers`, `/service-providers/[slug]`, `/become-a-provider`
- `/affiliate-network`, `/affiliate-application`
- `/new-water-technology`, `/technology-partner-application`
- `/water-as-a-service`
- `/solutions`, `/solutions/[audience]` (household, estates, commercial, industrial, agriculture, developers)
- `/packages/[slug]` — Solution packages
- `/quote-request`, `/project-assessment`, `/demo-request`, `/contact`
- `/cart`, `/checkout` — Direct-purchase commerce (Stripe / PayFast placeholder)
- `/resources`
- `/login/dashboard`, `/login/provider`, `/login/affiliate` — Portal login placeholders

## Major components

- `Header`, `Footer`, `Logo`, `CartDrawer`, `CartProvider`
- `Hero`, `DashboardMockup`, `AppMockup`
- `AudienceSelector`, `EcosystemLayers`, `HowItWorks`, `FinancingCards`, `CTASection`, `TrustBar`
- `ProductCard`, `ServiceCard`, `PackageCard`, `ProviderCard`, `TechnologyCard`, `PortalCard`
- `DivisionPage` shell (used by LIVSupply, LIVWaste, LIVReuse)
- Forms: `QuoteForm`, `ProjectAssessmentForm`, `DemoForm`, `ContactForm`, `ProviderApplicationForm`, `AffiliateApplicationForm`, `TechnologyPartnerForm`, `FormShell`
- UI primitives: `Button`, `Badge`, `PlaceholderBadge`, `VerifiedBadge`, `FeaturedBadge`, `Card`, `Input`, `Textarea`, `Select`, `Field`, `FileUploadPlaceholder`, `Accordion`, `SectionHeader`, `Section`, `Container`, `LoginPlaceholder`

## Future integrations

The MVP is structured so the following are drop-in:

| Capability | Suggested |
| --- | --- |
| Payments | **Stripe** (international), **PayFast** (ZA local) |
| Database | **Supabase** / **PostgreSQL** |
| Transactional email | **Resend** (recommended), SendGrid |
| Auth | **Clerk**, **Auth.js**, **Supabase Auth** |
| CMS | **Sanity**, **Contentful**, **Payload** (for resources, packages, technology) |
| CRM | **HubSpot**, **Pipedrive**, **Close** via webhook |
| Analytics | **Plausible**, **Vercel Web Analytics**, **GA4** |
| Provider onboarding | Connect application forms to backend approval workflow |
| Affiliate tracking | Generate referral codes, persist clicks, attribute pipelines |
| Quote management | Persist `QuoteRequest` and `ProjectAssessment` rows; route by category |
| Service dispatch | Use Provider directory + Operations Portal for SLA dispatch |
| Customer app / dashboards | Real auth + real telemetry feeds (LoRaWAN, NB-IoT, MQTT) |

## Placeholder content

Pricing, providers, technologies, screenshots and certain resources are clearly marked as placeholder where final data is not yet available. The site avoids unsupported claims such as guaranteed savings, fixed pricing or universal Water-as-a-Service availability — final commercial structures depend on project size, site conditions, commercial viability, ownership requirements and LIVWater approval.

## License

© LIVWater. All rights reserved.
