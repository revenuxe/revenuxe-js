import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Loader2, ExternalLink, ArrowLeft } from "lucide-react";
import { SEO } from "@/components/SEO";

interface CaseStudy {
  id: string;
  title: string;
  client_name: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string;
  image_url: string | null;
  website_url: string | null;
  featured: boolean;
}

const CaseStudyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCaseStudy();
  }, [id]);

  const fetchCaseStudy = async () => {
    try {
      const { data, error } = await supabase
        .from("case_studies" as any)
        .select("*")
        .eq("id", id)
        .single();

      if (error) throw error;
      setCaseStudy(data as any);
    } catch (error) {
      console.error("Error fetching case study:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-20 container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Case Study Not Found</h1>
          <Link to="/case-studies">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Case Studies
            </Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${caseStudy.title} - Case Study | ArrowMind`}
        description={`${caseStudy.challenge.substring(0, 150)}...`}
        keywords={`case study, ${caseStudy.industry}, ${caseStudy.client_name}, digital marketing success`}
      />
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-br from-background via-background to-primary/5">
          <div className="container mx-auto px-4">
            <Link to="/case-studies" className="inline-flex items-center text-primary hover:underline mb-6">
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
            <Link to="/contact">
              <Button size="lg" className="text-lg px-8">
                Get Started Today
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudyDetail;
