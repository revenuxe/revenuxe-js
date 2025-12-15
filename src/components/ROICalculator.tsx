import { useState, useMemo } from "react";
import { Calculator, TrendingUp, DollarSign, Users, BarChart3 } from "lucide-react";
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

interface ROICalculatorProps {
  serviceType: string;
}

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
};

const ROICalculator = ({ serviceType }: ROICalculatorProps) => {
  const [budget, setBudget] = useState(5000);
  const [industry, setIndustry] = useState("ecommerce");
  const [duration, setDuration] = useState([6]);
  const [showResults, setShowResults] = useState(false);

  const results = useMemo(() => {
    const industryMult = industryMultipliers[industry] || 3.5;
    const serviceMult = serviceMultipliers[serviceType] || 3.0;
    const durationMult = 1 + (duration[0] - 3) * 0.15;
    
    const baseROI = budget * industryMult * serviceMult * durationMult * 0.1;
    const estimatedLeads = Math.round((budget / 100) * industryMult * (duration[0] / 3));
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
            <Label htmlFor="budget" className="text-foreground">Monthly Budget ($)</Label>
            <Input
              id="budget"
              type="number"
              value={budget}
              onChange={(e) => setBudget(Math.max(500, parseInt(e.target.value) || 500))}
              min={500}
              max={100000}
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
                <SelectItem value="ecommerce">E-commerce</SelectItem>
                <SelectItem value="saas">SaaS / Software</SelectItem>
                <SelectItem value="healthcare">Healthcare</SelectItem>
                <SelectItem value="finance">Finance / Banking</SelectItem>
                <SelectItem value="realestate">Real Estate</SelectItem>
                <SelectItem value="education">Education</SelectItem>
                <SelectItem value="hospitality">Hospitality</SelectItem>
                <SelectItem value="manufacturing">Manufacturing</SelectItem>
                <SelectItem value="retail">Retail</SelectItem>
                <SelectItem value="technology">Technology</SelectItem>
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
                <p className="text-2xl font-bold text-primary">
                  ${results.estimatedROI.toLocaleString()}
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
