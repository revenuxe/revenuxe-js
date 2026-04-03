import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ServicesSection from "@/components/Services";
import { SEOHead } from "@/components/SEOHead";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="AI Digital Marketing Services — Technical SEO, Performance Marketing & CRO | Revenuxe"
        description="Explore Revenuxe's AI-powered digital marketing services in India: technical SEO, on-page & off-page SEO, content strategy, link building, Google Ads, Meta Ads, CRO and web development to drive qualified traffic and revenue."
        keywords="AI digital marketing services India, technical SEO services, on-page SEO optimization, off-page SEO, link building services, SEO company India, Google Ads management, Meta Ads agency, performance marketing services, CRO agency, web development for SEO"
        canonicalUrl="https://revenuxe.com/services"
      />
      <Navigation />
      <PageHero
        title="AI-Powered"
        highlight="Digital Marketing Services"
        subtitle="Full-funnel services across technical SEO, content, links, paid media and CRO — engineered to grow qualified traffic and revenue."
      />
      <main>
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
