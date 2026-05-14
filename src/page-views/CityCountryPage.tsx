import PageHero from "@/components/PageHero";
import Navigation from "@/components/Navigation";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import FAQ from "@/components/FAQ";
import { getCityFAQs } from "@/data/faqData";
import RecentProjects from "@/components/RecentProjects";
import { absoluteCanonicalUrl, getCanonicalOrigin } from "@/lib/seo/canonical";
import { getCityCountrySeo } from "@/lib/seo/locationPages";

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
    tagline: "Software Development in Central Singapore",
    description: "Transform your business in Central Singapore with cutting-edge AI-driven software strategies. Our data-driven approach helps businesses dominate the competitive Singapore market.",
    keywords: "software development Central Singapore, web development Central Singapore, AI software Singapore",
    metaDescription: "Leading software development agency in Central Singapore. Drive growth with AI-powered strategies and advanced web development solutions."
  },
  "jurong": {
    name: "Jurong",
    country: "Singapore",
    tagline: "Scale Your Business with Software Engineering in Jurong",
    description: "Empower your Jurong business with innovative software development solutions. Our AI-powered strategies deliver measurable results and sustainable growth.",
    keywords: "software development Jurong, web development Jurong, AI software Jurong Singapore",
    metaDescription: "Top software development agency serving Jurong, Singapore. Transform your business with data-driven strategies."
  },
  "woodlands": {
    name: "Woodlands",
    country: "Singapore",
    tagline: "Amplify Your Brand in Woodlands with Software Engineering",
    description: "Partner with Woodlands' trusted software development experts. Our AI-driven strategies help local businesses achieve remarkable growth.",
    keywords: "software development Woodlands, web development Woodlands Singapore, growth software",
    metaDescription: "Premier software development agency in Woodlands, Singapore. Scale your business with innovative AI-powered solutions."
  },
  
  // USA Cities
  "chicago": {
    name: "Chicago",
    country: "USA",
    tagline: "Drive Growth with Software Engineering in Chicago",
    description: "Transform your Chicago business with cutting-edge software product strategies. Our AI-powered solutions help you dominate the Windy City's competitive market.",
    keywords: "software development Chicago, web development Chicago, AI software Chicago Illinois",
    metaDescription: "Leading AI-powered software development agency in Chicago. Drive business growth with advanced web development and data-driven strategies."
  },
  "new-york": {
    name: "New York",
    country: "USA",
    tagline: "Elevate Your Brand with Software Engineering in New York",
    description: "Conquer the New York market with innovative software development solutions. Our AI-driven approach ensures your brand stands out in the Big Apple.",
    keywords: "software development New York, web development NYC, AI software Manhattan",
    metaDescription: "Top software development agency in New York. Transform your business with cutting-edge AI-powered strategies."
  },
  "los-angeles": {
    name: "Los Angeles",
    country: "USA",
    tagline: "Scale Your Business in Los Angeles with Software Engineering",
    description: "Empower your LA business with data-driven software product strategies. Our AI solutions deliver measurable results in the City of Angels.",
    keywords: "software development Los Angeles, web development LA, AI software California",
    metaDescription: "Premier software development agency in Los Angeles. Grow your business with AI-powered web development and software solutions."
  },
  "miami": {
    name: "Miami",
    country: "USA",
    tagline: "Amplify Your Brand in Miami with Software Engineering",
    description: "Transform your Miami business with innovative software development. Our AI-driven strategies help you succeed in South Florida's vibrant market.",
    keywords: "software development Miami, web development Miami Florida, growth software",
    metaDescription: "Leading software development agency in Miami. Drive growth with AI-powered strategies and advanced web development."
  },
  "san-francisco": {
    name: "San Francisco",
    country: "USA",
    tagline: "Drive Digital Success in San Francisco",
    description: "Partner with San Francisco's trusted software development experts. Our AI-powered solutions help tech-savvy businesses achieve remarkable growth.",
    keywords: "software development San Francisco, web development SF Bay Area, AI software",
    metaDescription: "Top-rated software development agency in San Francisco. Scale your business with innovative AI-driven strategies."
  },
  "seattle": {
    name: "Seattle",
    country: "USA",
    tagline: "Elevate Your Business in Seattle with Software Engineering",
    description: "Transform your Seattle business with cutting-edge software development. Our data-driven approach delivers results in the Emerald City.",
    keywords: "software development Seattle, web development Seattle Washington, growth software",
    metaDescription: "Premier software development agency in Seattle. Grow your business with AI-powered software solutions."
  },
  
  // UAE Cities
  "dubai": {
    name: "Dubai",
    country: "UAE",
    tagline: "Scale Your Business in Dubai with Software Engineering",
    description: "Transform your Dubai business with innovative software product strategies. Our AI-powered solutions help you dominate the competitive UAE market.",
    keywords: "software development Dubai, web development Dubai UAE, AI software Emirates",
    metaDescription: "Leading software development agency in Dubai. Drive exponential growth with AI-powered strategies and advanced web development."
  },
  "abu-dhabi": {
    name: "Abu Dhabi",
    country: "UAE",
    tagline: "Amplify Your Brand in Abu Dhabi with Software Engineering",
    description: "Empower your Abu Dhabi business with data-driven software development. Our AI solutions deliver measurable results in the UAE's capital.",
    keywords: "software development Abu Dhabi, web development Abu Dhabi UAE, growth software",
    metaDescription: "Top software development agency in Abu Dhabi. Transform your business with cutting-edge AI-powered solutions."
  },
  "sharjah": {
    name: "Sharjah",
    country: "UAE",
    tagline: "Drive Growth with Software Engineering in Sharjah",
    description: "Partner with Sharjah's trusted software development experts. Our AI-driven strategies help businesses achieve remarkable growth in the UAE.",
    keywords: "software development Sharjah, web development Sharjah UAE, AI software",
    metaDescription: "Premier software development agency in Sharjah. Scale your business with innovative AI-powered software strategies."
  },
  
  // Indonesia Cities
  "jakarta": {
    name: "Jakarta",
    country: "Indonesia",
    tagline: "Transform Your Business in Jakarta with Software Engineering",
    description: "Elevate your Jakarta business with cutting-edge software product strategies. Our AI-powered solutions help you succeed in Indonesia's capital.",
    keywords: "software development Jakarta, web development Jakarta Indonesia, AI software",
    metaDescription: "Leading software development agency in Jakarta. Drive business growth with AI-powered web development and software solutions."
  },
  "surabaya": {
    name: "Surabaya",
    country: "Indonesia",
    tagline: "Scale Your Business in Surabaya with Software Engineering",
    description: "Transform your Surabaya business with innovative software development. Our AI-driven approach delivers measurable results in East Java.",
    keywords: "software development Surabaya, web development Surabaya Indonesia, growth software",
    metaDescription: "Top software development agency in Surabaya. Grow your business with data-driven strategies and advanced web development."
  },
  "bali": {
    name: "Bali",
    country: "Indonesia",
    tagline: "Amplify Your Brand in Bali with Software Engineering",
    description: "Empower your Bali business with data-driven software product strategies. Our AI solutions help you thrive in Indonesia's tourism hub.",
    keywords: "software development Bali, web development Bali Indonesia, AI software tourism",
    metaDescription: "Premier software development agency in Bali. Transform your business with AI-powered software and web development solutions."
  },
  "bandung": {
    name: "Bandung",
    country: "Indonesia",
    tagline: "Drive Digital Success in Bandung with Software Engineering",
    description: "Partner with Bandung's trusted software development experts. Our AI-powered strategies help businesses achieve remarkable growth in West Java.",
    keywords: "software development Bandung, web development Bandung Indonesia, growth software",
    metaDescription: "Leading software development agency in Bandung. Scale your business with innovative AI-driven strategies."
  },
  
  // Australia Cities
  "sydney": {
    name: "Sydney",
    country: "Australia",
    tagline: "Elevate Your Brand in Sydney with Software Engineering",
    description: "Transform your Sydney business with cutting-edge software product strategies. Our AI-powered solutions help you dominate Australia's largest city.",
    keywords: "software development Sydney, web development Sydney Australia, AI software NSW",
    metaDescription: "Top software development agency in Sydney. Drive growth with AI-powered strategies and advanced web development solutions."
  },
  "melbourne": {
    name: "Melbourne",
    country: "Australia",
    tagline: "Scale Your Business in Melbourne with Software Engineering",
    description: "Empower your Melbourne business with innovative software development. Our AI-driven approach delivers measurable results in Victoria's capital.",
    keywords: "software development Melbourne, web development Melbourne Australia, growth software Victoria",
    metaDescription: "Leading software development agency in Melbourne. Transform your business with data-driven AI strategies."
  },
  "brisbane": {
    name: "Brisbane",
    country: "Australia",
    tagline: "Amplify Your Brand in Brisbane with Software Engineering",
    description: "Transform your Brisbane business with data-driven software product strategies. Our AI solutions help you succeed in Queensland's capital.",
    keywords: "software development Brisbane, web development Brisbane Australia, AI software Queensland",
    metaDescription: "Premier software development agency in Brisbane. Grow your business with AI-powered software and web development."
  },
  "perth": {
    name: "Perth",
    country: "Australia",
    tagline: "Drive Growth in Perth with Software Engineering",
    description: "Partner with Perth's trusted software development experts. Our AI-powered strategies help businesses achieve remarkable growth in Western Australia.",
    keywords: "software development Perth, web development Perth Australia, growth software WA",
    metaDescription: "Top-rated software development agency in Perth. Scale your business with innovative AI-driven solutions."
  }
};

type RecentProjectsItem = {
  id: string;
  title: string;
  info?: string | null;
  logo_url?: string | null;
  website_url?: string | null;
  short_description?: string | null;
};

const CityCountryPage = async ({
  country,
  city,
  recentProjects,
}: {
  country?: string;
  city?: string;
  recentProjects: RecentProjectsItem[];
}) => {
  const citySlug = (city || "").toLowerCase();
  const countrySlug = (country || "").toLowerCase();
  const fallbackSeo = getCityCountrySeo(countrySlug, citySlug);
  const cityInfo = cityData[citySlug] ?? {
    name: fallbackSeo.cityName,
    country: fallbackSeo.countryName,
    tagline: fallbackSeo.tagline,
    description: fallbackSeo.description,
    keywords: fallbackSeo.keywords,
    metaDescription: fallbackSeo.description,
  };

  const origin = await getCanonicalOrigin();
  const canonicalUrl = await absoluteCanonicalUrl(
    `/country/${countrySlug}/${citySlug}`,
  );
  const countryUrl = await absoluteCanonicalUrl(`/country/${countrySlug}`);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title={`Software Development Company in ${cityInfo.name}, ${cityInfo.country} | Revenuxe`}
        description={cityInfo.metaDescription}
        keywords={cityInfo.keywords}
        canonicalUrl={canonicalUrl}
        standardTags={false}
        schemaData={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": origin },
            { "@type": "ListItem", "position": 2, "name": cityInfo.country, "item": countryUrl },
            { "@type": "ListItem", "position": 3, "name": cityInfo.name, "item": canonicalUrl }
          ]
        }}
      />
      <Navigation />
      
      <PageHero
        title={`Software Company in`}
        highlight={cityInfo.name}
        subtitle={cityInfo.tagline}
      />

      <Stats />
      <RecentProjects projects={recentProjects} />
      <Services />
      <Process />
      <WhyChooseUs cityName={cityInfo.name} />
      <Testimonials />
      <FAQ items={getCityFAQs(cityInfo.name)} />
      <CTA />
      <Footer />
    </div>
  );
};

export default CityCountryPage;
