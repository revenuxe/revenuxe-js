import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getTechnologyPage, technologyPages } from "@/data/technologyPages";

type TechnologyRouteProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return technologyPages.map((technology) => ({ slug: technology.slug }));
}

export async function generateMetadata({ params }: TechnologyRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const technology = getTechnologyPage(slug);

  if (!technology) {
    return {};
  }

  return {
    title: `${technology.name} Development | Revenuxe`,
    description: `${technology.summary} Learn how Revenuxe helps businesses build scalable software with ${technology.name}.`,
  };
}

export default async function TechnologyPage({ params }: TechnologyRouteProps) {
  const { slug } = await params;
  const technology = getTechnologyPage(slug);

  if (!technology) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main>
        <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--accent)/0.16),transparent_36%)]" />
          <div className="relative container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <Link
                href="/#technologies"
                className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-accent"
              >
                <ArrowLeft className="h-4 w-4" />
                Technologies
              </Link>

              <div className="mt-8 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
                <div>
                  <p className="text-accent font-semibold text-sm tracking-wider uppercase">
                    {technology.eyebrow}
                  </p>
                  <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-tight">
                    {technology.name} development for scalable products.
                  </h1>
                  <p className="mt-6 text-base md:text-lg leading-relaxed text-muted-foreground">
                    {technology.summary}
                  </p>
                </div>

                <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
                  <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                    How Revenuxe helps
                  </p>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    {technology.revenuxeHelp}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-6 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-primary-foreground"
                    style={{ background: "var(--brand-gradient)" }}
                  >
                    Start Your Project
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-16 md:pb-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
                <h2 className="text-2xl font-display font-bold">Where it fits</h2>
                <div className="mt-6 grid gap-3">
                  {technology.useCases.map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-xl border border-border bg-secondary/50 p-4">
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-accent" />
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
                <h2 className="text-2xl font-display font-bold">Product outcomes</h2>
                <div className="mt-6 grid gap-3">
                  {technology.outcomes.map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-xl border border-border bg-secondary/50 p-4">
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-accent" />
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
