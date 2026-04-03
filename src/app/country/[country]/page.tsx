import CountryPage from "@/page-views/CountryPage";
import { fetchPublishedProjects } from "@/lib/projectsServer";

export default async function CountryRoutePage({
  params,
}: {
  params: Promise<{ country: string }> | { country: string };
}) {
  const resolved = await params;
  const recentProjects = await fetchPublishedProjects(8);
  return <CountryPage country={resolved.country} recentProjects={recentProjects} />;
}

