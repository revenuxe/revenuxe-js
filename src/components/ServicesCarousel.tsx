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
      icon: <AirVent className="w-14 h-14" />,
      title: "AC Repair & Service",
      description: "Expert AC repair, gas refilling, installation & annual maintenance for all brands - Split, Window, Cassette ACs.",
      features: ["Gas Refilling", "Compressor Repair", "Deep Cleaning", "Installation"],
    },
    {
      icon: <Refrigerator className="w-14 h-14" />,
      title: "Refrigerator Repair",
      description: "Complete fridge repair services - cooling issues, compressor problems, thermostat replacement & more.",
      features: ["Cooling Issues", "Compressor Repair", "Ice Maker Fix", "Door Seal Replace"],
    },
    {
      icon: <WashingMachine className="w-14 h-14" />,
      title: "Washing Machine Repair",
      description: "Front load, top load & semi-automatic washing machine repair. Drum, motor, PCB & drainage repairs.",
      features: ["Drum Repair", "Motor Issues", "PCB Replacement", "Water Drainage"],
    },
    {
      icon: <Microwave className="w-14 h-14" />,
      title: "Microwave Repair",
      description: "Microwave oven repair for all brands - magnetron, door issues, turntable & heating problems fixed.",
      features: ["Magnetron Repair", "Door Switch Fix", "Turntable Issues", "Heating Problems"],
    },
    {
      icon: <Tv className="w-14 h-14" />,
      title: "TV Repair & Service",
      description: "LED, LCD, Smart TV & CRT repair. Display issues, sound problems, motherboard & power supply repair.",
      features: ["Display Repair", "Sound Issues", "Motherboard Fix", "Power Supply"],
    },
    {
      icon: <UtensilsCrossed className="w-14 h-14" />,
      title: "Dishwasher Repair",
      description: "Complete dishwasher repair - not cleaning, drainage issues, door problems & pump replacement.",
      features: ["Drainage Fix", "Pump Repair", "Door Issues", "Cleaning Problems"],
    },
    {
      icon: <Flame className="w-14 h-14" />,
      title: "Gas Stove & Oven Repair",
      description: "Gas stove, hob, chimney & oven repair. Burner issues, ignition problems & thermostat replacement.",
      features: ["Burner Repair", "Ignition Fix", "Chimney Service", "Oven Repair"],
    },
    {
      icon: <Fan className="w-14 h-14" />,
      title: "Water Heater/Geyser Repair",
      description: "Electric & gas geyser repair. Heating element, thermostat, leakage & tank repairs.",
      features: ["Element Replace", "Thermostat Fix", "Leakage Repair", "Tank Service"],
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
            {services.map((service, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="group relative bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                  {/* Icon */}
                  <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="text-xs text-muted-foreground space-y-1.5 mb-5">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    onClick={handleCall}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Book Now
                  </Button>
                </div>
              </CarouselItem>
            ))}
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