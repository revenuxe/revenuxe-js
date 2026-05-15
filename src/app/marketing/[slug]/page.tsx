import ServiceDetail, { getMarketingServicePage } from "@/page-views/ServiceDetail";
import { redirect } from "next/navigation";

export default async function MarketingServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  const resolved = await params;

  if (!getMarketingServicePage(resolved.slug)) {
    redirect("/marketing");
  }

  return <ServiceDetail slug={resolved.slug} basePath="/marketing" />;
}
