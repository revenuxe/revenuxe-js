import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2, Upload } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  client_name: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string;
  image_url: string | null;
  website_url: string | null;
  meta_title: string | null;
  meta_description: string | null;
  meta_keywords: string | null;
  featured: boolean;
}

export const CaseStudiesManager = () => {
  const { toast } = useToast();
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    client_name: "",
    industry: "",
    challenge: "",
    solution: "",
    results: "",
    image_url: "",
    website_url: "",
    meta_title: "",
    meta_description: "",
    meta_keywords: "",
    featured: false,
  });
  const [uploading, setUploading] = useState(false);

  const getSaveErrorMessage = (error: any) => {
    const rawMessage = String(
      error?.message || error?.details || error?.hint || "Failed to save case study.",
    );
    const normalized = rawMessage.toLowerCase();

    if (
      normalized.includes("schema cache") ||
      normalized.includes("could not find the 'slug' column") ||
      normalized.includes("column") && normalized.includes("does not exist")
    ) {
      return "Database migration is missing. Please run the latest Supabase migration to add slug/meta fields (slug, meta_title, meta_description, meta_keywords), then try again.";
    }

    return rawMessage;
  };

  useEffect(() => {
    fetchCaseStudies();
  }, []);

  const fetchCaseStudies = async () => {
    try {
      const { data, error } = await supabase
        .from("case_studies" as any)
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setCaseStudies((data as any) || []);
    } catch (error) {
      console.error("Error fetching case studies:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const slug = (formData.slug || formData.meta_title || formData.title)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
    const payload = { ...formData, slug };

    try {
      if (editingId) {
        const { error } = await supabase
          .from("case_studies" as any)
          .update(payload as any)
          .eq("id", editingId);

        if (error) throw error;

        toast({
          title: "Success",
          description: "Case study updated successfully",
        });
      } else {
        const { error } = await supabase.from("case_studies" as any).insert([payload] as any);

        if (error) throw error;

        toast({
          title: "Success",
          description: "Case study created successfully",
        });
      }

      setDialogOpen(false);
      resetForm();
      fetchCaseStudies();
    } catch (error: any) {
      toast({
        title: "Error",
        description: getSaveErrorMessage(error),
        variant: "destructive",
      });
    }
  };

  const handleEdit = (caseStudy: CaseStudy) => {
    setEditingId(caseStudy.id);
    setFormData({
      title: caseStudy.title,
      slug: caseStudy.slug || "",
      client_name: caseStudy.client_name,
      industry: caseStudy.industry,
      challenge: caseStudy.challenge,
      solution: caseStudy.solution,
      results: caseStudy.results,
      image_url: caseStudy.image_url || "",
      website_url: caseStudy.website_url || "",
      meta_title: caseStudy.meta_title || "",
      meta_description: caseStudy.meta_description || "",
      meta_keywords: caseStudy.meta_keywords || "",
      featured: caseStudy.featured,
    });
    setDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this case study?")) return;

    try {
      const { error } = await supabase.from("case_studies" as any).delete().eq("id", id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Case study deleted successfully",
      });

      fetchCaseStudies();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete case study",
        variant: "destructive",
      });
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("case-studies")
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from("case-studies")
        .getPublicUrl(filePath);

      setFormData((prev) => ({ ...prev, image_url: publicUrl }));

      toast({
        title: "Success",
        description: "Image uploaded successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to upload image",
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  };

  const resetForm = () => {
    setEditingId(null);
    setFormData({
      title: "",
      slug: "",
      client_name: "",
      industry: "",
      challenge: "",
      solution: "",
      results: "",
      image_url: "",
      website_url: "",
      meta_title: "",
      meta_description: "",
      meta_keywords: "",
      featured: false,
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Case Studies</h2>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={resetForm}>
              <Plus className="h-4 w-4 mr-2" />
              Add Case Study
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingId ? "Edit Case Study" : "Create Case Study"}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => {
                    const title = e.target.value;
                    setFormData((prev) => {
                      const nextSlug = (prev.meta_title || title)
                        .toLowerCase()
                        .replace(/[^a-z0-9]+/g, "-")
                        .replace(/^-|-$/g, "");
                      return { ...prev, title, slug: nextSlug };
                    });
                  }}
                  required
                />
              </div>

              <div>
                <Label htmlFor="slug">Case Study URL Slug</Label>
                <Input
                  id="slug"
                  placeholder="from-spreadsheet-chaos-to-smooth-projects"
                  value={formData.slug}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      slug: e.target.value
                        .toLowerCase()
                        .replace(/[^a-z0-9-]/g, "")
                        .replace(/-{2,}/g, "-")
                        .replace(/^-|-$/g, ""),
                    }))
                  }
                  required
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Final URL: /case-studies/{formData.slug || "your-meta-title"}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="client_name">Client Name</Label>
                  <Input
                    id="client_name"
                    value={formData.client_name}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, client_name: e.target.value }))
                    }
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="industry">Industry</Label>
                  <Input
                    id="industry"
                    value={formData.industry}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, industry: e.target.value }))
                    }
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="challenge">Challenge</Label>
                <Textarea
                  id="challenge"
                  value={formData.challenge}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, challenge: e.target.value }))
                  }
                  required
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="solution">Solution</Label>
                <Textarea
                  id="solution"
                  value={formData.solution}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, solution: e.target.value }))
                  }
                  required
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="results">Results</Label>
                <Textarea
                  id="results"
                  value={formData.results}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, results: e.target.value }))
                  }
                  required
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="image">Image</Label>
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <Input
                      id="image"
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      disabled={uploading}
                      className="flex-1"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      disabled={uploading}
                      onClick={() => document.getElementById("image")?.click()}
                    >
                      <Upload className="h-4 w-4 mr-2" />
                      {uploading ? "Uploading..." : "Upload"}
                    </Button>
                  </div>
                  {formData.image_url && (
                    <div className="relative w-full h-40 rounded-md overflow-hidden border">
                      <img
                        src={formData.image_url}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <Input
                    placeholder="Or paste image URL"
                    value={formData.image_url}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, image_url: e.target.value }))
                    }
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="website_url">Website URL (optional)</Label>
                <Input
                  id="website_url"
                  placeholder="https://example.com"
                  type="url"
                  value={formData.website_url}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, website_url: e.target.value }))
                  }
                />
              </div>

              <div className="space-y-4 rounded-md border p-4">
                <h4 className="font-semibold">SEO Fields</h4>
                <div>
                  <Label htmlFor="meta_title">Meta Title</Label>
                  <Input
                    id="meta_title"
                    placeholder="Case study SEO title"
                    value={formData.meta_title}
                    onChange={(e) => {
                      const meta_title = e.target.value;
                      setFormData((prev) => ({
                        ...prev,
                        meta_title,
                        slug: meta_title
                          .toLowerCase()
                          .replace(/[^a-z0-9]+/g, "-")
                          .replace(/^-|-$/g, ""),
                      }));
                    }}
                  />
                </div>

                <div>
                  <Label htmlFor="meta_description">Meta Description</Label>
                  <Textarea
                    id="meta_description"
                    rows={3}
                    placeholder="SEO description for this case study"
                    value={formData.meta_description}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, meta_description: e.target.value }))
                    }
                  />
                </div>

                <div>
                  <Label htmlFor="meta_keywords">Meta Keywords (comma separated)</Label>
                  <Input
                    id="meta_keywords"
                    placeholder="case study, interior design, invoicing"
                    value={formData.meta_keywords}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, meta_keywords: e.target.value }))
                    }
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="featured"
                  checked={formData.featured}
                  onCheckedChange={(checked) =>
                    setFormData((prev) => ({ ...prev, featured: checked }))
                  }
                />
                <Label htmlFor="featured">Featured on website</Label>
              </div>

              <div className="flex gap-2 justify-end">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setDialogOpen(false)}
                >
                  Cancel
                </Button>
                <Button type="submit">
                  {editingId ? "Update" : "Create"}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {loading ? (
        <div className="text-center py-8">Loading...</div>
      ) : (
        <div className="grid gap-4">
          {caseStudies.length === 0 ? (
            <Card className="p-8 text-center text-muted-foreground">
              No case studies yet. Create your first one!
            </Card>
          ) : (
            caseStudies.map((study) => (
              <Card key={study.id} className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold">{study.title}</h3>
                      {study.featured && (
                        <Badge className="bg-primary">Featured</Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      {study.client_name} • {study.industry}
                      {study.website_url && (
                        <>
                          {" • "}
                          <a
                            href={study.website_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            Visit Website
                          </a>
                        </>
                      )}
                    </p>
                    <p className="text-xs text-muted-foreground mb-2">URL: /case-studies/{study.slug || study.id}</p>
                    <div className="space-y-2 text-sm">
                      <p>
                        <strong>Challenge:</strong> {study.challenge}
                      </p>
                      <p>
                        <strong>Solution:</strong> {study.solution}
                      </p>
                      <p>
                        <strong>Results:</strong> {study.results}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleEdit(study)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(study.id)}
                    >
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>
      )}
    </div>
  );
};
