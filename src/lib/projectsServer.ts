import { supabaseServer } from "@/integrations/supabase/server";

export type ProjectSummary = {
  id: string;
  title: string;
  info?: string | null;
  logo_url?: string | null;
  website_url?: string | null;
  published?: any;
  created_at?: string;
  short_description?: string | null;
};

function isTruthyPublished(v: any) {
  if (v === true) return true;
  if (v === 1) return true;
  if (v === "1") return true;
  if (typeof v === "string") {
    const s = v.toLowerCase();
    return s === "true" || s === "t" || s === "yes" || s === "y";
  }
  return false;
}

// Fetches published projects for marketing sections.
// We avoid relying on `.eq("published", true)` because `published` might be stored as boolean or string.
export async function fetchPublishedProjects(limit: number) {
  const { data } = await supabaseServer
    .from("projects" as any)
    .select("id,title,info,logo_url,website_url,published,created_at")
    .order("created_at", { ascending: false })
    .limit(limit);

  const raw = ((data as any) || []) as ProjectSummary[];
  const hasPublishedField = raw.some((p) =>
    Object.prototype.hasOwnProperty.call(p, "published")
  );

  if (!hasPublishedField) return raw;
  return raw.filter((p) => isTruthyPublished(p.published));
}

