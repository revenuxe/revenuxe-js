"use client";

import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";

type RecentProject = {
  id: string;
  title: string;
  info?: string | null;
  short_description?: string | null;
  logo_url?: string | null;
  website_url?: string | null;
};

export default function RecentProjects({
  projects,
}: {
  projects: RecentProject[];
}) {
  const list = Array.isArray(projects) ? projects.slice(0, 8) : [];

  return (
    <section id="recent-projects" className="py-16 md:py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between gap-6 mb-8">
            <div>
              <p className="text-accent font-semibold text-sm tracking-wider uppercase">Recent Completed Projects</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2">
                Proof of Work, Real Outcomes
              </h2>
              <p className="text-muted-foreground mt-3 max-w-2xl">
                Browse a few of the brands we&apos;ve helped deliver results for.
              </p>
            </div>
          </div>

          {list.length === 0 ? (
            <div className="max-w-3xl mx-auto text-center py-8">
              <h3 className="text-xl font-bold">No projects published yet.</h3>
              <p className="text-muted-foreground mt-2">
                Go to Admin Dashboard → Projects and set “Publish project on website” to ON.
              </p>
            </div>
          ) : (
            <Carousel opts={{ align: "start", loop: true }} className="relative">
              <CarouselContent className="px-0 ml-0">
                {list.map((p) => {
                  const description = p.short_description ?? p.info;
                  return (
                    <CarouselItem
                      key={p.id}
                      className="px-2 basis-[33.333%]"
                    >
                      <a
                        href={p.website_url || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${p.title}`}
                        className="block h-full"
                      >
                        <Card className="h-full p-4 rounded-2xl border-border bg-background/60 hover:shadow-xl transition-shadow">
                          <div className="h-full flex items-center gap-4 text-left">
                            <div className="shrink-0">
                              <img
                                src={p.logo_url || "/placeholder.svg"}
                                alt={`${p.title} logo`}
                                className="h-14 w-14 rounded-2xl object-contain bg-background border border-border/70 p-2"
                                loading="lazy"
                              />
                            </div>
                            <div className="min-w-0">
                              <div className="text-sm font-semibold truncate">{p.title}</div>
                              {description ? (
                                <div className="text-xs text-muted-foreground mt-1 line-clamp-2">
                                  {description}
                                </div>
                              ) : null}
                            </div>
                          </div>
                        </Card>
                      </a>
                    </CarouselItem>
                  );
                })}

                <CarouselItem className="px-2 basis-[33.333%]">
                  <Link href="/projects" className="block h-full">
                    <Card className="h-full p-4 rounded-2xl border-border bg-background/60 hover:shadow-xl transition-shadow">
                      <div className="h-full flex items-center gap-4 text-left">
                        <div className="shrink-0">
                          <div className="h-14 w-14 rounded-2xl flex items-center justify-center border border-border/70 bg-background">
                            <span className="text-primary text-lg font-bold">+</span>
                          </div>
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-semibold">Show More</div>
                          <div className="text-xs text-muted-foreground mt-1 line-clamp-2">
                            View all completed projects
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
          )}
        </div>
      </div>
    </section>
  );
}

