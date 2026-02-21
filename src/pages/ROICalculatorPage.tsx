import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ROICalculator from "@/components/ROICalculator";
import { SEO } from "@/components/SEO";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Calculator, TrendingUp, Target, Zap } from "lucide-react";

const services = [
  { value: "seo", label: "SEO Optimization" },
  { value: "performance-marketing", label: "Performance Marketing" },
  { value: "social-media", label: "Social Media Marketing" },
  { value: "content-marketing", label: "Content Marketing" },
  { value: "email-marketing", label: "Email Marketing" },
  { value: "web-development", label: "Web Development" },
  { value: "influencer-marketing", label: "Influencer Marketing" },
  { value: "video-marketing", label: "Video Marketing" },
  { value: "local-seo", label: "Local SEO" },
  { value: "reputation-management", label: "Reputation Management" },
  { value: "marketing-automation", label: "Marketing Automation" },
  { value: "crm-integration", label: "CRM Integration" },
  { value: "ai-chatbots", label: "AI Chatbots" },
  { value: "branding", label: "Brand Identity" },
  { value: "analytics", label: "Analytics & Data" },
];

const ROICalculatorPage = () => {
  const [selectedService, setSelectedService] = useState("seo");

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="ROI Calculator | Estimate Your Digital Marketing Returns | Revenuxe"
        description="Calculate your potential return on investment for digital marketing services. Get instant estimates based on your budget, industry, and campaign duration."
        canonicalUrl="https://revenuxe.com/roi-calculator"
      />
      <Navigation />
      <PageHero
        title="Calculate Your"
        highlight="Marketing ROI"
        subtitle="Get instant estimates of your potential returns based on your budget, industry, and campaign duration."
      />
      <main>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4">
                    Why Use Our <span className="text-primary">ROI Calculator?</span>
                  </h2>
                  <p className="text-muted-foreground">
                    Make data-driven decisions with our comprehensive ROI calculator. Get accurate projections based on industry benchmarks and real campaign data.
                  </p>
                </div>

                <div className="grid gap-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Industry-Specific Estimates</h3>
                      <p className="text-sm text-muted-foreground">
                        Our calculations factor in your specific industry's conversion rates and benchmarks.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Realistic Projections</h3>
                      <p className="text-sm text-muted-foreground">
                        Based on real campaign data and industry averages, not inflated promises.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Instant PDF Reports</h3>
                      <p className="text-sm text-muted-foreground">
                        Download professional reports to share with your team and stakeholders.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/50 rounded-lg p-6">
                  <h3 className="font-semibold mb-3">Select a Service</h3>
                  <Select value={selectedService} onValueChange={setSelectedService}>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Choose a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service.value} value={service.value}>
                          {service.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <ROICalculator serviceType={selectedService} />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to <span className="text-primary">Get Started?</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Turn these projections into reality. Our team will help you achieve and exceed these results.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition"
            >
              Contact Us Today
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ROICalculatorPage;
