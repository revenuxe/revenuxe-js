/** Default JSON-LD blocks used on the software company site (homepage + SEOHead defaults). */

import { SITE_URL_FALLBACK } from "@/lib/seo/siteMetadata";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Revenuxe",
  alternateName: "Revenuxe Software Company",
  description:
    "Premium software development company building scalable SaaS products, AI systems, web applications, and high-performance digital platforms.",
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
  name: "Revenuxe Software Development Company",
  description:
    "Software engineering company specializing in SaaS development, AI software systems, web application development, platform modernization, and custom software.",
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
    "SaaS Development",
    "Web Application Development",
    "AI Software Development",
    "Custom Software Development",
    "Platform Modernization",
    "Next.js Development",
    "Startup MVP Development",
    "Enterprise Website Development",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Software Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SaaS Development",
          url: "https://www.revenuxe.com/services/ai-webapp",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Software Systems",
          url: "https://www.revenuxe.com/services/ai-webapp",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web Application Development",
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
  description: "Software development company for SaaS products, AI systems, web applications, and scalable platforms.",
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
