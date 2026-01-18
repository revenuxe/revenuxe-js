import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { ContactForm } from "./ContactForm";
import logo from "@/assets/arrowmind-logo.webp";

const Footer = () => {
  const services = [
    { name: "AC Repair", link: "/services/ac-repair" },
    { name: "Refrigerator Repair", link: "/services/refrigerator-repair" },
    { name: "Washing Machine Repair", link: "/services/washing-machine-repair" },
    { name: "Microwave Repair", link: "/services/microwave-repair" },
    { name: "TV Repair", link: "/services/tv-repair" },
    { name: "Dishwasher Repair", link: "/services/dishwasher-repair" },
  ];

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

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
            
            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-foreground">Our Services</h4>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.name}>
                    <a href={service.link} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    All Services
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/terms" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Privacy Policy
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
