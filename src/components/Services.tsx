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
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom"; // or `next/link` for Next.js

const Services = () => {
  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: "Web Development",
      description:
        "Modern, scalable websites and web apps that blend performance with creativity.",
      subservices: ["Next.js", "WordPress", "Odoo", "Shopify", "Custom SaaS"],
      link: "/services/web-development",
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
      link: "/services/ai-websites",
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
      link: "/services/ai-media",
    },
    {
      icon: <Layers className="w-12 h-12" />,
      title: "Vibe Coding Webapps",
      description:
        "Next-gen interactive webapps built with immersive UI/UX and adaptive intelligence.",
      subservices: [
        "Realtime Dashboards",
        "AI Automation Tools",
        "Custom CRM Platforms",
        "Data-Driven Portals",
      ],
      link: "/services/vibe-coding",
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
      link: "/services/seo",
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
      link: "/services/social-media",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-primary/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10 flex flex-col h-full justify-between space-y-5">
                <div>
                  <div className="text-primary mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
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

                {/* Circular arrow aligned with text area */}
                <div className="flex justify-end mt-4">
                  <Link
                    to={service.link}
                    className="flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full shadow-md hover:shadow-lg hover:bg-primary/90 transition-all duration-300"
                  >
                    <ArrowRight className="w-8 h-8" />
                  </Link>
                </div>
              </div>

              {/* Corner Decoration */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-primary/20 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
