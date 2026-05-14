import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceDetailDialogLauncher from "@/components/ServiceDetailDialogLauncher";
import { SEOHead } from "@/components/SEOHead";
import { absoluteCanonicalUrl, getCanonicalOrigin } from "@/lib/seo/canonical";
import { getSoftwareServicePage, softwareServicePages } from "@/data/softwareServicePages";

const SoftwareServiceDetail = async ({ slug }: { slug: string }) => {
  const service = getSoftwareServicePage(slug);

  if (!service) {
    return null;
  }

  const origin = await getCanonicalOrigin();
  const canonicalUrl = await absoluteCanonicalUrl(`/services/${slug}`);
  const relatedServices = service.related
    .map((relatedSlug) => getSoftwareServicePage(relatedSlug))
    .filter(Boolean) as NonNullable<ReturnType<typeof getSoftwareServicePage>>[];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title={service.seoTitle}
        description={service.description}
        keywords={service.seoKeywords}
        canonicalUrl={canonicalUrl}
        ogImage={`${origin}/og-service.png`}
      />
      <Navigation />

      <main>
        <section className="relative overflow-hidden bg-secondary pt-28 pb-16 md:pt-36 md:pb-24">
          <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(hsl(var(--primary))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary))_1px,transparent_1px)] [background-size:72px_72px]" />
          <div className="relative container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <p className="text-accent font-semibold text-sm tracking-wider uppercase">
                  Revenuxe Software Services
                </p>
                <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-tight">
                  {service.title}
                </h1>
                <p className="mt-5 text-lg md:text-xl text-muted-foreground leading-relaxed">
                  {service.subtitle}
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <ServiceDetailDialogLauncher />
                  <Link
                    href="/projects"
                    className="inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
                  >
                    View Recent Projects
                  </Link>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-xl">
                <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                  How Revenuxe helps
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {service.revenuxeHelp}
                </p>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {service.outcomes.map((outcome) => (
                    <div key={outcome} className="rounded-xl border border-border bg-secondary/50 p-4">
                      <p className="text-sm font-semibold">{outcome}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                {service.intro}
              </p>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid gap-5 lg:grid-cols-[1fr_1fr]">
              <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
                <p className="text-accent font-semibold text-sm tracking-wider uppercase">Deliverables</p>
                <h2 className="mt-3 text-2xl sm:text-3xl font-display font-bold">
                  What we build
                </h2>
                <div className="mt-6 grid gap-3">
                  {service.deliverables.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                      <p className="text-sm md:text-base text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
                <p className="text-accent font-semibold text-sm tracking-wider uppercase">Best Fit</p>
                <h2 className="mt-3 text-2xl sm:text-3xl font-display font-bold">
                  Who this is for
                </h2>
                <div className="mt-6 grid gap-3">
                  {service.builtFor.map((item) => (
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

        <section className="py-14 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10 md:mb-14">
                <p className="text-accent font-semibold text-sm tracking-wider uppercase">Process</p>
                <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-display font-bold">
                  From idea to production
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {service.process.map((step, index) => (
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

        {relatedServices.length > 0 && (
          <section className="py-14 md:py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="mb-8">
                  <p className="text-accent font-semibold text-sm tracking-wider uppercase">Similar Services</p>
                  <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-display font-bold">
                    Related software services
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {relatedServices.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/services/${related.slug}`}
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
                  Build your next product with Revenuxe.
                </h2>
                <p className="mt-3 text-muted-foreground">
                  Tell us what you want to build. We will help shape the scope, architecture, and launch plan.
                </p>
              </div>
              <ServiceDetailDialogLauncher />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SoftwareServiceDetail;
