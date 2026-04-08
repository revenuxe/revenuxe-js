import ServiceDetail from "@/page-views/ServiceDetail";
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
  return <ServiceDetail slug={resolved.slug} />;
}

