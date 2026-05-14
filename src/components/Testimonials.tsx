"use client";

import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const proofItems = [
  {
    name: "GK Earth Works",
    url: "https://www.gkearthworks.com/",
    work: "Business website build with clearer service architecture, inquiry flow, and location-focused pages.",
  },
  {
    name: "Laptap",
    url: "https://www.laptap.in/",
    work: "Used laptop trade website with a clearer product-led browsing experience.",
  },
  {
    name: "Arrow Design",
    url: "https://arrowdesign.in",
    work: "Interior design website focused on service discovery and inquiry flow.",
  },
  {
    name: "Fix My Spin",
    url: "https://fixmyspin.com",
    work: "Appliance repair website structured for local service visibility and lead capture.",
  },
];

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
            <div className="max-w-2xl">
              <p className="text-accent font-semibold text-sm tracking-wider uppercase">
                Verifiable Client Proof
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display leading-tight mt-2">
                Real Websites, Live Projects, Public Results
              </h2>
              <p className="text-muted-foreground mt-4 text-sm md:text-base leading-relaxed">
                Instead of anonymous praise, review live work that can be opened, checked, and compared directly.
              </p>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent transition-colors"
            >
              View all projects
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {proofItems.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card border border-border rounded-2xl p-5 md:p-6 hover:border-accent/60 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                    {initials(item.name)}
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
                <h3 className="text-lg font-display font-bold mt-5 group-hover:text-accent transition-colors">
                  {item.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                  {item.work}
                </p>
                <div className="flex items-center gap-2 text-xs font-semibold text-foreground mt-5">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  Live project link
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
