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
import { Plus, Edit, Trash2, Upload, Sparkles, Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image_url: string | null;
  author: string;
  category: string;
  published: boolean;
  created_at: string;
}

export const ArticlesManager = () => {
  const { toast } = useToast();
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [aiDialogOpen, setAiDialogOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    image_url: "",
    author: "",
    category: "",
    published: false,
  });
  const [aiFormData, setAiFormData] = useState({
    topic: "",
    keywords: "",
    areas: "",
  });

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const { data, error } = await supabase
        .from("articles" as any)
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setArticles((data as any) || []);
    } catch (error) {
      console.error("Error fetching articles:", error);
    } finally {
      setLoading(false);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
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
        .from("articles")
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from("articles")
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const slug = formData.slug || generateSlug(formData.title);

    try {
      if (editingId) {
        const { error } = await supabase
          .from("articles" as any)
          .update({ ...formData, slug } as any)
          .eq("id", editingId);

        if (error) throw error;

        toast({
          title: "Success",
          description: "Article updated successfully",
        });
      } else {
        const { error } = await supabase
          .from("articles" as any)
          .insert([{ ...formData, slug }] as any);

        if (error) throw error;

        toast({
          title: "Success",
          description: "Article created successfully",
        });
      }

      setDialogOpen(false);
      resetForm();
      fetchArticles();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to save article",
        variant: "destructive",
      });
    }
  };

  const handleEdit = (article: Article) => {
    setEditingId(article.id);
    setFormData({
      title: article.title,
      slug: article.slug,
      excerpt: article.excerpt,
      content: article.content,
      image_url: article.image_url || "",
      author: article.author,
      category: article.category,
      published: article.published,
    });
    setDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this article?")) return;

    try {
      const { error } = await supabase.from("articles" as any).delete().eq("id", id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Article deleted successfully",
      });

      fetchArticles();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete article",
        variant: "destructive",
      });
    }
  };

  const resetForm = () => {
    setEditingId(null);
    setFormData({
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      image_url: "",
      author: "",
      category: "",
      published: false,
    });
  };

  const handleGenerateWithAI = async () => {
    if (!aiFormData.topic || !aiFormData.keywords) {
      toast({
        title: "Error",
        description: "Please fill in blog topic and target keywords",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    try {
      const { data, error } = await supabase.functions.invoke('generate-blog', {
        body: {
          topic: aiFormData.topic,
          keywords: aiFormData.keywords,
          areas: aiFormData.areas,
        }
      });

      if (error) throw error;

      if (data.error) {
        toast({
          title: "Error",
          description: data.error,
          variant: "destructive",
        });
        return;
      }

      // Populate the form with generated content
      setFormData({
        title: data.title,
        slug: data.slug,
        author: "Revenuxe Team",
        category: data.category,
        excerpt: data.excerpt,
        content: data.content,
        image_url: "",
        published: false,
      });

      setAiDialogOpen(false);
      setDialogOpen(true);
      toast({
        title: "Success",
        description: "Article generated successfully! Review and publish when ready.",
      });
    } catch (error: any) {
      console.error('Error generating article:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to generate article. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Articles</h2>
        <div className="flex gap-2">
          <Dialog open={aiDialogOpen} onOpenChange={setAiDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline">
                <Sparkles className="h-4 w-4 mr-2" />
                AI Blog Generator
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  AI Blog Generator
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="ai-topic">Blog Topic*</Label>
                  <Textarea
                    id="ai-topic"
                    placeholder="e.g., Complete Guide to Modular Kitchen Design in Bangalore 2025"
                    value={aiFormData.topic}
                    onChange={(e) => setAiFormData({ ...aiFormData, topic: e.target.value })}
                    className="min-h-[80px]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ai-keywords">Target Keywords*</Label>
                  <Textarea
                    id="ai-keywords"
                    placeholder="e.g., modular kitchen bangalore, kitchen design cost, best kitchen designers"
                    value={aiFormData.keywords}
                    onChange={(e) => setAiFormData({ ...aiFormData, keywords: e.target.value })}
                    className="min-h-[80px]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ai-areas">Target Bangalore Areas</Label>
                  <Input
                    id="ai-areas"
                    placeholder="Whitefield, HSR Layout, Koramangala"
                    value={aiFormData.areas}
                    onChange={(e) => setAiFormData({ ...aiFormData, areas: e.target.value })}
                  />
                </div>
                <Button 
                  onClick={handleGenerateWithAI} 
                  className="w-full"
                  disabled={isGenerating}
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Generating SEO Blog...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-4 w-4" />
                      Generate SEO Blog with AI
                    </>
                  )}
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  AI will create a 2500+ word SEO-optimized blog with tables, FAQs, and keyword optimization
                </p>
              </div>
            </DialogContent>
          </Dialog>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={resetForm}>
                <Plus className="h-4 w-4 mr-2" />
                Add Article
              </Button>
            </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingId ? "Edit Article" : "Create Article"}
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
                    setFormData((prev) => ({
                      ...prev,
                      title,
                      slug: generateSlug(title),
                    }));
                  }}
                  required
                />
              </div>

              <div>
                <Label htmlFor="slug">Slug (URL)</Label>
                <Input
                  id="slug"
                  value={formData.slug}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, slug: e.target.value }))
                  }
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="author">Author</Label>
                  <Input
                    id="author"
                    value={formData.author}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, author: e.target.value }))
                    }
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Input
                    id="category"
                    value={formData.category}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, category: e.target.value }))
                    }
                    required
                    placeholder="e.g., Marketing, SEO, Social Media"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="excerpt">Excerpt</Label>
                <Textarea
                  id="excerpt"
                  value={formData.excerpt}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, excerpt: e.target.value }))
                  }
                  required
                  rows={2}
                  placeholder="Short summary of the article (150-200 characters)"
                />
              </div>

              <div>
                <Label htmlFor="content">Content (Markdown supported)</Label>
                <Textarea
                  id="content"
                  value={formData.content}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, content: e.target.value }))
                  }
                  required
                  rows={12}
                  placeholder="Write your article content here..."
                  className="font-mono text-sm"
                />
              </div>

              <div>
                <Label htmlFor="image">Featured Image</Label>
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
                    <div className="relative w-full h-48 rounded-md overflow-hidden border">
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

              <div className="flex items-center space-x-2">
                <Switch
                  id="published"
                  checked={formData.published}
                  onCheckedChange={(checked) =>
                    setFormData((prev) => ({ ...prev, published: checked }))
                  }
                />
                <Label htmlFor="published">Publish article</Label>
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
      </div>

      {loading ? (
        <div className="text-center py-8">Loading...</div>
      ) : (
        <div className="grid gap-4">
          {articles.length === 0 ? (
            <Card className="p-8 text-center text-muted-foreground">
              No articles yet. Create your first one!
            </Card>
          ) : (
            articles.map((article) => (
              <Card key={article.id} className="p-6">
                <div className="flex items-start gap-4">
                  {article.image_url && (
                    <div className="w-32 h-24 rounded-md overflow-hidden flex-shrink-0">
                      <img
                        src={article.image_url}
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold">{article.title}</h3>
                      {article.published ? (
                        <Badge className="bg-primary">Published</Badge>
                      ) : (
                        <Badge variant="outline">Draft</Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      By {article.author} • {article.category}
                    </p>
                    <p className="text-sm mb-2">{article.excerpt}</p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(article.created_at).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleEdit(article)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(article.id)}
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
