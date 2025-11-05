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
import { useState } from "react";

const countryData: Record<string, {
  name: string;
  tagline: string;
  description: string;
  keywords: string;
  metaDescription: string;
}> = {
  singapore: {
    name: "Singapore",
    tagline: "Elevate Your Brand with AI-Powered Marketing in Singapore",
    description: "Transform your business with cutting-edge digital marketing strategies tailored for Singapore's dynamic market. Our AI-powered solutions help you dominate search rankings and drive exponential growth in the Lion City.",
    keywords: "digital marketing Singapore, AI marketing Singapore, SEO Singapore, growth marketing Singapore",
    metaDescription: "Leading AI-powered digital marketing agency in Singapore. Transform your business with data-driven strategies, advanced SEO, and growth marketing solutions."
  },
  usa: {
    name: "USA",
    tagline: "Scale Your Business with AI-Driven Marketing in the USA",
    description: "Partner with a leading digital marketing agency serving businesses across the United States. Our AI-powered strategies deliver measurable results and sustainable growth in America's competitive market.",
    keywords: "digital marketing USA, AI marketing America, SEO USA, growth marketing United States",
    metaDescription: "Top AI-powered digital marketing agency serving the USA. Drive growth with advanced SEO, content marketing, and data-driven strategies across America."
  },
  uae: {
    name: "UAE",
    tagline: "Accelerate Your Growth with AI Marketing in the UAE",
    description: "Empower your business with innovative digital marketing solutions designed for the UAE market. Our AI-driven approach ensures your brand stands out in Dubai, Abu Dhabi, and beyond.",
    keywords: "digital marketing UAE, AI marketing Dubai, SEO UAE, growth marketing Middle East",
    metaDescription: "Premier AI-powered digital marketing agency in UAE. Transform your business with cutting-edge strategies tailored for Dubai, Abu Dhabi, and the Middle East."
  },
  indonesia: {
    name: "Indonesia",
    tagline: "Drive Digital Success with AI Marketing in Indonesia",
    description: "Unlock your business potential with tailored digital marketing strategies for Indonesia's vibrant market. Our AI-powered solutions help you connect with millions of Indonesian consumers.",
    keywords: "digital marketing Indonesia, AI marketing Indonesia, SEO Indonesia, growth marketing Jakarta",
    metaDescription: "Leading AI-powered digital marketing agency in Indonesia. Grow your business with localized strategies and advanced SEO solutions for the Indonesian market."
  },
  australia: {
    name: "Australia",
    tagline: "Amplify Your Brand with AI Marketing in Australia",
    description: "Partner with Australia's trusted digital marketing experts. Our AI-driven strategies help businesses across Sydney, Melbourne, and beyond achieve remarkable growth and market dominance.",
    keywords: "digital marketing Australia, AI marketing Sydney, SEO Australia, growth marketing Melbourne",
    metaDescription: "Top-rated AI-powered digital marketing agency in Australia. Scale your business with innovative strategies across Sydney, Melbourne, and all major Australian cities."
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
        title={`AI-Powered Digital Marketing Agency in ${country.name} | Arrowmind`}
        description={country.metaDescription}
        keywords={country.keywords}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-4">
              Serving {country.name}
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="block mb-4 text-foreground">AI MARKETING AGENCY</span>
              <span className="block">
                <span className="text-foreground">ARROW</span>
                <span className="text-primary">MIND</span>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {country.tagline}
            </p>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {country.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 rounded-full"
                onClick={() => setDialogOpen(true)}
              >
                GET STARTED
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-6 rounded-full"
                asChild
              >
                <a href="#services">VIEW SERVICES</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-primary/30 rounded-full animate-bounce" />
        <div className="absolute bottom-20 right-10 w-16 h-16 border-2 border-secondary/30 rotate-45 animate-spin-slow" />
      </section>

      <Stats />
      <Services />
      <Process />
      <WhyChooseUs cityName={country.name} />
      <Testimonials />
      <CTA />
      <Footer />

      <GetStartedDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </div>
  );
};

export default CountryPage;
