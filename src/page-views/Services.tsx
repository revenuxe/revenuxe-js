import Link from "next/link";
import {
  AppWindow,
  ArrowUpRight,
  BrainCircuit,
  Building2,
  CheckCircle2,
  Cloud,
  Code2,
  Database,
  DatabaseZap,
  FileCode2,
  FileText,
  Gauge,
  Globe,
  Handshake,
  Layers3,
  LayoutDashboard,
  MonitorSmartphone,
  MousePointerClick,
  Paintbrush,
  PlugZap,
  RefreshCw,
  Rocket,
  ServerCog,
  ShoppingCart,
  SquareTerminal,
  Workflow,
  Wrench,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { absoluteCanonicalUrl } from "@/lib/seo/canonical";
import { getSoftwareServicePage } from "@/data/softwareServicePages";
import { supportSolutionPages } from "@/data/supportSolutionPages";

const serviceCategories = [
  {
    eyebrow: "Core Product Engineering",
    title: "Build scalable software products",
    description:
      "For founders, startups, and businesses that need production-ready SaaS platforms, web applications, custom systems, and AI-powered product workflows.",
    slugs: [
      "saas-development",
      "web-app-development",
      "ai-systems",
      "custom-software",
      "startup-mvp-development",
      "portal-development",
    ],
  },
  {
    eyebrow: "Website & Digital Platforms",
    title: "Launch premium websites and digital experiences",
    description:
      "For companies that need fast, credible, content-ready websites with strong UX, modern frontend engineering, and clean conversion paths.",
    slugs: [
      "website-development",
      "enterprise-websites",
      "nextjs-development",
      "cms-website-development",
      "landing-page-development",
      "business-website-redesign",
      "ecommerce-development",
    ],
  },
  {
    eyebrow: "Architecture & Infrastructure",
    title: "Strengthen the technical foundation",
    description:
      "For teams that need reliable backend systems, data models, deployment workflows, testing, modernization, and long-term scale support.",
    slugs: [
      "api-backend-development",
      "database-architecture",
      "cloud-devops-engineering",
      "platform-modernization",
      "qa-testing",
      "software-maintenance-scaling",
    ],
  },
  {
    eyebrow: "AI & Product Experience",
    title: "Improve workflows, interfaces, and intelligent features",
    description:
      "For products that need stronger user experience, AI integrations, automation, and polished app-like interfaces.",
    slugs: ["ai-integration", "product-ui-ux-design"],
  },
];

const iconMap: Record<string, JSX.Element> = {
  "saas-development": <Layers3 className="h-5 w-5" />,
  "web-app-development": <AppWindow className="h-5 w-5" />,
  "ai-systems": <BrainCircuit className="h-5 w-5" />,
  "custom-software": <Wrench className="h-5 w-5" />,
  "startup-mvp-development": <Rocket className="h-5 w-5" />,
  "portal-development": <LayoutDashboard className="h-5 w-5" />,
  "website-development": <Globe className="h-5 w-5" />,
  "enterprise-websites": <Building2 className="h-5 w-5" />,
  "nextjs-development": <FileCode2 className="h-5 w-5" />,
  "cms-website-development": <FileText className="h-5 w-5" />,
  "landing-page-development": <MousePointerClick className="h-5 w-5" />,
  "business-website-redesign": <MonitorSmartphone className="h-5 w-5" />,
  "ecommerce-development": <ShoppingCart className="h-5 w-5" />,
  "api-backend-development": <ServerCog className="h-5 w-5" />,
  "database-architecture": <Database className="h-5 w-5" />,
  "cloud-devops-engineering": <Cloud className="h-5 w-5" />,
  "platform-modernization": <RefreshCw className="h-5 w-5" />,
  "qa-testing": <CheckCircle2 className="h-5 w-5" />,
  "software-maintenance-scaling": <Gauge className="h-5 w-5" />,
  "ai-integration": <PlugZap className="h-5 w-5" />,
  "product-ui-ux-design": <Paintbrush className="h-5 w-5" />,
};

const supportIconMap: Record<string, JSX.Element> = {
  "cursor-development": <SquareTerminal className="h-5 w-5" />,
  "v0-development": <Paintbrush className="h-5 w-5" />,
  "firebase-studio": <DatabaseZap className="h-5 w-5" />,
  "lovable-development": <Handshake className="h-5 w-5" />,
  "bolt-development": <Workflow className="h-5 w-5" />,
};

const Services = async () => {
  const canonicalUrl = await absoluteCanonicalUrl("/services");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title="Software Development Services | SaaS, AI, Web Apps & Websites | Revenuxe"
        description="Explore Revenuxe software development services across SaaS development, web app development, AI systems, custom software, website development, Next.js, backend, cloud, QA, and platform modernization."
        keywords="software development services, SaaS development, web app development, custom software development, AI software development, website development, Next.js development, platform modernization"
        canonicalUrl={canonicalUrl}
      />
      <Navigation />

      <main>
        <section className="relative overflow-hidden bg-secondary pt-28 pb-14 md:pt-36 md:pb-20">
          <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(hsl(var(--primary))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary))_1px,transparent_1px)] [background-size:72px_72px]" />
          <div className="relative container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <p className="text-accent font-semibold text-sm tracking-wider uppercase">
                Revenuxe Services
              </p>
              <div className="mt-4 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-tight">
                  Software services for SaaS, AI, web apps, and modern websites.
                </h1>
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                  Choose the right service based on what you want to build, improve, or scale. Every page below explains how Revenuxe helps, what is included, and which related services fit next.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 md:py-14 bg-background border-b border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3">
              {serviceCategories.map((category) => (
                <a
                  key={category.eyebrow}
                  href={`#${category.eyebrow.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                  className="rounded-2xl border border-border bg-card p-4 transition-all hover:-translate-y-1 hover:border-accent/60 hover:shadow-lg"
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                    {category.eyebrow}
                  </p>
                  <p className="mt-2 text-sm font-semibold">{category.title}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {serviceCategories.map((category, categoryIndex) => {
          const services = category.slugs
            .map((slug) => getSoftwareServicePage(slug))
            .filter(Boolean) as NonNullable<ReturnType<typeof getSoftwareServicePage>>[];

          return (
            <section
              key={category.eyebrow}
              id={category.eyebrow.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
              className={`py-14 md:py-20 ${categoryIndex % 2 === 0 ? "bg-background" : "bg-muted/30"}`}
            >
              <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                  <div className="mb-8 md:mb-10 grid gap-4 md:grid-cols-[0.85fr_1.15fr] md:items-end">
                    <div>
                      <p className="text-accent font-semibold text-sm tracking-wider uppercase">
                        {category.eyebrow}
                      </p>
                      <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-display font-bold">
                        {category.title}
                      </h2>
                    </div>
                    <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                      {category.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="group flex h-full flex-col rounded-2xl border border-border bg-card p-5 md:p-6 transition-all hover:-translate-y-1 hover:border-accent/60 hover:shadow-xl"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                            {iconMap[service.slug] || <Code2 className="h-5 w-5" />}
                          </div>
                          <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-accent" />
                        </div>
                        <h3 className="mt-5 text-xl font-display font-bold">{service.title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                          {service.description}
                        </p>
                        <div className="mt-5 flex flex-wrap gap-2">
                          {service.outcomes.slice(0, 2).map((outcome) => (
                            <span
                              key={outcome}
                              className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground"
                            >
                              {outcome}
                            </span>
                          ))}
                        </div>
                        <span className="mt-auto pt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-accent">
                          View detailed service
                          <ArrowUpRight className="h-4 w-4" />
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        <section className="py-14 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="mb-8 md:mb-10 grid gap-4 md:grid-cols-[0.85fr_1.15fr] md:items-end">
                <div>
                  <p className="text-accent font-semibold text-sm tracking-wider uppercase">
                    Support Solutions
                  </p>
                  <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-display font-bold">
                    Faster implementation support
                  </h2>
                </div>
                <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                  These focused support solutions help teams prototype, design, engineer, and validate software faster while still connecting back to the broader product roadmap.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {supportSolutionPages.map((solution) => (
                  <Link
                    key={solution.slug}
                    href={`/sub-services/${solution.slug}`}
                    className="group rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-accent/60 hover:shadow-xl"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                        {supportIconMap[solution.slug] || <Code2 className="h-5 w-5" />}
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-accent" />
                    </div>
                    <h3 className="mt-4 text-base font-display font-bold">{solution.title}</h3>
                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                      {solution.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="max-w-2xl">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold leading-tight">
                  Not sure which service fits?
                </h2>
                <p className="mt-3 text-muted-foreground">
                  Share what you want to build. Revenuxe will help map the right service path, architecture, and launch plan.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full px-7 py-4 text-sm font-semibold text-primary-foreground"
                style={{ background: "var(--brand-gradient)" }}
              >
                Start Your Project
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
