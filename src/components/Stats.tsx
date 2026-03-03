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
    <section className="py-20 md:py-32 bg-gradient-to-br from-background to-secondary relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-foreground">WHO WE ARE</span>
            </h2>
            <p className="text-lg md:text-xl max-w-3xl">
               <span className="text-foreground">AGENCY </span>
               <span className="text-primary">REVENUXE </span>
              <span className="text-foreground">SPECIALIZES IN </span>
              <span className="text-primary">MARKETING </span>
              <span className="text-foreground">FOR SMALL AND MEDIUM BUSINESSES FOR MORE THAN FOUR YEARS.</span>
            </p>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="border border-border rounded-lg p-4 md:p-8 lg:p-12 hover:border-primary transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider mb-2 md:mb-4">
                  {stat.label}
                </p>
                <p className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary">
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
