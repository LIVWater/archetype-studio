# LIVWater brand assets

Imported from `/Users/andreniemann/Desktop/LIVWater Pvt/Concept Design/`.
Centralised manifest lives in [`src/lib/assets.ts`](../../src/lib/assets.ts) — reference assets from there rather than hard-coding paths.

## What's in here

### Official PNGs (from `Concept Design/Logos/LIVWATER/`)

| File | Original | Notes |
| --- | --- | --- |
| `wordmark.png` | `Black.png` (1200×300) | Navy wordmark — use on **light** backgrounds |
| `wordmark-light.png` | `White.png` (1200×300) | White wordmark — use on **dark** backgrounds (LIVSmart default) |
| `wordmark-secondary.png` | `LIVWATER LOGO (Secondary).png` | Secondary horizontal variant |
| `mark-1.png` | `1.png` (500×500) | Primary square mark — water-ripple icon |
| `mark-2.png` | `2.png` (500×500) | Mark variant |
| `mark-3.png` | `3.png` (800×800) | Mark variant |
| `mark-alt.png` | `xd.png` (500×500) | Alternative mark treatment |
| `logo-stacked.png` | `EMPOWERING COMMUNITIES… (Logo).png` | Mark + LIVWATER + tagline stacked |
| `originals/*.png` | unchanged copies | Verbatim originals, safe to delete if not needed |

### SVG placeholders

`mark-dark.svg`, `mark-light.svg`, `wordmark.svg`, `logo-stacked.svg` — vector fallbacks used during development. Now superseded by the PNGs above but kept in place for offline/no-image fallback.

## Usage

```tsx
import Image from "next/image";
import { brand } from "@/lib/assets";

// Header lockup (default behaviour — uses Logo component)
import { Logo } from "@/components/layout/Logo";
<Logo />                              // mark + LIVSmart type
<Logo variant="wordmark" />           // wordmark only
<Logo variant="stacked" tone="dark"/> // stacked, navy version on light bg

// Or use directly via the assets manifest
<Image src={brand.mark} alt="LIVWater" width={48} height={48} />
<Image src={brand.wordmarkLight} alt="LIVWater" width={200} height={50} />
```

## Related folders

- [`/public/partners/`](../partners/) — 9 partner logos for the trust strip
- [`/public/imagery/`](../imagery/) — curated audience imagery (residential, agri, commercial, industrial, education, hospitality, awareness)
- [`/public/graphics/`](../graphics/) — water-cycle diagram, LIVSupply/LIVWaste process icons, main-offering icons

## Replacing or updating

To swap a logo, just overwrite the PNG at the same path — no code changes needed. To add a new mark/lockup variant, drop it in `/public/brand/`, add it to the `brand` map in `src/lib/assets.ts`, and update `Logo.tsx` if it needs a new variant.

## Notes

- Wordmarks are 1200×300 — embed at appropriate display sizes via `next/image`.
- Square marks are 500×500 (some 800×800 / 1080×1080 versions available in `Concept Design/Logos/LIVWATER/`).
- SVG rendering through `next/image` is enabled via `dangerouslyAllowSVG: true` in `next.config.mjs`.
