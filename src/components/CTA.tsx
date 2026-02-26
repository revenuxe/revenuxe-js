import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { GetStartedDialog } from "./GetStartedDialog";

const CTA = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  return <section className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-primary/10" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
        backgroundImage: 'linear-gradient(hsl(var(--primary)) 2px, transparent 2px), linear-gradient(90deg, hsl(var(--primary)) 2px, transparent 2px)',
        backgroundSize: '60px 60px'
      }} />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{
      animationDelay: '1s'
    }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            <span>Limited Time Offer</span>
          </div>
          
          {/* Heading */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            Ready to <span className="text-primary">Transform</span><br />
            Your Business?
          </h2>
          
          {/* Description */}
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Join hundreds of successful businesses that have accelerated their growth with our AI-powered marketing strategies
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button 
              size="lg" 
              className="px-12 py-7 text-lg font-bold group shadow-2xl shadow-primary/30"
              onClick={() => setDialogOpen(true)}
            >
              START YOUR PROJECT
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-primary/30 hover:bg-primary/10 px-12 py-7 text-lg font-bold" asChild>
              <a href="/contact">SCHEDULE A CALL</a>
            </Button>
          </div>
          
          <GetStartedDialog open={dialogOpen} onOpenChange={setDialogOpen} />
          
          {/* Trust Indicators */}
          <div className="pt-12 flex flex-wrap justify-center gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary">30+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="w-px bg-border" />
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary">99%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="w-px bg-border" />
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary">3+ Years</div>
              <div className="text-sm text-muted-foreground">Industry Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default CTA;
