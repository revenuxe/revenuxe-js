import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import { GetStartedDialog } from "@/components/GetStartedDialog";

const subServiceData: Record<string, any> = {
  // Performance Marketing Sub-Services
  "google-ads": {
    title: "Google Ads Management",
    subtitle: "Dominate search results and reach customers actively searching for your solutions",
    description: "Leverage the power of Google's advertising ecosystem to connect with high-intent customers across Search, Display, Shopping, YouTube, and Performance Max campaigns.",
    features: [
      { title: "Search Campaigns Excellence", description: "Capture high-intent traffic with strategic keyword targeting, compelling ad copy, and optimized bidding strategies that maximize conversions while minimizing cost per acquisition." },
      { title: "Performance Max Campaigns", description: "Harness Google's AI to automatically optimize your ads across all Google channels - Search, Display, YouTube, Gmail, and Discover - with a single campaign for maximum reach and efficiency." },
      { title: "Smart Bidding Strategies", description: "Implement advanced automated bidding strategies including Target CPA, Target ROAS, Maximize Conversions, and Enhanced CPC to achieve your specific business goals efficiently." },
      { title: "Shopping Campaign Optimization", description: "Showcase your products with rich product listings, optimize your product feed, and leverage Smart Shopping campaigns for e-commerce success with maximum ROI." },
      { title: "YouTube Advertising", description: "Engage audiences with compelling video ads across YouTube and the Google Display Network, utilizing TrueView, bumper ads, and discovery ads for brand awareness and conversions." },
      { title: "Display Network Mastery", description: "Reach millions across 2 million+ websites and apps with responsive display ads, remarketing campaigns, and audience targeting for brand awareness and customer acquisition." },
    ],
    benefits: ["Lower CPA through continuous optimization", "Higher Quality Scores for better ad positions", "Detailed conversion tracking and attribution", "Access to high-intent search traffic", "Multi-channel visibility across Google ecosystem", "Real-time performance insights and reporting"],
    metrics: ["Average 40% reduction in CPA within 3 months", "Quality Scores of 7+ maintained consistently", "200%+ average ROAS for e-commerce clients", "50%+ increase in conversion rates"],
  },
  "meta-ads": {
    title: "Meta Ads (Facebook & Instagram)",
    subtitle: "Reach billions with precision targeting on the world's largest social platforms",
    description: "Tap into the massive audiences of Facebook and Instagram with data-driven campaigns that leverage advanced targeting, creative testing, and conversion optimization for exceptional results.",
    features: [
      { title: "Advantage+ Shopping Campaigns", description: "Automate your e-commerce advertising with AI-powered campaigns that find your best customers, optimize creative delivery, and maximize sales with minimal manual intervention." },
      { title: "Advanced Audience Targeting", description: "Reach your ideal customers using detailed demographics, interests, behaviors, custom audiences from your data, and powerful lookalike audiences that mirror your best customers." },
      { title: "Dynamic Product Ads", description: "Automatically show the right products to people who have expressed interest on your website, in your app, or elsewhere on the internet with personalized, dynamic creative." },
      { title: "Creative Testing & Optimization", description: "Systematically test ad creative variations, formats, and messaging to identify winning combinations that drive the highest engagement and conversions for your brand." },
      { title: "Instagram Stories & Reels Ads", description: "Capture attention with immersive full-screen ads in Stories and Reels, leveraging native formats that resonate with mobile-first audiences for maximum impact." },
      { title: "Conversion API Integration", description: "Improve tracking accuracy and campaign performance with server-side conversion tracking that bypasses browser limitations and provides more reliable data for optimization." },
    ],
    benefits: ["Precise audience targeting with 2.9B+ users", "Lower costs through automated bidding", "Rich creative formats for storytelling", "Detailed audience insights and analytics", "Seamless Instagram integration", "Powerful retargeting capabilities"],
    metrics: ["Average 3.5x ROAS for e-commerce", "50%+ lower CPA than industry average", "2-5% average CTR on campaigns", "40% improvement with Conversion API"],
  },
  "ai-advertising": {
    title: "AI-Powered Advertising",
    subtitle: "Harness artificial intelligence for predictive optimization and automated scaling",
    description: "Stay ahead of the competition with cutting-edge AI and machine learning technologies that automate optimization, predict performance, and identify winning strategies faster than humanly possible.",
    features: [
      { title: "Predictive Performance Analytics", description: "Use machine learning models to forecast campaign performance, identify trends before they happen, and make data-driven decisions that keep you ahead of market changes." },
      { title: "Automated Creative Generation", description: "Generate hundreds of ad variations automatically using AI, test them at scale, and quickly identify winning combinations that resonate with your target audience." },
      { title: "Intelligent Budget Allocation", description: "Automatically distribute budget across campaigns, ad sets, and platforms based on real-time performance data and predictive models to maximize overall ROI." },
      { title: "Anomaly Detection & Alerts", description: "Get instant notifications when performance deviates from expected patterns, allowing you to quickly address issues or capitalize on unexpected opportunities." },
      { title: "Audience Discovery & Expansion", description: "Leverage AI to discover new high-performing audience segments you might have missed, and automatically expand to similar audiences for scaled growth." },
      { title: "Cross-Platform Optimization", description: "Unify data across multiple advertising platforms and use AI to optimize the entire marketing funnel, not just individual campaigns in isolation." },
    ],
    benefits: ["10x faster optimization cycles", "Discover hidden audience opportunities", "Reduce manual optimization time by 80%", "Scale winning campaigns confidently", "Predictive insights for planning", "Continuous learning and improvement"],
    metrics: ["30%+ improvement in ROAS with AI", "80% reduction in optimization time", "5x more ad variations tested", "95% accuracy in performance predictions"],
  },
  "video-advertising": {
    title: "Video Advertising Excellence",
    subtitle: "Captivate audiences with compelling video content across all major platforms",
    description: "Create thumb-stopping video ads that tell your brand story, showcase products, and drive conversions across YouTube, Instagram, Facebook, TikTok, and connected TV platforms.",
    features: [
      { title: "Full-Service Video Production", description: "From concept development to final editing, our team creates professional video ads optimized for each platform's format, audience behavior, and performance goals." },
      { title: "YouTube Advertising Mastery", description: "Leverage YouTube's massive reach with TrueView in-stream, discovery ads, bumper ads, and masthead placements that build brand awareness and drive conversions." },
      { title: "Social Video Optimization", description: "Create platform-specific videos for Instagram Reels, Facebook Stories, and TikTok that leverage native formats and trending content styles for maximum engagement." },
      { title: "Video Retargeting Campaigns", description: "Re-engage viewers with sequential video messaging that guides them through the customer journey, from awareness to consideration to conversion." },
      { title: "Performance Video Creative", description: "Combine compelling storytelling with direct-response tactics to create videos that entertain while driving measurable business results and ROI." },
      { title: "Video Analytics & Optimization", description: "Track detailed engagement metrics including view-through rates, drop-off points, and conversion paths to continuously improve video performance." },
    ],
    benefits: ["Higher engagement than static ads", "Improved brand recall and recognition", "Better storytelling capabilities", "Strong mobile performance", "Multi-platform distribution", "Detailed audience insights"],
    metrics: ["60%+ completion rate on videos", "3x higher engagement vs static ads", "40% lower CPA with video campaigns", "5x better brand recall"],
  },
  "retargeting": {
    title: "Advanced Retargeting",
    subtitle: "Convert interested visitors into customers with strategic remarketing",
    description: "Re-engage potential customers who have shown interest in your products or services with personalized messaging that addresses their specific stage in the buying journey.",
    features: [
      { title: "Dynamic Product Retargeting", description: "Automatically show users the exact products they viewed on your site, along with similar recommendations, to bring them back to complete their purchase." },
      { title: "Sequential Messaging Campaigns", description: "Guide prospects through a carefully crafted journey with messaging that evolves based on their interactions and time since initial engagement." },
      { title: "Cross-Platform Retargeting", description: "Follow users across devices and platforms including Facebook, Instagram, Google Display Network, and native advertising networks for comprehensive coverage." },
      { title: "Behavior-Based Triggers", description: "Automatically trigger specific retargeting campaigns based on user actions like cart abandonment, product views, video watching, or content downloads." },
      { title: "Frequency Capping & Exclusions", description: "Prevent ad fatigue with intelligent frequency controls and automatically exclude converted customers to optimize budget and user experience." },
      { title: "Email & SMS Retargeting Integration", description: "Coordinate retargeting efforts across paid ads, email, and SMS for a cohesive multi-channel approach that maximizes conversion opportunities." },
    ],
    benefits: ["10x higher conversion rates", "Lower acquisition costs", "Increased cart recovery", "Better ROI than cold traffic", "Personalized user experience", "Multi-touch attribution"],
    metrics: ["15-20% cart abandonment recovery", "5-10x higher CTR than prospecting", "40-60% lower CPA", "3-4x conversion rate improvement"],
  },
  "conversion-optimization": {
    title: "Conversion Rate Optimization",
    subtitle: "Maximize ROI by improving every step of your customer journey",
    description: "Systematically test and optimize your landing pages, user flows, and conversion paths to extract maximum value from your existing traffic and advertising spend.",
    features: [
      { title: "Landing Page Optimization", description: "Design, test, and refine landing pages with compelling copy, clear calls-to-action, and persuasive elements that guide visitors toward conversion." },
      { title: "A/B & Multivariate Testing", description: "Run statistically significant tests on headlines, images, CTAs, forms, and layouts to identify winning variations that increase conversion rates." },
      { title: "Heatmap & Session Analysis", description: "Understand how users interact with your pages using heatmaps, scroll maps, and session recordings to identify friction points and optimization opportunities." },
      { title: "Form Optimization", description: "Reduce form abandonment with strategic field reduction, smart defaults, inline validation, and progressive disclosure that makes completing forms effortless." },
      { title: "Mobile Experience Optimization", description: "Ensure flawless mobile performance with responsive design, fast load times, and mobile-optimized experiences that convert on any device." },
      { title: "Conversion Funnel Analysis", description: "Map and analyze your entire conversion funnel to identify drop-off points, optimize each step, and improve overall conversion rates." },
    ],
    benefits: ["Higher conversion rates", "Better user experience", "Increased revenue per visitor", "Lower customer acquisition costs", "Data-driven decision making", "Continuous improvement"],
    metrics: ["Average 30-50% increase in conversions", "20-40% improvement in form completions", "25%+ reduction in bounce rates", "2-3x ROI on optimization efforts"],
  },

  // Social Media Marketing Sub-Services
  "content-planning": {
    title: "Strategic Content Planning",
    subtitle: "Build a content roadmap that aligns with business goals and audience needs",
    description: "Develop comprehensive content strategies that ensure consistent, on-brand messaging across all social platforms while driving engagement and business results.",
    features: [
      { title: "Content Calendar Development", description: "Create detailed monthly content calendars that balance promotional, educational, and entertaining content while aligning with marketing campaigns and business objectives." },
      { title: "Audience Research & Personas", description: "Develop detailed audience personas based on data analysis to ensure every piece of content resonates with your target audience's interests and pain points." },
      { title: "Competitor Content Analysis", description: "Analyze competitors' social strategies to identify content gaps, opportunities, and best practices that inform your unique positioning." },
      { title: "Content Pillar Strategy", description: "Establish 3-5 core content themes that align with your brand values and audience interests, ensuring variety while maintaining focus and consistency." },
      { title: "Platform-Specific Planning", description: "Tailor content plans for each platform's unique format, audience behavior, and algorithm preferences to maximize reach and engagement." },
      { title: "Campaign Integration", description: "Coordinate social content with broader marketing campaigns, product launches, and seasonal promotions for cohesive cross-channel messaging." },
    ],
    benefits: ["Consistent brand presence", "Aligned marketing messaging", "Efficient content production", "Better audience engagement", "Measurable content performance", "Strategic resource allocation"],
    metrics: ["3-month content roadmap maintained", "30+ pieces of content planned monthly", "50% increase in posting consistency", "40% improvement in engagement rates"],
  },
  "platform-optimization": {
    title: "Platform Optimization",
    subtitle: "Maximize reach and engagement on every social platform",
    description: "Optimize your presence on each social platform with tailored strategies that leverage platform-specific features, algorithms, and best practices for maximum visibility.",
    features: [
      { title: "Profile & Bio Optimization", description: "Craft compelling profiles with keyword-optimized bios, strategic link placement, and complete business information that converts profile visitors into followers and customers." },
      { title: "Algorithm Alignment", description: "Stay current with platform algorithm changes and optimize content timing, format, and engagement tactics to maximize organic reach and visibility." },
      { title: "Hashtag Strategy", description: "Research and implement strategic hashtag combinations that increase discoverability while targeting the right audience segments for each platform." },
      { title: "Feature Utilization", description: "Leverage platform-specific features like Instagram Reels, LinkedIn Articles, Twitter Spaces, and Facebook Groups to maximize engagement and reach." },
      { title: "Cross-Platform Syndication", description: "Efficiently repurpose and adapt content across platforms while maintaining platform-specific best practices and authentic engagement." },
      { title: "Analytics Setup & Tracking", description: "Configure comprehensive analytics tracking across all platforms to measure performance, understand audience behavior, and inform optimization decisions." },
    ],
    benefits: ["Increased organic reach", "Higher engagement rates", "Better audience targeting", "Platform-specific expertise", "Improved content performance", "Data-driven optimization"],
    metrics: ["40%+ increase in organic reach", "2x improvement in engagement rate", "50% growth in follower quality", "30% reduction in algorithm penalties"],
  },
  "community-management": {
    title: "Community Management",
    subtitle: "Build lasting relationships through authentic engagement",
    description: "Foster a vibrant, engaged community around your brand through timely responses, meaningful interactions, and proactive community building that turns followers into advocates.",
    features: [
      { title: "Real-Time Engagement", description: "Monitor and respond to comments, messages, and mentions in real-time, ensuring no opportunity for connection or customer service is missed." },
      { title: "Community Guidelines & Moderation", description: "Establish and enforce community guidelines that foster positive interactions while protecting your brand reputation and community members." },
      { title: "Influencer & Brand Partnerships", description: "Identify and nurture relationships with micro-influencers and brand advocates who can amplify your message authentically to their audiences." },
      { title: "Crisis Management", description: "Quickly identify and address potential PR issues with established protocols that protect brand reputation while showing authentic care for community concerns." },
      { title: "User-Generated Content Curation", description: "Encourage, collect, and showcase user-generated content that builds social proof and strengthens community bonds." },
      { title: "Community Growth Tactics", description: "Implement strategic engagement tactics like polls, Q&As, contests, and interactive content that grow and activate your community." },
    ],
    benefits: ["Stronger brand loyalty", "Better customer retention", "Authentic brand advocacy", "Improved brand reputation", "Valuable customer insights", "Higher customer lifetime value"],
    metrics: ["<2 hour average response time", "90%+ positive sentiment ratio", "50% increase in brand mentions", "40% growth in community size"],
  },
  "paid-social": {
    title: "Paid Social Campaigns",
    subtitle: "Amplify reach with targeted paid advertising across social platforms",
    description: "Design and execute paid social campaigns that combine creative excellence with data-driven targeting to reach your ideal customers and drive measurable business results.",
    features: [
      { title: "Multi-Platform Campaign Management", description: "Execute coordinated paid campaigns across Facebook, Instagram, LinkedIn, Twitter, TikTok, and Pinterest with platform-specific strategies and unified tracking." },
      { title: "Advanced Audience Targeting", description: "Leverage detailed targeting options including demographics, interests, behaviors, custom audiences, and lookalikes to reach high-value prospects." },
      { title: "Creative Testing Framework", description: "Systematically test ad creative, copy, formats, and calls-to-action to identify winning combinations that drive the highest ROI." },
      { title: "Budget Optimization", description: "Strategically allocate and optimize budget across campaigns, ad sets, and platforms based on performance data and business objectives." },
      { title: "Conversion Tracking Setup", description: "Implement comprehensive conversion tracking with pixels, events, and APIs to accurately measure campaign performance and ROI." },
      { title: "Performance Reporting", description: "Deliver detailed performance reports with actionable insights, clear ROI metrics, and strategic recommendations for continuous improvement." },
    ],
    benefits: ["Precise audience targeting", "Scalable growth", "Measurable ROI", "Quick campaign deployment", "A/B testing capabilities", "Cross-platform insights"],
    metrics: ["3-5x ROAS average", "40% lower CPA than organic", "50K+ targeted reach per campaign", "30% increase in qualified leads"],
  },

  // SEO Sub-Services
  "technical-seo": {
    title: "Technical SEO Excellence",
    subtitle: "Build a rock-solid foundation for search engine visibility",
    description: "Optimize your website's technical infrastructure to ensure search engines can efficiently crawl, index, and rank your content while providing an exceptional user experience.",
    features: [
      { title: "Site Speed Optimization", description: "Improve page load times through image optimization, code minification, caching strategies, and CDN implementation for better rankings and user experience." },
      { title: "Mobile-First Optimization", description: "Ensure flawless mobile performance with responsive design, mobile-friendly navigation, and optimized experiences that meet Google's mobile-first indexing requirements." },
      { title: "Site Architecture & Crawlability", description: "Design logical site structure, optimize internal linking, and ensure search engines can efficiently discover and index all important pages." },
      { title: "Schema Markup Implementation", description: "Add structured data markup to enhance search listings with rich snippets, improve click-through rates, and help search engines understand your content." },
      { title: "Core Web Vitals Optimization", description: "Improve Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS) to meet Google's page experience standards." },
      { title: "Security & HTTPS", description: "Implement SSL certificates, secure authentication, and protect against vulnerabilities to ensure safe browsing and maintain search rankings." },
    ],
    benefits: ["Better search rankings", "Improved user experience", "Faster page loads", "Higher crawl efficiency", "Enhanced mobile performance", "Future-proof foundation"],
    metrics: ["50%+ improvement in page speed", "90+ Google PageSpeed scores", "Zero critical crawl errors", "100% mobile-friendly pages"],
  },
  "keyword-strategy": {
    title: "Keyword Research & Strategy",
    subtitle: "Discover and target the keywords that drive qualified traffic and conversions",
    description: "Identify high-value keyword opportunities through comprehensive research and develop a strategic approach to ranking for terms that matter most to your business.",
    features: [
      { title: "Comprehensive Keyword Research", description: "Discover thousands of keyword opportunities using advanced tools and competitor analysis to identify terms with optimal search volume and conversion potential." },
      { title: "Search Intent Analysis", description: "Understand the intent behind search queries to create content that matches what users are actually looking for and drives meaningful engagement." },
      { title: "Competitor Keyword Gap Analysis", description: "Identify keywords your competitors rank for that you don't, uncovering quick-win opportunities and strategic content gaps to fill." },
      { title: "Long-Tail Keyword Strategy", description: "Target specific, lower-competition long-tail keywords that attract highly qualified traffic with clear purchase or conversion intent." },
      { title: "Keyword Clustering & Mapping", description: "Organize keywords into logical topic clusters and map them to specific pages for comprehensive topic coverage and better rankings." },
      { title: "Content Optimization Roadmap", description: "Develop a prioritized roadmap for creating and optimizing content around target keywords based on business impact and ranking difficulty." },
    ],
    benefits: ["Target high-value keywords", "Lower competition opportunities", "Better content strategy", "Improved conversion rates", "Competitive advantages", "Scalable organic growth"],
    metrics: ["500+ keyword opportunities identified", "30% of keywords ranking top 10", "50% increase in organic traffic", "40% improvement in qualified leads"],
  },
  "on-page-seo": {
    title: "On-Page SEO Optimization",
    subtitle: "Perfect every element on your pages for maximum search visibility",
    description: "Optimize all on-page elements including content, meta tags, headings, and internal links to ensure every page is fully optimized for target keywords and user intent.",
    features: [
      { title: "Meta Tag Optimization", description: "Craft compelling title tags and meta descriptions that include target keywords while encouraging clicks from search results with persuasive copy." },
      { title: "Content Optimization", description: "Optimize existing content and create new content that thoroughly covers topics, naturally incorporates keywords, and provides exceptional value to readers." },
      { title: "Header Tag Structure", description: "Implement proper H1-H6 hierarchy that improves readability, includes target keywords, and helps search engines understand content structure and importance." },
      { title: "Internal Linking Strategy", description: "Build strategic internal links that distribute page authority, improve crawlability, and guide users to related content for better engagement." },
      { title: "Image Optimization", description: "Optimize image file names, alt text, and file sizes for faster loading and better accessibility while targeting relevant keywords." },
      { title: "URL Structure Optimization", description: "Create clean, descriptive URLs that include target keywords and make it easy for users and search engines to understand page content." },
    ],
    benefits: ["Higher search rankings", "Improved click-through rates", "Better user engagement", "Enhanced content relevance", "Stronger topical authority", "Increased organic traffic"],
    metrics: ["40%+ increase in organic traffic", "25% improvement in CTR", "Top 5 rankings for target keywords", "50% longer average session duration"],
  },
  "link-building": {
    title: "Quality Link Building",
    subtitle: "Build authoritative backlinks that boost rankings and drive referral traffic",
    description: "Earn high-quality backlinks from authoritative websites through strategic outreach, content marketing, and digital PR that strengthens your domain authority and search rankings.",
    features: [
      { title: "Strategic Link Prospecting", description: "Identify high-authority, relevant websites for link building opportunities using advanced tools and manual research to ensure quality over quantity." },
      { title: "Content-Driven Link Earning", description: "Create linkable assets like original research, infographics, and comprehensive guides that naturally attract backlinks from authoritative sources." },
      { title: "Digital PR & Outreach", description: "Build relationships with journalists, bloggers, and industry influencers through personalized outreach campaigns that earn editorial backlinks." },
      { title: "Broken Link Building", description: "Identify broken links on authoritative sites and offer your content as a replacement, providing value while earning quality backlinks." },
      { title: "Guest Posting Strategy", description: "Contribute expert content to relevant, high-authority websites that provide exposure to new audiences while building valuable backlinks." },
      { title: "Link Quality Monitoring", description: "Regularly audit your backlink profile to identify and disavow toxic links while tracking the impact of new links on rankings and traffic." },
    ],
    benefits: ["Stronger domain authority", "Higher search rankings", "Increased referral traffic", "Better brand visibility", "Industry recognition", "Long-term SEO value"],
    metrics: ["50+ quality backlinks per quarter", "30+ increase in domain authority", "40% improvement in keyword rankings", "25% increase in referral traffic"],
  },
};

const SubServiceDetail = () => {
  const { slug } = useParams();
  const [dialogOpen, setDialogOpen] = useState(false);
  
  const service = subServiceData[slug || ""] || {
    title: "Service Not Found",
    subtitle: "This service is currently being developed",
    description: "Please check back soon for detailed information about this service.",
    features: [],
    benefits: [],
    metrics: [],
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-br from-background via-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold">{service.title}</h1>
              <p className="text-xl md:text-2xl text-primary font-semibold">{service.subtitle}</p>
              <p className="text-muted-foreground text-lg">{service.description}</p>
              <Button size="lg" className="mt-6" onClick={() => setDialogOpen(true)}>
                Get Started <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Key <span className="text-primary">Features</span></h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {service.features?.map((f: any, i: number) => (
                <div key={i} className="bg-card border rounded-lg p-6 hover:border-primary/50 transition">
                  <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                  <p className="text-muted-foreground">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {service.benefits?.length > 0 && (
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-12"><span className="text-primary">Benefits</span> You'll Experience</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {service.benefits?.map((b: string, i: number) => (
                  <div key={i} className="flex items-start gap-3 bg-card p-4 rounded-lg border">
                    <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {service.metrics?.length > 0 && (
          <section className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-12">Performance <span className="text-primary">Metrics</span></h2>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {service.metrics?.map((m: string, i: number) => (
                  <div key={i} className="bg-primary/10 border-2 border-primary rounded-lg p-6 text-center">
                    <p className="text-lg font-semibold">{m}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="py-20 bg-gradient-to-br from-primary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Get <span className="text-primary">Started?</span></h2>
            <p className="text-muted-foreground text-lg mb-8">Let's discuss how this service can help you achieve your goals.</p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" onClick={() => setDialogOpen(true)}>Start Your Project <ArrowRight className="ml-2" /></Button>
              <Button size="lg" variant="outline" asChild><a href="/contact">Contact Us</a></Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <GetStartedDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </div>
  );
};

export default SubServiceDetail;
