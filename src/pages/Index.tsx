import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ServicesCarousel from "@/components/ServicesCarousel";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import FAQ from "@/components/FAQ";
import { homepageFAQs } from "@/data/faqData";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="Arrowmind Service Center | Expert Appliance Repair | AC, Fridge, Washing Machine" 
        description="Fast, reliable appliance repair services. AC repair, refrigerator repair, washing machine repair, TV repair & more. Same-day service, 90-day warranty. Call now!" 
        keywords="appliance repair, AC repair, refrigerator repair, washing machine repair, microwave repair, TV repair, home appliance service, same day repair" 
      />
      <Navigation />
      <Hero />
      <ServicesCarousel />
      <Testimonials />
      <FAQ items={homepageFAQs} />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;