import { 
  AirVent, 
  Refrigerator, 
  WashingMachine, 
  Microwave, 
  Tv, 
  UtensilsCrossed,
  Flame,
  Fan,
  Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ServicesCarousel = () => {
  const services = [
    {
      icon: AirVent,
      title: "AC Repair & Service",
      description: "Expert AC repair, gas refilling, installation & annual maintenance for all brands - Split, Window, Cassette ACs.",
      features: ["Gas Refilling", "Compressor Repair", "Deep Cleaning", "Installation"],
      bgImage: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&q=80",
    },
    {
      icon: Refrigerator,
      title: "Refrigerator Repair",
      description: "Complete fridge repair services - cooling issues, compressor problems, thermostat replacement & more.",
      features: ["Cooling Issues", "Compressor Repair", "Ice Maker Fix", "Door Seal Replace"],
      bgImage: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400&q=80",
    },
    {
      icon: WashingMachine,
      title: "Washing Machine Repair",
      description: "Front load, top load & semi-automatic washing machine repair. Drum, motor, PCB & drainage repairs.",
      features: ["Drum Repair", "Motor Issues", "PCB Replacement", "Water Drainage"],
      bgImage: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=400&q=80",
    },
    {
      icon: Microwave,
      title: "Microwave Repair",
      description: "Microwave oven repair for all brands - magnetron, door issues, turntable & heating problems fixed.",
      features: ["Magnetron Repair", "Door Switch Fix", "Turntable Issues", "Heating Problems"],
      bgImage: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=400&q=80",
    },
    {
      icon: Tv,
      title: "TV Repair & Service",
      description: "LED, LCD, Smart TV & CRT repair. Display issues, sound problems, motherboard & power supply repair.",
      features: ["Display Repair", "Sound Issues", "Motherboard Fix", "Power Supply"],
      bgImage: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&q=80",
    },
    {
      icon: UtensilsCrossed,
      title: "Dishwasher Repair",
      description: "Complete dishwasher repair - not cleaning, drainage issues, door problems & pump replacement.",
      features: ["Drainage Fix", "Pump Repair", "Door Issues", "Cleaning Problems"],
      bgImage: "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=400&q=80",
    },
    {
      icon: Flame,
      title: "Gas Stove & Oven Repair",
      description: "Gas stove, hob, chimney & oven repair. Burner issues, ignition problems & thermostat replacement.",
      features: ["Burner Repair", "Ignition Fix", "Chimney Service", "Oven Repair"],
      bgImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80",
    },
    {
      icon: Fan,
      title: "Water Heater/Geyser Repair",
      description: "Electric & gas geyser repair. Heating element, thermostat, leakage & tank repairs.",
      features: ["Element Replace", "Thermostat Fix", "Leakage Repair", "Tank Service"],
      bgImage: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&q=80",
    }
  ];

  const handleCall = () => {
    window.location.href = "tel:+919876543210";
  };

  return (
    <section className="py-20 relative overflow-hidden bg-secondary/50">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 space-y-4">
          <span className="text-primary text-sm font-bold uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Appliances We <span className="text-primary">Repair</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Expert repair services for all major home appliances. Fast, reliable & affordable.
          </p>
        </div>

        {/* Services Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="group relative rounded-2xl overflow-hidden h-full flex flex-col min-h-[420px] shadow-lg hover:shadow-2xl transition-all duration-300">
                    {/* Background Image */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${service.bgImage})` }}
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/80 to-foreground/40" />
                    
                    {/* Content */}
                    <div className="relative z-10 p-6 flex flex-col h-full">
                      {/* Icon Badge */}
                      <div className="w-16 h-16 rounded-xl bg-primary/90 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                        <IconComponent className="w-8 h-8 text-primary-foreground" />
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-background group-hover:text-accent transition-colors mb-3">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-background/80 text-sm leading-relaxed mb-4 flex-grow">
                        {service.description}
                      </p>

                      {/* Features */}
                      <ul className="text-xs text-background/70 space-y-1.5 mb-5">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {/* CTA Button */}
                      <Button
                        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                        onClick={handleCall}
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Book Now
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          
          {/* Navigation Arrows - Always Visible */}
          <CarouselPrevious className="left-0 -translate-x-1/2 bg-primary text-primary-foreground hover:bg-primary/90 border-0 shadow-lg h-12 w-12" />
          <CarouselNext className="right-0 translate-x-1/2 bg-primary text-primary-foreground hover:bg-primary/90 border-0 shadow-lg h-12 w-12" />
        </Carousel>

        {/* Scroll Hint */}
        <p className="text-center text-muted-foreground text-sm mt-6">
          ← Swipe or use arrows to see more services →
        </p>
      </div>
    </section>
  );
};

export default ServicesCarousel;