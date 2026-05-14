import Link from "next/link";
import {
  AppWindow,
  ArrowUpRight,
  Boxes,
  Globe,
  MonitorSmartphone,
  RefreshCcw,
  Workflow,
} from "lucide-react";

const Services = ({ cityName }: { cityName?: string }) => {
  const services = [
    {
      icon: <AppWindow className="w-7 h-7 md:w-8 md:h-8" />,
      title: "SaaS Development",
      description: "Multi-tenant SaaS platforms with subscriptions, dashboards, roles, and production-ready architecture.",
      variant: "default" as const,
      slug: "ai-webapp",
    },
    {
      icon: <MonitorSmartphone className="w-7 h-7 md:w-8 md:h-8" />,
      title: "Web App Development",
      description: "Fast, secure web applications built with Next.js, React, TypeScript, and modern data systems.",
      variant: "secondary" as const,
      slug: "web-development",
    },
    {
      icon: <Workflow className="w-7 h-7 md:w-8 md:h-8" />,
      title: "AI Systems",
      description: "AI assistants, workflow automation, data intelligence, and product features powered by language models.",
      variant: "brand" as const,
      slug: "ai-webapp",
    },
    {
      icon: <RefreshCcw className="w-7 h-7 md:w-8 md:h-8" />,
      title: "Platform Modernization",
      description: "Migrate legacy sites, SPAs, and internal tools into scalable, maintainable product platforms.",
      variant: "secondary" as const,
      slug: "migration",
    },
    {
      icon: <Boxes className="w-7 h-7 md:w-8 md:h-8" />,
      title: "Custom Software",
      description: "Purpose-built portals, CRMs, booking systems, automations, integrations, and business tools.",
      variant: "default" as const,
      slug: "ai-webapp",
    },
    {
      icon: <Globe className="w-7 h-7 md:w-8 md:h-8" />,
      title: "Enterprise Websites",
      description: "High-performance brand and product websites with CMS workflows, accessibility, and analytics.",
      variant: "default" as const,
      slug: "ai-website",
    },
  ];

  const getCardClasses = (variant: "default" | "secondary" | "brand") => {
    switch (variant) {
      case "secondary":
        return "bg-secondary border-border";
      case "brand":
        return "border-transparent text-primary-foreground";
      default:
        return "bg-card border-border";
    }
  };

  const getTextClasses = (variant: "default" | "secondary" | "brand") =>
    variant === "brand" ? "text-primary-foreground/80" : "text-muted-foreground";

  const getIconClasses = (variant: "default" | "secondary" | "brand") => {
    switch (variant) {
      case "brand":
        return "bg-white/20";
      case "secondary":
        return "bg-primary/10 text-primary";
      default:
        return "bg-muted text-accent";
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-secondary/40">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-start justify-between mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display leading-tight max-w-3xl">
              <span className="font-bold">Software engineering services</span>{" "}
              <span className="font-normal">for ambitious product teams{cityName ? ` in ${cityName}` : ""}.</span>
            </h2>
            <Link
              href="/contact"
              className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-border text-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all flex-shrink-0"
              aria-label="Start a project"
            >
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {services.map((service) => (
              <Link
                href={`/services/${service.slug}`}
                key={service.title}
                className={`group relative rounded-xl border p-5 md:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl block ${getCardClasses(service.variant)}`}
                style={service.variant === "brand" ? { background: "var(--brand-gradient)" } : undefined}
              >
                <div className={`inline-flex items-center justify-center w-11 h-11 md:w-14 md:h-14 rounded-xl mb-4 md:mb-6 ${getIconClasses(service.variant)}`}>
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
                  Explore Service
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
