 "use client";

import { useState } from "react";
import { Menu, X, ArrowRight, Phone, Mail, ChevronRight, ArrowUpRight } from "lucide-react";
import logo from "@/assets/revenuxe-logo.webp";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "ROI Calculator", href: "/roi-calculator" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Articles", href: "/articles" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a href="/" className="flex items-center gap-3">
              <img src={logo.src} alt="Revenuxe Logo" className="h-7 md:h-9 w-auto" />
            </a>

            {/* Desktop Navigation - pill style */}
            <div className="hidden md:flex items-center">
              <div className="flex items-center bg-card border border-border rounded-full px-2 py-1.5 gap-1">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      isActive(item.href)
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Desktop CTA - brand gradient circle */}
            <a
              href="/contact"
              className="hidden md:flex items-center justify-center w-12 h-12 rounded-full text-primary-foreground hover:scale-105 transition-transform"
              style={{ background: "var(--brand-gradient)" }}
              aria-label="Contact Us"
            >
              <ArrowUpRight className="w-5 h-5" />
            </a>

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

      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] md:hidden">
          <div
            className="absolute inset-0 bg-foreground/60 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-[85%] max-w-[380px] bg-background shadow-2xl animate-in slide-in-from-right duration-300 flex flex-col">
            <div className="flex items-center justify-between p-5 border-b border-border">
              <img src={logo.src} alt="Revenuxe" className="h-7 w-auto" />
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full bg-muted hover:bg-destructive/10 hover:text-destructive transition-all"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-4 px-4">
              <div className="space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`group flex items-center justify-between p-4 rounded-xl transition-all duration-200 ${
                      isActive(item.href) ? "bg-primary/10" : "hover:bg-primary/5"
                    }`}
                  >
                    <span className={`text-base font-semibold ${
                      isActive(item.href) ? "text-primary" : "text-foreground group-hover:text-primary"
                    } transition-colors`}>
                      {item.label}
                    </span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </a>
                ))}
              </div>

              <div className="mt-6 px-1">
                <a
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-full text-primary-foreground font-semibold text-base transition-all duration-200 hover:opacity-90 active:scale-95"
                  style={{ background: "var(--brand-gradient)" }}
                >
                  Get Free Strategy Call
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="border-t border-border p-5 space-y-3 bg-muted/30">
              <p className="text-[11px] uppercase tracking-widest text-muted-foreground font-semibold mb-2">
                Reach us directly
              </p>
              <a href="tel:+919886285028" className="flex items-center gap-3 text-sm text-foreground hover:text-accent transition-colors">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10">
                  <Phone className="h-3.5 w-3.5 text-primary" />
                </div>
                +91 9886285028
              </a>
              <a href="mailto:revenuxe@gmail.com" className="flex items-center gap-3 text-sm text-foreground hover:text-accent transition-colors">
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