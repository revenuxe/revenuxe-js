import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Clock, Shield } from "lucide-react";
import { GetStartedDialog } from "./GetStartedDialog";

const CTA = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleCall = () => {
    window.location.href = "tel:+919876543210";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/919876543210?text=Hi! I need appliance repair service.", "_blank");
  };

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
            <Clock className="w-4 h-4" />
            <span>Same Day Service Available</span>
          </div>
          
          {/* Heading */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            Appliance <span className="text-primary">Not Working?</span><br />
            We'll Fix It Today!
          </h2>
          
          {/* Description */}
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Don't let a broken appliance disrupt your life. Our expert technicians are ready to help you 24/7. Call now for instant assistance!
          </p>
          
          {/* Phone Number */}
          <div className="py-4">
            <a href="tel:+919876543210" className="text-3xl md:text-5xl font-bold text-primary hover:text-primary/80 transition-colors">
              📞 +91 98765 43210
            </a>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-7 text-lg font-bold group shadow-2xl shadow-primary/30 w-full sm:w-auto"
              onClick={handleCall}
            >
              <Phone className="mr-2 w-5 h-5" />
              CALL NOW
            </Button>
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white px-12 py-7 text-lg font-bold w-full sm:w-auto"
              onClick={handleWhatsApp}
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              WHATSAPP US
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-primary/30 hover:bg-primary/10 px-12 py-7 text-lg font-bold w-full sm:w-auto"
              onClick={() => setDialogOpen(true)}
            >
              GET FREE QUOTE
            </Button>
          </div>
          
          <GetStartedDialog open={dialogOpen} onOpenChange={setDialogOpen} />
          
          {/* Trust Indicators */}
          <div className="pt-12 flex flex-wrap justify-center gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary">50,000+</div>
              <div className="text-sm text-muted-foreground">Repairs Done</div>
            </div>
            <div className="w-px bg-border hidden sm:block" />
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary">4.9/5</div>
              <div className="text-sm text-muted-foreground">Customer Rating</div>
            </div>
            <div className="w-px bg-border hidden sm:block" />
            <div className="flex items-center gap-2">
              <Shield className="w-8 h-8 text-primary" />
              <div className="text-left">
                <div className="text-lg font-bold text-foreground">90-Day</div>
                <div className="text-sm text-muted-foreground">Warranty</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
