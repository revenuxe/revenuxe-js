import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, CheckCircle } from "lucide-react";
import { GetStartedDialog } from "./GetStartedDialog";
import heroBg from "@/assets/hero-bg.jpg";
const Hero = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const handleWhatsApp = () => {
    window.open("https://wa.me/919876543210?text=Hi! I need appliance repair service.", "_blank");
  };
  const handleCall = () => {
    window.location.href = "tel:+919876543210";
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroBg})`
    }} />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-3xl space-y-8 animate-fade-in px-4">
          {/* Trust Badge */}
          
          
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
            <span className="text-foreground">Expert</span>
            <br />
            <span className="text-primary">
              Appliance Repair
            </span>
            <br />
            <span className="text-foreground">Services</span>
          </h1>
          
          {/* Description */}
          <p className="text-muted-foreground text-lg md:text-xl max-w-xl leading-relaxed">
            Fast, reliable repair for all major home appliances. AC, Refrigerator, Washing Machine, Microwave, TV & more. <strong className="text-foreground">Same-day service available!</strong>
          </p>
          
          {/* Feature List */}
          
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-8 mt-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-lg font-semibold shadow-lg shadow-primary/30 w-full sm:w-auto" onClick={handleCall}>
              <Phone className="mr-2 w-5 h-5" />
              CALL NOW
            </Button>
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-10 py-6 text-lg font-semibold w-full sm:w-auto" onClick={handleWhatsApp}>
              <MessageCircle className="mr-2 w-5 h-5" />
              WHATSAPP
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-primary hover:bg-primary/10 px-10 py-6 text-lg font-semibold w-full sm:w-auto" onClick={() => setDialogOpen(true)}>
              GET FREE QUOTE
            </Button>
          </div>
          
          {/* Phone Number Display */}
          <div className="pt-4">
            
          </div>
          
          <GetStartedDialog open={dialogOpen} onOpenChange={setDialogOpen} />
        </div>
      </div>
    </section>;
};
export default Hero;