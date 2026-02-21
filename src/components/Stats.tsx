const Stats = () => {
  const stats = [
    {
      value: "10+",
      label: "Brands Launched",
    },
    {
      value: "3+",
      label: "Years of Growth & Innovation",
    },
    {
      value: "30+",
      label: "Projects Completed",
    },
    {
      value: "5",
      label: "Active Clients",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-background to-[hsl(0,30%,8%)] relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-foreground">WHO WE ARE</span>
            </h2>
            <p className="text-lg md:text-xl max-w-3xl">
              <span className="text-foreground">AGENCY </span>
              <span className="text-primary">ARROWMIND </span>
              <span className="text-foreground">SPECIALIZES IN </span>
              <span className="text-primary">MARKETING </span>
              <span className="text-foreground">FOR SMALL AND MEDIUM BUSINESSES FOR MORE THAN FOUR YEARS.</span>
            </p>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="border border-border rounded-lg p-8 md:p-12 hover:border-primary transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
                  {stat.label}
                </p>
                <p className="text-5xl md:text-6xl font-bold text-primary">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
          
          {/* Mission Statement */}
          <div className="mt-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <p className="text-muted-foreground text-base md:text-lg max-w-3xl">
              Our mission is to help automate marketing and build a development strategy. 
              We have proven that when we understand what marketers need for startups and 
              medium-sized businesses, growth is guaranteed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
