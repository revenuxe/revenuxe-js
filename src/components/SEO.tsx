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
  title = "AI Digital Marketing Agency | Arrowmind - SEO, Web Development & Performance Marketing",
  description = "Leading digital marketing agency in India specializing in AI-powered SEO, web development, performance marketing, social media marketing, and content marketing. Drive growth with data-driven strategies.",
  keywords = "digital marketing agency, SEO services, web development, performance marketing, social media marketing, AI marketing, content marketing, Google Ads management, Meta Ads, digital marketing India",
  canonicalUrl,
  ogImage = "https://storage.googleapis.com/gpt-engineer-file-uploads/z6qqcJ4jUPRJxMSIzgHI8NBwYKG3/social-images/social-1760256500718-Arrowmind image.png",
  ogType = "website",
  schemaData,
}: SEOProps) => {
  const fullTitle = title.includes("Arrowmind") ? title : `${title} | Arrowmind`;
  const currentUrl = canonicalUrl || (typeof window !== 'undefined' ? window.location.href : '');

  // Default Organization Schema
  const defaultOrganizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Arrowmind",
    "description": "Leading AI-powered digital marketing agency specializing in SEO, web development, and performance marketing",
    "url": "https://arrowmind.in",
    "logo": "https://storage.googleapis.com/gpt-engineer-file-uploads/z6qqcJ4jUPRJxMSIzgHI8NBwYKG3/uploads/1760256451592-android-chrome-512x512.png",
    "sameAs": [
      "https://www.linkedin.com/company/arrowmind-agency/"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "founder@arrowmind.in",
      "contactType": "Customer Service"
    },
    "areaServed": "IN",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    }
  };

  // Default LocalBusiness Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Arrowmind Digital Marketing Agency",
    "description": "Professional digital marketing services including SEO, web development, performance marketing, and AI-powered solutions",
    "url": "https://arrowmind.in",
    "telephone": "+91",
    "email": "founder@arrowmind.in",
    "priceRange": "$$",
    "image": ogImage,
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

  // WebSite Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Arrowmind",
    "url": "https://arrowmind.in",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://arrowmind.in/search?q={search_term_string}",
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
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Arrowmind" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Arrowmind" />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO Tags */}
      <meta name="language" content="English" />
      <meta name="geo.region" content="IN" />
      <meta name="geo.placename" content="India" />
      
      {/* Schema.org Structured Data */}
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};
