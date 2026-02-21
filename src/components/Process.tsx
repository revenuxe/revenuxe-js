import { Lightbulb, Target, Rocket, LineChart } from "lucide-react";

const Process = ({ cityName }: { cityName?: string }) => {
  const steps = [
    {
      icon: <Lightbulb className="w-10 h-10" />,
      number: "01",
      title: "Discovery",
      description: `We analyze your business, audience, and competition${cityName ? ` in ${cityName}` : ''} to create a tailored strategy that delivers results.`
    },
    {
      icon: <Target className="w-10 h-10" />,
      number: "02",
      title: "Strategy",
      description: `Our experts develop a comprehensive marketing plan${cityName ? ` for ${cityName} market` : ''} with clear objectives and measurable KPIs.`
    },
    {
      icon: <Rocket className="w-10 h-10" />,
      number: "03",
      title: "Execution",
      description: "We implement campaigns across multiple channels with precision and creativity that captures attention."
    },
    {
      icon: <LineChart className="w-10 h-10" />,
      number: "04",
      title: "Optimize",
      description: "Continuous monitoring and optimization ensure maximum ROI and sustained growth for your business."
    }
  ];

  return (
    <section className="py-24 bg-card/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary text-sm font-bold uppercase tracking-wider">Our Process</span>
          <h2 className="text-4xl md:text-6xl font-bold">
            How We <span className="text-primary">Work</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A proven methodology that transforms ideas into measurable success
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
