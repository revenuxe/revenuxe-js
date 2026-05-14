export type SupportSolutionPage = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  seoTitle: string;
  seoKeywords: string;
  revenuxeHelp: string;
  capabilities: string[];
  useCases: string[];
  process: { step: string; description: string }[];
  relatedServices: { href: string; title: string; description: string }[];
  relatedSolutions: string[];
};

export const supportSolutionPages: SupportSolutionPage[] = [
  {
    slug: "cursor-development",
    title: "AI-Assisted Engineering",
    subtitle: "Senior software engineering accelerated with AI coding workflows.",
    description:
      "Revenuxe uses AI-assisted engineering to move faster without compromising architecture, code quality, testing, or production readiness.",
    seoTitle: "AI-Assisted Engineering Services | Cursor Development | Revenuxe",
    seoKeywords:
      "AI-assisted engineering, Cursor development, AI coding services, software development company, custom software development",
    revenuxeHelp:
      "Revenuxe combines experienced engineering judgment with AI coding tools like Cursor to accelerate product builds, refactors, debugging, documentation, and delivery while keeping human review, architecture, and quality control at the center.",
    capabilities: [
      "AI-assisted feature development",
      "Codebase refactoring and modernization",
      "Bug fixing, debugging, and test support",
      "Architecture review and implementation planning",
      "Documentation and developer workflow improvement",
      "Production-focused code review and cleanup",
    ],
    useCases: [
      "Speeding up MVP and SaaS development",
      "Improving an existing Next.js or React codebase",
      "Building internal tools with cleaner engineering workflows",
      "Reducing repetitive coding work while keeping quality high",
    ],
    process: [
      { step: "Codebase Review", description: "Understand the existing architecture, risks, conventions, and product goals." },
      { step: "AI Workflow Setup", description: "Use AI tools to accelerate implementation while preserving code quality standards." },
      { step: "Engineering Delivery", description: "Build, refactor, test, and review changes through focused development cycles." },
      { step: "Production Hardening", description: "Validate behavior, performance, edge cases, and maintainability before launch." },
    ],
    relatedServices: [
      { href: "/services/custom-software", title: "Custom Software", description: "Purpose-built systems for business workflows." },
      { href: "/services/web-app-development", title: "Web App Development", description: "Modern web apps built with scalable architecture." },
      { href: "/services/platform-modernization", title: "Platform Modernization", description: "Upgrade legacy platforms into maintainable systems." },
    ],
    relatedSolutions: ["v0-development", "bolt-development", "lovable-development"],
  },
  {
    slug: "v0-development",
    title: "Product Interface Design",
    subtitle: "High-quality product interfaces, dashboards, and app screens designed for real workflows.",
    description:
      "Revenuxe creates polished product interfaces using modern UI systems, rapid prototyping, and production-ready frontend thinking.",
    seoTitle: "Product Interface Design Services | SaaS UI Design | Revenuxe",
    seoKeywords:
      "product interface design, SaaS UI design, web app UI design, dashboard design, v0 development",
    revenuxeHelp:
      "Revenuxe helps shape your product experience with clear user flows, app-like layouts, reusable components, responsive screens, and interface patterns that engineering teams can build and extend.",
    capabilities: [
      "SaaS dashboard UI design",
      "Customer portal and admin panel screens",
      "Design-to-code component planning",
      "Rapid interface prototyping",
      "Responsive product layouts",
      "Design system and component structure",
    ],
    useCases: [
      "Designing an MVP before development",
      "Refreshing a web app interface",
      "Creating dashboards for SaaS or internal tools",
      "Turning rough ideas into buildable product screens",
    ],
    process: [
      { step: "Flow Mapping", description: "Clarify user roles, screens, workflows, and the key actions each interface must support." },
      { step: "Prototype", description: "Create fast visual directions and interaction patterns for review." },
      { step: "Component System", description: "Define reusable UI elements, states, spacing, and responsive behavior." },
      { step: "Build Handoff", description: "Prepare the interface for frontend development with clear structure and priorities." },
    ],
    relatedServices: [
      { href: "/services/saas-development", title: "SaaS Development", description: "Complete SaaS platforms from MVP to launch." },
      { href: "/services/web-app-development", title: "Web App Development", description: "Frontend and backend engineering for web apps." },
      { href: "/services/enterprise-websites", title: "Enterprise Websites", description: "Premium websites with app-like sections." },
    ],
    relatedSolutions: ["cursor-development", "lovable-development", "bolt-development"],
  },
  {
    slug: "firebase-studio",
    title: "Backend Prototyping",
    subtitle: "Fast backend foundations for MVPs, dashboards, portals, and early-stage products.",
    description:
      "Revenuxe prototypes backend workflows, data models, authentication, and app logic so teams can validate products faster.",
    seoTitle: "Backend Prototyping Services | MVP Backend Development | Revenuxe",
    seoKeywords:
      "backend prototyping, MVP backend development, app backend development, Firebase Studio, Supabase development",
    revenuxeHelp:
      "Revenuxe helps teams move from idea to working backend quickly by planning the data structure, user roles, APIs, storage, integrations, and early automation needed for a functional MVP.",
    capabilities: [
      "Database schema planning",
      "Authentication and role-based access",
      "API and serverless function prototyping",
      "Storage, forms, and workflow logic",
      "Admin and internal operations backend",
      "Migration path from prototype to production",
    ],
    useCases: [
      "Validating a SaaS MVP quickly",
      "Building backend logic for dashboards and portals",
      "Testing new workflows before full product investment",
      "Creating internal tools with secure data handling",
    ],
    process: [
      { step: "Data Modeling", description: "Define entities, relationships, permissions, and the minimum backend needed." },
      { step: "Prototype Build", description: "Create working backend flows for authentication, data, and key actions." },
      { step: "Integration", description: "Connect frontend screens, forms, APIs, and third-party services." },
      { step: "Scale Plan", description: "Document what should be hardened, rebuilt, or expanded for production." },
    ],
    relatedServices: [
      { href: "/services/saas-development", title: "SaaS Development", description: "Subscription-ready products with full architecture." },
      { href: "/services/custom-software", title: "Custom Software", description: "Business tools and workflow systems." },
      { href: "/services/ai-systems", title: "AI Systems", description: "AI workflows connected to real product data." },
    ],
    relatedSolutions: ["lovable-development", "bolt-development", "cursor-development"],
  },
  {
    slug: "lovable-development",
    title: "Startup MVP Development",
    subtitle: "Launch a focused MVP faster with AI-assisted product development.",
    description:
      "Revenuxe helps startups and businesses turn product ideas into working MVPs with clear scope, fast iteration, and production-aware engineering.",
    seoTitle: "Startup MVP Development Services | Revenuxe",
    seoKeywords:
      "startup MVP development, MVP development company, SaaS MVP development, AI-assisted app development, Lovable development",
    revenuxeHelp:
      "Revenuxe helps you define the smallest useful product, design the core workflows, build the MVP, connect backend services, deploy it, and plan the next iteration after real user feedback.",
    capabilities: [
      "MVP scope and feature prioritization",
      "Rapid product prototyping",
      "SaaS, portal, and dashboard builds",
      "Authentication, database, and payments setup",
      "Launch-ready UI and user flows",
      "Post-launch iteration roadmap",
    ],
    useCases: [
      "Launching a SaaS idea quickly",
      "Testing a product concept with real users",
      "Building a founder demo or investor-ready prototype",
      "Replacing manual operations with a first software version",
    ],
    process: [
      { step: "MVP Strategy", description: "Choose the core user, core workflow, and must-have launch features." },
      { step: "Prototype", description: "Create the first working product flow quickly for review and refinement." },
      { step: "Build", description: "Engineer the product screens, backend, integrations, and deployment." },
      { step: "Launch Roadmap", description: "Prepare the product for users and plan the next feature cycle." },
    ],
    relatedServices: [
      { href: "/services/saas-development", title: "SaaS Development", description: "Turn MVPs into scalable SaaS platforms." },
      { href: "/services/web-app-development", title: "Web App Development", description: "Custom apps with modern engineering." },
      { href: "/services/ai-systems", title: "AI Systems", description: "Add AI capabilities to product workflows." },
    ],
    relatedSolutions: ["bolt-development", "v0-development", "firebase-studio"],
  },
  {
    slug: "bolt-development",
    title: "Rapid Web App Builds",
    subtitle: "Fast web app delivery for prototypes, internal tools, MVPs, and product experiments.",
    description:
      "Revenuxe builds rapid web applications with AI-assisted development workflows, modern frontend systems, and practical backend integrations.",
    seoTitle: "Rapid Web App Builds | Web App Prototyping Services | Revenuxe",
    seoKeywords:
      "rapid web app development, web app prototyping, Bolt development, MVP web app, custom web app development",
    revenuxeHelp:
      "Revenuxe helps you move quickly from idea to usable app by combining rapid scaffolding, clean frontend development, backend setup, integrations, and production-minded review before launch.",
    capabilities: [
      "Fast web app scaffolding",
      "Interactive frontend screens",
      "Backend and database connection",
      "Internal tool and dashboard builds",
      "API and automation integrations",
      "Launch QA and performance cleanup",
    ],
    useCases: [
      "Building a product demo quickly",
      "Creating an internal tool for a team",
      "Testing a workflow before a larger build",
      "Launching a small but useful web application",
    ],
    process: [
      { step: "Define", description: "Identify the smallest useful app version and the workflows it must support." },
      { step: "Scaffold", description: "Create the application structure, screens, and core interactions quickly." },
      { step: "Connect", description: "Add data, APIs, authentication, storage, or automation where needed." },
      { step: "Polish", description: "Review UX, fix edge cases, optimize performance, and prepare for launch." },
    ],
    relatedServices: [
      { href: "/services/web-app-development", title: "Web App Development", description: "Scale rapid builds into robust applications." },
      { href: "/services/custom-software", title: "Custom Software", description: "Build deeper workflows and business systems." },
      { href: "/services/platform-modernization", title: "Platform Modernization", description: "Upgrade prototypes into maintainable platforms." },
    ],
    relatedSolutions: ["lovable-development", "firebase-studio", "cursor-development"],
  },
];

export const getSupportSolutionPage = (slug: string) =>
  supportSolutionPages.find((solution) => solution.slug === slug);
