import { Shield, Clock, Wallet, Award, Wrench, HeadphonesIcon, Phone } from "lucide-react";
import { Button } from "./ui/button";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <Clock className="w-10 h-10" />,
      title: "Same Day Service",
      description: "Book today, get service today. We understand appliance breakdowns can't wait.",
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "90-Day Warranty",
      description: "All repairs come with a 90-day service warranty. Your satisfaction guaranteed.",
    },
    {
      icon: <Wallet className="w-10 h-10" />,
      title: "Transparent Pricing",
      description: "No hidden charges. Get upfront quotes before any work begins.",
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: "Certified Technicians",
      description: "Factory-trained experts with years of hands-on experience.",
    },
    {
      icon: <Wrench className="w-10 h-10" />,
      title: "Genuine Spare Parts",
      description: "We use only original manufacturer parts for lasting repairs.",
    },
    {
      icon: <HeadphonesIcon className="w-10 h-10" />,
      title: "24/7 Support",
      description: "Round-the-clock customer support for emergencies anytime.",
    },
  ];

  const handleCall = () => {
    window.location.href = "tel:+919876543210";
  };

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 animate-fade-in text-center">
            <span className="text-primary text-sm font-bold uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
              <span className="text-foreground">Why Choose </span>
              <span className="text-primary">Arrowmind</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              We're not just another repair service. Here's what makes us the preferred choice for thousands of customers.
            </p>
          </div>
          
          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="relative bg-card border border-border rounded-xl p-8 hover:border-primary hover:shadow-lg transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* CTA */}
          <div className="mt-12 animate-fade-in text-center" style={{ animationDelay: "0.6s" }}>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 font-semibold"
              onClick={handleCall}
            >
              <Phone className="w-5 h-5 mr-2" />
              BOOK A SERVICE NOW
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
