 "use client";

import { useState, useMemo } from "react";
import { Calculator, TrendingUp, DollarSign, Users, BarChart3, Download, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import jsPDF from "jspdf";

interface ROICalculatorProps {
  serviceType: string;
}

const countryData: Record<string, { name: string; currency: string; symbol: string; rate: number }> = {
  IN: { name: "India", currency: "INR", symbol: "₹", rate: 1 },
  US: { name: "United States", currency: "USD", symbol: "$", rate: 0.012 },
  GB: { name: "United Kingdom", currency: "GBP", symbol: "£", rate: 0.0095 },
  EU: { name: "Europe", currency: "EUR", symbol: "€", rate: 0.011 },
  AE: { name: "UAE", currency: "AED", symbol: "د.إ", rate: 0.044 },
  SG: { name: "Singapore", currency: "SGD", symbol: "S$", rate: 0.016 },
  AU: { name: "Australia", currency: "AUD", symbol: "A$", rate: 0.018 },
  CA: { name: "Canada", currency: "CAD", symbol: "C$", rate: 0.016 },
  JP: { name: "Japan", currency: "JPY", symbol: "¥", rate: 1.79 },
  KR: { name: "South Korea", currency: "KRW", symbol: "₩", rate: 16.5 },
  CN: { name: "China", currency: "CNY", symbol: "¥", rate: 0.087 },
  MY: { name: "Malaysia", currency: "MYR", symbol: "RM", rate: 0.053 },
  TH: { name: "Thailand", currency: "THB", symbol: "฿", rate: 0.41 },
  ID: { name: "Indonesia", currency: "IDR", symbol: "Rp", rate: 189 },
  PH: { name: "Philippines", currency: "PHP", symbol: "₱", rate: 0.67 },
  VN: { name: "Vietnam", currency: "VND", symbol: "₫", rate: 295 },
  BD: { name: "Bangladesh", currency: "BDT", symbol: "৳", rate: 1.31 },
  PK: { name: "Pakistan", currency: "PKR", symbol: "₨", rate: 3.33 },
  LK: { name: "Sri Lanka", currency: "LKR", symbol: "Rs", rate: 3.64 },
  NP: { name: "Nepal", currency: "NPR", symbol: "रू", rate: 1.59 },
  SA: { name: "Saudi Arabia", currency: "SAR", symbol: "﷼", rate: 0.045 },
  QA: { name: "Qatar", currency: "QAR", symbol: "﷼", rate: 0.044 },
  KW: { name: "Kuwait", currency: "KWD", symbol: "د.ك", rate: 0.0037 },
  ZA: { name: "South Africa", currency: "ZAR", symbol: "R", rate: 0.22 },
  BR: { name: "Brazil", currency: "BRL", symbol: "R$", rate: 0.059 },
  MX: { name: "Mexico", currency: "MXN", symbol: "$", rate: 0.21 },
  DE: { name: "Germany", currency: "EUR", symbol: "€", rate: 0.011 },
  FR: { name: "France", currency: "EUR", symbol: "€", rate: 0.011 },
  NZ: { name: "New Zealand", currency: "NZD", symbol: "NZ$", rate: 0.02 },
};

const industryMultipliers: Record<string, number> = {
  ecommerce: 4.2,
  saas: 5.5,
  healthcare: 3.8,
  finance: 4.8,
  realestate: 3.5,
  education: 3.2,
  hospitality: 3.6,
  manufacturing: 2.8,
  retail: 3.9,
  technology: 5.0,
};

const industryLabels: Record<string, string> = {
  ecommerce: "E-commerce",
  saas: "SaaS / Software",
  healthcare: "Healthcare",
  finance: "Finance / Banking",
  realestate: "Real Estate",
  education: "Education",
  hospitality: "Hospitality",
  manufacturing: "Manufacturing",
  retail: "Retail",
  technology: "Technology",
};

const serviceLabels: Record<string, string> = {
  seo: "SEO Optimization",
  ppc: "PPC Advertising",
  "social-media": "Social Media Marketing",
  "content-marketing": "Content Marketing",
  "email-marketing": "Email Marketing",
  "web-development": "Web Development",
  "influencer-marketing": "Influencer Marketing",
  "video-marketing": "Video Marketing",
  "local-seo": "Local SEO",
  "reputation-management": "Reputation Management",
  "marketing-automation": "Marketing Automation",
  "crm-integration": "CRM Integration",
  "performance-marketing": "Performance Marketing",
  "ai-chatbots": "AI Chatbots",
  "branding": "Brand Identity",
  "analytics": "Analytics & Data",
};

const serviceMultipliers: Record<string, number> = {
  seo: 3.5,
  ppc: 2.8,
  "social-media": 2.5,
  "content-marketing": 3.2,
  "email-marketing": 4.2,
  "web-development": 2.0,
  "influencer-marketing": 2.8,
  "video-marketing": 3.0,
  "local-seo": 3.8,
  "reputation-management": 2.5,
  "marketing-automation": 4.0,
  "crm-integration": 3.5,
  "performance-marketing": 3.2,
  "ai-chatbots": 3.0,
  "branding": 2.2,
  "analytics": 2.8,
};

const ROICalculator = ({ serviceType }: ROICalculatorProps) => {
  const [budget, setBudget] = useState(50000);
  const [industry, setIndustry] = useState("ecommerce");
  const [country, setCountry] = useState("IN");
  const [duration, setDuration] = useState([6]);
  const [showResults, setShowResults] = useState(false);

  const currentCountry = countryData[country];

  const formatCurrency = (amount: number) => {
    return `${currentCountry.symbol}${amount.toLocaleString()}`;
  };

  const results = useMemo(() => {
    const industryMult = industryMultipliers[industry] || 3.5;
    const serviceMult = serviceMultipliers[serviceType] || 3.0;
    const durationMult = 1 + (duration[0] - 3) * 0.15;
    
    const baseROI = budget * industryMult * serviceMult * durationMult * 0.1;
    const estimatedLeads = Math.round((budget / 1000) * industryMult * (duration[0] / 3));
    const conversionRate = 2.5 + (industryMult - 3) * 0.5;
    const estimatedConversions = Math.round(estimatedLeads * (conversionRate / 100));
    const revenuePerConversion = baseROI / Math.max(estimatedConversions, 1);
    
    return {
      estimatedROI: Math.round(baseROI),
      estimatedLeads,
      conversionRate: conversionRate.toFixed(1),
      estimatedConversions,
      revenuePerConversion: Math.round(revenuePerConversion),
      roiPercentage: Math.round((baseROI / budget) * 100),
    };
  }, [budget, industry, duration, serviceType]);

  const generatePDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    
    // Header
    doc.setFillColor(30, 41, 59);
    doc.rect(0, 0, pageWidth, 50, "F");
    
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.setFont("helvetica", "bold");
    doc.text("ROI Analysis Report", pageWidth / 2, 25, { align: "center" });
    
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text("Revenuxe Digital Marketing", pageWidth / 2, 38, { align: "center" });
    
    // Reset colors
    doc.setTextColor(30, 41, 59);
    
    // Date
    doc.setFontSize(10);
    doc.text(`Generated: ${new Date().toLocaleDateString("en-US", { 
      year: "numeric", 
      month: "long", 
      day: "numeric" 
    })}`, 20, 65);
    
    // Input Parameters Section
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("Input Parameters", 20, 85);
    
    doc.setDrawColor(59, 130, 246);
    doc.setLineWidth(0.5);
    doc.line(20, 88, 80, 88);
    
    doc.setFontSize(11);
    doc.setFont("helvetica", "normal");
    const inputY = 100;
    doc.text(`Service: ${serviceLabels[serviceType] || serviceType}`, 25, inputY);
    doc.text(`Industry: ${industryLabels[industry]}`, 25, inputY + 10);
    doc.text(`Country: ${currentCountry.name}`, 25, inputY + 20);
    doc.text(`Monthly Budget: ${currentCountry.symbol}${budget.toLocaleString()} ${currentCountry.currency}`, 25, inputY + 30);
    doc.text(`Campaign Duration: ${duration[0]} months`, 25, inputY + 40);
    doc.text(`Total Investment: ${currentCountry.symbol}${(budget * duration[0]).toLocaleString()} ${currentCountry.currency}`, 25, inputY + 50);
    
    // Projected Results Section
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("Projected Results", 20, 170);
    
    doc.setDrawColor(34, 197, 94);
    doc.line(20, 173, 85, 173);
    
    // Results boxes
    const boxY = 185;
    const boxWidth = 80;
    const boxHeight = 35;
    
    // Estimated Revenue Box
    doc.setFillColor(240, 253, 244);
    doc.roundedRect(20, boxY, boxWidth, boxHeight, 3, 3, "F");
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text("Estimated Revenue", 25, boxY + 12);
    doc.setFontSize(16);
    doc.setTextColor(34, 197, 94);
    doc.setFont("helvetica", "bold");
    doc.text(`${currentCountry.symbol}${results.estimatedROI.toLocaleString()}`, 25, boxY + 27);
    
    // ROI Percentage Box
    doc.setFillColor(239, 246, 255);
    doc.roundedRect(110, boxY, boxWidth, boxHeight, 3, 3, "F");
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.setFont("helvetica", "normal");
    doc.text("ROI Percentage", 115, boxY + 12);
    doc.setFontSize(18);
    doc.setTextColor(59, 130, 246);
    doc.setFont("helvetica", "bold");
    doc.text(`${results.roiPercentage}%`, 115, boxY + 27);
    
    // Expected Leads Box
    doc.setFillColor(254, 249, 195);
    doc.roundedRect(20, boxY + 45, boxWidth, boxHeight, 3, 3, "F");
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.setFont("helvetica", "normal");
    doc.text("Expected Leads", 25, boxY + 57);
    doc.setFontSize(18);
    doc.setTextColor(202, 138, 4);
    doc.setFont("helvetica", "bold");
    doc.text(`${results.estimatedLeads}`, 25, boxY + 72);
    
    // Conversion Rate Box
    doc.setFillColor(243, 232, 255);
    doc.roundedRect(110, boxY + 45, boxWidth, boxHeight, 3, 3, "F");
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.setFont("helvetica", "normal");
    doc.text("Conversion Rate", 115, boxY + 57);
    doc.setFontSize(18);
    doc.setTextColor(147, 51, 234);
    doc.setFont("helvetica", "bold");
    doc.text(`${results.conversionRate}%`, 115, boxY + 72);
    
    // Disclaimer
    doc.setFontSize(9);
    doc.setTextColor(120, 120, 120);
    doc.setFont("helvetica", "italic");
    doc.text("* Estimates based on industry averages. Actual results may vary based on", 20, 270);
    doc.text("  market conditions, competition, and campaign execution.", 20, 278);
    
    // Footer
    doc.setFillColor(30, 41, 59);
    doc.rect(0, 285, pageWidth, 15, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text("www.revenuxe.com | contact@revenuxe.com", pageWidth / 2, 293, { align: "center" });
    
    // Save PDF
    doc.save(`ROI-Report-${serviceType}-${currentCountry.currency}-${new Date().toISOString().split("T")[0]}.pdf`);
    
    toast({
      title: "Report Downloaded",
      description: "Your ROI analysis report has been saved as PDF.",
    });
  };

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-foreground">
          <Calculator className="h-5 w-5 text-primary" />
          ROI Calculator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="country" className="text-foreground flex items-center gap-2">
              <Globe className="h-4 w-4" /> Country & Currency
            </Label>
            <Select value={country} onValueChange={setCountry}>
              <SelectTrigger className="bg-background border-border">
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent className="max-h-[300px]">
                {Object.entries(countryData).map(([code, data]) => (
                  <SelectItem key={code} value={code}>
                    {data.name} ({data.symbol} {data.currency})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="budget" className="text-foreground">
              Monthly Budget ({currentCountry.symbol} {currentCountry.currency})
            </Label>
            <Input
              id="budget"
              type="number"
              value={budget}
              onChange={(e) => setBudget(Math.max(1000, parseInt(e.target.value) || 1000))}
              min={1000}
              max={10000000}
              className="bg-background border-border"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="industry" className="text-foreground">Industry</Label>
            <Select value={industry} onValueChange={setIndustry}>
              <SelectTrigger className="bg-background border-border">
                <SelectValue placeholder="Select industry" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(industryLabels).map(([key, label]) => (
                  <SelectItem key={key} value={key}>{label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-3">
            <Label className="text-foreground">Campaign Duration: {duration[0]} months</Label>
            <Slider
              value={duration}
              onValueChange={setDuration}
              min={3}
              max={12}
              step={1}
              className="py-2"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>3 months</span>
              <span>12 months</span>
            </div>
          </div>

          <Button 
            onClick={() => setShowResults(true)} 
            className="w-full bg-primary hover:bg-primary/90"
          >
            Calculate ROI
          </Button>
        </div>

        {showResults && (
          <div className="pt-6 border-t border-border space-y-4 animate-fade-in">
            <h4 className="font-semibold text-foreground text-center">Estimated Results</h4>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary/10 rounded-lg p-4 text-center">
                <DollarSign className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-xl font-bold text-primary">
                  {formatCurrency(results.estimatedROI)}
                </p>
                <p className="text-xs text-muted-foreground">Estimated Revenue</p>
              </div>
              
              <div className="bg-accent/10 rounded-lg p-4 text-center">
                <TrendingUp className="h-6 w-6 text-accent-foreground mx-auto mb-2" />
                <p className="text-2xl font-bold text-accent-foreground">
                  {results.roiPercentage}%
                </p>
                <p className="text-xs text-muted-foreground">ROI Percentage</p>
              </div>
              
              <div className="bg-secondary rounded-lg p-4 text-center">
                <Users className="h-6 w-6 text-secondary-foreground mx-auto mb-2" />
                <p className="text-2xl font-bold text-secondary-foreground">
                  {results.estimatedLeads}
                </p>
                <p className="text-xs text-muted-foreground">Expected Leads</p>
              </div>
              
              <div className="bg-muted rounded-lg p-4 text-center">
                <BarChart3 className="h-6 w-6 text-muted-foreground mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">
                  {results.conversionRate}%
                </p>
                <p className="text-xs text-muted-foreground">Conv. Rate</p>
              </div>
            </div>

            <Button 
              onClick={generatePDF} 
              variant="outline" 
              className="w-full mt-4"
            >
              <Download className="h-4 w-4 mr-2" />
              Download PDF Report
            </Button>

            <p className="text-xs text-muted-foreground text-center mt-4">
              *Estimates based on industry averages. Actual results may vary.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ROICalculator;
