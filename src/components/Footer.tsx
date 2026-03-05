import { Linkedin } from "lucide-react";
import { ContactForm } from "./ContactForm";
import logo from "@/assets/revenuxe-logo.webp";

const Footer = () => {
  return (
    <footer id="contact" className="bg-secondary/60 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Contact Form Section */}
          <div className="mb-10 md:mb-12 p-5 md:p-8 bg-card rounded-2xl border border-border">
            <h3 className="text-xl md:text-2xl font-display font-bold mb-4 md:mb-6 text-center">Get In Touch</h3>
            <div className="max-w-2xl mx-auto">
              <ContactForm variant="compact" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={logo} alt="Revenuxe Logo" className="h-10 w-auto" />
              </div>
              <p className="text-muted-foreground text-sm">
                AI-powered digital marketing agency specializing in growth strategies for businesses.
              </p>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://www.linkedin.com/company/revenuxe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                  aria-label="Follow us on LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold mb-4 text-foreground uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { label: "About Us", href: "/about" },
                  { label: "Case Studies", href: "/case-studies" },
                  { label: "Articles", href: "/articles" },
                  { label: "Contact", href: "/contact" },
                  { label: "ROI Calculator", href: "/roi-calculator" },
                  { label: "Terms & Conditions", href: "/terms" },
                  { label: "Privacy Policy", href: "/privacy" },
                ].map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* We Serve in India */}
            <div>
              <h4 className="text-sm font-semibold mb-4 text-foreground uppercase tracking-wider">India</h4>
              <ul className="space-y-2">
                {[
                  { name: "Bangalore", slug: "bangalore" },
                  { name: "Hyderabad", slug: "hyderabad" },
                  { name: "Chennai", slug: "chennai" },
                  { name: "Mumbai", slug: "mumbai" },
                  { name: "Pune", slug: "pune" },
                  { name: "Delhi", slug: "delhi" },
                  { name: "Ahmedabad", slug: "ahmedabad" },
                  { name: "Kolkata", slug: "kolkata" },
                  { name: "Jaipur", slug: "jaipur" },
                  { name: "Lucknow", slug: "lucknow" },
                  { name: "Kochi", slug: "kochi" },
                  { name: "Chandigarh", slug: "chandigarh" },
                  { name: "Indore", slug: "indore" },
                  { name: "Nagpur", slug: "nagpur" },
                  { name: "Visakhapatnam", slug: "visakhapatnam" },
                  { name: "Coimbatore", slug: "coimbatore" },
                ].map((city) => (
                  <li key={city.slug}>
                    <a href={`/${city.slug}`} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                      {city.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* International */}
            <div>
              <h4 className="text-sm font-semibold mb-4 text-foreground uppercase tracking-wider">International</h4>
              <ul className="space-y-2">
                {[
                  { label: "Singapore", href: "/country/singapore" },
                  { label: "USA", href: "/country/usa" },
                  { label: "UAE", href: "/country/uae" },
                  { label: "Indonesia", href: "/country/indonesia" },
                  { label: "Australia", href: "/country/australia" },
                  { label: "UK", href: "/country/uk" },
                  { label: "Canada", href: "/country/canada" },
                  { label: "Germany", href: "/country/germany" },
                  { label: "France", href: "/country/france" },
                  { label: "Japan", href: "/country/japan" },
                  { label: "South Korea", href: "/country/south-korea" },
                ].map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h4 className="text-sm font-semibold mb-4 text-foreground uppercase tracking-wider">Contact</h4>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>
                  <a href="tel:+919886285028" className="hover:text-primary transition-colors">
                    +91 9886285028
                  </a>
                </p>
                <p>
                  <a href="mailto:revenuxe@gmail.com" className="hover:text-primary transition-colors">
                    revenuxe@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground text-sm">
            <p>&copy; {new Date().getFullYear()} Revenuxe. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;