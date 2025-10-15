import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import { GetStartedDialog } from "@/components/GetStartedDialog";
import { SEO } from "@/components/SEO";

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
  "email-marketing": { 
    title: "Email Marketing", 
    subtitle: "Engage and convert with personalized campaigns",
    features: [
      { title: "Email Campaign Strategy", description: "Develop targeted campaigns that nurture leads and drive conversions.", link: "/sub-services/email-campaigns" },
      { title: "Marketing Automation", description: "Automate workflows for welcome series, abandoned carts, and re-engagement.", link: "/sub-services/marketing-automation" },
      { title: "List Segmentation", description: "Segment audiences for personalized messaging that increases engagement.", link: "/sub-services/list-segmentation" },
      { title: "Email Design & Copywriting", description: "Create beautiful, mobile-responsive emails with compelling copy.", link: "/sub-services/email-design" },
    ],
  },
  "content-marketing": { 
    title: "Content Marketing", 
    subtitle: "Create compelling content that attracts and converts",
    features: [
      { title: "Content Strategy Development", description: "Build comprehensive content strategies aligned with business goals.", link: "/sub-services/content-strategy" },
      { title: "Blog & Article Writing", description: "Create SEO-optimized articles that establish thought leadership.", link: "/sub-services/blog-writing" },
      { title: "Video Content Production", description: "Produce engaging videos for social media, websites, and campaigns.", link: "/sub-services/video-production" },
      { title: "Infographic Design", description: "Transform complex data into shareable visual content.", link: "/sub-services/infographic-design" },
    ],
  },
  "web-development": { 
    title: "Custom Web Development", 
    subtitle: "Build modern, high-performance web applications",
    features: [
      { title: "Custom Website Development", description: "Build tailored websites with cutting-edge technologies and frameworks.", link: "/sub-services/custom-websites" },
      { title: "Web Application Development", description: "Create powerful web apps with advanced functionality and integrations.", link: "/sub-services/web-apps" },
      { title: "CMS Integration", description: "Implement content management systems for easy content updates.", link: "/sub-services/cms-integration" },
      { title: "API Development & Integration", description: "Build and connect APIs for seamless data flow and functionality.", link: "/sub-services/api-development" },
    ],
  },
  "ecommerce": { 
    title: "E-Commerce Solutions", 
    subtitle: "Complete online store setup and optimization",
    features: [
      { title: "E-Commerce Platform Setup", description: "Launch full-featured online stores on Shopify, WooCommerce, or custom platforms.", link: "/sub-services/ecommerce-setup" },
      { title: "Payment Gateway Integration", description: "Integrate secure payment solutions with multiple payment options.", link: "/sub-services/payment-integration" },
      { title: "Product Catalog Management", description: "Organize and optimize product listings for maximum conversions.", link: "/sub-services/catalog-management" },
      { title: "Cart Optimization", description: "Reduce abandonment and increase conversions with optimized checkout flows.", link: "/sub-services/cart-optimization" },
    ],
  },
  "mobile-design": { 
    title: "Mobile-First Design", 
    subtitle: "Responsive designs that work flawlessly on all devices",
    features: [
      { title: "Responsive Web Design", description: "Create fluid designs that adapt perfectly to any screen size.", link: "/sub-services/responsive-design" },
      { title: "Mobile UX Optimization", description: "Optimize user experiences specifically for mobile interactions.", link: "/sub-services/mobile-ux" },
      { title: "Progressive Web Apps", description: "Build PWAs that combine the best of web and mobile apps.", link: "/sub-services/pwa-development" },
      { title: "Mobile Performance", description: "Ensure lightning-fast load times and smooth interactions on mobile.", link: "/sub-services/mobile-performance" },
    ],
  },
  "landing-pages": { 
    title: "Landing Pages", 
    subtitle: "High-converting pages that turn visitors into customers",
    features: [
      { title: "Conversion-Focused Design", description: "Design landing pages optimized for maximum conversion rates.", link: "/sub-services/conversion-design" },
      { title: "A/B Testing Setup", description: "Test variations to continuously improve performance and conversions.", link: "/sub-services/ab-testing" },
      { title: "Lead Capture Forms", description: "Create optimized forms that increase lead generation.", link: "/sub-services/lead-forms" },
      { title: "Landing Page Analytics", description: "Track and analyze visitor behavior to optimize performance.", link: "/sub-services/landing-analytics" },
    ],
  },
  "ai-chatbots": {
    title: "AI Chatbots & Automation",
    subtitle: "Intelligent conversational AI that engages and converts 24/7",
    features: [
      { title: "Custom AI Chatbot Development", description: "Build intelligent chatbots powered by GPT and advanced AI for natural conversations.", link: "/sub-services/custom-chatbot" },
      { title: "WhatsApp Business Automation", description: "Automate customer interactions on WhatsApp with AI-powered responses.", link: "/sub-services/whatsapp-automation" },
      { title: "Lead Qualification Bots", description: "Automatically qualify leads and route to sales team based on AI analysis.", link: "/sub-services/lead-qualification-bot" },
      { title: "Customer Support Automation", description: "Provide instant 24/7 support with AI chatbots that learn from interactions.", link: "/sub-services/support-automation" },
      { title: "Conversational Commerce", description: "Enable shopping and transactions through natural chat interfaces.", link: "/sub-services/conversational-commerce" },
      { title: "Multi-Channel Bot Deployment", description: "Deploy chatbots across website, WhatsApp, Facebook Messenger, and more.", link: "/sub-services/multichannel-bots" },
    ],
  },
  "branding": {
    title: "Brand Identity & Design",
    subtitle: "Create memorable brands that resonate with your audience",
    features: [
      { title: "Brand Strategy & Positioning", description: "Define your brand identity, values, and unique market positioning.", link: "/sub-services/brand-strategy" },
      { title: "Logo & Visual Identity", description: "Design distinctive logos and visual systems that represent your brand.", link: "/sub-services/logo-design" },
      { title: "Brand Guidelines", description: "Create comprehensive brand guidelines for consistent application.", link: "/sub-services/brand-guidelines" },
      { title: "Rebranding Services", description: "Refresh and modernize existing brands for new market opportunities.", link: "/sub-services/rebranding" },
    ],
  },
  "analytics": {
    title: "Analytics & Data Intelligence",
    subtitle: "Turn data into actionable insights that drive growth",
    features: [
      { title: "Google Analytics Setup & Optimization", description: "Implement advanced tracking and custom reporting for complete insights.", link: "/sub-services/google-analytics" },
      { title: "Conversion Tracking", description: "Track every customer action and attribute revenue to marketing channels.", link: "/sub-services/conversion-tracking" },
      { title: "Custom Dashboards", description: "Build real-time dashboards that visualize key metrics and KPIs.", link: "/sub-services/custom-dashboards" },
      { title: "Marketing Attribution", description: "Understand which channels and campaigns drive conversions and revenue.", link: "/sub-services/marketing-attribution" },
    ],
  },
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const [dialogOpen, setDialogOpen] = useState(false);
  
  const foundService = serviceData[slug || ""] || additionalServices[slug || ""];
  
  const service = foundService || {
    title: "Service Not Found",
    subtitle: "Coming soon",
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
  
  // Add default values for missing properties
  if (!service.description) {
    service.description = "Expert solutions tailored to your business needs with proven results.";
  }
  if (!service.benefits) {
    service.benefits = ["Achieve objectives faster", "Improve efficiency", "Maximize ROI", "Stay competitive", "Expert insights", "Scale effectively"];
  }
  if (!service.process) {
    service.process = [
      { step: "Discovery", description: "Learn about your business and goals." },
      { step: "Strategy", description: "Develop comprehensive plan." },
      { step: "Execution", description: "Implement with precision." },
      { step: "Optimization", description: "Continuously improve performance." },
    ];
  }

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={`${service.title} Services | Arrowmind`}
        description={service.description}
        canonicalUrl={`https://arrowmind.in/services/${slug}`}
      />
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
