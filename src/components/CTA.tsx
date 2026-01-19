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
    <section className="py-24 relative overflow-hidden bg-primary">
      {/* Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 border border-white/30 rounded-full text-white text-sm font-medium">
            <Clock className="w-4 h-4" />
            <span>Same Day Service Available</span>
          </div>
          
          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
            Appliance Not Working?<br />
            <span className="text-white/90">We'll Fix It Today!</span>
          </h2>
          
          {/* Description */}
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Don't let a broken appliance disrupt your life. Our expert technicians are ready to help you 24/7. Call now for instant assistance!
          </p>
          
          {/* Phone Number */}
          <div className="py-4">
            <a href="tel:+919876543210" className="text-3xl md:text-5xl font-bold text-white hover:text-white/80 transition-colors">
              📞 +91 98765 43210
            </a>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 px-12 py-7 text-lg font-bold shadow-2xl w-full sm:w-auto"
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
              className="border-2 border-white text-white hover:bg-white/10 px-12 py-7 text-lg font-bold w-full sm:w-auto"
              onClick={() => setDialogOpen(true)}
            >
              GET FREE QUOTE
            </Button>
          </div>
          
          <GetStartedDialog open={dialogOpen} onOpenChange={setDialogOpen} />
          
          {/* Trust Indicators */}
          <div className="pt-12 flex flex-wrap justify-center gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white">50,000+</div>
              <div className="text-sm text-white/70">Repairs Done</div>
            </div>
            <div className="w-px bg-white/30 hidden sm:block" />
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white">4.9/5</div>
              <div className="text-sm text-white/70">Customer Rating</div>
            </div>
            <div className="w-px bg-white/30 hidden sm:block" />
            <div className="flex items-center gap-2">
              <Shield className="w-8 h-8 text-white" />
              <div className="text-left">
                <div className="text-lg font-bold text-white">90-Day</div>
                <div className="text-sm text-white/70">Warranty</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;