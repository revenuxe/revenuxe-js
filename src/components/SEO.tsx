import { Helmet } from "react-helmet";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  schemaData?: any;
}

export const SEO = ({
  title = "AI Digital Marketing Agency | Revenuxe - SEO, Web Development & Performance Marketing",
  description = "Leading digital marketing agency in India specializing in AI-powered SEO, web development, performance marketing, social media marketing, and content marketing. Drive growth with data-driven strategies.",
  keywords = "digital marketing agency, SEO services, web development, performance marketing, social media marketing, AI marketing, content marketing, Google Ads management, Meta Ads, digital marketing India",
  canonicalUrl,
  ogImage,
  ogType = "website",
  schemaData,
}: SEOProps) => {
  const fullTitle = title.includes("Revenuxe") ? title : `${title} | Revenuxe`;
  const currentUrl = canonicalUrl || (typeof window !== 'undefined' ? window.location.href : '');

  const defaultOrganizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Revenuxe",
    "description": "Leading AI-powered digital marketing agency specializing in SEO, web development, and performance marketing",
    "url": "https://revenuxe.com",
    "sameAs": [],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "info@revenuxe.com",
      "contactType": "Customer Service"
    },
    "areaServed": "IN",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Revenuxe Digital Marketing Agency",
    "description": "Professional digital marketing services including SEO, web development, performance marketing, and AI-powered solutions",
    "url": "https://revenuxe.com",
    "telephone": "+91",
    "email": "info@revenuxe.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "serviceType": [
      "SEO Services",
      "Web Development",
      "Performance Marketing",
      "Social Media Marketing",
      "Content Marketing",
      "AI Marketing Solutions"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Revenuxe",
    "url": "https://revenuxe.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://revenuxe.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const schemas = [
    defaultOrganizationSchema,
    localBusinessSchema,
    websiteSchema,
    ...(schemaData ? (Array.isArray(schemaData) ? schemaData : [schemaData]) : [])
  ];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Revenuxe" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta property="og:site_name" content="Revenuxe" />
      <meta property="og:locale" content="en_IN" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      
      <meta name="language" content="English" />
      <meta name="geo.region" content="IN" />
      <meta name="geo.placename" content="India" />
      
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};
