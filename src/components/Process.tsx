import { Lightbulb, Target, Rocket, LineChart } from "lucide-react";

const Process = ({ cityName }: { cityName?: string }) => {
  const steps = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      number: "01",
      title: "Discovery",
      description: `We analyze your business, audience, and competition${cityName ? ` in ${cityName}` : ''} to create a tailored strategy.`,
    },
    {
      icon: <Target className="w-8 h-8" />,
      number: "02",
      title: "Strategy",
      description: `Our experts develop a comprehensive plan${cityName ? ` for ${cityName} market` : ''} with clear objectives and KPIs.`,
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      number: "03",
      title: "Execution",
      description: "We implement campaigns across multiple channels with precision and creativity.",
    },
    {
      icon: <LineChart className="w-8 h-8" />,
      number: "04",
      title: "Optimize",
      description: "Continuous monitoring and optimization ensure maximum ROI and sustained growth.",
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif">
            <span className="font-normal">How We</span>{" "}
            <span className="font-bold italic text-accent">Work</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A proven methodology that transforms ideas into measurable success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="bg-card border border-border rounded-2xl p-7 hover:border-accent/50 transition-all duration-300 hover:shadow-lg h-full">
                <div className="text-accent font-bold text-sm mb-6">{step.number}</div>
                
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary text-primary mb-5 group-hover:text-primary-foreground transition-colors"
                  style={{ transition: "all 0.3s" }}
                >
                  <div className="group-hover:hidden">{step.icon}</div>
                  <div className="hidden group-hover:block text-primary-foreground">{step.icon}</div>
                </div>
                
                <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;