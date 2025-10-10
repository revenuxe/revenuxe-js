import {
  Code,
  Search,
  Bot,
  Share2,
  Smartphone,
  TrendingUp,
  Mail,
  Palette,
  BarChart3,
  Video,
  BrainCircuit,
  Layers,
  Workflow,
  Globe,
  Cpu,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: "Web Development",
      description:
        "Modern, scalable websites and web apps that blend performance with creativity.",
      subservices: ["Next.js", "WordPress", "Odoo", "Shopify", "Custom SaaS"],
    },
    {
      icon: <Bot className="w-12 h-12" />,
      title: "AI-Powered Websites",
      description:
        "Enhance websites with intelligent automation, personalization, and AI chatbots.",
      subservices: [
        "AI Chat Integration",
        "AI-Personalized UX",
        "Dynamic Content Generation",
      ],
    },
    {
      icon: <BrainCircuit className="w-12 h-12" />,
      title: "AI Media Suite",
      description:
        "Transform your content with generative AI — from visuals to storytelling campaigns.",
      subservices: [
        "AI Video Campaigns",
        "AI Voiceovers",
        "Generative Brand Ads",
        "AI Social Creatives",
      ],
    },
    {
      icon: <Layers className="w-12 h-12" />,
      title: "Vibe Coding Webapps",
      description:
        "Next-gen interactive webapps built with immersive UI/UX and adaptive intelligence.",
      subservices: [
        "Realtime Dashboards",
        "AI-Based Automation Tools",
        "Custom CRM Platforms",
        "Data-Driven Portals",
      ],
    },
    {
      icon: <Search className="w-12 h-12" />,
      title: "SEO Optimization",
      description:
        "Boost rankings with smart, data-driven SEO strategies that deliver measurable growth.",
      subservices: [
        "Technical SEO",
        "Local SEO",
        "On-Page Optimization",
        "Link Building",
      ],
    },
    {
      icon: <Share2 className="w-12 h-12" />,
      title: "Social Media Marketing",
      description:
        "Create buzz and brand loyalty through creative storytelling and community engagement.",
      subservices: [
        "Instagram Growth",
        "LinkedIn Branding",
        "Performance Ads",
        "Influencer Collabs",
      ],
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Digital Marketing",
      description:
        "Full-funnel marketing strategy combining performance, analytics, and conversion design.",
      subservices: ["PPC Campaigns", "Funnel Optimization", "Retargeting Ads"],
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile Marketing",
      description:
        "Reach your audience wherever they are through optimized mobile campaigns and apps.",
      subservices: [
        "Mobile Ads",
        "App Store Optimization",
        "Responsive UI Design",
      ],
    },
    {
      icon: <Mail className="w-12 h-12" />,
      title: "Email & Automation",
      description:
        "Automate communication with high-converting, behavior-driven email flows.",
      subservices: [
        "Drip Campaigns",
        "Transactional Emails",
        "Customer Retention Flows",
      ],
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "Brand Strategy & Design",
      description:
        "Craft a powerful brand story and cohesive visual identity that connects and converts.",
      subservices: ["Logo Design", "Brand Guidelines", "Messaging Frameworks"],
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Analytics & Insights",
      description:
        "Turn marketing data into business intelligence with deep insight and forecasting.",
      subservices: [
        "Google Analytics 4",
        "Heatmap Analysis",
        "AI Trend Prediction",
      ],
    },
    {
      icon: <Video className="w-12 h-12" />,
      title: "Content & Video Production",
      description:
        "Professional video and creative content that inspires, engages, and converts.",
      subservices: ["Product Videos", "Reels & Shorts", "Ad Films", "Motion Graphics"],
    },
    {
      icon: <Workflow className="w-12 h-12" />,
      title: "Automation Systems",
      description:
        "Streamline business workflows with no-code and AI-driven automation tools.",
      subservices: [
        "Zapier / Make Integrations",
        "CRM Automations",
        "AI Workflow Bots",
      ],
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Global Campaigns",
      description:
        "Launch and scale your brand across regions with localized multilingual strategies.",
      subservices: [
        "Geo-Targeted Ads",
        "Language Localization",
        "Cultural Adaptation",
      ],
    },
    {
      icon: <Cpu className="w-12 h-12" />,
      title: "AI Marketing Intelligence",
      description:
        "Predict trends, monitor competition, and make smarter ad decisions with AI insights.",
      subservices: [
        "Predictive Analytics",
        "Ad Spend Optimization",
        "Competitor Tracking",
      ],
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary text-sm font-bold uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-4xl md:text-6xl font-bold">
            What We <span className="text-primary">Offer</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Complete digital & AI-driven marketing solutions designed to scale
            your brand with intelligence and creativity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
              <div className="relative z-10 space-y-4">
                <div className="text-primary transform group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                {service.subservices && (
                  <ul className="text-sm text-muted-foreground space-y-1 mt-3">
                    {service.subservices.map((sub, i) => (
                      <li key={i}>• {sub}</li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-primary/20 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

