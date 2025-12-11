import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, CheckCircle } from "lucide-react";
import { GetStartedDialog } from "./GetStartedDialog";

const CTA = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const offers = [
    "Free SEO Audit Worth ₹15,000",
    "Free Competitor Analysis Report",
    "Custom Digital Marketing Strategy"
  ];

  return (
    <section className="py-24 relative overflow-hidden">
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
            <span>Limited Time Offer — Book Free Consultation Today</span>
          </div>
          
          {/* Heading - SEO Optimized */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            Ready to <span className="text-primary">10X Your</span><br />
            <span className="text-primary">Online Growth?</span>
          </h2>
          
          {/* Description - Keyword Rich */}
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Join 50+ successful businesses that have achieved <strong className="text-foreground">higher Google rankings</strong>, 
            <strong className="text-foreground"> increased website traffic</strong>, and 
            <strong className="text-foreground"> boosted online sales</strong> with our 
            AI-powered digital marketing strategies.
          </p>

          {/* Offers List */}
          <div className="flex flex-wrap justify-center gap-4">
            {offers.map((offer, index) => (
              <div key={index} className="flex items-center gap-2 text-foreground bg-card/50 px-4 py-2 rounded-full border border-border">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">{offer}</span>
              </div>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-7 text-lg font-bold group shadow-2xl shadow-primary/30"
              onClick={() => setDialogOpen(true)}
            >
              GET FREE SEO AUDIT
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-primary/30 hover:bg-primary/10 px-12 py-7 text-lg font-bold" asChild>
              <a href="/contact">TALK TO AN EXPERT</a>
            </Button>
          </div>
          
          <GetStartedDialog open={dialogOpen} onOpenChange={setDialogOpen} />
          
          {/* Trust Indicators */}
          <div className="pt-12 flex flex-wrap justify-center gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary">500%</div>
              <div className="text-sm text-muted-foreground">Average ROI</div>
            </div>
            <div className="w-px bg-border" />
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="w-px bg-border" />
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary">10M+</div>
              <div className="text-sm text-muted-foreground">Traffic Generated</div>
            </div>
            <div className="w-px bg-border" />
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary">₹5Cr+</div>
              <div className="text-sm text-muted-foreground">Revenue Generated</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
