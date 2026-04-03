import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { SEOHead } from "@/components/SEOHead";
import { PortableText } from "@portabletext/react";
import type { ReactNode } from "react";
import { absoluteCanonicalUrl, getCanonicalOrigin } from "@/lib/seo/canonical";

interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: any[] | null;
  image_url: string | null;
  author: string;
  category: string | null;
  created_at: string;
}

const ArticleDetail = async ({ article }: { article: Article }) => {
  const canonicalUrl = await absoluteCanonicalUrl(`/articles/${article.slug}`);
  const origin = await getCanonicalOrigin();

  const portableTextComponents = {
    block: {
      h2: ({ children }: { children: ReactNode }) => (
        <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">{children}</h2>
      ),
      h3: ({ children }: { children: ReactNode }) => (
        <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">{children}</h3>
      ),
      normal: ({ children }: { children: ReactNode }) => (
        <p className="text-base leading-relaxed mb-6 text-foreground/90">{children}</p>
      ),
    },
    list: {
      bullet: ({ children }: { children: ReactNode }) => (
        <ul className="list-disc list-inside mb-6 space-y-2 text-foreground/90">{children}</ul>
      ),
      number: ({ children }: { children: ReactNode }) => (
        <ol className="list-decimal list-inside mb-6 space-y-2 text-foreground/90">{children}</ol>
      ),
    },
    listItem: ({ children }: { children: ReactNode }) => (
      <li className="leading-relaxed ml-4">{children}</li>
    ),
    marks: {
      link: ({ value, children }: any) => {
        const href = value?.href;
        if (!href) return children;
        return (
          <a
            href={href}
            className="text-primary hover:text-primary/80 underline font-medium transition-colors"
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          >
            {children}
          </a>
        );
      },
    },
    types: {
      // Add more custom portableText types here if your Sanity schema introduces them.
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`${article.title} | Revenuxe Blog`}
        description={
          article.excerpt ||
          `Read ${article.title} on the Revenuxe blog. Expert digital marketing insights, tips & strategies.`
        }
        keywords={`${article.category || "digital marketing"}, digital marketing blog, ${article.title
          .split(" ")
          .slice(0, 3)
          .join(", ")}, Revenuxe`}
        canonicalUrl={canonicalUrl}
        ogType="article"
        schemaData={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": article.title,
          "description": article.excerpt || article.title,
          "author": { "@type": "Person", "name": article.author },
          "publisher": { "@type": "Organization", "name": "Revenuxe", "url": origin },
          "datePublished": article.created_at,
          ...(article.image_url ? { image: article.image_url } : {}),
          "mainEntityOfPage": canonicalUrl
        }}
      />
      <Navigation />
      <main className="pt-20">
        <article className="py-8 md:py-12 px-0 md:px-4">
          <div className="container mx-auto max-w-5xl px-4 md:px-6 lg:px-8">
            <Button variant="ghost" asChild className="mb-8">
              <Link href="/articles">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Articles
              </Link>
            </Button>

            <Card className="overflow-hidden border-0 md:border shadow-none md:shadow-sm">
              {article.image_url && (
                <div className="w-full h-64 md:h-96 overflow-hidden">
                  <img
                    src={article.image_url}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="p-4 md:p-8 lg:p-12">
                <Badge className="mb-4">{article.category || "Insights"}</Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  {article.title}
                </h1>

                <div className="flex items-center gap-6 text-muted-foreground mb-8 pb-8 border-b">
                  <div className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    <span className="font-medium">{article.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    <span>
                      {new Date(article.created_at).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </div>

                <div className="prose prose-base md:prose-lg max-w-none">
                  <p className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8">
                    {article.excerpt || ""}
                  </p>
                  <div className="article-content w-full">
                    <PortableText value={article.content || []} components={portableTextComponents as any} />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default ArticleDetail;
