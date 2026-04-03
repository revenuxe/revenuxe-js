import BasicPackage from "@/page-views/BasicPackage";
import { absoluteCanonicalUrl } from "@/lib/seo/canonical";

export default async function BasicPackagePage() {
  const canonicalUrl = await absoluteCanonicalUrl("/basic-package");
  return <BasicPackage canonicalUrl={canonicalUrl} />;
}

