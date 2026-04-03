import ROICalculatorPageView from "@/page-views/ROICalculatorPage";
import { absoluteCanonicalUrl } from "@/lib/seo/canonical";

export default async function ROICalculatorPage() {
  const canonicalUrl = await absoluteCanonicalUrl("/roi-calculator");
  return <ROICalculatorPageView canonicalUrl={canonicalUrl} />;
}

