import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      content: "Arrowmind transformed our digital presence. Their AI-powered strategies increased our conversions by 340% in just 3 months!",
      rating: 5
    },
    {
      name: "Michael Chen",
      position: "Founder, GrowthLabs",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      content: "The team's expertise in SEO and content marketing is unmatched. We're now ranking #1 for our key industry terms.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      position: "Marketing Director, BrandHub",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      content: "Professional, creative, and results-driven. Arrowmind is more than an agency - they're true partners in our success.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary text-sm font-bold uppercase tracking-wider">Testimonials</span>
          <h2 className="text-4xl md:text-6xl font-bold">
            What Clients <span className="text-primary">Say</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real stories from businesses that achieved exceptional growth with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground shadow-lg">
                <Quote className="w-6 h-6" />
              </div>
              
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              
              <div className="relative z-10 space-y-6">
                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-muted-foreground leading-relaxed text-lg">
                  "{testimonial.content}"
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                  />
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
