import PageHero from "@/components/PageHero";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import { SEOHead } from "@/components/SEOHead";
import FAQ from "@/components/FAQ";
import { getCityFAQs } from "@/data/faqData";
import RecentProjects from "@/components/RecentProjects";
import { absoluteCanonicalUrl } from "@/lib/seo/canonical";

const cityData: Record<string, {
  name: string;
  tagline: string;
  description: string;
  keywords: string;
  metaDescription: string;
}> = {
  bangalore: {
    name: "Bangalore",
    tagline: "Empowering Bangalore's Tech-Driven Businesses",
    description: "Transform your Bangalore-based business with cutting-edge AI-powered software product strategies. From startups in Koramangala to enterprises in Whitefield, we help tech-savvy companies dominate the digital landscape.",
    keywords: "software development agency Bangalore, web development services Bangalore, web development Bangalore, platform engineering Bangalore, Bangalore software development, tech software Bangalore",
    metaDescription: "Leading AI-powered software development agency in Bangalore. We help tech startups and enterprises grow with web development, web development, and platform engineering solutions tailored for Bangalore businesses."
  },
  hyderabad: {
    name: "Hyderabad",
    tagline: "Driving Growth for Hyderabad's Digital Pioneers",
    description: "Partner with Hyderabad's premier software development agency specializing in AI-driven solutions. From HITEC City to Gachibowli, we empower businesses with innovative strategies that deliver measurable results.",
    keywords: "software development agency Hyderabad, web development services Hyderabad, web development Hyderabad, platform engineering Hyderabad, Hyderabad software development, IT software Hyderabad",
    metaDescription: "Top software development agency in Hyderabad specializing in AI-powered web development, web development, and platform engineering. We help Hyderabad businesses achieve exceptional digital growth."
  },
  chennai: {
    name: "Chennai",
    tagline: "Elevating Chennai's Business Landscape",
    description: "Your trusted software development partner in Chennai. We combine traditional values with modern innovation to help businesses from T.Nagar to OMR achieve their software development goals with data-driven strategies.",
    keywords: "software development agency Chennai, web development services Chennai, web development Chennai, platform engineering Chennai, Chennai software development, business growth Chennai",
    metaDescription: "Premier software development agency in Chennai offering AI-powered web development, web development, and platform engineering services. Helping Chennai businesses thrive in the digital era."
  },
  mumbai: {
    name: "Mumbai",
    tagline: "Accelerating Mumbai's Business Success",
    description: "Scale your Mumbai business with India's most innovative software development agency. From Bandra to BKC, we deliver cutting-edge AI software solutions that drive real business growth in India's financial capital.",
    keywords: "software development agency Mumbai, web development services Mumbai, web development Mumbai, platform engineering Mumbai, Mumbai software development, business software Mumbai",
    metaDescription: "Leading software development agency in Mumbai providing AI-powered web development, web development, and platform engineering solutions for Mumbai's ambitious businesses."
  },
  pune: {
    name: "Pune",
    tagline: "Powering Pune's Digital Transformation",
    description: "Unlock your business potential with Pune's fastest-growing software development agency. From Hinjewadi to Koregaon Park, we help enterprises and startups excel with AI-enhanced software strategies.",
    keywords: "software development agency Pune, web development services Pune, web development Pune, platform engineering Pune, Pune software development, tech software Pune",
    metaDescription: "Innovative software development agency in Pune specializing in AI-driven web development, web development, and platform engineering. We help Pune businesses achieve remarkable digital success."
  },
  delhi: {
    name: "Delhi",
    tagline: "Transforming Delhi's Digital Future",
    description: "Partner with Delhi's leading AI-powered software development agency. From Connaught Place to Cyber City, we craft data-driven strategies that help businesses in India's capital dominate their markets.",
    keywords: "software development agency Delhi, web development services Delhi, web development Delhi, platform engineering Delhi, Delhi software development, NCR software development",
    metaDescription: "Top software development agency in Delhi offering AI-powered web development, web development, and platform engineering services. Helping Delhi businesses achieve exceptional online growth."
  },
  ahmedabad: {
    name: "Ahmedabad",
    tagline: "Empowering Ahmedabad's Business Growth",
    description: "Transform your Ahmedabad business with innovative software product strategies. From Satellite to SG Highway, we help businesses achieve remarkable online growth.",
    keywords: "software development agency Ahmedabad, web development services Ahmedabad, web development Ahmedabad, platform engineering Ahmedabad, Gujarat software development",
    metaDescription: "Leading software development agency in Ahmedabad offering AI-powered web development, web development, and platform engineering services for Gujarat businesses."
  },
  kolkata: {
    name: "Kolkata",
    tagline: "Driving Digital Excellence in Kolkata",
    description: "Partner with Kolkata's premier software development agency. From Park Street to Salt Lake, we deliver cutting-edge AI software solutions for Bengal's businesses.",
    keywords: "software development agency Kolkata, web development services Kolkata, web development Kolkata, platform engineering Kolkata, West Bengal software development",
    metaDescription: "Top software development agency in Kolkata providing AI-powered web development, web development, and platform engineering solutions."
  },
  jaipur: {
    name: "Jaipur",
    tagline: "Elevating Jaipur's Digital Presence",
    description: "Unlock your business potential with Jaipur's most innovative software development agency. From Malviya Nagar to Vaishali Nagar, we craft strategies that deliver results.",
    keywords: "software development agency Jaipur, web development services Jaipur, web development Jaipur, platform engineering Jaipur, Rajasthan software development",
    metaDescription: "Premier software development agency in Jaipur specializing in AI-driven web development, web development, and platform engineering for Rajasthan businesses."
  },
  lucknow: {
    name: "Lucknow",
    tagline: "Transforming Lucknow's Business Landscape",
    description: "Scale your Lucknow business with data-driven software product strategies. From Gomti Nagar to Hazratganj, we help businesses achieve exceptional online growth.",
    keywords: "software development agency Lucknow, web development services Lucknow, web development Lucknow, platform engineering Lucknow, UP software development",
    metaDescription: "Leading software development agency in Lucknow offering AI-powered web development, web development, and platform engineering services."
  },
  kochi: {
    name: "Kochi",
    tagline: "Powering Kochi's Digital Revolution",
    description: "Transform your Kochi-based business with innovative software development solutions. From Kakkanad to Edappally, we deliver strategies that drive growth.",
    keywords: "software development agency Kochi, web development services Kochi, web development Kochi, platform engineering Kochi, Kerala software development",
    metaDescription: "Top software development agency in Kochi providing AI-powered web development, web development, and platform engineering solutions for Kerala businesses."
  },
  chandigarh: {
    name: "Chandigarh",
    tagline: "Accelerating Chandigarh's Digital Success",
    description: "Partner with Chandigarh's leading software development agency. From Sector 17 to IT Park, we help businesses dominate the digital landscape.",
    keywords: "software development agency Chandigarh, web development services Chandigarh, web development Chandigarh, platform engineering Chandigarh, Punjab software development",
    metaDescription: "Premier software development agency in Chandigarh specializing in AI-driven web development, web development, and platform engineering."
  },
  indore: {
    name: "Indore",
    tagline: "Driving Indore's Digital Transformation",
    description: "Elevate your Indore business with cutting-edge software product strategies. From Vijay Nagar to MR10, we deliver measurable results.",
    keywords: "software development agency Indore, web development services Indore, web development Indore, platform engineering Indore, Madhya Pradesh software development",
    metaDescription: "Leading software development agency in Indore offering AI-powered web development, web development, and platform engineering solutions."
  },
  nagpur: {
    name: "Nagpur",
    tagline: "Empowering Nagpur's Business Growth",
    description: "Transform your Nagpur business with innovative software development solutions. From Dharampeth to Sitabuldi, we craft strategies for success.",
    keywords: "software development agency Nagpur, web development services Nagpur, web development Nagpur, platform engineering Nagpur, Maharashtra software development",
    metaDescription: "Top software development agency in Nagpur providing AI-powered web development, web development, and platform engineering services."
  },
  visakhapatnam: {
    name: "Visakhapatnam",
    tagline: "Elevating Vizag's Digital Presence",
    description: "Unlock your business potential with Visakhapatnam's premier software development agency. From MVP Colony to Rushikonda, we drive digital excellence.",
    keywords: "software development agency Visakhapatnam, web development services Vizag, web development Visakhapatnam, platform engineering Vizag, Andhra Pradesh software development",
    metaDescription: "Premier software development agency in Visakhapatnam specializing in AI-driven web development, web development, and platform engineering."
  },
  coimbatore: {
    name: "Coimbatore",
    tagline: "Powering Coimbatore's Digital Future",
    description: "Partner with Coimbatore's fastest-growing software development agency. From RS Puram to Saibaba Colony, we help businesses achieve online success.",
    keywords: "software development agency Coimbatore, web development services Coimbatore, web development Coimbatore, platform engineering Coimbatore, Tamil Nadu software development",
    metaDescription: "Leading software development agency in Coimbatore offering AI-powered web development, web development, and platform engineering solutions."
  }
};

type RecentProjectsItem = {
  id: string;
  title: string;
  info?: string | null;
  logo_url?: string | null;
  website_url?: string | null;
  short_description?: string | null;
};

const CityPage = async ({
  city,
  recentProjects,
}: {
  city?: string;
  recentProjects: RecentProjectsItem[];
}) => {
  const cityInfo = city ? cityData[city.toLowerCase()] : null;
  
  if (!cityInfo) {
    return null;
  }

  const canonicalUrl = await absoluteCanonicalUrl(`/${city?.toLowerCase() ?? ""}`);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title={`Software Development Company in ${cityInfo.name} | Revenuxe`}
        description={cityInfo.metaDescription}
        keywords={cityInfo.keywords}
        canonicalUrl={canonicalUrl}
        noindex
      />
      <Navigation />
      
      <PageHero
        title={`Software Company in`}
        highlight={cityInfo.name}
        subtitle={cityInfo.tagline}
      />

      <Stats />

      <RecentProjects projects={recentProjects} />
      
      {/* City-Specific Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Software Development Services in {cityInfo.name}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive AI-powered software solutions tailored for {cityInfo.name} businesses
            </p>
          </div>
        </div>
      </section>
      
      <Services cityName={cityInfo.name} />
      <Process cityName={cityInfo.name} />
      <WhyChooseUs cityName={cityInfo.name} />
      <Testimonials />
      <FAQ items={getCityFAQs(cityInfo.name)} />
      <CTA />
      <Footer />
    </div>
  );
};

export default CityPage;
