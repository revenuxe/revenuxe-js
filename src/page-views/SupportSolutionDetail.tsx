import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SubServiceDetailDialogLauncher from "@/components/SubServiceDetailDialogLauncher";
import { SEOHead } from "@/components/SEOHead";
import { absoluteCanonicalUrl, getCanonicalOrigin } from "@/lib/seo/canonical";
import { getSupportSolutionPage } from "@/data/supportSolutionPages";

const SupportSolutionDetail = async ({ slug }: { slug: string }) => {
  const solution = getSupportSolutionPage(slug);

  if (!solution) {
    return null;
  }

  const origin = await getCanonicalOrigin();
  const canonicalUrl = await absoluteCanonicalUrl(`/sub-services/${slug}`);
  const relatedSolutions = solution.relatedSolutions
    .map((relatedSlug) => getSupportSolutionPage(relatedSlug))
    .filter(Boolean) as NonNullable<ReturnType<typeof getSupportSolutionPage>>[];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title={solution.seoTitle}
        description={solution.description}
        keywords={solution.seoKeywords}
        canonicalUrl={canonicalUrl}
        ogImage={`${origin}/og-service.png`}
      />
      <Navigation />

      <main>
        <section className="relative overflow-hidden bg-secondary pt-28 pb-16 md:pt-36 md:pb-24">
          <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(hsl(var(--primary))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary))_1px,transparent_1px)] [background-size:72px_72px]" />
          <div className="relative container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <p className="text-accent font-semibold text-sm tracking-wider uppercase">
                  Revenuxe Support Solution
                </p>
                <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-tight">
                  {solution.title}
                </h1>
                <p className="mt-5 text-lg md:text-xl text-muted-foreground leading-relaxed">
                  {solution.subtitle}
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <SubServiceDetailDialogLauncher />
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
                  >
                    Explore Core Services
                  </Link>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-xl">
                <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                  How Revenuxe helps
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {solution.revenuxeHelp}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid gap-5 lg:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
                <p className="text-accent font-semibold text-sm tracking-wider uppercase">Capabilities</p>
                <h2 className="mt-3 text-2xl sm:text-3xl font-display font-bold">
                  What this includes
                </h2>
                <div className="mt-6 grid gap-3">
                  {solution.capabilities.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                      <p className="text-sm md:text-base text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
                <p className="text-accent font-semibold text-sm tracking-wider uppercase">Use Cases</p>
                <h2 className="mt-3 text-2xl sm:text-3xl font-display font-bold">
                  Where it helps most
                </h2>
                <div className="mt-6 grid gap-3">
                  {solution.useCases.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                      <p className="text-sm md:text-base text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10 md:mb-14">
                <p className="text-accent font-semibold text-sm tracking-wider uppercase">Process</p>
                <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-display font-bold">
                  A practical path from idea to working system
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {solution.process.map((step, index) => (
                  <div key={step.step} className="rounded-2xl border border-border bg-card p-5 transition-all hover:border-accent/60 hover:shadow-lg">
                    <p className="text-sm font-bold text-accent">0{index + 1}</p>
                    <h3 className="mt-4 text-lg font-display font-bold">{step.step}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="mb-8">
                <p className="text-accent font-semibold text-sm tracking-wider uppercase">Connected Services</p>
                <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-display font-bold">
                  Core services this supports
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {solution.relatedServices.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent/60 hover:shadow-xl"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl font-display font-bold">{service.title}</h3>
                      <ArrowUpRight className="h-5 w-5 flex-shrink-0 text-muted-foreground transition-colors group-hover:text-accent" />
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {relatedSolutions.length > 0 && (
          <section className="py-14 md:py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="mb-8">
                  <p className="text-accent font-semibold text-sm tracking-wider uppercase">Similar Support Solutions</p>
                  <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-display font-bold">
                    Related implementation pages
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {relatedSolutions.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/sub-services/${related.slug}`}
                      className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent/60 hover:shadow-xl"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-xl font-display font-bold">{related.title}</h3>
                        <ArrowUpRight className="h-5 w-5 flex-shrink-0 text-muted-foreground transition-colors group-hover:text-accent" />
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {related.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        <section className="py-14 md:py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="max-w-2xl">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold leading-tight">
                  Build faster with Revenuxe.
                </h2>
                <p className="mt-3 text-muted-foreground">
                  We will help you choose the right support workflow and connect it to your product roadmap.
                </p>
              </div>
              <SubServiceDetailDialogLauncher />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SupportSolutionDetail;
