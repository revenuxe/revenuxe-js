/** Default JSON-LD blocks used on the marketing site (homepage + SEOHead defaults). */

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Revenuxe",
  alternateName: "Revenuxe Digital Marketing Agency",
  description:
    "India's #1 AI-powered digital marketing agency delivering guaranteed ROI through SEO, performance marketing, web development & social media marketing.",
  url: "https://revenuxe.com",
  logo: "https://revenuxe.com/favicon.ico",
  sameAs: ["https://www.linkedin.com/company/revenuxe/"],
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
  name: "Revenuxe — AI Digital Marketing Agency",
  description:
    "Full-service AI-powered digital marketing agency specializing in SEO, Google Ads, Meta Ads, web development, social media marketing & content marketing with guaranteed ROI.",
  url: "https://revenuxe.com",
  telephone: "+91-9886285028",
  email: "revenuxe@gmail.com",
  priceRange: "$$",
  image: "https://revenuxe.com/favicon.ico",
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
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "30",
    bestRating: "5",
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
  url: "https://revenuxe.com",
  description: "India's #1 AI-powered digital marketing agency",
  publisher: {
    "@type": "Organization",
    name: "Revenuxe",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://revenuxe.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
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
      item: "https://revenuxe.com",
    },
  ],
};

export function getDefaultHomepageSchemas(extra?: unknown | unknown[]) {
  const extraList = extra
    ? Array.isArray(extra)
      ? extra
      : [extra]
    : [];
  return [
    organizationSchema,
    localBusinessSchema,
    websiteSchema,
    breadcrumbSchema,
    ...extraList,
  ];
}
