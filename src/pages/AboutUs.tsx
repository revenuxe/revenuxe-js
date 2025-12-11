import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, Target, Users, Zap, Award, TrendingUp, CheckCircle } from "lucide-react";
import { SEO } from "@/components/SEO";

const AboutUs = () => {
  const achievements = [
    { value: "50+", label: "Happy Clients" },
    { value: "500%", label: "Average ROI" },
    { value: "10M+", label: "Traffic Generated" },
    { value: "₹5Cr+", label: "Revenue Generated" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="About Us - Best Digital Marketing Agency in India | Arrowmind"
        description="Arrowmind is India's leading digital marketing agency with 3+ years of experience in SEO, Google Ads, social media marketing & web development. 50+ successful clients. 500% average ROI. Get free consultation!"
        keywords="about Arrowmind, best digital marketing agency India, digital marketing company, SEO agency India, top marketing agency Bangalore, digital marketing experts, marketing team India, award winning marketing agency"
        canonicalUrl="https://arrowmind.in/about"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="text-primary text-sm font-bold uppercase tracking-wider">
            About India's #1 Digital Marketing Agency
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 mt-4">
            Meet <span className="text-primary">Arrowmind</span> — Your Growth Partner
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're a team of passionate <strong className="text-foreground">digital marketing experts</strong>, 
            <strong className="text-foreground"> SEO specialists</strong>, and 
            <strong className="text-foreground"> web developers</strong> helping businesses across India 
            achieve 10X growth through data-driven strategies.
          </p>
        </div>
      </section>

      {/* Achievement Stats */}
      <section className="py-12 px-4 bg-card border-y border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Our Story: Building India's Leading <span className="text-primary">Digital Marketing Agency</span>
          </h2>
          <div className="prose prose-lg max-w-none space-y-4">
            <p className="text-foreground/80">
              <strong>Arrowmind</strong> was founded with a mission to make world-class 
              <strong> digital marketing services</strong> accessible to businesses of all sizes in India. 
              We saw too many businesses struggling with expensive agencies that delivered no results, 
              and we decided to change that.
            </p>
            <p className="text-foreground/80">
              Today, we're proud to be one of the <strong>best digital marketing agencies in India</strong>, 
              helping startups, SMBs, and enterprises achieve their growth goals through 
              <strong> SEO</strong>, <strong>Google Ads</strong>, <strong>social media marketing</strong>, 
              and <strong>custom website development</strong>.
            </p>
            <p className="text-foreground/80">
              Our secret? We combine <strong>AI-powered marketing automation</strong> with human creativity 
              and deep industry expertise. Every strategy we create is backed by data, tested rigorously, 
              and optimized continuously for maximum ROI.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            Why Businesses Choose <span className="text-primary">Arrowmind</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Our core values drive everything we do — from strategy to execution
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg border border-border bg-card hover:shadow-lg hover:border-primary/50 transition-all">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Results-Driven SEO & PPC</h3>
              <p className="text-muted-foreground">
                We focus on measurable outcomes — higher Google rankings, more organic traffic, 
                and better conversion rates. Every campaign is optimized for maximum ROI.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border border-border bg-card hover:shadow-lg hover:border-primary/50 transition-all">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Dedicated Account Managers</h3>
              <p className="text-muted-foreground">
                Your success is our success. Get a dedicated account manager, weekly reports, 
                and 24/7 support to ensure your marketing campaigns perform at their best.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border border-border bg-card hover:shadow-lg hover:border-primary/50 transition-all">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">AI-Powered Innovation</h3>
              <p className="text-muted-foreground">
                We leverage cutting-edge AI tools for content generation, SEO automation, 
                and predictive analytics to stay ahead of market trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Our <span className="text-primary">Digital Marketing Services</span>
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4 p-4 rounded-lg border border-border hover:border-primary/50 transition-colors">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Search Engine Optimization (SEO)</h3>
                <p className="text-foreground/80">
                  Rank #1 on Google with our comprehensive SEO services including on-page optimization, 
                  technical SEO, local SEO, link building, and content strategy.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-lg border border-border hover:border-primary/50 transition-colors">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Google Ads & PPC Management</h3>
                <p className="text-foreground/80">
                  Drive instant traffic with expertly managed Google Ads, Facebook Ads, and LinkedIn campaigns. 
                  We optimize for conversions and deliver 300%+ ROI.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-lg border border-border hover:border-primary/50 transition-colors">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Social Media Marketing</h3>
                <p className="text-foreground/80">
                  Build brand awareness and engage your audience on Instagram, Facebook, LinkedIn, and Twitter 
                  with creative content and targeted advertising.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-lg border border-border hover:border-primary/50 transition-colors">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Website Development</h3>
                <p className="text-foreground/80">
                  Get fast, responsive, SEO-optimized websites built with modern technologies. 
                  From landing pages to e-commerce stores, we build websites that convert.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 md:p-12 text-center">
            <Award className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Our Mission</h2>
            <p className="text-lg text-foreground/80">
              To empower every business in India with <strong>world-class digital marketing solutions</strong> that 
              deliver measurable results. We believe that great marketing should be accessible to everyone — 
              from startups to enterprises — and we're committed to helping our clients achieve 
              sustainable growth through innovative, data-driven strategies.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
