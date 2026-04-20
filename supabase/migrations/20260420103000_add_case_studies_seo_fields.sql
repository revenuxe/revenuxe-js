-- Add SEO support fields and slug URLs for case studies
ALTER TABLE public.case_studies
ADD COLUMN IF NOT EXISTS slug text,
ADD COLUMN IF NOT EXISTS meta_title text,
ADD COLUMN IF NOT EXISTS meta_description text,
ADD COLUMN IF NOT EXISTS meta_keywords text;

-- Backfill slug for existing rows using title first, then id as fallback
UPDATE public.case_studies
SET slug = COALESCE(
  NULLIF(
    trim(both '-' FROM regexp_replace(lower(COALESCE(title, '')), '[^a-z0-9]+', '-', 'g')),
    ''
  ),
  id::text
)
WHERE slug IS NULL OR slug = '';

-- Ensure future slugs are unique and queryable
CREATE UNIQUE INDEX IF NOT EXISTS case_studies_slug_unique_idx
ON public.case_studies (slug);
