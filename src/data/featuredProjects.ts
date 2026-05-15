export type FeaturedProject = {
  id: string;
  title: string;
  info: string;
  short_description: string;
  logo_url: string;
  website_url: string | null;
  published: boolean;
  created_at: string;
  project_type: string;
};

export const doorifixProject: FeaturedProject = {
  id: "doorifix",
  title: "Doorifix",
  info: "A Doorstep Appliance Repair Platform.",
  short_description: "A Doorstep Appliance Repair Platform.",
  logo_url: "/projects/doorifix-logo.webp",
  website_url: null,
  published: true,
  created_at: "2026-05-15T00:00:00.000Z",
  project_type: "Website",
};

export const featuredProjects: FeaturedProject[] = [doorifixProject];

export function prependFeaturedProjects<T extends { id?: string; title?: string }>(
  projects: T[],
) {
  const existingKeys = new Set(
    projects.map((project) => (project.id || project.title || "").toLowerCase()),
  );

  const missingFeatured = featuredProjects.filter(
    (project) =>
      !existingKeys.has(project.id.toLowerCase()) &&
      !existingKeys.has(project.title.toLowerCase()),
  );

  return [...missingFeatured, ...projects];
}
