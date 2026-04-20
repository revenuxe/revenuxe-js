import type { ReactNode } from "react";
import { getDefaultHomepageSchemas } from "@/lib/seo/homepageSchemas";
import logo from "@/assets/revenuxe-logo.webp";
import {
  defaultSiteDescription,
  defaultSiteKeywords,
  defaultSiteTitle,
  SITE_URL_FALLBACK,
} from "@/lib/seo/siteMetadata";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  schemaData?: any;
  noindex?: boolean;
  /**
   * Optional extra head nodes (rare; used when a route needs custom tags).
   * Kept to avoid editing many call-sites later.
   */
  children?: ReactNode;
}

const MIN_META_DESCRIPTION_LENGTH = 70;
const MAX_META_DESCRIPTION_LENGTH = 160;

const trimDescription = (value: string) => {
  if (value.length <= MAX_META_DESCRIPTION_LENGTH) return value;

  const cutoff = value.lastIndexOf(" ", MAX_META_DESCRIPTION_LENGTH - 3);
  const safeCutoff = cutoff > 80 ? cutoff : MAX_META_DESCRIPTION_LENGTH - 3;
  return `${value.slice(0, safeCutoff).trim()}...`;
};

const extendDescription = (value: string) => {
  if (!value) {
    return "Discover Revenuxe's AI-powered SEO, paid media, websites, and growth solutions.";
  }

  if (value.length >= MIN_META_DESCRIPTION_LENGTH) return value;

  const suffix =
    " Discover Revenuxe's AI-powered SEO, paid media, websites, and growth solutions.";

  return trimDescription(`${value.replace(/[.!?\s]*$/, ".")} ${suffix}`.replace(/\s+/g, " ").trim());
};

/**
 * SSR-safe SEO head for Next.js App Router.
 * - No `window` usage.
 * - Emits canonical, OpenGraph/Twitter tags, and JSON-LD scripts.
 */
export const SEOHead = ({
  title = defaultSiteTitle,
  description = defaultSiteDescription,
  keywords = defaultSiteKeywords,
  canonicalUrl,
  ogImage,
  ogType = "website",
  schemaData,
  noindex = false,
  children,
}: SEOHeadProps) => {
  const fullTitle = title.includes("Revenuxe") ? title : `${title} | Revenuxe`;

  const currentUrl = canonicalUrl ?? SITE_URL_FALLBACK;
  const normalizedDescription = extendDescription(trimDescription(description.replace(/\s+/g, " ").trim()));
  const resolvedOgImage = ogImage ?? `${SITE_URL_FALLBACK}${logo.src}`;
  const robotsContent = noindex
    ? "noindex, nofollow"
    : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

  const schemas = getDefaultHomepageSchemas(schemaData);

  return (
    <>
      <title>{fullTitle}</title>

      <meta name="description" content={normalizedDescription} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Revenuxe" />

      <meta name="robots" content={robotsContent} />
      <meta name="googlebot" content={robotsContent} />

      <link rel="canonical" href={currentUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={normalizedDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={resolvedOgImage} />
      <meta property="og:image:alt" content={`${fullTitle} preview image`} />
      <meta property="og:site_name" content="Revenuxe" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={normalizedDescription} />
      <meta name="twitter:image" content={resolvedOgImage} />
      <meta name="twitter:image:alt" content={`${fullTitle} preview image`} />
      <meta name="twitter:site" content="@revenuxe" />

      {/* Geo & Language */}
      <meta name="language" content="English" />
      <meta name="geo.region" content="IN" />
      <meta name="geo.placename" content="India" />
      <meta httpEquiv="content-language" content="en-IN" />

      {/* Mobile */}
      <meta name="theme-color" content="#1e3a5f" />
      <meta name="mobile-web-app-capable" content="yes" />

      {/* Structured Data */}
      {schemas.map((schema: any, index: number) => (
        <script
          key={index}
          type="application/ld+json"
          // JSON-LD must be a string, not an object.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {children}
    </>
  );
};
