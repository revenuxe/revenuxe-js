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
      icon: <AppWindow className="w-8 h-8" />,
      title: "Build Web App Using AI",
      description: "Create powerful web applications rapidly using AI-powered platforms and no-code tools.",
      variant: "default" as const,
    },
    {
      icon: <MonitorSmartphone className="w-8 h-8" />,
      title: "Build Website Using AI",
      description: "Launch stunning websites in hours, not weeks, using AI website builders.",
      variant: "secondary" as const,
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Performance Marketing",
      description: "Data-driven campaigns that maximize ROI through Google Ads, Meta Ads & more.",
      variant: "brand" as const,
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "Social Media Marketing",
      description: "Grow your brand presence and engagement with creative social media campaigns.",
      variant: "secondary" as const,
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO Optimization",
      description: "Boost your organic reach with smart, scalable SEO strategies that drive traffic.",
      variant: "default" as const,
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Landing Pages",
      description: "High-converting landing pages optimized for campaigns with A/B testing.",
      variant: "default" as const,
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
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-start justify-between mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight max-w-2xl">
              <span className="font-bold italic">Expert</span>{" "}
              <span className="font-normal">Digital Marketing Solutions{cityName ? ` in ${cityName}` : ""} for Maximum Returns</span>
            </h2>
            <a
              href="/contact"
              className="hidden md:flex items-center justify-center w-14 h-14 rounded-full border-2 border-foreground text-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all flex-shrink-0"
            >
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative rounded-2xl border p-7 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] ${getCardClasses(service.variant)}`}
                style={service.variant === "brand" ? { background: "var(--brand-gradient)" } : undefined}
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full mb-6 ${getIconClasses(service.variant)}`}>
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-serif font-bold mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className={`text-sm leading-relaxed mb-6 ${getTextClasses(service.variant)}`}>
                  {service.description}
                </p>

                {/* Learn More link */}
                <button className={`text-sm font-medium border rounded-full px-5 py-2 transition-colors ${
                  service.variant === "brand"
                    ? "border-white/30 text-primary-foreground hover:bg-white/10"
                    : "border-foreground/20 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary"
                }`}>
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;