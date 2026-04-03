"use client";

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
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Edit, Trash2, Upload, Image as ImageIcon } from "lucide-react";

interface Project {
  id: string;
  title: string;
  info: string | null;
  short_description?: string | null;
  website_url: string | null;
  logo_url: string | null;
  published: boolean;
  created_at: string;
}

export const ProjectsManager = () => {
  const { toast } = useToast();
  // Supabase Storage bucket for project logos.
  // Your bucket name might not be "projects" in Supabase.
  // If not, set NEXT_PUBLIC_SUPABASE_PROJECTS_BUCKET accordingly.
  const PROJECTS_BUCKET =
    (process.env.NEXT_PUBLIC_SUPABASE_PROJECTS_BUCKET as string | undefined) ||
    "projects";

  const formatSupabaseError = (error: any) => {
    try {
      if (!error) return "Unknown error";
      if (error instanceof Error) return error.message;
      if (typeof error === "string") return error;
      if (typeof error === "object") {
        const msg =
          error.message ||
          error.error_description ||
          error.details ||
          error.hint ||
          error.code;
        if (msg) return String(msg);
        return JSON.stringify(error, null, 2) || "Unknown error";
      }
      return String(error);
    } catch {
      return "Unknown error";
    }
  };

  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    short_description: "",
    website_url: "",
    logo_url: "",
    published: true,
  });

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const { data, error } = await supabase
        .from("projects" as any)
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setProjects((data as any) || []);
    } catch (error) {
      const message =
        formatSupabaseError(error) || "Failed to fetch projects";
      toast({
        title: "Error",
        description: message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
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
        .from(PROJECTS_BUCKET)
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from(PROJECTS_BUCKET)
        .getPublicUrl(filePath);

      setFormData((prev) => ({ ...prev, logo_url: publicUrl }));

      toast({
        title: "Success",
        description: "Logo uploaded successfully",
      });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Failed to upload logo";

      const isBucketNotFound =
        message.toLowerCase().includes("bucket") &&
        message.toLowerCase().includes("not found");

      if (isBucketNotFound) {
        // If the bucket doesn't exist, show the available buckets (if allowed),
        // so you can set NEXT_PUBLIC_SUPABASE_PROJECTS_BUCKET correctly.
        try {
          const { data: buckets } = await supabase.storage.listBuckets();
          const available = Array.isArray(buckets)
            ? buckets.map((b: any) => b.name).join(", ")
            : "";

          toast({
            title: "Storage bucket not found",
            description:
              `Tried: "${PROJECTS_BUCKET}". ` +
              `Create this bucket in Supabase Storage or set NEXT_PUBLIC_SUPABASE_PROJECTS_BUCKET. ` +
              (available ? `Available: ${available}` : ""),
            variant: "destructive",
          });
          return;
        } catch {
          // fall through to generic toast
        }
      }

      toast({
        title: "Error",
        description: message,
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
      short_description: "",
      website_url: "",
      logo_url: "",
      published: true,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (!formData.title.trim()) {
        toast({
          title: "Missing title",
          description: "Please enter a project title.",
          variant: "destructive",
        });
        return;
      }

      if (!formData.website_url.trim()) {
        toast({
          title: "Missing URL",
          description: "Please enter the project website URL.",
          variant: "destructive",
        });
        return;
      }

      if (!formData.logo_url.trim()) {
        toast({
          title: "Missing logo",
          description: "Please upload a project logo image.",
          variant: "destructive",
        });
        return;
      }

      // DB column is `info`. We save the admin "short_description" input into `info`
      // to avoid depending on a new database column.
      const payload = {
        title: formData.title,
        info: formData.short_description || null,
        website_url: formData.website_url || null,
        logo_url: formData.logo_url || null,
        published: !!formData.published,
      };

      if (editingId) {
        const { error } = await supabase
          .from("projects" as any)
          .update(payload as any)
          .eq("id", editingId);

        if (error) throw error;
        toast({
          title: "Success",
          description: payload.published
            ? "Project updated successfully and published"
            : "Project updated successfully (not published)",
        });
      } else {
        const { error } = await supabase
          .from("projects" as any)
          .insert([payload] as any);

        if (error) throw error;
        toast({
          title: "Success",
          description: payload.published
            ? "Project created and published successfully"
            : "Project created successfully (not published)",
        });
      }

      setDialogOpen(false);
      resetForm();
      fetchProjects();
    } catch (error) {
      const message = formatSupabaseError(error) || "Failed to save project";
      toast({
        title: "Error",
        description: message,
        variant: "destructive",
      });
    }
  };

  const handleEdit = (p: Project) => {
    setEditingId(p.id);
    setFormData({
      title: p.title || "",
      short_description: p.short_description || p.info || "",
      website_url: p.website_url || "",
      logo_url: p.logo_url || "",
      published: !!p.published,
    });
    setDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this project?")) return;

    try {
      const { error } = await supabase
        .from("projects" as any)
        .delete()
        .eq("id", id);

      if (error) throw error;

      toast({ title: "Success", description: "Project deleted successfully" });
      fetchProjects();
    } catch (error) {
      const message = formatSupabaseError(error) || "Failed to delete project";
      toast({
        title: "Error",
        description: message,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Projects</h2>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button
              onClick={resetForm}
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Project
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingId ? "Edit Project" : "Create Project"}</DialogTitle>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="title">Project Title</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
                  required
                />
              </div>

              <div>
                <Label htmlFor="website_url">Project URL</Label>
                <Input
                  id="website_url"
                  placeholder="https://example.com"
                  type="url"
                  value={formData.website_url}
                  onChange={(e) => setFormData((prev) => ({ ...prev, website_url: e.target.value }))}
                />
              </div>

              <div>
                <Label htmlFor="short_description">Short Description (Recent Projects)</Label>
                <Textarea
                  id="short_description"
                  value={formData.short_description}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      short_description: e.target.value,
                    }))
                  }
                  rows={4}
                />
              </div>

              <div>
                <Label htmlFor="logo">Logo</Label>
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <Input
                      id="logo"
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
                      onClick={() => document.getElementById("logo")?.click()}
                    >
                      <Upload className="h-4 w-4 mr-2" />
                      {uploading ? "Uploading..." : "Upload"}
                    </Button>
                  </div>

                  {formData.logo_url ? (
                    <div className="relative w-full h-40 rounded-md overflow-hidden border bg-background flex items-center justify-center">
                      <img
                        src={formData.logo_url}
                        alt="Logo preview"
                        className="h-full w-auto object-contain"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="p-4 rounded-md border border-dashed text-muted-foreground flex items-center gap-2">
                      <ImageIcon className="h-4 w-4" />
                      No logo uploaded yet
                    </div>
                  )}

                  <Input
                    placeholder="Or paste image URL"
                    value={formData.logo_url}
                    onChange={(e) => setFormData((prev) => ({ ...prev, logo_url: e.target.value }))}
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="published"
                  checked={formData.published}
                  onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, published: checked }))}
                />
                <Label htmlFor="published">Publish project on website</Label>
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
          {projects.length === 0 ? (
            <Card className="p-8 text-center text-muted-foreground">
              No projects yet. Create your first one!
            </Card>
          ) : (
            projects.map((p) => (
              <Card key={p.id} className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 flex items-start gap-4">
                    {p.logo_url ? (
                      <div className="w-24 h-16 rounded-md overflow-hidden border bg-background flex items-center justify-center">
                        <img
                          src={p.logo_url}
                          alt={`${p.title} logo`}
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      </div>
                    ) : null}

                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <h3 className="text-xl font-bold">{p.title}</h3>
                        {p.published ? (
                          <Badge className="bg-primary">Published</Badge>
                        ) : (
                          <Badge variant="outline">Draft</Badge>
                        )}
                      </div>

                      {p.website_url ? (
                        <p className="text-sm text-muted-foreground mb-3">
                          Website:{" "}
                          <a
                            href={p.website_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            {p.website_url}
                          </a>
                        </p>
                      ) : null}

                      {((p.short_description ?? p.info) ? (
                        <p className="text-sm text-muted-foreground">
                          {p.short_description ?? p.info}
                        </p>
                      ) : null)}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" onClick={() => handleEdit(p)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => handleDelete(p.id)}>
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

