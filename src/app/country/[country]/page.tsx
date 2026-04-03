import CountryPage from "@/page-views/CountryPage";

export default async function CountryRoutePage({
  params,
}: {
  params: Promise<{ country: string }> | { country: string };
}) {
  const resolved = await params;
  return <CountryPage country={resolved.country} />;
}

