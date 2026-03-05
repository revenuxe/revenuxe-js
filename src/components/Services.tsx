import { Link } from "react-router-dom";
import {
  AppWindow,
  MonitorSmartphone,
  Target,
  Share2,
  Search,
  Globe,
  ArrowUpRight,
} from "lucide-react";

const Services = ({ cityName }: { cityName?: string }) => {
  const services = [
    {
      icon: <AppWindow className="w-7 h-7 md:w-8 md:h-8" />,
      title: "Build Web App Using AI",
      description: "Create powerful web applications rapidly using AI-powered platforms and no-code tools.",
      variant: "default" as const,
      slug: "ai-webapp",
    },
    {
      icon: <MonitorSmartphone className="w-7 h-7 md:w-8 md:h-8" />,
      title: "Build Website Using AI",
      description: "Launch stunning websites in hours, not weeks, using AI website builders.",
      variant: "secondary" as const,
      slug: "ai-website",
    },
    {
      icon: <Target className="w-7 h-7 md:w-8 md:h-8" />,
      title: "Performance Marketing",
      description: "Data-driven campaigns that maximize ROI through Google Ads, Meta Ads & more.",
      variant: "brand" as const,
      slug: "performance-marketing",
    },
    {
      icon: <Share2 className="w-7 h-7 md:w-8 md:h-8" />,
      title: "Social Media Marketing",
      description: "Grow your brand presence and engagement with creative social media campaigns.",
      variant: "secondary" as const,
      slug: "social-media",
    },
    {
      icon: <Search className="w-7 h-7 md:w-8 md:h-8" />,
      title: "SEO Optimization",
      description: "Boost your organic reach with smart, scalable SEO strategies that drive traffic.",
      variant: "default" as const,
      slug: "seo",
    },
    {
      icon: <Globe className="w-7 h-7 md:w-8 md:h-8" />,
      title: "Landing Pages",
      description: "High-converting landing pages optimized for campaigns with A/B testing.",
      variant: "default" as const,
      slug: "landing-pages",
    },
  ];

  const getCardClasses = (variant: "default" | "secondary" | "brand") => {
    switch (variant) {
      case "secondary":
        return "bg-secondary border-secondary";
      case "brand":
        return "border-transparent text-primary-foreground";
      default:
        return "bg-card border-border";
    }
  };

  const getTextClasses = (variant: "default" | "secondary" | "brand") => {
    switch (variant) {
      case "brand":
        return "text-primary-foreground/80";
      default:
        return "text-muted-foreground";
    }
  };

  const getIconClasses = (variant: "default" | "secondary" | "brand") => {
    switch (variant) {
      case "brand":
        return "bg-white/20";
      case "secondary":
        return "bg-primary/10";
      default:
        return "bg-muted";
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-start justify-between mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display leading-tight max-w-2xl">
              <span className="font-bold italic">Expert</span>{" "}
              <span className="font-normal">Digital Marketing Solutions{cityName ? ` in ${cityName}` : ""} for Maximum Returns</span>
            </h2>
            <a
              href="/contact"
              className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border-2 border-foreground text-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all flex-shrink-0"
            >
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {services.map((service, index) => (
              <Link
                to={`/services/${service.slug}`}
                key={index}
                className={`group relative rounded-2xl border p-5 md:p-7 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] block ${getCardClasses(service.variant)}`}
                style={service.variant === "brand" ? { background: "var(--brand-gradient)" } : undefined}
              >
                <div className={`inline-flex items-center justify-center w-11 h-11 md:w-14 md:h-14 rounded-full mb-4 md:mb-6 ${getIconClasses(service.variant)}`}>
                  {service.icon}
                </div>
                <h3 className="text-lg md:text-xl font-display font-bold mb-2 md:mb-3">
                  {service.title}
                </h3>
                <p className={`text-xs md:text-sm leading-relaxed mb-4 md:mb-6 ${getTextClasses(service.variant)}`}>
                  {service.description}
                </p>
                <span className={`inline-block text-xs md:text-sm font-medium border rounded-full px-4 md:px-5 py-1.5 md:py-2 transition-colors ${
                  service.variant === "brand"
                    ? "border-white/30 text-primary-foreground group-hover:bg-white/10"
                    : "border-foreground/20 text-foreground group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary"
                }`}>
                  Learn More
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;