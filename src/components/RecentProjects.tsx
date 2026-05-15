"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";

type RecentProject = {
  id: string;
  title: string;
  info?: string | null;
  short_description?: string | null;
  logo_url?: string | null;
  website_url?: string | null;
  project_type?: string | null;
};

export default function RecentProjects({
  projects,
}: {
  projects: RecentProject[];
}) {
  const fallbackProjects: RecentProject[] = [
    {
      id: "saas-control-plane",
      title: "SaaS Control Plane",
      short_description: "Subscription-ready product dashboard with roles, billing, analytics, and admin workflows.",
    },
    {
      id: "ai-ops-console",
      title: "AI Operations Console",
      short_description: "Internal AI system for knowledge retrieval, task automation, and team productivity.",
    },
    {
      id: "marketplace-platform",
      title: "Marketplace Platform",
      short_description: "Scalable marketplace architecture with onboarding, payments, search, and vendor tools.",
    },
  ];
  const list = Array.isArray(projects) && projects.length > 0 ? projects.slice(0, 8) : fallbackProjects;

  return (
    <section id="recent-projects" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between gap-6 mb-8">
            <div>
              <p className="text-accent font-semibold text-sm tracking-wider uppercase">Recent Projects</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2">
                Recently shipped websites and web apps.
              </h2>
              <p className="text-muted-foreground mt-3 max-w-2xl">
                A quick look at recent Revenuxe builds, from business websites to product-style web applications.
              </p>
            </div>
          </div>

          <Carousel opts={{ align: "start", loop: true }} className="relative">
            <CarouselContent className="px-1">
              {list.map((p) => {
                const description = p.short_description ?? p.info;
                const projectType = p.project_type || (description?.toLowerCase().includes("platform") ? "Web App" : "Website");
                const content = (
                  <Card className="h-full w-full overflow-hidden rounded-xl border-border bg-card hover:shadow-xl transition-all">
                    <div className="h-28 border-b border-border bg-[radial-gradient(circle_at_30%_20%,hsl(var(--accent)/0.22),transparent_32%),linear-gradient(135deg,hsl(var(--secondary)),hsl(var(--card)))] p-4">
                      <div className="flex items-center justify-between">
                        <span className="rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-semibold text-muted-foreground">
                          {projectType}
                        </span>
                        <ArrowUpRight className="h-4 w-4 text-accent" />
                      </div>
                    </div>
                    <div className="h-full flex items-start gap-4 p-5 text-left">
                      <div className="shrink-0">
                        <img
                          src={p.logo_url || "/placeholder.svg"}
                          alt={`${p.title} logo`}
                          className="h-12 w-12 rounded-xl object-contain bg-background border border-border/70 p-2"
                          loading="lazy"
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="text-base font-semibold">{p.title}</div>
                        {description ? (
                          <div className="text-sm text-muted-foreground mt-2 line-clamp-3">
                            {description}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </Card>
                );

                return (
                  <CarouselItem
                    key={p.id}
                    className="px-2 basis-[88%] sm:basis-1/2 lg:basis-1/3"
                  >
                    {p.website_url ? (
                      <a
                        href={p.website_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${p.title}`}
                        className="block h-full w-full cursor-pointer"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="block h-full w-full">{content}</div>
                    )}
                  </CarouselItem>
                );
              })}

              <CarouselItem className="px-2 basis-[88%] sm:basis-1/2 lg:basis-1/3">
                <Link href="/projects" className="block h-full w-full cursor-pointer">
                  <Card className="h-full min-h-[246px] w-full p-5 rounded-xl border-border bg-card hover:shadow-xl transition-shadow">
                    <div className="h-full flex items-center gap-4 text-left">
                      <div className="shrink-0">
                        <div className="h-12 w-12 rounded-xl flex items-center justify-center border border-border/70 bg-background">
                          <span className="text-primary text-lg font-bold">+</span>
                        </div>
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold">Show More</div>
                        <div className="text-xs text-muted-foreground mt-1 line-clamp-2">
                          View all software projects
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              </CarouselItem>
            </CarouselContent>

            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
