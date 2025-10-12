import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import { GetStartedDialog } from "@/components/GetStartedDialog";

const serviceData: Record<string, any> = {
  "social-media": {
    title: "Social Media Marketing",
    subtitle: "Build a powerful brand presence across all social platforms",
    description: "In today's digital landscape, social media isn't just about posting content—it's about creating meaningful connections with your audience. Our comprehensive social media marketing strategies help you build brand awareness, engage with your community, and drive measurable business results.",
    features: [
      {
        title: "Strategic Content Planning",
        description: "We develop customized content calendars that align with your brand voice and business objectives, ensuring consistent and engaging presence across platforms.",
      },
      {
        title: "Platform Optimization",
        description: "From Instagram to LinkedIn, we optimize your profiles and content for each platform's unique algorithm and audience behavior.",
      },
      {
        title: "Community Management",
        description: "Build lasting relationships with your audience through timely responses, engagement tactics, and community-building strategies.",
      },
      {
        title: "Paid Social Campaigns",
        description: "Maximize ROI with targeted ad campaigns that reach your ideal customers at the right time with the right message.",
      },
    ],
    benefits: [
      "Increase brand awareness and visibility",
      "Drive website traffic and conversions",
      "Build authentic community engagement",
      "Generate qualified leads",
      "Improve customer retention",
      "Gain competitive market insights",
    ],
    process: [
      {
        step: "Discovery & Audit",
        description: "We analyze your current social presence, competitors, and target audience to identify opportunities.",
      },
      {
        step: "Strategy Development",
        description: "Create a comprehensive roadmap with clear goals, content themes, and platform-specific tactics.",
      },
      {
        step: "Content Creation",
        description: "Produce engaging, on-brand content including graphics, videos, and copy that resonates with your audience.",
      },
      {
        step: "Implementation & Growth",
        description: "Launch campaigns, monitor performance, and continuously optimize based on data-driven insights.",
      },
    ],
  },
  "performance-marketing": {
    title: "Performance Marketing",
    subtitle: "Data-driven campaigns that maximize ROI and conversions",
    description: "Performance marketing is all about results. Every rupee you invest should deliver measurable returns. Our performance marketing strategies combine cutting-edge technology, deep market insights, and proven tactics to drive conversions, lower acquisition costs, and scale your business profitably.",
    features: [
      {
        title: "Conversion Optimization",
        description: "We analyze user behavior, test variations, and optimize every touchpoint in your customer journey to maximize conversion rates.",
      },
      {
        title: "Multi-Channel Attribution",
        description: "Understand the true impact of each marketing channel with advanced attribution modeling that reveals your best-performing channels.",
      },
      {
        title: "ROI-Focused Campaigns",
        description: "Every campaign is designed with clear KPIs and ROI targets, ensuring your marketing budget works harder for your business.",
      },
      {
        title: "Real-Time Optimization",
        description: "Continuous monitoring and adjustment of campaigns based on performance data to ensure maximum efficiency.",
      },
    ],
    benefits: [
      "Pay only for measurable results",
      "Reduce customer acquisition costs",
      "Scale campaigns profitably",
      "Clear ROI tracking and reporting",
      "Data-driven decision making",
      "Faster market testing and iteration",
    ],
    process: [
      {
        step: "Goal Setting & Planning",
        description: "Define clear objectives, KPIs, and success metrics aligned with your business goals.",
      },
      {
        step: "Campaign Setup",
        description: "Build optimized campaigns across Google Ads, Facebook, and other platforms with proper tracking infrastructure.",
      },
      {
        step: "Testing & Learning",
        description: "Run A/B tests on creatives, audiences, and messaging to identify winning combinations.",
      },
      {
        step: "Scale & Optimize",
        description: "Increase investment in top-performing campaigns while continuously improving underperformers.",
      },
    ],
  },
  "seo": {
    title: "SEO Optimization",
    subtitle: "Dominate search rankings and drive organic traffic",
    description: "Search Engine Optimization is the foundation of sustainable online growth. Our comprehensive SEO strategies help you rank higher on Google, attract qualified traffic, and establish your brand as an authority in your industry. We combine technical excellence with content strategy to deliver long-term results.",
    features: [
      {
        title: "Technical SEO Excellence",
        description: "Optimize your website's structure, speed, and crawlability to ensure search engines can easily discover and index your content.",
      },
      {
        title: "Keyword Strategy",
        description: "Identify high-value keywords your target audience is searching for and create content that ranks and converts.",
      },
      {
        title: "On-Page Optimization",
        description: "Perfect every page element from meta tags to internal linking for maximum search visibility and user experience.",
      },
      {
        title: "Quality Link Building",
        description: "Build authoritative backlinks through strategic outreach, content partnerships, and digital PR that boost your domain authority.",
      },
    ],
    benefits: [
      "Increase organic search visibility",
      "Drive qualified traffic to your website",
      "Build long-term brand authority",
      "Reduce dependency on paid advertising",
      "Improve user experience and engagement",
      "Higher conversion rates from organic traffic",
    ],
    process: [
      {
        step: "SEO Audit & Research",
        description: "Comprehensive analysis of your website, competitors, and keyword opportunities.",
      },
      {
        step: "Strategy & Roadmap",
        description: "Develop a customized SEO strategy with prioritized recommendations and timelines.",
      },
      {
        step: "Implementation",
        description: "Execute technical fixes, optimize content, and begin link-building initiatives.",
      },
      {
        step: "Monitor & Refine",
        description: "Track rankings, traffic, and conversions while continuously optimizing based on performance data.",
      },
    ],
  },
};

// Add all other services with similar comprehensive content
const additionalServices = {
  "email-marketing": { title: "Email Marketing", subtitle: "Engage and convert with personalized email campaigns" },
  "content-marketing": { title: "Content Marketing", subtitle: "Create compelling content that drives engagement" },
  "web-development": { title: "Custom Web Development", subtitle: "Build modern, scalable web applications" },
  "ecommerce": { title: "E-Commerce Solutions", subtitle: "Complete online store setup and optimization" },
  "mobile-design": { title: "Mobile-First Design", subtitle: "Responsive designs for all devices" },
  "landing-pages": { title: "Landing Pages", subtitle: "High-converting pages optimized for campaigns" },
  "ai-seo-content": { title: "AI Blog & Content SEO", subtitle: "Generate SEO-optimized content with AI" },
  "ai-seo-automation": { title: "AI SEO Automation", subtitle: "Automate your SEO workflow with AI" },
  "analytics": { title: "Analytics & Tracking", subtitle: "Comprehensive data analysis and insights" },
  "voice-visual-seo": { title: "Voice & Visual Search SEO", subtitle: "Optimize for the future of search" },
  "growth-marketing": { title: "Growth Marketing", subtitle: "Strategic growth hacking for your brand" },
  "ai-chatbots": { title: "AI Chatbots", subtitle: "24/7 intelligent customer support" },
  "ai-content": { title: "AI Content Generation", subtitle: "Create content at scale with AI" },
  "ai-design": { title: "AI Design Studio", subtitle: "Generate stunning visuals with AI" },
  "ai-automation": { title: "AI Automation", subtitle: "Automate workflows with intelligent systems" },
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const [dialogOpen, setDialogOpen] = useState(false);
  
  const service = serviceData[slug || ""] || {
    ...additionalServices[slug || ""],
    description: "Our expert team delivers comprehensive solutions tailored to your business needs. We combine industry best practices with innovative strategies to help you achieve your goals and stay ahead of the competition.",
    features: [
      { title: "Expert Strategy", description: "Customized approach based on your unique business requirements and market position." },
      { title: "Proven Results", description: "Track record of delivering measurable outcomes for clients across industries." },
      { title: "Continuous Support", description: "Ongoing optimization and support to ensure sustained success." },
      { title: "Latest Technology", description: "Leverage cutting-edge tools and platforms for maximum efficiency." },
    ],
    benefits: [
      "Achieve your business objectives faster",
      "Improve operational efficiency",
      "Reduce costs and maximize ROI",
      "Stay ahead of competitors",
      "Access expert knowledge and insights",
      "Scale your business effectively",
    ],
    process: [
      { step: "Discovery", description: "We learn about your business, goals, and challenges." },
      { step: "Strategy", description: "Develop a comprehensive plan tailored to your needs." },
      { step: "Execution", description: "Implement solutions with precision and expertise." },
      { step: "Optimization", description: "Monitor results and continuously improve performance." },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-background to-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold">
                {service.title}
              </h1>
              <p className="text-2xl text-primary font-semibold">
                {service.subtitle}
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {service.description}
              </p>
              <div className="pt-6">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 px-10 py-6 text-lg"
                  onClick={() => setDialogOpen(true)}
                >
                  Get Started <ArrowRight className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">
              What We <span className="text-primary">Offer</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {service.features?.map((feature: any, index: number) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">
              <span className="text-primary">Benefits</span> You'll Get
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {service.benefits?.map((benefit: string, index: number) => (
                <div key={index} className="flex items-start gap-3 bg-card p-4 rounded-lg border border-border">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">
              Our <span className="text-primary">Process</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {service.process?.map((item: any, index: number) => (
                <div key={index} className="relative">
                  <div className="bg-primary/10 border-2 border-primary rounded-lg p-6 h-full">
                    <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">{item.step}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                Ready to Get <span className="text-primary">Started?</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Let's discuss how we can help you achieve your goals with {service.title.toLowerCase()}.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 px-10 py-6 text-lg"
                  onClick={() => setDialogOpen(true)}
                >
                  Start Your Project <ArrowRight className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="px-10 py-6 text-lg" asChild>
                  <a href="/contact">Contact Us</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <GetStartedDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </div>
  );
};

export default ServiceDetail;
