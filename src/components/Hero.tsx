import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { GetStartedDialog } from "./GetStartedDialog";
import googleTrustedBadge from "@/assets/google-trusted-badge.webp";

const Hero = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary" />
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
        backgroundImage: 'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />
      </div>
      
      {/* Badge on mobile - left aligned */}
      <div className="absolute top-20 left-4 z-20 md:hidden">
        <img 
          src={googleTrustedBadge} 
          alt="Google Trusted AI Marketing Platform" 
          className="h-14 w-auto object-contain"
        />
      </div>
      
      {/* Floating Shapes */}
      <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-primary/30 rotate-45" />
      <div className="absolute top-1/3 right-10 w-16 h-16 bg-primary/10 rounded-lg" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto text-center space-y-8 animate-fade-in px-4">
          {/* Google Trusted Badge - desktop only, right aligned */}
          <div className="hidden md:flex justify-end pr-4 mb-6">
            <img 
              src={googleTrustedBadge} 
              alt="Google Trusted AI Marketing Platform" 
              className="h-20 lg:h-24 w-auto object-contain"
            />
          </div>
          
          {/* Main Heading - Responsive */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold leading-tight tracking-tight break-words">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary to-foreground">
              AI MARKETING
            </span>
            <br />
            <span className="text-foreground">AGENCY</span>
          </h1>
          
          {/* Brand Name */}
          <p className="text-primary text-xl sm:text-2xl md:text-3xl uppercase tracking-[0.3em] font-bold">
            REVENUXE
          </p>
          
          {/* Description */}
          <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Transform your business with cutting-edge AI-powered marketing strategies that drive real results
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="px-10 py-6 text-lg font-semibold group shadow-lg shadow-primary/20"
              onClick={() => setDialogOpen(true)}
            >
              GET STARTED
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-primary/30 hover:bg-primary/10 px-10 py-6 text-lg font-semibold" asChild>
              <a href="/services">EXPLORE SERVICES</a>
            </Button>
          </div>
          
          <GetStartedDialog open={dialogOpen} onOpenChange={setDialogOpen} />
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 text-primary text-6xl opacity-20 hidden md:block">+</div>
      <div className="absolute bottom-20 right-10 text-primary text-6xl opacity-20 hidden md:block">+</div>
    </section>;
};
export default Hero;