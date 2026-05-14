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
    related: ["web-app-development", "saas-development", "enterprise-websites", "startup-mvp-development", "platform-modernization", "qa-testing"],
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
    related: ["platform-modernization", "api-backend-development", "saas-development", "software-maintenance-scaling", "qa-testing", "web-app-development"],
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
    related: ["web-app-development", "saas-development", "platform-modernization", "cloud-devops-engineering", "api-backend-development", "software-maintenance-scaling"],
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
    related: ["platform-modernization", "cloud-devops-engineering", "qa-testing", "api-backend-development", "database-architecture", "web-app-development"],
  },
];

export const getSoftwareServicePage = (slug: string) =>
  softwareServicePages.find((service) => service.slug === slug);
