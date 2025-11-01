import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Loader2, ArrowRight } from "lucide-react";
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
  featured: boolean;
}

const CaseStudies = () => {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCaseStudies();
  }, []);

  const fetchCaseStudies = async () => {
    try {
      const { data, error } = await supabase
        .from("case_studies")
        .select("*")
        .eq("featured", true)
        .order("created_at", { ascending: false });

      if (error) throw error;
      setCaseStudies(data || []);
    } catch (error) {
      console.error("Error fetching case studies:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Case Studies - Real Client Success Stories | ArrowMind"
        description="Explore our portfolio of successful digital marketing case studies. See how we've helped businesses achieve remarkable results through strategic solutions."
        keywords="case studies, client success stories, digital marketing results, portfolio, business transformation"
      />
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-background to-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold">
                Our <span className="text-primary">Case Studies</span>
              </h1>
              <p className="text-muted-foreground text-xl">
                Real results from real clients. Discover how we've helped businesses transform their digital presence.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {loading ? (
              <div className="flex justify-center items-center min-h-[400px]">
                <Loader2 className="h-12 w-12 animate-spin text-primary" />
              </div>
            ) : caseStudies.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg">
                  No case studies available at the moment. Check back soon!
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {caseStudies.map((study) => (
                  <Card key={study.id} className="overflow-hidden hover:shadow-2xl transition-shadow duration-300 border-border group cursor-pointer">
                    <Link to={`/case-studies/${study.id}`}>
                      {study.image_url && (
                        <div className="aspect-video overflow-hidden bg-muted">
                          <img
                            src={study.image_url}
                            alt={study.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <CardContent className="p-6 space-y-4">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="text-2xl font-bold text-foreground">
                            {study.title}
                          </h3>
                          {study.featured && (
                            <Badge variant="default" className="bg-primary">
                              Featured
                            </Badge>
                          )}
                        </div>
                        
                        <div className="space-y-2">
                          <div>
                            <span className="text-sm font-semibold text-primary">Client:</span>
                            <p className="text-muted-foreground">{study.client_name}</p>
                          </div>
                          <div>
                            <span className="text-sm font-semibold text-primary">Industry:</span>
                            <p className="text-muted-foreground">{study.industry}</p>
                          </div>
                        </div>

                        <div className="space-y-3 pt-2">
                          <div>
                            <h4 className="font-semibold text-foreground mb-1">Challenge</h4>
                            <p className="text-sm text-muted-foreground line-clamp-2">
                              {study.challenge}
                            </p>
                          </div>

                          <div>
                            <h4 className="font-semibold text-foreground mb-1">Solution</h4>
                            <p className="text-sm text-muted-foreground line-clamp-2">
                              {study.solution}
                            </p>
                          </div>

                          <div>
                            <h4 className="font-semibold text-foreground mb-1">Results</h4>
                            <p className="text-sm text-muted-foreground line-clamp-2">
                              {study.results}
                            </p>
                          </div>
                        </div>

                        <Button variant="ghost" className="w-full group-hover:bg-primary/10 transition-colors">
                          View Full Case Study
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </CardContent>
                    </Link>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;
