import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { GetStartedDialog } from "./GetStartedDialog";
import googleTrustedBadge from "@/assets/google-trusted-badge.webp";

const Hero = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Heizen-style soft radial gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, hsl(var(--primary) / 0.08) 0%, hsl(var(--background)) 70%)",
        }}
      />

      {/* Subtle grid lines */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Badge on mobile - left aligned */}
      <div className="absolute top-28 left-4 z-20 md:hidden">
        <img
          src={googleTrustedBadge}
          alt="Google Trusted AI Marketing Platform"
          className="h-12 w-auto object-contain"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Google Trusted Badge - desktop only */}
          <div className="hidden md:flex justify-end pr-4 mb-8">
            <img
              src={googleTrustedBadge}
              alt="Google Trusted AI Marketing Platform"
              className="h-16 lg:h-20 w-auto object-contain"
            />
          </div>

          {/* Main Heading — Heizen-style with italic accent */}
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight">
            <span className="text-foreground">AI Marketing at</span>
            <br />
            <span className="italic text-primary font-bold">
              Light Speed
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            AI + Humans craft marketing strategies that drive 10x growth — faster than any traditional agency
          </p>

          {/* Single CTA */}
          <div className="pt-4">
            <Button
              size="lg"
              className="px-10 py-6 text-base font-semibold group shadow-lg shadow-primary/20 rounded-full"
              onClick={() => setDialogOpen(true)}
            >
              Book a Strategy Call
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <GetStartedDialog open={dialogOpen} onOpenChange={setDialogOpen} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
