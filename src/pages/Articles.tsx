import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import PageHero from "@/components/PageHero";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User } from "lucide-react";
import { SEO } from "@/components/SEO";

interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image_url: string | null;
  author: string;
  category: string;
  created_at: string;
}

const Articles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const { data, error } = await supabase
        .from("articles" as any)
        .select("*")
        .eq("published", true)
        .order("created_at", { ascending: false });

      if (error) throw error;
      setArticles((data as any) || []);
    } catch (error) {
      console.error("Error fetching articles:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Marketing Blog — SEO Tips, Growth Hacks & Industry Insights | Revenuxe"
        description="Read expert digital marketing articles from Revenuxe. Get actionable SEO tips, Google Ads strategies, social media hacks & AI marketing insights to grow your business faster."
        keywords="digital marketing blog, SEO tips 2026, Google Ads strategy, social media marketing tips, AI marketing insights, Revenuxe blog, marketing growth hacks"
        canonicalUrl="https://revenuxe.com/articles"
      />
      <Navigation />
      <PageHero
        title="Latest Articles &"
        highlight="Insights"
        subtitle="Stay updated with the latest trends, strategies, and insights in digital marketing"
      />
      <main>
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">

            {loading ? (
              <div className="text-center py-12">
                <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent"></div>
                <p className="mt-4 text-muted-foreground">Loading articles...</p>
              </div>
            ) : articles.length === 0 ? (
              <Card className="p-12 text-center">
                <p className="text-muted-foreground text-lg">
                  No articles published yet. Check back soon!
                </p>
              </Card>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article) => (
                  <Link key={article.id} to={`/articles/${article.slug}`}>
                    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                      {article.image_url && (
                        <div className="w-full h-48 overflow-hidden">
                          <img
                            src={article.image_url}
                            alt={article.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <div className="p-6 flex-1 flex flex-col">
                        <Badge className="w-fit mb-3">{article.category}</Badge>
                        <h3 className="text-xl font-bold mb-3 hover:text-primary transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 flex-1">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            <span>{article.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>
                              {new Date(article.created_at).toLocaleDateString(
                                "en-US",
                                { month: "short", day: "numeric", year: "numeric" }
                              )}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
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

export default Articles;
