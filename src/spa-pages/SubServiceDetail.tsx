import PageHero from "@/components/PageHero";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import SubServiceDetailDialogLauncher from "@/components/SubServiceDetailDialogLauncher";
import FAQ from "@/components/FAQ";
import { SEOHead } from "@/components/SEOHead";


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
    title: "Strategic Link Building & Digital PR",
    subtitle: "Build authoritative backlinks that boost rankings and domain authority",
    description: "Acquire high-quality backlinks from authoritative websites through ethical outreach, content marketing, and digital PR strategies that strengthen your site's authority and search rankings.",
    features: [
      { title: "Content-Driven Link Acquisition", description: "Create linkable assets like original research, infographics, and comprehensive guides that naturally attract backlinks from authoritative sites." },
      { title: "Digital PR & Outreach", description: "Secure media coverage and mentions in industry publications, news sites, and influential blogs through strategic PR campaigns." },
      { title: "Broken Link Building", description: "Identify broken links on authoritative sites and offer your content as a replacement, earning valuable backlinks." },
      { title: "Competitor Backlink Analysis", description: "Analyze competitors' link profiles to identify link opportunities and replicate their successful link-building strategies." },
      { title: "Guest Posting Strategy", description: "Contribute high-quality content to relevant industry blogs and publications to earn contextual backlinks and reach new audiences." },
      { title: "Link Quality Monitoring", description: "Continuously monitor backlink profile health, disavow toxic links, and maintain a clean, authoritative link portfolio." },
    ],
    benefits: ["Higher domain authority", "Improved search rankings", "Increased referral traffic", "Enhanced brand visibility", "Stronger online reputation", "Long-term SEO value"],
    metrics: ["50+ high-quality backlinks monthly", "30% increase in domain authority", "Top 10 rankings improvement", "40% boost in referral traffic"],
  },

  // Email Marketing Sub-Services
  "email-campaigns": {
    title: "Email Campaign Strategy",
    subtitle: "Design targeted email campaigns that nurture leads and drive conversions",
    description: "Create strategic email campaigns that engage subscribers, build relationships, and drive measurable business results through personalized messaging and optimization.",
    features: [
      { title: "Campaign Planning & Strategy", description: "Develop comprehensive email strategies aligned with business goals, customer journey stages, and seasonal opportunities for maximum impact." },
      { title: "Audience Segmentation", description: "Segment email lists based on behavior, demographics, and engagement to deliver personalized content that resonates with each audience segment." },
      { title: "Performance Tracking", description: "Monitor open rates, click-through rates, conversions, and revenue to continuously optimize campaign performance and ROI." },
      { title: "Deliverability Optimization", description: "Ensure emails reach inboxes with proper authentication, list hygiene, and best practices that maintain high deliverability rates." },
    ],
    benefits: ["Higher engagement rates", "Increased conversions", "Better customer relationships", "Measurable ROI", "Automated nurturing", "Scalable growth"],
    metrics: ["25-35% average open rate", "3-5% click-through rate", "15-20% conversion rate", "800%+ average ROI"],
  },
  "marketing-automation": {
    title: "Marketing Automation",
    subtitle: "Automate workflows to nurture leads and increase efficiency",
    description: "Implement sophisticated automation workflows that deliver the right message at the right time, nurturing leads through the customer journey while saving time and increasing conversions.",
    features: [
      { title: "Welcome Series Automation", description: "Create automated onboarding sequences that introduce new subscribers to your brand and drive first purchases with strategic messaging." },
      { title: "Abandoned Cart Recovery", description: "Automatically recover lost sales with timely cart abandonment emails that remind customers and incentivize purchase completion." },
      { title: "Lead Nurturing Workflows", description: "Build multi-step workflows that educate prospects, build trust, and guide them toward conversion based on their behaviors and interests." },
      { title: "Re-engagement Campaigns", description: "Win back inactive subscribers with automated campaigns that reignite interest and prevent list churn." },
    ],
    benefits: ["24/7 lead nurturing", "Higher conversion rates", "Time savings", "Consistent messaging", "Improved customer journey", "Increased revenue"],
    metrics: ["70% time savings", "50% increase in lead conversions", "30% improvement in customer retention", "3x higher engagement"],
  },
  "list-segmentation": {
    title: "List Segmentation & Personalization",
    subtitle: "Deliver personalized messages that resonate with each subscriber",
    description: "Segment your email list into targeted groups and deliver personalized content that increases engagement, conversions, and customer satisfaction.",
    features: [
      { title: "Behavioral Segmentation", description: "Group subscribers based on website activity, email engagement, and purchase behavior for highly relevant messaging." },
      { title: "Demographic Segmentation", description: "Target based on location, age, job title, and other demographics to deliver culturally and contextually relevant content." },
      { title: "Lifecycle Stage Segmentation", description: "Customize messaging for prospects, new customers, repeat buyers, and at-risk customers based on their journey stage." },
      { title: "Dynamic Content Blocks", description: "Show different content to different segments within the same email for personalized experiences at scale." },
    ],
    benefits: ["Higher engagement", "Better relevance", "Increased conversions", "Reduced unsubscribes", "Stronger relationships", "Improved metrics"],
    metrics: ["50%+ increase in engagement", "30% higher conversion rates", "40% reduction in unsubscribes", "2x better click rates"],
  },
  "email-design": {
    title: "Email Design & Copywriting",
    subtitle: "Create beautiful, engaging emails that drive action",
    description: "Design mobile-responsive emails with compelling copy and visual elements that capture attention, communicate value, and motivate subscribers to take action.",
    features: [
      { title: "Mobile-First Design", description: "Create responsive templates that look perfect on all devices, ensuring optimal experience for mobile users who represent 60%+ of opens." },
      { title: "Conversion-Focused Copy", description: "Write compelling subject lines, preview text, and body copy that drives opens, clicks, and conversions with persuasive messaging." },
      { title: "Visual Hierarchy", description: "Design emails with clear visual flow that guides readers to key messages and calls-to-action for maximum impact." },
      { title: "Brand Consistency", description: "Maintain consistent branding across all emails with templates that reflect your visual identity and brand voice." },
    ],
    benefits: ["Professional appearance", "Higher engagement", "Better mobile experience", "Stronger brand identity", "Increased conversions", "Consistent quality"],
    metrics: ["60%+ mobile open rate", "40% increase in CTR", "25% boost in conversions", "90%+ brand recognition"],
  },

  // Content Marketing Sub-Services  
  "content-strategy": {
    title: "Content Strategy Development",
    subtitle: "Build comprehensive strategies that align content with business goals",
    description: "Develop data-driven content strategies that attract, engage, and convert your target audience while establishing thought leadership and driving sustainable growth.",
    features: [
      { title: "Audience Research", description: "Conduct deep research into audience needs, pain points, and content preferences to inform strategic content creation." },
      { title: "Content Audit", description: "Analyze existing content performance to identify gaps, opportunities, and optimization priorities." },
      { title: "Editorial Calendar", description: "Plan content production with detailed calendars that ensure consistent publishing and strategic topic coverage." },
      { title: "Distribution Strategy", description: "Develop multi-channel distribution plans that maximize content reach and engagement across owned, earned, and paid channels." },
    ],
    benefits: ["Strategic direction", "Consistent publishing", "Better ROI", "Improved rankings", "Thought leadership", "Measurable results"],
    metrics: ["50+ content pieces planned quarterly", "40% increase in organic traffic", "30% improvement in engagement", "3x content ROI"],
  },
  "blog-writing": {
    title: "Blog & Article Writing",
    subtitle: "Create SEO-optimized content that establishes thought leadership",
    description: "Produce high-quality blog posts and articles that rank in search engines, engage readers, and position your brand as an industry authority.",
    features: [
      { title: "SEO Content Writing", description: "Create keyword-optimized articles that rank in search results while providing genuine value to readers." },
      { title: "Thought Leadership Articles", description: "Position executives and brands as industry experts with insightful, original perspectives on trending topics." },
      { title: "Long-Form Content", description: "Develop comprehensive guides, whitepapers, and pillar content that thoroughly cover topics and attract backlinks." },
      { title: "Content Refresh", description: "Update and optimize existing content to maintain rankings, improve quality, and maximize content value over time." },
    ],
    benefits: ["Higher search rankings", "Increased organic traffic", "Brand authority", "Lead generation", "Long-term value", "Better engagement"],
    metrics: ["2-4 articles weekly", "Top 10 rankings for 40% of keywords", "50% increase in organic traffic", "25% conversion rate"],
  },
  "video-production": {
    title: "Video Content Production",
    subtitle: "Produce engaging videos for social media and marketing campaigns",
    description: "Create professional video content that tells your brand story, showcases products, and drives engagement across social media, websites, and advertising platforms.",
    features: [
      { title: "Social Media Videos", description: "Produce short-form videos optimized for Instagram, TikTok, Facebook, and LinkedIn that stop scrolling and drive engagement." },
      { title: "Explainer Videos", description: "Create clear, compelling videos that explain complex products or services in ways that educate and convert prospects." },
      { title: "Product Demonstrations", description: "Showcase product features and benefits with professional demonstrations that help customers make informed purchase decisions." },
      { title: "Brand Storytelling", description: "Craft narrative-driven videos that communicate brand values, mission, and unique selling propositions emotionally." },
    ],
    benefits: ["Higher engagement", "Better retention", "Increased conversions", "Stronger brand connection", "Improved SEO", "Social sharing"],
    metrics: ["10x higher engagement vs text", "80% video content preference", "50% boost in conversions", "1200% more shares"],
  },
  "infographic-design": {
    title: "Infographic Design",
    subtitle: "Transform complex data into shareable visual content",
    description: "Design compelling infographics that simplify complex information, increase social shares, and attract high-quality backlinks to boost SEO and brand visibility.",
    features: [
      { title: "Data Visualization", description: "Transform statistics, research, and complex data into easy-to-understand visual formats that engage and inform." },
      { title: "Process Infographics", description: "Illustrate step-by-step processes, workflows, and how-to guides in visual formats that improve comprehension." },
      { title: "Comparison Infographics", description: "Create side-by-side comparisons that help audiences make informed decisions about products, services, or solutions." },
      { title: "Timeline Infographics", description: "Visualize historical progression, project timelines, or sequential information in engaging chronological formats." },
    ],
    benefits: ["Increased shares", "Better comprehension", "Higher engagement", "Quality backlinks", "Brand visibility", "Content variety"],
    metrics: ["3x more shares than text", "30x more reads", "40% more backlinks", "70% better retention"],
  },

  // Web Development Sub-Services
  "custom-websites": {
    title: "Custom Website Development",
    subtitle: "Build tailored websites with cutting-edge technology",
    description: "Develop custom websites that perfectly match your brand, business needs, and goals with modern frameworks, optimal performance, and scalable architecture.",
    features: [
      { title: "Modern Tech Stack", description: "Build with React, Next.js, and other cutting-edge frameworks for fast, reliable, and maintainable websites." },
      { title: "Custom Design Implementation", description: "Transform unique design visions into pixel-perfect, functional websites that stand out from template-based competitors." },
      { title: "Performance Optimization", description: "Ensure lightning-fast load times with optimized code, efficient assets, and best practices for Core Web Vitals." },
      { title: "Scalable Architecture", description: "Build websites that grow with your business, handling increased traffic and functionality without performance degradation." },
    ],
    benefits: ["Unique brand identity", "Superior performance", "Better SEO", "Scalability", "Custom functionality", "Competitive advantage"],
    metrics: ["<2s page load time", "95+ PageSpeed score", "100% mobile responsive", "99.9% uptime"],
  },
  "web-apps": {
    title: "Web Application Development",
    subtitle: "Create powerful web apps with advanced functionality",
    description: "Build feature-rich web applications that solve complex business problems, streamline operations, and provide exceptional user experiences with modern technologies.",
    features: [
      { title: "Full-Stack Development", description: "Develop complete applications with robust backend systems, databases, and intuitive front-end interfaces." },
      { title: "Real-Time Features", description: "Implement live updates, chat, notifications, and collaborative features that enhance user engagement." },
      { title: "Third-Party Integrations", description: "Connect to payment gateways, CRMs, analytics, and other services to extend functionality and streamline workflows." },
      { title: "User Authentication", description: "Implement secure login systems with role-based access control and multi-factor authentication." },
    ],
    benefits: ["Custom solutions", "Business automation", "Better efficiency", "Competitive edge", "Data insights", "User satisfaction"],
    metrics: ["50%+ efficiency improvement", "90%+ user satisfaction", "Secure authentication", "Real-time updates"],
  },
  "cms-integration": {
    title: "CMS Integration & Management",
    subtitle: "Implement content management for easy updates",
    description: "Integrate powerful content management systems that empower your team to update content, images, and pages without technical knowledge or developer assistance.",
    features: [
      { title: "Headless CMS Setup", description: "Implement modern headless CMS solutions like Contentful, Strapi, or Sanity for flexible content management." },
      { title: "WordPress Development", description: "Build custom WordPress sites with tailored themes and plugins for powerful, user-friendly content management." },
      { title: "Training & Documentation", description: "Provide comprehensive training and documentation so your team can confidently manage content independently." },
      { title: "Custom Fields & Templates", description: "Create custom content types, fields, and page templates that match your specific content needs." },
    ],
    benefits: ["Content independence", "Easy updates", "No coding required", "Faster publishing", "Better workflow", "Cost savings"],
    metrics: ["80% faster content updates", "Zero developer dependency", "90% team adoption", "50% cost reduction"],
  },
  "api-development": {
    title: "API Development & Integration",
    subtitle: "Build and connect APIs for seamless functionality",
    description: "Develop robust APIs and integrate third-party services to enable data exchange, extend functionality, and create connected digital ecosystems.",
    features: [
      { title: "RESTful API Development", description: "Build secure, scalable REST APIs that enable communication between systems and power mobile apps and integrations." },
      { title: "Third-Party API Integration", description: "Connect to external services like payment processors, shipping providers, CRMs, and marketing tools." },
      { title: "API Documentation", description: "Create comprehensive documentation that makes APIs easy to understand and implement for developers." },
      { title: "Webhook Implementation", description: "Set up real-time event notifications that trigger actions across connected systems automatically." },
    ],
    benefits: ["System connectivity", "Automation", "Data synchronization", "Extended functionality", "Better efficiency", "Scalability"],
    metrics: ["<100ms API response time", "99.9% uptime", "Secure authentication", "Real-time sync"],
  },

  // E-Commerce Sub-Services
  "ecommerce-setup": {
    title: "E-Commerce Platform Setup",
    subtitle: "Launch full-featured online stores",
    description: "Set up complete e-commerce solutions on platforms like Shopify, WooCommerce, or custom builds that enable you to sell products online effectively and profitably.",
    features: [
      { title: "Platform Selection & Setup", description: "Choose and configure the right e-commerce platform based on your products, scale, and business requirements." },
      { title: "Product Organization", description: "Structure products with categories, collections, filters, and search to help customers find what they need quickly." },
      { title: "Shipping Configuration", description: "Set up shipping zones, rates, and integrations with carriers for accurate, automated shipping calculations." },
      { title: "Tax Configuration", description: "Configure tax rules, rates, and compliance features to handle complex tax requirements automatically." },
    ],
    benefits: ["Quick launch", "Professional store", "All features included", "Scalable platform", "Secure transactions", "Mobile commerce"],
    metrics: ["2-4 week launch timeline", "Mobile-optimized checkout", "Multiple payment options", "Automated tax & shipping"],
  },
  "payment-integration": {
    title: "Payment Gateway Integration",
    subtitle: "Secure payment processing with multiple options",
    description: "Integrate reliable payment gateways that accept credit cards, digital wallets, and alternative payment methods while ensuring security and reducing cart abandonment.",
    features: [
      { title: "Multi-Payment Support", description: "Accept credit cards, PayPal, Apple Pay, Google Pay, and other popular payment methods customers prefer." },
      { title: "Secure Transactions", description: "Implement PCI-compliant payment processing with SSL encryption and fraud prevention to protect customer data." },
      { title: "One-Click Checkout", description: "Enable saved payment methods and express checkout options that reduce friction and increase conversions." },
      { title: "Subscription Billing", description: "Set up recurring payment processing for subscription products and membership programs." },
    ],
    benefits: ["More payment options", "Higher conversions", "Secure processing", "Reduced abandonment", "Customer trust", "Global sales"],
    metrics: ["15% higher conversions", "30% faster checkout", "99.9% uptime", "PCI compliance"],
  },
  "catalog-management": {
    title: "Product Catalog Management",
    subtitle: "Organize and optimize product listings",
    description: "Create and manage product catalogs with optimized listings, high-quality images, and detailed information that help customers make purchase decisions confidently.",
    features: [
      { title: "Product Information Optimization", description: "Write compelling product titles, descriptions, and specifications that inform customers and improve search rankings." },
      { title: "Product Photography", description: "Guide or create professional product images that showcase features and benefits from multiple angles." },
      { title: "Variant Management", description: "Set up product variations for size, color, and other options with inventory tracking for each variant." },
      { title: "Bulk Product Import", description: "Import and update hundreds or thousands of products efficiently with CSV files and automated tools." },
    ],
    benefits: ["Better product presentation", "Higher conversions", "Easier management", "Improved SEO", "Faster updates", "Reduced errors"],
    metrics: ["30% increase in product page conversions", "50% faster catalog updates", "90%+ data accuracy", "SEO-optimized listings"],
  },
  "cart-optimization": {
    title: "Shopping Cart Optimization",
    subtitle: "Reduce abandonment and increase conversions",
    description: "Optimize checkout flows to reduce friction, build trust, and convert more visitors into customers with streamlined processes and persuasive elements.",
    features: [
      { title: "Checkout Flow Optimization", description: "Streamline checkout with fewer steps, clear progress indicators, and guest checkout options." },
      { title: "Trust Signals", description: "Add security badges, guarantees, and testimonials that build confidence and reduce purchase anxiety." },
      { title: "Exit-Intent Offers", description: "Capture abandoning visitors with timely popups offering discounts or incentives to complete purchases." },
      { title: "Cart Recovery Emails", description: "Automatically email customers who abandon carts with reminders and incentives to return and complete purchases." },
    ],
    benefits: ["Higher conversion rates", "Lower abandonment", "Increased revenue", "Better UX", "Customer confidence", "More sales"],
    metrics: ["30% reduction in abandonment", "20% increase in conversions", "15% higher average order value", "70% email recovery rate"],
  },

  // Mobile Design Sub-Services
  "responsive-design": {
    title: "Responsive Web Design",
    subtitle: "Fluid designs that adapt to any screen size",
    description: "Create responsive websites that automatically adjust layout, images, and functionality to provide optimal experiences on desktops, tablets, and smartphones.",
    features: [
      { title: "Fluid Grid Systems", description: "Design with flexible grids that resize proportionally across all devices for consistent, beautiful layouts everywhere." },
      { title: "Responsive Images", description: "Serve appropriately-sized images for each device to ensure fast loading without sacrificing visual quality." },
      { title: "Touch-Friendly Interfaces", description: "Design buttons, menus, and interactive elements sized and spaced for easy touch interaction on mobile devices." },
      { title: "Viewport Optimization", description: "Configure proper viewport settings that ensure content displays correctly on all screen sizes and orientations." },
    ],
    benefits: ["Universal compatibility", "Better user experience", "Improved SEO", "Single codebase", "Future-proof", "Cost-effective"],
    metrics: ["100% device compatibility", "90+ mobile PageSpeed score", "30% increase in mobile conversions", "<3s mobile load time"],
  },
  "mobile-ux": {
    title: "Mobile UX Optimization",
    subtitle: "Optimize experiences for mobile users",
    description: "Design and optimize specifically for mobile user behaviors, constraints, and expectations to deliver exceptional experiences that convert mobile visitors.",
    features: [
      { title: "Mobile-First Design", description: "Start design with mobile in mind, then enhance for larger screens, ensuring optimal mobile experiences." },
      { title: "Simplified Navigation", description: "Create mobile-friendly menus and navigation that work perfectly with limited screen space and thumb-based interaction." },
      { title: "Form Optimization", description: "Minimize typing, use appropriate input types, and streamline forms for easy completion on mobile devices." },
      { title: "Performance Priority", description: "Prioritize speed with lazy loading, efficient code, and mobile-optimized assets for instant interactions." },
    ],
    benefits: ["Better mobile conversions", "Higher engagement", "Lower bounce rates", "Improved satisfaction", "Competitive advantage", "More mobile sales"],
    metrics: ["40% increase in mobile conversions", "50% reduction in bounce rate", "60%+ mobile traffic", "90% mobile satisfaction"],
  },
  "pwa-development": {
    title: "Progressive Web App Development",
    subtitle: "Combine the best of web and mobile apps",
    description: "Build Progressive Web Apps that work offline, install to home screens, and provide app-like experiences while maintaining web accessibility and discoverability.",
    features: [
      { title: "Offline Functionality", description: "Enable core features to work without internet connection using service workers and local storage." },
      { title: "Home Screen Installation", description: "Allow users to install your web app to device home screens for app-like access without app stores." },
      { title: "Push Notifications", description: "Re-engage users with timely push notifications even when the app isn't open in their browser." },
      { title: "App-Like Experience", description: "Provide smooth animations, gestures, and interactions that feel like native mobile apps." },
    ],
    benefits: ["No app store needed", "Works offline", "Lower development cost", "Better engagement", "Push notifications", "Cross-platform"],
    metrics: ["70% increase in engagement", "3x faster than native apps", "50% lower development cost", "Works on all devices"],
  },
  "mobile-performance": {
    title: "Mobile Performance Optimization",
    subtitle: "Lightning-fast mobile experiences",
    description: "Optimize websites and apps for maximum mobile performance with techniques that reduce load times, minimize data usage, and ensure smooth interactions.",
    features: [
      { title: "Image Optimization", description: "Compress and serve next-gen image formats like WebP that reduce file sizes by 30-80% without quality loss." },
      { title: "Code Splitting", description: "Load only necessary code for each page, reducing initial bundle size and improving time to interactive." },
      { title: "Lazy Loading", description: "Defer loading of below-the-fold images and components until needed, prioritizing visible content." },
      { title: "Mobile Caching", description: "Implement aggressive caching strategies that enable instant repeat visits and reduced data usage." },
    ],
    benefits: ["Faster load times", "Better Core Web Vitals", "Reduced data usage", "Higher rankings", "Improved conversions", "Better retention"],
    metrics: ["<2s mobile load time", "90+ mobile PageSpeed score", "50% less data usage", "40% faster repeat visits"],
  },

  // Landing Pages Sub-Services
  "conversion-design": {
    title: "Conversion-Focused Landing Page Design",
    subtitle: "Design pages optimized for maximum conversions",
    description: "Create landing pages with strategic design, compelling copy, and persuasive elements that guide visitors toward conversion with clear value propositions.",
    features: [
      { title: "Value Proposition Design", description: "Craft clear, compelling headlines and subheadings that immediately communicate unique value and benefits." },
      { title: "Strategic CTAs", description: "Design and position calls-to-action that stand out, communicate action clearly, and motivate immediate response." },
      { title: "Social Proof Integration", description: "Incorporate testimonials, reviews, trust badges, and customer logos that build credibility and reduce objections." },
      { title: "Visual Hierarchy", description: "Guide visitor attention through strategic use of size, color, contrast, and positioning to emphasize key messages." },
    ],
    benefits: ["Higher conversion rates", "Better ROI on traffic", "Professional appearance", "Clear messaging", "Reduced bounce rates", "More leads"],
    metrics: ["20-40% conversion rates", "50% reduction in bounce rate", "2-3x ROI improvement", "30% more qualified leads"],
  },
  "ab-testing": {
    title: "A/B Testing & Optimization",
    subtitle: "Continuously improve with data-driven testing",
    description: "Systematically test page elements, layouts, and copy to identify winning variations that increase conversions and maximize return on marketing spend.",
    features: [
      { title: "Test Setup & Management", description: "Design and implement A/B tests on headlines, CTAs, images, layouts, and other elements that impact conversions." },
      { title: "Statistical Analysis", description: "Ensure tests reach statistical significance before declaring winners, avoiding false positives and bad decisions." },
      { title: "Multivariate Testing", description: "Test multiple elements simultaneously to understand interactions and find optimal combinations faster." },
      { title: "Continuous Improvement", description: "Establish testing programs that continuously refine and improve landing pages based on real user data." },
    ],
    benefits: ["Data-driven decisions", "Higher conversions", "Reduced risk", "Better ROI", "Customer insights", "Continuous improvement"],
    metrics: ["20-50% conversion improvements", "95% statistical confidence", "Weekly test iterations", "10+ tests monthly"],
  },
  "lead-forms": {
    title: "Lead Capture Form Optimization",
    subtitle: "Optimize forms to increase lead generation",
    description: "Design and optimize lead capture forms that reduce friction, build trust, and convert more visitors into qualified leads through strategic form design.",
    features: [
      { title: "Form Field Optimization", description: "Reduce fields to essentials, use smart defaults, and implement progressive profiling to minimize user effort." },
      { title: "Multi-Step Forms", description: "Break long forms into manageable steps with progress indicators that increase completion rates." },
      { title: "Inline Validation", description: "Provide real-time feedback on form inputs to catch errors early and improve user experience." },
      { title: "Privacy & Trust", description: "Add privacy statements, security badges, and clear value explanations that reduce form anxiety." },
    ],
    benefits: ["Higher completion rates", "More leads", "Better quality data", "Reduced abandonment", "Improved UX", "Increased trust"],
    metrics: ["30-50% increase in completions", "25% more qualified leads", "40% reduction in errors", "60%+ form completion rate"],
  },
  "landing-analytics": {
    title: "Landing Page Analytics & Insights",
    subtitle: "Track and analyze visitor behavior",
    description: "Implement comprehensive analytics that reveal how visitors interact with landing pages, where they drop off, and what drives conversions for informed optimization.",
    features: [
      { title: "Conversion Tracking", description: "Track form submissions, button clicks, and conversion events to measure campaign effectiveness accurately." },
      { title: "Heatmap Analysis", description: "Visualize where users click, move, and scroll to understand attention patterns and optimize layout accordingly." },
      { title: "Session Recordings", description: "Watch real user sessions to identify usability issues, confusion points, and optimization opportunities." },
      { title: "Funnel Analysis", description: "Analyze drop-off points in multi-step processes to identify and fix friction that prevents conversions." },
    ],
    benefits: ["Better insights", "Informed decisions", "Higher conversions", "Problem identification", "ROI tracking", "Continuous improvement"],
    metrics: ["100% conversion tracking", "Real user behavior data", "Clear optimization priorities", "Measurable improvements"],
  },

  // AI Chatbot Sub-Services
  "custom-chatbot": {
    title: "Custom AI Chatbot Development",
    subtitle: "Intelligent conversational AI powered by GPT and advanced ML",
    description: "Build custom AI chatbots that understand context, learn from interactions, and provide human-like conversations that engage customers and drive conversions 24/7.",
    features: [
      { title: "GPT-Powered Conversations", description: "Leverage GPT-4 and advanced language models for natural, context-aware conversations that feel genuinely helpful." },
      { title: "Custom Training & Knowledge Base", description: "Train chatbots on your specific business data, products, and FAQs for accurate, brand-aligned responses." },
      { title: "Multi-Intent Recognition", description: "Understand complex user queries with multiple intents and provide comprehensive, intelligent responses." },
      { title: "Sentiment Analysis", description: "Detect customer emotions and adjust responses accordingly, escalating to humans when needed." },
      { title: "CRM & Database Integration", description: "Connect chatbots to your CRM, database, and business systems for personalized, data-driven interactions." },
      { title: "Continuous Learning", description: "Chatbots improve over time by learning from interactions and feedback for increasingly better performance." },
    ],
    benefits: ["24/7 availability", "Instant responses", "Scalable support", "Cost reduction", "Lead generation", "Customer satisfaction"],
    metrics: ["90%+ query resolution rate", "60% reduction in support costs", "3x faster response times", "40% increase in lead capture"],
  },
  "whatsapp-automation": {
    title: "WhatsApp Business Automation",
    subtitle: "Automate customer interactions on India's #1 messaging platform",
    description: "Connect with customers where they are with AI-powered WhatsApp automation that handles inquiries, sends updates, and drives conversions through personalized messaging.",
    features: [
      { title: "WhatsApp Business API Setup", description: "Complete setup of official WhatsApp Business API with verified business profile and green checkmark." },
      { title: "Automated Customer Support", description: "Handle common queries, FAQs, and support requests automatically with intelligent AI responses." },
      { title: "Order Updates & Notifications", description: "Send automated order confirmations, shipping updates, and delivery notifications via WhatsApp." },
      { title: "Broadcast Campaigns", description: "Send targeted promotional messages and updates to segmented customer groups compliantly." },
      { title: "Interactive Product Catalogs", description: "Showcase products directly in WhatsApp with rich media, descriptions, and purchase options." },
      { title: "Payment Integration", description: "Enable customers to complete purchases directly within WhatsApp conversations." },
    ],
    benefits: ["98% open rate", "Direct customer connection", "Higher engagement", "Increased sales", "Better customer experience", "Lower support costs"],
    metrics: ["98% message open rate", "70%+ response rate", "50% faster resolution", "35% increase in sales"],
  },
  "lead-qualification-bot": {
    title: "AI Lead Qualification Bots",
    subtitle: "Automatically qualify and route leads with intelligent AI",
    description: "Deploy AI-powered bots that engage website visitors, qualify leads through conversational questions, and intelligently route hot prospects to your sales team.",
    features: [
      { title: "Conversational Lead Capture", description: "Engage visitors with natural conversation that collects lead information without boring forms." },
      { title: "Intelligent Scoring", description: "Automatically score and prioritize leads based on responses, behavior, and business criteria." },
      { title: "Dynamic Question Flow", description: "Adapt questions based on user responses for personalized, relevant lead qualification journeys." },
      { title: "CRM Auto-Sync", description: "Automatically create and update lead records in your CRM with complete conversation context." },
      { title: "Smart Routing", description: "Route qualified leads to the right sales rep based on territory, expertise, or availability." },
      { title: "Meeting Scheduling", description: "Allow qualified leads to instantly book meetings with sales reps through integrated calendar systems." },
    ],
    benefits: ["Higher lead quality", "Faster qualification", "24/7 lead capture", "Sales team efficiency", "Better conversion rates", "Complete lead intelligence"],
    metrics: ["50% more qualified leads", "70% faster qualification", "30% higher conversion", "90% lead data accuracy"],
  },
  "support-automation": {
    title: "AI Customer Support Automation",
    subtitle: "Provide instant 24/7 support that delights customers",
    description: "Automate customer support with AI that resolves common issues instantly, provides accurate answers, and seamlessly escalates complex cases to human agents.",
    features: [
      { title: "Intelligent Ticket Deflection", description: "Resolve common support queries automatically, reducing ticket volume and wait times significantly." },
      { title: "Contextual Help", description: "Provide relevant help based on user's current page, actions, and history for targeted assistance." },
      { title: "Knowledge Base Integration", description: "Connect AI to your knowledge base for accurate, up-to-date answers to customer questions." },
      { title: "Smart Escalation", description: "Automatically detect when human intervention is needed and seamlessly transfer with full context." },
      { title: "Multi-Language Support", description: "Provide support in multiple languages with AI translation for global customer service." },
      { title: "Support Analytics", description: "Track common issues, resolution rates, and customer satisfaction to continuously improve support." },
    ],
    benefits: ["24/7 availability", "Instant resolution", "Reduced costs", "Happier customers", "Agent efficiency", "Scalable support"],
    metrics: ["60-80% automation rate", "50% cost reduction", "90% customer satisfaction", "<1 min response time"],
  },
  "conversational-commerce": {
    title: "Conversational Commerce",
    subtitle: "Enable shopping through natural chat conversations",
    description: "Transform chat into a sales channel with AI that helps customers discover products, answers questions, and completes purchases through conversational interfaces.",
    features: [
      { title: "Product Recommendation Engine", description: "AI analyzes preferences and suggests personalized products through natural conversation." },
      { title: "Visual Product Browsing", description: "Show products with images, videos, and details directly within chat conversations." },
      { title: "In-Chat Checkout", description: "Enable complete purchases without leaving the conversation for frictionless transactions." },
      { title: "Order Tracking", description: "Allow customers to check order status, shipping updates, and delivery info via chat." },
      { title: "Abandoned Cart Recovery", description: "Proactively message customers who abandon carts with personalized incentives." },
      { title: "Upsell & Cross-Sell", description: "Intelligently suggest complementary products based on cart contents and conversation." },
    ],
    benefits: ["Higher conversion rates", "Increased AOV", "Better customer experience", "Reduced abandonment", "24/7 shopping", "Impulse purchases"],
    metrics: ["35% higher conversion", "25% increase in AOV", "50% cart recovery rate", "40% faster purchase journey"],
  },
  "multichannel-bots": {
    title: "Multi-Channel Bot Deployment",
    subtitle: "Deploy consistent AI experiences across all channels",
    description: "Unify customer conversations across website, WhatsApp, Facebook Messenger, Instagram, and more with omnichannel AI chatbots that provide consistent experiences.",
    features: [
      { title: "Unified Bot Management", description: "Manage all chatbots across channels from a single dashboard with consistent logic and responses." },
      { title: "Cross-Channel Conversations", description: "Continue conversations seamlessly as customers switch between website, mobile app, and messaging platforms." },
      { title: "Platform-Specific Optimization", description: "Adapt bot features and UI to each platform's unique capabilities and user expectations." },
      { title: "Centralized Analytics", description: "Track performance, conversations, and metrics across all channels in one unified view." },
      { title: "Channel Routing", description: "Intelligently route conversations to the customer's preferred or most appropriate channel." },
      { title: "Consistent Brand Voice", description: "Maintain uniform brand personality and messaging across all bot interactions." },
    ],
    benefits: ["Omnichannel presence", "Consistent experience", "Wider reach", "Better insights", "Efficient management", "Higher engagement"],
    metrics: ["5+ channels supported", "Unified conversation history", "50% management time saved", "30% higher engagement"],
  },

  // Branding Sub-Services
  "brand-strategy": {
    title: "Brand Strategy & Positioning",
    subtitle: "Define your unique place in the market",
    description: "Develop comprehensive brand strategies that define your identity, values, positioning, and messaging to differentiate from competitors and resonate with target audiences.",
    features: [
      { title: "Brand Discovery Workshop", description: "Collaborative sessions to uncover your brand's essence, values, personality, and unique differentiators." },
      { title: "Competitive Analysis", description: "Analyze competitor positioning to identify market gaps and opportunities for differentiation." },
      { title: "Target Audience Definition", description: "Create detailed customer personas and understand their needs, motivations, and decision drivers." },
      { title: "Brand Positioning Statement", description: "Craft a clear positioning statement that defines who you are, who you serve, and why you're different." },
      { title: "Brand Messaging Framework", description: "Develop key messages, value propositions, and brand story for consistent communication." },
      { title: "Brand Architecture", description: "Structure product lines, sub-brands, and offerings for clarity and strategic growth." },
    ],
    benefits: ["Clear differentiation", "Consistent messaging", "Stronger market position", "Better brand recognition", "Strategic direction", "Competitive advantage"],
    metrics: ["Complete brand framework", "Defined target personas", "Unique positioning", "Measurable differentiation"],
  },
  "logo-design": {
    title: "Logo & Visual Identity Design",
    subtitle: "Create distinctive visual assets that represent your brand",
    description: "Design memorable logos and comprehensive visual identity systems that capture your brand essence and create lasting impressions across all touchpoints.",
    features: [
      { title: "Custom Logo Design", description: "Create unique, memorable logos that visually represent your brand values and resonate with your audience." },
      { title: "Logo Variations", description: "Develop full-color, monochrome, icon-only, and responsive versions for all applications and contexts." },
      { title: "Color Palette Development", description: "Select strategic brand colors that evoke desired emotions and ensure accessibility and versatility." },
      { title: "Typography System", description: "Choose and pair fonts that reflect brand personality and ensure readability across all media." },
      { title: "Brand Patterns & Graphics", description: "Design supporting visual elements, patterns, and graphics that extend the brand identity." },
      { title: "Brand Applications", description: "Show logo and identity applied to business cards, letterheads, packaging, and digital assets." },
    ],
    benefits: ["Professional appearance", "Brand recognition", "Versatile assets", "Consistent identity", "Competitive differentiation", "Memorable impression"],
    metrics: ["Multiple logo variations", "Complete color system", "Typography hierarchy", "Ready-to-use assets"],
  },
  "brand-guidelines": {
    title: "Brand Guidelines & Standards",
    subtitle: "Document your brand for consistent application",
    description: "Create comprehensive brand guidelines that document your visual identity, voice, and standards to ensure consistent brand application across all channels and teams.",
    features: [
      { title: "Visual Identity Guidelines", description: "Document logo usage, colors, typography, imagery style, and design principles with clear rules." },
      { title: "Brand Voice & Tone", description: "Define writing style, vocabulary, personality traits, and communication guidelines for consistent messaging." },
      { title: "Application Examples", description: "Show correct brand application across print, digital, packaging, advertising, and other mediums." },
      { title: "Do's and Don'ts", description: "Provide clear examples of correct and incorrect brand usage to prevent misuse and maintain quality." },
      { title: "Asset Library", description: "Organize and provide access to all brand assets including logos, fonts, templates, and images." },
      { title: "Digital Brand Guidelines", description: "Create interactive online brand portals for easy access and updates to brand standards." },
    ],
    benefits: ["Brand consistency", "Team alignment", "Quality control", "Easier collaboration", "Professional standards", "Long-term brand value"],
    metrics: ["Complete documentation", "Easy access", "Team adoption", "Consistent application"],
  },
  "rebranding": {
    title: "Strategic Rebranding Services",
    subtitle: "Refresh and modernize your brand for growth",
    description: "Revitalize your brand identity to reflect evolution, reach new markets, or differentiate from competitors while maintaining brand equity and customer recognition.",
    features: [
      { title: "Rebrand Strategy Planning", description: "Define rebrand objectives, scope, and timeline while assessing risks and opportunities for successful transition." },
      { title: "Brand Equity Assessment", description: "Evaluate current brand strength, recognition, and emotional connections to preserve valuable equity." },
      { title: "Visual Identity Evolution", description: "Modernize logos, colors, and visual elements while maintaining recognition and brand heritage." },
      { title: "Messaging Refresh", description: "Update brand messaging, positioning, and voice to reflect current business reality and future direction." },
      { title: "Stakeholder Communication", description: "Plan and execute internal and external communication about rebrand reasons and benefits." },
      { title: "Brand Launch Campaign", description: "Create buzz and excitement with coordinated launch campaign across all channels and touchpoints." },
    ],
    benefits: ["Fresh market position", "Renewed relevance", "Competitive differentiation", "Modern appeal", "Market expansion", "Increased brand value"],
    metrics: ["Successful brand transition", "Maintained equity", "Positive reception", "Increased brand metrics"],
  },

  // Analytics Sub-Services
  "google-analytics": {
    title: "Google Analytics 4 Setup & Optimization",
    subtitle: "Implement advanced analytics for complete insights",
    description: "Set up and optimize Google Analytics 4 with custom tracking, enhanced measurement, and strategic reporting that reveals exactly how users interact with your website.",
    features: [
      { title: "GA4 Migration & Setup", description: "Migrate from Universal Analytics to GA4 with complete property setup, data streams, and configuration." },
      { title: "Custom Event Tracking", description: "Track specific user actions like button clicks, video plays, downloads, and form interactions." },
      { title: "E-Commerce Tracking", description: "Implement enhanced e-commerce tracking for complete purchase funnel visibility and revenue attribution." },
      { title: "Custom Reports & Explorations", description: "Build custom reports and explorations that answer your specific business questions and reveal opportunities." },
      { title: "Audience Segmentation", description: "Create custom audiences and segments for detailed analysis of different user groups and behaviors." },
      { title: "Cross-Domain Tracking", description: "Track user journeys across multiple domains and subdomains for complete customer path visibility." },
    ],
    benefits: ["Complete data visibility", "Informed decisions", "Better ROI", "User insights", "Performance tracking", "Predictive analytics"],
    metrics: ["100% accurate tracking", "Custom dashboards", "Real-time insights", "Historical data preservation"],
  },
  "conversion-tracking": {
    title: "Advanced Conversion Tracking",
    subtitle: "Track every action and attribute revenue accurately",
    description: "Implement comprehensive conversion tracking across all channels and touchpoints to understand what drives results and optimize marketing spend effectively.",
    features: [
      { title: "Multi-Channel Tracking", description: "Track conversions from Google Ads, Facebook, email, organic, and all marketing channels in one place." },
      { title: "Goal & Event Configuration", description: "Set up conversion goals for form submissions, purchases, signups, and other key business actions." },
      { title: "Revenue Attribution", description: "Attribute revenue to specific campaigns, channels, and touchpoints for accurate ROI measurement." },
      { title: "Offline Conversion Import", description: "Import offline conversions from CRM or POS systems to complete the attribution picture." },
      { title: "Custom Conversion Windows", description: "Define appropriate attribution windows that reflect your actual sales cycle and customer journey." },
      { title: "Conversion API Implementation", description: "Implement server-side tracking with Conversion APIs for more accurate, privacy-compliant tracking." },
    ],
    benefits: ["Accurate attribution", "Better ROI", "Optimized spending", "Complete visibility", "Data-driven decisions", "Privacy compliant"],
    metrics: ["100% conversion tracking", "Multi-touch attribution", "Accurate ROI data", "Real-time reporting"],
  },
  "custom-dashboards": {
    title: "Custom Analytics Dashboards",
    subtitle: "Visualize key metrics in real-time",
    description: "Build beautiful, real-time dashboards that consolidate data from multiple sources and present key metrics in clear, actionable visualizations for quick decision-making.",
    features: [
      { title: "Multi-Source Integration", description: "Combine data from Google Analytics, Google Ads, Facebook, CRM, and other sources in unified dashboards." },
      { title: "Real-Time Visualization", description: "Display live data with auto-refreshing visualizations for immediate awareness of performance changes." },
      { title: "Custom KPI Tracking", description: "Track your specific business KPIs with custom calculations, comparisons, and trend analysis." },
      { title: "Automated Reporting", description: "Schedule automated email reports with dashboard snapshots and insights for stakeholders." },
      { title: "Mobile Dashboards", description: "Access dashboards on mobile devices with responsive design for monitoring on the go." },
      { title: "Data Storytelling", description: "Present data in narrative format that explains performance, trends, and recommended actions." },
    ],
    benefits: ["Quick insights", "Easy monitoring", "Better decisions", "Team alignment", "Time savings", "Actionable data"],
    metrics: ["Real-time updates", "Multiple data sources", "Custom visualizations", "Stakeholder adoption"],
  },
  "marketing-attribution": {
    title: "Marketing Attribution & ROI",
    subtitle: "Understand what drives conversions and revenue",
    description: "Implement sophisticated attribution models that reveal how marketing channels work together to drive conversions, enabling smarter budget allocation and strategy optimization.",
    features: [
      { title: "Multi-Touch Attribution", description: "Implement attribution models that credit all touchpoints in the customer journey, not just last-click." },
      { title: "Data-Driven Attribution", description: "Use machine learning to assign credit based on actual impact of each channel and touchpoint." },
      { title: "Channel Performance Analysis", description: "Compare performance and ROI across all marketing channels to optimize budget allocation." },
      { title: "Customer Journey Mapping", description: "Visualize complete customer paths from awareness to conversion across all touchpoints." },
      { title: "Attribution Modeling", description: "Test different attribution models (first-touch, linear, time-decay) to find what best reflects your business." },
      { title: "ROI Forecasting", description: "Predict future ROI and outcomes based on historical attribution data and trends." },
    ],
    benefits: ["Accurate ROI", "Better budget allocation", "Channel insights", "Optimized spending", "Strategic planning", "Data-driven growth"],
    metrics: ["Complete journey visibility", "Accurate channel ROI", "Optimized attribution", "15-25% efficiency gain"],
  },

  // AI-Powered Services
  "ai-blog-generation": {
    title: "AI Blog & Content SEO",
    subtitle: "Generate SEO-optimized content at scale with AI",
    description: "Leverage advanced AI to create high-quality, SEO-optimized blogs, articles, and content that ranks on Google and engages your audience, saving time while driving organic traffic.",
    features: [
      { title: "AI-Powered Blog Writing", description: "Generate comprehensive, engaging blog posts optimized for search engines and readers using advanced AI models trained on millions of high-performing articles." },
      { title: "Keyword Clustering & Strategy", description: "Identify and cluster keywords for maximum topical authority and ranking potential using AI-powered semantic analysis and search intent matching." },
      { title: "Content Strategy Automation", description: "Automate content planning and scheduling based on data-driven insights from competitor analysis, trending topics, and audience behavior patterns." },
      { title: "Topic Research & Ideation", description: "Discover trending topics and content gaps using AI-powered research tools that analyze search trends, social signals, and competitor content." },
      { title: "Meta & Schema Optimization", description: "Automatically generate optimized meta titles, descriptions, and schema markup that improve click-through rates and search visibility." },
      { title: "Content Performance Analysis", description: "Track content performance and get AI recommendations for improvements based on engagement metrics, rankings, and conversion data." },
    ],
    benefits: ["10x faster content creation", "Consistent SEO optimization", "Scalable content production", "Data-driven topic selection", "Improved search rankings", "Lower content costs"],
    metrics: ["90% time savings on content creation", "3x increase in content output", "50% improvement in organic traffic", "40% higher engagement rates"],
    process: [
      { step: "Strategy & Setup", description: "Define content goals, audience, and keyword targets with AI assistance." },
      { step: "AI Content Generation", description: "Generate high-quality drafts using advanced AI models trained on SEO best practices." },
      { step: "Review & Enhancement", description: "Human editors refine and enhance AI-generated content for quality and brand voice." },
      { step: "Publish & Optimize", description: "Publish content and continuously optimize based on performance data." },
    ],
  },
  "ai-seo-automation": {
    title: "AI SEO Automation",
    subtitle: "Automate your SEO with intelligent AI tools",
    description: "Transform your SEO workflow with AI-powered automation that handles audits, keyword tracking, competitor analysis, and reporting, giving you more time to focus on strategy.",
    features: [
      { title: "Automated SEO Audits", description: "Run comprehensive technical and on-page SEO audits automatically with AI insights that prioritize issues by impact and provide actionable recommendations." },
      { title: "Rank Tracking Automation", description: "Monitor keyword rankings across search engines with automated reporting and alerts that notify you of significant changes in real-time." },
      { title: "Competitor Analysis AI", description: "Continuously monitor competitor strategies and get AI-powered recommendations on opportunities to outrank them with specific tactical suggestions." },
      { title: "SERP Insights & Monitoring", description: "Track SERP features and get AI insights on ranking opportunities including featured snippets, People Also Ask, and local pack positions." },
      { title: "Predictive SEO Growth", description: "Use machine learning to forecast traffic and identify high-impact opportunities based on historical data and market trends." },
      { title: "Automated Reporting", description: "Generate comprehensive SEO reports automatically with AI-driven insights, recommendations, and executive summaries delivered to stakeholders." },
    ],
    benefits: ["80% time savings on manual tasks", "Real-time SEO monitoring", "Predictive insights", "Faster issue detection", "Competitive intelligence", "Scalable SEO operations"],
    metrics: ["80% reduction in manual work", "24/7 automated monitoring", "50+ ranking factors tracked", "Real-time issue alerts"],
    process: [
      { step: "System Integration", description: "Connect your website, analytics, and tools to AI automation platform." },
      { step: "Automation Setup", description: "Configure automated audits, tracking, and reporting based on your needs." },
      { step: "AI Learning Phase", description: "AI learns your site structure, patterns, and optimization opportunities." },
      { step: "Continuous Optimization", description: "Receive automated recommendations and implement optimizations at scale." },
    ],
  },
  "voice-visual-seo": {
    title: "Voice & Visual Search SEO",
    subtitle: "Optimize for the future of search",
    description: "Stay ahead with optimization strategies for voice assistants, visual search, and emerging search technologies that are reshaping how users discover content and products.",
    features: [
      { title: "Voice Search Optimization", description: "Optimize for Alexa, Google Assistant, and Siri with conversational keywords, featured snippet targeting, and natural language content that answers questions directly." },
      { title: "Visual Search SEO", description: "Optimize images for Google Lens and Pinterest Lens with proper tagging, structured data, and high-quality visuals that drive discovery through image search." },
      { title: "Featured Snippet Optimization", description: "Target and win featured snippets with structured content formats, direct answers, and optimized markup that positions you in position zero." },
      { title: "Schema Markup Implementation", description: "Implement advanced schema markup including FAQ, How-to, Product, and Review schemas that enhance visibility in rich results and voice responses." },
      { title: "Local Voice Search", description: "Optimize for 'near me' searches and local voice queries with Google Business Profile optimization and location-specific content strategies." },
      { title: "Question-Based Content", description: "Create content that directly answers common questions in your industry, optimized for voice query patterns and conversational search intent." },
    ],
    benefits: ["Early mover advantage", "Voice search visibility", "Visual discovery traffic", "Featured snippet rankings", "Future-proof SEO", "Multi-modal presence"],
    metrics: ["50+ featured snippets earned", "3x increase in voice search traffic", "40% growth in image search referrals", "Position zero rankings"],
    process: [
      { step: "Audit & Analysis", description: "Analyze current visibility in voice and visual search opportunities." },
      { step: "Content Optimization", description: "Restructure and create content optimized for conversational and visual queries." },
      { step: "Technical Implementation", description: "Implement schema markup, image optimization, and voice search-friendly structures." },
      { step: "Monitor & Expand", description: "Track performance and expand presence across emerging search modalities." },
    ],
  },
  "growth-marketing": {
    title: "Growth Marketing",
    subtitle: "Data-driven strategies that scale your business exponentially",
    description: "Implement systematic growth strategies using experimentation, automation, and data science to identify and scale high-performing channels and tactics that drive sustainable business growth.",
    features: [
      { title: "Growth Experimentation Framework", description: "Run systematic A/B tests and experiments across all marketing channels to identify winning strategies and scale what works using data-driven methodologies." },
      { title: "Funnel Optimization", description: "Analyze and optimize every stage of your marketing and sales funnel to reduce friction, increase conversions, and maximize customer lifetime value." },
      { title: "Viral Loop Engineering", description: "Design and implement viral loops and referral mechanics that turn customers into advocates who drive organic growth at scale." },
      { title: "Product-Led Growth", description: "Leverage your product as the primary growth driver with free trials, freemium models, and in-product acquisition tactics that reduce customer acquisition costs." },
      { title: "Growth Automation & Hacking", description: "Automate growth tactics using tools, scripts, and integrations that scale efforts beyond manual capacity while maintaining quality and compliance." },
      { title: "Data Science for Growth", description: "Apply predictive analytics, cohort analysis, and statistical modeling to identify growth opportunities and forecast results with confidence." },
    ],
    benefits: ["Exponential growth potential", "Lower acquisition costs", "Systematic optimization", "Scalable strategies", "Data-driven decisions", "Compounding returns"],
    metrics: ["300%+ average growth rate", "50% reduction in CAC", "10x experiment velocity", "40% improvement in LTV/CAC ratio"],
    process: [
      { step: "Growth Audit", description: "Analyze current growth metrics, identify bottlenecks, and prioritize opportunities." },
      { step: "Hypothesis Development", description: "Develop testable hypotheses based on data analysis and growth frameworks." },
      { step: "Rapid Experimentation", description: "Run high-velocity experiments across channels to validate hypotheses and find winners." },
      { step: "Scale & Iterate", description: "Double down on winning strategies while continuously testing new growth levers." },
    ],
  },
  "ai-content": {
    title: "AI Content Generation",
    subtitle: "Create high-quality content at scale with AI",
    description: "Harness the power of advanced AI models to generate blog posts, social media content, ad copy, product descriptions, and more at unprecedented speed and quality.",
    features: [
      { title: "Multi-Format Content Creation", description: "Generate blog posts, social media captions, ad copy, email newsletters, product descriptions, and video scripts with AI assistance tailored to each format." },
      { title: "Brand Voice Training", description: "Train AI models on your brand's unique voice and style to ensure all generated content maintains consistency and authenticity across all channels." },
      { title: "SEO Content Optimization", description: "AI automatically optimizes content for target keywords, semantic relevance, and search intent while maintaining natural, engaging readability." },
      { title: "Content Ideation & Research", description: "Generate endless content ideas based on trending topics, competitor analysis, and audience interests using AI-powered research and ideation tools." },
      { title: "Multilingual Content", description: "Create and translate content in multiple languages while maintaining brand voice, cultural nuances, and SEO optimization for global reach." },
      { title: "Content Repurposing", description: "Automatically repurpose long-form content into multiple formats including social posts, infographics, videos, and snippets for maximum content leverage." },
    ],
    benefits: ["10x content production speed", "Consistent brand voice", "SEO optimization built-in", "Multilingual capability", "Reduced content costs", "Infinite scalability"],
    metrics: ["90% faster content creation", "10x content output increase", "70% cost reduction", "Consistent quality at scale"],
    process: [
      { step: "Brand Voice Setup", description: "Train AI on your brand voice, tone, and style guidelines." },
      { step: "Content Brief Input", description: "Provide topic, keywords, and requirements for each piece of content." },
      { step: "AI Generation", description: "AI generates high-quality draft content optimized for your needs." },
      { step: "Review & Publish", description: "Review, refine, and publish content with human oversight for quality assurance." },
    ],
  },
  "ai-design": {
    title: "AI Design Studio",
    subtitle: "Create stunning visuals with AI-powered design tools",
    description: "Transform your visual content creation with AI tools that generate images, edit photos, design graphics, and create brand assets in minutes instead of hours.",
    features: [
      { title: "AI Image Generation", description: "Create custom images, illustrations, and graphics from text descriptions using state-of-the-art AI models like DALL-E, Midjourney, and Stable Diffusion." },
      { title: "Automated Design Templates", description: "Generate on-brand social media graphics, ads, presentations, and marketing materials automatically using AI-powered design tools and templates." },
      { title: "Photo Enhancement & Editing", description: "Enhance photos with AI-powered editing including background removal, upscaling, color correction, and artistic effects for professional results." },
      { title: "Logo & Brand Assets", description: "Create logo variations, brand assets, and visual identity elements using AI design tools guided by your brand guidelines and preferences." },
      { title: "Video Editing Automation", description: "Automate video editing with AI that handles cuts, transitions, captions, and effects to produce professional videos in fraction of the time." },
      { title: "Design Variation Testing", description: "Generate multiple design variations automatically for A/B testing and optimization to identify highest-performing creative assets." },
    ],
    benefits: ["100x faster design creation", "No design skills required", "Unlimited variations", "Professional quality", "Brand consistency", "Massive cost savings"],
    metrics: ["95% faster design process", "Unlimited design iterations", "80% cost reduction", "Professional quality output"],
    process: [
      { step: "Brand Guidelines Setup", description: "Input your brand colors, fonts, and style preferences into AI tools." },
      { step: "Design Brief Input", description: "Describe what you need and provide any reference materials or requirements." },
      { step: "AI Generation", description: "AI generates multiple design options based on your brief and brand guidelines." },
      { step: "Select & Refine", description: "Choose your favorite designs and make refinements with AI assistance." },
    ],
  },
  "ai-automation": {
    title: "AI Automation & Workflows",
    subtitle: "Automate business processes with intelligent AI",
    description: "Transform your operations with AI-powered automation that handles repetitive tasks, makes intelligent decisions, and scales your business without adding headcount.",
    features: [
      { title: "Workflow Automation", description: "Automate complex business workflows including data entry, document processing, email responses, and task management using AI-powered tools." },
      { title: "Customer Service Automation", description: "Deploy AI chatbots and virtual assistants that handle customer inquiries, support tickets, and common requests 24/7 with human-like understanding." },
      { title: "Data Processing & Analysis", description: "Automate data collection, cleaning, analysis, and reporting with AI that extracts insights and identifies patterns faster than humans." },
      { title: "Email & Communication Automation", description: "Automate email responses, follow-ups, and communication workflows with AI that understands context and generates personalized messages." },
      { title: "Lead Qualification & Routing", description: "Automatically qualify leads, score prospects, and route them to appropriate team members using AI analysis of behavior and engagement." },
      { title: "Document Generation", description: "Automatically generate contracts, proposals, reports, and other documents using AI templates that pull data from multiple sources." },
    ],
    benefits: ["80% reduction in manual work", "24/7 automated operations", "Error-free processing", "Instant scalability", "Massive time savings", "Consistent quality"],
    metrics: ["80% time savings on routine tasks", "24/7 operation capability", "99% accuracy rate", "10x processing speed"],
    process: [
      { step: "Process Mapping", description: "Identify and map current manual processes that can be automated." },
      { step: "Automation Design", description: "Design AI-powered workflows and automation logic for each process." },
      { step: "Implementation & Training", description: "Implement automation and train AI models on your specific use cases." },
      { step: "Monitor & Optimize", description: "Monitor performance and continuously optimize automation for better results." },
    ],
  },

  // AI Blog & Content SEO Sub-Services
  "ai-blog-writing": {
    title: "AI-Powered Blog Writing",
    subtitle: "Generate SEO-optimized blog posts at scale",
    description: "Create comprehensive, engaging blog posts that rank on Google and resonate with your audience using advanced AI trained on millions of high-performing articles.",
    features: [
      { title: "Long-Form Content Generation", description: "Generate in-depth blog posts (2000+ words) with proper structure, headings, and comprehensive coverage of topics." },
      { title: "SEO Optimization Built-In", description: "Automatically optimize for target keywords, semantic relevance, and search intent while maintaining natural readability." },
      { title: "Tone & Voice Customization", description: "Train AI on your brand voice to ensure all generated content matches your unique style and personality." },
      { title: "Fact-Checking & Research", description: "AI cross-references information and includes relevant statistics, studies, and expert quotes for credibility." },
      { title: "Internal Linking Suggestions", description: "Automatically identify opportunities for internal linking to boost SEO and guide reader navigation." },
      { title: "Content Briefs to Published Posts", description: "Transform simple content briefs into complete, publish-ready articles in minutes." },
    ],
    benefits: ["90% faster content creation", "Consistent SEO optimization", "Scalable to any volume", "Lower cost per article", "Always on-brand", "Research included"],
    metrics: ["15-20 blog posts per day capacity", "Average 2500 words per post", "90%+ SEO score", "70% cost reduction"],
  },
  "keyword-clustering": {
    title: "Keyword Clustering & Strategy",
    subtitle: "Build topical authority with smart keyword clustering",
    description: "Group related keywords into content clusters that help you dominate search rankings by building topical authority and capturing all related search traffic.",
    features: [
      { title: "Semantic Keyword Grouping", description: "Use AI to identify and group keywords by semantic meaning and search intent for comprehensive topic coverage." },
      { title: "Content Cluster Planning", description: "Create pillar pages and supporting content strategies based on keyword clusters for maximum SEO impact." },
      { title: "Search Intent Analysis", description: "Classify keywords by search intent (informational, commercial, transactional) to create content that matches user needs." },
      { title: "Keyword Difficulty Scoring", description: "Assess ranking difficulty and prioritize keywords based on your domain authority and competitive landscape." },
      { title: "Gap Analysis", description: "Identify content gaps where competitors rank but you don't, and prioritize high-opportunity keywords." },
      { title: "Topic Authority Tracking", description: "Monitor your topical authority scores and track improvements as you build content clusters." },
    ],
    benefits: ["Higher rankings per article", "Build topical authority", "Capture more search traffic", "Strategic content planning", "Competitive advantages", "Better ROI per article"],
    metrics: ["3-5x more keywords ranked per article", "40% increase in topical authority", "2x higher organic traffic", "50% more efficient content strategy"],
  },
  "content-automation": {
    title: "Content Strategy Automation",
    subtitle: "Automate content planning and scheduling with AI",
    description: "Let AI handle content planning, topic selection, and scheduling based on data-driven insights from competitor analysis, trending topics, and audience behavior.",
    features: [
      { title: "Automated Content Calendar", description: "AI generates complete monthly content calendars based on keyword opportunities, trends, and business goals." },
      { title: "Trending Topic Discovery", description: "Automatically identify trending topics and content opportunities in your industry before competitors." },
      { title: "Competitor Content Monitoring", description: "Track competitor content strategies and get automated recommendations to outrank them." },
      { title: "Performance-Based Optimization", description: "AI analyzes what content performs best and automatically adjusts future content strategy accordingly." },
      { title: "Content Gap Identification", description: "Automatically identify content gaps in your strategy and prioritize creation of missing pieces." },
      { title: "Seasonal Content Planning", description: "AI plans seasonal and timely content in advance based on search trends and historical data." },
    ],
    benefits: ["Always know what to write", "Stay ahead of trends", "Automated scheduling", "Data-driven decisions", "Competitive intelligence", "Consistent publishing"],
    metrics: ["100% automated content calendar", "2-3 months planned ahead", "50% better topic selection", "30% higher engagement"],
  },
  "topic-research": {
    title: "Topic Research & Ideation",
    subtitle: "Discover winning content topics with AI research",
    description: "Use AI-powered research tools to discover trending topics, content gaps, and opportunities that your audience is searching for but competitors haven't covered well.",
    features: [
      { title: "AI Research Assistant", description: "AI scans millions of sources to find trending topics, emerging questions, and content opportunities in your niche." },
      { title: "Question Mining", description: "Extract thousands of real questions people ask in forums, Reddit, Quora, and Google related to your industry." },
      { title: "Content Gap Analysis", description: "Identify topics where search demand exists but quality content is lacking for easy ranking opportunities." },
      { title: "Trend Prediction", description: "Use AI to predict upcoming trends before they peak, giving you first-mover advantage in content creation." },
      { title: "Competitor Topic Analysis", description: "Analyze what topics drive traffic to competitors and find similar opportunities for your content." },
      { title: "Audience Interest Mapping", description: "Map audience interests and create topic clusters that resonate with different segments of your audience." },
    ],
    benefits: ["Never run out of ideas", "First-mover advantage", "Data-backed topics", "High-traffic potential", "Easy rankings", "Audience alignment"],
    metrics: ["500+ topic ideas per month", "70% topics rank within 90 days", "3x higher search demand topics", "50% better click-through rates"],
  },
  "meta-optimization": {
    title: "Meta & Schema Optimization",
    subtitle: "Perfect your meta tags and schema markup with AI",
    description: "Automatically generate optimized meta titles, descriptions, and schema markup that improve click-through rates from search results and enhance search visibility.",
    features: [
      { title: "Auto-Generated Meta Titles", description: "AI creates compelling meta titles that include target keywords and stay within character limits for perfect display." },
      { title: "Click-Worthy Meta Descriptions", description: "Generate meta descriptions that increase CTR with compelling copy, keywords, and clear value propositions." },
      { title: "Schema Markup Automation", description: "Automatically implement appropriate schema types (Article, FAQ, How-to, Review) for rich search results." },
      { title: "Open Graph Optimization", description: "Generate optimized Open Graph tags for better appearance when shared on social media platforms." },
      { title: "CTR Prediction & Testing", description: "AI predicts which meta tags will get higher CTR and automatically tests variations for optimization." },
      { title: "Bulk Meta Tag Generation", description: "Generate optimized meta tags for hundreds of pages at once while maintaining uniqueness and relevance." },
    ],
    benefits: ["Higher click-through rates", "Rich search results", "Better social sharing", "Time savings", "Consistent optimization", "A/B testing built-in"],
    metrics: ["20-30% higher CTR", "Rich results for 80% of pages", "100% schema coverage", "50% faster implementation"],
  },
  "content-analysis": {
    title: "Content Performance Analysis",
    subtitle: "AI-powered insights to improve content performance",
    description: "Track how your content performs and get AI-driven recommendations for improvements based on engagement metrics, rankings, and conversion data.",
    features: [
      { title: "Performance Tracking Dashboard", description: "Monitor all content metrics including rankings, traffic, engagement, and conversions in one AI-powered dashboard." },
      { title: "Content Decay Detection", description: "AI identifies content that's declining in rankings or traffic and recommends updates to recover performance." },
      { title: "Improvement Recommendations", description: "Get specific, actionable recommendations to improve underperforming content based on top-ranking competitors." },
      { title: "Content ROI Analysis", description: "Calculate true ROI of each piece of content based on traffic value, conversions, and production costs." },
      { title: "A/B Testing Automation", description: "Automatically test different versions of content elements to identify what drives better performance." },
      { title: "Predictive Analytics", description: "AI predicts which content will perform well and forecasts traffic potential before publication." },
    ],
    benefits: ["Data-driven optimization", "Recover declining content", "Maximize content ROI", "Predictive insights", "Continuous improvement", "Performance visibility"],
    metrics: ["30% average traffic increase after optimization", "80% accuracy in performance prediction", "50% faster optimization process", "2x content ROI"],
  },

  // AI SEO Automation Sub-Services  
  "automated-audits": {
    title: "Automated SEO Audits",
    subtitle: "Comprehensive SEO audits on autopilot",
    description: "Run detailed technical and on-page SEO audits automatically with AI that prioritizes issues by impact and provides step-by-step recommendations for fixes.",
    features: [
      { title: "Technical SEO Analysis", description: "Automated crawling and analysis of site structure, speed, mobile-friendliness, and technical SEO factors." },
      { title: "On-Page SEO Evaluation", description: "Comprehensive analysis of title tags, meta descriptions, headings, content quality, and keyword optimization." },
      { title: "Priority Scoring", description: "AI prioritizes issues based on potential traffic impact, ranking opportunity, and implementation difficulty." },
      { title: "Automated Scheduling", description: "Schedule recurring audits (weekly, monthly) and get automatic reports on changes and new issues." },
      { title: "Competitive Benchmarking", description: "Compare your SEO health against competitors and industry standards with AI-powered competitive analysis." },
      { title: "Fix Tracking & Validation", description: "Track issue resolution and automatically validate fixes to ensure problems are properly addressed." },
    ],
    benefits: ["Continuous monitoring", "Never miss issues", "Priority-based fixing", "Time savings", "Competitive insights", "Automatic validation"],
    metrics: ["Weekly automated audits", "200+ SEO factors checked", "90% issue detection accuracy", "80% time savings"],
  },
  "rank-tracking": {
    title: "Rank Tracking Automation",
    subtitle: "Monitor rankings automatically across all search engines",
    description: "Track keyword rankings across Google, Bing, and local search automatically with real-time alerts for ranking changes and comprehensive reporting.",
    features: [
      { title: "Unlimited Keyword Tracking", description: "Track unlimited keywords across multiple search engines, locations, and devices without manual checking." },
      { title: "Real-Time Alerts", description: "Get instant notifications when rankings change significantly, new competitors appear, or ranking opportunities emerge." },
      { title: "SERP Feature Tracking", description: "Monitor your presence in featured snippets, local pack, People Also Ask, and other SERP features automatically." },
      { title: "Competitor Ranking Monitoring", description: "Track competitor rankings for all target keywords and get alerted when they make gains or losses." },
      { title: "Local Ranking Tracking", description: "Monitor local search rankings across multiple locations for location-based SEO strategies." },
      { title: "Historical Data & Trends", description: "Access historical ranking data and AI-identified trends to understand long-term performance patterns." },
    ],
    benefits: ["Real-time insights", "Competitive intelligence", "Automated reporting", "SERP feature visibility", "Local SEO tracking", "Historical analysis"],
    metrics: ["Daily ranking updates", "100+ locations tracked", "Real-time alerts", "12+ months historical data"],
  },
  "competitor-ai": {
    title: "Competitor Analysis AI",
    subtitle: "Automated competitive intelligence for SEO",
    description: "Continuously monitor competitor SEO strategies and get AI-powered recommendations on opportunities to outrank them with specific tactical suggestions.",
    features: [
      { title: "Automated Competitor Discovery", description: "AI identifies your real SEO competitors based on keyword overlap and ranking competition, not just business competitors." },
      { title: "Keyword Gap Analysis", description: "Discover keywords competitors rank for that you don't, with traffic estimates and difficulty scores for prioritization." },
      { title: "Content Gap Identification", description: "Identify topics and content types that work for competitors and get recommendations for your content strategy." },
      { title: "Backlink Opportunity Finder", description: "Discover where competitors get backlinks and get AI recommendations on replicating their link-building strategies." },
      { title: "Strategy Change Detection", description: "Get alerted when competitors make significant changes to their SEO strategy, content, or website structure." },
      { title: "Competitive Benchmarking", description: "Compare your SEO metrics against competitors with AI-powered insights on where you're winning or losing." },
    ],
    benefits: ["Competitive advantages", "Opportunity discovery", "Strategy insights", "Automated monitoring", "Actionable recommendations", "Stay ahead"],
    metrics: ["10+ competitors monitored", "500+ opportunities identified monthly", "Real-time strategy alerts", "90% opportunity accuracy"],
  },
  "serp-insights": {
    title: "SERP Insights & Monitoring",
    subtitle: "Track SERP features and ranking opportunities",
    description: "Monitor search engine results pages for your target keywords and get AI insights on ranking opportunities including featured snippets, People Also Ask, and other SERP features.",
    features: [
      { title: "SERP Feature Tracking", description: "Monitor all SERP features including featured snippets, local pack, knowledge panels, People Also Ask, and video results." },
      { title: "Featured Snippet Opportunities", description: "AI identifies questions and queries where you can win featured snippets with specific content recommendations." },
      { title: "SERP Volatility Monitoring", description: "Track SERP changes and algorithm updates that affect your rankings with AI analysis of impact and recovery strategies." },
      { title: "Zero-Click Search Analysis", description: "Analyze zero-click searches and optimize for visibility even when users don't click through to websites." },
      { title: "Intent Shift Detection", description: "AI detects when search intent changes for keywords and recommends content adjustments to maintain rankings." },
      { title: "Visual Search Monitoring", description: "Track your presence in image search, video results, and other visual SERP elements." },
    ],
    benefits: ["SERP feature wins", "Zero-click visibility", "Algorithm update insights", "Intent alignment", "Opportunity alerts", "Visual search presence"],
    metrics: ["50+ SERP features tracked", "30+ snippet opportunities identified monthly", "Real-time volatility alerts", "90% intent accuracy"],
  },
  "predictive-seo": {
    title: "Predictive SEO Growth",
    subtitle: "Forecast traffic and identify opportunities with AI",
    description: "Use machine learning to forecast organic traffic growth, predict ranking timelines, and identify high-impact opportunities before competitors.",
    features: [
      { title: "Traffic Forecasting", description: "Predict future organic traffic based on current trends, seasonality, and planned SEO initiatives with ML models." },
      { title: "Ranking Timeline Predictions", description: "AI estimates how long it will take to rank for target keywords based on domain authority and competitive analysis." },
      { title: "Opportunity Prioritization", description: "Machine learning identifies and prioritizes SEO opportunities by potential traffic impact and implementation effort." },
      { title: "ROI Predictions", description: "Forecast ROI of SEO initiatives before implementation to make data-driven investment decisions." },
      { title: "Trend Prediction", description: "AI predicts search trend changes and emerging topics before they peak for first-mover advantage." },
      { title: "Algorithm Update Impact", description: "Predict how algorithm updates might affect your rankings and get proactive recommendations." },
    ],
    benefits: ["Data-driven planning", "ROI forecasting", "Risk reduction", "Trend advantages", "Strategic prioritization", "Resource optimization"],
    metrics: ["90% forecast accuracy", "6-12 month predictions", "50+ opportunities ranked by impact", "30% better resource allocation"],
  },
  "automated-reporting": {
    title: "Automated SEO Reporting",
    subtitle: "AI-generated reports with insights and recommendations",
    description: "Generate comprehensive SEO reports automatically with AI-driven insights, executive summaries, and specific recommendations delivered to stakeholders on schedule.",
    features: [
      { title: "Automated Report Generation", description: "Generate detailed SEO reports automatically on any schedule (daily, weekly, monthly) without manual work." },
      { title: "AI-Written Insights", description: "AI analyzes data and writes executive summaries explaining what happened, why, and what to do next." },
      { title: "Custom Report Templates", description: "Create custom report templates for different stakeholders (executives, marketing team, clients) with relevant metrics." },
      { title: "Performance Narratives", description: "AI converts data into clear narratives that explain SEO performance in plain language for non-technical stakeholders." },
      { title: "Recommendation Engine", description: "Every report includes AI-generated specific, actionable recommendations prioritized by potential impact." },
      { title: "Multi-Channel Delivery", description: "Automatically deliver reports via email, Slack, dashboards, or PDF with customizable formatting and branding." },
    ],
    benefits: ["Zero manual reporting", "AI-written insights", "Stakeholder-ready", "Consistent schedule", "Actionable recommendations", "Custom branding"],
    metrics: ["100% automated reporting", "Weekly/monthly delivery", "Executive summaries included", "80% time savings"],
  },

  // Voice & Visual Search SEO Sub-Services
  "voice-search": {
    title: "Voice Search Optimization",
    subtitle: "Optimize for voice assistants and conversational search",
    description: "Capture voice search traffic from Alexa, Google Assistant, and Siri with content optimized for natural language queries and featured snippet targeting.",
    features: [
      { title: "Conversational Keyword Research", description: "Identify long-tail conversational keywords and question-based queries people use in voice search." },
      { title: "Featured Snippet Targeting", description: "Optimize content to win featured snippets (position zero) which voice assistants read as answers." },
      { title: "FAQ Schema Implementation", description: "Implement FAQ schema markup that helps voice assistants find and deliver your answers." },
      { title: "Natural Language Content", description: "Create content that answers questions in natural, conversational language that matches voice query patterns." },
      { title: "Local Voice Search", description: "Optimize for 'near me' queries and local voice searches with location-based content and schema." },
      { title: "Voice Search Analytics", description: "Track voice search queries and optimize based on actual voice search behavior and patterns." },
    ],
    benefits: ["Early voice search presence", "Featured snippet wins", "Local voice traffic", "Future-proof SEO", "Natural language content", "Assistant visibility"],
    metrics: ["50+ featured snippets captured", "40% increase in long-tail traffic", "Voice search traffic tracked", "3x question-based rankings"],
  },
  "image-seo": {
    title: "Image SEO & Visual Search",
    subtitle: "Optimize images for Google Image Search and visual discovery",
    description: "Drive traffic from image search and visual discovery platforms like Google Lens with properly optimized images, structured data, and technical optimization.",
    features: [
      { title: "Image Optimization", description: "Compress and optimize images for fast loading while maintaining quality, with proper file naming and formats." },
      { title: "Alt Text & Captions", description: "Generate descriptive, keyword-rich alt text and captions that improve accessibility and image search rankings." },
      { title: "Image Schema Markup", description: "Implement ImageObject schema with proper metadata to enhance visibility in image search results." },
      { title: "Visual Search Optimization", description: "Optimize product images for Google Lens and Pinterest Lens visual search with proper tagging and structure." },
      { title: "Image Sitemap Creation", description: "Generate and maintain image sitemaps to ensure search engines discover and index all your images." },
      { title: "Reverse Image Monitoring", description: "Monitor where your images appear online and identify unauthorized usage or backlink opportunities." },
    ],
    benefits: ["Image search traffic", "Visual discovery", "Faster page loads", "Better accessibility", "Product discovery", "Brand protection"],
    metrics: ["40% faster image loading", "3x increase in image search traffic", "Full image indexing", "Visual search ready"],
  },
  "ai-snippets": {
    title: "AI Answer Engine Optimization",
    subtitle: "Appear in AI-generated answers and summaries",
    description: "Optimize content to appear in AI-generated answers from ChatGPT, Bard, Perplexity, and other AI search engines that are changing how users discover content.",
    features: [
      { title: "AI-Ready Content Structure", description: "Structure content in formats that AI systems can easily parse, understand, and cite in generated answers." },
      { title: "Citation Optimization", description: "Make your content citation-worthy with authoritative facts, statistics, and clear expert positioning." },
      { title: "Entity SEO", description: "Optimize for entity recognition so AI systems understand and reference your brand, products, and expertise accurately." },
      { title: "Snippet-Style Answers", description: "Create direct, concise answers to common questions that AI systems prefer to cite in their responses." },
      { title: "Authority Building", description: "Build topical authority and expertise signals that AI systems use to determine credible sources." },
      { title: "AI Mention Tracking", description: "Monitor when AI systems cite or mention your brand and content in generated responses." },
    ],
    benefits: ["AI citation visibility", "Future-proof SEO", "Authority establishment", "New traffic sources", "Competitive advantage", "Emerging channel"],
    metrics: ["Citations in AI responses", "Entity recognition achieved", "Topical authority built", "New referral traffic"],
  },
  "multilingual-seo": {
    title: "Multilingual SEO Strategy",
    subtitle: "Expand globally with multilingual search optimization",
    description: "Reach international audiences with comprehensive multilingual SEO including hreflang implementation, localized content, and region-specific optimization.",
    features: [
      { title: "Hreflang Implementation", description: "Properly implement hreflang tags to tell search engines which language and regional versions to show users." },
      { title: "Localized Keyword Research", description: "Research keywords in each target language and region, accounting for cultural differences and local search behavior." },
      { title: "Content Localization", description: "Translate and culturally adapt content beyond word-for-word translation for true regional relevance." },
      { title: "International Technical SEO", description: "Configure proper URL structures, CDN, and hosting for optimal international search performance." },
      { title: "Regional Search Engines", description: "Optimize for regional search engines like Baidu, Yandex, Naver beyond just Google." },
      { title: "Cultural Adaptation", description: "Adapt design, imagery, and messaging to match cultural preferences and local user expectations." },
    ],
    benefits: ["Global reach", "International traffic", "Cultural relevance", "Regional rankings", "Market expansion", "Competitive advantage"],
    metrics: ["Multiple language versions", "Regional search visibility", "International traffic growth", "Proper technical setup"],
  },
  "mobile-indexing": {
    title: "Mobile-First Indexing Optimization",
    subtitle: "Perfect mobile performance for Google's mobile-first world",
    description: "Ensure flawless mobile performance and user experience for Google's mobile-first indexing with speed optimization, responsive design, and mobile UX best practices.",
    features: [
      { title: "Mobile Speed Optimization", description: "Optimize page speed specifically for mobile devices with compression, lazy loading, and code optimization." },
      { title: "Responsive Design Audit", description: "Audit and fix responsive design issues to ensure perfect display and functionality across all mobile devices." },
      { title: "Mobile Usability Testing", description: "Test and optimize mobile usability including touch targets, font sizes, and mobile-specific navigation." },
      { title: "Core Web Vitals", description: "Optimize Core Web Vitals (LCP, FID, CLS) specifically for mobile devices to meet Google's standards." },
      { title: "Mobile Content Parity", description: "Ensure mobile versions have full content parity with desktop to avoid mobile indexing penalties." },
      { title: "Mobile Conversion Optimization", description: "Optimize mobile user journeys and conversion paths for maximum mobile conversion rates." },
    ],
    benefits: ["Better mobile rankings", "Faster mobile speed", "Higher mobile conversions", "Improved user experience", "Core Web Vitals compliance", "Future-proof"],
    metrics: ["Sub-3 second mobile load", "90+ mobile PageSpeed score", "Core Web Vitals passed", "Mobile conversion increase"],
  },
  "schema-markup": {
    title: "Advanced Schema Markup",
    subtitle: "Rich results and enhanced search visibility",
    description: "Implement comprehensive schema markup including FAQ, How-to, Product, Review, and more to enhance search visibility with rich results and knowledge panels.",
    features: [
      { title: "Schema Type Selection", description: "Identify and implement appropriate schema types (Article, Product, Local Business, etc.) for all content." },
      { title: "Rich Results Optimization", description: "Optimize schema to maximize appearance in rich results including review stars, recipes, events, and FAQs." },
      { title: "Knowledge Graph Optimization", description: "Structure data to increase chances of appearing in Google's Knowledge Graph and knowledge panels." },
      { title: "Schema Testing & Validation", description: "Test and validate all schema markup to ensure proper implementation and eligibility for rich results." },
      { title: "Dynamic Schema Generation", description: "Automatically generate and update schema markup as content changes for accuracy and consistency." },
      { title: "Breadcrumb & Navigation Schema", description: "Implement breadcrumb and sitelinks search box schema for enhanced navigation in search results." },
    ],
    benefits: ["Rich search results", "Higher CTR", "Knowledge panel eligibility", "Enhanced visibility", "Competitive advantage", "Better indexing"],
    metrics: ["Multiple schema types implemented", "Rich results achieved", "Schema validation passed", "20-30% CTR increase"],
  },

  // Growth Marketing Sub-Services
  "user-acquisition": {
    title: "User Acquisition Strategy",
    subtitle: "Scalable strategies to acquire high-value users",
    description: "Identify and optimize the most effective channels for acquiring users who convert and retain, with data-driven strategies that scale cost-effectively.",
    features: [
      { title: "Channel Testing Framework", description: "Systematically test acquisition channels to identify which drive the highest quality users at lowest cost." },
      { title: "Paid Acquisition Optimization", description: "Optimize paid channels (Google, Facebook, TikTok) for maximum user acquisition efficiency and ROI." },
      { title: "Organic Growth Tactics", description: "Build sustainable organic acquisition through SEO, content marketing, and community building strategies." },
      { title: "Referral Program Design", description: "Design and optimize referral programs that turn existing users into acquisition channels." },
      { title: "Partnership Development", description: "Identify and develop strategic partnerships that provide cost-effective user acquisition at scale." },
      { title: "Attribution Modeling", description: "Implement multi-touch attribution to understand which channels truly drive user acquisition and value." },
    ],
    benefits: ["Lower acquisition costs", "Scalable channels", "Higher quality users", "Diversified sources", "Data-driven optimization", "Sustainable growth"],
    metrics: ["50% reduction in CAC", "Multiple proven channels", "Attribution accuracy", "Scalable acquisition"],
  },
  "retention-strategy": {
    title: "Retention & Engagement Strategy",
    subtitle: "Keep users engaged and increase lifetime value",
    description: "Build comprehensive retention strategies that keep users engaged, reduce churn, and maximize customer lifetime value through behavioral triggers and personalization.",
    features: [
      { title: "Cohort Analysis", description: "Analyze user cohorts to identify retention patterns and at-risk segments for targeted intervention." },
      { title: "Behavioral Triggers", description: "Implement automated triggers based on user behavior to re-engage at-risk users before they churn." },
      { title: "Personalization Engine", description: "Create personalized experiences based on user behavior, preferences, and lifecycle stage." },
      { title: "Onboarding Optimization", description: "Optimize user onboarding to drive early engagement and activation, the key to long-term retention." },
      { title: "Feature Adoption", description: "Drive adoption of key features that correlate with retention through in-app messaging and education." },
      { title: "Win-Back Campaigns", description: "Re-engage churned users with targeted campaigns based on churn reason and historical behavior." },
    ],
    benefits: ["Higher retention rates", "Increased LTV", "Lower churn", "Better engagement", "Predictive insights", "Automated re-engagement"],
    metrics: ["30-50% retention improvement", "25% increase in LTV", "Churn reduction", "Higher engagement"],
  },
  "viral-growth": {
    title: "Viral Growth Mechanics",
    subtitle: "Engineer viral loops and exponential user growth",
    description: "Design and implement viral loops, referral programs, and growth mechanics that turn users into advocates who drive organic, exponential user growth.",
    features: [
      { title: "Viral Loop Design", description: "Engineer product features and user flows that naturally encourage sharing and inviting others." },
      { title: "Referral Program Optimization", description: "Design incentive structures that maximize referrals while maintaining profitability and user quality." },
      { title: "Social Sharing Optimization", description: "Optimize content and features for social sharing with compelling previews and share incentives." },
      { title: "Network Effects", description: "Build features that become more valuable as more users join, creating natural viral growth." },
      { title: "Gamification Mechanics", description: "Implement gamification elements that reward and encourage user advocacy and content creation." },
      { title: "Viral Coefficient Tracking", description: "Measure and optimize viral coefficient to achieve and maintain viral growth (K-factor > 1)." },
    ],
    benefits: ["Exponential growth", "Lower acquisition costs", "User-driven growth", "Network effects", "Organic advocacy", "Compounding returns"],
    metrics: ["Viral coefficient (K-factor)", "Referral conversion rates", "Share rates", "Viral loop completion"],
  },
  "funnel-optimization": {
    title: "Conversion Funnel Optimization",
    subtitle: "Maximize conversions at every funnel stage",
    description: "Analyze and optimize every step of your marketing and sales funnel to reduce friction, increase conversions, and maximize revenue from existing traffic.",
    features: [
      { title: "Funnel Analysis", description: "Map complete user funnels and identify drop-off points, bottlenecks, and optimization opportunities." },
      { title: "A/B Testing Program", description: "Run systematic A/B tests on funnel elements to identify winning variations that increase conversions." },
      { title: "Friction Point Identification", description: "Identify and eliminate friction points that cause users to abandon the funnel before converting." },
      { title: "Multi-Step Form Optimization", description: "Optimize multi-step forms and checkouts to maximize completion rates and reduce abandonment." },
      { title: "Personalized Funnels", description: "Create personalized funnel experiences based on traffic source, user behavior, and demographic data." },
      { title: "Recovery Campaigns", description: "Implement automated email and retargeting campaigns to recover users who abandon the funnel." },
    ],
    benefits: ["Higher conversion rates", "More revenue per visitor", "Lower acquisition needs", "Better user experience", "Data-driven optimization", "Continuous improvement"],
    metrics: ["30-50% conversion rate improvement", "Form completion increase", "Reduced drop-off", "Higher AOV"],
  },
  "ab-testing-growth": {
    title: "A/B Testing & Experimentation",
    subtitle: "Rapid experimentation for validated growth",
    description: "Build a culture of experimentation with systematic A/B testing that validates hypotheses, eliminates guesswork, and identifies winning tactics to scale.",
    features: [
      { title: "Experimentation Framework", description: "Establish systematic framework for hypothesis generation, test design, and result validation." },
      { title: "Statistical Significance", description: "Ensure tests reach statistical significance before declaring winners to avoid false positives." },
      { title: "Multivariate Testing", description: "Test multiple variables simultaneously to identify interaction effects and optimal combinations." },
      { title: "Rapid Test Velocity", description: "Run multiple experiments in parallel to increase learning velocity and find winners faster." },
      { title: "Testing Prioritization", description: "Prioritize tests by potential impact, implementation effort, and validation priority using ICE scoring." },
      { title: "Knowledge Repository", description: "Document all tests and learnings in a searchable repository to inform future experiments." },
    ],
    benefits: ["Data-driven decisions", "Faster learning", "Eliminated guesswork", "Risk reduction", "Compounding improvements", "Test culture"],
    metrics: ["Test velocity", "Win rate", "Lift per winning test", "Statistical rigor"],
  },
  "organic-growth": {
    title: "Organic Growth Tactics",
    subtitle: "Sustainable growth through organic channels",
    description: "Build long-term organic growth engines through content marketing, SEO, community building, and partnerships that provide sustainable, cost-effective user acquisition.",
    features: [
      { title: "Content Marketing Strategy", description: "Create comprehensive content strategies that drive organic traffic, establish authority, and generate leads." },
      { title: "SEO Foundation", description: "Build strong SEO foundations with technical optimization, keyword strategy, and link building for organic visibility." },
      { title: "Community Building", description: "Develop engaged communities around your brand that drive organic awareness, advocacy, and growth." },
      { title: "Strategic Partnerships", description: "Identify and develop partnerships that provide mutual value and organic growth opportunities." },
      { title: "User-Generated Content", description: "Encourage and leverage user-generated content to build social proof and organic reach." },
      { title: "Thought Leadership", description: "Establish brand leaders as industry experts through speaking, writing, and media appearances." },
    ],
    benefits: ["Sustainable growth", "Lower CAC over time", "Compounding returns", "Brand authority", "Competitive moats", "Scalable channels"],
    metrics: ["Organic traffic growth", "Community size", "Content performance", "Partnership results"],
  },

  // AI Content Generation Sub-Services
  "product-descriptions": {
    title: "AI Product Description Writing",
    subtitle: "Convert browsers into buyers with compelling product copy",
    description: "Generate persuasive, SEO-optimized product descriptions at scale that highlight benefits, overcome objections, and drive purchase decisions.",
    features: [
      { title: "Benefit-Focused Copy", description: "AI emphasizes benefits over features, showing customers how products solve their problems and improve their lives." },
      { title: "SEO Optimization Built-In", description: "Automatically include relevant keywords, semantic terms, and search-friendly language for product page rankings." },
      { title: "Tone Customization", description: "Match your brand voice whether technical, casual, luxury, or playful with consistent tone across all descriptions." },
      { title: "Bulk Generation", description: "Generate descriptions for hundreds or thousands of products simultaneously while maintaining uniqueness." },
      { title: "Multiple Variations", description: "Create multiple description variations for A/B testing to identify which copy drives highest conversions." },
      { title: "Competitive Differentiation", description: "AI analyzes competitor descriptions and highlights your unique selling points and competitive advantages." },
    ],
    benefits: ["Higher conversion rates", "Unique descriptions at scale", "SEO-friendly copy", "Time savings", "A/B testing ready", "Brand consistency"],
    metrics: ["500+ descriptions per day", "15-30% conversion rate increase", "100% unique content", "SEO optimized"],
  },
  "social-media-copy": {
    title: "AI Social Media Content",
    subtitle: "Engaging social posts tailored to each platform",
    description: "Create platform-specific social media content that drives engagement, builds community, and achieves marketing goals across all major social platforms.",
    features: [
      { title: "Platform Optimization", description: "Content tailored for each platform's best practices, character limits, and engagement patterns." },
      { title: "Hashtag Strategy", description: "AI selects optimal hashtags based on reach potential, relevance, and competitive analysis for each post." },
      { title: "Engagement Hooks", description: "Create attention-grabbing hooks and calls-to-action that drive comments, shares, and meaningful engagement." },
      { title: "Content Calendar Fill", description: "Generate complete content calendars with consistent posting across all platforms without manual writing." },
      { title: "Trend Integration", description: "AI monitors trends and suggests timely content that capitalizes on trending topics and conversations." },
      { title: "Multiple Variations", description: "Generate multiple post variations for the same message to test what resonates best with your audience." },
    ],
    benefits: ["Consistent posting", "Higher engagement", "Platform-specific optimization", "Trend participation", "Time savings", "A/B testing"],
    metrics: ["30+ posts per day capacity", "Platform-optimized content", "40% engagement increase", "Hashtag optimization"],
  },
  "email-content": {
    title: "AI Email Campaign Content",
    subtitle: "Personalized email sequences that convert",
    description: "Generate personalized email sequences, campaigns, and one-off emails that nurture leads, drive sales, and build customer relationships at scale.",
    features: [
      { title: "Sequence Generation", description: "Create complete email sequences (welcome, nurture, onboarding, re-engagement) with consistent messaging." },
      { title: "Personalization Tokens", description: "AI includes appropriate personalization beyond just names - behavior, preferences, and lifecycle stage." },
      { title: "Subject Line Optimization", description: "Generate multiple subject line variations optimized for open rates with A/B testing recommendations." },
      { title: "Conversion-Focused Copy", description: "Email copy structured to drive specific actions with clear value propositions and compelling CTAs." },
      { title: "Segmented Messaging", description: "Generate variations for different audience segments with tailored messaging for each group." },
      { title: "Automated Follow-Ups", description: "Create conditional follow-up emails based on user behavior (opened, clicked, purchased, etc.)." },
    ],
    benefits: ["Higher open rates", "Better click-through", "Increased conversions", "Personalization at scale", "Sequence consistency", "Time savings"],
    metrics: ["25-40% open rate improvement", "Complete sequences in minutes", "Personalized at scale", "Conversion optimized"],
  },
  "ad-copy-generation": {
    title: "AI Ad Copy Generation",
    subtitle: "High-converting ad copy for all platforms",
    description: "Generate multiple ad copy variations for Google Ads, Facebook Ads, and other platforms that are optimized for clicks, conversions, and campaign goals.",
    features: [
      { title: "Platform-Specific Copy", description: "Ad copy optimized for each platform's character limits, ad formats, and best practices (Google, Facebook, LinkedIn, etc.)." },
      { title: "Multiple Variations", description: "Generate dozens of ad variations automatically for comprehensive A/B testing and rapid optimization." },
      { title: "Benefit-Driven Headlines", description: "Create attention-grabbing headlines that emphasize benefits and unique value propositions." },
      { title: "CTA Optimization", description: "Test multiple call-to-action approaches to find which drives highest conversion rates for each campaign." },
      { title: "Audience Targeting", description: "Generate copy variations tailored to different audience segments, demographics, and interest groups." },
      { title: "Performance Prediction", description: "AI predicts which ad copy variations are likely to perform best based on historical data patterns." },
    ],
    benefits: ["Higher CTR", "More conversions", "Rapid testing", "Platform optimization", "Audience targeting", "Lower CPA"],
    metrics: ["50+ ad variations generated", "20-40% CTR improvement", "Platform-optimized", "Performance predicted"],
  },
  "content-localization": {
    title: "AI Content Localization",
    subtitle: "Translate and adapt content for global markets",
    description: "Go beyond simple translation to culturally adapt content for different markets and languages while maintaining brand voice and message effectiveness.",
    features: [
      { title: "Cultural Adaptation", description: "Not just translation - adapt idioms, references, humor, and messaging to resonate with local cultures." },
      { title: "SEO Localization", description: "Research and optimize for local keywords and search behavior in each target market and language." },
      { title: "Brand Voice Consistency", description: "Maintain your brand's unique voice and personality across all languages and cultural adaptations." },
      { title: "Regional Variations", description: "Account for regional differences within languages (UK vs US English, Latin American vs European Spanish)." },
      { title: "Bulk Translation", description: "Translate entire websites, content libraries, or product catalogs simultaneously while maintaining quality." },
      { title: "Continuous Localization", description: "Automatically translate new content as it's created for always-current multilingual presence." },
    ],
    benefits: ["Global reach", "Cultural relevance", "Maintained brand voice", "SEO in all markets", "Scalable translation", "Cost effective"],
    metrics: ["Multiple language support", "Cultural adaptation", "Local SEO optimized", "90% faster than manual"],
  },

  // AI Design Studio Sub-Services
  "ai-image-generation": {
    title: "AI Image Generation",
    subtitle: "Create unique, high-quality images from text descriptions",
    description: "Generate custom images, illustrations, and graphics using state-of-the-art AI models like DALL-E, Midjourney, and Stable Diffusion for any purpose or use case.",
    features: [
      { title: "Text-to-Image Generation", description: "Describe what you want in plain language and AI generates high-quality images matching your description." },
      { title: "Style Consistency", description: "Train AI on your brand's visual style to generate consistent imagery across all your marketing materials." },
      { title: "Multiple Variations", description: "Generate dozens of variations of the same concept to explore different visual directions and choose the best." },
      { title: "Image Editing & Refinement", description: "Refine generated images with AI-powered editing - change colors, add elements, adjust composition." },
      { title: "Commercial Rights", description: "Full commercial rights to all AI-generated images for use in marketing, products, and client work." },
      { title: "High-Resolution Output", description: "Generate images in high resolution suitable for print, large displays, and professional use." },
    ],
    benefits: ["Unlimited unique images", "No stock photo fees", "Complete customization", "Fast iterations", "Commercial rights", "Any style possible"],
    metrics: ["Unlimited image generation", "High-resolution output", "24/7 availability", "Minutes not days"],
  },
  "brand-assets": {
    title: "AI Brand Asset Creation",
    subtitle: "Generate logos, icons, and brand elements with AI",
    description: "Create comprehensive brand assets including logo variations, icons, patterns, and visual elements using AI-powered design tools guided by your brand guidelines.",
    features: [
      { title: "Logo Generation & Variations", description: "Generate logo concepts and variations in multiple styles, explore different design directions quickly." },
      { title: "Icon Set Creation", description: "Create consistent icon sets for apps, websites, or marketing materials in your brand style." },
      { title: "Pattern & Texture Generation", description: "Generate unique patterns, textures, and background elements that complement your brand identity." },
      { title: "Color Palette Development", description: "AI suggests and generates color palettes based on brand personality, industry, and target audience." },
      { title: "Typography Pairing", description: "Get AI recommendations for font pairings that match your brand personality and ensure readability." },
      { title: "Brand Guidelines Creation", description: "Generate comprehensive brand guidelines showing proper usage of all created assets." },
    ],
    benefits: ["Professional brand identity", "Unlimited variations", "Consistent system", "Fast iterations", "Export ready", "Complete package"],
    metrics: ["Full brand asset library", "Multiple style variations", "Vector format output", "Brand system created"],
  },
  "ad-creatives": {
    title: "AI Ad Creative Generation",
    subtitle: "Generate high-performing ad creatives at scale",
    description: "Create multiple ad creative variations automatically for A/B testing across all platforms with AI that combines images, copy, and design elements.",
    features: [
      { title: "Multi-Platform Formats", description: "Generate ads in all required formats and sizes for Facebook, Instagram, Google Display, LinkedIn, etc." },
      { title: "Creative Variations", description: "Produce dozens of variations automatically by combining different images, headlines, and design elements." },
      { title: "Performance Prediction", description: "AI predicts which creative variations likely to perform best based on historical campaign data." },
      { title: "Brand Compliance", description: "All generated creatives follow your brand guidelines for colors, fonts, and visual style automatically." },
      { title: "Dynamic Product Ads", description: "Generate personalized ad creatives featuring specific products for dynamic retargeting campaigns." },
      { title: "Rapid Iteration", description: "Quickly iterate on winning concepts by generating new variations of top-performing ads." },
    ],
    benefits: ["100+ variations quickly", "A/B testing ready", "Platform-optimized", "Performance predicted", "Brand compliant", "Continuous testing"],
    metrics: ["50+ ad variations per concept", "All platform sizes", "30% higher performance", "10x faster creation"],
  },
  "social-graphics": {
    title: "Social Media Graphics",
    subtitle: "Eye-catching graphics optimized for each platform",
    description: "Create scroll-stopping social media graphics automatically optimized for each platform's dimensions, formats, and best practices that drive engagement.",
    features: [
      { title: "Platform-Optimized Sizes", description: "Automatically create graphics in optimal sizes for Instagram posts, Stories, Reels, Facebook, LinkedIn, Twitter, etc." },
      { title: "Template Library", description: "Access library of proven templates optimized for engagement that can be customized with AI assistance." },
      { title: "On-Brand Design", description: "All graphics automatically follow your brand guidelines for colors, fonts, and visual style." },
      { title: "Text Overlay Optimization", description: "AI ensures text is readable with proper contrast, sizing, and positioning for maximum impact." },
      { title: "Trend-Aware Designs", description: "AI incorporates current design trends and platform-specific aesthetics for native-looking content." },
      { title: "Bulk Generation", description: "Generate entire month's worth of social graphics in minutes with consistent quality and branding." },
    ],
    benefits: ["Platform-perfect sizing", "High engagement", "Brand consistency", "Trend awareness", "Bulk creation", "Template variety"],
    metrics: ["All platform formats", "50+ graphics per hour", "Brand guidelines followed", "Engagement optimized"],
  },
  "product-photography": {
    title: "AI Product Photography",
    subtitle: "Professional product images without photoshoots",
    description: "Generate professional product photography with perfect lighting, backgrounds, and styling using AI - no photographer or studio required.",
    features: [
      { title: "Background Generation", description: "Place products in any background or setting - from studio white to lifestyle environments." },
      { title: "Lighting Perfection", description: "AI applies professional lighting setups automatically for product photography that sells." },
      { title: "Multiple Angles", description: "Generate product from multiple angles and perspectives without physical repositioning or reshoots." },
      { title: "Lifestyle Context", description: "Show products in realistic use scenarios and lifestyle settings to help customers visualize ownership." },
      { title: "Seasonal Variations", description: "Create seasonal product photography variations (holiday, summer, etc.) from single base image." },
      { title: "Consistency Across Catalog", description: "Maintain consistent style, lighting, and quality across entire product catalog automatically." },
    ],
    benefits: ["No photoshoot costs", "Unlimited angles", "Perfect lighting", "Lifestyle contexts", "Fast iterations", "Consistent quality"],
    metrics: ["90% cost reduction", "Unlimited variations", "Professional quality", "Same-day turnaround"],
  },
  "style-consistency": {
    title: "Visual Style Consistency",
    subtitle: "Maintain consistent brand aesthetics across all assets",
    description: "Train custom AI models on your brand's visual identity to ensure all generated images and designs maintain perfect consistency with your established style.",
    features: [
      { title: "Custom Model Training", description: "Train AI specifically on your brand's visual style, creating a custom model that 'understands' your aesthetics." },
      { title: "Style Guide Enforcement", description: "AI automatically applies your brand guidelines to all generated assets - colors, typography, imagery style." },
      { title: "Quality Consistency", description: "Maintain consistent quality across all assets regardless of who's creating them or when they're made." },
      { title: "Multi-Format Consistency", description: "Ensure visual consistency across different formats - social posts, ads, website images, print materials." },
      { title: "Brand Evolution", description: "Gradually evolve your brand's visual style over time while maintaining overall consistency and recognition." },
      { title: "Asset Library Management", description: "Organize and manage all brand assets with AI-powered tagging, search, and version control." },
    ],
    benefits: ["Perfect consistency", "Brand recognition", "Quality control", "Scalable creation", "No style drift", "Easy management"],
    metrics: ["100% brand compliance", "Custom model trained", "Consistent output", "Unified visual system"],
  },

  // AI Automation & Workflows Sub-Services
  "task-automation": {
    title: "AI Task Automation",
    subtitle: "Automate repetitive business tasks with intelligent AI",
    description: "Free your team from manual, repetitive tasks by implementing AI automation that learns your processes and executes them flawlessly 24/7.",
    features: [
      { title: "Process Learning", description: "AI observes and learns your business processes to understand how tasks should be completed." },
      { title: "Data Entry Automation", description: "Automate data entry across systems with AI that understands context and validates accuracy." },
      { title: "Report Generation", description: "Automatically generate reports by pulling data from multiple sources and formatting according to templates." },
      { title: "File Management", description: "Organize, rename, move, and categorize files automatically based on content and business rules." },
      { title: "Scheduling & Coordination", description: "Automate scheduling, meeting coordination, and calendar management with AI assistants." },
      { title: "Quality Control", description: "AI monitors automated tasks for errors and alerts humans when intervention is needed." },
    ],
    benefits: ["80% time savings", "Zero errors", "24/7 execution", "Consistent quality", "Scalable capacity", "Employee focus on high-value work"],
    metrics: ["80%+ automation rate", "99.9% accuracy", "24/7 operation", "Immediate scalability"],
  },
  "workflow-management": {
    title: "Smart Workflow Management",
    subtitle: "Intelligent workflows that adapt based on data",
    description: "Build sophisticated workflows with AI decision-making that routes work, makes intelligent choices, and adapts based on conditions and data.",
    features: [
      { title: "Intelligent Routing", description: "AI routes work to appropriate team members based on skills, workload, complexity, and availability." },
      { title: "Conditional Logic", description: "Workflows adapt based on data conditions - if/then logic handled automatically by AI." },
      { title: "Priority Management", description: "AI prioritizes tasks and work items based on urgency, impact, and business rules." },
      { title: "Exception Handling", description: "Automatically handle exceptions and edge cases with AI decision-making based on historical patterns." },
      { title: "Approval Workflows", description: "Automate approval chains with AI that routes to appropriate approvers based on request type and amount." },
      { title: "SLA Management", description: "Monitor and enforce service level agreements automatically with alerts and escalations." },
    ],
    benefits: ["Faster processing", "Intelligent routing", "Better prioritization", "Automatic escalation", "SLA compliance", "Reduced bottlenecks"],
    metrics: ["50% faster processing", "Intelligent task routing", "Zero SLA breaches", "Automated decision-making"],
  },
  "document-processing": {
    title: "AI Document Processing",
    subtitle: "Extract and process information from documents automatically",
    description: "Automatically extract data from invoices, receipts, contracts, forms, and other documents using AI OCR and intelligent data extraction.",
    features: [
      { title: "OCR & Data Extraction", description: "Extract text and data from PDFs, images, and scanned documents with high accuracy using AI OCR." },
      { title: "Intelligent Classification", description: "AI automatically classifies documents by type (invoice, contract, receipt) and routes accordingly." },
      { title: "Data Validation", description: "Validate extracted data against business rules and external sources to ensure accuracy." },
      { title: "Multi-Format Support", description: "Process documents in any format - PDFs, images, Word docs, emails, scanned paper documents." },
      { title: "Structured Data Output", description: "Convert unstructured documents into structured data ready for database entry or API calls." },
      { title: "Exception Flagging", description: "AI flags documents that need human review due to quality issues or data concerns." },
    ],
    benefits: ["Manual entry eliminated", "High accuracy", "Fast processing", "Any format supported", "Validated data", "Automatic classification"],
    metrics: ["99%+ extraction accuracy", "100x faster than manual", "All formats supported", "Instant processing"],
  },
  "predictive-analytics": {
    title: "Predictive Analytics",
    subtitle: "Forecast trends and make data-driven decisions with ML",
    description: "Use machine learning to analyze historical data, identify patterns, and make accurate predictions about future trends, customer behavior, and business outcomes.",
    features: [
      { title: "Sales Forecasting", description: "Predict future sales with ML models that account for seasonality, trends, and external factors." },
      { title: "Churn Prediction", description: "Identify customers likely to churn before they leave so you can take preventive action." },
      { title: "Demand Forecasting", description: "Predict product demand for inventory optimization and supply chain planning." },
      { title: "Customer Lifetime Value", description: "Calculate predicted customer lifetime value to inform acquisition spending and retention strategies." },
      { title: "Risk Assessment", description: "Assess risk in lending, insurance, fraud detection, and other scenarios using predictive models." },
      { title: "Trend Detection", description: "Identify emerging trends in data before they're obvious to enable proactive decision-making." },
    ],
    benefits: ["Accurate forecasts", "Proactive decisions", "Risk reduction", "Better planning", "Competitive advantage", "Data-driven strategy"],
    metrics: ["90%+ forecast accuracy", "3-12 month predictions", "Real-time insights", "Automated updates"],
  },
  "email-automation": {
    title: "Email & Communication Automation",
    subtitle: "Automate email responses and communication workflows",
    description: "Handle email responses, categorization, and follow-ups automatically with AI that understands context and generates appropriate responses.",
    features: [
      { title: "Smart Email Categorization", description: "AI automatically categorizes incoming emails by topic, urgency, and required action." },
      { title: "Automated Responses", description: "Generate contextual email responses based on email content and historical response patterns." },
      { title: "Follow-Up Sequences", description: "Automatically send follow-up emails based on triggers like no response, links clicked, or time elapsed." },
      { title: "Email Prioritization", description: "AI identifies and flags high-priority emails requiring immediate attention or human response." },
      { title: "Sentiment Analysis", description: "Analyze email sentiment to identify upset customers or urgent issues requiring escalation." },
      { title: "Multi-Channel Communication", description: "Extend automation to SMS, chat, and other channels beyond just email." },
    ],
    benefits: ["Instant responses", "Consistent communication", "Priority identification", "24/7 availability", "Reduced workload", "Better customer experience"],
    metrics: ["Sub-1 minute response time", "80% emails handled automatically", "Sentiment tracked", "24/7 coverage"],
  },
  "integration-automation": {
    title: "Integration & API Automation",
    subtitle: "Connect systems and automate data flow with AI",
    description: "Seamlessly connect different business systems and tools with AI-powered integrations that automate data flow and ensure consistency across platforms.",
    features: [
      { title: "System Integration", description: "Connect CRMs, ERPs, marketing tools, and other business systems with automated data synchronization." },
      { title: "Data Transformation", description: "AI handles data format conversions and transformations as data moves between different systems." },
      { title: "Real-Time Sync", description: "Keep data synchronized in real-time across all connected systems without manual exports/imports." },
      { title: "Error Handling", description: "Automatically handle API errors, retries, and data inconsistencies with intelligent error recovery." },
      { title: "Workflow Triggers", description: "Trigger workflows in one system based on events in another (new lead, payment received, etc.)." },
      { title: "Custom Logic", description: "Implement custom business logic in integrations - not just moving data but transforming and enriching it." },
    ],
    benefits: ["Unified data", "Real-time sync", "No manual exports", "Consistent information", "Automated workflows", "System connectivity"],
    metrics: ["Multiple systems integrated", "Real-time synchronization", "99.9% uptime", "Automated data flow"],
  },

  // AI Web App Builder Sub-Services
  "lovable-development": {
    title: "Lovable Development",
    subtitle: "Build production-ready full-stack React apps with AI-powered natural language prompts",
    description: "Lovable is the revolutionary AI-powered platform that lets you build complete, production-ready web applications by simply describing what you want in plain English. From full-stack React apps with Supabase backends to complex SaaS platforms — Lovable handles code generation, deployment, and iteration at lightning speed.",
    features: [
      { title: "Natural Language to Code", description: "Describe your app idea in plain English and watch Lovable generate a complete, working React + TypeScript application with proper component architecture, routing, and state management." },
      { title: "Full-Stack with Supabase", description: "Automatically integrate Supabase for authentication, database, storage, and edge functions. Build complete backends without writing SQL or server code manually." },
      { title: "One-Click Deployment", description: "Deploy your application instantly with a single click. Lovable handles hosting, SSL certificates, and CDN distribution so your app is live in seconds." },
      { title: "Real-Time Collaboration", description: "Work with your team in real-time, share projects, and iterate together. See changes instantly in the live preview as you build." },
      { title: "Component Library Integration", description: "Access shadcn/ui components, Tailwind CSS styling, and Framer Motion animations out of the box for beautiful, responsive interfaces." },
      { title: "Iterative Development", description: "Refine your app through conversational prompts. Add features, fix bugs, and redesign sections by simply telling Lovable what to change." },
    ],
    benefits: ["Build full-stack apps in hours, not months", "No coding experience required", "Production-ready code with best practices", "Integrated authentication & database", "Instant deployment & hosting", "AI-powered debugging & iteration"],
    metrics: ["10x faster than traditional development", "90% reduction in development costs", "Apps deployed in under 24 hours", "50+ integrations supported"],
  },
  "bolt-development": {
    title: "Bolt.new Development",
    subtitle: "AI-powered full-stack development directly in your browser — scaffold, edit, and deploy instantly",
    description: "Bolt.new by StackBlitz brings the power of AI-driven development to your browser. Instantly create, edit, and deploy full-stack web applications with Node.js, React, and more — no local setup required. Perfect for rapid prototyping and production-ready apps.",
    features: [
      { title: "In-Browser Full-Stack IDE", description: "Write and run full-stack applications entirely in your browser with WebContainers technology. No downloads, no installations, no configuration needed." },
      { title: "AI-Powered Code Generation", description: "Describe features in natural language and Bolt generates complete implementations including frontend components, API routes, and database interactions." },
      { title: "Instant Preview & Hot Reload", description: "See your changes reflected instantly with hot module replacement. Test your application in real-time as Bolt writes and modifies code." },
      { title: "Multi-Framework Support", description: "Build with React, Next.js, Vue, Svelte, Angular, and more. Bolt supports all major JavaScript frameworks and their ecosystems." },
      { title: "npm Package Integration", description: "Install and use any npm package directly in the browser. Bolt handles dependency resolution and bundling automatically." },
      { title: "One-Click Deployment", description: "Deploy your project to production with a single click. Bolt handles build optimization, hosting, and CDN distribution." },
    ],
    benefits: ["Zero setup development environment", "Full-stack apps in the browser", "AI writes production-quality code", "Instant deployment to production", "Access from any device", "Real-time collaboration ready"],
    metrics: ["5x faster prototyping", "Zero configuration time", "Support for 10+ frameworks", "Instant deployment pipeline"],
  },
  "replit-development": {
    title: "Replit Agent Development",
    subtitle: "Describe your app idea and let Replit's AI agent build, test, and deploy it autonomously",
    description: "Replit Agent is an autonomous AI developer that takes your app description and builds it end-to-end — creating files, writing code, setting up databases, running tests, and deploying to production. It's like having a tireless developer who works 24/7.",
    features: [
      { title: "Autonomous App Building", description: "Describe what you want and Replit Agent plans the architecture, creates files, writes code, and builds your entire application autonomously from start to finish." },
      { title: "Integrated Database & Auth", description: "Replit Agent automatically sets up PostgreSQL databases, user authentication, and session management as part of the app building process." },
      { title: "Built-In Hosting & Deployment", description: "Every Replit project comes with instant hosting. Your app is live the moment it's built, with custom domains and SSL included." },
      { title: "Multi-Language Support", description: "Build in Python, JavaScript, TypeScript, Go, Ruby, and 50+ other languages. Replit supports virtually any programming language and framework." },
      { title: "Collaborative Development", description: "Invite team members to collaborate in real-time. Multiple developers can code simultaneously with multiplayer editing." },
      { title: "AI-Powered Debugging", description: "When errors occur, Replit Agent automatically diagnoses issues, suggests fixes, and can apply corrections — keeping your development flow uninterrupted." },
    ],
    benefits: ["Fully autonomous app development", "Built-in hosting for every project", "50+ programming languages supported", "Real-time multiplayer collaboration", "Automatic testing & debugging", "From idea to deployed app in minutes"],
    metrics: ["80% less manual coding needed", "Built-in hosting included", "50+ languages supported", "Autonomous error resolution"],
  },
  "cursor-development": {
    title: "Cursor AI Development",
    subtitle: "The AI-first code editor that supercharges professional development workflows",
    description: "Cursor is the next-generation code editor built around AI. It understands your entire codebase, provides intelligent autocomplete, generates code from natural language, and helps you refactor and debug with unprecedented speed and accuracy.",
    features: [
      { title: "Codebase-Aware AI", description: "Cursor indexes your entire project and understands the relationships between files, functions, and modules — providing contextually relevant suggestions and code generation." },
      { title: "AI Chat & Command", description: "Ask questions about your codebase, request new features, or get explanations using natural language. Cursor's AI understands code structure and can make multi-file edits." },
      { title: "Intelligent Autocomplete", description: "Get AI-powered code completions that understand your coding patterns, project conventions, and the broader context of what you're building." },
      { title: "Multi-File Editing", description: "Make sweeping changes across multiple files simultaneously. Describe a refactor and Cursor applies consistent changes throughout your codebase." },
      { title: "Built-In Terminal & Debugging", description: "Integrated terminal with AI assistance for debugging. Cursor can read error messages, understand stack traces, and suggest or apply fixes automatically." },
      { title: "Custom AI Rules", description: "Define project-specific coding standards and patterns that Cursor's AI follows, ensuring consistency with your team's conventions and best practices." },
    ],
    benefits: ["10x faster coding with AI assistance", "Understands your entire codebase", "Multi-file refactoring in seconds", "Professional-grade development tool", "Compatible with VS Code extensions", "Custom AI rules for team standards"],
    metrics: ["10x developer productivity boost", "Compatible with all VS Code extensions", "Multi-file edits in seconds", "Supports all major languages"],
  },
  "v0-development": {
    title: "V0 by Vercel Development",
    subtitle: "Generate beautiful, production-ready React UI components from text and images",
    description: "V0 by Vercel uses AI to generate polished React UI components from text descriptions or screenshots. Get pixel-perfect, accessible components using shadcn/ui and Tailwind CSS that you can copy directly into your Next.js or React project.",
    features: [
      { title: "Text-to-UI Generation", description: "Describe a UI component in plain English and V0 generates a complete, styled React component using shadcn/ui and Tailwind CSS with proper accessibility." },
      { title: "Image-to-Code", description: "Upload a screenshot or design mockup and V0 recreates it as clean, production-ready React code — matching the design with remarkable accuracy." },
      { title: "shadcn/ui Integration", description: "All generated components use shadcn/ui primitives, ensuring consistency, accessibility, and easy customization within your existing design system." },
      { title: "Iterative Refinement", description: "Refine generated components through follow-up prompts. Adjust layouts, colors, animations, and functionality through conversational iteration." },
      { title: "Copy-Paste Ready Code", description: "Generated code is clean, well-structured, and ready to paste directly into your project. No refactoring or cleanup needed." },
      { title: "Responsive by Default", description: "Every component is generated with mobile-first responsive design, ensuring your UI looks great on all screen sizes." },
    ],
    benefits: ["Generate UIs in seconds, not hours", "Production-ready React components", "Pixel-perfect from descriptions", "shadcn/ui & Tailwind CSS built-in", "Accessible components by default", "Seamless Next.js integration"],
    metrics: ["UI components generated in seconds", "Pixel-accurate design reproduction", "100% accessible components", "Zero manual styling needed"],
  },
  "firebase-studio": {
    title: "Firebase Studio Development",
    subtitle: "Google's AI-powered app builder with integrated cloud backend services",
    description: "Firebase Studio combines Google's AI with Firebase's powerful backend services to create full-stack applications. Build apps with real-time databases, authentication, cloud functions, and hosting — all orchestrated by AI.",
    features: [
      { title: "AI-Powered App Generation", description: "Describe your application and Firebase Studio generates the frontend, configures backend services, and sets up the infrastructure automatically." },
      { title: "Real-Time Database Integration", description: "Automatically configure Firestore or Realtime Database with proper security rules, data modeling, and real-time synchronization." },
      { title: "Firebase Authentication", description: "Set up multi-provider authentication (Google, email, phone, Apple) with pre-built UI components and security rules configured automatically." },
      { title: "Cloud Functions", description: "Generate serverless backend logic with Cloud Functions for Firebase. Handle complex business logic, webhooks, and third-party integrations." },
      { title: "Hosting & CDN", description: "Deploy with Firebase Hosting for fast, secure delivery via Google's global CDN. Automatic SSL and custom domain support included." },
      { title: "Analytics & Crashlytics", description: "Built-in Google Analytics and Crashlytics integration for monitoring user behavior, tracking events, and catching errors in production." },
    ],
    benefits: ["Google Cloud infrastructure", "Real-time data synchronization", "Multi-provider authentication", "Serverless backend functions", "Global CDN deployment", "Built-in analytics & monitoring"],
    metrics: ["Google-scale infrastructure", "Real-time data sync", "99.95% uptime SLA", "Global CDN delivery"],
  },

  // AI Website Builder Sub-Services
  "wordpress-ai": {
    title: "WordPress + AI Development",
    subtitle: "Combine WordPress's flexibility with AI-powered content, design, and SEO at scale",
    description: "Supercharge WordPress with AI plugins and tools that automate content creation, optimize SEO, generate designs, and streamline site management. Get the best of both worlds — WordPress's ecosystem with AI efficiency.",
    features: [
      { title: "AI Content Generation", description: "Generate blog posts, product descriptions, landing page copy, and meta content using AI plugins integrated directly into your WordPress editor." },
      { title: "AI-Powered Design", description: "Use AI page builders and theme customizers to create professional layouts, adjust styling, and generate design variations without designer skills." },
      { title: "SEO Automation", description: "AI-powered SEO plugins automatically optimize meta tags, generate schema markup, suggest internal links, and analyze content for search ranking potential." },
      { title: "WooCommerce Integration", description: "Build complete e-commerce stores with AI-generated product descriptions, automated inventory management, and personalized shopping experiences." },
      { title: "Plugin Ecosystem", description: "Access thousands of WordPress plugins enhanced with AI capabilities — from chatbots and forms to analytics and security." },
      { title: "Performance Optimization", description: "AI-driven caching, image optimization, and code minification to ensure your WordPress site loads fast and ranks well." },
    ],
    benefits: ["World's most popular CMS", "Thousands of AI-enhanced plugins", "Full e-commerce capability", "Complete content ownership", "SEO-optimized by default", "Massive developer community"],
    metrics: ["43% of websites run WordPress", "59,000+ plugins available", "AI content in minutes", "Enterprise-grade scalability"],
  },
  "framer-development": {
    title: "Framer Website Development",
    subtitle: "Design and publish stunning responsive websites with AI-powered layouts and animations",
    description: "Framer is the modern website builder that combines design freedom with AI intelligence. Create responsive, animated websites with a visual editor, built-in CMS, and AI-powered content generation — no coding required.",
    features: [
      { title: "AI Layout Generation", description: "Describe your page structure and Framer's AI generates responsive layouts with proper spacing, typography, and visual hierarchy automatically." },
      { title: "Advanced Animations", description: "Create scroll-triggered animations, page transitions, hover effects, and micro-interactions with Framer's powerful animation engine — no code needed." },
      { title: "Built-In CMS", description: "Manage dynamic content with Framer's integrated CMS. Create blogs, portfolios, product pages, and more with filterable, sortable collections." },
      { title: "Component System", description: "Build reusable components with variants, props, and interactions. Create a consistent design system that scales across your entire website." },
      { title: "SEO & Performance", description: "Framer generates clean HTML with built-in SEO optimization, automatic sitemaps, open graph tags, and fast loading through static site generation." },
      { title: "Custom Code Integration", description: "Add custom React components, embed third-party scripts, and extend functionality with code when you need more than visual design offers." },
    ],
    benefits: ["Designer-quality websites", "No coding required", "Advanced animations built-in", "Integrated CMS for content", "Blazing fast performance", "Custom domain & hosting included"],
    metrics: ["90% faster than traditional web design", "Built-in hosting included", "Sub-second page loads", "SEO-optimized output"],
  },
  "webflow-development": {
    title: "Webflow + AI Development",
    subtitle: "Visual web development platform enhanced with AI for faster design and content creation",
    description: "Webflow gives you the power of code with a visual canvas. Enhanced with AI tools for content generation, design suggestions, and SEO optimization, it's the professional choice for building custom, CMS-driven websites.",
    features: [
      { title: "Visual Development Canvas", description: "Build websites visually with full CSS control. Design responsive layouts, style elements, and create interactions — all without writing code." },
      { title: "AI Content Assistant", description: "Generate and refine website copy, headlines, CTAs, and meta descriptions using Webflow's AI assistant directly in the editor." },
      { title: "Powerful CMS", description: "Create dynamic, data-driven websites with Webflow's flexible CMS. Design collection templates, filter content, and manage structured data visually." },
      { title: "E-Commerce Engine", description: "Build custom online stores with Webflow's native e-commerce — custom product pages, dynamic carts, and secure Stripe checkout." },
      { title: "Interactions & Animations", description: "Create complex scroll animations, parallax effects, and hover interactions with Webflow's visual animation builder." },
      { title: "Enterprise Hosting", description: "Webflow hosting includes global CDN, automatic SSL, 99.99% uptime, and enterprise-grade security and performance." },
    ],
    benefits: ["Full design freedom without code", "Professional CMS capabilities", "Native e-commerce support", "Enterprise-grade hosting", "Clean, semantic HTML output", "Scales from startup to enterprise"],
    metrics: ["99.99% uptime guarantee", "Global CDN delivery", "100+ design templates", "Enterprise-grade security"],
  },
  "wix-ai": {
    title: "Wix AI Website Builder",
    subtitle: "Create personalized, professional websites instantly with AI-generated design and content",
    description: "Wix AI Website Builder creates complete, personalized websites from a simple business description. AI generates the design, writes the copy, selects images, and configures features — giving you a professional site ready to customize and launch.",
    features: [
      { title: "AI Site Generation", description: "Answer a few questions about your business and Wix AI generates a complete website with tailored design, content, images, and pages in minutes." },
      { title: "AI Text Creator", description: "Generate professional website copy, blog posts, product descriptions, and marketing text with Wix's built-in AI writing assistant." },
      { title: "AI Image Generator", description: "Create custom images and graphics for your website using AI. Generate unique visuals that match your brand without stock photo subscriptions." },
      { title: "App Market Integration", description: "Extend your site with 500+ apps from the Wix App Market — bookings, events, forums, memberships, restaurants, and more." },
      { title: "Built-In Marketing Tools", description: "Email marketing, social media posting, Google Ads integration, and SEO tools all built into the Wix platform for comprehensive marketing." },
      { title: "Mobile Optimization", description: "Every Wix AI site is automatically optimized for mobile with responsive design, touch-friendly navigation, and mobile-specific layout adjustments." },
    ],
    benefits: ["Complete website in minutes", "AI-generated content & design", "500+ app integrations", "Built-in marketing suite", "Free hosting included", "No technical skills needed"],
    metrics: ["Website generated in under 5 minutes", "500+ app integrations", "250M+ websites built on Wix", "Built-in analytics & SEO"],
  },
  "hostinger-ai": {
    title: "Hostinger AI Builder",
    subtitle: "Generate complete business websites with AI-written copy, images, and SEO in minutes",
    description: "Hostinger's AI Website Builder creates professional business websites with AI-generated copy, curated images, and built-in SEO — all included with affordable hosting. Perfect for small businesses and entrepreneurs who need a professional online presence fast.",
    features: [
      { title: "AI Website Generator", description: "Describe your business type and brand, and Hostinger's AI creates a complete multi-page website with relevant content, images, and structure." },
      { title: "AI Copywriting", description: "Every page gets professional, SEO-optimized copy written by AI — from homepage headlines to about pages and service descriptions." },
      { title: "Smart Image Selection", description: "AI curates and places relevant, high-quality images throughout your site that match your industry and brand aesthetic." },
      { title: "Integrated Hosting", description: "Get fast, reliable hosting bundled with your website. Includes SSL, email accounts, and 99.9% uptime guarantee at competitive pricing." },
      { title: "E-Commerce Ready", description: "Add an online store with product listings, secure payments, inventory management, and order tracking — all integrated into your AI-built site." },
      { title: "SEO & Analytics Built-In", description: "Automatic meta tags, sitemap generation, Google Analytics integration, and SEO recommendations to help your site rank from day one." },
    ],
    benefits: ["Most affordable AI builder", "Hosting included in price", "Professional AI-written content", "E-commerce capability", "Free SSL & email", "99.9% uptime guarantee"],
    metrics: ["Websites built in under 10 minutes", "Hosting from $2.99/month", "99.9% uptime guarantee", "Free SSL certificate included"],
  },
  "durable-ai": {
    title: "Durable AI Website Builder",
    subtitle: "The world's fastest AI website builder — a complete business site in 30 seconds",
    description: "Durable is the fastest AI website builder on the planet. Enter your business type and location, and Durable generates a complete, professional website with copy, images, contact forms, and SEO — in just 30 seconds. Then customize to perfection with an intuitive editor.",
    features: [
      { title: "30-Second Website Generation", description: "Enter your business type and Durable's AI generates a complete, multi-page website with professional design, copy, and images in about 30 seconds." },
      { title: "AI Business Tools", description: "Beyond websites — Durable includes AI-powered CRM, invoicing, email marketing, and business analytics tools for complete small business management." },
      { title: "AI Copywriter", description: "Regenerate any text on your site with AI. Get fresh headlines, descriptions, and calls-to-action tailored to your industry and audience." },
      { title: "Built-In CRM", description: "Track leads, manage contacts, and follow up with customers using Durable's integrated CRM system — no separate software needed." },
      { title: "Invoicing & Payments", description: "Send professional invoices and accept online payments directly through your Durable website — streamlining your business operations." },
      { title: "SEO Optimization", description: "AI automatically optimizes your site for search engines with proper meta tags, heading structure, image alt text, and schema markup." },
    ],
    benefits: ["Fastest website builder available", "Complete business management suite", "CRM & invoicing included", "AI-generated professional content", "No design or coding skills needed", "Affordable all-in-one platform"],
    metrics: ["Website generated in 30 seconds", "Built-in CRM & invoicing", "AI content regeneration", "All-in-one business platform"],
  },

  // AI Social Media Management Sub-Services
  "ai-content-scheduling": {
    title: "AI Content Scheduling",
    subtitle: "Automatically schedule posts at optimal times for maximum reach and engagement",
    description: "Stop guessing when to post. AI analyzes your audience's online behavior, historical engagement data, and platform algorithms to automatically schedule content at the perfect time for every platform.",
    features: [
      { title: "Smart Time Optimization", description: "AI continuously learns from your audience behavior to identify the exact times when your followers are most active and engaged." },
      { title: "Auto-Queue Management", description: "Maintain a consistent posting schedule with AI-managed content queues that automatically space posts for optimal frequency." },
      { title: "Multi-Platform Scheduling", description: "Schedule content across Instagram, Facebook, LinkedIn, Twitter, TikTok, and Pinterest from a single dashboard." },
      { title: "Content Calendar AI", description: "AI suggests content themes, holidays, and trending topics to fill gaps in your calendar and maintain posting consistency." },
      { title: "Time Zone Intelligence", description: "For global brands, AI optimizes posting times across different time zones to reach international audiences effectively." },
      { title: "Performance-Based Rescheduling", description: "AI automatically identifies underperforming posts and reschedules or repurposes them for better reach." },
    ],
    benefits: ["Post at the perfect time, every time", "Save 10+ hours weekly on scheduling", "Consistent posting across all platforms", "Higher engagement from timing optimization", "Global audience reach", "Data-driven content calendar"],
    metrics: ["40% increase in engagement from optimized timing", "15+ hours saved per week", "Consistent daily posting maintained", "3x improvement in reach"],
  },
  "ai-caption-generation": {
    title: "AI Caption & Hashtag Generation",
    subtitle: "Generate on-brand captions, hashtags, and CTAs trained on your voice and industry",
    description: "Never stare at a blank caption box again. Our AI learns your brand voice, studies your industry trends, and generates scroll-stopping captions with strategic hashtags that amplify your reach.",
    features: [
      { title: "Brand Voice Training", description: "AI is trained on your existing content, brand guidelines, and tone of voice to generate captions that sound authentically you." },
      { title: "Hashtag Strategy Engine", description: "AI researches and selects the optimal mix of high-volume, niche, and branded hashtags to maximize discoverability." },
      { title: "CTA Optimization", description: "Generate compelling calls-to-action tested against engagement data to drive clicks, saves, and shares." },
      { title: "Multi-Format Captions", description: "Generate captions optimized for different post types — carousel, reel, story, tweet, LinkedIn article, and more." },
      { title: "A/B Caption Testing", description: "AI generates multiple caption variants and recommends the best based on predicted engagement scores." },
      { title: "Trending Topic Integration", description: "AI monitors trending topics and suggests timely caption angles that capitalize on current conversations." },
    ],
    benefits: ["Captions that sound like you, not a robot", "Strategic hashtag research automated", "Higher engagement from optimized CTAs", "Multiple variants for A/B testing", "Trend-aware content creation", "Platform-specific optimization"],
    metrics: ["50% faster content creation", "30% higher engagement from optimized captions", "200+ hashtags researched per post", "Brand voice consistency maintained"],
  },
  "ai-auto-engagement": {
    title: "AI Auto-Engagement & Replies",
    subtitle: "Maintain active community presence with AI-powered comment and DM management",
    description: "Build stronger relationships at scale. AI monitors your comments, DMs, and mentions 24/7 — drafting on-brand replies, flagging important conversations, and keeping your community engaged even while you sleep.",
    features: [
      { title: "Smart Reply Generation", description: "AI drafts contextually appropriate replies to comments and messages that match your brand tone and address the specific query." },
      { title: "Sentiment Detection", description: "AI identifies positive, negative, and neutral comments, prioritizing responses to complaints and high-value interactions." },
      { title: "DM Automation", description: "Handle common DM inquiries automatically — product questions, pricing, availability — with personalized AI responses." },
      { title: "Mention Monitoring", description: "Track brand mentions, tags, and relevant conversations across platforms and respond or engage proactively." },
      { title: "Escalation Alerts", description: "AI flags sensitive topics, complaints, or high-profile interactions for human review while handling routine engagement." },
      { title: "Engagement Analytics", description: "Track response times, sentiment trends, and community growth metrics to measure engagement effectiveness." },
    ],
    benefits: ["24/7 community management", "Faster response times", "Consistent brand voice", "Never miss important mentions", "Scale engagement without hiring", "Sentiment-aware responses"],
    metrics: ["90% faster response times", "24/7 monitoring coverage", "95% positive sentiment maintained", "5x more interactions handled"],
  },
  "ai-social-analytics": {
    title: "AI Cross-Platform Analytics",
    subtitle: "Unified dashboards with AI-powered insights across all your social platforms",
    description: "Stop jumping between platform analytics. Get a unified view of all your social media performance with AI that surfaces actionable insights, identifies trends, and recommends optimizations automatically.",
    features: [
      { title: "Unified Dashboard", description: "See performance metrics from all platforms in one place — Instagram, Facebook, LinkedIn, Twitter, TikTok, YouTube — with real-time data." },
      { title: "AI Insight Generation", description: "AI automatically identifies patterns, anomalies, and opportunities in your data and presents them as actionable recommendations." },
      { title: "Content Performance Analysis", description: "Understand which content types, topics, and formats drive the most engagement, reach, and conversions." },
      { title: "Competitor Benchmarking", description: "AI tracks competitor social performance and identifies content gaps and opportunities you can capitalize on." },
      { title: "ROI Attribution", description: "Connect social media activity to business outcomes — leads, sales, website traffic — with AI-powered attribution modeling." },
      { title: "Automated Reporting", description: "Generate beautiful, data-rich reports automatically on your schedule — weekly, monthly, or custom intervals." },
    ],
    benefits: ["All platforms in one dashboard", "AI-generated actionable insights", "Competitor tracking included", "ROI attribution for social", "Automated report generation", "Data-driven strategy decisions"],
    metrics: ["80% less time on reporting", "Unified data from 6+ platforms", "Weekly automated insights", "Clear ROI attribution"],
  },

  // AI Data Intelligence Sub-Services
  "ai-dashboards": {
    title: "AI-Powered Dashboards",
    subtitle: "Custom dashboards that surface key metrics and anomalies using machine learning",
    description: "Transform your data into visual intelligence. AI-powered dashboards don't just display metrics — they actively analyze patterns, detect anomalies, and surface the insights that matter most to your business.",
    features: [
      { title: "Intelligent Data Visualization", description: "AI selects the best chart types and layouts to represent your data clearly and highlight the most important trends." },
      { title: "Anomaly Detection", description: "Machine learning algorithms continuously monitor your metrics and alert you when something unusual happens — good or bad." },
      { title: "Natural Language Queries", description: "Ask questions about your data in plain English and get instant visualized answers without writing any queries." },
      { title: "Predictive Overlays", description: "See where your metrics are headed with AI-generated trend projections overlaid on your historical data." },
      { title: "Custom KPI Tracking", description: "Define business-specific KPIs and have AI monitor them with automated alerts when targets are met or missed." },
      { title: "Real-Time Data Streams", description: "Connect live data sources for real-time dashboard updates that keep you informed as events happen." },
    ],
    benefits: ["Visual data intelligence", "Automatic anomaly detection", "Ask questions in plain English", "Predictive trend analysis", "Custom KPI monitoring", "Real-time data updates"],
    metrics: ["90% faster insight discovery", "Real-time data streaming", "AI-powered anomaly alerts", "Custom KPIs tracked"],
  },
  "predictive-modeling": {
    title: "Predictive Business Modeling",
    subtitle: "Forecast revenue, churn, and demand with AI models trained on your data",
    description: "See the future of your business with AI predictive models. Forecast revenue, predict customer churn, anticipate demand fluctuations, and identify growth opportunities before your competitors do.",
    features: [
      { title: "Revenue Forecasting", description: "AI models analyze historical revenue data, market trends, and seasonal patterns to provide accurate revenue predictions." },
      { title: "Churn Prediction", description: "Identify customers at risk of leaving before they churn, enabling proactive retention campaigns that save revenue." },
      { title: "Demand Forecasting", description: "Predict product demand with AI that factors in seasonality, trends, promotions, and external market conditions." },
      { title: "Customer Lifetime Value", description: "AI calculates and predicts CLV for each customer segment, enabling smarter acquisition and retention investments." },
      { title: "Market Trend Analysis", description: "Machine learning models scan market data to identify emerging trends and opportunities in your industry." },
      { title: "Scenario Planning", description: "Run what-if scenarios to understand how different strategies would impact your key business metrics." },
    ],
    benefits: ["Accurate revenue forecasts", "Reduce churn proactively", "Optimize inventory & demand", "Understand customer lifetime value", "Identify market opportunities", "Data-driven strategic planning"],
    metrics: ["85%+ forecast accuracy", "30% reduction in churn", "Demand predicted 3 months ahead", "ROI-optimized investments"],
  },
  "customer-data-platform": {
    title: "Customer Data Platform",
    subtitle: "Unify customer data from all touchpoints for 360-degree views",
    description: "Break down data silos and see the complete picture of every customer. Our AI-powered CDP unifies data from your website, CRM, email, social media, and more into actionable customer profiles.",
    features: [
      { title: "Data Unification", description: "Automatically merge customer data from all touchpoints into single, unified profiles with identity resolution." },
      { title: "Behavioral Tracking", description: "Track and analyze customer behavior across your website, app, email, and social channels in real-time." },
      { title: "AI Segmentation", description: "Machine learning automatically creates and updates customer segments based on behavior, demographics, and predictive scores." },
      { title: "Personalization Engine", description: "Deliver personalized experiences across channels using unified customer data and AI recommendations." },
      { title: "Journey Mapping", description: "Visualize complete customer journeys from first touch to conversion and beyond, identifying key moments that matter." },
      { title: "Privacy Compliance", description: "Built-in consent management and data governance ensure compliance with GDPR, CCPA, and other regulations." },
    ],
    benefits: ["360-degree customer view", "Break down data silos", "AI-powered segmentation", "Personalized experiences", "Complete journey visibility", "Privacy-compliant by design"],
    metrics: ["Unified customer profiles", "Real-time behavioral data", "Automated segmentation", "GDPR & CCPA compliant"],
  },
  "ai-automated-reporting": {
    title: "Automated Reporting",
    subtitle: "Generate comprehensive reports with AI-written insights and recommendations",
    description: "Stop spending hours building reports. AI automatically generates comprehensive, beautifully formatted reports with written insights, trend analysis, and actionable recommendations on your schedule.",
    features: [
      { title: "AI-Written Insights", description: "Reports include AI-generated narrative explanations of what the data means, why metrics changed, and what to do next." },
      { title: "Scheduled Delivery", description: "Set up automated report delivery — daily, weekly, or monthly — to your inbox or Slack with no manual effort." },
      { title: "Custom Templates", description: "Design report templates tailored to different audiences — executive summaries, detailed analytics, or client-facing reports." },
      { title: "Multi-Source Integration", description: "Pull data from Google Analytics, social platforms, CRM, ad platforms, and more into unified reports automatically." },
      { title: "Trend Comparison", description: "Automatically compare current performance against previous periods, targets, and industry benchmarks." },
      { title: "Export & Sharing", description: "Export reports in PDF, Excel, or share interactive dashboards with stakeholders via secure links." },
    ],
    benefits: ["Save 10+ hours on reporting weekly", "AI-written actionable insights", "Automated scheduled delivery", "Multi-source data integration", "Professional report templates", "Easy sharing with stakeholders"],
    metrics: ["90% time saved on reporting", "Automated weekly delivery", "Multi-source data unified", "AI-generated recommendations"],
  },

  // AI Reputation Management Sub-Services
  "review-monitoring": {
    title: "Review Monitoring & Response",
    subtitle: "Track reviews across 100+ platforms with AI-suggested responses",
    description: "Stay on top of every review across Google, Yelp, Trustpilot, G2, Capterra, and 100+ platforms. AI monitors in real-time, categorizes sentiment, and drafts professional responses for your approval.",
    features: [
      { title: "Multi-Platform Monitoring", description: "Track reviews across Google Business, Yelp, Trustpilot, Facebook, G2, Capterra, TripAdvisor, and 100+ industry platforms." },
      { title: "Real-Time Alerts", description: "Get instant notifications for new reviews — especially negative ones — so you can respond quickly and protect your reputation." },
      { title: "AI Response Drafting", description: "AI generates professional, on-brand responses tailored to each review's content and sentiment for your quick approval." },
      { title: "Sentiment Categorization", description: "Automatically categorize reviews by sentiment, topic, and urgency to prioritize your response efforts." },
      { title: "Review Analytics", description: "Track review volume, average ratings, sentiment trends, and response rates across all platforms over time." },
      { title: "Competitor Review Tracking", description: "Monitor competitor reviews to identify their weaknesses and your competitive advantages." },
    ],
    benefits: ["Monitor 100+ review platforms", "Instant negative review alerts", "AI-drafted professional responses", "Track sentiment trends", "Competitor review intelligence", "Improve average ratings"],
    metrics: ["100+ platforms monitored", "< 1 hour response time", "4.5+ average rating maintained", "90% review response rate"],
  },
  "sentiment-analysis": {
    title: "Sentiment Analysis",
    subtitle: "AI analyzes tone and emotion behind every mention in real time",
    description: "Understand how people truly feel about your brand. AI-powered sentiment analysis goes beyond positive/negative to detect emotions, urgency, and intent behind every mention, review, and comment.",
    features: [
      { title: "Emotion Detection", description: "AI identifies specific emotions — frustration, delight, confusion, excitement — not just positive/negative sentiment." },
      { title: "Topic-Based Sentiment", description: "Understand sentiment around specific topics — product quality, customer service, pricing — for targeted improvements." },
      { title: "Trend Analysis", description: "Track how sentiment shifts over time in response to campaigns, product launches, or market events." },
      { title: "Social Listening", description: "Monitor sentiment across social media, forums, news sites, and blogs to capture the full picture of brand perception." },
      { title: "Crisis Detection", description: "AI identifies sudden negative sentiment spikes that could indicate a brewing PR crisis, enabling rapid response." },
      { title: "Competitive Sentiment", description: "Compare your brand sentiment against competitors to understand your relative positioning in the market." },
    ],
    benefits: ["Deep emotion detection", "Topic-level sentiment tracking", "Early crisis detection", "Competitive sentiment comparison", "Real-time monitoring", "Data-driven brand strategy"],
    metrics: ["95% sentiment accuracy", "Real-time processing", "Crisis detected within minutes", "Multi-language support"],
  },
  "brand-alerts": {
    title: "Brand Alert System",
    subtitle: "Instant alerts when your brand is mentioned anywhere online",
    description: "Never miss a brand mention again. Our AI-powered alert system monitors the entire web — social media, news, blogs, forums, review sites — and notifies you instantly when your brand is discussed.",
    features: [
      { title: "Web-Wide Monitoring", description: "Track mentions across social media, news outlets, blogs, forums, podcasts, and video platforms in real-time." },
      { title: "Smart Filtering", description: "AI filters out irrelevant mentions and prioritizes alerts based on sentiment, reach, authority, and urgency." },
      { title: "Customizable Alerts", description: "Set up alerts for brand name, products, executives, campaigns, or any keywords relevant to your business." },
      { title: "Influencer Detection", description: "AI identifies when high-follower or high-authority accounts mention your brand, enabling rapid engagement." },
      { title: "Alert Channels", description: "Receive alerts via email, Slack, SMS, or push notification based on urgency and your preferences." },
      { title: "Historical Tracking", description: "Access a complete history of brand mentions with trend analysis and share-of-voice metrics over time." },
    ],
    benefits: ["Web-wide brand monitoring", "Smart priority filtering", "Multi-channel notifications", "Influencer mention detection", "Complete mention history", "Share-of-voice tracking"],
    metrics: ["Real-time web monitoring", "Smart alert prioritization", "Multi-channel notifications", "Complete mention archive"],
  },
  "response-automation": {
    title: "Response Automation",
    subtitle: "AI drafts professional, on-brand responses to reviews and mentions",
    description: "Respond to reviews and mentions at scale without sacrificing quality. AI drafts personalized, on-brand responses that address specific concerns, thank positive reviewers, and maintain your professional reputation.",
    features: [
      { title: "Context-Aware Responses", description: "AI reads the full context of each review or mention and crafts responses that specifically address the points raised." },
      { title: "Brand Voice Matching", description: "Responses are generated in your brand's tone of voice — professional, friendly, empathetic — based on your guidelines." },
      { title: "Approval Workflow", description: "AI drafts responses for your review and approval before publishing, ensuring quality control while saving time." },
      { title: "Template Library", description: "Build a library of approved response templates that AI customizes for each specific situation and review." },
      { title: "Escalation Rules", description: "Define rules for which reviews require human attention and which can be auto-responded after approval." },
      { title: "Response Analytics", description: "Track response rates, average response time, and the impact of responses on overall review ratings." },
    ],
    benefits: ["Respond 10x faster", "Consistent brand voice", "Approval workflow included", "Customizable templates", "Smart escalation rules", "Response impact tracking"],
    metrics: ["10x faster response drafting", "Consistent brand tone", "95% approval rate on first draft", "Improved review ratings"],
  },

  // Programmatic SEO Sub-Services
  "template-pages": {
    title: "Template-Based Page Generation",
    subtitle: "Design dynamic templates that auto-populate with keyword-specific content",
    description: "Create scalable page templates that automatically generate hundreds or thousands of unique, SEO-optimized pages. Each page is tailored to specific keywords with unique content, structured data, and proper optimization.",
    features: [
      { title: "Dynamic Template Design", description: "Design flexible page templates with dynamic content zones that auto-populate based on keyword data and structured datasets." },
      { title: "Data-Driven Content", description: "Connect templates to databases, APIs, or spreadsheets to generate pages with accurate, up-to-date information." },
      { title: "SEO Element Automation", description: "Automatically generate unique title tags, meta descriptions, H1s, and structured data for every generated page." },
      { title: "Internal Link Architecture", description: "Templates include smart internal linking logic that connects related pages for optimal link equity flow." },
      { title: "Mobile-First Templates", description: "All templates are designed mobile-first with responsive layouts that perform well on any device." },
      { title: "A/B Template Testing", description: "Test different template layouts and content structures to identify which formats drive the best SEO results." },
    ],
    benefits: ["Scale to thousands of pages", "Unique content per page", "Automated SEO elements", "Smart internal linking", "Mobile-optimized templates", "A/B testing built-in"],
    metrics: ["1000+ pages generated", "Unique content per page", "Automated SEO optimization", "Scalable architecture"],
  },
  "dynamic-content": {
    title: "Dynamic Content Generation",
    subtitle: "AI generates unique, relevant content for each page variant",
    description: "Avoid duplicate content penalties with AI that generates truly unique, relevant content for every page. Each variant gets custom copy, descriptions, and contextual information that provides genuine value to users.",
    features: [
      { title: "AI Content Generation", description: "Machine learning generates unique, human-quality content for each page variant based on keyword context and user intent." },
      { title: "Duplicate Content Prevention", description: "AI ensures every page has sufficiently unique content to avoid Google's duplicate content filters and penalties." },
      { title: "Contextual Relevance", description: "Content is tailored to the specific keyword, location, or category of each page for maximum relevance and engagement." },
      { title: "Quality Scoring", description: "AI scores generated content for readability, keyword optimization, and uniqueness before publishing." },
      { title: "Content Refresh Automation", description: "Automatically update and refresh content periodically to keep pages current and maintain search rankings." },
      { title: "Multi-Language Generation", description: "Generate content in multiple languages for international programmatic SEO campaigns." },
    ],
    benefits: ["Truly unique content per page", "No duplicate content risk", "Contextually relevant copy", "Automated content refresh", "Quality-scored output", "Multi-language support"],
    metrics: ["100% unique content", "Zero duplicate penalties", "Automated quality scoring", "Regular content refreshes"],
  },
  "keyword-clustering-scale": {
    title: "Keyword Clustering at Scale",
    subtitle: "AI identifies and groups thousands of keywords into targetable clusters",
    description: "Scale your keyword strategy from hundreds to hundreds of thousands. AI analyzes search intent, semantic relationships, and competition to group keywords into actionable clusters that map directly to page templates.",
    features: [
      { title: "Semantic Clustering", description: "AI groups keywords by meaning and search intent, not just keyword similarity, for more accurate page targeting." },
      { title: "Search Intent Classification", description: "Automatically classify keywords by intent — informational, navigational, commercial, transactional — for proper content matching." },
      { title: "Competition Analysis", description: "AI assesses keyword difficulty and competition for each cluster to prioritize the most achievable opportunities." },
      { title: "Volume & Trend Data", description: "Enrich clusters with search volume, trend data, and seasonality information for strategic prioritization." },
      { title: "Template Mapping", description: "Automatically map keyword clusters to page templates, determining which template type best serves each cluster." },
      { title: "Gap Analysis", description: "Identify untargeted keyword opportunities where competitors rank but you don't, revealing content gaps to fill." },
    ],
    benefits: ["Process thousands of keywords", "Intent-based clustering", "Competition-aware prioritization", "Automated template mapping", "Gap analysis included", "Scalable keyword strategy"],
    metrics: ["10,000+ keywords processed", "Intent-classified clusters", "Competition scored", "Mapped to templates"],
  },
  "auto-internal-linking": {
    title: "Automated Internal Linking",
    subtitle: "Smart algorithms ensure proper link equity distribution across generated pages",
    description: "Build a powerful internal linking structure automatically. AI algorithms analyze your page hierarchy, content relevance, and link equity to create an optimal internal linking architecture that boosts SEO performance.",
    features: [
      { title: "Relevance-Based Linking", description: "AI connects pages based on content relevance and topical relationships, creating natural link pathways for users and search engines." },
      { title: "Link Equity Distribution", description: "Algorithms ensure link equity flows efficiently from high-authority pages to important target pages for maximum ranking impact." },
      { title: "Anchor Text Optimization", description: "AI generates varied, keyword-rich anchor text for internal links that looks natural and supports target page rankings." },
      { title: "Hub & Spoke Architecture", description: "Automatically create content hub structures with pillar pages linking to related cluster content for topical authority." },
      { title: "Orphan Page Detection", description: "AI identifies pages with no internal links pointing to them and automatically creates link connections." },
      { title: "Link Audit & Maintenance", description: "Continuously monitor internal links for broken links, redirect chains, and suboptimal link structures." },
    ],
    benefits: ["Automated link architecture", "Optimal equity distribution", "Natural anchor text", "Hub & spoke structures", "No orphan pages", "Continuous maintenance"],
    metrics: ["Zero orphan pages", "Optimized link equity flow", "Automated anchor text", "Continuous link auditing"],
  },
};

const SubServiceDetail = ({ slug }: { slug?: string }) => {
  
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
      <SEOHead
        title={`${service.title} — Sub-Service | Revenuxe`}
        description={service.description || `Learn about ${service.title} from Revenuxe. AI-powered digital marketing solutions for your business growth.`}
        canonicalUrl={`https://revenuxe.com/sub-services/${slug || ""}`}
        ogImage="https://revenuxe.com/og-service.png"
        schemaData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": service.title,
          "description": service.description,
          "provider": { "@type": "Organization", "name": "Revenuxe", "url": "https://revenuxe.com" }
        }}
      />
      <Navigation />
      <main>
        <PageHero
          title={service.title}
          subtitle={service.subtitle}
        />

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

        <FAQ 
          items={[
            {
              question: `How does ${service.title} work?`,
              answer: `${service.title} combines strategic planning, expert implementation, and continuous optimization to deliver measurable results. We start by understanding your business goals, then develop a customized approach using proven methodologies and cutting-edge tools.`
            },
            {
              question: "What results can I expect?",
              answer: `Results vary based on your industry, current situation, and goals. However, most clients see initial improvements within 4-8 weeks, with significant progress by month 3. We provide transparent reporting and regular updates on all key performance metrics.`
            },
            {
              question: "How long does implementation take?",
              answer: "Initial setup typically takes 1-2 weeks, followed by an optimization phase where we refine and improve performance based on data. Full implementation is usually complete within 30 days, with ongoing optimization continuing thereafter."
            },
            {
              question: "Do you provide ongoing support?",
              answer: "Absolutely! We provide continuous monitoring, optimization, and support to ensure sustained success. You'll have a dedicated account manager and regular strategy sessions to review performance and plan improvements."
            },
            {
              question: "What makes this service different?",
              answer: "Our approach combines AI-powered automation with human expertise, data-driven decision making with creative strategy, and proven best practices with innovative techniques. We focus on measurable ROI and long-term sustainable growth."
            }
          ]}
        />

        <section className="py-20 bg-gradient-to-br from-primary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Get <span className="text-primary">Started?</span></h2>
            <p className="text-muted-foreground text-lg mb-8">Let's discuss how this service can help you achieve your goals.</p>
            <div className="flex gap-4 justify-center">
              <SubServiceDetailDialogLauncher />
              <Button size="lg" variant="outline" asChild><a href="/contact">Contact Us</a></Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SubServiceDetail;
