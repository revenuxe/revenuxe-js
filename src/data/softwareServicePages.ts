export type SoftwareServicePage = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  seoTitle: string;
  seoKeywords: string;
  intro: string;
  revenuxeHelp: string;
  deliverables: string[];
  builtFor: string[];
  process: { step: string; description: string }[];
  outcomes: string[];
  related: string[];
};

export const softwareServicePages: SoftwareServicePage[] = [
  {
    slug: "saas-development",
    title: "SaaS Development",
    subtitle: "Scalable SaaS platforms built for real users, revenue, and long-term growth.",
    description:
      "Revenuxe builds SaaS applications with secure authentication, role-based dashboards, subscriptions, admin workflows, analytics, and scalable product architecture.",
    seoTitle: "SaaS Development Company | SaaS Application Development | Revenuxe",
    seoKeywords:
      "SaaS development company, SaaS application development, SaaS product development, custom SaaS platform, startup MVP development",
    intro:
      "A SaaS product needs more than screens. It needs a reliable product foundation: user management, permissions, billing, onboarding, dashboards, data models, admin controls, and a release path that can keep evolving.",
    revenuxeHelp:
      "Revenuxe helps founders and businesses turn SaaS ideas into production-ready platforms. We shape the MVP, design the user flows, engineer the core application, connect payments and databases, and prepare the product for launch, iteration, and scale.",
    deliverables: [
      "Multi-tenant application architecture",
      "User authentication and role-based access",
      "Subscription billing and Stripe integration",
      "Customer dashboards and admin panels",
      "Database design, APIs, and integrations",
      "Deployment, monitoring, and launch support",
    ],
    builtFor: [
      "Founders launching a new SaaS MVP",
      "Businesses turning internal workflows into a product",
      "Teams replacing spreadsheets or manual operations with software",
      "Companies that need a subscription-ready web platform",
    ],
    process: [
      { step: "Product Discovery", description: "Clarify users, workflows, pricing logic, roles, and the MVP scope." },
      { step: "Architecture", description: "Plan the database, authentication, billing, app structure, and deployment approach." },
      { step: "Interface Design", description: "Design dashboards, settings, onboarding, and core product workflows." },
      { step: "Development", description: "Build the SaaS platform with clean code, integrations, testing, and review cycles." },
      { step: "Launch", description: "Deploy the product, validate flows, connect analytics, and prepare the next roadmap." },
    ],
    outcomes: ["Faster MVP launch", "Subscription-ready product", "Cleaner product architecture", "Scalable user workflows"],
    related: ["web-app-development", "ai-systems", "custom-software"],
  },
  {
    slug: "web-app-development",
    title: "Web App Development",
    subtitle: "Fast, secure web applications built with modern engineering standards.",
    description:
      "Revenuxe designs and develops high-performance web applications using modern stacks like Next.js, React, TypeScript, Supabase, PostgreSQL, and cloud infrastructure.",
    seoTitle: "Web App Development Company | Scalable Web Applications | Revenuxe",
    seoKeywords:
      "web app development company, scalable web applications, Next.js development company, React web app development, custom web application development",
    intro:
      "Modern web apps need to feel fast, reliable, and intuitive across every user flow. Revenuxe builds web applications that combine polished interfaces with strong backend foundations.",
    revenuxeHelp:
      "Revenuxe helps you plan, design, and engineer web applications for customers, teams, and operations. We handle product flows, frontend engineering, backend logic, data models, integrations, deployment, and performance optimization.",
    deliverables: [
      "Custom web application architecture",
      "Responsive app-like UI and component systems",
      "API, database, and third-party integrations",
      "Authentication, permissions, and secure workflows",
      "Performance optimization and deployment",
      "Testing, QA, and post-launch iteration",
    ],
    builtFor: [
      "Businesses building portals, dashboards, or booking systems",
      "Startups that need a production-ready MVP",
      "Teams modernizing manual workflows into apps",
      "Companies that need scalable customer-facing software",
    ],
    process: [
      { step: "Scope", description: "Define core features, user roles, integrations, and success criteria." },
      { step: "UX Planning", description: "Map the workflows and interface structure before engineering begins." },
      { step: "Build", description: "Develop the frontend, backend, database, and integrations in focused milestones." },
      { step: "QA", description: "Test across devices, edge cases, performance, permissions, and data flows." },
      { step: "Release", description: "Deploy the app and support future product improvements." },
    ],
    outcomes: ["Production-ready app", "Better user experience", "Reliable data flows", "Maintainable codebase"],
    related: ["saas-development", "custom-software", "platform-modernization"],
  },
  {
    slug: "ai-systems",
    title: "AI Systems",
    subtitle: "AI-powered software systems that automate workflows and improve product experiences.",
    description:
      "Revenuxe builds AI assistants, workflow automation, knowledge systems, data extraction tools, and intelligent product features connected to your real business workflows.",
    seoTitle: "AI Software Development Company | AI Systems Development | Revenuxe",
    seoKeywords:
      "AI software development company, AI systems development, AI workflow automation, AI assistants, custom AI software",
    intro:
      "AI becomes valuable when it is connected to the right data, interfaces, permissions, and workflows. Revenuxe builds AI systems that work inside real products and operations.",
    revenuxeHelp:
      "Revenuxe helps you identify useful AI opportunities, design the system, connect models to your data and tools, build the user experience, and deploy AI features safely into production.",
    deliverables: [
      "AI assistants and internal copilots",
      "Knowledge search and retrieval systems",
      "Workflow automation and task routing",
      "Data extraction and document processing",
      "AI-enabled product features",
      "Evaluation, safeguards, and deployment support",
    ],
    builtFor: [
      "Teams with repetitive manual workflows",
      "Products that need intelligent assistants or automation",
      "Businesses that want searchable internal knowledge",
      "Platforms adding AI features for customers or staff",
    ],
    process: [
      { step: "Use Case Mapping", description: "Find high-value workflows where AI can reduce effort or improve decisions." },
      { step: "System Design", description: "Plan model usage, data access, prompts, tools, permissions, and evaluations." },
      { step: "Prototype", description: "Build a working AI flow quickly to validate usefulness and quality." },
      { step: "Product Integration", description: "Connect AI into your app, dashboard, database, or internal tools." },
      { step: "Improve", description: "Monitor outputs, refine prompts, add safeguards, and expand capabilities." },
    ],
    outcomes: ["Reduced manual work", "Smarter product workflows", "Faster team operations", "AI features users can trust"],
    related: ["custom-software", "saas-development", "web-app-development"],
  },
  {
    slug: "platform-modernization",
    title: "Platform Modernization",
    subtitle: "Upgrade legacy websites, SPAs, and internal tools into scalable modern platforms.",
    description:
      "Revenuxe modernizes outdated platforms by improving architecture, performance, maintainability, frontend experience, backend systems, and deployment workflows.",
    seoTitle: "Platform Modernization Services | Next.js Migration Company | Revenuxe",
    seoKeywords:
      "platform modernization, Next.js migration company, legacy app modernization, web platform modernization, scalable web applications",
    intro:
      "Old platforms often slow teams down with fragile code, poor performance, difficult updates, and limited scalability. Modernization gives your software a stronger foundation without losing what already works.",
    revenuxeHelp:
      "Revenuxe audits your current platform, identifies risk areas, plans a phased modernization roadmap, rebuilds critical flows, improves architecture, and helps launch a faster, cleaner, easier-to-maintain system.",
    deliverables: [
      "Technical audit and modernization roadmap",
      "Legacy frontend or SPA migration",
      "Next.js architecture and performance upgrades",
      "Database, API, and integration cleanup",
      "Component system and UI refresh",
      "Launch planning, QA, redirects, and monitoring",
    ],
    builtFor: [
      "Businesses with slow or hard-to-maintain platforms",
      "Teams migrating from React SPA, Vite, or no-code systems",
      "Companies that need better performance and scalability",
      "Products preparing for new features or heavier usage",
    ],
    process: [
      { step: "Audit", description: "Review code, infrastructure, performance, UX, data flows, and operational pain points." },
      { step: "Roadmap", description: "Prioritize what to rebuild, migrate, refactor, or preserve." },
      { step: "Modernize", description: "Improve architecture, rebuild interfaces, optimize performance, and clean integrations." },
      { step: "Validate", description: "Test redirects, analytics, permissions, workflows, and production behavior." },
      { step: "Launch", description: "Release safely with monitoring and a plan for ongoing improvements." },
    ],
    outcomes: ["Faster platform performance", "Cleaner architecture", "Lower maintenance friction", "More scalable product foundation"],
    related: ["web-app-development", "enterprise-websites", "custom-software"],
  },
  {
    slug: "custom-software",
    title: "Custom Software",
    subtitle: "Purpose-built software for workflows, teams, customers, and operations.",
    description:
      "Revenuxe builds custom portals, CRMs, booking systems, automation tools, dashboards, integrations, and internal business software tailored to how your company works.",
    seoTitle: "Custom Software Development Company | Revenuxe",
    seoKeywords:
      "custom software development, custom software development company, business software development, internal tools development, software development company",
    intro:
      "Generic tools can force your business into awkward workflows. Custom software gives your team a system designed around your operations, customers, data, and growth plans.",
    revenuxeHelp:
      "Revenuxe helps define the workflow, design the interface, engineer the software, connect the data, automate repetitive tasks, and create a system your team can actually use every day.",
    deliverables: [
      "Custom portals and business dashboards",
      "CRM, booking, and operations systems",
      "Workflow automation and approval flows",
      "Third-party API and payment integrations",
      "Reporting, analytics, and admin tools",
      "Secure deployment and maintenance support",
    ],
    builtFor: [
      "Businesses outgrowing spreadsheets and manual processes",
      "Teams needing custom internal tools",
      "Companies with unique operations that generic SaaS cannot handle",
      "Founders building niche software products",
    ],
    process: [
      { step: "Workflow Discovery", description: "Understand your operations, users, data, approvals, and repetitive work." },
      { step: "Solution Design", description: "Plan the exact software structure, roles, screens, and integrations." },
      { step: "Development", description: "Build the system in milestones with reviewable releases." },
      { step: "Training", description: "Prepare your team to use the system confidently." },
      { step: "Iteration", description: "Improve the software as real usage reveals new priorities." },
    ],
    outcomes: ["Less manual work", "Better operational visibility", "Software matched to your workflow", "Higher team efficiency"],
    related: ["web-app-development", "ai-systems", "saas-development"],
  },
  {
    slug: "enterprise-websites",
    title: "Enterprise Websites",
    subtitle: "High-performance websites for serious companies, products, and platforms.",
    description:
      "Revenuxe builds fast, scalable enterprise websites with modern design systems, strong performance, CMS-ready structures, analytics, accessibility, and conversion-focused page architecture.",
    seoTitle: "Enterprise Website Development | Next.js Website Development | Revenuxe",
    seoKeywords:
      "enterprise website development, Next.js website development, high performance websites, web development company, platform modernization",
    intro:
      "An enterprise website should be more than a brochure. It should load fast, explain clearly, support content growth, integrate with business tools, and help users move confidently toward action.",
    revenuxeHelp:
      "Revenuxe helps companies rebuild or launch modern websites with strong positioning, app-like sections, reusable components, content-friendly architecture, analytics, forms, and performance-first engineering.",
    deliverables: [
      "Modern website architecture and page planning",
      "High-quality UI design and responsive sections",
      "Next.js development and performance optimization",
      "CMS-ready content structures where needed",
      "Forms, analytics, tracking, and integrations",
      "Launch QA, redirects, and ongoing improvements",
    ],
    builtFor: [
      "Companies that need a premium online presence",
      "SaaS and technology brands launching product websites",
      "Businesses replacing template or no-code websites",
      "Teams that need scalable content and service pages",
    ],
    process: [
      { step: "Positioning", description: "Clarify site goals, audience, pages, content hierarchy, and conversion paths." },
      { step: "Design System", description: "Create reusable sections and visual patterns for a polished website experience." },
      { step: "Development", description: "Build fast, responsive pages with clean components and technical best practices." },
      { step: "Content Setup", description: "Structure copy, forms, metadata, and publishing workflows." },
      { step: "Launch", description: "Test performance, forms, analytics, redirects, and production deployment." },
    ],
    outcomes: ["Premium brand presence", "Fast page performance", "Scalable content structure", "Better inquiry flows"],
    related: ["platform-modernization", "web-app-development", "saas-development"],
  },
];

export const getSoftwareServicePage = (slug: string) =>
  softwareServicePages.find((service) => service.slug === slug);
