import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { GetStartedDialog } from "./GetStartedDialog";

const Hero = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  
  const keyFeatures = [
    "Increase Website Traffic by 300%",
    "Boost Online Sales & Conversions",
    "Rank #1 on Google Search Results"
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-[hsl(0,30%,8%)]" />
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      {/* Floating Shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 border-2 border-primary/20 rounded-full animate-pulse" />
      <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-primary/30 rotate-45" />
      <div className="absolute top-1/3 right-10 w-16 h-16 bg-primary/10 rounded-lg animate-pulse" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto text-center space-y-8 animate-fade-in px-4">
          {/* Trust Badge */}
          <div className="inline-block">
            <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-semibold">
              ⭐ Trusted by 50+ Brands Worldwide
            </span>
          </div>
          
          {/* Main Heading - SEO Optimized */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight tracking-tight break-words">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary to-foreground">
              #1 DIGITAL MARKETING
            </span>
            <br />
            <span className="text-foreground">AGENCY IN INDIA</span>
          </h1>
          
          {/* Brand Name with SEO */}
          <p className="text-primary text-xl sm:text-2xl md:text-3xl uppercase tracking-[0.3em] font-bold">
            ARROWMIND — AI-POWERED GROWTH
          </p>
          
          {/* SEO Rich Description */}
          <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Transform your business with India's leading <strong className="text-foreground">digital marketing agency</strong>. 
            We specialize in <strong className="text-foreground">SEO services</strong>, <strong className="text-foreground">Google Ads management</strong>, 
            <strong className="text-foreground"> social media marketing</strong>, and <strong className="text-foreground">web development</strong> 
            to drive 10X growth for startups and enterprises.
          </p>
          
          {/* Key Features */}
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-lg font-semibold group shadow-lg shadow-primary/20"
              onClick={() => setDialogOpen(true)}
            >
              GET FREE CONSULTATION
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-primary/30 hover:bg-primary/10 px-10 py-6 text-lg font-semibold" asChild>
              <a href="/services">EXPLORE OUR SERVICES</a>
            </Button>
          </div>
          
          <GetStartedDialog open={dialogOpen} onOpenChange={setDialogOpen} />
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 text-primary text-6xl opacity-20 hidden md:block">+</div>
      <div className="absolute bottom-20 right-10 text-primary text-6xl opacity-20 hidden md:block">+</div>
    </section>
  );
};

export default Hero;
