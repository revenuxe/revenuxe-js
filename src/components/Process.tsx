import { Lightbulb, Target, Rocket, LineChart } from "lucide-react";

const Process = ({ cityName }: { cityName?: string }) => {
  const steps = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Maximize Return on Investments",
      description: `We analyze your business and competition${cityName ? ` in ${cityName}` : ''} to create strategies that deliver measurable ROI.`,
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Simplify Marketing Decisions Effectively",
      description: `Our experts develop clear plans${cityName ? ` for ${cityName} market` : ''} with actionable KPIs and data-driven insights.`,
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Build Long-Term Growth Strategically",
      description: "Continuous optimization and scaling ensure sustained growth for your business over time.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-foreground relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 space-y-3">
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary-foreground leading-tight">
            <span className="italic">Achieve</span> Your Ambitions
          </h2>
          <p className="text-primary-foreground/70 text-lg md:text-xl">
            Goal Setting for Success
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="rounded-2xl p-6 md:p-8 transition-all duration-300 hover:scale-[1.02]"
              style={{
                backgroundColor: "hsl(215 40% 28%)",
              }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-primary-foreground/10 flex items-center justify-center mb-16 md:mb-24">
                <div className="text-accent">
                  {step.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold text-primary-foreground mb-3">
                {step.title}
              </h3>

              <p className="text-primary-foreground/60 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
