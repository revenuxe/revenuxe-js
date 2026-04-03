import Articles from "@/page-views/Articles";
import { fetchPublishedPosts } from "@/sanity/queries";

export const dynamic = "force-dynamic";

export default async function ArticlesPage() {
  const articles = await fetchPublishedPosts(60);
  return <Articles articles={(articles as any) || []} />;
}

