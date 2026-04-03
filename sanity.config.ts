import { defineConfig } from "sanity";
import { post } from "./sanity/schemas/post";

const projectId = process.env.SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET || "production";

if (!projectId) {
  throw new Error(
    "Missing SANITY_PROJECT_ID env var. Set it before running Sanity Studio."
  );
}

export default defineConfig({
  projectId,
  dataset,
  title: "Revenuxe Blog",
  plugins: [],
  schema: {
    types: [post],
  },
});

