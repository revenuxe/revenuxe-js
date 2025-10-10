import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-[hsl(0,30%,8%)]" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Tagline */}
          <p className="text-muted-foreground text-sm md:text-base uppercase tracking-wider">
            Digital Marketing for Growing Businesses
          </p>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <span className="text-foreground">AGENCY </span>
            <span className="text-primary">ARROWMIND</span>
            <span className="text-foreground"> SPECIALIZES IN </span>
            <span className="text-primary">MARKETING</span>
            <span className="text-foreground"> FOR SMALL AND MEDIUM BUSINESSES</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Our marketing agency takes responsibility for the process of attracting customers
          </p>
          
          {/* CTA Button */}
          <div className="pt-8">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg group"
            >
              GET STARTED
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 text-primary text-6xl opacity-20">+</div>
      <div className="absolute bottom-20 right-10 text-primary text-6xl opacity-20">+</div>
    </section>
  );
};

export default Hero;
