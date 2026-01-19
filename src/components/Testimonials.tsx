import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      appliance: "AC Repair",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      content: "My AC stopped cooling in peak summer. Called Arrowmind and they sent a technician within 2 hours. Fixed the issue on the spot. Highly recommend!",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      appliance: "Refrigerator Repair",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      content: "Excellent service! My 10-year-old fridge had compressor issues. The technician was knowledgeable, transparent about costs, and the repair has been perfect.",
      rating: 5
    },
    {
      name: "Ananya Patel",
      appliance: "Washing Machine Repair",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      content: "Professional team! Fixed my washing machine drum issue quickly. Fair pricing and they even cleaned up after themselves. Will definitely use again.",
      rating: 5
    },
    {
      name: "Vikram Singh",
      appliance: "Microwave Repair",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
      content: "Quick response, reasonable rates, and genuine parts. My microwave works like new. Thank you Arrowmind team!",
      rating: 5
    },
    {
      name: "Meera Reddy",
      appliance: "TV Repair",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
      content: "My LED TV had display issues. The technician diagnosed it perfectly and had it fixed within a day. Great service at a fair price!",
      rating: 5
    },
    {
      name: "Suresh Iyer",
      appliance: "Dishwasher Repair",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop",
      content: "Rare to find good dishwasher repair services. Arrowmind fixed my Bosch dishwasher drainage issue perfectly. Prompt and professional!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-card">
      <div className="container mx-auto px-4 relative z-10">
      
        <div className="text-center mb-12 space-y-4">
          <span className="text-primary text-sm font-bold uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            What Customers <span className="text-primary">Say</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real reviews from real customers. See why thousands trust us with their appliances.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-background border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-xl animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground shadow-lg">
                <Quote className="w-6 h-6" />
              </div>
              
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              
              <div className="relative z-10 space-y-4">
                {/* Appliance Badge */}
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                  {testimonial.appliance}
                </div>
                
                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-muted-foreground leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                  />
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-xs text-muted-foreground">Verified Customer</p>
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
