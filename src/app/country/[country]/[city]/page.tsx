import CityCountryPage from "@/page-views/CityCountryPage";
import { fetchPublishedProjects } from "@/lib/projectsServer";

export default async function CityCountryRoutePage({
  params,
}: {
  params: Promise<{ country: string; city: string }> | { country: string; city: string };
}) {
  const resolved = await params;
  const recentProjects = await fetchPublishedProjects(8);
  return <CityCountryPage country={resolved.country} city={resolved.city} recentProjects={recentProjects} />;
}

