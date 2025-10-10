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
          {/* Main Brand Name */}
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold leading-tight tracking-tight">
            <span className="text-foreground">ARROWMIND</span>
          </h1>
          
          {/* Tagline */}
          <p className="text-primary text-xl md:text-2xl uppercase tracking-wider font-medium">
            AI MARKETING AGENCY
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
