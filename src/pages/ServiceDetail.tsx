import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import { GetStartedDialog } from "@/components/GetStartedDialog";

const serviceData: Record<string, any> = {
  "social-media": {
    title: "Social Media Marketing",
    subtitle: "Build a powerful brand presence across all social platforms",
    description: "Transform your social media channels into powerful business assets. We create engaging content, build communities, and drive measurable results across Facebook, Instagram, LinkedIn, Twitter, and TikTok.",
    features: [
      { title: "Strategic Content Planning", description: "Customized content calendars aligned with your brand voice and business objectives.", link: "/sub-services/content-planning" },
      { title: "Platform Optimization", description: "Optimize profiles and content for each platform's unique algorithm and audience behavior.", link: "/sub-services/platform-optimization" },
      { title: "Community Management", description: "Build lasting relationships through timely engagement and community-building strategies.", link: "/sub-services/community-management" },
      { title: "Paid Social Campaigns", description: "Targeted ad campaigns that reach your ideal customers with the right message.", link: "/sub-services/paid-social" },
    ],
    benefits: ["Increase brand awareness", "Drive website traffic", "Build authentic engagement", "Generate qualified leads", "Improve customer retention", "Gain market insights"],
    process: [
      { step: "Discovery & Audit", description: "Analyze current presence, competitors, and target audience." },
      { step: "Strategy Development", description: "Create roadmap with clear goals and platform-specific tactics." },
      { step: "Content Creation", description: "Produce engaging graphics, videos, and copy." },
      { step: "Implementation & Growth", description: "Launch campaigns and optimize based on data." },
    ],
  },
  "performance-marketing": {
    title: "Performance Marketing",
    subtitle: "Data-Driven Results That Matter",
    description: "Maximize ROI with targeted campaigns across Google Ads, Meta Ads, and AI-powered platforms. Every rupee invested delivers measurable returns through our data-driven approach.",
    features: [
      { title: "Google Ads Excellence", description: "Master Search, Display, Shopping, and YouTube advertising. Leverage Smart Bidding, responsive search ads, and Performance Max campaigns across Google's entire ecosystem for maximum visibility and conversions.", link: "/sub-services/google-ads" },
      { title: "Meta Ads Mastery (Facebook & Instagram)", description: "Reach billions with precision targeting on Facebook and Instagram. Utilize Advantage+ campaigns, dynamic product ads, and advanced audience segmentation for exceptional B2C results.", link: "/sub-services/meta-ads" },
      { title: "AI-Powered Advertising", description: "Harness AI for campaign optimization, creative generation, and predictive analytics. Automatically test thousands of variations, identify winning patterns, and scale what works for a competitive edge.", link: "/sub-services/ai-advertising" },
      { title: "Video Advertising Excellence", description: "Captivate audiences with compelling video campaigns across YouTube, Instagram Reels, Facebook Stories, and TikTok. Full-service from concept to production to optimization.", link: "/sub-services/video-advertising" },
      { title: "Advanced Retargeting", description: "Re-engage potential customers with smart retargeting. Dynamic product ads, sequential messaging, and behavior-based triggers to convert interested users.", link: "/sub-services/retargeting" },
      { title: "Conversion Rate Optimization", description: "Improve landing pages and user journeys through A/B testing, heatmap analysis, and touchpoint optimization for maximum ROI.", link: "/sub-services/conversion-optimization" },
    ],
    benefits: ["Lower CPA through AI optimization", "Higher ROAS with multi-platform strategies", "Real-time performance tracking", "Scalable growth with automation", "Advanced audience insights", "Reduced manual optimization"],
    process: [
      { step: "Goal Setting & Platform Selection", description: "Define KPIs and choose platforms (Google, Meta, LinkedIn, TikTok) based on audience and goals." },
      { step: "Campaign Setup & AI Integration", description: "Create optimized campaigns with AI bid strategies, audience segmentation, and tracking." },
      { step: "Testing & Learning", description: "Run A/B tests on creatives, audiences, and messaging. Use AI to identify winners faster." },
      { step: "Scale & Optimize", description: "Increase investment in winners. Use ML and data to automate optimization at scale." },
    ],
  },
  "seo": {
    title: "SEO Optimization",
    subtitle: "Dominate search rankings and drive organic traffic",
    description: "Comprehensive SEO strategies that help you rank higher on Google, attract qualified traffic, and establish brand authority for long-term sustainable growth.",
    features: [
      { title: "Technical SEO Excellence", description: "Optimize structure, speed, and crawlability for search engines.", link: "/sub-services/technical-seo" },
      { title: "Keyword Strategy", description: "Identify high-value keywords and create content that ranks and converts.", link: "/sub-services/keyword-strategy" },
      { title: "On-Page Optimization", description: "Perfect every element from meta tags to internal linking.", link: "/sub-services/on-page-seo" },
      { title: "Quality Link Building", description: "Build authoritative backlinks through strategic outreach and digital PR.", link: "/sub-services/link-building" },
    ],
    benefits: ["Increase organic visibility", "Drive qualified traffic", "Build brand authority", "Reduce paid ad dependency", "Improve user experience", "Higher organic conversions"],
    process: [
      { step: "SEO Audit & Research", description: "Comprehensive analysis of website, competitors, and keywords." },
      { step: "Strategy & Roadmap", description: "Develop customized strategy with prioritized recommendations." },
      { step: "Implementation", description: "Execute technical fixes, optimize content, and build links." },
      { step: "Monitor & Refine", description: "Track rankings and continuously optimize based on data." },
    ],
  },
};

const additionalServices = {
  "email-marketing": { title: "Email Marketing", subtitle: "Engage and convert with personalized campaigns" },
  "content-marketing": { title: "Content Marketing", subtitle: "Create compelling content" },
  "web-development": { title: "Custom Web Development", subtitle: "Build modern web applications" },
  "ecommerce": { title: "E-Commerce Solutions", subtitle: "Complete online store setup" },
  "mobile-design": { title: "Mobile-First Design", subtitle: "Responsive designs" },
  "landing-pages": { title: "Landing Pages", subtitle: "High-converting pages" },
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const [dialogOpen, setDialogOpen] = useState(false);
  
  const service = serviceData[slug || ""] || {
    ...additionalServices[slug || ""],
    description: "Expert solutions tailored to your business needs with proven results.",
    features: [
      { title: "Expert Strategy", description: "Customized approach for your unique requirements." },
      { title: "Proven Results", description: "Track record of measurable outcomes." },
      { title: "Continuous Support", description: "Ongoing optimization for sustained success." },
      { title: "Latest Technology", description: "Cutting-edge tools for maximum efficiency." },
    ],
    benefits: ["Achieve objectives faster", "Improve efficiency", "Maximize ROI", "Stay competitive", "Expert insights", "Scale effectively"],
    process: [
      { step: "Discovery", description: "Learn about your business and goals." },
      { step: "Strategy", description: "Develop comprehensive plan." },
      { step: "Execution", description: "Implement with precision." },
      { step: "Optimization", description: "Continuously improve performance." },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-br from-background via-background to-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold">{service.title}</h1>
              <p className="text-2xl text-primary font-semibold">{service.subtitle}</p>
              <p className="text-muted-foreground text-lg">{service.description}</p>
              <Button size="lg" className="mt-6" onClick={() => setDialogOpen(true)}>
                Get Started <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">What We <span className="text-primary">Offer</span></h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {service.features?.map((f: any, i: number) => (
                <div key={i} className="bg-card border rounded-lg p-6 hover:border-primary/50 transition relative group">
                  <h3 className="text-2xl font-bold mb-3 pr-16">{f.title}</h3>
                  <p className="text-muted-foreground mb-4">{f.description}</p>
                  {f.link && (
                    <Link to={f.link} className="absolute top-6 right-6">
                      <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12"><span className="text-primary">Benefits</span> You'll Get</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {service.benefits?.map((b: string, i: number) => (
                <div key={i} className="flex items-start gap-3 bg-card p-4 rounded-lg border">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Our <span className="text-primary">Process</span></h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {service.process?.map((p: any, i: number) => (
                <div key={i} className="bg-primary/10 border-2 border-primary rounded-lg p-6">
                  <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">{i + 1}</div>
                  <h3 className="text-xl font-bold mb-2">{p.step}</h3>
                  <p className="text-muted-foreground text-sm">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-primary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Get <span className="text-primary">Started?</span></h2>
            <p className="text-muted-foreground text-lg mb-8">Let's discuss how we can help you achieve your goals.</p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" onClick={() => setDialogOpen(true)}>Start Your Project <ArrowRight className="ml-2" /></Button>
              <Button size="lg" variant="outline" asChild><a href="/contact">Contact Us</a></Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <GetStartedDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </div>
  );
};

export default ServiceDetail;
