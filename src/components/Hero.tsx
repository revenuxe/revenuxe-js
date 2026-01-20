import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import { GetStartedDialog } from "./GetStartedDialog";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsApp = () => {
    window.open("https://wa.me/919876543210?text=Hi! I need appliance repair service.", "_blank");
  };
  const handleCall = () => {
    window.location.href = "tel:+919876543210";
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{
          backgroundImage: `url(${heroBg})`,
          transform: `translateY(${scrollY * 0.3}px) scale(1.1)`
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl space-y-8 px-4 my-[30px]"
        >
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-foreground inline-block"
            >
              Expert
            </motion.span>
            <br />
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-primary inline-block"
            >
              Appliance Repair
            </motion.span>
            <br />
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-foreground inline-block"
            >
              Services
            </motion.span>
          </h1>
          
          {/* Description */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-muted-foreground text-lg md:text-xl max-w-xl leading-relaxed"
          >
            Fast, reliable repair for all major home appliances. AC, Refrigerator, Washing Machine, Microwave, TV & more. <strong className="text-foreground">Same-day service available!</strong>
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 pt-8 mt-4"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-lg font-semibold shadow-lg shadow-primary/30 w-full sm:w-auto" onClick={handleCall}>
              <Phone className="mr-2 w-5 h-5" />
              CALL NOW
            </Button>
            <Button size="lg" className="bg-[hsl(142_70%_35%)] hover:bg-[hsl(142_70%_30%)] text-white px-10 py-6 text-lg font-semibold w-full sm:w-auto" onClick={handleWhatsApp}>
              <MessageCircle className="mr-2 w-5 h-5" />
              WHATSAPP
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-primary hover:bg-primary/10 px-10 py-6 text-lg font-semibold w-full sm:w-auto" onClick={() => setDialogOpen(true)}>
              GET FREE QUOTE
            </Button>
          </motion.div>
          
          <GetStartedDialog open={dialogOpen} onOpenChange={setDialogOpen} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;