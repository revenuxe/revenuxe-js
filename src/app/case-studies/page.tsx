import { supabaseServer } from "@/integrations/supabase/server";
import CaseStudies from "@/page-views/CaseStudies";
import { withRetry } from "@/lib/fetchWithRetry";

export const dynamic = "force-dynamic";

export default async function CaseStudiesPage() {
  let caseStudies: any[] = [];
  try {
    const { data, error } = await withRetry(async () =>
      await supabaseServer
        .from("case_studies")
        .select("*")
        .eq("featured", true)
        .order("created_at", { ascending: false }),
    );

    if (error) {
      console.error("Error fetching case studies:", error);
    } else {
      caseStudies = (data as any) || [];
    }
  } catch (err) {
    console.error("[CaseStudiesPage] fetch failed after retries:", err);
  }

  return <CaseStudies caseStudies={caseStudies} />;
}


