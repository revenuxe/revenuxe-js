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
    title: `Software Development Company in ${cityName}, ${countryName} | Revenuxe`,
    tagline: `Software Development in ${cityName}`,
    description: `Build scalable software for your ${cityName} business with Revenuxe's SaaS development, AI systems, web applications, platform engineering, and custom software services for ${countryName}.`,
    keywords: [
      `software development ${cityName}`,
      `web development ${cityName}`,
      `AI software ${cityName}`,
      `software development company ${countryName}`,
      "Revenuxe",
    ].join(", "),
  };
}
