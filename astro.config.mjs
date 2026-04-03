import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const repoName = "new-deliverance";
const isProduction = process.env.NODE_ENV === "production";
const base = process.env.PUBLIC_BASE_PATH ?? (isProduction ? `/${repoName}` : "/");
const site = process.env.SITE_URL ?? `https://autonateai.github.io/${repoName}`;

export default defineConfig({
  site,
  base,
  trailingSlash: "always",
  integrations: [sitemap()],
});
