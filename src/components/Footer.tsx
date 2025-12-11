import { Linkedin } from "lucide-react";
import { ContactForm } from "./ContactForm";
import logo from "@/assets/arrowmind-logo.webp";

const Footer = () => {
  return (
    <footer id="contact" className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Contact Form Section */}
          <div className="mb-12 p-8 bg-card rounded-lg border">
            <h3 className="text-2xl font-bold mb-2 text-center">Get Your Free Digital Marketing Consultation</h3>
            <p className="text-muted-foreground text-center mb-6">
              Fill out the form below and our experts will contact you within 24 hours
            </p>
            <div className="max-w-2xl mx-auto">
              <ContactForm variant="compact" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img src={logo} alt="Arrowmind Digital Marketing Agency Logo" className="h-10 w-auto" />
                <h3 className="text-2xl font-bold">
                  <span className="text-foreground">ARROW</span>
                  <span className="text-primary">MIND</span>
                </h3>
              </div>
              <p className="text-muted-foreground mb-4">
                India's leading digital marketing agency specializing in SEO services, Google Ads management, 
                social media marketing, and website development for startups and enterprises.
              </p>
              <p className="text-muted-foreground text-sm">
                📧 founder@arrowmind.in
              </p>
            </div>
            
            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-foreground">Our Services</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/services/seo" className="text-muted-foreground hover:text-primary transition-colors">
                    SEO Services
                  </a>
                </li>
                <li>
                  <a href="/services/performance-marketing" className="text-muted-foreground hover:text-primary transition-colors">
                    Google Ads Management
                  </a>
                </li>
                <li>
                  <a href="/services/social-media" className="text-muted-foreground hover:text-primary transition-colors">
                    Social Media Marketing
                  </a>
                </li>
                <li>
                  <a href="/services/web-development" className="text-muted-foreground hover:text-primary transition-colors">
                    Website Development
                  </a>
                </li>
                <li>
                  <a href="/services/content-marketing" className="text-muted-foreground hover:text-primary transition-colors">
                    Content Marketing
                  </a>
                </li>
                <li>
                  <a href="/services/ai-chatbots" className="text-muted-foreground hover:text-primary transition-colors">
                    AI Chatbots
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h4>
              <ul className="space-y-2">
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
                    Digital Marketing Blog
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                    Contact Us
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
              <h4 className="text-lg font-semibold mb-4 text-foreground">Digital Marketing in India</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/bangalore" className="text-muted-foreground hover:text-primary transition-colors">
                    Digital Marketing Bangalore
                  </a>
                </li>
                <li>
                  <a href="/hyderabad" className="text-muted-foreground hover:text-primary transition-colors">
                    Digital Marketing Hyderabad
                  </a>
                </li>
                <li>
                  <a href="/chennai" className="text-muted-foreground hover:text-primary transition-colors">
                    Digital Marketing Chennai
                  </a>
                </li>
                <li>
                  <a href="/mumbai" className="text-muted-foreground hover:text-primary transition-colors">
                    Digital Marketing Mumbai
                  </a>
                </li>
                <li>
                  <a href="/delhi" className="text-muted-foreground hover:text-primary transition-colors">
                    Digital Marketing Delhi
                  </a>
                </li>
                <li>
                  <a href="/pune" className="text-muted-foreground hover:text-primary transition-colors">
                    Digital Marketing Pune
                  </a>
                </li>
              </ul>
            </div>

            {/* International */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-foreground">International Markets</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/country/usa" className="text-muted-foreground hover:text-primary transition-colors">
                    Digital Marketing USA
                  </a>
                </li>
                <li>
                  <a href="/country/uk" className="text-muted-foreground hover:text-primary transition-colors">
                    Digital Marketing UK
                  </a>
                </li>
                <li>
                  <a href="/country/uae" className="text-muted-foreground hover:text-primary transition-colors">
                    Digital Marketing UAE
                  </a>
                </li>
                <li>
                  <a href="/country/singapore" className="text-muted-foreground hover:text-primary transition-colors">
                    Digital Marketing Singapore
                  </a>
                </li>
                <li>
                  <a href="/country/australia" className="text-muted-foreground hover:text-primary transition-colors">
                    Digital Marketing Australia
                  </a>
                </li>
                <li>
                  <a href="/country/canada" className="text-muted-foreground hover:text-primary transition-colors">
                    Digital Marketing Canada
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              &copy; {new Date().getFullYear()} Arrowmind Digital Marketing Agency. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-muted-foreground text-sm">Follow us:</span>
              <a
                href="https://www.linkedin.com/company/arrowmind-agency/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Follow Arrowmind on LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
