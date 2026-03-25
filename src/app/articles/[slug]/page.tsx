import { notFound } from "next/navigation";
import { supabaseServer } from "@/integrations/supabase/server";
import ArticleDetail from "@/spa-pages/ArticleDetail";

export const dynamic = "force-dynamic";

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  const resolved = await params;

  const { data, error } = await supabaseServer
    .from("articles")
    .select("*")
    .eq("slug", resolved.slug)
    .eq("published", true)
    .single();

  if (error || !data) notFound();

  return <ArticleDetail article={data as any} />;
}

