import CountryPage from "@/spa-pages/CountryPage";

export default async function CountryRoutePage({
  params,
}: {
  params: Promise<{ country: string }> | { country: string };
}) {
  const resolved = await params;
  return <CountryPage country={resolved.country} />;
}

