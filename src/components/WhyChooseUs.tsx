const WhyChooseUs = () => {
  const benefits = [
    {
      title: "Flexibility and client-oriented approach",
      highlight: "CLIENT-ORIENTED",
    },
    {
      title: "Work with multi-channel advertising campaigns",
      highlight: "MULTI-CHANNEL",
    },
    {
      title: "Guaranteed lead generation during test campaign period",
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
              <span className="text-primary">ARROWMIND</span>
            </h2>
          </div>
          
          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="relative bg-card border border-border rounded-lg p-8 md:p-10 hover:border-primary transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Decorative Plus */}
                <div className="absolute top-6 right-6 text-primary text-3xl opacity-50 group-hover:opacity-100 transition-opacity">
                  +
                </div>
                
                {/* Content */}
                <div className="space-y-4">
                  <p className="text-lg md:text-xl">
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
                <div className="absolute bottom-6 right-6 text-xs text-muted-foreground opacity-50">
                  arrowmind+
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA */}
          <div className="mt-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-all">
              START COLLABORATION
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
