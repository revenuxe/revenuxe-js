import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { ContactForm } from "./ContactForm";
import logo from "@/assets/arrowmind-logo.webp";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Contact Form Section */}
          <div className="mb-12 p-8 bg-background/10 rounded-xl border border-background/20">
            <h3 className="text-2xl font-bold mb-2 text-center text-background">Book a Service</h3>
            <p className="text-background/70 text-center mb-6">Fill the form and we'll call you back within 30 minutes</p>
            <div className="max-w-2xl mx-auto">
              <ContactForm variant="compact" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand & Contact */}
            <div className="space-y-4">
              <div className="mb-4">
                <img src={logo} alt="Arrowmind Service Center" className="h-12 w-auto brightness-0 invert" />
              </div>
              <p className="text-background/70 text-sm">
                Your trusted partner for all home appliance repairs. Fast, reliable & affordable service.
              </p>
              <div className="space-y-2 pt-4">
                <a href="tel:+919876543210" className="flex items-center gap-2 text-background/70 hover:text-accent transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>+91 98765 43210</span>
                </a>
                <a href="https://wa.me/919876543210" className="flex items-center gap-2 text-background/70 hover:text-green-400 transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Us</span>
                </a>
                <a href="mailto:support@arrowmind.in" className="flex items-center gap-2 text-background/70 hover:text-accent transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>support@arrowmind.in</span>
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-background">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-background/70 hover:text-accent transition-colors text-sm">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/articles" className="text-background/70 hover:text-accent transition-colors text-sm">
                    Articles
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Working Hours */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-background">Working Hours</h4>
              <div className="space-y-3 text-sm text-background/70">
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 mt-0.5 text-accent" />
                  <div>
                    <p className="font-medium text-background">Mon - Sun</p>
                    <p>8:00 AM - 9:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 text-accent" />
                  <div>
                    <p className="font-medium text-background">Service Area</p>
                    <p>City-wide coverage</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-accent/20 rounded-lg border border-accent/30">
                <p className="text-xs text-accent font-medium">🚨 Emergency Service Available 24/7</p>
              </div>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-background/20 text-center text-background/60 text-sm">
            <p>&copy; {new Date().getFullYear()} Arrowmind Service Center. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
