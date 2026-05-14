import ServiceDetail from "@/page-views/ServiceDetail";
import SoftwareServiceDetail from "@/page-views/SoftwareServiceDetail";
import { getSoftwareServicePage } from "@/data/softwareServicePages";
import { redirect } from "next/navigation";

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  const resolved = await params;
  if (resolved.slug === "basic-package") {
    redirect("/basic-package");
  }
  if (getSoftwareServicePage(resolved.slug)) {
    return <SoftwareServiceDetail slug={resolved.slug} />;
  }
  return <ServiceDetail slug={resolved.slug} />;
}

