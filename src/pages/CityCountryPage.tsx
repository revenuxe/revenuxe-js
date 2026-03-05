import { useLocation } from "react-router-dom";
import PageHero from "@/components/PageHero";
import Navigation from "@/components/Navigation";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { GetStartedDialog } from "@/components/GetStartedDialog";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import FAQ from "@/components/FAQ";
import { getCityFAQs } from "@/data/faqData";

const cityData: Record<string, {
  name: string;
  country: string;
  tagline: string;
  description: string;
  keywords: string;
  metaDescription: string;
}> = {
  // Singapore Cities
  "central-singapore": {
    name: "Central Singapore",
    country: "Singapore",
    tagline: "AI-Powered Digital Marketing in Central Singapore",
    description: "Transform your business in Central Singapore with cutting-edge AI-driven marketing strategies. Our data-driven approach helps businesses dominate the competitive Singapore market.",
    keywords: "digital marketing Central Singapore, SEO Central Singapore, AI marketing Singapore",
    metaDescription: "Leading digital marketing agency in Central Singapore. Drive growth with AI-powered strategies and advanced SEO solutions."
  },
  "jurong": {
    name: "Jurong",
    country: "Singapore",
    tagline: "Scale Your Business with AI Marketing in Jurong",
    description: "Empower your Jurong business with innovative digital marketing solutions. Our AI-powered strategies deliver measurable results and sustainable growth.",
    keywords: "digital marketing Jurong, SEO Jurong, AI marketing Jurong Singapore",
    metaDescription: "Top digital marketing agency serving Jurong, Singapore. Transform your business with data-driven strategies."
  },
  "woodlands": {
    name: "Woodlands",
    country: "Singapore",
    tagline: "Amplify Your Brand in Woodlands with AI Marketing",
    description: "Partner with Woodlands' trusted digital marketing experts. Our AI-driven strategies help local businesses achieve remarkable growth.",
    keywords: "digital marketing Woodlands, SEO Woodlands Singapore, growth marketing",
    metaDescription: "Premier digital marketing agency in Woodlands, Singapore. Scale your business with innovative AI-powered solutions."
  },
  
  // USA Cities
  "chicago": {
    name: "Chicago",
    country: "USA",
    tagline: "Drive Growth with AI Marketing in Chicago",
    description: "Transform your Chicago business with cutting-edge digital marketing strategies. Our AI-powered solutions help you dominate the Windy City's competitive market.",
    keywords: "digital marketing Chicago, SEO Chicago, AI marketing Chicago Illinois",
    metaDescription: "Leading AI-powered digital marketing agency in Chicago. Drive business growth with advanced SEO and data-driven strategies."
  },
  "new-york": {
    name: "New York",
    country: "USA",
    tagline: "Elevate Your Brand with AI Marketing in New York",
    description: "Conquer the New York market with innovative digital marketing solutions. Our AI-driven approach ensures your brand stands out in the Big Apple.",
    keywords: "digital marketing New York, SEO NYC, AI marketing Manhattan",
    metaDescription: "Top digital marketing agency in New York. Transform your business with cutting-edge AI-powered strategies."
  },
  "los-angeles": {
    name: "Los Angeles",
    country: "USA",
    tagline: "Scale Your Business in Los Angeles with AI Marketing",
    description: "Empower your LA business with data-driven digital marketing strategies. Our AI solutions deliver measurable results in the City of Angels.",
    keywords: "digital marketing Los Angeles, SEO LA, AI marketing California",
    metaDescription: "Premier digital marketing agency in Los Angeles. Grow your business with AI-powered SEO and marketing solutions."
  },
  "miami": {
    name: "Miami",
    country: "USA",
    tagline: "Amplify Your Brand in Miami with AI Marketing",
    description: "Transform your Miami business with innovative digital marketing. Our AI-driven strategies help you succeed in South Florida's vibrant market.",
    keywords: "digital marketing Miami, SEO Miami Florida, growth marketing",
    metaDescription: "Leading digital marketing agency in Miami. Drive growth with AI-powered strategies and advanced SEO."
  },
  "san-francisco": {
    name: "San Francisco",
    country: "USA",
    tagline: "Drive Digital Success in San Francisco",
    description: "Partner with San Francisco's trusted digital marketing experts. Our AI-powered solutions help tech-savvy businesses achieve remarkable growth.",
    keywords: "digital marketing San Francisco, SEO SF Bay Area, AI marketing",
    metaDescription: "Top-rated digital marketing agency in San Francisco. Scale your business with innovative AI-driven strategies."
  },
  "seattle": {
    name: "Seattle",
    country: "USA",
    tagline: "Elevate Your Business in Seattle with AI Marketing",
    description: "Transform your Seattle business with cutting-edge digital marketing. Our data-driven approach delivers results in the Emerald City.",
    keywords: "digital marketing Seattle, SEO Seattle Washington, growth marketing",
    metaDescription: "Premier digital marketing agency in Seattle. Grow your business with AI-powered marketing solutions."
  },
  
  // UAE Cities
  "dubai": {
    name: "Dubai",
    country: "UAE",
    tagline: "Scale Your Business in Dubai with AI Marketing",
    description: "Transform your Dubai business with innovative digital marketing strategies. Our AI-powered solutions help you dominate the competitive UAE market.",
    keywords: "digital marketing Dubai, SEO Dubai UAE, AI marketing Emirates",
    metaDescription: "Leading digital marketing agency in Dubai. Drive exponential growth with AI-powered strategies and advanced SEO."
  },
  "abu-dhabi": {
    name: "Abu Dhabi",
    country: "UAE",
    tagline: "Amplify Your Brand in Abu Dhabi with AI Marketing",
    description: "Empower your Abu Dhabi business with data-driven digital marketing. Our AI solutions deliver measurable results in the UAE's capital.",
    keywords: "digital marketing Abu Dhabi, SEO Abu Dhabi UAE, growth marketing",
    metaDescription: "Top digital marketing agency in Abu Dhabi. Transform your business with cutting-edge AI-powered solutions."
  },
  "sharjah": {
    name: "Sharjah",
    country: "UAE",
    tagline: "Drive Growth with AI Marketing in Sharjah",
    description: "Partner with Sharjah's trusted digital marketing experts. Our AI-driven strategies help businesses achieve remarkable growth in the UAE.",
    keywords: "digital marketing Sharjah, SEO Sharjah UAE, AI marketing",
    metaDescription: "Premier digital marketing agency in Sharjah. Scale your business with innovative AI-powered marketing strategies."
  },
  
  // Indonesia Cities
  "jakarta": {
    name: "Jakarta",
    country: "Indonesia",
    tagline: "Transform Your Business in Jakarta with AI Marketing",
    description: "Elevate your Jakarta business with cutting-edge digital marketing strategies. Our AI-powered solutions help you succeed in Indonesia's capital.",
    keywords: "digital marketing Jakarta, SEO Jakarta Indonesia, AI marketing",
    metaDescription: "Leading digital marketing agency in Jakarta. Drive business growth with AI-powered SEO and marketing solutions."
  },
  "surabaya": {
    name: "Surabaya",
    country: "Indonesia",
    tagline: "Scale Your Business in Surabaya with AI Marketing",
    description: "Transform your Surabaya business with innovative digital marketing. Our AI-driven approach delivers measurable results in East Java.",
    keywords: "digital marketing Surabaya, SEO Surabaya Indonesia, growth marketing",
    metaDescription: "Top digital marketing agency in Surabaya. Grow your business with data-driven strategies and advanced SEO."
  },
  "bali": {
    name: "Bali",
    country: "Indonesia",
    tagline: "Amplify Your Brand in Bali with AI Marketing",
    description: "Empower your Bali business with data-driven digital marketing strategies. Our AI solutions help you thrive in Indonesia's tourism hub.",
    keywords: "digital marketing Bali, SEO Bali Indonesia, AI marketing tourism",
    metaDescription: "Premier digital marketing agency in Bali. Transform your business with AI-powered marketing and SEO solutions."
  },
  "bandung": {
    name: "Bandung",
    country: "Indonesia",
    tagline: "Drive Digital Success in Bandung with AI Marketing",
    description: "Partner with Bandung's trusted digital marketing experts. Our AI-powered strategies help businesses achieve remarkable growth in West Java.",
    keywords: "digital marketing Bandung, SEO Bandung Indonesia, growth marketing",
    metaDescription: "Leading digital marketing agency in Bandung. Scale your business with innovative AI-driven strategies."
  },
  
  // Australia Cities
  "sydney": {
    name: "Sydney",
    country: "Australia",
    tagline: "Elevate Your Brand in Sydney with AI Marketing",
    description: "Transform your Sydney business with cutting-edge digital marketing strategies. Our AI-powered solutions help you dominate Australia's largest city.",
    keywords: "digital marketing Sydney, SEO Sydney Australia, AI marketing NSW",
    metaDescription: "Top digital marketing agency in Sydney. Drive growth with AI-powered strategies and advanced SEO solutions."
  },
  "melbourne": {
    name: "Melbourne",
    country: "Australia",
    tagline: "Scale Your Business in Melbourne with AI Marketing",
    description: "Empower your Melbourne business with innovative digital marketing. Our AI-driven approach delivers measurable results in Victoria's capital.",
    keywords: "digital marketing Melbourne, SEO Melbourne Australia, growth marketing Victoria",
    metaDescription: "Leading digital marketing agency in Melbourne. Transform your business with data-driven AI strategies."
  },
  "brisbane": {
    name: "Brisbane",
    country: "Australia",
    tagline: "Amplify Your Brand in Brisbane with AI Marketing",
    description: "Transform your Brisbane business with data-driven digital marketing strategies. Our AI solutions help you succeed in Queensland's capital.",
    keywords: "digital marketing Brisbane, SEO Brisbane Australia, AI marketing Queensland",
    metaDescription: "Premier digital marketing agency in Brisbane. Grow your business with AI-powered marketing and SEO."
  },
  "perth": {
    name: "Perth",
    country: "Australia",
    tagline: "Drive Growth in Perth with AI Marketing",
    description: "Partner with Perth's trusted digital marketing experts. Our AI-powered strategies help businesses achieve remarkable growth in Western Australia.",
    keywords: "digital marketing Perth, SEO Perth Australia, growth marketing WA",
    metaDescription: "Top-rated digital marketing agency in Perth. Scale your business with innovative AI-driven solutions."
  }
};

const CityCountryPage = () => {
  const location = useLocation();
  const pathParts = location.pathname.split("/");
  const citySlug = pathParts[pathParts.length - 1];
  const city = cityData[citySlug];
  const [dialogOpen, setDialogOpen] = useState(false);

  const countrySlug = pathParts[pathParts.length - 2];

  if (!city) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">City Not Found</h1>
          <p className="text-muted-foreground">The city you're looking for doesn't exist.</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title={`AI-Powered Digital Marketing Agency in ${city.name}, ${city.country} | Revenuxe`}
        description={city.metaDescription}
        keywords={city.keywords}
        canonicalUrl={`https://revenuxe.com/country/${countrySlug}/${citySlug}`}
        schemaData={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://revenuxe.com" },
            { "@type": "ListItem", "position": 2, "name": city.country, "item": `https://revenuxe.com/country/${countrySlug}` },
            { "@type": "ListItem", "position": 3, "name": city.name, "item": `https://revenuxe.com/country/${countrySlug}/${citySlug}` }
          ]
        }}
      />
      <Navigation />
      
      <PageHero
        title={`AI Marketing Agency in`}
        highlight={city.name}
        subtitle={city.tagline}
      />

      <Stats />
      <Services />
      <Process />
      <WhyChooseUs cityName={city.name} />
      <Testimonials />
      <FAQ items={getCityFAQs(city.name)} />
      <CTA />
      <Footer />

      <GetStartedDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </div>
  );
};

export default CityCountryPage;
