import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ServicesSection from "@/components/Services";
import { SEOHead } from "@/components/SEOHead";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Digital Marketing Services — SEO, Google Ads, Web Dev | Revenuxe"
        description="Explore Revenuxe's full-stack digital marketing services: AI-powered SEO, Google Ads, Meta Ads, web development, social media marketing & content strategy. Guaranteed ROI. Get a free quote!"
        keywords="digital marketing services India, best SEO services, Google Ads management, Meta Ads agency, web development company, social media marketing packages, affordable digital marketing"
        canonicalUrl="https://revenuxe.com/services"
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
