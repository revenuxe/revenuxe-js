import { 
  Snowflake, 
  Refrigerator, 
  WashingMachine, 
  Tv, 
  Microwave, 
  Fan, 
  Waves,
  Zap,
  ThermometerSun,
  Settings,
  Wrench,
  CircuitBoard
} from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  {
    icon: Snowflake,
    title: "AC Services",
    items: ["Split AC Repair", "Window AC Repair", "AC Gas Refill", "AC Installation", "AC Servicing"]
  },
  {
    icon: Refrigerator,
    title: "Refrigerator",
    items: ["Single Door Repair", "Double Door Repair", "Side-by-Side Repair", "Gas Charging", "Thermostat Fix"]
  },
  {
    icon: WashingMachine,
    title: "Washing Machine",
    items: ["Front Load Repair", "Top Load Repair", "Semi-Automatic", "Drum Replacement", "Motor Repair"]
  },
  {
    icon: Tv,
    title: "TV Repair",
    items: ["LED TV Repair", "LCD TV Repair", "Smart TV Repair", "Display Panel Fix", "Sound Issues"]
  },
  {
    icon: Microwave,
    title: "Microwave",
    items: ["Solo Microwave", "Grill Microwave", "Convection Repair", "Magnetron Replace", "Door Fix"]
  },
  {
    icon: ThermometerSun,
    title: "Water Heater",
    items: ["Geyser Repair", "Instant Heater", "Storage Heater", "Element Replace", "Thermostat Fix"]
  },
  {
    icon: Fan,
    title: "Cooler & Fan",
    items: ["Air Cooler Repair", "Ceiling Fan", "Exhaust Fan", "Motor Winding", "Blade Replace"]
  },
  {
    icon: Waves,
    title: "Water Purifier",
    items: ["RO Repair", "UV Purifier", "Filter Change", "Membrane Replace", "Annual Service"]
  },
  {
    icon: CircuitBoard,
    title: "Other Appliances",
    items: ["Chimney Repair", "Dishwasher", "Induction Cooktop", "Mixer Grinder", "Iron Box"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const ServiceCategories = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">All Services</span> We Offer
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Expert repair and maintenance for all your home appliances. Fast, reliable service with genuine parts.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Wrench className="w-3 h-3 text-primary/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceCategories;
