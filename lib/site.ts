/**
 * Site content config — single place to replace placeholders.
 * Anything wrapped in <Placeholder> in components is unverified and must be
 * swapped with approved content (search the codebase for "PLACEHOLDER").
 */

export const brand = {
  name: "PT Marala Jaya Sakti",
  tagline: "Precision in Every Dimension.",
  positioning: "Integrated Geospatial & Engineering Solutions",
  supporting: "Integrated geospatial intelligence and engineering solutions.",
} as const;

export const nav = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Approach", href: "#approach" },
  { label: "Contact", href: "#contact" },
] as const;

export const cta = {
  primary: { label: "Discuss Your Project", href: "#contact" },
  secondary: { label: "Explore Our Capabilities", href: "#capabilities" },
} as const;

/**
 * Official logo. NOT PROVIDED YET. When the file is supplied, place it in
 * /public (e.g. /public/logo.svg) and set it here. Never redraw or recolor it.
 */
export const logo: {
  src: string;
  width: number;
  height: number;
  alt: string;
} | null = null;

/**
 * Hero photograph. NOT PROVIDED YET. Set to a licensed aerial/survey image
 * (stored in /public/images) to replace the contour-field placeholder.
 */
export const heroImage: {
  src: string;
  width: number;
  height: number;
  alt: string;
} | null = null;

