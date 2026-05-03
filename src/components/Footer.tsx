import Link from "next/link";
import { Linkedin } from "lucide-react";
import { ContactForm } from "./ContactForm";
import logo from "@/assets/revenuxe-logo.webp";
import { coreServiceLinks, supportingServiceLinks } from "@/lib/internalLinking";

const indiaCityLinks = [
  { name: "Bangalore", href: "/bangalore" },
  { name: "Hyderabad", href: "/hyderabad" },
  { name: "Chennai", href: "/chennai" },
  { name: "Mumbai", href: "/mumbai" },
  { name: "Pune", href: "/pune" },
  { name: "Delhi", href: "/delhi" },
  { name: "Ahmedabad", href: "/ahmedabad" },
  { name: "Kolkata", href: "/kolkata" },
  { name: "Jaipur", href: "/jaipur" },
  { name: "Lucknow", href: "/lucknow" },
  { name: "Kochi", href: "/kochi" },
  { name: "Chandigarh", href: "/chandigarh" },
  { name: "Indore", href: "/indore" },
  { name: "Nagpur", href: "/nagpur" },
  { name: "Visakhapatnam", href: "/visakhapatnam" },
  { name: "Coimbatore", href: "/coimbatore" },
];

const countryLinks = [
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
];

const internationalCityLinks = [
  { label: "Central Singapore", href: "/country/singapore/central-singapore" },
  { label: "Jurong", href: "/country/singapore/jurong" },
  { label: "Woodlands", href: "/country/singapore/woodlands" },
  { label: "New York", href: "/country/usa/new-york" },
  { label: "Los Angeles", href: "/country/usa/los-angeles" },
  { label: "Chicago", href: "/country/usa/chicago" },
  { label: "Miami", href: "/country/usa/miami" },
  { label: "San Francisco", href: "/country/usa/san-francisco" },
  { label: "Seattle", href: "/country/usa/seattle" },
  { label: "Dubai", href: "/country/uae/dubai" },
  { label: "Abu Dhabi", href: "/country/uae/abu-dhabi" },
  { label: "Sharjah", href: "/country/uae/sharjah" },
  { label: "Jakarta", href: "/country/indonesia/jakarta" },
  { label: "Surabaya", href: "/country/indonesia/surabaya" },
  { label: "Bali", href: "/country/indonesia/bali" },
  { label: "Bandung", href: "/country/indonesia/bandung" },
  { label: "Sydney", href: "/country/australia/sydney" },
  { label: "Melbourne", href: "/country/australia/melbourne" },
  { label: "Brisbane", href: "/country/australia/brisbane" },
  { label: "Perth", href: "/country/australia/perth" },
  { label: "London", href: "/country/uk/london" },
  { label: "Manchester", href: "/country/uk/manchester" },
  { label: "Birmingham", href: "/country/uk/birmingham" },
  { label: "Edinburgh", href: "/country/uk/edinburgh" },
  { label: "Toronto", href: "/country/canada/toronto" },
  { label: "Vancouver", href: "/country/canada/vancouver" },
  { label: "Montreal", href: "/country/canada/montreal" },
  { label: "Calgary", href: "/country/canada/calgary" },
  { label: "Berlin", href: "/country/germany/berlin" },
  { label: "Munich", href: "/country/germany/munich" },
  { label: "Frankfurt", href: "/country/germany/frankfurt" },
  { label: "Hamburg", href: "/country/germany/hamburg" },
  { label: "Paris", href: "/country/france/paris" },
  { label: "Lyon", href: "/country/france/lyon" },
  { label: "Marseille", href: "/country/france/marseille" },
  { label: "Toulouse", href: "/country/france/toulouse" },
  { label: "Tokyo", href: "/country/japan/tokyo" },
  { label: "Osaka", href: "/country/japan/osaka" },
  { label: "Kyoto", href: "/country/japan/kyoto" },
  { label: "Yokohama", href: "/country/japan/yokohama" },
  { label: "Seoul", href: "/country/south-korea/seoul" },
  { label: "Busan", href: "/country/south-korea/busan" },
  { label: "Incheon", href: "/country/south-korea/incheon" },
  { label: "Daegu", href: "/country/south-korea/daegu" },
];

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

          <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={logo.src} alt="Revenuxe Logo" className="h-10 w-auto" />
              </div>
              <p className="text-muted-foreground text-sm">
                AI-powered digital marketing agency specializing in growth strategies for businesses.
              </p>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://www.linkedin.com/company/revenuxe"
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
                  { label: "Services", href: "/services" },
                  { label: "Basic Package", href: "/basic-package" },
                  { label: "Case Studies", href: "/case-studies" },
                  { label: "Articles", href: "/articles" },
                  { label: "Contact", href: "/contact" },
                  { label: "ROI Calculator", href: "/roi-calculator" },
                  { label: "Projects", href: "/projects" },
                  { label: "Terms & Conditions", href: "/terms" },
                  { label: "Privacy Policy", href: "/privacy" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4 text-foreground uppercase tracking-wider">Core Services</h4>
              <ul className="space-y-2">
                {coreServiceLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4 text-foreground uppercase tracking-wider">Support Solutions</h4>
              <ul className="space-y-2">
                {supportingServiceLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* We Serve in India */}
            <div>
              <h4 className="text-sm font-semibold mb-4 text-foreground uppercase tracking-wider">India</h4>
              <ul className="space-y-2">
                {indiaCityLinks.map((city) => (
                  <li key={city.href}>
                    <Link href={city.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                      {city.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* International */}
            <div>
              <h4 className="text-sm font-semibold mb-4 text-foreground uppercase tracking-wider">International</h4>
              <ul className="space-y-2">
                {countryLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-6">
              <h4 className="text-sm font-semibold mb-4 text-foreground uppercase tracking-wider">International Cities</h4>
              <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-5 gap-y-2">
                {internationalCityLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                      {link.label}
                    </Link>
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
