import { Menu, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/assets/arrowmind-logo.webp";

const Navigation = () => {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Articles", href: "/articles" },
  ];

  const handleCall = () => {
    window.location.href = "tel:+919876543210";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/919876543210?text=Hi! I need appliance repair service.", "_blank");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-18 md:h-20 py-2">
          {/* Logo */}
          <a href="/" className="flex items-center flex-shrink-0">
            <img src={logo} alt="Arrowmind Service Center" className="h-10 md:h-14 w-auto" />
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map(item => (
              <a 
                key={item.label} 
                href={item.href} 
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button 
              variant="outline" 
              size="sm"
              className="border-green-500 text-green-500 hover:bg-green-500/10"
              onClick={handleWhatsApp}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
            <Button 
              size="sm"
              className="bg-primary hover:bg-primary/90"
              onClick={handleCall}
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </div>
          
          {/* Mobile: Call Button + Menu */}
          <div className="flex md:hidden items-center gap-4">
            <Button 
              size="sm"
              className="bg-primary hover:bg-primary/90"
              onClick={handleCall}
            >
              <Phone className="w-4 h-4" />
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map(item => (
                    <a 
                      key={item.label} 
                      href={item.href} 
                      className="text-lg text-foreground hover:text-primary transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                  <div className="pt-4 space-y-3">
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90"
                      onClick={handleCall}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </Button>
                    <Button 
                      variant="outline"
                      className="w-full border-green-500 text-green-500 hover:bg-green-500/10"
                      onClick={handleWhatsApp}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp Us
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      
      {/* Sticky Call Bar (Mobile) */}
      <div className="md:hidden bg-primary text-primary-foreground py-2 text-center">
        <a href="tel:+919876543210" className="text-sm font-semibold flex items-center justify-center gap-2">
          <Phone className="w-4 h-4" />
          Call Now: +91 98765 43210
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
