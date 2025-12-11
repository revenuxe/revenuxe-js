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
  title = "#1 Digital Marketing Agency in India | SEO, PPC, Social Media Marketing | Arrowmind",
  description = "Arrowmind is India's leading digital marketing agency. We offer expert SEO services, Google Ads management, social media marketing, website development, and AI-powered marketing solutions. Get 300%+ ROI with our data-driven strategies. Free consultation available!",
  keywords = "digital marketing agency India, SEO services India, Google Ads management, social media marketing agency, website development company, best digital marketing company, SEO company India, PPC advertising, Facebook marketing, Instagram marketing, content marketing, online marketing services, lead generation, e-commerce marketing, B2B marketing, startup marketing, digital marketing Bangalore, digital marketing Mumbai, digital marketing Delhi, digital marketing Hyderabad",
  canonicalUrl,
  ogImage = "https://storage.googleapis.com/gpt-engineer-file-uploads/z6qqcJ4jUPRJxMSIzgHI8NBwYKG3/social-images/social-1760256500718-Arrowmind image.png",
  ogType = "website",
  schemaData,
}: SEOProps) => {
  const fullTitle = title.includes("Arrowmind") ? title : `${title} | Arrowmind`;
  const currentUrl = canonicalUrl || (typeof window !== 'undefined' ? window.location.href : 'https://arrowmind.in');

  // Default Organization Schema
  const defaultOrganizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Arrowmind",
    "alternateName": "Arrowmind Digital Marketing Agency",
    "description": "India's leading AI-powered digital marketing agency specializing in SEO, Google Ads, social media marketing, and web development",
    "url": "https://arrowmind.in",
    "logo": "https://storage.googleapis.com/gpt-engineer-file-uploads/z6qqcJ4jUPRJxMSIzgHI8NBwYKG3/uploads/1760256451592-android-chrome-512x512.png",
    "sameAs": [
      "https://www.linkedin.com/company/arrowmind-agency/"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "founder@arrowmind.in",
      "contactType": "Customer Service",
      "availableLanguage": ["English", "Hindi"]
    },
    "areaServed": ["IN", "US", "GB", "AE", "SG", "AU", "CA"],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressLocality": "Bangalore"
    },
    "foundingDate": "2021",
    "numberOfEmployees": "10-50"
  };

  // Digital Marketing Agency Schema
  const digitalMarketingAgencySchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Arrowmind Digital Marketing Agency",
    "description": "Full-service digital marketing agency offering SEO services, Google Ads management, social media marketing, website development, and AI-powered marketing solutions for businesses in India and globally",
    "url": "https://arrowmind.in",
    "telephone": "+91",
    "email": "founder@arrowmind.in",
    "priceRange": "₹₹",
    "image": ogImage,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressLocality": "Bangalore",
      "addressRegion": "Karnataka"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "12.9716",
      "longitude": "77.5946"
    },
    "areaServed": [
      { "@type": "Country", "name": "India" },
      { "@type": "Country", "name": "United States" },
      { "@type": "Country", "name": "United Kingdom" },
      { "@type": "Country", "name": "UAE" },
      { "@type": "Country", "name": "Singapore" },
      { "@type": "Country", "name": "Australia" },
      { "@type": "Country", "name": "Canada" }
    ],
    "serviceType": [
      "Search Engine Optimization (SEO)",
      "Google Ads Management",
      "Pay-Per-Click Advertising",
      "Social Media Marketing",
      "Facebook Advertising",
      "Instagram Marketing",
      "LinkedIn Marketing",
      "Content Marketing",
      "Website Development",
      "E-commerce Development",
      "AI Chatbots",
      "Marketing Automation",
      "Lead Generation",
      "Conversion Rate Optimization"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Marketing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO Services",
            "description": "Comprehensive SEO services to rank your website on Google's first page"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Google Ads Management",
            "description": "Expert PPC campaign management with 300%+ ROI guarantee"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Social Media Marketing",
            "description": "Full-service social media management and advertising"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "50",
      "bestRating": "5"
    }
  };

  // WebSite Schema with SearchAction
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Arrowmind Digital Marketing Agency",
    "url": "https://arrowmind.in",
    "description": "India's #1 Digital Marketing Agency - SEO, PPC, Social Media Marketing & Web Development",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://arrowmind.in/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  // FAQ Schema for common questions
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the best digital marketing agency in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Arrowmind is one of the best digital marketing agencies in India, offering comprehensive services including SEO, Google Ads management, social media marketing, and website development with proven results and 300%+ ROI for clients."
        }
      },
      {
        "@type": "Question",
        "name": "How much does digital marketing cost in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Digital marketing costs in India vary based on services needed. SEO packages typically start from ₹15,000/month, PPC management from ₹10,000/month, and social media marketing from ₹20,000/month. Contact Arrowmind for a free consultation and customized quote."
        }
      },
      {
        "@type": "Question",
        "name": "How can digital marketing help my business grow?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Digital marketing helps businesses grow by increasing online visibility, driving targeted traffic, generating quality leads, and improving conversions. With SEO, your website ranks higher on Google. With PPC, you get immediate targeted traffic. Social media builds brand awareness and engagement."
        }
      }
    ]
  };

  const schemas = [
    defaultOrganizationSchema,
    digitalMarketingAgencySchema,
    websiteSchema,
    faqSchema,
    ...(schemaData ? (Array.isArray(schemaData) ? schemaData : [schemaData]) : [])
  ];

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Arrowmind Digital Marketing Agency" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Arrowmind Digital Marketing Agency" />
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
      <meta name="geo.position" content="12.9716;77.5946" />
      <meta name="ICBM" content="12.9716, 77.5946" />
      
      {/* Mobile & PWA */}
      <meta name="theme-color" content="#dc2626" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Schema.org Structured Data */}
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};
