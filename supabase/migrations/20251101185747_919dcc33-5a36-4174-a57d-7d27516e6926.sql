-- Add website_url column to case_studies table
ALTER TABLE case_studies ADD COLUMN IF NOT EXISTS website_url text;