import { notFound } from "next/navigation";
import { supabaseServer } from "@/integrations/supabase/server";
import CaseStudyDetail from "@/page-views/CaseStudyDetail";
import { withRetry } from "@/lib/fetchWithRetry";

export const dynamic = "force-dynamic";

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ id: string }> | { id: string };
}) {
  const resolved = await params;
  const slugOrId = decodeURIComponent(resolved.id);

  try {
    const { data: bySlug, error: slugError } = await withRetry(async () =>
      await supabaseServer
        .from("case_studies")
        .select("*")
        .eq("slug", slugOrId)
        .single(),
    );

    if (bySlug && !slugError) {
      return <CaseStudyDetail caseStudy={bySlug as any} />;
    }

    const { data: byId, error: idError } = await withRetry(async () =>
      await supabaseServer
        .from("case_studies")
        .select("*")
        .eq("id", slugOrId)
        .single(),
    );

    if (idError || !byId) notFound();

    return <CaseStudyDetail caseStudy={byId as any} />;
  } catch (err) {
    console.error("[CaseStudyDetailPage] fetch failed after retries:", err);
    notFound();
  }
}



