import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/Services";
import { SEO } from "@/components/SEO";
import { CheckCircle } from "lucide-react";

const Services = () => {
  const serviceHighlights = [
    "SEO Services - Rank #1 on Google",
    "Google Ads & PPC Management",
    "Social Media Marketing",
    "Website Development",
    "Content Marketing",
    "AI-Powered Automation"
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Digital Marketing Services in India | SEO, PPC, Social Media | Arrowmind"
        description="Explore Arrowmind's comprehensive digital marketing services: SEO optimization, Google Ads management, social media marketing, website development, content marketing & AI solutions. Free consultation available!"
        keywords="digital marketing services India, SEO services, Google Ads management, PPC advertising, social media marketing agency, website development company, content marketing services, email marketing, performance marketing, lead generation services, e-commerce marketing, B2B marketing agency"
        canonicalUrl="https://arrowmind.in/services"
      />
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto max-w-4xl text-center">
            <span className="text-primary text-sm font-bold uppercase tracking-wider">
              Full-Service Digital Marketing Agency
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 mt-4">
              Digital Marketing <span className="text-primary">Services</span> That Drive Results
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              From <strong className="text-foreground">SEO</strong> and 
              <strong className="text-foreground"> Google Ads</strong> to 
              <strong className="text-foreground"> social media marketing</strong> and 
              <strong className="text-foreground"> web development</strong> — we offer 
              complete digital solutions to grow your business online.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {serviceHighlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-2 text-foreground bg-card px-4 py-2 rounded-full border border-border">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
