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
  defaultService?: string;
  onSuccess?: () => void;
}

export const ContactForm = ({ variant = "default", defaultService, onSuccess }: ContactFormProps) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    service: defaultService || "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.from("leads" as any).insert([
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
        title: "Success!",
        description: "We've received your inquiry. We'll get back to you soon!",
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
        description: "Failed to submit form. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your full name"
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
            placeholder="+91 9886285028"
          />
        </div>

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
          <Label htmlFor="city">City *</Label>
          <Input
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            placeholder="Your city"
          />
        </div>

        <div className={variant === "compact" ? "md:col-span-2" : ""}>
          <Label htmlFor="service">Service Interested In *</Label>
          <Input
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            placeholder="e.g., Digital Marketing, Web Development, SEO"
          />
        </div>
      </div>

      {variant === "default" && (
        <div>
          <Label htmlFor="message">Message (Optional)</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us more about your project..."
            rows={4}
          />
        </div>
      )}

      <Button type="submit" disabled={loading} className="w-full" size="lg">
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          "Submit Inquiry"
        )}
      </Button>
    </form>
  );
};
