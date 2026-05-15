import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { marketingServiceLinks } from "@/data/marketingServiceLinks";
import { absoluteCanonicalUrl } from "@/lib/seo/canonical";

export default async function MarketingServicesPage() {
  const canonicalUrl = await absoluteCanonicalUrl("/marketing");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title="Marketing Services | SEO, Performance Marketing & Growth | Revenuxe"
        description="Explore Revenuxe marketing services including SEO, performance marketing, social media, content, email, landing pages, analytics, branding, and AI website services."
        keywords="marketing services, SEO services, performance marketing, social media marketing, content marketing, email marketing, landing pages"
        canonicalUrl={canonicalUrl}
      />
      <Navigation />

      <main>
        <section className="relative overflow-hidden bg-secondary pt-28 pb-14 md:pt-36 md:pb-20">
          <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(hsl(var(--primary))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary))_1px,transparent_1px)] [background-size:72px_72px]" />
          <div className="relative container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <p className="text-accent font-semibold text-sm tracking-wider uppercase">
                Core Services Marketing
              </p>
              <div className="mt-4 grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-tight">
                  Marketing pages for growth, traffic, leads, and conversion.
                </h1>
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                  Browse the dedicated marketing service pages for SEO, paid campaigns, content, email, analytics, branding, AI website builds, and conversion-focused landing pages.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {marketingServiceLinks.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group flex min-h-40 flex-col rounded-2xl border border-border bg-card p-5 md:p-6 transition-all hover:-translate-y-1 hover:border-accent/60 hover:shadow-xl"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="text-xl font-display font-bold group-hover:text-accent transition-colors">
                      {service.title}
                    </h2>
                    <ArrowUpRight className="h-5 w-5 text-accent flex-shrink-0" />
                  </div>
                  <span className="mt-auto pt-8 text-sm font-semibold text-primary group-hover:text-accent">
                    Open marketing page
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
