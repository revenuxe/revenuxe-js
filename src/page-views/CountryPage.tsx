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
import { getCountryFAQs } from "@/data/faqData";
import RecentProjects from "@/components/RecentProjects";
import { absoluteCanonicalUrl, getCanonicalOrigin } from "@/lib/seo/canonical";
import Link from "next/link";

const countryData: Record<string, {
  name: string;
  tagline: string;
  description: string;
  keywords: string;
  metaDescription: string;
  cities: Array<{ name: string; slug: string }>;
}> = {
  singapore: {
    name: "Singapore",
    tagline: "Elevate Your Brand with AI-Powered Software in Singapore",
    description: "Transform your business with cutting-edge software product strategies tailored for Singapore's dynamic market. Our AI-powered solutions help you dominate search rankings and drive exponential growth in the Lion City.",
    keywords: "software development Singapore, AI software Singapore, web development Singapore, growth software Singapore",
    metaDescription: "Leading AI-powered software development agency in Singapore. Transform your business with data-driven strategies, advanced web development, and growth software solutions.",
    cities: [
      { name: "Central Singapore", slug: "central-singapore" },
      { name: "Jurong", slug: "jurong" },
      { name: "Woodlands", slug: "woodlands" }
    ]
  },
  usa: {
    name: "USA",
    tagline: "Scale Your Business with AI-Driven Software in the USA",
    description: "Partner with a leading software development agency serving businesses across the United States. Our AI-powered strategies deliver measurable results and sustainable growth in America's competitive market.",
    keywords: "software development USA, AI software America, web development USA, growth software United States",
    metaDescription: "Top AI-powered software development agency serving the USA. Drive growth with advanced web development, content software, and data-driven strategies across America.",
    cities: [
      { name: "Chicago", slug: "chicago" },
      { name: "New York", slug: "new-york" },
      { name: "Los Angeles", slug: "los-angeles" },
      { name: "Miami", slug: "miami" },
      { name: "San Francisco", slug: "san-francisco" },
      { name: "Seattle", slug: "seattle" }
    ]
  },
  uae: {
    name: "UAE",
    tagline: "Accelerate Your Growth with Software Engineering in the UAE",
    description: "Empower your business with innovative software development solutions designed for the UAE market. Our AI-driven approach ensures your brand stands out in Dubai, Abu Dhabi, and beyond.",
    keywords: "software development UAE, AI software Dubai, web development UAE, growth software Middle East",
    metaDescription: "Premier AI-powered software development agency in UAE. Transform your business with cutting-edge strategies tailored for Dubai, Abu Dhabi, and the Middle East.",
    cities: [
      { name: "Dubai", slug: "dubai" },
      { name: "Abu Dhabi", slug: "abu-dhabi" },
      { name: "Sharjah", slug: "sharjah" }
    ]
  },
  indonesia: {
    name: "Indonesia",
    tagline: "Drive Digital Success with Software Engineering in Indonesia",
    description: "Unlock your business potential with tailored software product strategies for Indonesia's vibrant market. Our AI-powered solutions help you connect with millions of Indonesian consumers.",
    keywords: "software development Indonesia, AI software Indonesia, web development Indonesia, growth software Jakarta",
    metaDescription: "Leading AI-powered software development agency in Indonesia. Grow your business with localized strategies and advanced web development solutions for the Indonesian market.",
    cities: [
      { name: "Jakarta", slug: "jakarta" },
      { name: "Surabaya", slug: "surabaya" },
      { name: "Bali", slug: "bali" },
      { name: "Bandung", slug: "bandung" }
    ]
  },
  australia: {
    name: "Australia",
    tagline: "Amplify Your Brand with Software Engineering in Australia",
    description: "Partner with Australia's trusted software development experts. Our AI-driven strategies help businesses across Sydney, Melbourne, and beyond achieve remarkable growth and market dominance.",
    keywords: "software development Australia, AI software Sydney, web development Australia, growth software Melbourne",
    metaDescription: "Top-rated AI-powered software development agency in Australia. Scale your business with innovative strategies across Sydney, Melbourne, and all major Australian cities.",
    cities: [
      { name: "Sydney", slug: "sydney" },
      { name: "Melbourne", slug: "melbourne" },
      { name: "Brisbane", slug: "brisbane" },
      { name: "Perth", slug: "perth" }
    ]
  },
  uk: {
    name: "United Kingdom",
    tagline: "Transform Your Brand with Software Engineering in the UK",
    description: "Partner with the UK's leading AI-powered software development agency. From London to Manchester, we help British businesses achieve exceptional growth with innovative strategies.",
    keywords: "software development UK, AI software London, web development United Kingdom, growth software Manchester",
    metaDescription: "Premier AI-powered software development agency in the UK. Drive growth with cutting-edge strategies across London, Manchester, and major British cities.",
    cities: [
      { name: "London", slug: "london" },
      { name: "Manchester", slug: "manchester" },
      { name: "Birmingham", slug: "birmingham" },
      { name: "Edinburgh", slug: "edinburgh" }
    ]
  },
  canada: {
    name: "Canada",
    tagline: "Elevate Your Business with Software Engineering in Canada",
    description: "Transform your Canadian business with cutting-edge AI-powered software development. From Toronto to Vancouver, we deliver strategies that drive measurable growth across Canada.",
    keywords: "software development Canada, AI software Toronto, web development Canada, growth software Vancouver",
    metaDescription: "Leading AI-powered software development agency in Canada. Scale your business with innovative strategies across Toronto, Vancouver, and all major Canadian cities.",
    cities: [
      { name: "Toronto", slug: "toronto" },
      { name: "Vancouver", slug: "vancouver" },
      { name: "Montreal", slug: "montreal" },
      { name: "Calgary", slug: "calgary" }
    ]
  },
  germany: {
    name: "Germany",
    tagline: "Drive Innovation with Software Engineering in Germany",
    description: "Partner with Germany's premier AI-powered software development agency. From Berlin to Munich, we help German businesses achieve exceptional growth with data-driven strategies.",
    keywords: "software development Germany, AI software Berlin, web development Germany, growth software Munich",
    metaDescription: "Top AI-powered software development agency in Germany. Transform your business with cutting-edge strategies across Berlin, Munich, and major German cities.",
    cities: [
      { name: "Berlin", slug: "berlin" },
      { name: "Munich", slug: "munich" },
      { name: "Frankfurt", slug: "frankfurt" },
      { name: "Hamburg", slug: "hamburg" }
    ]
  },
  france: {
    name: "France",
    tagline: "Amplify Your Presence with Software Engineering in France",
    description: "Elevate your French business with innovative AI-powered software development solutions. From Paris to Lyon, we deliver strategies that drive remarkable growth across France.",
    keywords: "software development France, AI software Paris, web development France, growth software Lyon",
    metaDescription: "Premier AI-powered software development agency in France. Scale your business with innovative strategies across Paris, Lyon, and major French cities.",
    cities: [
      { name: "Paris", slug: "paris" },
      { name: "Lyon", slug: "lyon" },
      { name: "Marseille", slug: "marseille" },
      { name: "Toulouse", slug: "toulouse" }
    ]
  },
  japan: {
    name: "Japan",
    tagline: "Scale Your Business with Software Engineering in Japan",
    description: "Transform your Japanese business with cutting-edge AI-powered software development. From Tokyo to Osaka, we help businesses achieve exceptional growth in Japan's competitive market.",
    keywords: "software development Japan, AI software Tokyo, web development Japan, growth software Osaka",
    metaDescription: "Leading AI-powered software development agency in Japan. Drive growth with innovative strategies across Tokyo, Osaka, and major Japanese cities.",
    cities: [
      { name: "Tokyo", slug: "tokyo" },
      { name: "Osaka", slug: "osaka" },
      { name: "Kyoto", slug: "kyoto" },
      { name: "Yokohama", slug: "yokohama" }
    ]
  },
  "south-korea": {
    name: "South Korea",
    tagline: "Accelerate Growth with Software Engineering in South Korea",
    description: "Partner with South Korea's innovative AI-powered software development agency. From Seoul to Busan, we deliver cutting-edge strategies that drive exceptional business growth.",
    keywords: "software development South Korea, AI software Seoul, web development Korea, growth software Busan",
    metaDescription: "Top AI-powered software development agency in South Korea. Transform your business with innovative strategies across Seoul, Busan, and major Korean cities.",
    cities: [
      { name: "Seoul", slug: "seoul" },
      { name: "Busan", slug: "busan" },
      { name: "Incheon", slug: "incheon" },
      { name: "Daegu", slug: "daegu" }
    ]
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

const CountryPage = async ({
  country,
  recentProjects,
}: {
  country?: string;
  recentProjects: RecentProjectsItem[];
}) => {
  const countrySlug = (country || "").toLowerCase();
  const countryInfo = countryData[countrySlug];

  if (!countryInfo) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Country Not Found</h1>
          <p className="text-muted-foreground">The country you're looking for doesn't exist.</p>
        </div>
        <Footer />
      </div>
    );
  }

  const origin = await getCanonicalOrigin();
  const canonicalUrl = await absoluteCanonicalUrl(`/country/${countrySlug}`);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title={`Software Development Company in ${countryInfo.name} | Revenuxe`}
        description={countryInfo.metaDescription}
        keywords={countryInfo.keywords}
        canonicalUrl={canonicalUrl}
        noindex
        schemaData={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": origin },
            { "@type": "ListItem", "position": 2, "name": countryInfo.name, "item": canonicalUrl }
          ]
        }}
      />
      <Navigation />
      
      <PageHero
        title={`Software Company in`}
        highlight={countryInfo.name}
        subtitle={countryInfo.tagline}
      />

      <Stats />
      <RecentProjects projects={recentProjects} />
      <Services />
      <Process />
      <WhyChooseUs cityName={countryInfo.name} />
      
      {/* Cities Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Cities We Serve in {countryInfo.name}
            </h2>
            <p className="text-muted-foreground text-lg">
              Delivering exceptional software development solutions across major cities
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {countryInfo.cities.map((city) => (
              <Link
                key={city.slug}
                href={`/country/${countrySlug}/${city.slug}`}
                className="p-6 bg-card border border-border rounded-lg hover:border-primary transition-all hover:shadow-lg text-center group"
              >
                <p className="font-semibold group-hover:text-primary transition-colors">
                  {city.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <Testimonials />
      <FAQ items={getCountryFAQs(countryInfo.name)} />
      <CTA />
      <Footer />
    </div>
  );
};

export default CountryPage;
