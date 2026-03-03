import { Linkedin } from "lucide-react";
import logo from "@/assets/revenuxe-logo.webp";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10">
            {/* Brand */}
            <div className="lg:col-span-1">
              <img src={logo} alt="Revenuxe Logo" className="h-10 w-auto mb-4" />
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                AI-powered digital marketing agency specializing in growth strategies for small and medium businesses.
              </p>
              <p className="text-xs text-muted-foreground mb-3">Visit us on:</p>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/company/revenuxe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                  aria-label="Follow us on LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2.5">
                {[
                  { label: "Services", href: "#services" },
                  { label: "About Us", href: "/about" },
                  { label: "Case Studies", href: "/case-studies" },
                  { label: "Articles", href: "/articles" },
                  { label: "Contact", href: "/contact" },
                  { label: "Terms & Conditions", href: "/terms" },
                  { label: "Privacy Policy", href: "/privacy" },
                ].map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* India */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4">We Serve in India</h4>
              <ul className="space-y-2.5">
                {["Bangalore", "Hyderabad", "Chennai", "Mumbai", "Pune", "Delhi"].map((city) => (
                  <li key={city}>
                    <a href={`/${city.toLowerCase()}`} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                      {city}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* International */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4">International Clients</h4>
              <ul className="space-y-2.5">
                {[
                  { label: "Singapore", slug: "singapore" },
                  { label: "USA", slug: "usa" },
                  { label: "UAE", slug: "uae" },
                  { label: "Indonesia", slug: "indonesia" },
                  { label: "Australia", slug: "australia" },
                ].map((country) => (
                  <li key={country.slug}>
                    <a href={`/country/${country.slug}`} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                      {country.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Blog */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4">Resources</h4>
              <ul className="space-y-2.5">
                {[
                  { label: "Latest Articles", href: "/articles" },
                  { label: "Case Studies", href: "/case-studies" },
                  { label: "ROI Calculator", href: "/roi-calculator" },
                ].map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-5">
          <p className="text-center text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Revenuxe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
