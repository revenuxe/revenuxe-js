import { supabaseServer } from "@/integrations/supabase/server";
import Projects from "@/page-views/Projects";
import { normalizeProjectLinks } from "@/lib/projectsServer";
import { withRetry } from "@/lib/fetchWithRetry";

export const dynamic = "force-dynamic";

export default async function ProjectsPage() {
  let projects: any[] = [];
  try {
    const { data, error } = await withRetry(() =>
      supabaseServer
        .from("projects" as any)
        .select("*")
        .order("created_at", { ascending: false }),
    );

    if (!error) projects = (data as any) || [];
  } catch (error) {
    console.error("[ProjectsPage] fetch failed after retries:", error);
    projects = [];
  }

  const hasPublishedField = projects.some((p: any) =>
    Object.prototype.hasOwnProperty.call(p, "published")
  );
  const isPublished = (v: any) => {
    if (v === true) return true;
    if (v === 1) return true;
    if (v === "1") return true;
    if (typeof v === "string") {
      const s = v.toLowerCase();
      return s === "true" || s === "t" || s === "yes" || s === "y";
    }
    return false;
  };

  projects = hasPublishedField
    ? projects.filter((p: any) => isPublished(p.published))
    : projects;

  return <Projects projects={normalizeProjectLinks(projects)} />;
}


