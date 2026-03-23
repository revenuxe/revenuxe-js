import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import SubServiceDetail from "./pages/SubServiceDetail";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import Articles from "./pages/Articles";
import ArticleDetail from "./pages/ArticleDetail";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";
import CityPage from "./pages/CityPage";
import CountryPage from "./pages/CountryPage";
import CityCountryPage from "./pages/CityCountryPage";
import ROICalculatorPage from "./pages/ROICalculatorPage";
import BasicPackage from "./pages/BasicPackage";
import ScrollToTop from "./components/ScrollToTop";
import { useKeepAlive } from "./hooks/useKeepAlive";

const queryClient = new QueryClient();

const AppContent = () => {
  useKeepAlive();
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          {/* Services pages kept for existing links/SEO but removed from nav */}
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/sub-services/:slug" element={<SubServiceDetail />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:slug" element={<ArticleDetail />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/roi-calculator" element={<ROICalculatorPage />} />
          <Route path="/basic-package" element={<BasicPackage />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/bangalore" element={<CityPage />} />
          <Route path="/hyderabad" element={<CityPage />} />
          <Route path="/chennai" element={<CityPage />} />
          <Route path="/mumbai" element={<CityPage />} />
          <Route path="/pune" element={<CityPage />} />
          <Route path="/delhi" element={<CityPage />} />
          <Route path="/ahmedabad" element={<CityPage />} />
          <Route path="/kolkata" element={<CityPage />} />
          <Route path="/jaipur" element={<CityPage />} />
          <Route path="/lucknow" element={<CityPage />} />
          <Route path="/kochi" element={<CityPage />} />
          <Route path="/chandigarh" element={<CityPage />} />
          <Route path="/indore" element={<CityPage />} />
          <Route path="/nagpur" element={<CityPage />} />
          <Route path="/visakhapatnam" element={<CityPage />} />
          <Route path="/coimbatore" element={<CityPage />} />
          <Route path="/country/singapore" element={<CountryPage />} />
          <Route path="/country/usa" element={<CountryPage />} />
          <Route path="/country/uae" element={<CountryPage />} />
          <Route path="/country/indonesia" element={<CountryPage />} />
          <Route path="/country/australia" element={<CountryPage />} />
          <Route path="/country/uk" element={<CountryPage />} />
          <Route path="/country/canada" element={<CountryPage />} />
          <Route path="/country/germany" element={<CountryPage />} />
          <Route path="/country/france" element={<CountryPage />} />
          <Route path="/country/japan" element={<CountryPage />} />
          <Route path="/country/south-korea" element={<CountryPage />} />
          <Route path="/country/:country/:city" element={<CityCountryPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
