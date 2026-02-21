import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/assets/arrowmind-logo.webp";
const Navigation = () => {
  const navItems = [{
    label: "About",
    href: "/about"
  }, {
    label: "Services",
    href: "/services"
  }, {
    label: "ROI Calculator",
    href: "/roi-calculator"
  }, {
    label: "Case Studies",
    href: "/case-studies"
  }, {
    label: "Articles",
    href: "/articles"
  }];
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <img src={logo} alt="Arrowmind Logo" className="h-10 md:h-12 w-auto" />
            
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => <a key={item.label} href={item.href} className="text-foreground hover:text-primary transition-colors">
                {item.label}
              </a>)}
            <Button variant="default" className="bg-primary hover:bg-primary/90" asChild>
              <a href="/contact">Contact Us</a>
            </Button>
          </div>
          
          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map(item => <a key={item.label} href={item.href} className="text-lg text-foreground hover:text-primary transition-colors">
                    {item.label}
                  </a>)}
                <Button variant="default" className="bg-primary hover:bg-primary/90 w-full" asChild>
                  <a href="/contact">Contact Us</a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>;
};
export default Navigation;