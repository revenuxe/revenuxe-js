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
    related: [
      "web-app-development",
      "startup-mvp-development",
      "api-backend-development",
      "database-architecture",
      "cloud-devops-engineering",
      "ai-integration",
      "nextjs-development",
    ],
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
    related: [
      "saas-development",
      "product-ui-ux-design",
      "api-backend-development",
      "database-architecture",
      "cloud-devops-engineering",
      "qa-testing",
      "portal-development",
    ],
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
    related: [
      "ai-integration",
      "custom-software",
      "saas-development",
      "api-backend-development",
      "database-architecture",
      "software-maintenance-scaling",
      "ai-integration",
    ],
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
    related: [
      "software-maintenance-scaling",
      "cloud-devops-engineering",
      "api-backend-development",
      "product-ui-ux-design",
      "database-architecture",
      "qa-testing",
      "website-development",
      "business-website-redesign",
    ],
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
    related: [
      "web-app-development",
      "api-backend-development",
      "database-architecture",
      "ai-integration",
      "qa-testing",
      "software-maintenance-scaling",
      "portal-development",
      "ecommerce-development",
    ],
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
    related: [
      "product-ui-ux-design",
      "platform-modernization",
      "web-app-development",
      "cloud-devops-engineering",
      "qa-testing",
      "software-maintenance-scaling",
      "website-development",
      "cms-website-development",
      "landing-page-development",
    ],
  },
  {
    slug: "startup-mvp-development",
    title: "Startup MVP Development",
    subtitle: "Launch a focused software product quickly without overbuilding the first version.",
    description:
      "Revenuxe helps founders and businesses turn early product ideas into usable MVPs with clear scope, modern UI, backend workflows, and a launch plan.",
    seoTitle: "Startup MVP Development Company | Revenuxe",
    seoKeywords:
      "startup MVP development, MVP development company, SaaS MVP development, software product development, startup product studio",
    intro:
      "A strong MVP is not a half-built product. It is the smallest useful version that proves the core workflow, gets real users involved, and creates a foundation for the next release.",
    revenuxeHelp:
      "Revenuxe helps you cut the idea down to the right first version, design the product flow, build the app, connect the backend, deploy it, and plan improvements based on real usage.",
    deliverables: [
      "MVP scope and feature prioritization",
      "Clickable product flows and app screens",
      "Frontend and backend development",
      "Authentication, database, and core workflows",
      "Deployment and launch support",
      "Post-launch roadmap for iteration",
    ],
    builtFor: [
      "Founders validating a SaaS or web app idea",
      "Businesses testing a new digital product",
      "Teams that need a demo or pilot version quickly",
      "Companies replacing manual workflows with a first software version",
    ],
    process: [
      { step: "Define", description: "Identify the core user, main workflow, and launch-critical features." },
      { step: "Design", description: "Create clear screens and flows for the first usable product version." },
      { step: "Build", description: "Engineer the MVP with the right stack, data model, and integrations." },
      { step: "Launch", description: "Deploy, test, and prepare the product for early users." },
      { step: "Iterate", description: "Use feedback and analytics to plan the next release." },
    ],
    outcomes: ["Faster product validation", "Clear MVP scope", "Reduced build waste", "Launch-ready software foundation"],
    related: ["saas-development", "web-app-development", "product-ui-ux-design", "api-backend-development", "qa-testing", "cloud-devops-engineering"],
  },
  {
    slug: "api-backend-development",
    title: "API & Backend Development",
    subtitle: "Reliable backend systems, APIs, and server-side workflows for modern products.",
    description:
      "Revenuxe builds secure backend systems, APIs, server-side logic, integrations, and data workflows that power SaaS products, web apps, and custom software.",
    seoTitle: "API and Backend Development Company | Revenuxe",
    seoKeywords:
      "API development company, backend development services, custom backend development, web app backend, SaaS backend development",
    intro:
      "The backend is where product reliability lives. It handles users, permissions, data, integrations, business rules, billing events, background jobs, and operational workflows.",
    revenuxeHelp:
      "Revenuxe designs and engineers backend systems that are clean, secure, and ready to grow. We build APIs, database logic, authentication flows, server functions, and integrations around the way your product actually works.",
    deliverables: [
      "API architecture and endpoint development",
      "Authentication and permission logic",
      "Server-side workflows and business rules",
      "Third-party integrations and webhooks",
      "Background jobs and automation flows",
      "Backend testing, logging, and deployment support",
    ],
    builtFor: [
      "SaaS platforms that need secure product logic",
      "Web apps with complex data workflows",
      "Businesses connecting multiple tools or systems",
      "Teams replacing fragile scripts with maintainable backend services",
    ],
    process: [
      { step: "Workflow Mapping", description: "Define the backend actions, data flows, users, events, and integrations." },
      { step: "Architecture", description: "Plan APIs, database access, authentication, security, and deployment." },
      { step: "Development", description: "Build the backend services, routes, functions, and integrations." },
      { step: "Testing", description: "Validate permissions, edge cases, webhooks, performance, and error handling." },
      { step: "Release", description: "Deploy, monitor, and document backend behavior for future development." },
    ],
    outcomes: ["Reliable product logic", "Secure APIs", "Cleaner integrations", "Scalable backend architecture"],
    related: ["database-architecture", "saas-development", "web-app-development", "custom-software", "cloud-devops-engineering", "qa-testing"],
  },
  {
    slug: "product-ui-ux-design",
    title: "Product UI/UX Design",
    subtitle: "Clear, app-like interfaces for SaaS products, dashboards, and web applications.",
    description:
      "Revenuxe designs product interfaces, user flows, dashboards, portals, and component systems that make complex software easier to use.",
    seoTitle: "Product UI UX Design Services | SaaS Interface Design | Revenuxe",
    seoKeywords:
      "product UI UX design, SaaS UI design, web app design, dashboard design, product interface design",
    intro:
      "Great product design makes software easier to understand, faster to use, and simpler to build. It connects business logic with a user experience that feels natural.",
    revenuxeHelp:
      "Revenuxe helps turn rough product requirements into clear workflows, polished screens, reusable interface patterns, and development-ready product designs.",
    deliverables: [
      "User flow mapping and information architecture",
      "SaaS dashboard and web app screen design",
      "Component systems and reusable UI patterns",
      "Responsive design for desktop and mobile",
      "UX improvements for existing products",
      "Design handoff for frontend development",
    ],
    builtFor: [
      "SaaS products needing polished dashboards",
      "Web apps with complex workflows",
      "Founders preparing an MVP for development",
      "Teams modernizing outdated software interfaces",
    ],
    process: [
      { step: "Map", description: "Understand users, roles, workflows, pain points, and product goals." },
      { step: "Structure", description: "Define page hierarchy, navigation, states, and key actions." },
      { step: "Design", description: "Create polished, responsive interfaces and components." },
      { step: "Refine", description: "Review usability, edge cases, empty states, and developer handoff." },
      { step: "Support", description: "Work with engineering to keep implementation aligned with the design." },
    ],
    outcomes: ["Clearer product flows", "Better usability", "Faster frontend development", "More polished software experience"],
    related: ["web-app-development", "saas-development", "enterprise-websites", "startup-mvp-development", "platform-modernization", "qa-testing", "website-development", "landing-page-development"],
  },
  {
    slug: "cloud-devops-engineering",
    title: "Cloud & DevOps Engineering",
    subtitle: "Deployment, infrastructure, and release workflows for scalable software products.",
    description:
      "Revenuxe sets up cloud infrastructure, deployment pipelines, hosting, monitoring, and production workflows for SaaS products and web applications.",
    seoTitle: "Cloud and DevOps Engineering Services | Revenuxe",
    seoKeywords:
      "cloud DevOps engineering, deployment pipeline setup, cloud infrastructure services, SaaS DevOps, web app deployment",
    intro:
      "Modern software needs a reliable path from code to production. Good infrastructure reduces launch risk, improves uptime, and makes future releases easier.",
    revenuxeHelp:
      "Revenuxe helps teams deploy software with cleaner environments, hosting setup, CI/CD workflows, monitoring, environment variables, domains, storage, and cloud-ready architecture.",
    deliverables: [
      "Hosting and cloud architecture planning",
      "CI/CD and deployment workflow setup",
      "Environment and secret management",
      "Domain, SSL, storage, and CDN configuration",
      "Monitoring, logging, and launch checks",
      "Infrastructure documentation and handoff",
    ],
    builtFor: [
      "Products preparing for public launch",
      "Teams with fragile manual deployment workflows",
      "SaaS platforms that need scalable hosting",
      "Businesses modernizing infrastructure and release processes",
    ],
    process: [
      { step: "Assess", description: "Review app structure, hosting needs, release process, and production risks." },
      { step: "Plan", description: "Choose infrastructure, environments, deployment flow, and monitoring approach." },
      { step: "Configure", description: "Set up hosting, domains, secrets, storage, pipelines, and checks." },
      { step: "Deploy", description: "Release safely and validate production behavior." },
      { step: "Document", description: "Prepare handoff notes for future updates and operations." },
    ],
    outcomes: ["Safer releases", "Reliable deployments", "Cloud-ready infrastructure", "Better operational visibility"],
    related: ["platform-modernization", "api-backend-development", "saas-development", "software-maintenance-scaling", "qa-testing", "web-app-development", "nextjs-development"],
  },
  {
    slug: "database-architecture",
    title: "Database Architecture",
    subtitle: "Data models and database foundations for scalable SaaS and custom software.",
    description:
      "Revenuxe designs PostgreSQL and Supabase-backed data structures, permissions, relationships, reporting foundations, and migration plans for modern software products.",
    seoTitle: "Database Architecture Services | PostgreSQL and Supabase Development | Revenuxe",
    seoKeywords:
      "database architecture, PostgreSQL development, Supabase development, SaaS database design, data model design",
    intro:
      "A product is only as strong as its data model. Clean database architecture makes features easier to build, permissions easier to enforce, and reporting easier to trust.",
    revenuxeHelp:
      "Revenuxe helps design database schemas around real product behavior, including tenants, users, roles, transactions, analytics, audit trails, and future feature expansion.",
    deliverables: [
      "Database schema and relationship design",
      "Multi-tenant data modeling",
      "Role-based access and permission structure",
      "Migration planning and data cleanup",
      "Reporting and analytics-ready data foundations",
      "Performance and query structure review",
    ],
    builtFor: [
      "SaaS apps with tenants, teams, and roles",
      "Products with messy or evolving data models",
      "Businesses moving from spreadsheets to software",
      "Teams that need reliable reporting and operations data",
    ],
    process: [
      { step: "Model", description: "Map users, entities, relationships, events, permissions, and reporting needs." },
      { step: "Design", description: "Create schemas, indexes, constraints, access patterns, and migration plans." },
      { step: "Implement", description: "Build tables, policies, relationships, and backend data access." },
      { step: "Validate", description: "Test edge cases, permissions, query behavior, and reporting outputs." },
      { step: "Evolve", description: "Prepare the database for future product features and scale." },
    ],
    outcomes: ["Cleaner data structure", "Safer permissions", "Better reporting", "Scalable product foundation"],
    related: ["api-backend-development", "saas-development", "custom-software", "ai-systems", "cloud-devops-engineering", "qa-testing"],
  },
  {
    slug: "ai-integration",
    title: "AI Integration",
    subtitle: "Add practical AI features to SaaS products, web apps, and business workflows.",
    description:
      "Revenuxe integrates AI into existing products and workflows with assistants, automation, data extraction, knowledge search, summarization, and intelligent user experiences.",
    seoTitle: "AI Integration Services | AI Software Development | Revenuxe",
    seoKeywords:
      "AI integration services, AI software development, AI assistant integration, AI workflow automation, custom AI integration",
    intro:
      "AI integration works best when it solves a specific workflow problem. The goal is not to add AI everywhere, but to use it where it saves time, improves decisions, or creates a better product experience.",
    revenuxeHelp:
      "Revenuxe helps identify high-value AI opportunities, choose the right architecture, connect models to your data and tools, and build AI features that are usable, safe, and measurable.",
    deliverables: [
      "AI use-case discovery and planning",
      "Prompt, tool, and workflow architecture",
      "Knowledge search and retrieval setup",
      "AI assistant or automation interface",
      "Model integration with app data and APIs",
      "Evaluation, safeguards, and monitoring plan",
    ],
    builtFor: [
      "Existing products adding intelligent features",
      "Teams automating repetitive internal work",
      "Businesses with documents, knowledge bases, or support workflows",
      "SaaS platforms that need AI assistants or analysis tools",
    ],
    process: [
      { step: "Identify", description: "Find workflows where AI can create measurable utility." },
      { step: "Architect", description: "Plan data access, prompts, tools, permissions, and evaluation criteria." },
      { step: "Prototype", description: "Build a focused AI workflow and test output quality." },
      { step: "Integrate", description: "Connect the AI system into your product or operations." },
      { step: "Improve", description: "Monitor results and refine prompts, safeguards, and capabilities." },
    ],
    outcomes: ["Useful AI features", "Reduced manual work", "Better product workflows", "Safer AI deployment"],
    related: ["ai-systems", "saas-development", "custom-software", "api-backend-development", "database-architecture", "software-maintenance-scaling"],
  },
  {
    slug: "qa-testing",
    title: "QA & Product Testing",
    subtitle: "Testing workflows that protect launches, user trust, and product quality.",
    description:
      "Revenuxe tests web applications, SaaS platforms, websites, and software workflows across devices, roles, permissions, edge cases, forms, integrations, and launch-critical journeys.",
    seoTitle: "QA and Product Testing Services | Revenuxe",
    seoKeywords:
      "QA testing services, software testing, web app testing, SaaS testing, product QA",
    intro:
      "Good QA is more than clicking around. It validates the flows users depend on, the permissions that protect data, and the integrations that keep the product working.",
    revenuxeHelp:
      "Revenuxe helps reduce launch risk with structured QA plans, functional testing, responsive checks, integration testing, user-role testing, bug reporting, and release validation.",
    deliverables: [
      "Functional QA and regression testing",
      "Responsive and browser testing",
      "User role and permission testing",
      "Form, payment, and integration checks",
      "Bug reports with priority and reproduction steps",
      "Pre-launch and post-launch validation",
    ],
    builtFor: [
      "Products preparing for launch",
      "Teams shipping new app features",
      "Platforms with multiple user roles or integrations",
      "Businesses that need more confidence before release",
    ],
    process: [
      { step: "Plan", description: "Identify critical flows, roles, devices, and launch risks." },
      { step: "Test", description: "Run structured QA across screens, workflows, integrations, and edge cases." },
      { step: "Report", description: "Document bugs with severity, context, and reproduction steps." },
      { step: "Fix Support", description: "Work with engineering to validate fixes and prevent regressions." },
      { step: "Release Check", description: "Confirm the product is ready for deployment or public use." },
    ],
    outcomes: ["Lower launch risk", "Fewer user-facing bugs", "Cleaner releases", "More reliable product behavior"],
    related: ["web-app-development", "saas-development", "platform-modernization", "cloud-devops-engineering", "api-backend-development", "software-maintenance-scaling", "website-development", "ecommerce-development"],
  },
  {
    slug: "software-maintenance-scaling",
    title: "Software Maintenance & Scaling",
    subtitle: "Ongoing product improvements, fixes, optimization, and scale support.",
    description:
      "Revenuxe supports existing software with bug fixes, feature improvements, performance optimization, technical cleanup, monitoring, and roadmap-based scaling.",
    seoTitle: "Software Maintenance and Scaling Services | Revenuxe",
    seoKeywords:
      "software maintenance services, SaaS maintenance, web app maintenance, software scaling, product optimization",
    intro:
      "Software does not stay finished. As users, features, and traffic grow, the product needs maintenance, performance tuning, bug fixes, and thoughtful scaling.",
    revenuxeHelp:
      "Revenuxe helps teams keep software stable and improving with ongoing engineering support, backlog execution, bug fixes, code cleanup, performance work, and scaling plans.",
    deliverables: [
      "Bug fixes and issue triage",
      "Feature improvements and roadmap support",
      "Performance optimization",
      "Code cleanup and technical debt reduction",
      "Monitoring, analytics, and reliability review",
      "Scaling roadmap and architecture improvements",
    ],
    builtFor: [
      "SaaS products after initial launch",
      "Web apps with growing users or feature requests",
      "Businesses with unstable or slow software",
      "Teams that need a technical partner for ongoing improvements",
    ],
    process: [
      { step: "Audit", description: "Review current product health, backlog, bugs, performance, and architecture." },
      { step: "Prioritize", description: "Organize fixes and improvements by risk, impact, and business value." },
      { step: "Improve", description: "Ship focused updates, resolve bugs, and strengthen weak parts of the system." },
      { step: "Optimize", description: "Improve speed, reliability, maintainability, and operational visibility." },
      { step: "Scale", description: "Plan and implement changes needed for more users, features, and integrations." },
    ],
    outcomes: ["More stable software", "Faster product iteration", "Reduced technical debt", "Better long-term scalability"],
    related: ["platform-modernization", "cloud-devops-engineering", "qa-testing", "api-backend-development", "database-architecture", "web-app-development", "business-website-redesign"],
  },
  {
    slug: "website-development",
    title: "Website Development",
    subtitle: "Modern business websites built for performance, credibility, and conversion.",
    description:
      "Revenuxe builds responsive, fast, and premium business websites with clear messaging, strong page structure, forms, analytics, and scalable frontend engineering.",
    seoTitle: "Website Development Company | Modern Business Websites | Revenuxe",
    seoKeywords:
      "website development company, business website development, modern website development, responsive website development, web development company",
    intro:
      "A website is often the first product experience your customer has with your business. It should explain what you do clearly, load quickly, look credible, and guide visitors toward the right action.",
    revenuxeHelp:
      "Revenuxe helps businesses plan, design, and develop modern websites that feel premium and practical. We build the page structure, responsive sections, forms, analytics, performance foundations, and content flow needed for a serious online presence.",
    deliverables: [
      "Website strategy and page architecture",
      "Responsive UI design and frontend development",
      "Service, about, contact, and conversion pages",
      "Form setup, analytics, and tracking",
      "Performance and accessibility improvements",
      "Launch QA, deployment, and post-launch support",
    ],
    builtFor: [
      "Businesses replacing an outdated website",
      "Startups launching a credible online presence",
      "Service companies that need better inquiry flow",
      "Technology brands that want a premium website foundation",
    ],
    process: [
      { step: "Plan", description: "Define pages, audience, positioning, content, and conversion goals." },
      { step: "Design", description: "Create a clean responsive interface that matches the brand and user journey." },
      { step: "Develop", description: "Build the website with reusable sections, fast performance, and clean code." },
      { step: "Connect", description: "Set up forms, analytics, metadata, and essential integrations." },
      { step: "Launch", description: "Test across devices, deploy, and support post-launch improvements." },
    ],
    outcomes: ["Stronger brand credibility", "Faster website performance", "Better inquiry flow", "Scalable page foundation"],
    related: ["enterprise-websites", "cms-website-development", "landing-page-development", "business-website-redesign", "nextjs-development", "product-ui-ux-design"],
  },
  {
    slug: "nextjs-development",
    title: "Next.js Development",
    subtitle: "High-performance websites and web applications built with Next.js.",
    description:
      "Revenuxe builds Next.js websites, SaaS products, dashboards, and web applications with modern rendering, routing, APIs, and deployment workflows.",
    seoTitle: "Next.js Development Company | Revenuxe",
    seoKeywords:
      "Next.js development company, Next.js website development, Next.js web app development, React Next.js development, Next.js developers",
    intro:
      "Next.js is a strong foundation for products that need speed, flexible routing, modern React architecture, server rendering, and clean deployment workflows.",
    revenuxeHelp:
      "Revenuxe uses Next.js to build premium websites, scalable SaaS platforms, product dashboards, and web applications that are fast, maintainable, and ready for modern hosting environments.",
    deliverables: [
      "Next.js app architecture and routing",
      "Server-rendered and static page implementation",
      "API routes, server actions, and integrations",
      "Reusable React component systems",
      "Performance, metadata, and deployment setup",
      "Migration from React, Vite, or no-code platforms",
    ],
    builtFor: [
      "Businesses that need high-performance websites",
      "Startups building SaaS or app dashboards",
      "Teams migrating from older React apps",
      "Companies that want a scalable frontend foundation",
    ],
    process: [
      { step: "Architecture", description: "Plan routes, rendering strategy, data fetching, and deployment needs." },
      { step: "Build", description: "Create reusable components, pages, APIs, and product workflows." },
      { step: "Optimize", description: "Improve load speed, metadata, image handling, and Core Web Vitals." },
      { step: "Integrate", description: "Connect backend systems, CMS, analytics, forms, and payments." },
      { step: "Deploy", description: "Launch with production checks, hosting setup, and monitoring basics." },
    ],
    outcomes: ["Fast user experience", "Modern React architecture", "SEO-ready rendering", "Scalable frontend codebase"],
    related: ["website-development", "web-app-development", "enterprise-websites", "platform-modernization", "cloud-devops-engineering", "api-backend-development"],
  },
  {
    slug: "ecommerce-development",
    title: "Ecommerce Development",
    subtitle: "Online stores and commerce workflows built for speed, trust, and conversion.",
    description:
      "Revenuxe builds ecommerce websites, product catalogs, checkout flows, payment integrations, admin tools, and custom commerce workflows.",
    seoTitle: "Ecommerce Development Company | Custom Online Stores | Revenuxe",
    seoKeywords:
      "ecommerce development company, online store development, custom ecommerce development, ecommerce website development, payment integration",
    intro:
      "A modern ecommerce experience needs more than product pages. It needs fast browsing, clear product structure, secure checkout, reliable payments, and an admin workflow your team can manage.",
    revenuxeHelp:
      "Revenuxe helps brands and businesses create ecommerce systems that combine polished frontend experiences with reliable product data, payment flows, inventory logic, and conversion-focused checkout paths.",
    deliverables: [
      "Product catalog and category architecture",
      "Responsive storefront design and development",
      "Cart, checkout, and payment integration",
      "Admin workflows and order management",
      "Analytics, events, and conversion tracking",
      "Performance optimization and launch QA",
    ],
    builtFor: [
      "Brands launching a new online store",
      "Businesses needing custom checkout or catalog logic",
      "Teams replacing slow ecommerce templates",
      "Companies connecting ecommerce with internal operations",
    ],
    process: [
      { step: "Commerce Planning", description: "Define products, categories, checkout needs, payments, and operations." },
      { step: "Storefront Design", description: "Create product-focused pages that help users browse and buy confidently." },
      { step: "Development", description: "Build catalog, cart, checkout, integrations, and admin workflows." },
      { step: "Testing", description: "Validate payments, orders, inventory logic, emails, and responsive behavior." },
      { step: "Launch", description: "Deploy the store and monitor key purchase flows." },
    ],
    outcomes: ["Better buying experience", "Reliable checkout flows", "Custom commerce logic", "Conversion-ready online store"],
    related: ["website-development", "api-backend-development", "database-architecture", "custom-software", "qa-testing", "software-maintenance-scaling"],
  },
  {
    slug: "cms-website-development",
    title: "CMS Website Development",
    subtitle: "Content-managed websites that teams can update without developer dependency.",
    description:
      "Revenuxe builds CMS-powered websites with reusable page sections, structured content, publishing workflows, and modern frontend performance.",
    seoTitle: "CMS Website Development Services | Revenuxe",
    seoKeywords:
      "CMS website development, content managed website, custom CMS development, website development company, headless CMS development",
    intro:
      "Teams need websites they can update confidently. A good CMS structure makes content publishing easier while keeping the frontend fast, clean, and consistent.",
    revenuxeHelp:
      "Revenuxe helps plan content models, page templates, reusable sections, and publishing workflows so your team can scale pages, articles, service content, and website updates without breaking the design.",
    deliverables: [
      "CMS content model and page structure",
      "Reusable sections and page templates",
      "Headless CMS or managed CMS integration",
      "Editor-friendly publishing workflows",
      "SEO metadata and structured content setup",
      "Frontend development and deployment",
    ],
    builtFor: [
      "Companies publishing articles, services, or case studies",
      "Teams that need non-developers to update website content",
      "Brands with growing page and content needs",
      "Businesses replacing rigid static or no-code websites",
    ],
    process: [
      { step: "Content Audit", description: "Review page types, publishing needs, roles, and content growth plans." },
      { step: "Model", description: "Define CMS fields, collections, templates, and reusable sections." },
      { step: "Build", description: "Develop the frontend and connect content safely to the website." },
      { step: "Train", description: "Prepare editors to update content without damaging layouts." },
      { step: "Launch", description: "Validate pages, metadata, forms, and publishing workflows." },
    ],
    outcomes: ["Easier content publishing", "Consistent page design", "Scalable website structure", "Less developer dependency"],
    related: ["website-development", "enterprise-websites", "landing-page-development", "business-website-redesign", "nextjs-development", "software-maintenance-scaling"],
  },
  {
    slug: "landing-page-development",
    title: "Landing Page Development",
    subtitle: "Focused landing pages for launches, offers, products, and lead generation.",
    description:
      "Revenuxe builds fast, focused landing pages with clear messaging, persuasive sections, forms, analytics, and responsive layouts.",
    seoTitle: "Landing Page Development Services | Revenuxe",
    seoKeywords:
      "landing page development, landing page design, lead generation landing pages, product launch pages, website development company",
    intro:
      "A landing page should remove confusion. It needs one clear offer, sharp messaging, trust signals, fast loading, and a simple path to action.",
    revenuxeHelp:
      "Revenuxe helps create landing pages for product launches, SaaS waitlists, service offers, campaigns, and lead capture, with performance-focused development and clean conversion flows.",
    deliverables: [
      "Offer and page structure planning",
      "Conversion-focused section design",
      "Responsive landing page development",
      "Forms, analytics, and event tracking",
      "Fast-loading page implementation",
      "Launch QA and iteration support",
    ],
    builtFor: [
      "Startups launching a product or waitlist",
      "Businesses testing a new service offer",
      "Companies running paid or organic campaigns",
      "Teams needing focused lead capture pages",
    ],
    process: [
      { step: "Clarify", description: "Define the offer, audience, call to action, and trust signals." },
      { step: "Structure", description: "Plan the page flow from headline to conversion." },
      { step: "Build", description: "Develop a fast responsive landing page with clean sections." },
      { step: "Track", description: "Connect forms, analytics, and conversion events." },
      { step: "Improve", description: "Review performance and refine copy, layout, or flow." },
    ],
    outcomes: ["Clearer offer presentation", "Faster campaign launches", "Better lead capture", "Focused conversion path"],
    related: ["website-development", "enterprise-websites", "product-ui-ux-design", "nextjs-development", "cms-website-development", "qa-testing"],
  },
  {
    slug: "business-website-redesign",
    title: "Business Website Redesign",
    subtitle: "Modernize outdated websites into clearer, faster, more credible digital experiences.",
    description:
      "Revenuxe redesigns business websites with stronger positioning, cleaner UX, better performance, improved page structure, and modern frontend implementation.",
    seoTitle: "Business Website Redesign Services | Revenuxe",
    seoKeywords:
      "business website redesign, website redesign services, modern website redesign, website modernization, web development company",
    intro:
      "An outdated website can quietly weaken trust. A redesign gives your business clearer messaging, better usability, faster pages, and a stronger foundation for future content and features.",
    revenuxeHelp:
      "Revenuxe helps audit the current website, identify weak pages and user journeys, redesign the content structure, rebuild the frontend, and launch a more polished website without losing important existing value.",
    deliverables: [
      "Existing website audit and redesign roadmap",
      "Improved information architecture",
      "Modern responsive UI redesign",
      "Content and conversion flow improvements",
      "Performance, metadata, and form cleanup",
      "Launch QA, redirects, and analytics validation",
    ],
    builtFor: [
      "Businesses with outdated or slow websites",
      "Companies changing their positioning or services",
      "Teams that need better mobile experience",
      "Brands that want a more premium online presence",
    ],
    process: [
      { step: "Audit", description: "Review current pages, design, performance, content, and conversion gaps." },
      { step: "Reposition", description: "Clarify messaging, hierarchy, and page goals." },
      { step: "Redesign", description: "Create modern layouts and responsive sections." },
      { step: "Rebuild", description: "Develop the improved website with clean frontend code." },
      { step: "Relaunch", description: "Validate forms, analytics, redirects, and production behavior." },
    ],
    outcomes: ["More premium website feel", "Improved clarity", "Better mobile experience", "Stronger conversion flow"],
    related: ["website-development", "enterprise-websites", "platform-modernization", "cms-website-development", "landing-page-development", "software-maintenance-scaling"],
  },
  {
    slug: "portal-development",
    title: "Portal Development",
    subtitle: "Secure customer, vendor, employee, and admin portals for business workflows.",
    description:
      "Revenuxe builds custom portals with authentication, dashboards, role-based access, document flows, reporting, and workflow automation.",
    seoTitle: "Portal Development Company | Custom Web Portals | Revenuxe",
    seoKeywords:
      "portal development company, custom portal development, customer portal development, admin portal development, vendor portal development",
    intro:
      "Portals bring users, data, and workflows into one controlled system. They help customers, teams, vendors, and admins access what they need without messy manual coordination.",
    revenuxeHelp:
      "Revenuxe helps define portal roles, dashboards, data access, forms, workflows, notifications, integrations, and admin controls, then builds the portal as a secure web application.",
    deliverables: [
      "Customer, vendor, employee, or admin portal planning",
      "Authentication and role-based access",
      "Dashboard and workflow screens",
      "Document, form, and data management",
      "Notifications and third-party integrations",
      "Testing, deployment, and support",
    ],
    builtFor: [
      "Businesses needing customer self-service",
      "Teams managing vendors, partners, or internal requests",
      "Companies replacing email-heavy workflows",
      "Organizations needing secure role-based dashboards",
    ],
    process: [
      { step: "Workflow Mapping", description: "Define portal users, roles, data, tasks, and permissions." },
      { step: "UX Design", description: "Design dashboards and flows for each user type." },
      { step: "Development", description: "Build backend logic, frontend screens, integrations, and admin tools." },
      { step: "QA", description: "Test permissions, edge cases, forms, and cross-role behavior." },
      { step: "Launch", description: "Deploy the portal and support onboarding for users." },
    ],
    outcomes: ["Reduced manual coordination", "Secure user workflows", "Better data visibility", "Scalable portal foundation"],
    related: ["custom-software", "web-app-development", "api-backend-development", "database-architecture", "qa-testing", "software-maintenance-scaling"],
  },
];

export const getSoftwareServicePage = (slug: string) =>
  softwareServicePages.find((service) => service.slug === slug);
