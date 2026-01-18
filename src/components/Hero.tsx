import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Clock, Shield, Wrench } from "lucide-react";
import { GetStartedDialog } from "./GetStartedDialog";
const Hero = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const handleWhatsApp = () => {
    window.open("https://wa.me/919876543210?text=Hi! I need appliance repair service.", "_blank");
  };
  const handleCall = () => {
    window.location.href = "tel:+919876543210";
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-[hsl(0,30%,8%)]" />
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
        backgroundImage: 'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />
      </div>
      
      {/* Floating Icons */}
      <div className="absolute top-20 left-10 w-20 h-20 border-2 border-primary/20 rounded-full animate-pulse flex items-center justify-center">
        <Wrench className="w-8 h-8 text-primary/40" />
      </div>
      <div className="absolute bottom-32 right-20 w-16 h-16 bg-primary/10 rounded-lg animate-pulse flex items-center justify-center">
        <Shield className="w-6 h-6 text-primary/40" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto text-center space-y-8 animate-fade-in px-4">
          {/* Emergency Badge */}
          
          
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight tracking-tight">
            <span className="text-foreground">EXPERT</span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-foreground">
              APPLIANCE REPAIR
            </span>
          </h1>
          
          {/* Brand Name */}
          
          
          {/* Description */}
          <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Fast, reliable repair for all major home appliances. AC, Refrigerator, Washing Machine, Microwave, TV & more. Same-day service available!
          </p>
          
          {/* Trust Badges */}
          
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-lg font-semibold group shadow-lg shadow-primary/20 w-full sm:w-auto" onClick={handleCall}>
              <Phone className="mr-2 w-5 h-5" />
              CALL NOW
            </Button>
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-10 py-6 text-lg font-semibold w-full sm:w-auto" onClick={handleWhatsApp}>
              <MessageCircle className="mr-2 w-5 h-5" />
              WHATSAPP
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-primary/30 hover:bg-primary/10 px-10 py-6 text-lg font-semibold w-full sm:w-auto" onClick={() => setDialogOpen(true)}>
              GET FREE QUOTE
            </Button>
          </div>
          
          {/* Phone Number Display */}
          <div className="pt-4">
            <a href="tel:+919876543210" className="text-2xl md:text-3xl font-bold text-primary hover:text-primary/80 transition-colors">
              📞 +91 98765 43210
            </a>
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