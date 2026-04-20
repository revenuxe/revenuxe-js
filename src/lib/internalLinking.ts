export type InternalLinkItem = {
  href: string;
  title: string;
  description?: string;
};

export const coreServiceLinks: InternalLinkItem[] = [
  {
    href: "/services/seo",
    title: "SEO Optimization",
    description: "Technical SEO, on-page improvements, keyword strategy, and authority growth.",
  },
  {
    href: "/services/performance-marketing",
    title: "Performance Marketing",
    description: "Google Ads, Meta Ads, retargeting, and conversion-led paid growth.",
  },
  {
    href: "/services/social-media",
    title: "Social Media Marketing",
    description: "Content, community, and paid social campaigns across key platforms.",
  },
  {
    href: "/services/ai-webapp",
    title: "Build Web App Using AI",
    description: "AI-assisted app development for faster launches and lower build time.",
  },
  {
    href: "/services/ai-website",
    title: "Build Website Using AI",
    description: "AI-led website builds for businesses that want speed and flexibility.",
  },
  {
    href: "/services/landing-pages",
    title: "Landing Pages",
    description: "Conversion-focused landing pages for paid campaigns and lead generation.",
  },
  {
    href: "/services/migration",
    title: "Migration",
    description: "Migrate React, Vite, and SPA websites to Next.js for SSR, SEO, and long-term growth.",
  },
];

export const supportingServiceLinks: InternalLinkItem[] = [
  { href: "/sub-services/google-ads", title: "Google Ads Management" },
  { href: "/sub-services/meta-ads", title: "Meta Ads" },
  { href: "/sub-services/technical-seo", title: "Technical SEO" },
  { href: "/sub-services/keyword-strategy", title: "Keyword Strategy" },
  { href: "/sub-services/conversion-optimization", title: "Conversion Optimization" },
  { href: "/sub-services/content-planning", title: "Content Planning" },
  { href: "/sub-services/platform-optimization", title: "Platform Optimization" },
  { href: "/sub-services/lead-forms", title: "Lead Capture Forms" },
];

type ServiceRelationship = {
  relatedServices: InternalLinkItem[];
  supportingSubServices: InternalLinkItem[];
};

const serviceLinkLookup = Object.fromEntries(
  coreServiceLinks.map((link) => [link.href.split("/").pop() || "", link]),
) as Record<string, InternalLinkItem>;

export const serviceRelationships: Record<string, ServiceRelationship> = {
  seo: {
    relatedServices: [
      serviceLinkLookup["performance-marketing"],
      serviceLinkLookup["landing-pages"],
      serviceLinkLookup["social-media"],
    ],
    supportingSubServices: [
      {
        href: "/sub-services/technical-seo",
        title: "Technical SEO",
        description: "Fix crawl, speed, indexing, and site architecture issues.",
      },
      {
        href: "/sub-services/keyword-strategy",
        title: "Keyword Strategy",
        description: "Target commercial and informational demand with smarter keyword clusters.",
      },
      {
        href: "/sub-services/on-page-seo",
        title: "On-Page Optimization",
        description: "Strengthen titles, internal links, content structure, and relevance signals.",
      },
      {
        href: "/sub-services/link-building",
        title: "Quality Link Building",
        description: "Earn authority and trust with scalable link acquisition strategies.",
      },
    ],
  },
  "performance-marketing": {
    relatedServices: [
      serviceLinkLookup["landing-pages"],
      serviceLinkLookup["seo"],
      serviceLinkLookup["social-media"],
    ],
    supportingSubServices: [
      {
        href: "/sub-services/google-ads",
        title: "Google Ads Excellence",
        description: "Search, Shopping, YouTube, and Performance Max campaign management.",
      },
      {
        href: "/sub-services/meta-ads",
        title: "Meta Ads Mastery",
        description: "Reach audiences on Facebook and Instagram with conversion-focused media buying.",
      },
      {
        href: "/sub-services/retargeting",
        title: "Advanced Retargeting",
        description: "Reconnect with high-intent visitors and recover lost conversions.",
      },
      {
        href: "/sub-services/conversion-optimization",
        title: "Conversion Optimization",
        description: "Improve lead quality and ROAS by optimizing pages and funnels.",
      },
    ],
  },
  "social-media": {
    relatedServices: [
      serviceLinkLookup["performance-marketing"],
      serviceLinkLookup["seo"],
      serviceLinkLookup["landing-pages"],
    ],
    supportingSubServices: [
      {
        href: "/sub-services/content-planning",
        title: "Strategic Content Planning",
        description: "Build a platform-ready content calendar tied to business goals.",
      },
      {
        href: "/sub-services/platform-optimization",
        title: "Platform Optimization",
        description: "Improve profile structure, posting formats, and organic reach.",
      },
      {
        href: "/sub-services/community-management",
        title: "Community Management",
        description: "Engage audiences and strengthen brand loyalty through daily interaction.",
      },
      {
        href: "/sub-services/paid-social",
        title: "Paid Social Campaigns",
        description: "Amplify reach and conversions with paid distribution on social platforms.",
      },
    ],
  },
  "ai-webapp": {
    relatedServices: [
      serviceLinkLookup["ai-website"],
      serviceLinkLookup["landing-pages"],
      serviceLinkLookup["seo"],
    ],
    supportingSubServices: [
      {
        href: "/sub-services/lovable-development",
        title: "Lovable Development",
        description: "Rapid AI-assisted full-stack app creation for MVPs and internal tools.",
      },
      {
        href: "/sub-services/bolt-development",
        title: "Bolt.new Development",
        description: "Browser-based AI app building for fast iteration and deployment.",
      },
      {
        href: "/sub-services/replit-development",
        title: "Replit Development",
        description: "Prompt-driven app creation with hosting and database workflows.",
      },
      {
        href: "/sub-services/cursor-development",
        title: "Cursor AI Development",
        description: "AI-accelerated coding workflows for production-grade web apps.",
      },
    ],
  },
  "ai-website": {
    relatedServices: [
      serviceLinkLookup["ai-webapp"],
      serviceLinkLookup["landing-pages"],
      serviceLinkLookup["seo"],
    ],
    supportingSubServices: [
      {
        href: "/sub-services/wordpress-ai",
        title: "WordPress + AI",
        description: "Flexible CMS-driven website builds enhanced with AI workflows.",
      },
      {
        href: "/sub-services/framer-development",
        title: "Framer Development",
        description: "High-design marketing sites with fast publishing and responsive layouts.",
      },
      {
        href: "/sub-services/webflow-development",
        title: "Webflow + AI",
        description: "Visual development for conversion-focused websites and CMS pages.",
      },
      {
        href: "/sub-services/wix-ai",
        title: "Wix AI Builder",
        description: "Quick website launches for small businesses that need simplicity and speed.",
      },
    ],
  },
  "landing-pages": {
    relatedServices: [
      serviceLinkLookup["performance-marketing"],
      serviceLinkLookup["seo"],
      serviceLinkLookup["ai-website"],
    ],
    supportingSubServices: [
      {
        href: "/sub-services/conversion-design",
        title: "Conversion-Focused Design",
        description: "Build layouts that guide attention and increase lead capture.",
      },
      {
        href: "/sub-services/ab-testing",
        title: "A/B Testing Setup",
        description: "Test offers, messaging, and layouts to improve conversion rates.",
      },
      {
        href: "/sub-services/lead-forms",
        title: "Lead Capture Forms",
        description: "Reduce friction in form fills and improve inquiry quality.",
      },
      {
        href: "/sub-services/landing-analytics",
        title: "Landing Page Analytics",
        description: "Track user behavior and conversion outcomes more accurately.",
      },
    ],
  },
  migration: {
    relatedServices: [
      serviceLinkLookup["ai-webapp"],
      serviceLinkLookup["ai-website"],
      serviceLinkLookup["seo"],
    ],
    supportingSubServices: [
      {
        href: "/services/ai-webapp",
        title: "Build Web App Using AI",
        description: "Plan post-migration product enhancements and feature expansion on a modern stack.",
      },
      {
        href: "/services/ai-website",
        title: "Build Website Using AI",
        description: "Refresh content, design systems, and publishing workflows after the migration is complete.",
      },
      {
        href: "/sub-services/technical-seo",
        title: "Technical SEO",
        description: "Strengthen crawlability, indexing, schema, and performance after the Next.js rebuild.",
      },
      {
        href: "/sub-services/conversion-optimization",
        title: "Conversion Optimization",
        description: "Improve funnels, forms, and landing page UX once the new architecture is live.",
      },
    ],
  },
};

type SubServiceRelationship = {
  parentService?: InternalLinkItem;
  siblingSubServices: InternalLinkItem[];
  relatedServices: InternalLinkItem[];
};

export const subServiceRelationships: Record<string, SubServiceRelationship> = {
  "technical-seo": {
    parentService: serviceLinkLookup["seo"],
    siblingSubServices: [
      { href: "/sub-services/keyword-strategy", title: "Keyword Strategy" },
      { href: "/sub-services/on-page-seo", title: "On-Page Optimization" },
      { href: "/sub-services/link-building", title: "Quality Link Building" },
    ],
    relatedServices: [serviceLinkLookup["seo"], serviceLinkLookup["landing-pages"], serviceLinkLookup["performance-marketing"]],
  },
  "keyword-strategy": {
    parentService: serviceLinkLookup["seo"],
    siblingSubServices: [
      { href: "/sub-services/technical-seo", title: "Technical SEO" },
      { href: "/sub-services/on-page-seo", title: "On-Page Optimization" },
      { href: "/sub-services/link-building", title: "Quality Link Building" },
    ],
    relatedServices: [serviceLinkLookup["seo"], serviceLinkLookup["content-marketing"] || serviceLinkLookup["landing-pages"], serviceLinkLookup["performance-marketing"]].filter(Boolean) as InternalLinkItem[],
  },
  "on-page-seo": {
    parentService: serviceLinkLookup["seo"],
    siblingSubServices: [
      { href: "/sub-services/technical-seo", title: "Technical SEO" },
      { href: "/sub-services/keyword-strategy", title: "Keyword Strategy" },
      { href: "/sub-services/link-building", title: "Quality Link Building" },
    ],
    relatedServices: [serviceLinkLookup["seo"], serviceLinkLookup["landing-pages"], serviceLinkLookup["performance-marketing"]],
  },
  "link-building": {
    parentService: serviceLinkLookup["seo"],
    siblingSubServices: [
      { href: "/sub-services/technical-seo", title: "Technical SEO" },
      { href: "/sub-services/keyword-strategy", title: "Keyword Strategy" },
      { href: "/sub-services/on-page-seo", title: "On-Page Optimization" },
    ],
    relatedServices: [serviceLinkLookup["seo"], serviceLinkLookup["social-media"], serviceLinkLookup["landing-pages"]],
  },
  "google-ads": {
    parentService: serviceLinkLookup["performance-marketing"],
    siblingSubServices: [
      { href: "/sub-services/meta-ads", title: "Meta Ads" },
      { href: "/sub-services/retargeting", title: "Advanced Retargeting" },
      { href: "/sub-services/conversion-optimization", title: "Conversion Optimization" },
    ],
    relatedServices: [serviceLinkLookup["performance-marketing"], serviceLinkLookup["landing-pages"], serviceLinkLookup["seo"]],
  },
  "meta-ads": {
    parentService: serviceLinkLookup["performance-marketing"],
    siblingSubServices: [
      { href: "/sub-services/google-ads", title: "Google Ads" },
      { href: "/sub-services/retargeting", title: "Advanced Retargeting" },
      { href: "/sub-services/conversion-optimization", title: "Conversion Optimization" },
    ],
    relatedServices: [serviceLinkLookup["performance-marketing"], serviceLinkLookup["social-media"], serviceLinkLookup["landing-pages"]],
  },
  "retargeting": {
    parentService: serviceLinkLookup["performance-marketing"],
    siblingSubServices: [
      { href: "/sub-services/google-ads", title: "Google Ads" },
      { href: "/sub-services/meta-ads", title: "Meta Ads" },
      { href: "/sub-services/conversion-optimization", title: "Conversion Optimization" },
    ],
    relatedServices: [serviceLinkLookup["performance-marketing"], serviceLinkLookup["landing-pages"], serviceLinkLookup["seo"]],
  },
  "conversion-optimization": {
    parentService: serviceLinkLookup["performance-marketing"],
    siblingSubServices: [
      { href: "/sub-services/google-ads", title: "Google Ads" },
      { href: "/sub-services/meta-ads", title: "Meta Ads" },
      { href: "/sub-services/retargeting", title: "Advanced Retargeting" },
    ],
    relatedServices: [serviceLinkLookup["performance-marketing"], serviceLinkLookup["landing-pages"], serviceLinkLookup["seo"]],
  },
  "content-planning": {
    parentService: serviceLinkLookup["social-media"],
    siblingSubServices: [
      { href: "/sub-services/platform-optimization", title: "Platform Optimization" },
      { href: "/sub-services/community-management", title: "Community Management" },
      { href: "/sub-services/paid-social", title: "Paid Social Campaigns" },
    ],
    relatedServices: [serviceLinkLookup["social-media"], serviceLinkLookup["performance-marketing"], serviceLinkLookup["seo"]],
  },
  "platform-optimization": {
    parentService: serviceLinkLookup["social-media"],
    siblingSubServices: [
      { href: "/sub-services/content-planning", title: "Content Planning" },
      { href: "/sub-services/community-management", title: "Community Management" },
      { href: "/sub-services/paid-social", title: "Paid Social Campaigns" },
    ],
    relatedServices: [serviceLinkLookup["social-media"], serviceLinkLookup["seo"], serviceLinkLookup["performance-marketing"]],
  },
  "community-management": {
    parentService: serviceLinkLookup["social-media"],
    siblingSubServices: [
      { href: "/sub-services/content-planning", title: "Content Planning" },
      { href: "/sub-services/platform-optimization", title: "Platform Optimization" },
      { href: "/sub-services/paid-social", title: "Paid Social Campaigns" },
    ],
    relatedServices: [serviceLinkLookup["social-media"], serviceLinkLookup["performance-marketing"], serviceLinkLookup["seo"]],
  },
  "paid-social": {
    parentService: serviceLinkLookup["social-media"],
    siblingSubServices: [
      { href: "/sub-services/content-planning", title: "Content Planning" },
      { href: "/sub-services/platform-optimization", title: "Platform Optimization" },
      { href: "/sub-services/community-management", title: "Community Management" },
    ],
    relatedServices: [serviceLinkLookup["social-media"], serviceLinkLookup["performance-marketing"], serviceLinkLookup["landing-pages"]],
  },
  "conversion-design": {
    parentService: serviceLinkLookup["landing-pages"],
    siblingSubServices: [
      { href: "/sub-services/ab-testing", title: "A/B Testing Setup" },
      { href: "/sub-services/lead-forms", title: "Lead Capture Forms" },
      { href: "/sub-services/landing-analytics", title: "Landing Page Analytics" },
    ],
    relatedServices: [serviceLinkLookup["landing-pages"], serviceLinkLookup["performance-marketing"], serviceLinkLookup["seo"]],
  },
  "ab-testing": {
    parentService: serviceLinkLookup["landing-pages"],
    siblingSubServices: [
      { href: "/sub-services/conversion-design", title: "Conversion-Focused Design" },
      { href: "/sub-services/lead-forms", title: "Lead Capture Forms" },
      { href: "/sub-services/landing-analytics", title: "Landing Page Analytics" },
    ],
    relatedServices: [serviceLinkLookup["landing-pages"], serviceLinkLookup["performance-marketing"], serviceLinkLookup["seo"]],
  },
  "lead-forms": {
    parentService: serviceLinkLookup["landing-pages"],
    siblingSubServices: [
      { href: "/sub-services/conversion-design", title: "Conversion-Focused Design" },
      { href: "/sub-services/ab-testing", title: "A/B Testing Setup" },
      { href: "/sub-services/landing-analytics", title: "Landing Page Analytics" },
    ],
    relatedServices: [serviceLinkLookup["landing-pages"], serviceLinkLookup["performance-marketing"], serviceLinkLookup["seo"]],
  },
  "landing-analytics": {
    parentService: serviceLinkLookup["landing-pages"],
    siblingSubServices: [
      { href: "/sub-services/conversion-design", title: "Conversion-Focused Design" },
      { href: "/sub-services/ab-testing", title: "A/B Testing Setup" },
      { href: "/sub-services/lead-forms", title: "Lead Capture Forms" },
    ],
    relatedServices: [serviceLinkLookup["landing-pages"], serviceLinkLookup["performance-marketing"], serviceLinkLookup["seo"]],
  },
};
