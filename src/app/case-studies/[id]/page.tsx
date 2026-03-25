import { notFound } from "next/navigation";
import { supabaseServer } from "@/integrations/supabase/server";
import CaseStudyDetail from "@/spa-pages/CaseStudyDetail";

export const dynamic = "force-dynamic";

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ id: string }> | { id: string };
}) {
  const resolved = await params;

  const { data, error } = await supabaseServer
    .from("case_studies")
    .select("*")
    .eq("id", resolved.id)
    .single();

  if (error || !data) notFound();

  return <CaseStudyDetail caseStudy={data as any} />;
}

