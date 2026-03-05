import { Helmet } from "react-helmet";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  schemaData?: any;
  noindex?: boolean;
}

export const SEO = ({
  title = "Revenuxe | #1 AI Digital Marketing Agency India — 10X Your Revenue",
  description = "Revenuxe is India's top-rated AI-powered digital marketing agency. We deliver guaranteed ROI with expert SEO, Google Ads, Meta Ads, web development & social media marketing. Get a free strategy call today!",
  keywords = "best digital marketing agency India, AI marketing agency, SEO company India, Google Ads management, Meta Ads agency, performance marketing, social media marketing agency, web development company, Revenuxe, digital marketing near me, affordable SEO services",
  canonicalUrl,
  ogImage,
  ogType = "website",
  schemaData,
  noindex = false,
}: SEOProps) => {
  const fullTitle = title.includes("Revenuxe") ? title : `${title} | Revenuxe`;
  
  // Always compute a clean canonical URL (strip query params, hash, trailing slashes)
  const computeCanonical = () => {
    if (canonicalUrl) return canonicalUrl;
    if (typeof window === 'undefined') return 'https://revenuxe.com';
    const path = window.location.pathname.replace(/\/+$/, '') || '/';
    return `https://revenuxe.com${path === '/' ? '' : path}`;
  };
  const currentUrl = computeCanonical();

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Revenuxe",
    "alternateName": "Revenuxe Digital Marketing Agency",
    "description": "India's #1 AI-powered digital marketing agency delivering guaranteed ROI through SEO, performance marketing, web development & social media marketing.",
    "url": "https://revenuxe.com",
    "logo": "https://revenuxe.com/favicon.ico",
    "sameAs": [
      "https://www.linkedin.com/company/revenuxe/"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9886285028",
      "email": "revenuxe@gmail.com",
      "contactType": "Sales",
      "areaServed": ["IN", "SG", "US", "AE", "AU", "GB", "CA", "DE", "FR", "JP", "KR", "ID"],
      "availableLanguage": ["English", "Hindi"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "founder": {
      "@type": "Person",
      "name": "Revenuxe Team"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Revenuxe — AI Digital Marketing Agency",
    "description": "Full-service AI-powered digital marketing agency specializing in SEO, Google Ads, Meta Ads, web development, social media marketing & content marketing with guaranteed ROI.",
    "url": "https://revenuxe.com",
    "telephone": "+91-9886285028",
    "email": "revenuxe@gmail.com",
    "priceRange": "$$",
    "image": "https://revenuxe.com/favicon.ico",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "12.9716",
      "longitude": "77.5946"
    },
    "areaServed": [
      { "@type": "Country", "name": "India" },
      { "@type": "Country", "name": "Singapore" },
      { "@type": "Country", "name": "United States" },
      { "@type": "Country", "name": "United Arab Emirates" },
      { "@type": "Country", "name": "Australia" }
    ],
    "serviceType": [
      "SEO Services",
      "Google Ads Management",
      "Meta Ads Management",
      "Web Development",
      "Social Media Marketing",
      "Content Marketing",
      "Performance Marketing",
      "AI Marketing Solutions",
      "E-Commerce Marketing",
      "Brand Identity Design"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "30",
      "bestRating": "5"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Revenuxe",
    "url": "https://revenuxe.com",
    "description": "India's #1 AI-powered digital marketing agency",
    "publisher": {
      "@type": "Organization",
      "name": "Revenuxe"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://revenuxe.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://revenuxe.com"
      }
    ]
  };

  const schemas = [
    organizationSchema,
    localBusinessSchema,
    websiteSchema,
    breadcrumbSchema,
    ...(schemaData ? (Array.isArray(schemaData) ? schemaData : [schemaData]) : [])
  ];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Revenuxe" />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} />
      <meta name="googlebot" content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} />
      
      <link rel="canonical" href={currentUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta property="og:site_name" content="Revenuxe" />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
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
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};
