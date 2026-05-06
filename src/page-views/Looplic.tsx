"use client";

import Navigation from "@/components/Navigation";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import { homepageFAQs } from "@/data/faqData";

import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Brain, TrendingUp } from "lucide-react";
import { useState } from "react";
import { GetStartedDialog } from "@/components/GetStartedDialog";

type RecentProject = {
  id: string;
  title: string;
  info?: string | null;
  short_description?: string | null;
  logo_url?: string | null;
  website_url?: string | null;
};

const AiMediaHero = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  
  return (
    <section className="relative flex flex-col overflow-hidden">
      <div className="relative flex items-end bg-secondary pt-24 pb-20 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32">
        {/* Hexagonal pattern overlay */}
        <div className="absolute inset-0 opacity-[0.07]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hex" width="56" height="100" patternUnits="userSpaceOnUse" patternTransform="scale(1.5)">
                <path d="M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5"/>
                <path d="M28 0L28 34L0 50L0 84L28 100L56 84L56 50L28 34" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hex)"/>
          </svg>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-10 md:py-24">
          <div className="max-w-5xl">
            <h1 className="font-display leading-[1.05] tracking-[-0.03em]">
              <span className="block text-foreground font-bold text-[2.25rem] sm:text-5xl md:text-6xl lg:text-[5.5rem]">
                AI Media
              </span>
              <span className="block text-foreground font-bold text-[2.25rem] sm:text-5xl md:text-6xl lg:text-[5.5rem]">
                Solutions
              </span>
            </h1>
          </div>
        </div>
        
        {/* Curved bottom edge */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 80V0C240 60 480 80 720 80C960 80 1200 60 1440 0V80H0Z" fill="hsl(var(--background))"/>
          </svg>
        </div>
      </div>
      
      {/* Below hero - description + CTA */}
      <div className="bg-background py-10 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-lg">
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                Transform your brand with AI-powered media solutions. Create high-performing content that drives engagement, conversion, and growth across all digital channels.
              </p>
            </div>
            
            <div className="flex gap-4">
              <Button 
                size="lg" 
                className="rounded-full px-8 py-6 text-base font-semibold text-primary-foreground"
                style={{ background: "var(--brand-gradient)" }}
                onClick={() => setDialogOpen(true)}
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <GetStartedDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </section>
  );
};

const LooplicCTA = () => {
  return (
    <section className="py-14 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display leading-tight mb-8">
            Ready to transform your content?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            media.X by Revenuxe is the AI media studio that empowers D2C, SaaS, creator-led and enterprise brands with high-performing content.
          </p>
          <Button 
            size="lg" 
            className="rounded-full px-8 py-6 text-base font-semibold text-primary-foreground"
            style={{ background: "var(--brand-gradient)" }}
            asChild
          >
            <a href="https://media.revenuxe.com" target="_blank" rel="noopener noreferrer">
              media.x
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

const AiMediaFeatures = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Creation",
      description: "Leverage advanced AI to generate high-quality media content that resonates with your audience."
    },
    {
      icon: Zap,
      title: "High-Performance Content",
      description: "Create content optimized for maximum engagement and conversion across all platforms."
    },
    {
      icon: TrendingUp,
      title: "Data-Driven Strategy",
      description: "Make informed decisions with real-time analytics and AI insights on content performance."
    }
  ];
  
  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className="bg-background rounded-lg p-8 border border-border">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Looplic = ({ recentProjects }: { recentProjects: RecentProject[] }) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <AiMediaHero />
      <LooplicCTA />
      <AiMediaFeatures />
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

export default Looplic;