import SubServiceDetail from "@/spa-pages/SubServiceDetail";

export default async function SubServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  const resolved = await params;
  return <SubServiceDetail slug={resolved.slug} />;
}

