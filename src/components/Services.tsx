import {
  Code,
  Search,
  Bot,
  Share2,
  BrainCircuit,
  Layers,
  ArrowRight,
  Globe,
  ShoppingCart,
  Smartphone,
  Target,
  TrendingUp,
  BarChart3,
  Mail,
  Video,
  Zap,
  Palette,
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const serviceCategories = [
    {
      category: "Marketing Services",
      description: "Comprehensive marketing solutions to grow your brand",
      services: [
        {
          icon: <Share2 className="w-10 h-10" />,
          title: "Social Media Marketing",
          description: "Grow your brand presence and engagement with creative campaigns.",
          subservices: ["Instagram Growth", "LinkedIn Strategy", "Ad Campaigns"],
          link: "/services/social-media",
        },
        {
          icon: <Target className="w-10 h-10" />,
          title: "Performance Marketing",
          description: "Data-driven campaigns that maximize ROI and conversions.",
          subservices: ["Google Ads", "Facebook Ads", "Retargeting"],
          link: "/services/performance-marketing",
        },
        {
          icon: <Mail className="w-10 h-10" />,
          title: "Email Marketing",
          description: "Engage your audience with personalized email campaigns.",
          subservices: ["Automation", "Newsletters", "Lead Nurturing"],
          link: "/services/email-marketing",
        },
        {
          icon: <Video className="w-10 h-10" />,
          title: "Content Marketing",
          description: "Create compelling content that drives engagement and conversions.",
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
          icon: <Code className="w-10 h-10" />,
          title: "Custom Web Development",
          description: "Tailored websites and web applications built to your specifications.",
          subservices: ["React & Next.js", "Full-Stack Apps", "API Integration"],
          link: "/services/web-development",
        },
        {
          icon: <ShoppingCart className="w-10 h-10" />,
          title: "E-Commerce Solutions",
          description: "Complete online store setup with payment integration.",
          subservices: ["Shopify", "WooCommerce", "Custom Stores"],
          link: "/services/ecommerce",
        },
        {
          icon: <Smartphone className="w-10 h-10" />,
          title: "Mobile-First Design",
          description: "Responsive designs that look perfect on all devices.",
          subservices: ["PWA Development", "App-Like Experience", "Touch Optimization"],
          link: "/services/mobile-design",
        },
        {
          icon: <Globe className="w-10 h-10" />,
          title: "Landing Pages",
          description: "High-converting landing pages optimized for campaigns.",
          subservices: ["A/B Testing", "Conversion Optimization", "Fast Loading"],
          link: "/services/landing-pages",
        },
      ],
    },
    {
      category: "SEO & Analytics",
      description: "Boost your visibility and track your success",
      services: [
        {
          icon: <Search className="w-10 h-10" />,
          title: "SEO Optimization",
          description: "Boost your organic reach with smart, scalable SEO strategies.",
          subservices: ["Local SEO", "Technical SEO", "Link Building"],
          link: "/services/seo",
        },
        {
          icon: <BarChart3 className="w-10 h-10" />,
          title: "Analytics & Tracking",
          description: "Comprehensive data analysis to understand your audience.",
          subservices: ["Google Analytics", "Conversion Tracking", "Custom Reports"],
          link: "/services/analytics",
        },
        {
          icon: <TrendingUp className="w-10 h-10" />,
          title: "Growth Marketing",
          description: "Strategic growth hacking to scale your business rapidly.",
          subservices: ["User Acquisition", "Retention Strategy", "Viral Marketing"],
          link: "/services/growth-marketing",
        },
      ],
    },
    {
      category: "AI-Powered Solutions",
      description: "Cutting-edge AI technology for modern businesses",
      services: [
        {
          icon: <Bot className="w-10 h-10" />,
          title: "AI Chatbots",
          description: "Intelligent chatbots that enhance customer experience 24/7.",
          subservices: ["Customer Support", "Lead Generation", "Multi-Language"],
          link: "/services/ai-chatbots",
        },
        {
          icon: <BrainCircuit className="w-10 h-10" />,
          title: "AI Content Generation",
          description: "Create engaging content at scale with AI technology.",
          subservices: ["Blog Posts", "Product Descriptions", "Social Media Copy"],
          link: "/services/ai-content",
        },
        {
          icon: <Palette className="w-10 h-10" />,
          title: "AI Design Studio",
          description: "Generate stunning visuals and designs with AI creativity.",
          subservices: ["Image Generation", "Brand Assets", "Ad Creatives"],
          link: "/services/ai-design",
        },
        {
          icon: <Zap className="w-10 h-10" />,
          title: "AI Automation",
          description: "Automate workflows and processes with intelligent systems.",
          subservices: ["Task Automation", "Smart Workflows", "Predictive Analytics"],
          link: "/services/ai-automation",
        },
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
        <div className="text-center mb-20 space-y-4">
          <span className="text-primary text-sm font-bold uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-4xl md:text-6xl font-bold">
            What We <span className="text-primary">Offer</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Complete digital & AI-driven marketing solutions designed to scale
            your brand.
          </p>
        </div>

        {/* Service Categories */}
        <div className="space-y-24">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-8">
              {/* Category Header */}
              <div className="text-center space-y-2">
                <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                  {category.category}
                </h3>
                <p className="text-muted-foreground text-base max-w-xl mx-auto">
                  {category.description}
                </p>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.services.map((service, index) => (
                  <div
                    key={index}
                    className="group relative bg-card border border-border rounded-2xl p-6 hover:border-primary/60 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:scale-[1.03]"
                  >
                    <div className="text-primary mb-4">{service.icon}</div>

                    <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-3">
                      {service.title}
                    </h4>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {service.subservices && (
                      <ul className="text-xs text-muted-foreground space-y-1 mb-4">
                        {service.subservices.map((sub, i) => (
                          <li key={i}>• {sub}</li>
                        ))}
                      </ul>
                    )}

                    <Link
                      to={service.link}
                      className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:gap-3 transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
