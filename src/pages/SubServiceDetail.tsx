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
