import { useParams, useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { GetStartedDialog } from "@/components/GetStartedDialog";
import { SEO } from "@/components/SEO";

const cityData: Record<string, {
  name: string;
  tagline: string;
  description: string;
  keywords: string;
  metaDescription: string;
}> = {
  bangalore: {
    name: "Bangalore",
    tagline: "Empowering Bangalore's Tech-Driven Businesses",
    description: "Transform your Bangalore-based business with cutting-edge AI-powered digital marketing strategies. From startups in Koramangala to enterprises in Whitefield, we help tech-savvy companies dominate the digital landscape.",
    keywords: "digital marketing agency Bangalore, SEO services Bangalore, web development Bangalore, performance marketing Bangalore, Bangalore digital marketing, tech marketing Bangalore",
    metaDescription: "Leading AI-powered digital marketing agency in Bangalore. We help tech startups and enterprises grow with SEO, web development, and performance marketing solutions tailored for Bangalore businesses."
  },
  hyderabad: {
    name: "Hyderabad",
    tagline: "Driving Growth for Hyderabad's Digital Pioneers",
    description: "Partner with Hyderabad's premier digital marketing agency specializing in AI-driven solutions. From HITEC City to Gachibowli, we empower businesses with innovative strategies that deliver measurable results.",
    keywords: "digital marketing agency Hyderabad, SEO services Hyderabad, web development Hyderabad, performance marketing Hyderabad, Hyderabad digital marketing, IT marketing Hyderabad",
    metaDescription: "Top digital marketing agency in Hyderabad specializing in AI-powered SEO, web development, and performance marketing. We help Hyderabad businesses achieve exceptional digital growth."
  },
  chennai: {
    name: "Chennai",
    tagline: "Elevating Chennai's Business Landscape",
    description: "Your trusted digital marketing partner in Chennai. We combine traditional values with modern innovation to help businesses from T.Nagar to OMR achieve their digital marketing goals with data-driven strategies.",
    keywords: "digital marketing agency Chennai, SEO services Chennai, web development Chennai, performance marketing Chennai, Chennai digital marketing, business growth Chennai",
    metaDescription: "Premier digital marketing agency in Chennai offering AI-powered SEO, web development, and performance marketing services. Helping Chennai businesses thrive in the digital era."
  },
  mumbai: {
    name: "Mumbai",
    tagline: "Accelerating Mumbai's Business Success",
    description: "Scale your Mumbai business with India's most innovative digital marketing agency. From Bandra to BKC, we deliver cutting-edge AI marketing solutions that drive real business growth in India's financial capital.",
    keywords: "digital marketing agency Mumbai, SEO services Mumbai, web development Mumbai, performance marketing Mumbai, Mumbai digital marketing, business marketing Mumbai",
    metaDescription: "Leading digital marketing agency in Mumbai providing AI-powered SEO, web development, and performance marketing solutions for Mumbai's ambitious businesses."
  },
  pune: {
    name: "Pune",
    tagline: "Powering Pune's Digital Transformation",
    description: "Unlock your business potential with Pune's fastest-growing digital marketing agency. From Hinjewadi to Koregaon Park, we help enterprises and startups excel with AI-enhanced marketing strategies.",
    keywords: "digital marketing agency Pune, SEO services Pune, web development Pune, performance marketing Pune, Pune digital marketing, tech marketing Pune",
    metaDescription: "Innovative digital marketing agency in Pune specializing in AI-driven SEO, web development, and performance marketing. We help Pune businesses achieve remarkable digital success."
  },
  delhi: {
    name: "Delhi",
    tagline: "Transforming Delhi's Digital Future",
    description: "Partner with Delhi's leading AI-powered digital marketing agency. From Connaught Place to Cyber City, we craft data-driven strategies that help businesses in India's capital dominate their markets.",
    keywords: "digital marketing agency Delhi, SEO services Delhi, web development Delhi, performance marketing Delhi, Delhi digital marketing, NCR digital marketing",
    metaDescription: "Top digital marketing agency in Delhi offering AI-powered SEO, web development, and performance marketing services. Helping Delhi businesses achieve exceptional online growth."
  }
};

const CityPage = () => {
  const location = useLocation();
  const [dialogOpen, setDialogOpen] = useState(false);
  
  // Extract city from pathname (e.g., /bangalore -> bangalore)
  const city = location.pathname.split('/')[1];
  const cityInfo = city ? cityData[city.toLowerCase()] : null;
  
  if (!cityInfo) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title={`AI Digital Marketing Agency in ${cityInfo.name} | Arrowmind`}
        description={cityInfo.metaDescription}
        keywords={cityInfo.keywords}
        canonicalUrl={`https://arrowmind.in/${city?.toLowerCase()}`}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                <span className="block text-foreground">AI MARKETING AGENCY</span>
              </h1>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                <span className="text-foreground">IN </span>
                <span className="bg-gradient-to-r from-primary via-primary-variant to-primary bg-clip-text text-transparent">
                  {cityInfo.name.toUpperCase()}
                </span>
              </h2>
              
              <p className="text-2xl md:text-3xl font-semibold text-primary">
                {cityInfo.tagline}
              </p>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {cityInfo.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button
                size="lg"
                onClick={() => setDialogOpen(true)}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                GET STARTED
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  const servicesElement = document.getElementById('services');
                  servicesElement?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-6 text-lg font-semibold rounded-full border-2 hover:bg-primary/10 transition-all duration-300"
              >
                VIEW SERVICES
              </Button>
            </div>
          </div>
        </div>
        
        <GetStartedDialog open={dialogOpen} onOpenChange={setDialogOpen} />
      </section>

      <Stats />
      
      {/* City-Specific Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Digital Marketing Services in {cityInfo.name}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive AI-powered marketing solutions tailored for {cityInfo.name} businesses
            </p>
          </div>
        </div>
      </section>
      
      <Services cityName={cityInfo.name} />
      <Process cityName={cityInfo.name} />
      <WhyChooseUs cityName={cityInfo.name} />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default CityPage;
