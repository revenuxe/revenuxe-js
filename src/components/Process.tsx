import { Figma, Lightbulb, Rocket, Route, TerminalSquare } from "lucide-react";

const Process = ({ cityName }: { cityName?: string }) => {
  const steps = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      number: "01",
      title: "Discovery",
      description: `We map product goals, users, technical constraints, and business priorities${cityName ? ` in ${cityName}` : ""}.`,
    },
    {
      icon: <Route className="w-8 h-8" />,
      number: "02",
      title: "Strategy",
      description: "We define the roadmap, architecture, integrations, delivery milestones, and success metrics.",
    },
    {
      icon: <Figma className="w-8 h-8" />,
      number: "03",
      title: "Design",
      description: "We design app-like interfaces, flows, and component systems that support real product usage.",
    },
    {
      icon: <TerminalSquare className="w-8 h-8" />,
      number: "04",
      title: "Development",
      description: "We build, integrate, test, and harden the platform with clean code and scalable foundations.",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      number: "05",
      title: "Launch",
      description: "We ship with deployment workflows, analytics, monitoring, and a plan for iteration.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16 space-y-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display">
            <span className="font-normal">Development</span>{" "}
            <span className="font-bold text-accent">Process</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
            A focused development process for moving from idea to production.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative group animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="bg-card border border-border rounded-xl p-5 md:p-6 hover:border-accent/50 transition-all duration-300 hover:shadow-lg h-full">
                <div className="text-accent font-bold text-xs md:text-sm mb-4 md:mb-6">{step.number}</div>
                <div className="inline-flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-xl bg-secondary text-accent mb-4 md:mb-5">
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
