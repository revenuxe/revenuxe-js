import { useLocation } from "react-router-dom";
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
import { getCountryFAQs } from "@/data/faqData";

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
    tagline: "Elevate Your Brand with AI-Powered Marketing in Singapore",
    description: "Transform your business with cutting-edge digital marketing strategies tailored for Singapore's dynamic market. Our AI-powered solutions help you dominate search rankings and drive exponential growth in the Lion City.",
    keywords: "digital marketing Singapore, AI marketing Singapore, SEO Singapore, growth marketing Singapore",
    metaDescription: "Leading AI-powered digital marketing agency in Singapore. Transform your business with data-driven strategies, advanced SEO, and growth marketing solutions.",
    cities: [
      { name: "Central Singapore", slug: "central-singapore" },
      { name: "Jurong", slug: "jurong" },
      { name: "Woodlands", slug: "woodlands" }
    ]
  },
  usa: {
    name: "USA",
    tagline: "Scale Your Business with AI-Driven Marketing in the USA",
    description: "Partner with a leading digital marketing agency serving businesses across the United States. Our AI-powered strategies deliver measurable results and sustainable growth in America's competitive market.",
    keywords: "digital marketing USA, AI marketing America, SEO USA, growth marketing United States",
    metaDescription: "Top AI-powered digital marketing agency serving the USA. Drive growth with advanced SEO, content marketing, and data-driven strategies across America.",
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
    tagline: "Accelerate Your Growth with AI Marketing in the UAE",
    description: "Empower your business with innovative digital marketing solutions designed for the UAE market. Our AI-driven approach ensures your brand stands out in Dubai, Abu Dhabi, and beyond.",
    keywords: "digital marketing UAE, AI marketing Dubai, SEO UAE, growth marketing Middle East",
    metaDescription: "Premier AI-powered digital marketing agency in UAE. Transform your business with cutting-edge strategies tailored for Dubai, Abu Dhabi, and the Middle East.",
    cities: [
      { name: "Dubai", slug: "dubai" },
      { name: "Abu Dhabi", slug: "abu-dhabi" },
      { name: "Sharjah", slug: "sharjah" }
    ]
  },
  indonesia: {
    name: "Indonesia",
    tagline: "Drive Digital Success with AI Marketing in Indonesia",
    description: "Unlock your business potential with tailored digital marketing strategies for Indonesia's vibrant market. Our AI-powered solutions help you connect with millions of Indonesian consumers.",
    keywords: "digital marketing Indonesia, AI marketing Indonesia, SEO Indonesia, growth marketing Jakarta",
    metaDescription: "Leading AI-powered digital marketing agency in Indonesia. Grow your business with localized strategies and advanced SEO solutions for the Indonesian market.",
    cities: [
      { name: "Jakarta", slug: "jakarta" },
      { name: "Surabaya", slug: "surabaya" },
      { name: "Bali", slug: "bali" },
      { name: "Bandung", slug: "bandung" }
    ]
  },
  australia: {
    name: "Australia",
    tagline: "Amplify Your Brand with AI Marketing in Australia",
    description: "Partner with Australia's trusted digital marketing experts. Our AI-driven strategies help businesses across Sydney, Melbourne, and beyond achieve remarkable growth and market dominance.",
    keywords: "digital marketing Australia, AI marketing Sydney, SEO Australia, growth marketing Melbourne",
    metaDescription: "Top-rated AI-powered digital marketing agency in Australia. Scale your business with innovative strategies across Sydney, Melbourne, and all major Australian cities.",
    cities: [
      { name: "Sydney", slug: "sydney" },
      { name: "Melbourne", slug: "melbourne" },
      { name: "Brisbane", slug: "brisbane" },
      { name: "Perth", slug: "perth" }
    ]
  },
  uk: {
    name: "United Kingdom",
    tagline: "Transform Your Brand with AI Marketing in the UK",
    description: "Partner with the UK's leading AI-powered digital marketing agency. From London to Manchester, we help British businesses achieve exceptional growth with innovative strategies.",
    keywords: "digital marketing UK, AI marketing London, SEO United Kingdom, growth marketing Manchester",
    metaDescription: "Premier AI-powered digital marketing agency in the UK. Drive growth with cutting-edge strategies across London, Manchester, and major British cities.",
    cities: [
      { name: "London", slug: "london" },
      { name: "Manchester", slug: "manchester" },
      { name: "Birmingham", slug: "birmingham" },
      { name: "Edinburgh", slug: "edinburgh" }
    ]
  },
  canada: {
    name: "Canada",
    tagline: "Elevate Your Business with AI Marketing in Canada",
    description: "Transform your Canadian business with cutting-edge AI-powered digital marketing. From Toronto to Vancouver, we deliver strategies that drive measurable growth across Canada.",
    keywords: "digital marketing Canada, AI marketing Toronto, SEO Canada, growth marketing Vancouver",
    metaDescription: "Leading AI-powered digital marketing agency in Canada. Scale your business with innovative strategies across Toronto, Vancouver, and all major Canadian cities.",
    cities: [
      { name: "Toronto", slug: "toronto" },
      { name: "Vancouver", slug: "vancouver" },
      { name: "Montreal", slug: "montreal" },
      { name: "Calgary", slug: "calgary" }
    ]
  },
  germany: {
    name: "Germany",
    tagline: "Drive Innovation with AI Marketing in Germany",
    description: "Partner with Germany's premier AI-powered digital marketing agency. From Berlin to Munich, we help German businesses achieve exceptional growth with data-driven strategies.",
    keywords: "digital marketing Germany, AI marketing Berlin, SEO Germany, growth marketing Munich",
    metaDescription: "Top AI-powered digital marketing agency in Germany. Transform your business with cutting-edge strategies across Berlin, Munich, and major German cities.",
    cities: [
      { name: "Berlin", slug: "berlin" },
      { name: "Munich", slug: "munich" },
      { name: "Frankfurt", slug: "frankfurt" },
      { name: "Hamburg", slug: "hamburg" }
    ]
  },
  france: {
    name: "France",
    tagline: "Amplify Your Presence with AI Marketing in France",
    description: "Elevate your French business with innovative AI-powered digital marketing solutions. From Paris to Lyon, we deliver strategies that drive remarkable growth across France.",
    keywords: "digital marketing France, AI marketing Paris, SEO France, growth marketing Lyon",
    metaDescription: "Premier AI-powered digital marketing agency in France. Scale your business with innovative strategies across Paris, Lyon, and major French cities.",
    cities: [
      { name: "Paris", slug: "paris" },
      { name: "Lyon", slug: "lyon" },
      { name: "Marseille", slug: "marseille" },
      { name: "Toulouse", slug: "toulouse" }
    ]
  },
  japan: {
    name: "Japan",
    tagline: "Scale Your Business with AI Marketing in Japan",
    description: "Transform your Japanese business with cutting-edge AI-powered digital marketing. From Tokyo to Osaka, we help businesses achieve exceptional growth in Japan's competitive market.",
    keywords: "digital marketing Japan, AI marketing Tokyo, SEO Japan, growth marketing Osaka",
    metaDescription: "Leading AI-powered digital marketing agency in Japan. Drive growth with innovative strategies across Tokyo, Osaka, and major Japanese cities.",
    cities: [
      { name: "Tokyo", slug: "tokyo" },
      { name: "Osaka", slug: "osaka" },
      { name: "Kyoto", slug: "kyoto" },
      { name: "Yokohama", slug: "yokohama" }
    ]
  },
  "south-korea": {
    name: "South Korea",
    tagline: "Accelerate Growth with AI Marketing in South Korea",
    description: "Partner with South Korea's innovative AI-powered digital marketing agency. From Seoul to Busan, we deliver cutting-edge strategies that drive exceptional business growth.",
    keywords: "digital marketing South Korea, AI marketing Seoul, SEO Korea, growth marketing Busan",
    metaDescription: "Top AI-powered digital marketing agency in South Korea. Transform your business with innovative strategies across Seoul, Busan, and major Korean cities.",
    cities: [
      { name: "Seoul", slug: "seoul" },
      { name: "Busan", slug: "busan" },
      { name: "Incheon", slug: "incheon" },
      { name: "Daegu", slug: "daegu" }
    ]
  }
};

const CountryPage = () => {
  const location = useLocation();
  const countrySlug = location.pathname.split("/").pop() || "";
  const country = countryData[countrySlug];
  const [dialogOpen, setDialogOpen] = useState(false);

  if (!country) {
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

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title={`AI-Powered Digital Marketing Agency in ${country.name} | Revenuxe`}
        description={country.metaDescription}
        keywords={country.keywords}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-32">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background" />
        
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-variant/20 rounded-full blur-3xl animate-pulse delay-1000" />
        
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float" />
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-primary-variant rounded-full animate-float-delayed" />
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-primary rounded-full animate-float" />
          <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-primary-variant rounded-full animate-float-delayed" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center py-12">
          <div className="max-w-4xl mx-auto space-y-10 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-4">
              Serving {country.name}
            </div>
            
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                <span className="block text-foreground">AI MARKETING AGENCY</span>
              </h1>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                <span className="text-foreground">IN </span>
                <span className="bg-gradient-to-r from-primary via-primary-variant to-primary bg-clip-text text-transparent">
                  {country.name.toUpperCase()}
                </span>
              </h2>
              
              <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary mt-4">
                {country.tagline}
              </p>
            </div>

            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed pt-4">
              {country.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                onClick={() => setDialogOpen(true)}
              >
                GET STARTED
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => {
                  const servicesElement = document.getElementById("services");
                  servicesElement?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-6 text-lg font-semibold rounded-full border-2 hover:bg-primary/10 transition-all duration-300"
              >
                VIEW SERVICES
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Stats />
      <Services />
      <Process />
      <WhyChooseUs cityName={country.name} />
      
      {/* Cities Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Cities We Serve in {country.name}
            </h2>
            <p className="text-muted-foreground text-lg">
              Delivering exceptional digital marketing solutions across major cities
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {country.cities.map((city) => (
              <a
                key={city.slug}
                href={`/country/${countrySlug}/${city.slug}`}
                className="p-6 bg-card border border-border rounded-lg hover:border-primary transition-all hover:shadow-lg text-center group"
              >
                <p className="font-semibold group-hover:text-primary transition-colors">
                  {city.name}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
      
      <Testimonials />
      <FAQ items={getCountryFAQs(country.name)} />
      <CTA />
      <Footer />

      <GetStartedDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </div>
  );
};

export default CountryPage;
