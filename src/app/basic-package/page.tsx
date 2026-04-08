import BasicPackage from "@/page-views/BasicPackage";
import { absoluteCanonicalUrl, getCanonicalOrigin } from "@/lib/seo/canonical";

export default async function BasicPackagePage() {
  const canonicalUrl = await absoluteCanonicalUrl("/basic-package");
  const origin = await getCanonicalOrigin();
  return <BasicPackage canonicalUrl={canonicalUrl} origin={origin} />;
}

