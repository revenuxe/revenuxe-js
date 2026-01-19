import { CheckCircle2, Users, Clock, Award } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      value: "50,000+",
      label: "Repairs Completed",
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: "25,000+",
      label: "Happy Customers",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      value: "10+",
      label: "Years Experience",
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: "50+",
      label: "Expert Technicians",
    },
  ];

  return (
    <section className="py-20 bg-card relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 animate-fade-in text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-foreground">Trusted </span>
              <span className="text-primary">Service Center</span>
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
              <span className="text-primary font-semibold">Arrowmind Service Center</span> is your trusted partner for all home appliance repairs. We've been serving customers with dedication and expertise for over a decade.
            </p>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="border border-border rounded-xl p-8 md:p-10 hover:border-primary hover:shadow-lg transition-all duration-300 animate-fade-in text-center bg-background"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4 text-primary">
                  {stat.icon}
                </div>
                <p className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          
          {/* Mission Statement */}
          <div className="mt-16 animate-fade-in text-center" style={{ animationDelay: "0.4s" }}>
            <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto">
              We believe every home deserves working appliances. Our mission is to provide fast, 
              affordable, and reliable repair services that get your life back on track.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;