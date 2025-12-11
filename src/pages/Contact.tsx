import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { Mail, Phone, MapPin, Clock, CheckCircle } from "lucide-react";
import { SEO } from "@/components/SEO";

const Contact = () => {
  const reasons = [
    "Free SEO Audit Worth ₹15,000",
    "Free Competitor Analysis",
    "Custom Strategy Proposal",
    "No Obligation Consultation"
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Contact Us - Get Free Digital Marketing Consultation | Arrowmind"
        description="Contact Arrowmind for free digital marketing consultation. Get expert advice on SEO, Google Ads, social media marketing & web development. Free website audit included! Response within 24 hours."
        keywords="contact digital marketing agency, free marketing consultation, SEO consultation, digital marketing inquiry, marketing agency contact, free website audit, digital marketing quote, Arrowmind contact"
        canonicalUrl="https://arrowmind.in/contact"
      />
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto max-w-6xl text-center">
            <span className="text-primary text-sm font-bold uppercase tracking-wider">
              Get Your Free Consultation Today
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 mt-4 animate-fade-in">
              Let's <span className="text-primary">Grow Your Business</span> Together
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in mb-8">
              Ready to <strong className="text-foreground">increase your website traffic</strong>, 
              <strong className="text-foreground"> generate more leads</strong>, and 
              <strong className="text-foreground"> boost online sales</strong>? 
              Contact us for a free consultation and discover how our digital marketing experts can help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-center gap-2 text-foreground bg-card px-4 py-2 rounded-full border border-border">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4">
                    Talk to Our <span className="text-primary">Digital Marketing Experts</span>
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Have questions about SEO, Google Ads, social media marketing, or website development? 
                    Our team is here to help. Fill out the form and we'll get back to you within 24 hours 
                    with a customized strategy for your business.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-primary/5 border border-primary/10">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email Us</h3>
                      <p className="text-muted-foreground">founder@arrowmind.in</p>
                      <p className="text-muted-foreground text-sm">For partnerships & inquiries</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-lg bg-primary/5 border border-primary/10">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Business Hours</h3>
                      <p className="text-muted-foreground">Monday - Friday: 9am to 6pm IST</p>
                      <p className="text-muted-foreground text-sm">Response within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-lg bg-primary/5 border border-primary/10">
                    <div className="p-3 rounded-full bg-primary/10">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">We Serve</h3>
                      <p className="text-muted-foreground">India, USA, UK, UAE, Singapore, Australia</p>
                      <p className="text-muted-foreground text-sm">Remote-First Global Agency</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg border border-primary/20">
                  <h3 className="font-semibold text-lg mb-2">What You'll Get</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>Free website & SEO audit report</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>Competitor analysis insights</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>Custom marketing strategy proposal</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>Transparent pricing & timeline</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-card p-8 rounded-lg border shadow-lg">
                <h2 className="text-2xl font-bold mb-2">Get Your Free Consultation</h2>
                <p className="text-muted-foreground mb-6">
                  Fill out the form below and our experts will contact you within 24 hours
                </p>
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
