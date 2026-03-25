import { supabaseServer } from "@/integrations/supabase/server";
import Articles from "@/spa-pages/Articles";

export const dynamic = "force-dynamic";

export default async function ArticlesPage() {
  const { data, error } = await supabaseServer
    .from("articles")
    .select("*")
    .eq("published", true)
    .order("created_at", { ascending: false });

  if (error) {
    // Render the empty state; error will show up in server logs.
    console.error("Error fetching articles:", error);
  }

  return <Articles articles={(data as any) || []} />;
}

