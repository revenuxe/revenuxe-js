import { getDefaultHomepageSchemas } from "@/lib/seo/homepageSchemas";

export function HomeStructuredData() {
  const schemas = getDefaultHomepageSchemas();
  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
