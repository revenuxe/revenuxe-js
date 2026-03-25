import CityCountryPage from "@/spa-pages/CityCountryPage";

export default async function CityCountryRoutePage({
  params,
}: {
  params: Promise<{ country: string; city: string }> | { country: string; city: string };
}) {
  const resolved = await params;
  return <CityCountryPage country={resolved.country} city={resolved.city} />;
}

