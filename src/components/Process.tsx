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
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16 space-y-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display">
            <span className="font-normal">How We</span>{" "}
            <span className="font-bold italic text-accent">Work</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
            A proven methodology that transforms ideas into measurable success
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="bg-card border border-border rounded-xl md:rounded-2xl p-5 md:p-7 hover:border-accent/50 transition-all duration-300 hover:shadow-lg h-full">
                <div className="text-accent font-bold text-xs md:text-sm mb-4 md:mb-6">{step.number}</div>
                <div className="inline-flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-full bg-secondary text-primary mb-4 md:mb-5">
                  {step.icon}
                </div>
                <h3 className="text-base md:text-lg font-display font-bold text-foreground mb-2 md:mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
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