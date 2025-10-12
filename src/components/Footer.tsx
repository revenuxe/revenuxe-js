import { Instagram, Linkedin, Mail } from "lucide-react";
import { ContactForm } from "./ContactForm";

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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-foreground">ARROW</span>
                <span className="text-primary">MIND</span>
              </h3>
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
            
            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-foreground">Connect</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="mailto:contact@arrowmind.agency"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-6 w-6" />
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
