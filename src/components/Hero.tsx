import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { GetStartedDialog } from "./GetStartedDialog";

const Hero = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Lime/Green curved hero background */}
      <div className="relative flex-1 flex items-center bg-secondary pt-20">
        {/* Hexagonal pattern overlay */}
        <div className="absolute inset-0 opacity-[0.08]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hex" width="56" height="100" patternUnits="userSpaceOnUse" patternTransform="scale(1.5)">
                <path d="M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100" fill="none" stroke="hsl(155, 35%, 18%)" strokeWidth="0.5"/>
                <path d="M28 0L28 34L0 50L0 84L28 100L56 84L56 50L28 34" fill="none" stroke="hsl(155, 35%, 18%)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hex)"/>
          </svg>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-5xl">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif leading-[1.1] tracking-tight">
              <span className="text-foreground font-bold">Your Trusted Partner</span>{" "}
              <span className="italic font-normal text-foreground/70">in</span>
              <br />
              <span className="text-foreground font-bold">Digital</span>{" "}
              <span className="italic font-normal text-foreground/70">Marketing</span>
            </h1>
          </div>
        </div>
        
        {/* Curved bottom edge */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 80V0C240 60 480 80 720 80C960 80 1200 60 1440 0V80H0Z" fill="hsl(45, 20%, 96%)"/>
          </svg>
        </div>
      </div>
      
      {/* Below hero - description + CTA */}
      <div className="bg-background py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-lg">
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                We unlock business growth potential with AI-powered strategies, delivering exceptional results and ensuring client satisfaction in every project.
              </p>
            </div>
            <div className="flex gap-4">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 py-6 text-base font-semibold"
                onClick={() => setDialogOpen(true)}
              >
                Get Started Now
              </Button>
              <a
                href="/contact"
                className="flex items-center justify-center w-14 h-14 rounded-full border-2 border-foreground text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
              >
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <GetStartedDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </section>
  );
};

export default Hero;