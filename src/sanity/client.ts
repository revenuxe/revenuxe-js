import "server-only";
import { createClient } from "next-sanity";

const projectId = process.env.SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET || "production";
const apiVersion = process.env.SANITY_API_VERSION || "2023-01-01";

export function getSanityClient() {
  if (!projectId) {
    throw new Error(
      "Missing SANITY_PROJECT_ID env var. Set it to run the Sanity-powered blog."
    );
  }

  return createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
    token: process.env.SANITY_TOKEN,
  });
}

