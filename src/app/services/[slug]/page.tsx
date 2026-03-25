import ServiceDetail from "@/spa-pages/ServiceDetail";

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  const resolved = await params;
  return <ServiceDetail slug={resolved.slug} />;
}

