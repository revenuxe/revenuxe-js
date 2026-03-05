import { Star, Quote } from "lucide-react";
import { useState } from "react";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      content: "Revenuxe transformed our digital presence. Their AI-powered strategies increased our conversions by 340% in just 3 months!",
      rating: 5,
      bgImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&h=600&fit=crop",
    },
    {
      name: "Michael Chen",
      position: "Founder, GrowthLabs",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      content: "The team's expertise in SEO and content marketing is unmatched. We're now ranking #1 for our key industry terms.",
      rating: 5,
      bgImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=600&fit=crop",
    },
    {
      name: "Emily Rodriguez",
      position: "Marketing Director, BrandHub",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      content: "Professional, creative, and results-driven. Revenuxe is more than an agency - they're true partners in our success.",
      rating: 5,
      bgImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop",
    },
  ];

  const active = testimonials[activeIndex];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
            <span className="italic font-bold">Customer</span>{" "}
            <span className="font-normal">Experiences Real</span>
            <br />
            <span className="font-normal">Success Stories with Revenuxe</span>
          </h2>
        </div>

        {/* Testimonial with background image */}
        <div className="relative max-w-6xl mx-auto rounded-3xl overflow-hidden">
          <img 
            src={active.bgImage}
            alt="Team collaboration"
            className="w-full h-[400px] md:h-[500px] object-cover"
          />
          
          {/* Floating testimonial card */}
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 max-w-md shadow-2xl">
              {/* Quote icon + stars */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-0.5">
                  <Quote className="w-8 h-8 text-accent fill-accent" />
                  <Quote className="w-8 h-8 text-accent fill-accent" />
                </div>
                <div className="flex gap-0.5">
                  {[...Array(active.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>

              {/* Quote text */}
              <p className="text-foreground text-lg leading-relaxed mb-6">
                "{active.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={active.image}
                  alt={active.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-primary text-sm">{active.name}</h4>
                  <p className="text-xs text-muted-foreground">{active.position}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dots navigation */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === activeIndex
                  ? "w-8 bg-foreground"
                  : "w-2 bg-muted-foreground/30"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;