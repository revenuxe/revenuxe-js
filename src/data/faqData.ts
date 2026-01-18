export const homepageFAQs = [
  {
    question: "What appliances do you repair?",
    answer: "We repair all major home appliances including Air Conditioners (AC), Refrigerators, Washing Machines, Microwave Ovens, LED/LCD/Smart TVs, Dishwashers, Gas Stoves, Chimneys, Water Heaters (Geysers), and more. We service all major brands like Samsung, LG, Whirlpool, Godrej, Haier, Bosch, IFB, Voltas, Daikin, and others."
  },
  {
    question: "Do you provide same-day repair service?",
    answer: "Yes! We offer same-day service for most appliance repairs. When you call before 2 PM, we can usually send a technician to your location the same day. For emergency repairs, we also have 24/7 service available with a small additional charge."
  },
  {
    question: "What are your service charges?",
    answer: "Our visiting/inspection charge starts from ₹199-299 depending on the appliance type. This includes diagnosis of the problem. Repair charges are quoted separately based on the issue and parts required. We always provide transparent, upfront pricing before starting any work."
  },
  {
    question: "Do you provide warranty on repairs?",
    answer: "Absolutely! All our repairs come with a 90-day service warranty. If the same issue recurs within this period, we'll fix it free of charge. Replaced parts carry their own manufacturer warranty, typically ranging from 6 months to 1 year."
  },
  {
    question: "Do you use genuine spare parts?",
    answer: "Yes, we use only genuine, original manufacturer parts for all repairs. This ensures the longevity of the repair and maintains your appliance's performance. We source parts directly from authorized distributors."
  },
  {
    question: "How can I book a service?",
    answer: "Booking is easy! You can call us directly at +91 98765 43210, WhatsApp us, or fill out the online form on our website. Our team will confirm your appointment and send a technician at your preferred time slot."
  },
  {
    question: "What areas do you cover?",
    answer: "We provide service across the entire city and surrounding areas. Our network of technicians ensures quick response times no matter where you're located. During booking, we'll confirm if your area is in our service zone."
  },
  {
    question: "What if my appliance can't be repaired?",
    answer: "If we determine that repair isn't cost-effective or the appliance is beyond repair, we'll be honest about it. We charge only the inspection fee in such cases. We can also help you with proper disposal and recommend new appliance options."
  },
  {
    question: "Are your technicians certified?",
    answer: "Yes, all our technicians are trained and certified professionals with years of experience. They undergo regular training on the latest appliance models and repair techniques. They carry proper ID and are background verified."
  },
  {
    question: "Do I need to be home during the service?",
    answer: "Yes, we recommend someone be present during the service for security reasons and to authorize any repairs. The technician will explain the issue and get your approval before proceeding with repairs. Typical service takes 30-90 minutes depending on the complexity."
  }
];

export const acRepairFAQs = [
  {
    question: "Why is my AC not cooling properly?",
    answer: "Common reasons include low refrigerant gas, dirty filters, faulty compressor, or blocked condenser. Our technicians will diagnose the exact cause and provide the appropriate solution."
  },
  {
    question: "How often should I service my AC?",
    answer: "We recommend servicing your AC at least twice a year - before summer and after monsoon. Regular maintenance extends the life of your AC and ensures optimal cooling performance."
  },
  {
    question: "What is the cost of AC gas refilling?",
    answer: "AC gas refilling costs vary based on the type of gas (R22, R32, R410A) and AC tonnage. Prices typically range from ₹1,500 to ₹3,500. We'll provide an exact quote after inspection."
  },
  {
    question: "Do you repair all AC brands?",
    answer: "Yes, we repair all major brands including Voltas, Daikin, LG, Samsung, Hitachi, Carrier, Blue Star, Godrej, Whirlpool, and more - both split and window ACs."
  }
];

export const refrigeratorRepairFAQs = [
  {
    question: "Why is my refrigerator not cooling?",
    answer: "This could be due to a faulty compressor, thermostat issues, refrigerant leak, or blocked vents. Our technician will diagnose and fix the issue to restore proper cooling."
  },
  {
    question: "How much does refrigerator compressor replacement cost?",
    answer: "Compressor replacement typically costs between ₹4,000 to ₹8,000 including the part and labor, depending on the brand and model. We provide exact quotes after inspection."
  },
  {
    question: "My fridge is making strange noises. What could be wrong?",
    answer: "Unusual noises often indicate issues with the compressor, fan motor, or condenser coils. Some sounds are normal, but persistent loud noises should be checked by a technician."
  }
];

export const washingMachineRepairFAQs = [
  {
    question: "Why is my washing machine not draining water?",
    answer: "Common causes include clogged drain hose, faulty drain pump, or blocked filter. We'll clean or replace the affected parts to restore proper drainage."
  },
  {
    question: "Do you repair both front-load and top-load washing machines?",
    answer: "Yes, we service all types - fully automatic front load, top load, and semi-automatic washing machines of all major brands."
  },
  {
    question: "My washing machine drum is not spinning. Can it be fixed?",
    answer: "Yes, drum issues are usually fixable. The problem could be with the belt, motor, or PCB. Our technicians are equipped to handle all drum-related repairs."
  }
];

export const getCityFAQs = (cityName: string) => [
  {
    question: `Do you provide appliance repair services in ${cityName}?`,
    answer: `Yes! Arrowmind Service Center provides comprehensive appliance repair services throughout ${cityName}. We have a network of trained technicians covering all areas of ${cityName} and surrounding localities.`
  },
  {
    question: `What is the response time for service calls in ${cityName}?`,
    answer: `In ${cityName}, we typically respond within 2-4 hours for regular service calls. For emergency repairs, we can often reach you within 1-2 hours. Same-day service is available for most areas in ${cityName}.`
  },
  {
    question: `What are your service charges in ${cityName}?`,
    answer: `Our inspection charges in ${cityName} start from ₹199. Repair costs depend on the issue and parts required. We provide transparent pricing with no hidden charges. All prices are quoted upfront before starting work.`
  },
  {
    question: `Which brands do you service in ${cityName}?`,
    answer: `We service all major appliance brands in ${cityName} including Samsung, LG, Whirlpool, Godrej, Haier, Bosch, IFB, Voltas, Daikin, Hitachi, and many more. Our technicians are trained on both Indian and international brands.`
  },
  {
    question: `Is doorstep service available in ${cityName}?`,
    answer: `Yes, we provide doorstep service across ${cityName}. Our technicians come to your home fully equipped with tools and common spare parts to complete most repairs in a single visit.`
  }
];

export const getCountryFAQs = (countryName: string) => [
  {
    question: `Do you provide services in ${countryName}?`,
    answer: `Currently, we operate primarily in India. However, we're expanding our services and may be available in ${countryName} soon. Please contact us for the latest service area updates.`
  }
];

// Keep these for backward compatibility but update content
export const seoServiceFAQs = homepageFAQs;
export const contentMarketingFAQs = homepageFAQs;
export const ppcFAQs = homepageFAQs;
export const socialMediaFAQs = homepageFAQs;
