import { notFound } from "next/navigation";
import SpaCityPage from "@/page-views/CityPage";
import { fetchPublishedProjects } from "@/lib/projectsServer";

const validCitySlugs = new Set([
  "bangalore",
  "hyderabad",
  "chennai",
  "mumbai",
  "pune",
  "delhi",
  "ahmedabad",
  "kolkata",
  "jaipur",
  "lucknow",
  "kochi",
  "chandigarh",
  "indore",
  "nagpur",
  "visakhapatnam",
  "coimbatore",
]);

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }> | { city: string };
}) {
  const resolved = await params;
  const city = (resolved.city || "").toLowerCase();
  if (!validCitySlugs.has(city)) notFound();
  const recentProjects = await fetchPublishedProjects(8);
  return <SpaCityPage city={city} recentProjects={recentProjects} />;
}

