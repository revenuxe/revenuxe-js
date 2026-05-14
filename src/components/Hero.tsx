"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CheckCircle2, Code2, Database, Layers3 } from "lucide-react";
import { GetStartedDialog } from "./GetStartedDialog";

const Hero = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const platformItems = [
    { icon: <Layers3 className="h-5 w-5" />, label: "Product Architecture", value: "Multi-tenant SaaS" },
    { icon: <Code2 className="h-5 w-5" />, label: "Frontend Engineering", value: "Next.js + TypeScript" },
    { icon: <Database className="h-5 w-5" />, label: "Data Layer", value: "Supabase + PostgreSQL" },
  ];

  return (
    <section className="relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--accent)/0.16),transparent_35%),linear-gradient(180deg,hsl(var(--background)),hsl(var(--secondary)))]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(hsl(var(--foreground))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--foreground))_1px,transparent_1px)] [background-size:72px_72px]" />

      <div className="relative container mx-auto px-4 pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-44 lg:pb-28">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-center max-w-7xl mx-auto">
          <div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02]">
              Building Scalable Software Products For Modern Businesses.
            </h1>
            <p className="mt-6 max-w-2xl text-base md:text-xl leading-relaxed text-muted-foreground">
              We design and engineer high-performance SaaS platforms, AI systems, web applications, and modern digital experiences.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className="rounded-full px-7 py-6 text-base font-semibold text-primary-foreground"
                style={{ background: "var(--brand-gradient)" }}
                onClick={() => setDialogOpen(true)}
              >
                Start Your Project
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Button>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-full border border-border bg-card/70 px-7 py-3 text-base font-semibold text-foreground backdrop-blur transition-colors hover:border-accent hover:text-accent"
              >
                View Work
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-foreground">
              {["SaaS application development", "AI software systems", "Scalable web applications"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-border bg-card/70 p-4 shadow-2xl shadow-black/20 backdrop-blur">
              <div className="rounded-xl border border-border bg-background p-4">
                <div className="mb-4 flex items-center justify-between border-b border-border pb-3">
                  <div className="flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-accent" />
                    <span className="h-3 w-3 rounded-full bg-primary" />
                    <span className="h-3 w-3 rounded-full bg-muted" />
                  </div>
                  <span className="text-xs text-muted-foreground">revenuxe.platform</span>
                </div>
                <div className="grid gap-3">
                  {platformItems.map((item) => (
                    <div key={item.label} className="flex items-center gap-4 rounded-lg border border-border bg-secondary/60 p-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">{item.label}</p>
                        <p className="font-semibold">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <GetStartedDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </section>
  );
};

export default Hero;
