import { Code, Search, Bot, Share2, Smartphone, TrendingUp, Mail, Palette, BarChart3, Video } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: "Web Development",
      description: "Custom websites and web applications built with the latest technologies for optimal performance and user experience."
    },
    {
      icon: <Bot className="w-12 h-12" />,
      title: "AI-Powered Websites",
      description: "Integrate intelligent features like chatbots, personalization, and automation to make your website smarter."
    },
    {
      icon: <Search className="w-12 h-12" />,
      title: "SEO Optimization",
      description: "Boost your search rankings with data-driven SEO strategies that increase visibility and organic traffic."
    },
    {
      icon: <Share2 className="w-12 h-12" />,
      title: "Social Media Marketing",
      description: "Build and engage your audience across all major platforms with strategic content and community management."
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies including PPC, content marketing, and conversion optimization."
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile Marketing",
      description: "Reach customers on-the-go with mobile-optimized campaigns, apps, and responsive design solutions."
    },
    {
      icon: <Mail className="w-12 h-12" />,
      title: "Email Marketing",
      description: "Automated email campaigns that nurture leads and drive conversions with personalized messaging."
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "Brand Strategy",
      description: "Develop a powerful brand identity that resonates with your target audience and stands out."
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Analytics & Insights",
      description: "Data-driven insights and comprehensive reporting to measure success and optimize performance."
    },
    {
      icon: <Video className="w-12 h-12" />,
      title: "Content Production",
      description: "Professional video, graphics, and content creation that tells your brand story effectively."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary text-sm font-bold uppercase tracking-wider">Our Services</span>
          <h2 className="text-4xl md:text-6xl font-bold">
            What We <span className="text-primary">Offer</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive marketing solutions powered by AI to accelerate your business growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Background on Hover */}
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
              </div>
              
              {/* Corner Decoration */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-primary/20 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
