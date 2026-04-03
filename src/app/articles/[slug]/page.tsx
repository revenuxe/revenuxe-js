import { notFound } from "next/navigation";
import ArticleDetail from "@/page-views/ArticleDetail";
import { fetchPublishedPostBySlug } from "@/sanity/queries";

export const dynamic = "force-dynamic";

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  const resolved = await params;
  const article = await fetchPublishedPostBySlug(resolved.slug);
  if (!article) notFound();

  return <ArticleDetail article={article as any} />;
}

