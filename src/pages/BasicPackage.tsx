import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Check, Zap, Globe, BarChart3, Rocket, Code, Palette, ShieldCheck, Clock, Star, TrendingUp, Layers } from "lucide-react";
import { GetStartedDialog } from "@/components/GetStartedDialog";

const packageFAQs = [
  {
    question: "What's included in the ₹24,999 Basic Package?",
    answer: "The package includes a fully designed and developed website (up to 8 pages), Google Ads setup with initial campaign configuration, mobile-responsive design, basic SEO optimization, contact form integration, and 1 month of post-launch support."
  },
  {
    question: "Which platforms do you build websites on?",
    answer: "We build on multiple platforms including WordPress, AI-powered builders like Lovable, Odoo, and custom-coded solutions using React or Next.js — depending on your business needs and scalability requirements."
  },
  {
    question: "How long does it take to go live?",
    answer: "Most websites are designed, developed, and launched within 5–10 business days. Google Ads campaigns are set up and go live within 2–3 days after website launch."
  },
  {
    question: "Do I need to provide content and images?",
    answer: "We can work with whatever you have. If you don't have content ready, our team will create SEO-optimized copy and source professional stock images at no extra cost."
  },
  {
    question: "Is hosting and domain included?",
    answer: "Domain registration and hosting setup guidance are included. We recommend reliable hosting providers and help you get set up. Annual hosting costs are separate and typically range from ₹2,000–₹5,000/year."
  },
  {
    question: "Can I upgrade my package later?",
    answer: "Absolutely! You can upgrade to our advanced packages anytime for additional features like e-commerce, advanced SEO, social media marketing, and ongoing Google Ads management."
  },
  {
    question: "What kind of Google Ads setup is included?",
    answer: "We set up your Google Ads account, create up to 2 search campaigns, configure keyword targeting, write ad copy, set up conversion tracking, and optimize your initial budget allocation for maximum ROI."
  },
  {
    question: "Do you offer refunds?",
    answer: "We offer a satisfaction guarantee. If you're not happy with the initial design concepts within the first 7 days, we'll refund your payment in full — no questions asked."
  }
];

const platforms = [
  {
    icon: Zap,
    name: "AI-Powered (Lovable)",
    description: "Lightning-fast development using AI platforms for modern, interactive web applications that launch in days, not weeks."
  },
  {
    icon: Globe,
    name: "WordPress",
    description: "The world's most popular CMS — perfect for blogs, business sites, and e-commerce with thousands of plugins and themes."
  },
  {
    icon: Layers,
    name: "Odoo",
    description: "All-in-one business platform for companies that need a website integrated with CRM, inventory, and accounting."
  },
  {
    icon: Code,
    name: "Custom Code",
    description: "Hand-crafted websites using React, Next.js, or HTML/CSS for pixel-perfect designs and blazing-fast performance."
  }
];

const inclusions = [
  "Professional website (up to 8 pages)",
  "Mobile-responsive design",
  "Google Ads account setup",
  "2 search campaigns configured",
  "SEO-optimized content writing",
  "Contact form & WhatsApp integration",
  "Google Analytics & Search Console setup",
  "Social media profile linking",
  "SSL certificate setup",
  "1 month post-launch support",
  "Speed optimization",
  "Basic on-page SEO"
];

const processSteps = [
  {
    step: "01",
    title: "Discovery Call",
    description: "We understand your business, goals, target audience, and competitors in a 30-minute strategy call.",
    icon: BarChart3
  },
  {
    step: "02",
    title: "Design & Development",
    description: "Our team designs and builds your website using the best-fit platform — AI, WordPress, Odoo, or custom code.",
    icon: Palette
  },
  {
    step: "03",
    title: "Content & SEO",
    description: "We write compelling, keyword-rich content and optimize every page for search engines and conversions.",
    icon: TrendingUp
  },
  {
    step: "04",
    title: "Google Ads Setup",
    description: "We configure your Google Ads campaigns with targeted keywords, compelling ad copy, and conversion tracking.",
    icon: Rocket
  },
  {
    step: "05",
    title: "Launch & Support",
    description: "Your website goes live with full testing, and we provide 30 days of dedicated post-launch support.",
    icon: ShieldCheck
  }
];

const BasicPackage = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Website + Google Ads Package at ₹24,999 | Launch Your Business Online | Revenuxe"
        description="Get a professional website and Google Ads setup for just ₹24,999. AI-powered web development, WordPress, Odoo & custom code solutions. Go live in 7 days. Best affordable website design package in India."
        keywords="affordable website design package, website and google ads package, cheap website development India, website design price, best website package India, business website cost, professional website ₹24999, website builder India, wordpress website package, google ads setup India, digital marketing starter pack, small business website package, website development offer, low cost website design, website and advertising package"
        canonicalUrl="https://revenuxe.com/basic-package"
        schemaData={{
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Basic Website + Google Ads Package",
          "description": "Professional website design and Google Ads setup package for businesses looking to establish their online presence quickly and affordably.",
          "brand": { "@type": "Brand", "name": "Revenuxe" },
          "offers": {
            "@type": "Offer",
            "price": "24999",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "url": "https://revenuxe.com/basic-package"
          }
        }}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative flex flex-col overflow-hidden">
        <div className="relative bg-secondary pt-24 pb-20 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32">
          {/* Hexagonal pattern overlay */}
          <div className="absolute inset-0 opacity-[0.07]">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="hex-basic" width="56" height="100" patternUnits="userSpaceOnUse" patternTransform="scale(1.5)">
                  <path d="M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5"/>
                  <path d="M28 0L28 34L0 50L0 84L28 100L56 84L56 50L28 34" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hex-basic)"/>
            </svg>
          </div>

          <div className="relative z-10 container mx-auto px-4 py-10 md:py-24">
            <div className="max-w-5xl">
              {/* Price badge */}
              <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 rounded-full px-5 py-2 mb-6">
                <Star className="w-4 h-4 text-accent" />
                <span className="text-sm font-semibold text-accent">Limited Time Offer</span>
              </div>

              <h1 className="font-display leading-[1.05] tracking-[-0.03em]">
                <span className="block text-foreground font-bold text-[2.25rem] sm:text-5xl md:text-6xl lg:text-[5.5rem]">
                  Go Live for Just
                </span>
                <span className="block text-[2.25rem] sm:text-5xl md:text-6xl lg:text-[5.5rem]">
                  <span className="italic font-normal text-accent">₹24,999</span>
                </span>
              </h1>

              <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl">
                Professional website + Google Ads — everything you need to launch your business online and start getting customers in under 10 days.
              </p>
            </div>
          </div>

          {/* Curved bottom edge */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path d="M0 80V0C240 60 480 80 720 80C960 80 1200 60 1440 0V80H0Z" fill="hsl(var(--background))"/>
            </svg>
          </div>
        </div>

        {/* Below hero - CTA */}
        <div className="bg-background py-10 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="max-w-lg">
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  Website + Google Ads + SEO — built on AI platforms, WordPress, Odoo or custom code. Your business, live and generating leads.
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <Button
                  size="lg"
                  className="rounded-full px-8 py-6 text-base font-semibold"
                  style={{ background: "var(--brand-gradient)" }}
                  onClick={() => setDialogOpen(true)}
                >
                  Claim This Offer
                </Button>
                <a
                  href="/contact"
                  className="flex items-center justify-center w-14 h-14 rounded-full border-2 border-foreground text-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <span className="text-accent font-semibold text-sm tracking-wider uppercase">Everything Included</span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-2">
                What's in the <span className="italic font-normal text-accent">Package</span>
              </h2>
              <p className="text-muted-foreground text-lg mt-4 max-w-2xl">
                No hidden costs. No surprises. Everything you need to establish a powerful online presence and start driving traffic.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {inclusions.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-card border border-border rounded-lg hover:border-accent/50 transition-colors"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/15 flex items-center justify-center mt-0.5">
                    <Check className="w-3.5 h-3.5 text-accent" />
                  </div>
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Card Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <div className="relative bg-card border-2 border-accent rounded-2xl p-8 md:p-10 text-center overflow-hidden">
              {/* Glow effect */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <span className="inline-block bg-accent/15 text-accent text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-6">
                  Most Popular
                </span>
                <h3 className="text-2xl font-bold text-foreground mb-2">Basic Launch Package</h3>
                <p className="text-muted-foreground mb-6">Website + Google Ads + SEO</p>
                
                <div className="mb-8">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl md:text-6xl font-bold text-foreground">₹24,999</span>
                  </div>
                  <p className="text-muted-foreground text-sm mt-2">One-time payment · No monthly fees</p>
                </div>

                <Button
                  size="lg"
                  className="w-full rounded-full py-6 text-base font-semibold mb-4"
                  style={{ background: "var(--brand-gradient)" }}
                  onClick={() => setDialogOpen(true)}
                >
                  Get Started Today
                </Button>
                <p className="text-xs text-muted-foreground">
                  <ShieldCheck className="w-3.5 h-3.5 inline mr-1" />
                  7-day money-back guarantee · No questions asked
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <span className="text-accent font-semibold text-sm tracking-wider uppercase">Flexible Technology</span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-2">
                We Build on <span className="italic font-normal text-accent">Any Platform</span>
              </h2>
              <p className="text-muted-foreground text-lg mt-4 max-w-2xl">
                We pick the perfect tech stack for your business — whether it's an AI-built app, a WordPress site, an Odoo storefront, or custom code.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {platforms.map((platform, index) => (
                <div
                  key={index}
                  className="group p-6 md:p-8 bg-card border border-border rounded-xl hover:border-accent/50 transition-all hover:shadow-lg"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/15 flex items-center justify-center mb-4 group-hover:bg-accent/25 transition-colors">
                    <platform.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{platform.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">{platform.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <span className="text-accent font-semibold text-sm tracking-wider uppercase">How It Works</span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-2">
                From Zero to <span className="italic font-normal text-accent">Live in 10 Days</span>
              </h2>
              <p className="text-muted-foreground text-lg mt-4 max-w-2xl">
                Our streamlined process gets your website and ads running fast — so you can focus on closing leads, not waiting for a website.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="relative p-6 md:p-8 bg-card border border-border rounded-xl group hover:border-accent/50 transition-all"
                >
                  <span className="text-5xl font-bold text-accent/15 absolute top-4 right-6">{step.step}</span>
                  <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center mb-4">
                    <step.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why This Package Section */}
      <section className="py-16 md:py-24" style={{ background: "hsl(var(--section-dark))" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <span className="text-accent font-semibold text-sm tracking-wider uppercase">Why Choose This Package</span>
            <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mt-2 mb-12">
              Built for Businesses That Want <span className="italic font-normal text-accent">Results</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Clock, title: "Live in 7–10 Days", desc: "No endless timelines. We move fast because your business can't wait." },
                { icon: Rocket, title: "SEO-Ready from Day 1", desc: "Every page is optimized for search engines with targeted keywords and meta tags." },
                { icon: BarChart3, title: "Google Ads Included", desc: "Start generating leads immediately with professionally configured ad campaigns." },
                { icon: ShieldCheck, title: "Money-Back Guarantee", desc: "Not satisfied within 7 days? Get a full refund — zero risk for you." },
                { icon: Globe, title: "Mobile-First Design", desc: "Your site looks stunning on every device — phone, tablet, and desktop." },
                { icon: Star, title: "Post-Launch Support", desc: "30 days of dedicated support to fix bugs, update content, and optimize performance." },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl border border-border/20 text-left"
                  style={{ background: "hsl(var(--section-dark-card))" }}
                >
                  <item.icon className="w-8 h-8 text-accent mb-4" />
                  <h3 className="text-lg font-bold text-primary-foreground mb-2">{item.title}</h3>
                  <p className="text-primary-foreground/70 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Stats />
      <Testimonials />
      <FAQ items={packageFAQs} />

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Ready to Launch Your <span className="italic font-normal text-accent">Business Online?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Get a professional website and Google Ads running for just ₹24,999. No hidden fees, no monthly subscriptions.
            </p>
            <Button
              size="lg"
              className="rounded-full px-10 py-6 text-lg font-semibold"
              style={{ background: "var(--brand-gradient)" }}
              onClick={() => setDialogOpen(true)}
            >
              Claim Your Package Now
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <GetStartedDialog open={dialogOpen} onOpenChange={setDialogOpen} defaultService="Basic Package - Website + Google Ads (₹24,999)" />
    </div>
  );
};

export default BasicPackage;
