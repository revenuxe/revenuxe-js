import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ServicesSection from "@/components/Services";
import { SEO } from "@/components/SEO";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Our Services - Digital Marketing, SEO, Web Development | Revenuxe"
        description="Explore our comprehensive digital marketing services including AI-powered SEO, web development, performance marketing, social media marketing, and content marketing solutions."
        keywords="digital marketing services, SEO optimization, web development services, performance marketing, social media management, content marketing, Google Ads, Meta Ads"
      />
      <Navigation />
      <PageHero
        title="Our"
        highlight="Services"
        subtitle="Comprehensive digital marketing solutions powered by AI to grow your business"
      />
      <main>
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
