import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { ContactForm } from "./ContactForm";
import logo from "@/assets/arrowmind-logo.webp";

const Footer = () => {
  return (
    <footer id="contact" className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Contact Form Section */}
          <div className="mb-12 p-8 bg-card rounded-lg border">
            <h3 className="text-2xl font-bold mb-2 text-center">Book a Service</h3>
            <p className="text-muted-foreground text-center mb-6">Fill the form and we'll call you back within 30 minutes</p>
            <div className="max-w-2xl mx-auto">
              <ContactForm variant="compact" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand & Contact */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <img src={logo} alt="Arrowmind Logo" className="h-10 w-auto" />
                <div>
                  <h3 className="text-xl font-bold">
                    <span className="text-foreground">ARROWMIND</span>
                  </h3>
                  <p className="text-xs text-primary">Service Center</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                Your trusted partner for all home appliance repairs. Fast, reliable & affordable service.
              </p>
              <div className="space-y-2 pt-4">
                <a href="tel:+919876543210" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>+91 98765 43210</span>
                </a>
                <a href="https://wa.me/919876543210" className="flex items-center gap-2 text-muted-foreground hover:text-green-500 transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Us</span>
                </a>
                <a href="mailto:support@arrowmind.in" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>support@arrowmind.in</span>
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/articles" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Articles
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Working Hours */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-foreground">Working Hours</h4>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 mt-0.5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Mon - Sun</p>
                    <p>8:00 AM - 9:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Service Area</p>
                    <p>City-wide coverage</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-primary/10 rounded-lg border border-primary/20">
                <p className="text-xs text-primary font-medium">🚨 Emergency Service Available 24/7</p>
              </div>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground text-sm">
            <p>&copy; {new Date().getFullYear()} Arrowmind Service Center. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
