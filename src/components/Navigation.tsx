import { useState } from "react";
import { Menu, X, ArrowRight, Phone, Mail, ChevronRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/revenuxe-logo.webp";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "About", href: "/about", description: "Our story & mission" },
    { label: "Services", href: "/services", description: "What we deliver" },
    { label: "ROI Calculator", href: "/roi-calculator", description: "See your growth potential" },
    { label: "Case Studies", href: "/case-studies", description: "Proven results" },
    { label: "Articles", href: "/articles", description: "Insights & trends" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a href="/" className="flex items-center gap-3">
              <img src={logo} alt="Revenuxe Logo" className="h-7 md:h-9 w-auto" />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <Button variant="default" className="bg-primary hover:bg-primary/90" asChild>
                <a href="/contact">Contact Us</a>
              </Button>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden relative p-2 rounded-lg text-foreground hover:bg-muted transition-colors"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Fullscreen Overlay Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-foreground/60 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={() => setIsOpen(false)}
          />

          {/* Slide-in Panel */}
          <div className="absolute right-0 top-0 bottom-0 w-[85%] max-w-[380px] bg-background shadow-2xl animate-in slide-in-from-right duration-300 flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-border">
              <img src={logo} alt="Revenuxe" className="h-7 w-auto" />
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full bg-muted hover:bg-destructive/10 hover:text-destructive transition-all"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 overflow-y-auto py-4 px-4">
              <div className="space-y-1">
                {navItems.map((item, index) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="group flex items-center justify-between p-4 rounded-xl hover:bg-primary/5 transition-all duration-200"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="flex flex-col">
                      <span className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                        {item.label}
                      </span>
                      <span className="text-xs text-muted-foreground mt-0.5">
                        {item.description}
                      </span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </a>
                ))}
              </div>

              {/* CTA Button */}
              <div className="mt-6 px-1">
                <a
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-xl text-primary-foreground font-semibold text-base transition-all duration-200 hover:opacity-90 hover:scale-[0.98] active:scale-95"
                  style={{ background: "var(--brand-gradient)" }}
                >
                  <Sparkles className="h-4 w-4" />
                  Get Free Strategy Call
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Footer Contact Info */}
            <div className="border-t border-border p-5 space-y-3 bg-muted/30">
              <p className="text-[11px] uppercase tracking-widest text-muted-foreground font-semibold mb-2">
                Reach us directly
              </p>
              <a
                href="tel:+919886285028"
                className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10">
                  <Phone className="h-3.5 w-3.5 text-primary" />
                </div>
                +91 9886285028
              </a>
              <a
                href="mailto:revenuxe@gmail.com"
                className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent/10">
                  <Mail className="h-3.5 w-3.5 text-accent" />
                </div>
                revenuxe@gmail.com
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
