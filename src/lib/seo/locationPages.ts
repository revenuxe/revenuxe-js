export const countryDisplayNames: Record<string, string> = {
  singapore: "Singapore",
  usa: "USA",
  uae: "UAE",
  indonesia: "Indonesia",
  australia: "Australia",
  uk: "United Kingdom",
  canada: "Canada",
  germany: "Germany",
  france: "France",
  japan: "Japan",
  "south-korea": "South Korea",
};

const titleCaseSlug = (slug: string) =>
  slug
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

export function getCountryName(countrySlug: string) {
  return countryDisplayNames[countrySlug] ?? titleCaseSlug(countrySlug);
}

export function getCityCountrySeo(countrySlug: string, citySlug: string) {
  const cityName = titleCaseSlug(citySlug);
  const countryName = getCountryName(countrySlug);

  return {
    cityName,
    countryName,
    title: `AI-Powered Digital Marketing Agency in ${cityName}, ${countryName} | Revenuxe`,
    tagline: `AI-Powered Digital Marketing in ${cityName}`,
    description: `Grow your ${cityName} business with Revenuxe's AI-powered SEO, paid media, web development, and conversion-focused digital marketing services for ${countryName}.`,
    keywords: [
      `digital marketing ${cityName}`,
      `SEO ${cityName}`,
      `AI marketing ${cityName}`,
      `digital marketing agency ${countryName}`,
      "Revenuxe",
    ].join(", "),
  };
}
