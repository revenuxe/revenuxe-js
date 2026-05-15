import Link from "next/link";
import { Linkedin } from "lucide-react";
import { ContactForm } from "./ContactForm";
import logo from "@/assets/revenuxe-logo.webp";
import { marketingServiceLinks } from "@/data/marketingServiceLinks";

const Footer = () => {
  const softwareServices = [
    { href: "/services/saas-development", title: "SaaS Development" },
    { href: "/services/web-app-development", title: "Web App Development" },
    { href: "/services/ai-systems", title: "AI Software Systems" },
    { href: "/services/website-development", title: "AI Website Development" },
    { href: "/services/landing-page-development", title: "Landing Page Development" },
    { href: "/services/web-app-development", title: "AI Web App Development" },
    { href: "/services/platform-modernization", title: "Platform Modernization" },
    { href: "/services/enterprise-websites", title: "Enterprise Websites" },
  ];

  const developmentLinks = [
    { href: "/sub-services/cursor-development", title: "AI-Assisted Engineering" },
    { href: "/sub-services/v0-development", title: "Product Interface Design" },
    { href: "/sub-services/firebase-studio", title: "Backend Prototyping" },
    { href: "/sub-services/lovable-development", title: "Startup MVP Development" },
    { href: "/sub-services/bolt-development", title: "Rapid Web App Builds" },
  ];

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
                Premium software company building SaaS products, AI systems, web applications, and scalable digital platforms.
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
                  { label: "Case Studies", href: "/case-studies" },
                  { label: "Articles", href: "/articles" },
                  { label: "Contact", href: "/contact" },
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
                {softwareServices.map((link) => (
                  <li key={`${link.href}-${link.title}`}>
                    <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4 text-foreground uppercase tracking-wider">Core Services Marketing</h4>
              <ul className="space-y-2">
                {marketingServiceLinks.map((link) => (
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
                {developmentLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                      {link.title}
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
