import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import { SEOHead } from "@/components/SEOHead";

interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string | null;
  image_url: string | null;
  author: string;
  category: string | null;
  created_at: string;
}

const ArticleDetail = ({ article }: { article: Article }) => {
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
        canonicalUrl={`https://revenuxe.com/articles/${article.slug}`}
        ogType="article"
        schemaData={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": article.title,
          "description": article.excerpt || article.title,
          "author": { "@type": "Person", "name": article.author },
          "publisher": { "@type": "Organization", "name": "Revenuxe" },
          "datePublished": article.created_at,
          ...(article.image_url ? { image: article.image_url } : {}),
          "mainEntityOfPage": `https://revenuxe.com/articles/${article.slug}`
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
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      components={{
                        h2: ({ children }) => (
                          <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
                            {children}
                          </h2>
                        ),
                        h3: ({ children }) => (
                          <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                            {children}
                          </h3>
                        ),
                        p: ({ children }) => (
                          <p className="text-base leading-relaxed mb-6 text-foreground/90">
                            {children}
                          </p>
                        ),
                        strong: ({ children }) => (
                          <strong className="font-bold text-foreground">
                            {children}
                          </strong>
                        ),
                        a: ({ href, children }) => (
                          <a
                            href={href}
                            className="text-primary hover:text-primary/80 underline font-medium transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {children}
                          </a>
                        ),
                        ul: ({ children }) => (
                          <ul className="list-disc list-inside mb-6 space-y-2 text-foreground/90">
                            {children}
                          </ul>
                        ),
                        ol: ({ children }) => (
                          <ol className="list-decimal list-inside mb-6 space-y-2 text-foreground/90">
                            {children}
                          </ol>
                        ),
                        li: ({ children }) => (
                          <li className="leading-relaxed ml-4">{children}</li>
                        ),
                        table: ({ children }) => (
                          <div className="overflow-x-auto my-8">
                            <table className="min-w-full border-collapse border border-border rounded-lg overflow-hidden">
                              {children}
                            </table>
                          </div>
                        ),
                        thead: ({ children }) => (
                          <thead className="bg-muted/50">{children}</thead>
                        ),
                        tbody: ({ children }) => (
                          <tbody className="divide-y divide-border">{children}</tbody>
                        ),
                        tr: ({ children }) => (
                          <tr className="hover:bg-muted/30 transition-colors">
                            {children}
                          </tr>
                        ),
                        th: ({ children }) => (
                          <th className="px-6 py-4 text-left text-sm font-semibold text-foreground border-b border-border">
                            {children}
                          </th>
                        ),
                        td: ({ children }) => (
                          <td className="px-6 py-4 text-sm text-foreground/90">
                            {children}
                          </td>
                        ),
                        blockquote: ({ children }) => (
                          <blockquote className="border-l-4 border-primary pl-6 py-2 my-6 italic text-foreground/80 bg-muted/30 rounded-r-lg">
                            {children}
                          </blockquote>
                        ),
                        code: ({ children }) => (
                          <code className="bg-muted px-2 py-1 rounded text-sm font-mono text-foreground">
                            {children}
                          </code>
                        ),
                      }}
                    >
                      {article.content || ""}
                    </ReactMarkdown>
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
