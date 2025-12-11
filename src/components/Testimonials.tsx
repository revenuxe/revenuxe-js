import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      position: "CEO, TechVentures Bangalore",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      content: "Arrowmind's SEO services helped us rank #1 on Google for competitive keywords. Our organic traffic increased by 450% in 6 months, and we're generating 50+ qualified leads monthly!",
      rating: 5
    },
    {
      name: "Priya Sharma",
      position: "Founder, EcomStore India",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      content: "Their Google Ads management is exceptional. We achieved 400% ROI on our PPC campaigns. Best digital marketing agency in India for e-commerce businesses!",
      rating: 5
    },
    {
      name: "Amit Patel",
      position: "Marketing Head, SaaS Solutions",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
      content: "From website development to social media marketing, Arrowmind handles everything. Our online presence transformed completely, and sales increased by 300%.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary text-sm font-bold uppercase tracking-wider">Client Success Stories</span>
          <h2 className="text-4xl md:text-6xl font-bold">
            Trusted by <span className="text-primary">50+ Businesses</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Real results from real businesses. See how our <strong className="text-foreground">SEO services</strong>, 
            <strong className="text-foreground"> PPC campaigns</strong>, and 
            <strong className="text-foreground"> digital marketing strategies</strong> have 
            helped companies across India achieve exceptional growth.
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
