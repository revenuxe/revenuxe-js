import { 
  AirVent, 
  Refrigerator, 
  WashingMachine, 
  Microwave, 
  Tv, 
  UtensilsCrossed,
  Flame,
  Fan,
  ArrowRight,
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
import { Link } from "react-router-dom";

const ServicesCarousel = () => {
  const services = [
    {
      icon: <AirVent className="w-16 h-16" />,
      title: "AC Repair & Service",
      description: "Expert AC repair, gas refilling, installation & annual maintenance for all brands - Split, Window, Cassette ACs.",
      features: ["Gas Refilling", "Compressor Repair", "Deep Cleaning", "Installation"],
      price: "Starting ₹299",
      link: "/services/ac-repair"
    },
    {
      icon: <Refrigerator className="w-16 h-16" />,
      title: "Refrigerator Repair",
      description: "Complete fridge repair services - cooling issues, compressor problems, thermostat replacement & more.",
      features: ["Cooling Issues", "Compressor Repair", "Ice Maker Fix", "Door Seal Replace"],
      price: "Starting ₹349",
      link: "/services/refrigerator-repair"
    },
    {
      icon: <WashingMachine className="w-16 h-16" />,
      title: "Washing Machine Repair",
      description: "Front load, top load & semi-automatic washing machine repair. Drum, motor, PCB & drainage repairs.",
      features: ["Drum Repair", "Motor Issues", "PCB Replacement", "Water Drainage"],
      price: "Starting ₹299",
      link: "/services/washing-machine-repair"
    },
    {
      icon: <Microwave className="w-16 h-16" />,
      title: "Microwave Repair",
      description: "Microwave oven repair for all brands - magnetron, door issues, turntable & heating problems fixed.",
      features: ["Magnetron Repair", "Door Switch Fix", "Turntable Issues", "Heating Problems"],
      price: "Starting ₹249",
      link: "/services/microwave-repair"
    },
    {
      icon: <Tv className="w-16 h-16" />,
      title: "TV Repair & Service",
      description: "LED, LCD, Smart TV & CRT repair. Display issues, sound problems, motherboard & power supply repair.",
      features: ["Display Repair", "Sound Issues", "Motherboard Fix", "Power Supply"],
      price: "Starting ₹399",
      link: "/services/tv-repair"
    },
    {
      icon: <UtensilsCrossed className="w-16 h-16" />,
      title: "Dishwasher Repair",
      description: "Complete dishwasher repair - not cleaning, drainage issues, door problems & pump replacement.",
      features: ["Drainage Fix", "Pump Repair", "Door Issues", "Cleaning Problems"],
      price: "Starting ₹399",
      link: "/services/dishwasher-repair"
    },
    {
      icon: <Flame className="w-16 h-16" />,
      title: "Gas Stove & Oven Repair",
      description: "Gas stove, hob, chimney & oven repair. Burner issues, ignition problems & thermostat replacement.",
      features: ["Burner Repair", "Ignition Fix", "Chimney Service", "Oven Repair"],
      price: "Starting ₹199",
      link: "/services/gas-stove-repair"
    },
    {
      icon: <Fan className="w-16 h-16" />,
      title: "Water Heater/Geyser Repair",
      description: "Electric & gas geyser repair. Heating element, thermostat, leakage & tank repairs.",
      features: ["Element Replace", "Thermostat Fix", "Leakage Repair", "Tank Service"],
      price: "Starting ₹299",
      link: "/services/geyser-repair"
    }
  ];

  const handleCall = () => {
    window.location.href = "tel:+919876543210";
  };

  return (
    <section className="py-24 relative overflow-hidden bg-card/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary text-sm font-bold uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-4xl md:text-6xl font-bold">
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
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {services.map((service, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/60 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 h-full flex flex-col">
                  {/* Icon */}
                  <div className="text-primary mb-6 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-3">
                    {service.title}
                  </h3>

                  {/* Price Badge */}
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4 w-fit">
                    {service.price}
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="text-xs text-muted-foreground space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Buttons */}
                  <div className="flex gap-2 mt-auto">
                    <Button
                      size="sm"
                      className="flex-1 bg-primary hover:bg-primary/90"
                      onClick={handleCall}
                    >
                      <Phone className="w-4 h-4 mr-1" />
                      Book Now
                    </Button>
                    <Link to={service.link} className="flex-1">
                      <Button size="sm" variant="outline" className="w-full">
                        Details
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12" />
          <CarouselNext className="hidden md:flex -right-12" />
        </Carousel>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link to="/services">
            <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10">
              View All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;
