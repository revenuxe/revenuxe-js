import { Code, TrendingUp, Search, Sparkles, Share2, MoreHorizontal } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Comprehensive marketing strategies to grow your online presence",
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Improve your search rankings and drive organic traffic",
    },
    {
      icon: Sparkles,
      title: "AI-Powered Websites",
      description: "Cutting-edge AI integration for intelligent user experiences",
    },
    {
      icon: Share2,
      title: "Media Marketing",
      description: "Social media strategies that engage and convert audiences",
    },
    {
      icon: MoreHorizontal,
      title: "And More",
      description: "Additional services tailored to your business needs",
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-foreground">OUR </span>
              <span className="text-primary">SERVICES</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive digital solutions to elevate your business
            </p>
          </div>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-card border border-border rounded-lg p-8 hover:border-primary transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <service.icon className="h-6 w-6" />
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
                
                {/* Decorative Element */}
                <div className="absolute top-4 right-4 text-primary opacity-20 group-hover:opacity-100 transition-opacity">
                  <span className="text-2xl">+</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
