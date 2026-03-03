import {
  Code, Search, Bot, Share2, BrainCircuit, Layers, ArrowRight, Globe,
  ShoppingCart, Smartphone, Target, TrendingUp, BarChart3, Mail, Video,
  Zap, Palette, AppWindow, MonitorSmartphone, MessageSquareCode, Database,
  FileSearch, Link2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useMemo } from "react";

// Accent colors for bento cards
const accentStyles = [
  "", // default
  "bg-accent/10", // teal tint
  "bg-primary text-primary-foreground", // primary solid
  "", // default
  "bg-accent/10", // teal tint
  "", // default
  "", // default
  "bg-primary text-primary-foreground", // primary solid
];

const Services = ({ cityName }: { cityName?: string }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const serviceCategories = [
    {
      category: "AI-Powered Solutions",
      description: "Cutting-edge AI technology for modern businesses",
      services: [
        {
          icon: <AppWindow className="w-8 h-8" />,
          title: "Build Web App Using AI",
          description: "Create powerful web applications rapidly using AI-powered platforms and no-code tools.",
          subservices: ["Lovable", "Bolt", "Replit", "Cursor AI", "V0 by Vercel", "Firebase Studio"],
          link: "/services/ai-webapp",
        },
        {
          icon: <MonitorSmartphone className="w-8 h-8" />,
          title: "Build Website Using AI",
          description: "Launch stunning websites in hours, not weeks, using AI website builders.",
          subservices: ["WordPress + AI", "Framer", "Webflow", "Wix AI", "Hostinger AI", "Durable AI"],
          link: "/services/ai-website",
        },
        {
          icon: <Bot className="w-8 h-8" />,
          title: "AI Chatbots",
          description: "Intelligent chatbots that enhance customer experience 24/7.",
          subservices: ["Customer Support", "Lead Generation", "Multi-Language"],
          link: "/services/ai-chatbots",
        },
        {
          icon: <BrainCircuit className="w-8 h-8" />,
          title: "AI Content Generation",
          description: "Create engaging content at scale with AI technology.",
          subservices: ["Blog Posts", "Product Descriptions", "Social Media Copy"],
          link: "/services/ai-content",
        },
        {
          icon: <Palette className="w-8 h-8" />,
          title: "AI Design Studio",
          description: "Generate stunning visuals and designs with AI creativity.",
          subservices: ["Image Generation", "Brand Assets", "Ad Creatives"],
          link: "/services/ai-design",
        },
        {
          icon: <Zap className="w-8 h-8" />,
          title: "AI Automation",
          description: "Automate workflows and processes with intelligent systems.",
          subservices: ["Task Automation", "Smart Workflows", "Predictive Analytics"],
          link: "/services/ai-automation",
        },
        {
          icon: <MessageSquareCode className="w-8 h-8" />,
          title: "AI Social Media Management",
          description: "Automate content scheduling, analytics, and engagement across platforms.",
          subservices: ["AI Content Scheduling", "Smart Analytics", "Auto-Engagement"],
          link: "/services/ai-social-management",
        },
        {
          icon: <Database className="w-8 h-8" />,
          title: "AI Data Intelligence",
          description: "Transform raw data into actionable business insights.",
          subservices: ["Data Visualization", "Predictive Modeling", "Business Intelligence"],
          link: "/services/ai-data-intelligence",
        },
      ],
    },
    {
      category: "Marketing Services",
      description: "Comprehensive marketing solutions to grow your brand",
      services: [
        {
          icon: <Share2 className="w-8 h-8" />,
          title: "Social Media Marketing",
          description: "Grow your brand presence and engagement with creative campaigns.",
          subservices: ["Instagram Growth", "LinkedIn Strategy", "Ad Campaigns"],
          link: "/services/social-media",
        },
        {
          icon: <Target className="w-8 h-8" />,
          title: "Performance Marketing",
          description: "Data-driven campaigns that maximize ROI and conversions.",
          subservices: ["Google Ads", "Facebook Ads", "Retargeting"],
          link: "/services/performance-marketing",
        },
        {
          icon: <Mail className="w-8 h-8" />,
          title: "Email Marketing",
          description: "Engage your audience with personalized email campaigns.",
          subservices: ["Automation", "Newsletters", "Lead Nurturing"],
          link: "/services/email-marketing",
        },
        {
          icon: <Video className="w-8 h-8" />,
          title: "Content Marketing",
          description: "Create compelling content that drives engagement.",
          subservices: ["Blog Writing", "Video Content", "Infographics"],
          link: "/services/content-marketing",
        },
      ],
    },
    {
      category: "Website Development",
      description: "Modern, scalable websites built with cutting-edge technology",
      services: [
        {
          icon: <Code className="w-8 h-8" />,
          title: "Custom Web Development",
          description: "Tailored websites and web applications built to your specifications.",
          subservices: ["React & Next.js", "Full-Stack Apps", "API Integration"],
          link: "/services/web-development",
        },
        {
          icon: <ShoppingCart className="w-8 h-8" />,
          title: "E-Commerce Solutions",
          description: "Complete online store setup with seamless payment integration.",
          subservices: ["Shopify", "WooCommerce", "Custom Stores"],
          link: "/services/ecommerce",
        },
        {
          icon: <Smartphone className="w-8 h-8" />,
          title: "Mobile-First Design",
          description: "Responsive designs that look perfect on all devices.",
          subservices: ["PWA Development", "App-Like Experience", "Touch Optimization"],
          link: "/services/mobile-design",
        },
        {
          icon: <Globe className="w-8 h-8" />,
          title: "Landing Pages",
          description: "High-converting landing pages optimized for campaigns.",
          subservices: ["A/B Testing", "Conversion Optimization", "Fast Loading"],
          link: "/services/landing-pages",
        },
      ],
    },
    {
      category: "SEO & Analytics",
      description: "Boost your visibility and track your success in real time",
      services: [
        {
          icon: <Search className="w-8 h-8" />,
          title: "SEO Optimization",
          description: "Boost your organic reach with smart, scalable SEO strategies.",
          subservices: ["On-Page Optimization", "Technical SEO", "Local SEO", "Link Building", "Schema & Structured Data"],
          link: "/services/seo",
        },
        {
          icon: <BrainCircuit className="w-8 h-8" />,
          title: "AI Blog & Content SEO",
          description: "Generate SEO-optimized blogs and articles automatically using AI.",
          subservices: ["AI Blog Writing", "Keyword Clustering", "Content Strategy Automation", "Topic Research", "Meta Optimization"],
          link: "/services/ai-seo-content",
        },
        {
          icon: <Zap className="w-8 h-8" />,
          title: "AI SEO Automation",
          description: "Automate audits, keyword tracking, and reporting with AI tools.",
          subservices: ["Automated SEO Audits", "Rank Tracking Automation", "Competitor Analysis AI", "SERP Insights", "Predictive SEO Growth"],
          link: "/services/ai-seo-automation",
        },
        {
          icon: <BarChart3 className="w-8 h-8" />,
          title: "Analytics & Tracking",
          description: "Comprehensive data analysis to understand your audience and ROI.",
          subservices: ["Google Analytics 4", "Conversion Tracking", "Event & Funnel Analysis", "Custom Dashboards", "Attribution Modeling"],
          link: "/services/analytics",
        },
        {
          icon: <Target className="w-8 h-8" />,
          title: "Voice & Visual Search SEO",
          description: "Optimize for the future of search using voice, image, and AI queries.",
          subservices: ["Voice Search Optimization", "Image SEO", "AI Answer Snippets", "Multilingual Optimization", "Mobile Indexing"],
          link: "/services/voice-visual-seo",
        },
        {
          icon: <TrendingUp className="w-8 h-8" />,
          title: "Growth Marketing",
          description: "Strategic growth hacking to scale your brand visibility.",
          subservices: ["User Acquisition", "Retention Strategy", "A/B Testing", "Conversion Optimization", "Organic Growth Tactics"],
          link: "/services/growth-marketing",
        },
        {
          icon: <FileSearch className="w-8 h-8" />,
          title: "AI Reputation Management",
          description: "Monitor and improve your online reputation with AI-powered tools.",
          subservices: ["Review Monitoring", "Sentiment Analysis", "Brand Alerts", "Response Automation", "Reputation Scoring"],
          link: "/services/ai-reputation",
        },
        {
          icon: <Link2 className="w-8 h-8" />,
          title: "Programmatic SEO",
          description: "Scale organic traffic with AI-generated pages targeting thousands of keywords.",
          subservices: ["Template-Based Pages", "Dynamic Content Generation", "Keyword Clustering at Scale", "Automated Internal Linking", "Landing Page Automation"],
          link: "/services/programmatic-seo",
        },
      ],
    },
  ];

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return serviceCategories;
    const q = searchQuery.toLowerCase();
    return serviceCategories
      .map((cat) => ({
        ...cat,
        services: cat.services.filter(
          (s) =>
            s.title.toLowerCase().includes(q) ||
            s.description.toLowerCase().includes(q) ||
            s.subservices?.some((sub) => sub.toLowerCase().includes(q))
        ),
      }))
      .filter((cat) => cat.services.length > 0);
  }, [searchQuery, serviceCategories]);

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="mb-16 md:mb-20 space-y-4">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            <span className="font-black">Expert</span>{" "}
            <span className="text-foreground">Digital Marketing</span>
            <br />
            <span className="text-foreground">Solutions for </span>
            <span className="text-primary">Maximum Growth</span>
            {cityName && <span className="text-foreground"> in {cityName}</span>}
          </h2>

          {/* Search Bar */}
          <div className="max-w-sm mt-6">
            <div className="relative">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Search className="w-4 h-4 text-primary-foreground" />
              </div>
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-4 py-3 rounded-full border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
              />
            </div>
          </div>
        </div>

        {/* Service Categories */}
        <div className="space-y-20 md:space-y-28">
          {filteredCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-8">
              {/* Category Header */}
              <div className="space-y-2">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  {category.category}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base max-w-xl">
                  {category.description}
                </p>
              </div>

              {/* Bento Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {category.services.map((service, index) => {
                  const accent = accentStyles[index % accentStyles.length];
                  const isSolid = accent.includes("bg-primary text-primary-foreground");

                  return (
                    <div
                      key={index}
                      className={`group relative rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] ${
                        accent || "bg-card border border-border hover:border-primary/40"
                      } ${isSolid ? "" : "hover:shadow-primary/10"}`}
                    >
                      {/* Icon */}
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${
                        isSolid
                          ? "bg-primary-foreground/20"
                          : "bg-primary/10"
                      }`}>
                        <div className={isSolid ? "text-primary-foreground" : "text-primary"}>
                          {service.icon}
                        </div>
                      </div>

                      <h4 className={`text-lg md:text-xl font-bold mb-2 ${
                        isSolid ? "text-primary-foreground" : "text-foreground"
                      }`}>
                        {service.title}
                      </h4>

                      <p className={`text-sm leading-relaxed mb-6 ${
                        isSolid ? "text-primary-foreground/80" : "text-muted-foreground"
                      }`}>
                        {service.description}
                      </p>

                      {/* Learn More Link */}
                      <Link
                        to={service.link}
                        className={`inline-flex items-center gap-1 text-sm font-medium transition-colors ${
                          isSolid
                            ? "text-primary-foreground hover:text-primary-foreground/80"
                            : "text-foreground hover:text-primary"
                        }`}
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {filteredCategories.length === 0 && searchQuery && (
            <div className="text-center py-16">
              <Search className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-muted-foreground text-lg">No services found for "{searchQuery}"</p>
              <button onClick={() => setSearchQuery("")} className="text-primary mt-2 hover:underline">Clear search</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
