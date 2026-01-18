import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";

interface ContactFormProps {
  variant?: "default" | "compact";
  onSuccess?: () => void;
}

const applianceOptions = [
  "AC Repair",
  "Refrigerator Repair",
  "Washing Machine Repair",
  "Microwave Repair",
  "TV Repair",
  "Dishwasher Repair",
  "Gas Stove Repair",
  "Geyser/Water Heater Repair",
  "Other Appliance"
];

export const ContactForm = ({ variant = "default", onSuccess }: ContactFormProps) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.from("leads").insert([
        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email || null,
          city: formData.city,
          service: formData.service,
          message: formData.message || null,
        },
      ]);

      if (error) throw error;

      toast({
        title: "Booking Received! ✓",
        description: "We'll call you back within 30 minutes to confirm your appointment.",
      });

      setFormData({
        name: "",
        phone: "",
        email: "",
        city: "",
        service: "",
        message: "",
      });
      
      onSuccess?.();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Failed to submit form. Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className={variant === "compact" ? "grid grid-cols-1 md:grid-cols-2 gap-4" : "space-y-4"}>
        <div>
          <Label htmlFor="name">Your Name *</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
          />
        </div>

        <div>
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="+91 XXXXX XXXXX"
          />
        </div>

        <div>
          <Label htmlFor="service">Appliance Type *</Label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <option value="">Select Appliance</option>
            {applianceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <Label htmlFor="city">Your Area/City *</Label>
          <Input
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            placeholder="e.g., Koramangala, Bangalore"
          />
        </div>

        {variant === "default" && (
          <>
            <div>
              <Label htmlFor="email">Email (Optional)</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
              />
            </div>
            <div>
              <Label htmlFor="message">Describe the Issue (Optional)</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="e.g., AC not cooling, fridge making noise..."
                rows={3}
              />
            </div>
          </>
        )}
      </div>

      <Button type="submit" disabled={loading} className="w-full bg-primary hover:bg-primary/90" size="lg">
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          "Book Service Now"
        )}
      </Button>
      
      <p className="text-xs text-muted-foreground text-center">
        By submitting, you agree to receive a callback from our team
      </p>
    </form>
  );
};
