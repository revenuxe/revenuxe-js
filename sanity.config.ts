import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { post } from "./sanity/schemas/post";

const studioEnv = (import.meta as any)?.env || {};

const projectId =
  studioEnv.SANITY_STUDIO_PROJECT_ID ||
  studioEnv.SANITY_PROJECT_ID ||
  process.env.SANITY_STUDIO_PROJECT_ID ||
  process.env.SANITY_PROJECT_ID ||
  "8jmifew9";
const dataset =
  studioEnv.SANITY_STUDIO_DATASET ||
  studioEnv.SANITY_DATASET ||
  process.env.SANITY_STUDIO_DATASET ||
  process.env.SANITY_DATASET ||
  "production";
const apiVersion =
  studioEnv.SANITY_STUDIO_API_VERSION ||
  studioEnv.SANITY_API_VERSION ||
  process.env.SANITY_STUDIO_API_VERSION ||
  process.env.SANITY_API_VERSION ||
  "2023-01-01";

export default defineConfig({
  projectId,
  dataset,
  apiVersion,
  title: "Revenuxe Blog",
  plugins: [structureTool()],
  schema: {
    types: [post],
  },
});

