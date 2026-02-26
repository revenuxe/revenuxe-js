import { useParams, Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import { GetStartedDialog } from "@/components/GetStartedDialog";
import { SEO } from "@/components/SEO";
import FAQ from "@/components/FAQ";
import ROICalculator from "@/components/ROICalculator";
import { seoServiceFAQs, contentMarketingFAQs, ppcFAQs, socialMediaFAQs } from "@/data/faqData";

const serviceData: Record<string, any> = {
  "social-media": {
    title: "Social Media Marketing",
    subtitle: "Build a powerful brand presence across all social platforms",
    description: "Transform your social media channels into powerful business assets. We create engaging content, build communities, and drive measurable results across Facebook, Instagram, LinkedIn, Twitter, and TikTok.",
    features: [
      { title: "Strategic Content Planning", description: "Customized content calendars aligned with your brand voice and business objectives.", link: "/sub-services/content-planning" },
      { title: "Platform Optimization", description: "Optimize profiles and content for each platform's unique algorithm and audience behavior.", link: "/sub-services/platform-optimization" },
      { title: "Community Management", description: "Build lasting relationships through timely engagement and community-building strategies.", link: "/sub-services/community-management" },
      { title: "Paid Social Campaigns", description: "Targeted ad campaigns that reach your ideal customers with the right message.", link: "/sub-services/paid-social" },
    ],
    benefits: ["Increase brand awareness", "Drive website traffic", "Build authentic engagement", "Generate qualified leads", "Improve customer retention", "Gain market insights"],
    process: [
      { step: "Discovery & Audit", description: "Analyze current presence, competitors, and target audience." },
      { step: "Strategy Development", description: "Create roadmap with clear goals and platform-specific tactics." },
      { step: "Content Creation", description: "Produce engaging graphics, videos, and copy." },
      { step: "Implementation & Growth", description: "Launch campaigns and optimize based on data." },
    ],
  },
  "performance-marketing": {
    title: "Performance Marketing",
    subtitle: "Data-Driven Results That Matter",
    description: "Maximize ROI with targeted campaigns across Google Ads, Meta Ads, and AI-powered platforms. Every rupee invested delivers measurable returns through our data-driven approach.",
    features: [
      { title: "Google Ads Excellence", description: "Master Search, Display, Shopping, and YouTube advertising. Leverage Smart Bidding, responsive search ads, and Performance Max campaigns across Google's entire ecosystem for maximum visibility and conversions.", link: "/sub-services/google-ads" },
      { title: "Meta Ads Mastery (Facebook & Instagram)", description: "Reach billions with precision targeting on Facebook and Instagram. Utilize Advantage+ campaigns, dynamic product ads, and advanced audience segmentation for exceptional B2C results.", link: "/sub-services/meta-ads" },
      { title: "AI-Powered Advertising", description: "Harness AI for campaign optimization, creative generation, and predictive analytics. Automatically test thousands of variations, identify winning patterns, and scale what works for a competitive edge.", link: "/sub-services/ai-advertising" },
      { title: "Video Advertising Excellence", description: "Captivate audiences with compelling video campaigns across YouTube, Instagram Reels, Facebook Stories, and TikTok. Full-service from concept to production to optimization.", link: "/sub-services/video-advertising" },
      { title: "Advanced Retargeting", description: "Re-engage potential customers with smart retargeting. Dynamic product ads, sequential messaging, and behavior-based triggers to convert interested users.", link: "/sub-services/retargeting" },
      { title: "Conversion Rate Optimization", description: "Improve landing pages and user journeys through A/B testing, heatmap analysis, and touchpoint optimization for maximum ROI.", link: "/sub-services/conversion-optimization" },
    ],
    benefits: ["Lower CPA through AI optimization", "Higher ROAS with multi-platform strategies", "Real-time performance tracking", "Scalable growth with automation", "Advanced audience insights", "Reduced manual optimization"],
    process: [
      { step: "Goal Setting & Platform Selection", description: "Define KPIs and choose platforms (Google, Meta, LinkedIn, TikTok) based on audience and goals." },
      { step: "Campaign Setup & AI Integration", description: "Create optimized campaigns with AI bid strategies, audience segmentation, and tracking." },
      { step: "Testing & Learning", description: "Run A/B tests on creatives, audiences, and messaging. Use AI to identify winners faster." },
      { step: "Scale & Optimize", description: "Increase investment in winners. Use ML and data to automate optimization at scale." },
    ],
  },
  "seo": {
    title: "SEO Optimization",
    subtitle: "Dominate search rankings and drive organic traffic",
    description: "Comprehensive SEO strategies that help you rank higher on Google, attract qualified traffic, and establish brand authority for long-term sustainable growth.",
    features: [
      { title: "Technical SEO Excellence", description: "Optimize structure, speed, and crawlability for search engines.", link: "/sub-services/technical-seo" },
      { title: "Keyword Strategy", description: "Identify high-value keywords and create content that ranks and converts.", link: "/sub-services/keyword-strategy" },
      { title: "On-Page Optimization", description: "Perfect every element from meta tags to internal linking.", link: "/sub-services/on-page-seo" },
      { title: "Quality Link Building", description: "Build authoritative backlinks through strategic outreach and digital PR.", link: "/sub-services/link-building" },
    ],
    benefits: ["Increase organic visibility", "Drive qualified traffic", "Build brand authority", "Reduce paid ad dependency", "Improve user experience", "Higher organic conversions"],
    process: [
      { step: "SEO Audit & Research", description: "Comprehensive analysis of website, competitors, and keywords." },
      { step: "Strategy & Roadmap", description: "Develop customized strategy with prioritized recommendations." },
      { step: "Implementation", description: "Execute technical fixes, optimize content, and build links." },
      { step: "Monitor & Refine", description: "Track rankings and continuously optimize based on data." },
    ],
  },
};

const additionalServices = {
  "email-marketing": { 
    title: "Email Marketing", 
    subtitle: "Engage and convert with personalized campaigns",
    features: [
      { title: "Email Campaign Strategy", description: "Develop targeted campaigns that nurture leads and drive conversions.", link: "/sub-services/email-campaigns" },
      { title: "Marketing Automation", description: "Automate workflows for welcome series, abandoned carts, and re-engagement.", link: "/sub-services/marketing-automation" },
      { title: "List Segmentation", description: "Segment audiences for personalized messaging that increases engagement.", link: "/sub-services/list-segmentation" },
      { title: "Email Design & Copywriting", description: "Create beautiful, mobile-responsive emails with compelling copy.", link: "/sub-services/email-design" },
    ],
  },
  "content-marketing": { 
    title: "Content Marketing", 
    subtitle: "Create compelling content that attracts and converts",
    features: [
      { title: "Content Strategy Development", description: "Build comprehensive content strategies aligned with business goals.", link: "/sub-services/content-strategy" },
      { title: "Blog & Article Writing", description: "Create SEO-optimized articles that establish thought leadership.", link: "/sub-services/blog-writing" },
      { title: "Video Content Production", description: "Produce engaging videos for social media, websites, and campaigns.", link: "/sub-services/video-production" },
      { title: "Infographic Design", description: "Transform complex data into shareable visual content.", link: "/sub-services/infographic-design" },
    ],
  },
  "web-development": { 
    title: "Custom Web Development", 
    subtitle: "Build modern, high-performance web applications",
    features: [
      { title: "Custom Website Development", description: "Build tailored websites with cutting-edge technologies and frameworks.", link: "/sub-services/custom-websites" },
      { title: "Web Application Development", description: "Create powerful web apps with advanced functionality and integrations.", link: "/sub-services/web-apps" },
      { title: "CMS Integration", description: "Implement content management systems for easy content updates.", link: "/sub-services/cms-integration" },
      { title: "API Development & Integration", description: "Build and connect APIs for seamless data flow and functionality.", link: "/sub-services/api-development" },
    ],
  },
  "ecommerce": { 
    title: "E-Commerce Solutions", 
    subtitle: "Complete online store setup and optimization",
    features: [
      { title: "E-Commerce Platform Setup", description: "Launch full-featured online stores on Shopify, WooCommerce, or custom platforms.", link: "/sub-services/ecommerce-setup" },
      { title: "Payment Gateway Integration", description: "Integrate secure payment solutions with multiple payment options.", link: "/sub-services/payment-integration" },
      { title: "Product Catalog Management", description: "Organize and optimize product listings for maximum conversions.", link: "/sub-services/catalog-management" },
      { title: "Cart Optimization", description: "Reduce abandonment and increase conversions with optimized checkout flows.", link: "/sub-services/cart-optimization" },
    ],
  },
  "mobile-design": { 
    title: "Mobile-First Design", 
    subtitle: "Responsive designs that work flawlessly on all devices",
    features: [
      { title: "Responsive Web Design", description: "Create fluid designs that adapt perfectly to any screen size.", link: "/sub-services/responsive-design" },
      { title: "Mobile UX Optimization", description: "Optimize user experiences specifically for mobile interactions.", link: "/sub-services/mobile-ux" },
      { title: "Progressive Web Apps", description: "Build PWAs that combine the best of web and mobile apps.", link: "/sub-services/pwa-development" },
      { title: "Mobile Performance", description: "Ensure lightning-fast load times and smooth interactions on mobile.", link: "/sub-services/mobile-performance" },
    ],
  },
  "landing-pages": { 
    title: "Landing Pages", 
    subtitle: "High-converting pages that turn visitors into customers",
    features: [
      { title: "Conversion-Focused Design", description: "Design landing pages optimized for maximum conversion rates.", link: "/sub-services/conversion-design" },
      { title: "A/B Testing Setup", description: "Test variations to continuously improve performance and conversions.", link: "/sub-services/ab-testing" },
      { title: "Lead Capture Forms", description: "Create optimized forms that increase lead generation.", link: "/sub-services/lead-forms" },
      { title: "Landing Page Analytics", description: "Track and analyze visitor behavior to optimize performance.", link: "/sub-services/landing-analytics" },
    ],
  },
  "ai-chatbots": {
    title: "AI Chatbots & Automation",
    subtitle: "Intelligent conversational AI that engages and converts 24/7",
    features: [
      { title: "Custom AI Chatbot Development", description: "Build intelligent chatbots powered by GPT and advanced AI for natural conversations.", link: "/sub-services/custom-chatbot" },
      { title: "WhatsApp Business Automation", description: "Automate customer interactions on WhatsApp with AI-powered responses.", link: "/sub-services/whatsapp-automation" },
      { title: "Lead Qualification Bots", description: "Automatically qualify leads and route to sales team based on AI analysis.", link: "/sub-services/lead-qualification-bot" },
      { title: "Customer Support Automation", description: "Provide instant 24/7 support with AI chatbots that learn from interactions.", link: "/sub-services/support-automation" },
      { title: "Conversational Commerce", description: "Enable shopping and transactions through natural chat interfaces.", link: "/sub-services/conversational-commerce" },
      { title: "Multi-Channel Bot Deployment", description: "Deploy chatbots across website, WhatsApp, Facebook Messenger, and more.", link: "/sub-services/multichannel-bots" },
    ],
  },
  "branding": {
    title: "Brand Identity & Design",
    subtitle: "Create memorable brands that resonate with your audience",
    features: [
      { title: "Brand Strategy & Positioning", description: "Define your brand identity, values, and unique market positioning.", link: "/sub-services/brand-strategy" },
      { title: "Logo & Visual Identity", description: "Design distinctive logos and visual systems that represent your brand.", link: "/sub-services/logo-design" },
      { title: "Brand Guidelines", description: "Create comprehensive brand guidelines for consistent application.", link: "/sub-services/brand-guidelines" },
      { title: "Rebranding Services", description: "Refresh and modernize existing brands for new market opportunities.", link: "/sub-services/rebranding" },
    ],
  },
  "analytics": {
    title: "Analytics & Data Intelligence",
    subtitle: "Turn data into actionable insights that drive growth",
    features: [
      { title: "Google Analytics Setup & Optimization", description: "Implement advanced tracking and custom reporting for complete insights.", link: "/sub-services/google-analytics" },
      { title: "Conversion Tracking", description: "Track every customer action and attribute revenue to marketing channels.", link: "/sub-services/conversion-tracking" },
      { title: "Custom Dashboards", description: "Build real-time dashboards that visualize key metrics and KPIs.", link: "/sub-services/custom-dashboards" },
      { title: "Marketing Attribution", description: "Understand which channels and campaigns drive conversions and revenue.", link: "/sub-services/marketing-attribution" },
    ],
  },
  "ai-seo-content": {
    title: "AI Blog & Content SEO",
    subtitle: "Generate SEO-optimized content at scale with AI",
    description: "Leverage advanced AI to create high-quality, SEO-optimized blogs, articles, and content that ranks on Google and engages your audience, saving time while driving organic traffic.",
    features: [
      { title: "AI-Powered Blog Writing", description: "Generate comprehensive, engaging blog posts optimized for search engines and readers.", link: "/sub-services/ai-blog-writing" },
      { title: "Keyword Clustering & Strategy", description: "Identify and cluster keywords for maximum topical authority and ranking potential.", link: "/sub-services/keyword-clustering" },
      { title: "Content Strategy Automation", description: "Automate content planning and scheduling based on data-driven insights.", link: "/sub-services/content-automation" },
      { title: "Topic Research & Ideation", description: "Discover trending topics and content gaps using AI-powered research tools.", link: "/sub-services/topic-research" },
      { title: "Meta & Schema Optimization", description: "Automatically generate optimized meta titles, descriptions, and schema markup.", link: "/sub-services/meta-optimization" },
      { title: "Content Performance Analysis", description: "Track content performance and get AI recommendations for improvements.", link: "/sub-services/content-analysis" },
    ],
    benefits: ["10x faster content creation", "Consistent SEO optimization", "Scalable content production", "Data-driven topic selection", "Improved search rankings", "Lower content costs"],
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
      { title: "Automated SEO Audits", description: "Run comprehensive technical and on-page SEO audits automatically with AI insights.", link: "/sub-services/automated-audits" },
      { title: "Rank Tracking Automation", description: "Monitor keyword rankings across search engines with automated reporting and alerts.", link: "/sub-services/rank-tracking" },
      { title: "Competitor Analysis AI", description: "Continuously monitor competitor strategies and get AI-powered recommendations.", link: "/sub-services/competitor-ai" },
      { title: "SERP Insights & Monitoring", description: "Track SERP features and get AI insights on ranking opportunities.", link: "/sub-services/serp-insights" },
      { title: "Predictive SEO Growth", description: "Use machine learning to forecast traffic and identify high-impact opportunities.", link: "/sub-services/predictive-seo" },
      { title: "Automated Reporting", description: "Generate comprehensive SEO reports automatically with AI-driven insights.", link: "/sub-services/automated-reporting" },
    ],
    benefits: ["80% time savings on manual tasks", "Real-time SEO monitoring", "Predictive insights", "Faster issue detection", "Competitive intelligence", "Scalable SEO operations"],
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
    description: "Stay ahead with optimization strategies for voice search, image search, and AI-powered search engines like ChatGPT and Bard that are reshaping how users discover content.",
    features: [
      { title: "Voice Search Optimization", description: "Optimize for natural language queries and featured snippets for voice assistants.", link: "/sub-services/voice-search" },
      { title: "Image SEO & Optimization", description: "Optimize images for Google Image Search with proper tags, compression, and structured data.", link: "/sub-services/image-seo" },
      { title: "AI Answer Snippet Optimization", description: "Structure content to appear in AI-generated answers and featured snippets.", link: "/sub-services/ai-snippets" },
      { title: "Multilingual Search Optimization", description: "Expand reach with multilingual SEO for international markets.", link: "/sub-services/multilingual-seo" },
      { title: "Mobile-First Indexing", description: "Ensure perfect mobile performance for Google's mobile-first index.", link: "/sub-services/mobile-indexing" },
      { title: "Schema Markup for Rich Results", description: "Implement advanced schema for rich snippets, knowledge panels, and more.", link: "/sub-services/schema-markup" },
    ],
    benefits: ["Capture voice search traffic", "Appear in AI answers", "Higher visibility in image search", "International reach", "Future-proof SEO strategy", "Rich result appearances"],
    process: [
      { step: "Search Trend Analysis", description: "Analyze voice and visual search trends in your industry." },
      { step: "Content Restructuring", description: "Optimize existing content for conversational queries and visual search." },
      { step: "Technical Implementation", description: "Implement schema markup, image optimization, and mobile enhancements." },
      { step: "Monitor & Adapt", description: "Track performance across new search formats and continuously optimize." },
    ],
  },
  "growth-marketing": {
    title: "Growth Marketing",
    subtitle: "Strategic growth hacking to scale your brand",
    description: "Combine data science, creative experimentation, and rapid testing to identify and scale growth opportunities that transform your business from startup to market leader.",
    features: [
      { title: "User Acquisition Strategy", description: "Identify and optimize the most effective channels for acquiring high-value users.", link: "/sub-services/user-acquisition" },
      { title: "Retention & Engagement", description: "Build strategies to keep users coming back and increase lifetime value.", link: "/sub-services/retention-strategy" },
      { title: "Viral Growth Mechanics", description: "Design referral programs and viral loops that turn users into brand advocates.", link: "/sub-services/viral-growth" },
      { title: "Conversion Funnel Optimization", description: "Optimize every step of your funnel to maximize conversions and revenue.", link: "/sub-services/funnel-optimization" },
      { title: "A/B Testing & Experimentation", description: "Run rapid experiments to validate hypotheses and scale winning tactics.", link: "/sub-services/ab-testing-growth" },
      { title: "Organic Growth Tactics", description: "Build sustainable organic growth through content, community, and SEO.", link: "/sub-services/organic-growth" },
    ],
    benefits: ["Rapid scalable growth", "Data-driven decisions", "Lower CAC over time", "Increased LTV", "Sustainable growth engine", "Competitive advantage"],
    process: [
      { step: "Growth Audit", description: "Analyze current metrics, identify bottlenecks, and uncover opportunities." },
      { step: "Hypothesis Development", description: "Develop testable hypotheses for growth based on data and insights." },
      { step: "Rapid Experimentation", description: "Run multiple experiments simultaneously to validate growth tactics." },
      { step: "Scale What Works", description: "Double down on winning strategies and build sustainable growth systems." },
    ],
  },
  "ai-webapp": {
    title: "Build Web App Using AI",
    subtitle: "Create powerful web applications rapidly with AI-powered platforms",
    description: "Skip months of traditional development. Build production-ready web applications in days using cutting-edge AI coding platforms that write, debug, and deploy code for you.",
    features: [
      { title: "Lovable", description: "Build full-stack React apps with AI through natural language prompts. Includes Supabase integration, authentication, and one-click deployment.", link: "/sub-services/lovable-development" },
      { title: "Bolt.new", description: "AI-powered full-stack development in the browser. Instantly scaffold, edit, and deploy Node.js and React applications.", link: "/sub-services/bolt-development" },
      { title: "Replit Agent", description: "Describe your app idea and let Replit's AI agent build, test, and deploy it — complete with database and hosting.", link: "/sub-services/replit-development" },
      { title: "Cursor AI", description: "AI-first code editor that accelerates professional development with intelligent autocomplete, debugging, and refactoring.", link: "/sub-services/cursor-development" },
      { title: "V0 by Vercel", description: "Generate beautiful React UI components from text prompts and screenshots, powered by AI and ready for production.", link: "/sub-services/v0-development" },
      { title: "Firebase Studio", description: "Google's AI-powered app builder with integrated backend services, real-time database, and cloud functions.", link: "/sub-services/firebase-studio" },
    ],
    benefits: ["10x faster development", "Lower development costs", "No-code to pro-code flexibility", "Built-in deployment & hosting", "AI-assisted debugging", "Rapid prototyping & iteration"],
    process: [
      { step: "Requirements & Planning", description: "Define app features, user flows, and technical requirements with our AI strategists." },
      { step: "Platform Selection", description: "Choose the best AI platform based on your app's complexity, scale, and integration needs." },
      { step: "AI-Powered Development", description: "Build your app using AI tools with expert human oversight for quality and architecture." },
      { step: "Testing & Launch", description: "Comprehensive testing, performance optimization, and production deployment." },
    ],
  },
  "ai-website": {
    title: "Build Website Using AI",
    subtitle: "Launch stunning websites in hours, not weeks",
    description: "Create professional, conversion-optimized websites using AI website builders and CMS platforms. From landing pages to full business sites — AI handles design, copy, and SEO.",
    features: [
      { title: "WordPress + AI Tools", description: "Combine WordPress's flexibility with AI plugins for content generation, design, and SEO optimization at scale.", link: "/sub-services/wordpress-ai" },
      { title: "Framer", description: "Design and publish responsive websites with AI-powered layouts, animations, and CMS — no coding required.", link: "/sub-services/framer-development" },
      { title: "Webflow + AI", description: "Visual web development platform enhanced with AI for faster design, content creation, and SEO optimization.", link: "/sub-services/webflow-development" },
      { title: "Wix AI Website Builder", description: "Create personalized websites instantly with Wix's AI that generates design, content, and structure from a brief.", link: "/sub-services/wix-ai" },
      { title: "Hostinger AI Builder", description: "Generate complete business websites with AI-written copy, stock images, and SEO — ready in minutes.", link: "/sub-services/hostinger-ai" },
      { title: "Durable AI", description: "The fastest AI website builder — generate a complete business website with copy, images, and contact forms in 30 seconds.", link: "/sub-services/durable-ai" },
    ],
    benefits: ["Launch in hours, not weeks", "AI-generated SEO content", "Professional designs without designers", "Built-in mobile responsiveness", "Integrated analytics & forms", "Easy content management"],
    process: [
      { step: "Discovery & Branding", description: "Understand your business, audience, and brand identity to guide AI generation." },
      { step: "AI Site Generation", description: "Generate website structure, design, and content using the best-fit AI platform." },
      { step: "Customization & Refinement", description: "Fine-tune design, add custom features, and optimize for conversions and SEO." },
      { step: "Launch & Support", description: "Deploy your site with analytics, domain setup, and ongoing maintenance support." },
    ],
  },
  "ai-content": {
    title: "AI Content Generation",
    subtitle: "Create engaging content at scale with AI",
    description: "Harness the power of GPT-4 and advanced AI models to generate high-quality content for blogs, social media, product descriptions, and more at unprecedented speed and scale.",
    features: [
      { title: "AI Blog Post Generation", description: "Create comprehensive, SEO-optimized blog posts in minutes, not hours.", link: "/sub-services/ai-blog-generation" },
      { title: "Product Description Writing", description: "Generate compelling product descriptions that convert browsers into buyers.", link: "/sub-services/product-descriptions" },
      { title: "Social Media Copy", description: "Create engaging social media posts tailored to each platform and audience.", link: "/sub-services/social-media-copy" },
      { title: "Email Campaign Content", description: "Generate personalized email sequences that nurture leads and drive sales.", link: "/sub-services/email-content" },
      { title: "Ad Copy Generation", description: "Create multiple ad variations for A/B testing across all platforms.", link: "/sub-services/ad-copy-generation" },
      { title: "Content Localization", description: "Translate and adapt content for different markets and languages using AI.", link: "/sub-services/content-localization" },
    ],
    benefits: ["10x content production speed", "Consistent quality", "Multiple variations for testing", "Lower content costs", "Scalable to any volume", "Multilingual capabilities"],
    process: [
      { step: "Brief & Guidelines", description: "Define content goals, tone, style, and brand guidelines." },
      { step: "AI Generation", description: "Generate content using advanced AI models trained on your requirements." },
      { step: "Quality Review", description: "Human editors review and refine AI output for quality and accuracy." },
      { step: "Performance Analysis", description: "Track content performance and optimize AI parameters for better results." },
    ],
  },
  "ai-design": {
    title: "AI Design Studio",
    subtitle: "Generate stunning visuals with AI creativity",
    description: "Create professional-quality images, graphics, and brand assets using cutting-edge AI image generation technology that brings your creative vision to life in seconds.",
    features: [
      { title: "AI Image Generation", description: "Generate unique, high-quality images from text descriptions for any purpose.", link: "/sub-services/ai-image-generation" },
      { title: "Brand Asset Creation", description: "Create logos, icons, and visual brand elements using AI-powered design tools.", link: "/sub-services/brand-assets" },
      { title: "Ad Creative Generation", description: "Generate multiple ad creative variations for A/B testing at scale.", link: "/sub-services/ad-creatives" },
      { title: "Social Media Graphics", description: "Create eye-catching graphics optimized for each social platform.", link: "/sub-services/social-graphics" },
      { title: "Product Photography AI", description: "Generate professional product images without expensive photoshoots.", link: "/sub-services/product-photography" },
      { title: "Style Consistency", description: "Maintain consistent visual style across all generated assets using custom AI models.", link: "/sub-services/style-consistency" },
    ],
    benefits: ["Instant creative variations", "Lower design costs", "Unlimited revisions", "Consistent brand style", "No stock photo fees", "Unique custom visuals"],
    process: [
      { step: "Creative Brief", description: "Define visual style, brand guidelines, and creative requirements." },
      { step: "AI Model Training", description: "Fine-tune AI models on your brand's visual identity and preferences." },
      { step: "Generation & Selection", description: "Generate multiple options and select the best variations." },
      { step: "Refinement & Delivery", description: "Refine selected designs and deliver in all required formats." },
    ],
  },
  "ai-automation": {
    title: "AI Automation & Workflows",
    subtitle: "Automate repetitive tasks with intelligent AI",
    description: "Free your team from manual work by implementing AI-powered automation that handles routine tasks, processes data, and makes intelligent decisions 24/7.",
    features: [
      { title: "Task Automation", description: "Automate repetitive business tasks using AI that learns from your processes.", link: "/sub-services/task-automation" },
      { title: "Smart Workflow Management", description: "Build intelligent workflows that adapt based on data and conditions.", link: "/sub-services/workflow-management" },
      { title: "Document Processing AI", description: "Extract and process information from documents automatically using AI.", link: "/sub-services/document-processing" },
      { title: "Predictive Analytics", description: "Use machine learning to forecast trends and make data-driven decisions.", link: "/sub-services/predictive-analytics" },
      { title: "Email & Communication Automation", description: "Automate email responses, categorization, and follow-ups with AI.", link: "/sub-services/email-automation" },
      { title: "Integration & API Automation", description: "Connect systems and automate data flow between tools using AI logic.", link: "/sub-services/integration-automation" },
    ],
    benefits: ["80%+ time savings", "Reduce human error", "24/7 operation", "Scale without hiring", "Faster decision making", "Consistent execution"],
    process: [
      { step: "Process Mapping", description: "Identify repetitive tasks and processes suitable for automation." },
      { step: "Automation Design", description: "Design intelligent workflows with AI decision-making capabilities." },
      { step: "Implementation", description: "Build and deploy automation systems integrated with your tools." },
      { step: "Monitor & Optimize", description: "Track performance and continuously improve automation effectiveness." },
    ],
  },
  "ai-social-management": {
    title: "AI Social Media Management",
    subtitle: "Automate scheduling, content creation, and analytics across all social platforms",
    description: "Let AI handle the heavy lifting of social media management. From intelligent content scheduling and automated post creation to real-time analytics and engagement optimization — grow your social presence on autopilot.",
    features: [
      { title: "AI Content Scheduling", description: "AI analyzes your audience behavior and automatically schedules posts at optimal times for maximum reach and engagement.", link: "/sub-services/ai-content-scheduling" },
      { title: "Smart Caption & Hashtag Generation", description: "Generate on-brand captions, hashtags, and CTAs using AI trained on your voice and industry trends.", link: "/sub-services/ai-caption-generation" },
      { title: "Auto-Engagement & Replies", description: "AI monitors comments and DMs, drafts on-brand replies, and engages with followers to maintain active community presence.", link: "/sub-services/ai-auto-engagement" },
      { title: "Cross-Platform Analytics", description: "Unified dashboards powered by AI that surface actionable insights, top-performing content, and growth opportunities across all platforms.", link: "/sub-services/ai-social-analytics" },
    ],
    benefits: ["Save 20+ hours per week", "Post at optimal times automatically", "AI-generated captions & hashtags", "Unified cross-platform analytics", "Automated community engagement", "Data-driven content strategy"],
    process: [
      { step: "Platform Audit", description: "Analyze current social presence, content performance, and audience demographics." },
      { step: "AI Setup & Training", description: "Configure AI tools with your brand voice, content pillars, and engagement guidelines." },
      { step: "Content Automation", description: "Launch AI-powered scheduling, content generation, and engagement workflows." },
      { step: "Optimize & Scale", description: "Continuously refine AI models based on performance data and scale winning strategies." },
    ],
  },
  "ai-data-intelligence": {
    title: "AI Data Intelligence",
    subtitle: "Transform raw data into actionable business insights with AI analytics",
    description: "Unlock the full potential of your business data with AI-powered analytics, predictive modeling, and intelligent dashboards that drive smarter decisions and faster growth.",
    features: [
      { title: "AI-Powered Dashboards", description: "Custom dashboards that surface key metrics, trends, and anomalies automatically using machine learning.", link: "/sub-services/ai-dashboards" },
      { title: "Predictive Business Modeling", description: "Forecast revenue, churn, demand, and market trends with AI models trained on your data.", link: "/sub-services/predictive-modeling" },
      { title: "Customer Data Platform", description: "Unify customer data from all touchpoints for 360-degree views and personalized experiences.", link: "/sub-services/customer-data-platform" },
      { title: "Automated Reporting", description: "Generate comprehensive reports automatically with AI-written insights and recommendations.", link: "/sub-services/ai-automated-reporting" },
    ],
    benefits: ["Data-driven decision making", "Predict trends before competitors", "Unified customer view", "Automated insight generation", "Reduce analysis time by 90%", "Identify hidden opportunities"],
    process: [
      { step: "Data Audit", description: "Assess current data sources, quality, and integration capabilities." },
      { step: "Architecture Design", description: "Design data pipelines, models, and visualization layers." },
      { step: "AI Model Training", description: "Train predictive models on your historical data for accurate forecasting." },
      { step: "Dashboard & Automation", description: "Deploy intelligent dashboards and automated reporting workflows." },
    ],
  },
  "ai-reputation": {
    title: "AI Reputation Management",
    subtitle: "Monitor, protect, and improve your online reputation with AI",
    description: "Stay on top of what people say about your brand across the internet. AI-powered tools monitor reviews, social mentions, and news — alerting you instantly and helping you respond strategically.",
    features: [
      { title: "Review Monitoring & Response", description: "Track reviews across Google, Yelp, Trustpilot, and 100+ platforms with AI-suggested responses.", link: "/sub-services/review-monitoring" },
      { title: "Sentiment Analysis", description: "AI analyzes the tone and emotion behind every mention to gauge public perception in real time.", link: "/sub-services/sentiment-analysis" },
      { title: "Brand Alert System", description: "Get instant alerts when your brand is mentioned online — positive, negative, or neutral.", link: "/sub-services/brand-alerts" },
      { title: "Response Automation", description: "AI drafts professional, on-brand responses to reviews and mentions for your approval.", link: "/sub-services/response-automation" },
    ],
    benefits: ["Real-time brand monitoring", "Faster crisis response", "Improved review ratings", "AI-powered response drafting", "Competitive reputation tracking", "Data-driven reputation strategy"],
    process: [
      { step: "Reputation Audit", description: "Analyze current online reputation across all platforms and channels." },
      { step: "Monitoring Setup", description: "Configure AI monitoring for reviews, mentions, and brand keywords." },
      { step: "Response Strategy", description: "Develop response templates and escalation workflows." },
      { step: "Ongoing Management", description: "Continuous monitoring, reporting, and reputation improvement." },
    ],
  },
  "programmatic-seo": {
    title: "Programmatic SEO",
    subtitle: "Scale organic traffic with AI-generated pages targeting thousands of keywords",
    description: "Programmatic SEO uses AI and automation to create hundreds or thousands of optimized landing pages targeting long-tail keywords — driving massive organic traffic at scale without manual content creation.",
    features: [
      { title: "Template-Based Page Generation", description: "Design dynamic templates that auto-populate with keyword-specific content, data, and structured markup.", link: "/sub-services/template-pages" },
      { title: "Dynamic Content Generation", description: "AI generates unique, relevant content for each page variant ensuring no duplicate content penalties.", link: "/sub-services/dynamic-content" },
      { title: "Keyword Clustering at Scale", description: "AI identifies and groups thousands of related keywords into targetable clusters for page generation.", link: "/sub-services/keyword-clustering-scale" },
      { title: "Automated Internal Linking", description: "Smart internal linking algorithms ensure proper link equity distribution across all generated pages.", link: "/sub-services/auto-internal-linking" },
    ],
    benefits: ["Scale to 10,000+ pages", "Target long-tail keywords", "Automated content creation", "Consistent SEO optimization", "Massive organic traffic growth", "Lower cost per page"],
    process: [
      { step: "Keyword Research at Scale", description: "Identify thousands of targetable keywords with search volume and intent data." },
      { step: "Template Design", description: "Create flexible page templates with dynamic content zones and SEO elements." },
      { step: "Content Generation", description: "AI generates unique content for each page variant at scale." },
      { step: "Launch & Monitor", description: "Deploy pages, monitor indexing, and optimize based on ranking data." },
    ],
  },
  "influencer-marketing": {
    title: "Influencer Marketing",
    subtitle: "Amplify your reach with strategic influencer partnerships",
    description: "Connect with influential voices that resonate with your target audience. We manage end-to-end influencer campaigns from discovery to performance tracking.",
    features: [
      { title: "Influencer Discovery & Vetting", description: "Identify and evaluate influencers aligned with your brand values and audience.", link: "/sub-services/influencer-discovery" },
      { title: "Campaign Strategy & Management", description: "Design and execute influencer campaigns that drive awareness and conversions.", link: "/sub-services/influencer-campaigns" },
      { title: "Content Collaboration", description: "Coordinate authentic content creation that resonates with both your brand and influencer audiences.", link: "/sub-services/influencer-content" },
      { title: "Performance Tracking", description: "Monitor campaign performance with detailed analytics and ROI measurement.", link: "/sub-services/influencer-tracking" },
    ],
    benefits: ["Authentic brand advocacy", "Expanded reach", "Higher engagement rates", "Social proof", "Targeted audience access", "Cost-effective compared to traditional ads"],
    process: [
      { step: "Audience & Goal Alignment", description: "Define target audience and campaign objectives." },
      { step: "Influencer Selection", description: "Identify and vet influencers matching your criteria." },
      { step: "Campaign Execution", description: "Coordinate content creation and posting schedules." },
      { step: "Measure & Report", description: "Track performance and provide detailed ROI analysis." },
    ],
  },
  "video-marketing": {
    title: "Video Marketing",
    subtitle: "Engage audiences with compelling video content",
    description: "Create professional video content that tells your brand story, showcases products, and drives engagement across all digital platforms.",
    features: [
      { title: "Video Production", description: "Full-service video production from scripting to final editing.", link: "/sub-services/video-production-full" },
      { title: "Explainer Videos", description: "Simplify complex concepts with engaging animated or live-action explainers.", link: "/sub-services/explainer-videos" },
      { title: "Social Video Strategy", description: "Platform-optimized videos for Instagram, TikTok, YouTube, and LinkedIn.", link: "/sub-services/social-video" },
      { title: "Video SEO & Distribution", description: "Optimize videos for search and distribute across relevant channels.", link: "/sub-services/video-seo" },
    ],
    benefits: ["Higher engagement than text", "Improved brand recall", "Better conversion rates", "Shareable content", "Multi-platform distribution", "Enhanced storytelling"],
    process: [
      { step: "Concept Development", description: "Define video goals, messaging, and creative approach." },
      { step: "Production", description: "Professional filming, animation, or screen recording." },
      { step: "Post-Production", description: "Editing, color grading, sound design, and final delivery." },
      { step: "Distribution & Optimization", description: "Publish across platforms and optimize for performance." },
    ],
  },
  "local-seo": {
    title: "Local SEO",
    subtitle: "Dominate local search results in your area",
    description: "Optimize your online presence to attract more customers from local searches. Perfect for businesses serving specific geographic areas.",
    features: [
      { title: "Google Business Profile Optimization", description: "Optimize your GBP listing for maximum local visibility.", link: "/sub-services/gbp-optimization" },
      { title: "Local Citation Building", description: "Build consistent NAP citations across top local directories.", link: "/sub-services/local-citations" },
      { title: "Location Page Optimization", description: "Create and optimize location-specific pages for multi-location businesses.", link: "/sub-services/location-pages" },
      { title: "Local Review Management", description: "Monitor, respond to, and generate more positive reviews.", link: "/sub-services/review-management" },
    ],
    benefits: ["Appear in local map pack", "Increased foot traffic", "Higher conversion rates", "Better local visibility", "Competitive advantage", "Trust building"],
    process: [
      { step: "Local Audit", description: "Analyze current local presence and competitor landscape." },
      { step: "Profile Optimization", description: "Optimize GBP and other local listings." },
      { step: "Citation Building", description: "Build and clean up local directory listings." },
      { step: "Review Strategy", description: "Implement review generation and management system." },
    ],
  },
  "reputation-management": {
    title: "Online Reputation Management",
    subtitle: "Protect and enhance your brand reputation",
    description: "Monitor, manage, and improve your online reputation across all platforms. Build trust and credibility with strategic reputation management.",
    features: [
      { title: "Review Monitoring & Response", description: "Monitor reviews across all platforms and respond professionally.", link: "/sub-services/review-monitoring" },
      { title: "Negative Content Suppression", description: "Push down negative content with positive SEO-optimized content.", link: "/sub-services/content-suppression" },
      { title: "Brand Mention Tracking", description: "Track and respond to brand mentions across social media and web.", link: "/sub-services/brand-monitoring" },
      { title: "Crisis Management", description: "Rapid response protocols for managing reputation crises.", link: "/sub-services/crisis-management" },
    ],
    benefits: ["Protect brand image", "Increase trust", "Better customer perception", "Improved search results", "Crisis preparedness", "Competitive advantage"],
    process: [
      { step: "Reputation Audit", description: "Assess current online reputation and identify issues." },
      { step: "Strategy Development", description: "Create comprehensive reputation management plan." },
      { step: "Implementation", description: "Execute monitoring, response, and content strategies." },
      { step: "Ongoing Management", description: "Continuously monitor and improve online reputation." },
    ],
  },
  "marketing-automation": {
    title: "Marketing Automation",
    subtitle: "Scale your marketing with intelligent automation",
    description: "Automate repetitive marketing tasks, nurture leads, and deliver personalized experiences at scale with advanced marketing automation platforms.",
    features: [
      { title: "Automated Lead Nurturing", description: "Create automated workflows that nurture leads through the sales funnel.", link: "/sub-services/lead-nurturing" },
      { title: "Email Automation", description: "Set up triggered email sequences based on user behavior and preferences.", link: "/sub-services/email-automation-full" },
      { title: "Multi-Channel Campaigns", description: "Coordinate messaging across email, SMS, social, and web.", link: "/sub-services/multichannel-automation" },
      { title: "Lead Scoring & Segmentation", description: "Automatically score and segment leads for targeted marketing.", link: "/sub-services/lead-scoring" },
    ],
    benefits: ["Save time on repetitive tasks", "Personalize at scale", "Improve lead quality", "Increase conversions", "Better customer experience", "Data-driven decisions"],
    process: [
      { step: "Platform Selection", description: "Choose and set up the right automation platform." },
      { step: "Workflow Design", description: "Map out customer journeys and automated workflows." },
      { step: "Integration", description: "Connect with CRM, email, and other marketing tools." },
      { step: "Optimize & Scale", description: "Monitor performance and continuously optimize workflows." },
    ],
  },
  "crm-integration": {
    title: "CRM Integration & Management",
    subtitle: "Centralize customer data for better relationships",
    description: "Implement and optimize CRM systems that give you a complete view of customer interactions and enable data-driven decision making.",
    features: [
      { title: "CRM Implementation", description: "Set up and configure CRM platforms like Salesforce, HubSpot, or Zoho.", link: "/sub-services/crm-setup" },
      { title: "Marketing-Sales Alignment", description: "Connect marketing and sales data for seamless handoffs.", link: "/sub-services/marketing-sales-sync" },
      { title: "Data Migration", description: "Safely migrate customer data from legacy systems to new CRM.", link: "/sub-services/data-migration" },
      { title: "Custom Integrations", description: "Integrate CRM with other business tools and platforms.", link: "/sub-services/custom-crm-integration" },
    ],
    benefits: ["360° customer view", "Better lead management", "Improved team collaboration", "Data-driven insights", "Automated workflows", "Higher productivity"],
    process: [
      { step: "Requirements Analysis", description: "Understand business needs and select appropriate CRM." },
      { step: "Configuration", description: "Set up CRM with custom fields, workflows, and dashboards." },
      { step: "Integration", description: "Connect with existing marketing and business tools." },
      { step: "Training & Support", description: "Train team and provide ongoing support." },
    ],
  },
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const [dialogOpen, setDialogOpen] = useState(false);
  
  const foundService = serviceData[slug || ""] || additionalServices[slug || ""];
  
  // Determine which FAQ set to use based on service slug
  let faqItems = [];
  if (slug === "seo") {
    faqItems = seoServiceFAQs;
  } else if (slug === "content-marketing") {
    faqItems = contentMarketingFAQs;
  } else if (slug === "performance-marketing") {
    faqItems = ppcFAQs;
  } else if (slug === "social-media") {
    faqItems = socialMediaFAQs;
  } else {
    // Default FAQs for other services
    faqItems = [
      {
        question: `What is included in ${foundService?.title || "this"} service?`,
        answer: "Our service includes comprehensive strategy development, implementation, ongoing optimization, and detailed reporting. We customize our approach based on your specific business needs and goals."
      },
      {
        question: "How long does it take to see results?",
        answer: "Results timelines vary depending on the service and your current situation. We typically see initial improvements within the first month, with significant progress by month 3-6. We provide regular updates and transparent reporting throughout."
      },
      {
        question: "What makes your approach different?",
        answer: "We combine AI-powered tools with human expertise, data-driven strategies with creative thinking, and proven methodologies with innovative techniques. Our focus is on measurable results and long-term sustainable growth."
      },
      {
        question: "Do you require long-term contracts?",
        answer: "We offer flexible engagement options including monthly retainers and project-based work. While we recommend at least 3-6 months for optimal results, we don't lock you into rigid long-term contracts."
      },
      {
        question: "How do you measure success?",
        answer: "We track relevant KPIs specific to your goals - whether that's traffic, leads, conversions, revenue, or brand awareness. You'll receive detailed reports with clear insights and actionable recommendations."
      }
    ];
  }
  
  const service = foundService || {
    title: "Service Not Found",
    subtitle: "Coming soon",
    description: "Expert solutions tailored to your business needs with proven results.",
    features: [
      { title: "Expert Strategy", description: "Customized approach for your unique requirements." },
      { title: "Proven Results", description: "Track record of measurable outcomes." },
      { title: "Continuous Support", description: "Ongoing optimization for sustained success." },
      { title: "Latest Technology", description: "Cutting-edge tools for maximum efficiency." },
    ],
    benefits: ["Achieve objectives faster", "Improve efficiency", "Maximize ROI", "Stay competitive", "Expert insights", "Scale effectively"],
    process: [
      { step: "Discovery", description: "Learn about your business and goals." },
      { step: "Strategy", description: "Develop comprehensive plan." },
      { step: "Execution", description: "Implement with precision." },
      { step: "Optimization", description: "Continuously improve performance." },
    ],
  };
  
  // Add default values for missing properties
  if (!service.description) {
    service.description = "Expert solutions tailored to your business needs with proven results.";
  }
  if (!service.benefits) {
    service.benefits = ["Achieve objectives faster", "Improve efficiency", "Maximize ROI", "Stay competitive", "Expert insights", "Scale effectively"];
  }
  if (!service.process) {
    service.process = [
      { step: "Discovery", description: "Learn about your business and goals." },
      { step: "Strategy", description: "Develop comprehensive plan." },
      { step: "Execution", description: "Implement with precision." },
      { step: "Optimization", description: "Continuously improve performance." },
    ];
  }

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={`${service.title} Services | Revenuxe`}
        description={service.description}
        canonicalUrl={`https://revenuxe.com/services/${slug}`}
        ogImage="https://revenuxe.com/og-service.png"
      />
      <Navigation />
      <PageHero
        title={service.title}
        subtitle={service.subtitle}
      >
        <Button size="lg" className="mt-6" onClick={() => setDialogOpen(true)}>
          Get Started <ArrowRight className="ml-2" />
        </Button>
      </PageHero>
      <main>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">What We <span className="text-primary">Offer</span></h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {service.features?.map((f: any, i: number) => (
                <div key={i} className="bg-card border rounded-lg p-6 hover:border-primary/50 transition relative group">
                  <h3 className="text-2xl font-bold mb-3 pr-16">{f.title}</h3>
                  <p className="text-muted-foreground mb-4">{f.description}</p>
                  {f.link && (
                    <Link to={f.link} className="absolute top-6 right-6">
                      <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12"><span className="text-primary">Benefits</span> You'll Get</h2>
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

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4">Calculate Your <span className="text-primary">ROI</span></h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Estimate your potential returns based on your budget and industry.
            </p>
            <div className="max-w-md mx-auto">
              <ROICalculator serviceType={slug || "seo"} />
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Our <span className="text-primary">Process</span></h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {service.process?.map((p: any, i: number) => (
                <div key={i} className="bg-primary/10 border-2 border-primary rounded-lg p-6">
                  <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">{i + 1}</div>
                  <h3 className="text-xl font-bold mb-2">{p.step}</h3>
                  <p className="text-muted-foreground text-sm">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {faqItems.length > 0 && <FAQ items={faqItems} />}

        <section className="py-20 bg-gradient-to-br from-primary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Get <span className="text-primary">Started?</span></h2>
            <p className="text-muted-foreground text-lg mb-8">Let's discuss how we can help you achieve your goals.</p>
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

export default ServiceDetail;
