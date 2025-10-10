import {
  Code,
  Search,
  Bot,
  Share2,
  BrainCircuit,
  Layers,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom"; // or next/link

const Services = () => {
  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: "Web Development",
      description:
        "Modern, scalable websites and apps that perform beautifully across all devices.",
      subservices: ["Next.js", "Shopify", "Odoo", "Custom SaaS"],
      link: "/services/web-development",
    },
    {
      icon: <Bot className="w-12 h-12" />,
      title: "AI-Powered Websites",
      description:
        "Enhance your website with intelligent automation, chatbots, and AI content generation.",
      subservices: ["AI Chat", "Personalized UX", "Dynamic AI Content"],
      link: "/services/ai-websites",
    },
    {
      icon: <BrainCircuit className="w-12 h-12" />,
      title: "AI Media Suite",
      description:
        "Create stunning visuals, videos, and campaigns powered by AI creativity.",
      subservices: ["AI Ads", "Voiceovers", "Video Campaigns"],
      link: "/services/ai-media",
    },
    {
      icon: <Layers className="w-12 h-12" />,
      title: "Vibe Coding Apps",
      description:
        "Immersive and dynamic webapps built for next-gen user experience.",
      subservices: ["Dashboards", "CRM Tools", "Automation"],
      link: "/services/vibe-coding",
    },
    {
      icon: <Search className="w-12 h-12" />,
      title: "SEO Optimization",
      description:
        "Boost your organic reach with smart, scalable SEO strategies.",
      subservices: ["Local SEO", "Technical SEO", "Link Building"],
      link: "/services/seo",
    },
    {
      icon: <Share2 className="w-12 h-12" />,
      title: "Social Media Marketing",
      description:
        "Grow your brand presence and engagement with creative campaigns.",
      subservices: ["Instagram", "LinkedIn", "Ad Campaigns"],
      link: "/services/social-media",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
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
            your brand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/60 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:scale-[1.03]"
            >
              <div className="text-primary mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors flex items-center justify-between">
                {service.title}
                <Link
                  to={service.link}
                  className="w-20 h-20 flex items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-all duration-300"
                >
                  <ArrowRight className="w-10 h-10" />
                </Link>
              </h3>

              <p className="text-muted-foreground leading-relaxed mb-3">
                {service.description}
              </p>

              {service.subservices && (
                <ul className="text-sm text-muted-foreground space-y-1">
                  {service.subservices.map((sub, i) => (
                    <li key={i}>• {sub}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

