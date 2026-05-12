/** Default JSON-LD blocks used on the marketing site (homepage + SEOHead defaults). */

import { SITE_URL_FALLBACK } from "@/lib/seo/siteMetadata";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Revenuxe",
  alternateName: "Revenuxe Digital Marketing Agency",
  description:
    "AI-powered digital marketing agency in India delivering SEO, performance marketing, web development, and social media marketing services.",
  url: "https://www.revenuxe.com",
  logo: "https://www.revenuxe.com/favicon.ico",
  sameAs: ["https://www.linkedin.com/company/revenuxe"],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9886285028",
    email: "revenuxe@gmail.com",
    contactType: "Sales",
    areaServed: ["IN", "SG", "US", "AE", "AU", "GB", "CA", "DE", "FR", "JP", "KR", "ID"],
    availableLanguage: ["English", "Hindi"],
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  founder: {
    "@type": "Person",
    name: "Revenuxe Team",
  },
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Revenuxe AI Digital Marketing Agency",
  description:
    "Full-service AI-powered digital marketing agency specializing in SEO, Google Ads, Meta Ads, web development, social media marketing, and content marketing.",
  url: "https://www.revenuxe.com",
  telephone: "+91-9886285028",
  email: "revenuxe@gmail.com",
  priceRange: "$$",
  image: "https://www.revenuxe.com/favicon.ico",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "12.9716",
    longitude: "77.5946",
  },
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "Country", name: "Singapore" },
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "Australia" },
  ],
  serviceType: [
    "SEO Services",
    "Google Ads Management",
    "Meta Ads Management",
    "Web Development",
    "Social Media Marketing",
    "Content Marketing",
    "Performance Marketing",
    "AI Marketing Solutions",
    "E-Commerce Marketing",
    "Brand Identity Design",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SEO Services",
          url: "https://www.revenuxe.com/services/seo",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Google Ads Management",
          url: "https://www.revenuxe.com/sub-services/google-ads",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web Development",
          url: "https://www.revenuxe.com/services/web-development",
        },
      },
    ],
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Revenuxe",
  url: "https://www.revenuxe.com",
  description: "AI digital marketing agency in India for SEO, paid ads, websites, and growth systems.",
  publisher: {
    "@type": "Organization",
    name: "Revenuxe",
  },
};

export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.revenuxe.com",
    },
  ],
};

export function getDefaultHomepageSchemas(
  extra?: unknown | unknown[],
  siteUrl: string = SITE_URL_FALLBACK,
) {
  const extraList = extra
    ? Array.isArray(extra)
      ? extra
      : [extra]
    : [];
  const base = siteUrl.replace(/\/$/, "");
  return [
    {
      ...organizationSchema,
      url: base,
      logo: `${base}/favicon.ico`,
    },
    {
      ...localBusinessSchema,
      url: base,
      image: `${base}/favicon.ico`,
    },
    {
      ...websiteSchema,
      url: base,
    },
    {
      ...breadcrumbSchema,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: base,
        },
      ],
    },
    ...extraList,
  ];
}
