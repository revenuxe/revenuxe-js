export type TechnologyPage = {
  slug: string;
  name: string;
  eyebrow: string;
  summary: string;
  revenuxeHelp: string;
  useCases: string[];
  outcomes: string[];
};

export const technologyPages: TechnologyPage[] = [
  {
    slug: "nextjs",
    name: "Next.js",
    eyebrow: "Full-stack React framework",
    summary:
      "Next.js gives modern products a fast, scalable foundation for server-rendered pages, dashboards, APIs, and production deployments.",
    revenuxeHelp:
      "Revenuxe uses Next.js to build high-performance SaaS products, startup MVPs, enterprise websites, and web applications that need speed, clean architecture, and reliable SEO-ready rendering.",
    useCases: ["SaaS dashboards", "Product websites", "Admin portals", "Server actions and APIs"],
    outcomes: ["Fast page loads", "Scalable routing", "Production-ready deployment", "Maintainable codebases"],
  },
  {
    slug: "react",
    name: "React",
    eyebrow: "Interactive product interfaces",
    summary:
      "React is the interface layer for complex web applications, reusable components, and app-like product experiences.",
    revenuxeHelp:
      "Revenuxe designs and engineers React interfaces that feel polished, responsive, and easy to extend as your product grows from MVP to mature platform.",
    useCases: ["Interactive dashboards", "Customer portals", "Data-heavy interfaces", "Design systems"],
    outcomes: ["Reusable UI", "Faster iteration", "Consistent product experience", "Cleaner frontend architecture"],
  },
  {
    slug: "typescript",
    name: "TypeScript",
    eyebrow: "Typed software foundations",
    summary:
      "TypeScript improves reliability by catching errors earlier and making large codebases easier to understand, refactor, and scale.",
    revenuxeHelp:
      "Revenuxe uses TypeScript across frontend and backend layers to keep SaaS platforms, AI features, and custom software safer as complexity increases.",
    useCases: ["Large web apps", "Shared types", "API contracts", "Refactoring legacy code"],
    outcomes: ["Fewer runtime bugs", "Clearer code", "Safer releases", "Better developer velocity"],
  },
  {
    slug: "supabase",
    name: "Supabase",
    eyebrow: "Backend platform for fast builds",
    summary:
      "Supabase provides authentication, databases, storage, edge functions, and real-time features for modern product development.",
    revenuxeHelp:
      "Revenuxe uses Supabase to launch secure MVPs and scalable web apps faster, while still keeping the architecture clean enough for long-term product evolution.",
    useCases: ["Authentication", "Realtime apps", "File storage", "Role-based dashboards"],
    outcomes: ["Faster backend delivery", "Secure user management", "Lower infrastructure overhead", "PostgreSQL-backed data"],
  },
  {
    slug: "postgresql",
    name: "PostgreSQL",
    eyebrow: "Reliable product data layer",
    summary:
      "PostgreSQL is a proven database for structured product data, reporting, permissions, transactions, and scalable business workflows.",
    revenuxeHelp:
      "Revenuxe models PostgreSQL databases around real product behavior, so your SaaS app, platform, or internal system has a durable foundation from day one.",
    useCases: ["Multi-tenant data", "Reporting", "Transactional workflows", "Product analytics"],
    outcomes: ["Strong data integrity", "Flexible querying", "Scalable schemas", "Reliable business logic"],
  },
  {
    slug: "aws",
    name: "AWS",
    eyebrow: "Cloud infrastructure",
    summary:
      "AWS supports scalable hosting, storage, compute, networking, and deployment workflows for software that needs room to grow.",
    revenuxeHelp:
      "Revenuxe helps teams plan and implement AWS-backed infrastructure for web applications, APIs, background jobs, storage, and production environments.",
    useCases: ["Cloud hosting", "Object storage", "API infrastructure", "Deployment pipelines"],
    outcomes: ["Scalable infrastructure", "Stronger reliability", "Cloud-ready architecture", "Better operational control"],
  },
  {
    slug: "ai",
    name: "AI",
    eyebrow: "Intelligent product systems",
    summary:
      "AI adds automation, reasoning, search, summarization, and intelligent assistance directly into software products and workflows.",
    revenuxeHelp:
      "Revenuxe builds AI software systems that connect language models with your data, tools, and user workflows instead of treating AI as a disconnected add-on.",
    useCases: ["AI assistants", "Knowledge search", "Workflow automation", "Data extraction"],
    outcomes: ["Smarter products", "Reduced manual work", "Better user experiences", "Automated internal operations"],
  },
  {
    slug: "stripe",
    name: "Stripe",
    eyebrow: "Payments and subscriptions",
    summary:
      "Stripe powers payments, subscriptions, invoicing, checkout, billing portals, and revenue workflows for SaaS products.",
    revenuxeHelp:
      "Revenuxe integrates Stripe into SaaS platforms with pricing plans, checkout flows, subscription management, webhooks, and billing logic built for production.",
    useCases: ["SaaS subscriptions", "Checkout flows", "Billing portals", "Webhook automation"],
    outcomes: ["Reliable payments", "Subscription-ready products", "Automated billing", "Cleaner revenue operations"],
  },
];

export const getTechnologyPage = (slug: string) =>
  technologyPages.find((technology) => technology.slug === slug);
