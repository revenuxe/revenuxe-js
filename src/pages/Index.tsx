import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import FAQ from "@/components/FAQ";
import { homepageFAQs } from "@/data/faqData";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO canonicalUrl="https://revenuxe.com" />
      <Navigation />
      <Hero />
      <Stats />
      <Services />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <FAQ items={homepageFAQs} />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
