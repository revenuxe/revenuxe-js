import { Phone, ClipboardCheck, Wrench, ThumbsUp } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: <Phone className="w-10 h-10" />,
      number: "01",
      title: "Book Service",
      description: "Call us or fill the form online. Our team will note your appliance issue and schedule a visit."
    },
    {
      icon: <ClipboardCheck className="w-10 h-10" />,
      number: "02",
      title: "Free Diagnosis",
      description: "Our technician visits, inspects the appliance, and provides a transparent quote before any work."
    },
    {
      icon: <Wrench className="w-10 h-10" />,
      number: "03",
      title: "Expert Repair",
      description: "Upon approval, we repair your appliance on the spot using genuine parts and proven techniques."
    },
    {
      icon: <ThumbsUp className="w-10 h-10" />,
      number: "04",
      title: "Quality Check",
      description: "We test the appliance thoroughly, explain the repair, and provide warranty documentation."
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 space-y-4">
          <span className="text-primary text-sm font-bold uppercase tracking-wider">Our Process</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Getting your appliance repaired is quick and hassle-free with our simple 4-step process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}
              
              <div className="relative bg-card border border-border rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all duration-300 h-full">
                {/* Number Badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg">
                  {step.number}
                </div>
                
                <div className="space-y-4">
                  <div className="inline-block p-4 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {step.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
