 "use client";

import { Star, Quote } from "lucide-react";
import { useState } from "react";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Rajesh Mehta",
      position: "Founder, FreshKart — D2C Grocery Brand",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop",
      content: "We were spending ₹80K/month on ads with zero tracking. Revenuxe restructured our Google Ads, built conversion-optimized landing pages, and within 45 days our cost-per-lead dropped from ₹320 to ₹85. Revenue jumped 3.8X.",
      rating: 5,
      bgImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&h=600&fit=crop",
    },
    {
      name: "Priya Sharma",
      position: "Co-Founder, StyleNest — Fashion E-Commerce",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop",
      content: "Revenuxe built our entire website on Lovable in under 2 weeks and launched Meta Ads campaigns that got us 1,200+ orders in the first month. Their AI-first approach saved us lakhs compared to traditional agencies.",
      rating: 5,
      bgImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=600&fit=crop",
    },
    {
      name: "Arjun Nair",
      position: "CEO, CloudSync Solutions — SaaS Startup",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
      content: "Our organic traffic was stuck at 200 visits/month. After 3 months of SEO with Revenuxe, we hit 4,500+ monthly visitors and started ranking on page 1 for 12 high-intent keywords. The ROI has been unreal.",
      rating: 5,
      bgImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop",
    },
    {
      name: "Meera Iyer",
      position: "Marketing Head, UrbanNest Interiors",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
      content: "We needed leads fast for our interior design business. Revenuxe set up our website + Google Ads in the ₹24,999 basic package — we got 47 qualified leads in the first 3 weeks. Best investment we've made.",
      rating: 5,
      bgImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=600&fit=crop",
    },
    {
      name: "Vikram Reddy",
      position: "Director, SpiceRoute Restaurants — 4 Outlets",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
      content: "Social media was an afterthought for us. Revenuxe's team created a content calendar, ran local Instagram campaigns, and our footfall increased by 60% across all 4 locations. They genuinely care about results.",
      rating: 5,
      bgImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
    },
  ];

  const active = testimonials[activeIndex];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display leading-tight">
            <span className="italic font-bold">Customer</span>{" "}
            <span className="font-normal">Experiences Real</span>
            <br className="hidden sm:block" />
            <span className="font-normal"> Success Stories with Revenuxe</span>
          </h2>
        </div>

        <div className="relative max-w-6xl mx-auto rounded-2xl md:rounded-3xl overflow-hidden">
          <img 
            src={active.bgImage}
            alt="Team collaboration"
            className="w-full h-[320px] sm:h-[400px] md:h-[500px] object-cover"
          />
          
          <div className="absolute inset-0 flex items-center justify-center p-3 md:p-4">
            <div className="bg-card/95 backdrop-blur-sm rounded-xl md:rounded-2xl p-5 md:p-8 max-w-sm md:max-w-md shadow-2xl">
              <div className="flex items-center justify-between mb-3 md:mb-4">
                <div className="flex gap-0.5">
                  <Quote className="w-6 h-6 md:w-8 md:h-8 text-accent fill-accent" />
                  <Quote className="w-6 h-6 md:w-8 md:h-8 text-accent fill-accent" />
                </div>
                <div className="flex gap-0.5">
                  {[...Array(active.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <p className="text-foreground text-sm md:text-base leading-relaxed mb-4 md:mb-6">
                "{active.content}"
              </p>
              <div className="flex items-center gap-3 md:gap-4">
                <img src={active.image} alt={active.name} className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-primary text-xs md:text-sm">{active.name}</h4>
                  <p className="text-[11px] md:text-xs text-muted-foreground">{active.position}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dots navigation */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === activeIndex
                  ? "w-8 bg-foreground"
                  : "w-2 bg-muted-foreground/30"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;