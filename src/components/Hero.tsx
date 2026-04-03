 "use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { GetStartedDialog } from "./GetStartedDialog";

const Hero = () => {
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
                AI
              </span>
              <span className="block text-foreground font-bold text-[2.25rem] sm:text-5xl md:text-6xl lg:text-[5.5rem]">
                Digital Marketing
              </span>
              <span className="block text-foreground font-bold text-[2.25rem] sm:text-5xl md:text-6xl lg:text-[5.5rem]">
                Agency
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
                We unlock business growth potential with AI-powered strategies, delivering exceptional results and ensuring client satisfaction in every project.
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <Button 
                size="lg" 
                className="rounded-full px-8 py-6 text-base font-semibold"
                style={{ background: "var(--brand-gradient)" }}
                onClick={() => setDialogOpen(true)}
              >
                Get Started Now
              </Button>
              <Link
                href="/contact"
                className="flex items-center justify-center w-14 h-14 rounded-full border-2 border-foreground text-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all"
              >
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <GetStartedDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </section>
  );
};

export default Hero;
