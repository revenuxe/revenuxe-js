import { Linkedin } from "lucide-react";
import { ContactForm } from "./ContactForm";
import logo from "@/assets/revenuxe-logo.webp";

const Footer = () => {
  return (
    <footer id="contact" className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Contact Form Section */}
          <div className="mb-12 p-8 bg-card rounded-lg border">
            <h3 className="text-2xl font-bold mb-6 text-center">Get In Touch</h3>
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
              <p className="text-muted-foreground">
                AI-powered digital marketing agency specializing in growth strategies for small and medium businesses.
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/case-studies" className="text-muted-foreground hover:text-primary transition-colors">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="/articles" className="text-muted-foreground hover:text-primary transition-colors">
                    Articles
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            
            {/* We Serve in India */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-foreground">We Serve in India</h4>
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

            {/* International Clients */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-foreground">We Serve International Clients From</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/country/singapore" className="text-muted-foreground hover:text-primary transition-colors">
                    Singapore
                  </a>
                </li>
                <li>
                  <a href="/country/usa" className="text-muted-foreground hover:text-primary transition-colors">
                    USA
                  </a>
                </li>
                <li>
                  <a href="/country/uae" className="text-muted-foreground hover:text-primary transition-colors">
                    UAE
                  </a>
                </li>
                <li>
                  <a href="/country/indonesia" className="text-muted-foreground hover:text-primary transition-colors">
                    Indonesia
                  </a>
                </li>
                <li>
                  <a href="/country/australia" className="text-muted-foreground hover:text-primary transition-colors">
                    Australia
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Connect */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-foreground">Connect</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/company/revenuxe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Follow us on LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
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
