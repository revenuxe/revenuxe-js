import { Lightbulb, Target, Rocket, LineChart } from "lucide-react";

const Process = ({ cityName }: { cityName?: string }) => {
  const steps = [
    {
      icon: <Lightbulb className="w-10 h-10" />,
      number: "01",
      title: "Free Website Audit",
      description: `We conduct comprehensive SEO audits, competitor analysis, and market research${cityName ? ` for ${cityName} businesses` : ''} to identify growth opportunities and quick wins.`
    },
    {
      icon: <Target className="w-10 h-10" />,
      number: "02",
      title: "Custom Strategy Development",
      description: `Our digital marketing experts create a tailored strategy${cityName ? ` for the ${cityName} market` : ''} combining SEO, PPC, social media, and content marketing for maximum impact.`
    },
    {
      icon: <Rocket className="w-10 h-10" />,
      number: "03",
      title: "Campaign Execution",
      description: "We launch and manage high-converting campaigns across Google Ads, Facebook, Instagram, LinkedIn, and organic search channels."
    },
    {
      icon: <LineChart className="w-10 h-10" />,
      number: "04",
      title: "Track, Optimize & Scale",
      description: "Continuous monitoring with detailed analytics, A/B testing, and optimization to maximize ROI and scale your business growth."
    }
  ];

  return (
    <section className="py-24 bg-card/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary text-sm font-bold uppercase tracking-wider">Our Proven Process</span>
          <h2 className="text-4xl md:text-6xl font-bold">
            How We <span className="text-primary">Grow Your Business</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            A results-driven digital marketing process that has helped 50+ businesses 
            <strong className="text-foreground"> increase traffic</strong>, 
            <strong className="text-foreground"> generate leads</strong>, and 
            <strong className="text-foreground"> boost online sales</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}
              
              <div className="relative bg-card border-2 border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 h-full">
                {/* Number Badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg">
                  {step.number}
                </div>
                
                <div className="space-y-4">
                  <div className="inline-block p-4 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {step.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
