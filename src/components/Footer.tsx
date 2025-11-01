import { Linkedin } from "lucide-react";
import { ContactForm } from "./ContactForm";
import logo from "@/assets/arrowmind-logo.webp";

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

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={logo} alt="Arrowmind Logo" className="h-10 w-auto" />
                <h3 className="text-2xl font-bold">
                  <span className="text-foreground">ARROW</span>
                  <span className="text-primary">MIND</span>
                </h3>
              </div>
              <p className="text-muted-foreground">
                Digital marketing agency specializing in growth strategies for small and medium businesses.
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
                <li>
                  <a href="/bangalore" className="text-muted-foreground hover:text-primary transition-colors">
                    Bangalore
                  </a>
                </li>
                <li>
                  <a href="/hyderabad" className="text-muted-foreground hover:text-primary transition-colors">
                    Hyderabad
                  </a>
                </li>
                <li>
                  <a href="/chennai" className="text-muted-foreground hover:text-primary transition-colors">
                    Chennai
                  </a>
                </li>
                <li>
                  <a href="/mumbai" className="text-muted-foreground hover:text-primary transition-colors">
                    Mumbai
                  </a>
                </li>
                <li>
                  <a href="/pune" className="text-muted-foreground hover:text-primary transition-colors">
                    Pune
                  </a>
                </li>
                <li>
                  <a href="/delhi" className="text-muted-foreground hover:text-primary transition-colors">
                    Delhi
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Connect */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-foreground">Connect</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/company/arrowmind-agency/"
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
            <p>&copy; {new Date().getFullYear()} Arrowmind. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
