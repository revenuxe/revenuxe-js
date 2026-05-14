import SubServiceDetail from "@/page-views/SubServiceDetail";
import SupportSolutionDetail from "@/page-views/SupportSolutionDetail";
import { getSupportSolutionPage } from "@/data/supportSolutionPages";

export default async function SubServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  const resolved = await params;
  if (getSupportSolutionPage(resolved.slug)) {
    return <SupportSolutionDetail slug={resolved.slug} />;
  }
  return <SubServiceDetail slug={resolved.slug} />;
}

