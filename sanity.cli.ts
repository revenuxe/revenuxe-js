import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  // Prefer Studio-prefixed vars for Sanity tooling, with fallback to existing vars.
  projectId:
    process.env.SANITY_STUDIO_PROJECT_ID ||
    process.env.SANITY_PROJECT_ID ||
    "",
  dataset:
    process.env.SANITY_STUDIO_DATASET ||
    process.env.SANITY_DATASET ||
    "production",
});

