import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { ArrowRight, Code2, Layers3, ShieldCheck, Users } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";
import { absoluteCanonicalUrl } from "@/lib/seo/canonical";

const AboutUs = async () => {
  const canonicalUrl = await absoluteCanonicalUrl("/about");
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="About Revenuxe - Software Development Company"
        description="Revenuxe is a modern software development company building SaaS products, AI systems, web applications, custom software, and high-performance digital platforms."
        keywords="about Revenuxe, software development company, SaaS development company, AI software development company, web app development company"
        canonicalUrl={canonicalUrl}
      />
      <Navigation />

      <PageHero
        title="About"
        highlight="Revenuxe"
        subtitle="A software company building scalable products, AI systems, and modern web platforms."
      />

      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Our Story</h2>
          <div className="space-y-4 text-foreground/80 text-lg leading-relaxed">
            <p>
              Revenuxe is built for businesses that need more than a basic online presence. We help teams design,
              engineer, and launch scalable software products that can support real users, real workflows, and long-term growth.
            </p>
            <p>
              Our work focuses on SaaS development, web application development, AI software systems, custom software,
              platform modernization, and high-performance websites. Every project is shaped around practical architecture,
              clean interfaces, and production-ready engineering.
            </p>
            <p>
              We operate like a product studio and engineering partner: clarify the idea, design the system, build the
              platform, launch carefully, and keep improving based on real usage.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">What We Value</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Layers3,
                title: "Scalable Architecture",
                text: "We build software foundations that can evolve from MVP to mature product without becoming fragile.",
              },
              {
                icon: ShieldCheck,
                title: "Production Quality",
                text: "Security, performance, maintainability, and testing are part of the build, not afterthoughts.",
              },
              {
                icon: Users,
                title: "User-Centered Systems",
                text: "Every workflow, dashboard, portal, and AI feature is designed around how people actually use the product.",
              },
            ].map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="text-center p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">What We Build</h2>
          <div className="space-y-6">
            {[
              {
                title: "SaaS Products",
                text: "Subscription-ready platforms with dashboards, roles, billing, analytics, and scalable product workflows.",
              },
              {
                title: "Web Applications",
                text: "Fast, secure, app-like systems built with modern frontend, backend, database, and deployment practices.",
              },
              {
                title: "AI Software Systems",
                text: "AI assistants, workflow automation, knowledge systems, data extraction, and intelligent product features.",
              },
              {
                title: "Websites & Platforms",
                text: "Premium business websites, enterprise sites, landing pages, CMS-driven platforms, and Next.js builds.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <ArrowRight className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-foreground/80">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 md:p-12 text-center">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
              <Code2 className="h-7 w-7 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Our Mission</h2>
            <p className="text-lg text-foreground/80">
              To help modern businesses build software products that are useful, scalable, reliable, and ready for the next stage of growth.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
