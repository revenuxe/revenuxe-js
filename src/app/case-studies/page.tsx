import { supabaseServer } from "@/integrations/supabase/server";
import CaseStudies from "@/page-views/CaseStudies";

export const dynamic = "force-dynamic";

export default async function CaseStudiesPage() {
  const { data, error } = await supabaseServer
    .from("case_studies")
    .select("*")
    .eq("featured", true)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching case studies:", error);
  }

  return <CaseStudies caseStudies={(data as any) || []} />;
}

