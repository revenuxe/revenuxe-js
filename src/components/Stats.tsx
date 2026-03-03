const Stats = () => {
  const stats = [
    { value: "10+", label: "Brands Launched" },
    { value: "3+", label: "Years of Growth & Innovation" },
    { value: "30+", label: "Projects Completed" },
    { value: "5", label: "Active Clients" },
  ];

  return (
    <section className="py-20 md:py-32 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-16">
            {/* Left - Description */}
            <div className="space-y-4">
              <p className="text-lg md:text-xl font-semibold text-foreground leading-snug">
                Together, we help businesses thrive with expert AI marketing strategies
              </p>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                We specialize in AI-powered marketing for small and medium businesses, 
                delivering exceptional results and ensuring client satisfaction in every project.
              </p>
            </div>

            {/* Right - Big Heading */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
                <span className="text-foreground">We Help Businesses </span>
                <span className="text-primary">Thrive </span>
                <span className="text-foreground">With Expert AI Marketing Strategies.</span>
              </h2>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 pt-8 border-t border-border">
            {stats.map((stat, index) => (
              <div key={index} className="py-4">
                <p className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-sm md:text-base text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
