import { ArrowRight } from "lucide-react";

const WhyChooseUs = ({ cityName }: { cityName?: string }) => {
  const benefits = [
    {
      title: `Flexibility and client-oriented approach${cityName ? ` for ${cityName} businesses` : ''}`,
      highlight: "client-oriented",
    },
    {
      title: `Work with multi-channel advertising campaigns${cityName ? ` in ${cityName}` : ''}`,
      highlight: "multi-channel",
    },
    {
      title: `Guaranteed lead generation during test campaign period${cityName ? ` in ${cityName}` : ''}`,
      highlight: "guaranteed",
    },
    {
      title: "Ability to delegate specific business aspects",
      highlight: "delegate",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
              <span className="text-foreground">Why Choose </span>
              <span className="text-primary">Revenuxe</span>
            </h2>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                {/* Arrow */}
                <div className="absolute top-5 right-5 w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                </div>

                {/* Content */}
                <div className="mt-10 md:mt-12">
                  <p className="text-sm md:text-base leading-relaxed text-foreground">
                    {benefit.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
