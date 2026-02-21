import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";
import { SEO } from "@/components/SEO";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Contact Us - Get In Touch | Revenuxe Digital Marketing"
        description="Contact Revenuxe for professional digital marketing services. We're here to help transform your business with expert SEO, web development, and performance marketing solutions."
        keywords="contact digital marketing agency, get in touch, digital marketing consultation, Revenuxe contact, marketing inquiry"
      />
      <Navigation />
      
      <PageHero
        title="Get In Touch"
        highlight="With Us"
        subtitle="Ready to transform your digital presence? Let's discuss your project and create something amazing together."
      />

      <main>
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
                  <p className="text-muted-foreground mb-8">
                    Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-primary/5">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">info@revenuxe.com</p>
                      <p className="text-muted-foreground">support@revenuxe.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-lg bg-primary/5">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-muted-foreground">+91 XXXXX XXXXX</p>
                      <p className="text-muted-foreground text-sm">Mon-Fri 9am to 6pm IST</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-lg bg-primary/5">
                    <div className="p-3 rounded-full bg-primary/10">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Office</h3>
                      <p className="text-muted-foreground">India</p>
                      <p className="text-muted-foreground text-sm">Remote-First Company</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg border">
                  <h3 className="font-semibold text-lg mb-2">Quick Response</h3>
                  <p className="text-muted-foreground">
                    We typically respond within 24 hours on business days.
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-card p-8 rounded-lg border shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Send Us A Message</h2>
                <ContactForm variant="default" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
