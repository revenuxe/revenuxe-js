const Stats = () => {
  const stats = [
    { value: "30+", label: "Successful Projects", highlight: false },
    { value: "10+", label: "Happy Clients", highlight: false },
    { value: "3+", label: "Years of Innovation", highlight: true },
    { value: "5", label: "Active Partnerships", highlight: true },
  ];

  return (
    <section className="py-14 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 items-center">
            <div className="animate-fade-in">
              <p className="text-base md:text-lg text-foreground leading-relaxed">
                Together, we make businesses thrive with expert digital marketing strategies
              </p>
              <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                We unlock growth potential with AI-powered strategies, delivering exceptional results and ensuring client satisfaction in every project.
              </p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display leading-tight">
                <span className="font-bold">We Make Businesses</span>{" "}
                <span className="font-normal">Thrive With Expert Digital Marketing Strategies.</span>
              </h2>
            </div>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <p className={`text-3xl sm:text-4xl md:text-5xl font-display font-bold ${stat.highlight ? "text-accent" : "text-foreground"}`}>
                  {stat.value}
                </p>
                <p className="text-xs md:text-sm text-muted-foreground mt-2">
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