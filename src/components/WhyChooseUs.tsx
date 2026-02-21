const WhyChooseUs = ({ cityName }: { cityName?: string }) => {
  const benefits = [
    {
      title: `Flexibility and client-oriented approach${cityName ? ` for ${cityName} businesses` : ''}`,
      highlight: "CLIENT-ORIENTED",
    },
    {
      title: `Work with multi-channel advertising campaigns${cityName ? ` in ${cityName}` : ''}`,
      highlight: "MULTI-CHANNEL",
    },
    {
      title: `Guaranteed lead generation during test campaign period${cityName ? ` in ${cityName}` : ''}`,
      highlight: "GUARANTEED LEADS",
    },
    {
      title: "Ability to delegate specific business aspects",
      highlight: "DELEGATION",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              <span className="text-foreground">WHY CHOOSE </span>
              <span className="text-primary">REVENUXE</span>
            </h2>
          </div>
          
          {/* Benefits Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="relative bg-card border border-border rounded-lg p-4 md:p-8 lg:p-10 hover:border-primary transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Decorative Plus */}
                <div className="absolute top-3 right-3 md:top-6 md:right-6 text-primary text-xl md:text-3xl opacity-50 group-hover:opacity-100 transition-opacity">
                  +
                </div>
                
                {/* Content */}
                <div className="space-y-4">
                  <p className="text-sm md:text-lg lg:text-xl leading-snug">
                    {benefit.title.split(benefit.highlight.toLowerCase()).map((part, i, arr) => (
                      <span key={i}>
                        {part}
                        {i < arr.length - 1 && (
                          <span className="text-primary font-semibold">
                            {benefit.highlight.toLowerCase()}
                          </span>
                        )}
                      </span>
                    ))}
                  </p>
                </div>
                
                {/* Small branding */}
                <div className="absolute bottom-3 right-3 md:bottom-6 md:right-6 text-[10px] md:text-xs text-muted-foreground opacity-50">
                  revenuxe+
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA */}
          <div className="mt-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <button className="text-white bg-[image:var(--brand-gradient)] hover:bg-[image:var(--brand-gradient-hover)] px-8 py-4 rounded-lg font-semibold transition-all shadow-lg shadow-primary/20">
              START COLLABORATION
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
