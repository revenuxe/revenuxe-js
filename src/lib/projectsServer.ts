import { supabaseServer } from "@/integrations/supabase/server";
import { withRetry } from "@/lib/fetchWithRetry";
import { prependFeaturedProjects } from "@/data/featuredProjects";

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

const redirectedProjectHosts: Record<string, string> = {
  "dexohomes.com": "www.dexohomes.com",
  "everyspaces.com": "www.everyspaces.com",
  "gkearthworks.com": "www.gkearthworks.com",
  "laptap.in": "www.laptap.in",
};

export function normalizeProjectWebsiteUrl(value?: string | null) {
  if (!value) return value ?? null;

  try {
    const url = new URL(value);
    const finalHost = redirectedProjectHosts[url.hostname.toLowerCase()];

    if (finalHost) {
      url.hostname = finalHost;
      url.protocol = "https:";
      return url.toString();
    }
  } catch {
    return value;
  }

  return value;
}

export function normalizeProjectLinks<T extends { website_url?: string | null }>(
  projects: T[],
) {
  return projects.map((project) => ({
    ...project,
    website_url: normalizeProjectWebsiteUrl(project.website_url),
  }));
}

export function normalizeAndFeatureProjects<T extends {
  id?: string;
  title?: string;
  website_url?: string | null;
}>(projects: T[]) {
  return prependFeaturedProjects(normalizeProjectLinks(projects));
}

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
  try {
    const { data } = await withRetry(async () =>
      await supabaseServer
        .from("projects" as any)
        .select("id,title,info,logo_url,website_url,published,created_at")
        .order("created_at", { ascending: false })
        .limit(limit),
    );

    const raw = ((data as any) || []) as ProjectSummary[];
    const hasPublishedField = raw.some((p) =>
      Object.prototype.hasOwnProperty.call(p, "published")
    );

    const published = hasPublishedField
      ? raw.filter((p) => isTruthyPublished(p.published))
      : raw;

    return normalizeAndFeatureProjects(published);
  } catch (err) {
    console.error("[fetchPublishedProjects] failed after retries:", err);
    return normalizeAndFeatureProjects([]);
  }
}


