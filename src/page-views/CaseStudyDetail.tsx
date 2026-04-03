import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { SEOHead } from "@/components/SEOHead";
import { absoluteCanonicalUrl } from "@/lib/seo/canonical";

interface CaseStudy {
  id: string;
  title: string;
  client_name: string;
  industry: string | null;
  challenge: string | null;
  solution: string | null;
  results: string | null;
  image_url: string | null;
  website_url: string | null;
  featured: boolean;
}

const CaseStudyDetail = async ({ caseStudy }: { caseStudy: CaseStudy }) => {
  const canonicalUrl = await absoluteCanonicalUrl(`/case-studies/${caseStudy.id}`);
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`${caseStudy.title} - Case Study | Revenuxe`}
        description={`${(caseStudy.challenge || "").substring(0, 150)}...`}
        keywords={`case study, ${caseStudy.industry || "digital marketing"}, ${caseStudy.client_name}, digital marketing success`}
        canonicalUrl={canonicalUrl}
      />
      <Navigation />
      <main className="pt-20">
        {/* Hero Section with consistent background */}
        <section className="relative py-12 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary" />
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
          </div>
          <div className="absolute top-10 left-10 w-24 h-24 border-2 border-primary/20 rounded-full animate-pulse" />
          <div className="relative z-10 container mx-auto px-4">
            <Link href="/case-studies" className="inline-flex items-center text-primary hover:underline mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Case Studies
            </Link>
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <h1 className="text-4xl md:text-6xl font-bold">
                  {caseStudy.title}
                </h1>
                {caseStudy.featured && (
                  <Badge variant="default" className="bg-primary">
                    Featured
                  </Badge>
                )}
              </div>
              <div className="flex flex-wrap gap-4 text-lg text-muted-foreground">
                <div>
                  <span className="font-semibold text-primary">Client:</span> {caseStudy.client_name}
                </div>
                <div>
                  <span className="font-semibold text-primary">Industry:</span> {caseStudy.industry}
                </div>
              </div>
              {caseStudy.website_url && (
                <a
                  href={caseStudy.website_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-primary hover:underline"
                >
                  Visit Website
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </section>

        {/* Featured Image */}
        {caseStudy.image_url && (
          <section className="container mx-auto px-4 py-8">
            <div className="max-w-5xl mx-auto">
              <div className="aspect-video overflow-hidden rounded-lg shadow-2xl">
                <img
                  src={caseStudy.image_url}
                  alt={caseStudy.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>
        )}

        {/* Content Sections */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Challenge */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">The Challenge</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>

            {/* Solution */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Our Solution</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>

            {/* Results */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">The Results</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {caseStudy.results}
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center bg-primary/5 rounded-lg p-12 border border-primary/20">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Achieve Similar Results?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let's discuss how we can help transform your business
            </p>
            <Link href="/contact">
              <Button size="lg" className="text-lg px-8">Get Started Today</Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudyDetail;
