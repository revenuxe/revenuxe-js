import { getDefaultHomepageSchemas } from "@/lib/seo/homepageSchemas";
import { getCanonicalOrigin } from "@/lib/seo/canonical";

export async function HomeStructuredData() {
  const siteUrl = await getCanonicalOrigin();
  const schemas = getDefaultHomepageSchemas(undefined, siteUrl);
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
