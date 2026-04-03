import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { SEOHead } from "@/components/SEOHead";
import { Card } from "@/components/ui/card";

type Project = {
  id: string;
  title: string;
  info?: string | null;
  short_description?: string | null;
  logo_url?: string | null;
  website_url?: string | null;
};

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Projects — Completed Work by Revenuxe | Revenuxe"
        description="Explore recent and completed AI digital marketing projects. See brand logos, project highlights, and the websites we helped grow."
        keywords="projects, digital marketing projects, AI marketing agency India, SEO case proof, client logos, marketing outcomes, Revenuxe projects"
        canonicalUrl="https://revenuxe.com/projects"
      />

      <Navigation />

      <PageHero
        title="Our"
        highlight="Projects"
        subtitle="Completed work across SEO, performance marketing, web development and growth."
      />

      <main className="container mx-auto px-4 py-16">
        {projects.length === 0 ? (
          <div className="max-w-3xl mx-auto text-center py-16">
            <h2 className="text-2xl font-bold">No projects published yet.</h2>
            <p className="text-muted-foreground mt-3">
              Admin will publish completed projects here.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {projects.map((p) => (
              <a
                key={p.id}
                href={p.website_url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="p-6 border-border bg-card/40 hover:shadow-xl transition-shadow h-full">
                  <div className="flex items-center justify-center">
                    <img
                      src={p.logo_url || "/placeholder.svg"}
                      alt={`${p.title} logo`}
                      className="max-h-16 w-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-lg font-bold mt-4 text-center">
                    {p.title}
                  </h3>
                  {(p.short_description ?? p.info) ? (
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-3">
                      {p.short_description ?? p.info}
                    </p>
                  ) : null}
                </Card>
              </a>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

