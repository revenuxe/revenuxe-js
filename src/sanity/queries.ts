import { getSanityClient } from "@/sanity/client";
import { withRetry } from "@/lib/fetchWithRetry";

export type SanityPostListItem = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  image_url: string | null;
  author: string;
  category: string | null;
  created_at: string;
};

export type SanityPostDetail = SanityPostListItem & {
  content: any[] | null;
};

const publishedPostsQuery = /* groq */ `
  *[_type == "post" && published == true]
  | order(_createdAt desc) [0...$limit]{
    _id,
    title,
    "slug": slug.current,
    excerpt,
    "image_url": coverImage.asset->url,
    author,
    category,
    _createdAt
  }
`;

const publishedPostBySlugQuery = /* groq */ `
  *[_type == "post" && published == true && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    excerpt,
    "image_url": coverImage.asset->url,
    author,
    category,
    _createdAt,
    content
  }
`;

export async function fetchPublishedPosts(limit = 50) {
  try {
    const sanityClient = getSanityClient();
    const res = await withRetry(() =>
      sanityClient.fetch(publishedPostsQuery, { limit }),
    );

    return (res || []).map((p: any): SanityPostListItem => ({
      id: p._id,
      title: p.title,
      slug: p.slug,
      excerpt: p.excerpt ?? null,
      image_url: p.image_url ?? null,
      author: p.author || "Revenuxe Team",
      category: p.category ?? null,
      created_at: p._createdAt,
    }));
  } catch (err) {
    console.error("[fetchPublishedPosts] failed after retries:", err);
    return [];
  }
}

export async function fetchPublishedPostBySlug(slug: string) {
  try {
    const sanityClient = getSanityClient();
    const p = await withRetry(() =>
      sanityClient.fetch(publishedPostBySlugQuery, { slug }),
    );
    if (!p) return null;

    return {
      id: p._id,
      title: p.title,
      slug: p.slug,
      excerpt: p.excerpt ?? null,
      image_url: p.image_url ?? null,
      author: p.author || "Revenuxe Team",
      category: p.category ?? null,
      created_at: p._createdAt,
      content: p.content ?? null,
    } satisfies SanityPostDetail;
  } catch (err) {
    console.error("[fetchPublishedPostBySlug] failed after retries:", err);
    return null;
  }
}


