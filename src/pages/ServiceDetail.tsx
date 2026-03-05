import { useParams, Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { GetStartedDialog } from "@/components/GetStartedDialog";
import { SEO } from "@/components/SEO";
import FAQ from "@/components/FAQ";
import ROICalculator from "@/components/ROICalculator";
import { seoServiceFAQs, contentMarketingFAQs, ppcFAQs, socialMediaFAQs } from "@/data/faqData";

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
      { title: "Google Ads Excellence", description: "Master Search, Display, Shopping, and YouTube advertising. Leverage Smart Bidding, responsive search ads, and Performance Max campaigns.", link: "/sub-services/google-ads" },
      { title: "Meta Ads Mastery", description: "Reach billions with precision targeting on Facebook and Instagram. Utilize Advantage+ campaigns and dynamic product ads.", link: "/sub-services/meta-ads" },
      { title: "AI-Powered Advertising", description: "Harness AI for campaign optimization, creative generation, and predictive analytics for a competitive edge.", link: "/sub-services/ai-advertising" },
      { title: "Video Advertising", description: "Captivate audiences with compelling video campaigns across YouTube, Instagram Reels, Facebook Stories, and TikTok.", link: "/sub-services/video-advertising" },
      { title: "Advanced Retargeting", description: "Re-engage potential customers with smart retargeting. Dynamic product ads and behavior-based triggers.", link: "/sub-services/retargeting" },
      { title: "Conversion Rate Optimization", description: "Improve landing pages and user journeys through A/B testing and heatmap analysis.", link: "/sub-services/conversion-optimization" },
    ],
    benefits: ["Lower CPA through AI optimization", "Higher ROAS with multi-platform strategies", "Real-time performance tracking", "Scalable growth with automation", "Advanced audience insights", "Reduced manual optimization"],
    process: [
      { step: "Goal Setting & Platform Selection", description: "Define KPIs and choose platforms based on audience and goals." },
      { step: "Campaign Setup & AI Integration", description: "Create optimized campaigns with AI bid strategies and tracking." },
      { step: "Testing & Learning", description: "Run A/B tests on creatives, audiences, and messaging." },
      { step: "Scale & Optimize", description: "Increase investment in winners. Automate optimization at scale." },
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
  "ai-webapp": {
    title: "Build Web App Using AI",
    subtitle: "Create powerful web applications rapidly with AI-powered platforms",
    description: "Skip months of traditional development. Build production-ready web applications in days using cutting-edge AI coding platforms that write, debug, and deploy code for you.",
    features: [
      { title: "Lovable", description: "Build full-stack React apps with AI through natural language prompts. Includes Supabase integration and one-click deployment.", link: "/sub-services/lovable-development" },
      { title: "Bolt.new", description: "AI-powered full-stack development in the browser. Instantly scaffold, edit, and deploy applications.", link: "/sub-services/bolt-development" },
      { title: "Replit Agent", description: "Describe your app idea and let Replit's AI agent build, test, and deploy it — complete with database.", link: "/sub-services/replit-development" },
      { title: "Cursor AI", description: "AI-first code editor that accelerates professional development with intelligent autocomplete and debugging.", link: "/sub-services/cursor-development" },
      { title: "V0 by Vercel", description: "Generate beautiful React UI components from text prompts and screenshots, ready for production.", link: "/sub-services/v0-development" },
      { title: "Firebase Studio", description: "Google's AI-powered app builder with integrated backend services and real-time database.", link: "/sub-services/firebase-studio" },
    ],
    benefits: ["10x faster development", "Lower development costs", "No-code to pro-code flexibility", "Built-in deployment & hosting", "AI-assisted debugging", "Rapid prototyping & iteration"],
    process: [
      { step: "Requirements & Planning", description: "Define app features, user flows, and technical requirements." },
      { step: "Platform Selection", description: "Choose the best AI platform based on complexity and scale." },
      { step: "AI-Powered Development", description: "Build your app using AI tools with expert human oversight." },
      { step: "Testing & Launch", description: "Comprehensive testing, performance optimization, and deployment." },
    ],
  },
  "ai-website": {
    title: "Build Website Using AI",
    subtitle: "Launch stunning websites in hours, not weeks",
    description: "Create professional, conversion-optimized websites using AI website builders and CMS platforms. From landing pages to full business sites — AI handles design, copy, and SEO.",
    features: [
      { title: "WordPress + AI Tools", description: "Combine WordPress's flexibility with AI plugins for content generation, design, and SEO at scale.", link: "/sub-services/wordpress-ai" },
      { title: "Framer", description: "Design and publish responsive websites with AI-powered layouts, animations, and CMS.", link: "/sub-services/framer-development" },
      { title: "Webflow + AI", description: "Visual web development platform enhanced with AI for faster design and content creation.", link: "/sub-services/webflow-development" },
      { title: "Wix AI Builder", description: "Create personalized websites instantly with Wix's AI that generates design, content, and structure.", link: "/sub-services/wix-ai" },
      { title: "Hostinger AI Builder", description: "Generate complete business websites with AI-written copy and SEO — ready in minutes.", link: "/sub-services/hostinger-ai" },
      { title: "Durable AI", description: "The fastest AI website builder — generate a complete business website in 30 seconds.", link: "/sub-services/durable-ai" },
    ],
    benefits: ["Launch in hours, not weeks", "AI-generated SEO content", "Professional designs without designers", "Built-in mobile responsiveness", "Integrated analytics & forms", "Easy content management"],
    process: [
      { step: "Discovery & Branding", description: "Understand your business, audience, and brand identity." },
      { step: "AI Site Generation", description: "Generate website structure, design, and content using AI." },
      { step: "Customization & Refinement", description: "Fine-tune design, add features, and optimize for conversions." },
      { step: "Launch & Support", description: "Deploy with analytics, domain setup, and ongoing support." },
    ],
  },
  "landing-pages": {
    title: "Landing Pages",
    subtitle: "High-converting pages that turn visitors into customers",
    description: "Design and build landing pages optimized for maximum conversion rates. Every element is crafted to capture attention, build trust, and drive action.",
    features: [
      { title: "Conversion-Focused Design", description: "Design landing pages optimized for maximum conversion rates with proven layouts.", link: "/sub-services/conversion-design" },
      { title: "A/B Testing Setup", description: "Test variations to continuously improve performance and conversions.", link: "/sub-services/ab-testing" },
      { title: "Lead Capture Forms", description: "Create optimized forms that increase lead generation without friction.", link: "/sub-services/lead-forms" },
      { title: "Landing Page Analytics", description: "Track and analyze visitor behavior to optimize performance.", link: "/sub-services/landing-analytics" },
    ],
    benefits: ["Higher conversion rates", "Lower cost per lead", "Better ad quality scores", "Faster campaign launches", "Data-driven optimization", "Mobile-optimized experiences"],
    process: [
      { step: "Goal & Audience Analysis", description: "Define conversion goals and understand your target audience." },
      { step: "Design & Copy", description: "Create compelling designs and persuasive copy that converts." },
      { step: "Build & Test", description: "Develop the page and set up A/B testing frameworks." },
      { step: "Launch & Optimize", description: "Go live and continuously improve based on performance data." },
    ],
  },
};

// Keep additional services for backward compatibility with existing links
const additionalServices: Record<string, any> = {
  "email-marketing": {
    title: "Email Marketing",
    subtitle: "Engage and convert with personalized campaigns",
    description: "Expert email marketing solutions tailored to your business needs.",
    features: [
      { title: "Email Campaign Strategy", description: "Develop targeted campaigns that nurture leads and drive conversions.", link: "/sub-services/email-campaigns" },
      { title: "Marketing Automation", description: "Automate workflows for welcome series, abandoned carts, and re-engagement.", link: "/sub-services/marketing-automation" },
    ],
    benefits: ["Higher open rates", "Better engagement", "Automated workflows", "Personalized messaging", "Revenue growth", "Customer retention"],
    process: [
      { step: "Strategy", description: "Define email marketing strategy." },
      { step: "Setup", description: "Configure platform and automations." },
      { step: "Launch", description: "Send campaigns and monitor." },
      { step: "Optimize", description: "Improve based on data." },
    ],
  },
  "content-marketing": {
    title: "Content Marketing",
    subtitle: "Create compelling content that attracts and converts",
    description: "Build brand authority with strategic content marketing.",
    features: [
      { title: "Content Strategy", description: "Build comprehensive content strategies aligned with business goals.", link: "/sub-services/content-strategy" },
      { title: "Blog & Article Writing", description: "Create SEO-optimized articles that establish thought leadership.", link: "/sub-services/blog-writing" },
    ],
    benefits: ["Brand authority", "Organic traffic", "Lead generation", "Customer trust", "SEO benefits", "Thought leadership"],
    process: [
      { step: "Research", description: "Understand audience and topics." },
      { step: "Create", description: "Produce high-quality content." },
      { step: "Distribute", description: "Share across channels." },
      { step: "Measure", description: "Track performance." },
    ],
  },
  "web-development": {
    title: "Custom Web Development",
    subtitle: "Build modern, high-performance web applications",
    description: "Custom web development solutions with cutting-edge technologies.",
    features: [
      { title: "Custom Website Development", description: "Build tailored websites with cutting-edge technologies.", link: "/sub-services/custom-websites" },
      { title: "Web Application Development", description: "Create powerful web apps with advanced functionality.", link: "/sub-services/web-apps" },
    ],
    benefits: ["Custom solutions", "Scalable architecture", "Modern tech stack", "SEO-friendly", "Fast performance", "Responsive design"],
    process: [
      { step: "Plan", description: "Define requirements." },
      { step: "Design", description: "Create UI/UX." },
      { step: "Develop", description: "Build and test." },
      { step: "Deploy", description: "Launch and support." },
    ],
  },
  "ecommerce": {
    title: "E-Commerce Solutions",
    subtitle: "Complete online store setup and optimization",
    description: "Launch and grow your online store with expert e-commerce solutions.",
    features: [
      { title: "E-Commerce Platform Setup", description: "Launch full-featured online stores on Shopify, WooCommerce, or custom platforms.", link: "/sub-services/ecommerce-setup" },
      { title: "Payment Gateway Integration", description: "Integrate secure payment solutions.", link: "/sub-services/payment-integration" },
    ],
    benefits: ["Online sales growth", "Secure transactions", "Mobile commerce", "Inventory management", "Customer analytics", "Global reach"],
    process: [
      { step: "Audit", description: "Assess needs." },
      { step: "Setup", description: "Build store." },
      { step: "Optimize", description: "Improve conversions." },
      { step: "Grow", description: "Scale operations." },
    ],
  },
  "analytics": {
    title: "Analytics & Data Intelligence",
    subtitle: "Turn data into actionable insights",
    description: "Data-driven analytics solutions for smarter business decisions.",
    features: [
      { title: "Google Analytics Setup", description: "Implement advanced tracking and custom reporting.", link: "/sub-services/google-analytics" },
      { title: "Conversion Tracking", description: "Track every customer action and attribute revenue.", link: "/sub-services/conversion-tracking" },
    ],
    benefits: ["Data-driven decisions", "ROI visibility", "Customer insights", "Performance tracking", "Growth identification", "Budget optimization"],
    process: [
      { step: "Audit", description: "Assess current tracking." },
      { step: "Implement", description: "Set up analytics." },
      { step: "Report", description: "Build dashboards." },
      { step: "Optimize", description: "Act on insights." },
    ],
  },
  "branding": {
    title: "Brand Identity & Design",
    subtitle: "Create memorable brands that resonate",
    description: "Build a distinctive brand identity that sets you apart.",
    features: [
      { title: "Brand Strategy", description: "Define your brand identity and positioning.", link: "/sub-services/brand-strategy" },
      { title: "Logo & Visual Identity", description: "Design distinctive logos and visual systems.", link: "/sub-services/logo-design" },
    ],
    benefits: ["Brand recognition", "Market differentiation", "Customer loyalty", "Premium positioning", "Consistent identity", "Trust building"],
    process: [
      { step: "Discover", description: "Research brand landscape." },
      { step: "Define", description: "Create brand strategy." },
      { step: "Design", description: "Develop visual identity." },
      { step: "Deploy", description: "Launch brand guidelines." },
    ],
  },
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const [dialogOpen, setDialogOpen] = useState(false);

  const foundService = serviceData[slug || ""] || additionalServices[slug || ""];

  let faqItems: any[] = [];
  if (slug === "seo") faqItems = seoServiceFAQs;
  else if (slug === "content-marketing") faqItems = contentMarketingFAQs;
  else if (slug === "performance-marketing") faqItems = ppcFAQs;
  else if (slug === "social-media") faqItems = socialMediaFAQs;
  else {
    faqItems = [
      { question: `What is included in ${foundService?.title || "this"} service?`, answer: "Our service includes comprehensive strategy development, implementation, ongoing optimization, and detailed reporting tailored to your business needs." },
      { question: "How long does it take to see results?", answer: "Initial improvements typically appear within the first month, with significant progress by month 3-6. We provide regular updates and transparent reporting throughout." },
      { question: "What makes your approach different?", answer: "We combine AI-powered tools with human expertise, data-driven strategies with creative thinking, and proven methodologies with innovative techniques." },
      { question: "Do you require long-term contracts?", answer: "We offer flexible engagement options including monthly retainers and project-based work. We recommend 3-6 months for optimal results but don't lock you into rigid contracts." },
      { question: "How do you measure success?", answer: "We track relevant KPIs specific to your goals — traffic, leads, conversions, revenue, or brand awareness — with detailed reports and actionable recommendations." },
    ];
  }

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

  if (!service.description) service.description = "Expert solutions tailored to your business needs with proven results.";
  if (!service.benefits) service.benefits = ["Achieve objectives faster", "Improve efficiency", "Maximize ROI", "Stay competitive", "Expert insights", "Scale effectively"];
  if (!service.process) service.process = [
    { step: "Discovery", description: "Learn about your business." },
    { step: "Strategy", description: "Develop plan." },
    { step: "Execution", description: "Implement." },
    { step: "Optimization", description: "Improve." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${service.title} Services | Revenuxe`}
        description={service.description}
        canonicalUrl={`https://revenuxe.com/services/${slug}`}
        ogImage="https://revenuxe.com/og-service.png"
      />
      <Navigation />
      <PageHero title={service.title} subtitle={service.subtitle}>
        <Button
          size="lg"
          className="mt-4 rounded-full px-8 py-5 text-sm md:text-base font-semibold text-primary-foreground"
          style={{ background: "var(--brand-gradient)" }}
          onClick={() => setDialogOpen(true)}
        >
          Get Started <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </PageHero>

      <main>
        {/* Overview */}
        <section className="py-14 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-14 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-start justify-between mb-10 md:mb-14">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-display leading-tight">
                  <span className="font-bold italic">What</span>{" "}
                  <span className="font-normal">We Offer</span>
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                {service.features?.map((f: any, i: number) => (
                  <div
                    key={i}
                    className="group relative bg-card border border-border rounded-2xl p-5 md:p-7 hover:border-accent/50 hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                  >
                    <h3 className="text-base md:text-lg font-display font-bold mb-2 md:mb-3 pr-10">
                      {f.title}
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      {f.description}
                    </p>
                    {f.link && (
                      <Link to={f.link} className="absolute top-5 right-5 md:top-7 md:right-7">
                        <div className="w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform" style={{ background: "var(--brand-gradient)" }}>
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-14 md:py-20 bg-[hsl(var(--section-dark))]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10 md:mb-14">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-display text-white leading-tight">
                  <span className="italic font-normal">Benefits</span>{" "}
                  <span className="font-bold">You'll Get</span>
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                {service.benefits?.map((b: string, i: number) => (
                  <div key={i} className="flex items-center gap-3 bg-[hsl(var(--section-dark-card))] p-4 md:p-5 rounded-xl">
                    <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full bg-accent/20 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent" />
                    </div>
                    <span className="text-white text-xs md:text-sm font-medium">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-14 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10 md:mb-14 space-y-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display">
                <span className="font-normal">Our</span>{" "}
                <span className="font-bold italic text-accent">Process</span>
              </h2>
              <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto">
                A proven methodology tailored for {service.title?.toLowerCase()}
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
              {service.process?.map((p: any, i: number) => (
                <div key={i} className="bg-card border border-border rounded-xl md:rounded-2xl p-5 md:p-7 hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
                  <div className="text-accent font-bold text-xs md:text-sm mb-4">0{i + 1}</div>
                  <h3 className="text-sm md:text-base font-display font-bold text-foreground mb-2">
                    {p.step}
                  </h3>
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ROI Calculator */}
        <section className="py-14 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display mb-2">
                <span className="font-normal">Calculate Your</span>{" "}
                <span className="font-bold italic text-accent">ROI</span>
              </h2>
              <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto">
                Estimate your potential returns based on your budget and industry.
              </p>
            </div>
            <div className="max-w-md mx-auto">
              <ROICalculator serviceType={slug || "seo"} />
            </div>
          </div>
        </section>

        {/* FAQ */}
        {faqItems.length > 0 && <FAQ items={faqItems} />}

        {/* CTA */}
        <section className="py-14 md:py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="max-w-xl">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-display leading-tight">
                  <span className="italic font-normal">Ready to</span>{" "}
                  <span className="font-bold">get started with {service.title}?</span>
                </h2>
                <p className="text-muted-foreground text-sm md:text-base mt-3">
                  Let's discuss how we can help you achieve your goals.
                </p>
              </div>
              <div className="flex gap-3">
                <Button
                  size="lg"
                  className="rounded-full px-6 md:px-8 py-5 md:py-6 text-sm md:text-base font-semibold text-primary-foreground"
                  style={{ background: "var(--brand-gradient)" }}
                  onClick={() => setDialogOpen(true)}
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-6 md:px-8 py-5 md:py-6 text-sm md:text-base" asChild>
                  <a href="/contact">Contact Us</a>
                </Button>
              </div>
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
