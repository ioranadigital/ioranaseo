/**
 * Central site configuration for IORANA SEO 2.0
 * Used for metadata, canonicals, sitemap, robots
 */

const PRODUCTION_ORIGIN = "https://www.ioranaseo.com";

export const siteConfig = {
  /**
   * Production origin (no trailing slash)
   * Used for canonical URLs and sitemap
   */
  origin: process.env.NEXT_PUBLIC_DOMAIN || PRODUCTION_ORIGIN,

  /**
   * Get full URL for a path
   */
  url: (path: string = "") => {
    const origin = process.env.NEXT_PUBLIC_DOMAIN || PRODUCTION_ORIGIN;
    const normalizedPath = path.startsWith("/") ? path : `/${path}`;
    return `${origin}${normalizedPath}`;
  },

  /**
   * Metadata base for Next.js metadataBase
   */
  get metadataBase() {
    return new URL(this.origin);
  },

  /**
   * All indexable routes for sitemap
   * /diagnostico is noindex, so excluded
   * /legal pages included based on current strategy
   */
  indexableRoutes: [
    "",
    "/web-para-empresas",
    "/soluciones",
    "/soluciones/visibilidad",
    "/soluciones/campanas",
    "/soluciones/conversion",
    "/como-trabajamos",
    "/contacto",
    "/legal/privacidad",
    "/legal/cookies",
    "/legal/aviso-legal",
  ] as const,

  /**
   * Non-indexable routes (noindex, follow)
   * /diagnostico is conversion funnel, should not be indexed
   */
  noindexRoutes: ["/diagnostico"] as const,
};
