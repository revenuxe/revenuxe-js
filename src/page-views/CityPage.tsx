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
    description: "Transform your Bangalore-based business with cutting-edge AI-powered digital marketing strategies. From startups in Koramangala to enterprises in Whitefield, we help tech-savvy companies dominate the digital landscape.",
    keywords: "digital marketing agency Bangalore, SEO services Bangalore, web development Bangalore, performance marketing Bangalore, Bangalore digital marketing, tech marketing Bangalore",
    metaDescription: "Leading AI-powered digital marketing agency in Bangalore. We help tech startups and enterprises grow with SEO, web development, and performance marketing solutions tailored for Bangalore businesses."
  },
  hyderabad: {
    name: "Hyderabad",
    tagline: "Driving Growth for Hyderabad's Digital Pioneers",
    description: "Partner with Hyderabad's premier digital marketing agency specializing in AI-driven solutions. From HITEC City to Gachibowli, we empower businesses with innovative strategies that deliver measurable results.",
    keywords: "digital marketing agency Hyderabad, SEO services Hyderabad, web development Hyderabad, performance marketing Hyderabad, Hyderabad digital marketing, IT marketing Hyderabad",
    metaDescription: "Top digital marketing agency in Hyderabad specializing in AI-powered SEO, web development, and performance marketing. We help Hyderabad businesses achieve exceptional digital growth."
  },
  chennai: {
    name: "Chennai",
    tagline: "Elevating Chennai's Business Landscape",
    description: "Your trusted digital marketing partner in Chennai. We combine traditional values with modern innovation to help businesses from T.Nagar to OMR achieve their digital marketing goals with data-driven strategies.",
    keywords: "digital marketing agency Chennai, SEO services Chennai, web development Chennai, performance marketing Chennai, Chennai digital marketing, business growth Chennai",
    metaDescription: "Premier digital marketing agency in Chennai offering AI-powered SEO, web development, and performance marketing services. Helping Chennai businesses thrive in the digital era."
  },
  mumbai: {
    name: "Mumbai",
    tagline: "Accelerating Mumbai's Business Success",
    description: "Scale your Mumbai business with India's most innovative digital marketing agency. From Bandra to BKC, we deliver cutting-edge AI marketing solutions that drive real business growth in India's financial capital.",
    keywords: "digital marketing agency Mumbai, SEO services Mumbai, web development Mumbai, performance marketing Mumbai, Mumbai digital marketing, business marketing Mumbai",
    metaDescription: "Leading digital marketing agency in Mumbai providing AI-powered SEO, web development, and performance marketing solutions for Mumbai's ambitious businesses."
  },
  pune: {
    name: "Pune",
    tagline: "Powering Pune's Digital Transformation",
    description: "Unlock your business potential with Pune's fastest-growing digital marketing agency. From Hinjewadi to Koregaon Park, we help enterprises and startups excel with AI-enhanced marketing strategies.",
    keywords: "digital marketing agency Pune, SEO services Pune, web development Pune, performance marketing Pune, Pune digital marketing, tech marketing Pune",
    metaDescription: "Innovative digital marketing agency in Pune specializing in AI-driven SEO, web development, and performance marketing. We help Pune businesses achieve remarkable digital success."
  },
  delhi: {
    name: "Delhi",
    tagline: "Transforming Delhi's Digital Future",
    description: "Partner with Delhi's leading AI-powered digital marketing agency. From Connaught Place to Cyber City, we craft data-driven strategies that help businesses in India's capital dominate their markets.",
    keywords: "digital marketing agency Delhi, SEO services Delhi, web development Delhi, performance marketing Delhi, Delhi digital marketing, NCR digital marketing",
    metaDescription: "Top digital marketing agency in Delhi offering AI-powered SEO, web development, and performance marketing services. Helping Delhi businesses achieve exceptional online growth."
  },
  ahmedabad: {
    name: "Ahmedabad",
    tagline: "Empowering Ahmedabad's Business Growth",
    description: "Transform your Ahmedabad business with innovative digital marketing strategies. From Satellite to SG Highway, we help businesses achieve remarkable online growth.",
    keywords: "digital marketing agency Ahmedabad, SEO services Ahmedabad, web development Ahmedabad, performance marketing Ahmedabad, Gujarat digital marketing",
    metaDescription: "Leading digital marketing agency in Ahmedabad offering AI-powered SEO, web development, and performance marketing services for Gujarat businesses."
  },
  kolkata: {
    name: "Kolkata",
    tagline: "Driving Digital Excellence in Kolkata",
    description: "Partner with Kolkata's premier digital marketing agency. From Park Street to Salt Lake, we deliver cutting-edge AI marketing solutions for Bengal's businesses.",
    keywords: "digital marketing agency Kolkata, SEO services Kolkata, web development Kolkata, performance marketing Kolkata, West Bengal digital marketing",
    metaDescription: "Top digital marketing agency in Kolkata providing AI-powered SEO, web development, and performance marketing solutions."
  },
  jaipur: {
    name: "Jaipur",
    tagline: "Elevating Jaipur's Digital Presence",
    description: "Unlock your business potential with Jaipur's most innovative digital marketing agency. From Malviya Nagar to Vaishali Nagar, we craft strategies that deliver results.",
    keywords: "digital marketing agency Jaipur, SEO services Jaipur, web development Jaipur, performance marketing Jaipur, Rajasthan digital marketing",
    metaDescription: "Premier digital marketing agency in Jaipur specializing in AI-driven SEO, web development, and performance marketing for Rajasthan businesses."
  },
  lucknow: {
    name: "Lucknow",
    tagline: "Transforming Lucknow's Business Landscape",
    description: "Scale your Lucknow business with data-driven digital marketing strategies. From Gomti Nagar to Hazratganj, we help businesses achieve exceptional online growth.",
    keywords: "digital marketing agency Lucknow, SEO services Lucknow, web development Lucknow, performance marketing Lucknow, UP digital marketing",
    metaDescription: "Leading digital marketing agency in Lucknow offering AI-powered SEO, web development, and performance marketing services."
  },
  kochi: {
    name: "Kochi",
    tagline: "Powering Kochi's Digital Revolution",
    description: "Transform your Kochi-based business with innovative digital marketing solutions. From Kakkanad to Edappally, we deliver strategies that drive growth.",
    keywords: "digital marketing agency Kochi, SEO services Kochi, web development Kochi, performance marketing Kochi, Kerala digital marketing",
    metaDescription: "Top digital marketing agency in Kochi providing AI-powered SEO, web development, and performance marketing solutions for Kerala businesses."
  },
  chandigarh: {
    name: "Chandigarh",
    tagline: "Accelerating Chandigarh's Digital Success",
    description: "Partner with Chandigarh's leading digital marketing agency. From Sector 17 to IT Park, we help businesses dominate the digital landscape.",
    keywords: "digital marketing agency Chandigarh, SEO services Chandigarh, web development Chandigarh, performance marketing Chandigarh, Punjab digital marketing",
    metaDescription: "Premier digital marketing agency in Chandigarh specializing in AI-driven SEO, web development, and performance marketing."
  },
  indore: {
    name: "Indore",
    tagline: "Driving Indore's Digital Transformation",
    description: "Elevate your Indore business with cutting-edge digital marketing strategies. From Vijay Nagar to MR10, we deliver measurable results.",
    keywords: "digital marketing agency Indore, SEO services Indore, web development Indore, performance marketing Indore, Madhya Pradesh digital marketing",
    metaDescription: "Leading digital marketing agency in Indore offering AI-powered SEO, web development, and performance marketing solutions."
  },
  nagpur: {
    name: "Nagpur",
    tagline: "Empowering Nagpur's Business Growth",
    description: "Transform your Nagpur business with innovative digital marketing solutions. From Dharampeth to Sitabuldi, we craft strategies for success.",
    keywords: "digital marketing agency Nagpur, SEO services Nagpur, web development Nagpur, performance marketing Nagpur, Maharashtra digital marketing",
    metaDescription: "Top digital marketing agency in Nagpur providing AI-powered SEO, web development, and performance marketing services."
  },
  visakhapatnam: {
    name: "Visakhapatnam",
    tagline: "Elevating Vizag's Digital Presence",
    description: "Unlock your business potential with Visakhapatnam's premier digital marketing agency. From MVP Colony to Rushikonda, we drive digital excellence.",
    keywords: "digital marketing agency Visakhapatnam, SEO services Vizag, web development Visakhapatnam, performance marketing Vizag, Andhra Pradesh digital marketing",
    metaDescription: "Premier digital marketing agency in Visakhapatnam specializing in AI-driven SEO, web development, and performance marketing."
  },
  coimbatore: {
    name: "Coimbatore",
    tagline: "Powering Coimbatore's Digital Future",
    description: "Partner with Coimbatore's fastest-growing digital marketing agency. From RS Puram to Saibaba Colony, we help businesses achieve online success.",
    keywords: "digital marketing agency Coimbatore, SEO services Coimbatore, web development Coimbatore, performance marketing Coimbatore, Tamil Nadu digital marketing",
    metaDescription: "Leading digital marketing agency in Coimbatore offering AI-powered SEO, web development, and performance marketing solutions."
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

const CityPage = ({
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

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title={`AI Digital Marketing Agency in ${cityInfo.name} | Revenuxe`}
        description={cityInfo.metaDescription}
        keywords={cityInfo.keywords}
        canonicalUrl={`https://revenuxe.com/${city?.toLowerCase()}`}
      />
      <Navigation />
      
      <PageHero
        title={`AI Marketing Agency in`}
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
              Digital Marketing Services in {cityInfo.name}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive AI-powered marketing solutions tailored for {cityInfo.name} businesses
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
