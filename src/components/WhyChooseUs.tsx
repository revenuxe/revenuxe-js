import { useState } from "react";
import { GetStartedDialog } from "./GetStartedDialog";

const WhyChooseUs = ({ cityName }: { cityName?: string }) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const benefits = [
    {
      title: `Proven SEO strategies that rank websites on Google's first page${cityName ? ` in ${cityName}` : ''}`,
      highlight: "GOOGLE'S FIRST PAGE",
    },
    {
      title: `Data-driven PPC campaigns with 300%+ ROI on Google Ads & Meta Ads${cityName ? ` for ${cityName} businesses` : ''}`,
      highlight: "300%+ ROI",
    },
    {
      title: `Guaranteed lead generation & sales growth within 90 days${cityName ? ` in ${cityName}` : ''}`,
      highlight: "90 DAYS",
    },
    {
      title: "Dedicated account managers & transparent monthly reporting",
      highlight: "TRANSPARENT REPORTING",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header - SEO Optimized */}
          <div className="mb-16 animate-fade-in">
            <span className="text-primary text-sm font-bold uppercase tracking-wider">
              Why Businesses Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
              <span className="text-foreground">WHY </span>
              <span className="text-primary">ARROWMIND</span>
              <span className="text-foreground"> IS THE BEST</span>
              <br />
              <span className="text-foreground">DIGITAL MARKETING AGENCY{cityName ? ` IN ${cityName.toUpperCase()}` : ''}</span>
            </h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-3xl">
              We combine <strong className="text-foreground">AI-powered marketing automation</strong>, 
              <strong className="text-foreground"> advanced SEO techniques</strong>, and 
              <strong className="text-foreground"> performance marketing expertise</strong> to deliver 
              exceptional results for businesses of all sizes.
            </p>
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
            <button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-all"
              onClick={() => setDialogOpen(true)}
            >
              GET YOUR FREE MARKETING AUDIT
            </button>
          </div>

          <GetStartedDialog open={dialogOpen} onOpenChange={setDialogOpen} />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
