/**
 * Centralised brand asset manifest.
 *
 * All paths point into /public/ — reference them by importing from
 * "@/lib/assets" rather than hard-coding strings across components.
 *
 * Sourced from: /Users/andreniemann/Desktop/LIVWater Pvt/Concept Design/
 */

import type { Scale } from "@/types";

// ── Brand logos ─────────────────────────────────────────────────────────
export const brand = {
  /** square mark — primary water-ripple icon */
  mark: "/brand/mark-1.png",
  markAlt: "/brand/mark-2.png",
  markVariant: "/brand/mark-3.png",
  /** horizontal LIVWATER wordmark on navy (use on light bg) */
  wordmarkDark: "/brand/wordmark.png",
  /** horizontal LIVWATER wordmark in white (use on dark bg) */
  wordmarkLight: "/brand/wordmark-light.png",
  /** secondary horizontal wordmark variant */
  wordmarkSecondary: "/brand/wordmark-secondary.png",
  /** mark + LIVWATER stacked with tagline */
  stacked: "/brand/logo-stacked.png",
} as const;

// ── Partner logos (trust strip) ────────────────────────────────────────
export const partners: { name: string; src: string; url?: string }[] = [
  { name: "August", src: "/partners/august.png" },
  { name: "Blue Crane Treatment Wetlands", src: "/partners/blue-crane-treatment-wetlands.png" },
  { name: "EnviroSynergy", src: "/partners/envirosynergy.png" },
  { name: "EnviroWorks", src: "/partners/enviroworks.png" },
  { name: "Geostratum", src: "/partners/geostratum.png" },
  { name: "Hidro-Tech Systems", src: "/partners/hidro-tech-systems.png" },
  { name: "Kamstrup", src: "/partners/kamstrup.png" },
  { name: "Utico Water", src: "/partners/utico-water.png" },
  { name: "Water Pump Services", src: "/partners/water-pump-services.png" },
];

// ── Audience imagery ────────────────────────────────────────────────────
type ImageRef = { src: string; alt: string };

export const imagery: Record<string, ImageRef[]> = {
  residential: [
    { src: "/imagery/residential/residential-01.png", alt: "LIVWater residential application" },
    { src: "/imagery/residential/residential-02.png", alt: "LIVWater residential application" },
    { src: "/imagery/residential/residential-03.png", alt: "LIVWater residential application" },
  ],
  agriculture: [
    { src: "/imagery/agriculture/agriculture-01.png", alt: "LIVWater agricultural application" },
    { src: "/imagery/agriculture/agriculture-02.png", alt: "LIVWater agricultural application" },
    { src: "/imagery/agriculture/agriculture-03.png", alt: "LIVWater agricultural application" },
  ],
  commercial: [
    { src: "/imagery/commercial/commercial-01.png", alt: "LIVWater commercial application" },
    { src: "/imagery/commercial/commercial-02.png", alt: "LIVWater commercial application" },
    { src: "/imagery/commercial/commercial-03.png", alt: "LIVWater commercial application" },
  ],
  industrial: [
    { src: "/imagery/industrial/industrial-01.png", alt: "LIVWater industrial application" },
    { src: "/imagery/industrial/industrial-02.png", alt: "LIVWater industrial application" },
    { src: "/imagery/industrial/industrial-03.png", alt: "LIVWater industrial application" },
  ],
  education: [
    { src: "/imagery/education/education-01.png", alt: "LIVWater education and medical application" },
    { src: "/imagery/education/education-02.png", alt: "LIVWater education and medical application" },
    { src: "/imagery/education/education-03.png", alt: "LIVWater education and medical application" },
  ],
  hospitality: [
    { src: "/imagery/hospitality/hospitality-01.png", alt: "LIVWater tourism and hospitality application" },
    { src: "/imagery/hospitality/hospitality-02.png", alt: "LIVWater tourism and hospitality application" },
    { src: "/imagery/hospitality/hospitality-03.png", alt: "LIVWater tourism and hospitality application" },
  ],
  awareness: [
    { src: "/imagery/awareness/awareness-01.jpg", alt: "LIVWater field work" },
    { src: "/imagery/awareness/awareness-02.jpg", alt: "LIVWater field work" },
  ],
};

/** Map the project's Scale enum → an audience imagery folder. */
const scaleToFolder: Record<Scale, keyof typeof imagery> = {
  household: "residential",
  estate: "residential",
  commercial: "commercial",
  industrial: "industrial",
  agriculture: "agriculture",
  project: "industrial",
};

export function imageryForScale(scale: Scale, index = 0): ImageRef {
  const folder = scaleToFolder[scale];
  const set = imagery[folder] ?? imagery.residential;
  return set[index % set.length];
}

/** Pick a hero image for a given audience slug used in /solutions/[slug]. */
export function heroForAudience(slug: string): ImageRef {
  const map: Record<string, keyof typeof imagery> = {
    household: "residential",
    estates: "residential",
    commercial: "commercial",
    industrial: "industrial",
    agriculture: "agriculture",
    developers: "industrial",
  };
  const key = map[slug] ?? "residential";
  return imagery[key][0];
}

// ── Graphics / Icons ────────────────────────────────────────────────────
export const graphics = {
  waterCycle: {
    dark: "/graphics/water-cycle/dark.png",
    darkWithText: "/graphics/water-cycle/dark-with-text.png",
    light: "/graphics/water-cycle/light-with-text.png",
    lightAlt: "/graphics/water-cycle/light-with-text-alt.png",
  },
  livSupplySteps: [
    "/graphics/icons/livsupply/step-01.svg",
    "/graphics/icons/livsupply/step-02.svg",
    "/graphics/icons/livsupply/step-03.svg",
    "/graphics/icons/livsupply/step-04.svg",
  ],
  livWasteSteps: [
    "/graphics/icons/livwaste/step-01.png",
    "/graphics/icons/livwaste/step-02.png",
    "/graphics/icons/livwaste/step-03.png",
    "/graphics/icons/livwaste/step-04.png",
  ],
  livWasteHero: "/graphics/icons/livwaste/hero.png",
  mainOffering: [
    "/graphics/icons/main-offering/offering-01.svg",
    "/graphics/icons/main-offering/offering-02.svg",
    "/graphics/icons/main-offering/offering-03.svg",
  ],
} as const;
