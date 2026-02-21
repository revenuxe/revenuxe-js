import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
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
      <main className="pt-20">
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
