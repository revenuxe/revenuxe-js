"use client";

import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { SEOHead } from "@/components/SEOHead";
import {
  ArrowRight,
  Bot,
  Boxes,
  ChartNoAxesCombined,
  DatabaseZap,
  Gauge,
  LayoutDashboard,
} from "lucide-react";

const projectPaths = [
  {
    title: "SaaS Product Build",
    description:
      "Plan subscriptions, roles, dashboards, onboarding, billing, and the technical foundation for a scalable SaaS product.",
    href: "/services/saas-development",
    icon: Boxes,
  },
  {
    title: "Web Application",
    description:
      "Turn workflows, portals, booking systems, and product ideas into secure web applications built with modern frameworks.",
    href: "/services/web-app-development",
    icon: LayoutDashboard,
  },
  {
    title: "AI Software System",
    description:
      "Identify where AI agents, assistants, automation, data retrieval, and language models can create practical product value.",
    href: "/services/ai-systems",
    icon: Bot,
  },
  {
    title: "Platform Modernization",
    description:
      "Map legacy websites, internal tools, and older stacks into faster, cleaner, and easier-to-scale software platforms.",
    href: "/services/platform-modernization",
    icon: Gauge,
  },
  {
    title: "Custom Software",
    description:
      "Scope custom portals, CRMs, dashboards, integrations, automations, and business systems around your operations.",
    href: "/services/custom-software",
    icon: DatabaseZap,
  },
  {
    title: "Product Growth Infrastructure",
    description:
      "Plan analytics, conversion surfaces, content systems, automation, and reporting that help software teams move faster.",
    href: "/services/conversion-platforms",
    icon: ChartNoAxesCombined,
  },
];

const planningSteps = [
  "Product goals and user workflows",
  "Core features and technical dependencies",
  "Architecture, data, integrations, and AI opportunities",
  "Launch plan, timeline, and next engineering milestones",
];

const ROICalculatorPage = ({ canonicalUrl }: { canonicalUrl: string }) => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Software Project Planner | Revenuxe"
        description="Plan a SaaS product, web application, AI software system, or custom platform with Revenuxe's software engineering team."
        keywords="software project planner, SaaS development planning, web app development company, AI software development company, custom software development"
        canonicalUrl={canonicalUrl}
      />
      <Navigation />
      <PageHero
        title="Plan Your"
        highlight="Software Project"
        subtitle="Choose the right build path, understand the technical priorities, and start with a focused engineering plan."
      />

      <main>
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 max-w-7xl mx-auto items-start">
              <div className="space-y-6">
                <p className="text-accent font-semibold text-sm tracking-wider uppercase">
                  Project Direction
                </p>
                <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight">
                  A clearer first step before development starts.
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Revenuxe helps founders and business teams convert rough ideas,
                  legacy systems, and operational problems into structured software
                  roadmaps. We define what to build, how it should scale, and which
                  technology decisions matter before the first sprint begins.
                </p>

                <div className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="font-display text-xl font-bold mb-4">
                    What we clarify with you
                  </h3>
                  <div className="grid gap-3">
                    {planningSteps.map((step) => (
                      <div key={step} className="flex items-center gap-3 text-sm">
                        <span className="h-2 w-2 rounded-full bg-accent" />
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {projectPaths.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="group rounded-2xl border border-border bg-card p-6 hover:-translate-y-1 hover:border-accent/60 hover:shadow-xl transition-all"
                    >
                      <div className="h-12 w-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-5">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="font-display text-xl font-bold group-hover:text-accent transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                        {item.description}
                      </p>
                      <div className="flex items-center gap-2 text-sm font-semibold mt-5">
                        Explore service
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-accent font-semibold text-sm tracking-wider uppercase">
                Start With Revenuxe
              </p>
              <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 mb-5">
                Build your next product with a software-first team.
              </h2>
              <p className="text-muted-foreground mb-8">
                Share the goal, current constraints, and the business outcome you
                want. We will help shape it into a practical development roadmap.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition"
              >
                Start Your Project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ROICalculatorPage;
