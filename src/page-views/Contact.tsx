import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";
import { absoluteCanonicalUrl } from "@/lib/seo/canonical";

const Contact = async () => {
  const canonicalUrl = await absoluteCanonicalUrl("/contact");
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Contact Revenuxe - Start Your Software Project"
        description="Contact Revenuxe to discuss SaaS development, AI systems, web applications, custom software, platform modernization, and high-performance websites."
        keywords="contact Revenuxe, software development company contact, SaaS development consultation, web app development company, AI software development"
        canonicalUrl={canonicalUrl}
      />
      <Navigation />

      <PageHero
        title="Get In Touch"
        highlight="With Us"
        subtitle="Ready to build a SaaS product, AI system, web app, custom platform, or high-performance website? Let's discuss the project."
        hideCTA
      />

      <main>
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Let's Build</h2>
                  <p className="text-muted-foreground mb-8">
                    Have a product, platform, website, or AI system in mind? Send us a message and we will respond with the next steps.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-primary/5">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">revenuxe@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-lg bg-primary/5">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-muted-foreground">+91 9886285028</p>
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
                      <p className="text-muted-foreground text-sm">Remote-first software company</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg border">
                  <h3 className="font-semibold text-lg mb-2">Project Response</h3>
                  <p className="text-muted-foreground">
                    We typically respond within 24 business hours with a clear next step for your software project.
                  </p>
                </div>
              </div>

              <div className="bg-card p-8 rounded-lg border shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Tell Us About Your Project</h2>
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
